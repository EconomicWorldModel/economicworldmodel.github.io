# 先用 Luna 跑不训练的预测，再比较预测头

> 实验更新：无需再次调用 Luna 的数值分层与两组 Ridge 训练已完成，见[本轮结果](2026-09-09-polymarket-no-call-results.md)。Luna full 已完成 200 条 validation，MSE 0.007784、skill -6.30%；不能据此认定精度已高或无需训练，见[数据波动与任务难度复查](2026-09-09-polymarket-luna-difficulty-review.md)。下文命令保留为复运行入口。

现在已经把数据落盘，并写好了两条可运行的路径。两条路径都输入一个盘口过去 10 天的信息，输出未来 7 天的价格。Luna 直接读 prompt 返回 JSON；开源 LLM 则先提取 hidden state，再训练一个七维预测头。Luna 这条路径不需要训练集，也不需要安装 Transformers。

## 当前实验安排：先整理已有结果，不重复调用 full Luna

本次改为主要展示 RMSE，同时报告 MAE，不需要重新生成预测。已有 `runs/polymarket_luna_validation_200/metrics.json` 已包含二者；如果需要统一评分版本或增加分层，只读取保存的预测与标签重新评分。更换展示指标不改变原 prompt、样本或模型输出。

| 本轮报告项 | Luna full | Persistence | 如何解释 |
| --- | ---: | ---: | --- |
| RMSE（价格百分点） | 8.82 | 8.56 | 主要展示，恢复到价格单位，对大误差敏感 |
| MAE（价格百分点） | 4.78 | 4.55 | 平均绝对偏离，补充解释 |
| MSE（原始价格平方） | 0.007784 | 0.007323 | 保留原分数，并与训练目标对应 |
| MSE skill | -6.30% | 0% | 定义仍为 1 − MSE_model / MSE_persistence，不替换成 RMSE 比值 |

价格百分点 = 原始价格误差 ×100，不是相对涨跌百分比。先在同一批有效评分点上计算 pooled MSE，再开平方得到 pooled RMSE；不能把各窗口 RMSE 的平均值当作同一指标。整体、逐预测日及分层结果分别计算，始终对齐样本与 mask。另保留等 market / parent event 的宏平均 MSE，明确聚合方式。

训练仍使用 masked MSE，标签全部有效时等于 MSE；validation 选 checkpoint 仍使用相同评分点上的 pooled MSE。因为平方根单调，改用对应 pooled RMSE 不会改变模型或 checkpoint 排名。此次没有改用 MAE loss，也没有因此启动训练。

| 下一步 | 使用哪些现成内容 | 是否重新调用 Luna | 交付 |
| --- | --- | --- | --- |
| 整理当前成绩 | 已有 predictions、labels、metrics | 不需要 | RMSE/MAE 价格百分点、MSE skill、覆盖率、逐日结果 |
| 补充分层报告 | 原预测与预测前价格、历史波动、成交规模、价格年龄 | 不需要 | 每层样本数、两模型误差与配对差异；已有事件 bootstrap 保留 |
| 训练便宜的数值对照 | train 训练，validation 选型，保持同一 200 条比较清单 | 不需要 | 价格/完整量价的线性、Ridge 或 DLinear 对照，检查有无可学习增量 |
| 检查 Luna 输入增益 | 同一 200 条，新增 price-only 和 price-question 两组 | 需要，仅运行新增组 | 与已有 full 组比较；冻结其余模型设置并记录调用时间和成本 |
| 最终 test | 选定模型、prompt 和设置后使用固定 test 清单 | 若评测 Luna，需要新的 test 预测 | 一次最终评价；不能直接复用 validation 预测 |

