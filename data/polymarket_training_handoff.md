# Polymarket 交接：三种 LLM 比较已完成，后续实验待开展

Luna、Terra、Sol 的英文 full training-free 预测均已完成，使用同一 200 条 validation、1,400 个未来价格点。逐日评分、四类预测前分层及两组 Ridge 数值训练也已完成。不再把这些工作列为待执行任务；当前没有新的模型调用需要补跑，test 未运行。

详细结果：[三种 LLM 与数值对照比较](../reports/polymarket_training_free_model_comparison_v1/comparison_zh.md)。网页：[训练交接](https://economicworldmodel.github.io/graph/#forecast-ready)、[六组结果与中英文 prompt](https://economicworldmodel.github.io/graph/#training-free-results)。

## 已有结果

| 方法 | RMSE（价格百分点） | MAE（价格百分点） | MSE skill | 覆盖率 |
| --- | ---: | ---: | ---: | ---: |
| Persistence | 8.557 | 4.549 | +0.00% | 100% |
| Luna full | 8.823 | 4.782 | -6.30% | 100% |
| Terra full | 8.707 | 4.686 | -3.53% | 100% |
| Sol full | 8.752 | 4.601 | -4.60% | 100% |
| Ridge 价格 | 8.662 | 4.585 | -2.46% | 100% |
| Ridge 完整量价 | 8.633 | 4.562 | -1.78% | 100% |

三种 LLM 中，Terra 的 MSE/RMSE 最低，Sol 的 MAE 最低；全部六组中，persistence 的 MSE/RMSE、MAE 均最低。这是当前 validation 上的点估计排序，不代表模型之间差异已达到统计显著。也不能由一次没有增益的实验推断训练必然无用。

Terra 平均耗时 8.767 秒/条，Sol 为 11.310 秒/条，Luna 原运行约 11.316 秒/条。不同运行时间、服务负载和服务版本可能影响比较，不能据此宣布固定的模型速度差异。Terra 有一次恢复成功的 TLS 重连；两种新增模型均无终态失败，日志中无工具调用。未提供实际账单，不报告推测费用。

## 后续尚未完成的工作

| 工作 | 要回答的问题 | 使用的数据与边界 |
| --- | --- | --- |
| 同模型输入消融 | 问题文本和活动特征分别有没有预测增益？ | 固定一个模型，比较 price-only、price-question 与已有 full；不要同时改变模型和输入；需要新增调用，尚未启动 |
| 冻结 LLM 的数值预测头 | 数值输出方式或可训练映射能否改善价格预测？ | 用 train 训练，独立 validation 子集选 checkpoint，同一 pilot 比较；尚未训练实际预训练 LLM 的预测头 |
| 主题覆盖与额外证据 | 哪些任务可能需要新闻或跨事件信息？ | 数值分层已完成；主题覆盖、历史可用证据与检索实验仍待做 |
| 最终 test | 选定方法是否能在未用于调参的数据上保持表现？ | 设置确定后再运行，当前不打开 test 做模型选型 |

优先固定对照和训练目标，再启动其中一项；不因为 Terra 或 Sol 的某个分数略低，就直接选作最终模型。当前不重复调用任何已完成的 full 组，不重新训练同一组 Ridge。

## 固定输入与评分方式

输入：`runs/polymarket_forecast_v1/pilot/validation/inputs.jsonl`。标签：同目录 `labels.scorer_only.jsonl`，只供训练监督或预测完成后的独立评分，不能放进 prompt。

模型读取盘口问题、outcome，以及过去 10 个完整 UTC 日的 11 个量价特征和缺失标记；输出未来 7 日同一 outcome 的价格，范围 0–1。特征为价格、日成交额与笔数、7/30 日成交额、相对与异常成交量、三类成交份额和价格年龄。数值变换与 MISSING 约定保持不变。

三种 LLM 使用同一英文 `prompt(record, 'full', True)`、low reasoning 和 fast service tier；调用记录标注 CLI 0.153.4。无法确认后端服务版本完全相同，不将跨时间比较解释成严格控制的架构实验。中文 prompt 仅是阅读翻译，没有测试中文效果。历史文本可能唤起模型预训练记忆，因此仍属历史回测。

主要展示 pooled RMSE，补充 MAE；二者乘 100 转成价格百分点，不是相对涨跌百分比。保留 MSE 和 `skill = 1 - MSE_model / MSE_persistence`。所有比较对齐样本、horizon 和 mask，另外报告逐日、market / parent event 宏平均与分层结果；不能用逐窗口 RMSE 的平均值替代 pooled RMSE。

## 数据、代码与结果位置

- 完整数据：`runs/polymarket_forecast_v1/{train,validation,test}/`，分别为 212,393 / 13,831 / 137,094 条。每份均有 `inputs.parquet`、独立 `labels.parquet` 和完整 `prompts.parquet`。
- 预测头选型数据：`runs/polymarket_head_ready_v1/validation_tuning/`，5,420 条，排除固定 pilot 的全部 parent events。
- 三种 LLM 原始运行：`runs/polymarket_{luna,terra,sol}_validation_200/`，保留预测、指标、prompt 和耗时日志。
- 最新六组比较：`reports/polymarket_training_free_model_comparison_v1/`，包括 `report.json`、`overall.csv`、`by_horizon.csv`、`strata.csv`、`point_errors.parquet`、`comparison_zh.md`。
- 独立评分：`scripts/score_polymarket_forecast.py`；现有预测足以重算 RMSE/MAE，不需要调用模型。
- 后续预测头入口：`scripts/run_polymarket_head_next.sh`。需先指定 `FORECAST_MODEL`；结构为冻结 decoder LLM → 最后有效 token hidden state → Linear(d,128) → GELU → Linear(128,7) → Sigmoid，loss 为 masked MSE。脚本只比较 validation pilot，不评分 test。

完整数据和训练代码已通过加密包交接；此前包是历史快照，不包含之后新增的 Terra/Sol 结果及本文修订。后续对话以当前工作区和最新比较报告为准。
