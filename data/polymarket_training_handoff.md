# 先用 Luna 跑不训练的预测，再比较预测头

现在已经把数据落盘，并写好了两条可运行的路径。两条路径都输入一个盘口过去 10 天的信息，输出未来 7 天的价格。Luna 直接读 prompt 返回 JSON；开源 LLM 则先提取 hidden state，再训练一个七维预测头。Luna 这条路径不需要训练集，也不需要安装 Transformers。

## 数据在哪里，分别放了什么

数据根目录：`runs/polymarket_forecast_v1/`。

| 划分 | 完整样本数 | 小样本数 | 小样本中的 parent event 数 |
| --- | ---: | ---: | ---: |
| train | 212,393 | 200 | 149 |
| validation | 13,831 | 200 | 124 |
| test | 137,094 | 1,000 | 491 |

每个完整划分下有 `inputs.parquet`、`labels.parquet` 和 `prompts.parquet`。完整 prompt 现在也逐条保存：`input_prompt` 用于冻结 LLM 编码，`training_free_prompt` 在同一历史内容后加上七个价格的 JSON 输出要求；两列均不含未来标签。`sample_id` 与结构化输入、标签一一对应。运行脚本仍从结构化输入调用同一个模板生成文本，导出检查会逐条验证两者相同。仅完整量价的 full 输入保存全量 prompt；price-only 和 price-question 对照按需生成。小样本位于 `pilot/{train,validation,test}/`，分别提供 `inputs.jsonl`、`labels.scorer_only.jsonl`、`manifest.jsonl` 和一份完整的 `example_prompt.txt`。完整数据使用 Parquet 节省空间；小样本使用 JSONL，方便检查和逐条调用。

`inputs` 保存问题、价格对应的 outcome、预测时间，以及 `features[10][11]` 和同形状的 `feature_mask`。11 列依次是价格、日成交额、成交笔数、过去 7/30 日成交额、相对成交量、异常成交量、事件内份额、盘口在平台内份额、事件在平台内份额、价格年龄。历史行按 Day -9 到 Day 0 排列。成交额、笔数、相对成交量取 log1p；价格年龄先换算为小时再取 log1p；异常量保留符号，份额保留原比例。不可用的数值填 0，但对应 mask=false；转成 prompt 时显示 MISSING。文本使用 9 位有效数字，避免把很小的平台份额四舍五入为零。没有使用全数据拟合的归一化参数。

`labels` 单独保存未来七天的 `target_price`、`target_mask`、评分分组字段和最后一个历史价格。当前来自 dense 窗口的七个标签都有效，因此 masked MSE 等于普通 MSE。未来成交额、份额和异常活动没有放进输入，也不是本轮预测目标。

恢复了原始时间划分，剔除 1,697 条跨越时间边界的窗口。完整历史与七天标签都位于所属划分；三个划分的 parent event ID 没有交集。这里的 event 分组还不是人工合并的语义事件族。同一事件内部的窗口仍有重叠，不能把所有窗口视作独立实验。

小样本是对排序后的 ID 使用固定种子 `20260909` 均匀抽样，没有按未来变化筛选。它保留了“窗口多的事件更容易入选”的分布，并非主题或活跃度分层抽样；正式论文仍需检查覆盖和事件层面的误差。测试清单已固定，但本轮没有运行测试集模型评分。

## 在另一个 Codex 对话直接执行

可以把下面这段话交给另一个对话：

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
- 本轮没有调用 Luna，没有训练实际预训练 LLM 的预测头；Luna 模型名是否被当前账号支持，仍以另一个对话的实际调用为准。

重建数据与检查：

```bash
PYTHONPATH=src python scripts/build_polymarket_forecast_dataset.py
PYTHONPATH=src python scripts/export_polymarket_full_prompts.py
PYTHONPATH=src python scripts/check_polymarket_forecast_dataset.py
PYTHONPATH=src pytest -q tests/test_polymarket_forecasting.py tests/test_polymarket_path_metrics.py
```

这一步把“准备训练和测试”拆成了可检查的三件事：模型实际看到什么、答案在哪里、预测完成后如何评分。三者分开之后，training-free 与训练预测头才有可比较的输入和结果。