前两项和小数值模型对照现已完成；下一步可训练冻结 LLM 数值头，并另行安排 Luna 输入消融。训练头的 validation 选型使用 `runs/polymarket_head_ready_v1/validation_tuning/` 的 5,420 条，排除固定 pilot 的全部 parent events，避免同事件调参与比较混用；不要再次运行完全相同的 full 组来“获得 RMSE”。只有明确要测随机性或重复性时，才单独设计重复调用实验，不能把重复调用当作指标重算。若模型服务版本已变化，后续消融须注明不同调用时间的限制，不能把所有差异都归因于输入。

可以把下面这段交给后续对话：

> 请使用已有 Luna full 200 条 validation 的 predictions.jsonl 与对应标签整理评测报告，不重新调用模型。主要展示 RMSE 和 MAE 的价格百分点，同时保留 MSE、MSE skill、覆盖率和逐日结果；在同一批样本上按预测前价格位置、历史波动、成交规模和价格年龄分层，并与 persistence 对齐比较。不要用未来大波动筛选新的评测清单。完成后再单独安排小数值模型训练和 Luna 输入消融，test 暂不运行。

## 数据在哪里，分别放了什么

数据根目录：`runs/polymarket_forecast_v1/`。

| 划分 | 完整样本数 | 小样本数 | 小样本中的 parent event 数 |
| --- | ---: | ---: | ---: |
| train | 212,393 | 200 | 149 |
| validation | 13,831 | 200 | 124 |
| test | 137,094 | 1,000 | 491 |

每个完整划分下有 `inputs.parquet`、`labels.parquet` 和 `prompts.parquet`。完整 prompt 现在也逐条保存：`input_prompt` 用于冻结 LLM 编码，`training_free_prompt` 在同一历史内容后加上七个价格的 JSON 输出要求；两列均不含未来标签。`sample_id` 与结构化输入、标签一一对应。运行脚本仍从结构化输入调用同一个模板生成文本，导出检查会逐条验证两者相同。仅完整量价的 full 输入保存全量 prompt；price-only 和 price-question 对照按需生成。小样本位于 `pilot/{train,validation,test}/`，分别提供 `inputs.jsonl`、`labels.scorer_only.jsonl`、`manifest.jsonl` 和一份完整的 `example_prompt.txt`。完整数据使用 Parquet 节省空间；小样本使用 JSONL，方便检查和逐条调用。三份完整 prompt 文件合计约 92.5 MB，共 363,318 行，每行包含两种用途的完整文本；导出和逐条比对记录见 `runs/polymarket_forecast_v1/prompt_export_report.json`。

`inputs` 保存问题、价格对应的 outcome、预测时间，以及 `features[10][11]` 和同形状的 `feature_mask`。11 列依次是价格、日成交额、成交笔数、过去 7/30 日成交额、相对成交量、异常成交量、事件内份额、盘口在平台内份额、事件在平台内份额、价格年龄。历史行按 Day -9 到 Day 0 排列。成交额、笔数、相对成交量取 log1p；价格年龄先换算为小时再取 log1p；异常量保留符号，份额保留原比例。不可用的数值填 0，但对应 mask=false；转成 prompt 时显示 MISSING。文本使用 9 位有效数字，避免把很小的平台份额四舍五入为零。没有使用全数据拟合的归一化参数。

`labels` 单独保存未来七天的 `target_price`、`target_mask`、评分分组字段和最后一个历史价格。当前来自 dense 窗口的七个标签都有效，因此 masked MSE 等于普通 MSE。未来成交额、份额和异常活动没有放进输入，也不是本轮预测目标。

恢复了原始时间划分，剔除 1,697 条跨越时间边界的窗口。完整历史与七天标签都位于所属划分；三个划分的 parent event ID 没有交集。这里的 event 分组还不是人工合并的语义事件族。同一事件内部的窗口仍有重叠，不能把所有窗口视作独立实验。

小样本是对排序后的 ID 使用固定种子 `20260909` 均匀抽样，没有按未来变化筛选。它保留了“窗口多的事件更容易入选”的分布，并非主题或活跃度分层抽样；正式论文仍需检查覆盖和事件层面的误差。测试清单已固定，但本轮没有运行测试集模型评分。

