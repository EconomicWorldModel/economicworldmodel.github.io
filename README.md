# Polymarket Data Atlas v1

Data Atlas v1 是当前 Polymarket 数据审计的公开网页与离线入口。它使用已验收的 P1B 全量
多尺度数据，覆盖以下内容：

- 数据包含多少事件、时间点以及多大的时间跨度；
- 每个事件包含哪些字段，单条轨迹是什么形式；
- 不同轨迹的长度、采样频率和数据量如何分布；
- 七个代表案例分别揭示什么数据结构与建模边界；
- 闭源 LLM 在 5 条匿名案例轨迹上的末段预测是否超过 persistence；
- 原始 JSON / parquet 记录如何转成统一的 history / target 样本；
- 当前能够和不能声称的研究边界；
- EventConnector 静态图、日历审计与 277 个可按 UTC 日期查询的 temporal edge snapshots；
- 1h / 1d / 15m 全量活动特征、真实价格年龄与 EventConnector 历史伴随输入。

公开地址：

https://economicworldmodel.github.io/

网页入口设有前端协作口令，并在当前浏览器会话中保持解锁。该口令只限制普通浏览流程；
由于站点仍由公开的 GitHub Pages 静态托管，网页源码和紧凑数据载荷仍可被直接访问。

也可以直接打开 [`index.html`](index.html) 离线浏览，或运行：

```bash
cd outputs/polymarket_data_atlas_v1
python -m http.server 8765
```

然后访问 `http://localhost:8765/`。

## 数据边界

网页只保存浏览所需的紧凑摘要和降采样轨迹，不复制亿级 bars。完整数据仍位于：

```text
runs/polymarket_p1b_multiscale_v0/
runs/polymarket_p1b_hourly_v0/
runs/polymarket_fast_dataset_v0/
```

早期 Track A pilot 只用于验证样本形状；正式 A-H/A-D/A-S 数据集和确定性简单
baseline 已经完成。P2 已完成 lexical/calendar seed、首轮相关筛选和 1,225 对优先审核
候选，并基于冻结候选生成 277 个日频 edge snapshots；P3 尚未开始。

## 重建数据载荷

```bash
PYTHONPATH=src python -m econwm.eval.build_polymarket_data_atlas_v1 \
  --p1b-root runs/polymarket_p1b_multiscale_v0 \
  --pilot-root runs/polymarket_fast_dataset_v0 \
  --out-dir outputs/polymarket_data_atlas_v1

python scripts/run_polymarket_case_llm_baseline.py
python scripts/export_polymarket_case_llm_baseline.py
```

网页发布浏览所需的紧凑摘要。公开数据集提供 EventConnector-compatible JSONL、时态边切片和活动特征 v1；完整上游 bars 仍保留在研究工作区。

## 2026-09-07 活动特征更新

首页 `#activity-features` 与图页面 `#activity-inputs` 新增全量规模、字段解释、时间边界和下载入口。验收摘要在 `data/activity_features_v1_acceptance.json`。活动数据共 259 个 Parquet、约 9.13 GB，位于 [Hugging Face](https://huggingface.co/datasets/Levi2ok/polymarket-eventconnector-compatible-v1/tree/main/activity_features_v1)。已有 365,015 个样本全部对接；严格时间筛选后为 363,318 个。该发布不表示预测增量或因果关系已验证。
