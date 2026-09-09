# 不再调用 Luna 的评测与数值训练结果

本轮复用已有 Luna full 200 条预测，完成逐日、预测前分层和数值 Ridge 对照。新增 LLM 调用为 0，test 未评分。结果都是 validation 上的探索性比较，不是最终测试成绩。

## 同一批 200 条比较

| 方法 | RMSE（价格百分点） | MAE（价格百分点） | MSE skill |
| --- | ---: | ---: | ---: |
| persistence | 8.557 | 4.549 | +0.00% |
| luna_full | 8.823 | 4.782 | -6.30% |
| ridge_price | 8.662 | 4.585 | -2.46% |
| ridge_full | 8.633 | 4.562 | -1.78% |

四组均为 200/200 有效输出、1,400 个评分点。报告使用 pooled RMSE，不是逐窗口 RMSE 的平均。MAE 补充解释，MSE skill 的分母始终是相同样本的 persistence MSE。

## Ridge 实际怎么训练

训练集 212,393 条；价格组使用 10 个价格，完整量价组使用 10×11 特征及 110 个缺失标记，共 220 个输入。问题文本没有进入 Ridge，因此与 Luna full 的比较包含模型形式和文本使用方式差异，不能解释成纯模型架构消融。

StandardScaler 只在 train 上拟合；Ridge 预测未来七天价格相对最后价格的残差，再加回最后价格并截断到 [0,1]。训练目标是平方误差加 L2 正则。alpha 在 [1,10,100,1000,10000] 中选择，两组均选中 1000。

选型使用排除全部 124 个 pilot parent events 后的 5,420 条 validation。固定 200 条只用于比较；这仍是此前已经看过结果的验证集，不能升级为未见测试集。两组模型均保存并重新加载，检查预测一致。

完整量价 Ridge 比价格 Ridge 的误差略低，但均未超越 persistence。目前不能认定交易特征已有可靠预测增益，更不能据此保证 LLM 微调有效。

实现参考：[Ridge](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html)、[StandardScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html)。

## Luna 的预测前分层

分组只使用预测前特征：最后价格、十天价格标准差、最后完整日的成交额与价格年龄；不按未来波动筛选。

| 维度 | 分组 | 样本数 | RMSE（百分点） | skill |
| --- | --- | ---: | ---: | ---: |
| price_position | boundary <=0.05 or >=0.95 | 85 | 1.44 | -19.21% |
| price_position | interior | 115 | 11.57 | -6.17% |
| history_volatility | 1pp < std <=5pp | 96 | 7.31 | -9.13% |
| history_volatility | std <=1pp | 49 | 0.97 | -5.35% |
| history_volatility | std >5pp | 55 | 13.75 | -4.96% |
| daily_volume | 100-1000 USD | 72 | 7.39 | -6.76% |
| daily_volume | 1000-10000 USD | 62 | 9.26 | +7.89% |
| daily_volume | <100 USD | 44 | 9.46 | -20.36% |
| daily_volume | >=10000 USD | 22 | 10.40 | -24.11% |
| price_age | 1-6 hours | 98 | 8.65 | +2.21% |
| price_age | <1 hour | 66 | 9.89 | -9.35% |
| price_age | >=6 hours | 36 | 7.02 | -43.33% |

日成交额 1,000–10,000 美元组和价格年龄 1–6 小时组的 Luna skill 点估计为正，但相对 persistence 的配对误差区间均跨零，不能宣布这两组稳定有效。成交规模与可预测性的因果关系未被检验。

每组保存按 parent event 重抽样 2,000 次的配对 MSE 差异区间；不同维度的组互相重叠，未做多重比较校正，小组不作确定性结论。详细分层、逐日结果、宏平均与逐点评分见 `reports/polymarket_no_call_v1/`。

## 中文 prompt 与下一步

已导出带十行真实历史的中文阅读示例：`reports/polymarket_no_call_v1/prompt_zh_example.txt`。当前 Luna 成绩使用英文原版；中文翻译未运行，不能声称两种语言效果相同。

无需新调用的当前工作已完成。下一步可在相同划分上训练冻结 LLM 的数值头；对照保留 persistence、两组 Ridge 与已有 Luna full。验证选型使用 `runs/polymarket_head_ready_v1/validation_tuning/` 的 5,420 条，固定 pilot 保留作比较。Luna price-only / price-question 消融仍需新调用，本轮没有运行。test 继续留到设置确定之后。

主题覆盖和跨事件检索尚未完成，本轮分层只覆盖已定义的四个数值维度。