## 原 Luna 调用命令：仅在明确需要新预测时执行

以下是已完成的首轮调用说明，保留用于复现；当前整理 RMSE/MAE 不执行这段调用任务：

> 请阅读 docs/2026-09-09-polymarket-training-handoff.md，先用现有脚本调用 gpt-5.6-luna，对固定 validation 输入的前 5 条做 training-free 预测。使用 full 输入，不改 prompt，不读取标签辅助回答。预测子进程只接收单条历史 prompt；保存模型输出后，再调用独立评分脚本读取标签，报告 MSE、MAE、相对 persistence 的 skill、有效输出覆盖率和调用耗时。模型不可用时报告实际错误，不悄悄替换模型。先检查这 5 条的调用与格式，再运行完整 200 条 validation；测试集留到输入和设置确定后使用。

在仓库根目录运行：

```bash
export PYTHONPATH="$PWD/src"
python scripts/run_polymarket_training_free.py \
  --inputs runs/polymarket_forecast_v1/pilot/validation/inputs.jsonl \
  --out-dir runs/polymarket_luna_validation_5 \
  --model gpt-5.6-luna --arm full --limit 5

python scripts/score_polymarket_forecast.py \
  --labels runs/polymarket_forecast_v1/pilot/validation/labels.scorer_only.jsonl \
  --selected-inputs runs/polymarket_luna_validation_5/selected_inputs.jsonl \
  --predictions runs/polymarket_luna_validation_5/predictions.jsonl \
  --out-dir runs/polymarket_luna_validation_5
```

预览而不调用模型：在预测命令末尾加 `--prepare-only`。本轮预览已放在 `reports/polymarket_forecast_v1/luna_preview/prompts.jsonl`。预测输出为 `{"predicted_price":[七个数]}`；运行器再补上样本 ID 和预测时间，用来与标签对齐。

运行全部 200 条 validation：改为 `--limit 0`，并使用新输出目录。最终测试：把输入和标签路径中的 `validation` 改为 `test`，使用新目录和 `--limit 0`。重复相同命令会跳过已完成样本；改变模型、输入形式或样本数时必须使用新目录。默认只跑 5 条，避免一开始提交上千次调用。

预测运行器不会加载标签。每条预测启动临时目录中的 Codex 子进程，并检查日志；发现工具调用就不接纳该回答。临时目录和只读模式不是文件读取隔离保证，真正的实验约束是只给历史 prompt、禁止工具并检查实际日志。历史问题文本仍可能唤起模型预训练时见过的信息，因此本轮是历史回测，不能声称消除了模型记忆污染。

`--arm full` 使用完整量价和问题；`price-question` 使用价格与问题；`price-only` 只用匿名价格。比较时使用同一输入文件和同样的 limit。其他结果不能作为这批样本的直接对照。

数值对照用同一预测入口，把 `--method` 换成 `persistence` 或 `last-step-drift`，不调用 LLM。固定 200 条 validation 的 persistence 已运行，结果见 `reports/polymarket_forecast_v1/persistence_validation/metrics.json`。评分按事先选定的输入清单计算覆盖率，不会只对成功输出的 ID 悄悄缩小评测集合。

## 训练预测头怎么运行

第一版只训练预测头，冻结 LLM。这样同一份 hidden state 可以缓存复用，避免每个 epoch 重复跑整个 LLM。结构为：

```text
完整历史 prompt → tokenizer → 冻结的 decoder LLM
→ 最后一个有效输入 token 的 hidden state [d]
→ Linear(d,128) → GELU → Linear(128,7) → Sigmoid
→ 未来七天价格
```

标签只进入 loss。默认 AdamW、学习率 0.001、batch 32、最多 20 epochs；validation MSE 连续 3 次不改善即停止，保存 validation 最好的预测头。这些是初始设置，不是已经验证最优的参数。本轮没有加入 LoRA，也没有训练 LLM 本体。

