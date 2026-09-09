# Terra / Sol training-free validation 比较

本报告使用固定 validation pilot 的 200 条样本、1,400 个未来价格点。Terra、Sol 和已有 Luna 均使用相同的英文 `full` prompt、`low` reasoning、`service_tier=fast`，预测子进程逐条接收单条历史 prompt；标签只在预测完成后由独立评分脚本读取。test 未运行。

## 整体结果

RMSE 和 MAE 的单位是价格百分点；skill 定义为 `1 - MSE_model / MSE_persistence`。

| 方法 | RMSE | MAE | MSE skill | 覆盖率 |
| --- | ---: | ---: | ---: | ---: |
| persistence | 8.557 | 4.549 | 0.000% | 100.0% |
| luna_full | 8.823 | 4.782 | -6.299% | 100.0% |
| terra_full | 8.707 | 4.686 | -3.525% | 100.0% |
| sol_full | 8.752 | 4.601 | -4.605% | 100.0% |
| ridge_price | 8.662 | 4.585 | -2.460% | 100.0% |
| ridge_full | 8.633 | 4.562 | -1.781% | 100.0% |

## 结论

Terra 的整体 MSE 为 0.007581，MAE 为 4.686 个价格百分点；Sol 的整体 MSE 为 0.007660，MAE 为 4.601 个价格百分点。两者都没有超过 persistence：Terra skill 为 -3.53%，Sol skill 为 -4.60%。Luna 的 skill 为 -6.30%，Ridge price 和 Ridge full 分别为 -2.46% 与 -1.78%。因此在这批固定 validation 上，三种 LLM 中 Terra 的 MSE/RMSE 最低，Sol 的 MAE 最低；两组 Ridge 中完整量价组误差较低。六组方法整体比较时，persistence 的 MSE/RMSE 和 MAE 均最低。这里是样本内指标排序，不等于模型间差异已达到统计显著，也没有观察到超过 persistence 的整体增益。

前 5 条只用于调用和格式检查，不用于选模：Terra skill 为 -146.996%，Sol skill 为 +20.227%，这说明 5 条结果波动很大，不能作为模型排序依据。

Terra 和 Sol 均完成 200/200 有效输出，全部输出满足七个价格且无工具调用。Terra 日志中有一次可恢复的 TLS stream reconnect，随后成功完成；没有终态失败。模型耗时、逐日结果、四类预测前分层和 parent-event 成组 bootstrap 区间见同目录的机器可读文件。

这些结果属于历史回测，不能排除模型预训练记忆污染；事件窗口之间仍可能相关，分层区间是描述性结果，不作多重比较校正。没有运行 test，也没有重复调用 Luna、重新训练 Ridge 或启动预测头训练。

## 机器可读输出

- `report.json`：完整元数据、整体、逐日和分层结果。
- `overall.csv`：整体比较。
- `by_horizon.csv`：第 1–7 日结果。
- `strata.csv`：价格位置、历史波动、日成交额、价格年龄四类分层及 parent-event bootstrap 区间。
- `point_errors.parquet`：逐点误差。