安装训练依赖，并指定你要使用的本地 decoder 模型目录或 Hugging Face 模型 ID：

```bash
python -m pip install -e '.[forecast]'
export PYTHONPATH="$PWD/src"
export FORECAST_MODEL=/absolute/path/to/your/decoder-model

for split in train validation test; do
  python scripts/train_polymarket_head.py encode \
    --inputs "runs/polymarket_forecast_v1/pilot/$split/inputs.jsonl" \
    --model "$FORECAST_MODEL" --arm full \
    --output "runs/polymarket_head_v1/$split.pt"
done

python scripts/train_polymarket_head.py train \
  --train-cache runs/polymarket_head_v1/train.pt \
  --validation-cache runs/polymarket_head_v1/validation.pt \
  --train-labels runs/polymarket_forecast_v1/pilot/train/labels.scorer_only.jsonl \
  --validation-labels runs/polymarket_forecast_v1/pilot/validation/labels.scorer_only.jsonl \
  --out-dir runs/polymarket_head_v1/model

python scripts/train_polymarket_head.py predict \
  --checkpoint runs/polymarket_head_v1/model/best_head.pt \
  --cache runs/polymarket_head_v1/test.pt \
  --output runs/polymarket_head_v1/test.predictions.jsonl

python scripts/score_polymarket_forecast.py \
  --labels runs/polymarket_forecast_v1/pilot/test/labels.scorer_only.jsonl \
  --selected-inputs runs/polymarket_forecast_v1/pilot/test/inputs.jsonl \
  --predictions runs/polymarket_head_v1/test.predictions.jsonl \
  --out-dir runs/polymarket_head_v1/test_score
```

上面是小样本训练入口；正式训练将 train/validation 的输入和标签换成对应完整 Parquet，重新编码并使用新目录。测试输入的冻结编码不读取标签，也不更新参数。`encode` 默认 batch 4，可按显存调整；不要假定整个训练集缓存或模型都适合当前 GPU。脚本不截断历史，超过默认 8,192 token 时直接提示调整。这里只支持能通过 AutoModel 返回 `last_hidden_state` 的 decoder 模型，按普通文本编码，未使用聊天模板；确定模型后应固定模型版本和 tokenizer。相关接口依据 [Transformers Auto Classes](https://huggingface.co/docs/transformers/model_doc/auto) 与 [模型加载文档](https://huggingface.co/docs/transformers/main_classes/model)。

## 本轮实际验证到哪里

- 全量输入/标签、时间边界、重复 ID、事件交集检查：`reports/polymarket_forecast_v1/dataset_acceptance.json`。
- 九项单元/集成测试覆盖 loss、评分、padding pooling、prompt 特征与预测头训练/保存/加载。
- 用本地随机初始化的小型 GPT-2 模型编码了两条真实完整 prompt，验证 tokenizer → backbone → pooling 的接口；这是软件检查，不是预训练 LLM 的预测效果。
- 固定 validation 上的 persistence 运行与独立评分、Luna 五条 prompt 预览已完成。
- 后续对话已完成指定 Luna 的 5 条与 200 条 validation；两组 Ridge 数值模型也已训练；实际预训练 LLM 预测头仍未训练，test 未运行。

重建数据与检查：

```bash
PYTHONPATH=src python scripts/build_polymarket_forecast_dataset.py
PYTHONPATH=src python scripts/export_polymarket_full_prompts.py
PYTHONPATH=src python scripts/check_polymarket_forecast_dataset.py
PYTHONPATH=src pytest -q tests/test_polymarket_forecasting.py tests/test_polymarket_path_metrics.py
```

这一步把“准备训练和测试”拆成了可检查的三件事：模型实际看到什么、答案在哪里、预测完成后如何评分。三者分开之后，training-free 与训练预测头才有可比较的输入和结果。
