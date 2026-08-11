# Polymarket Data Atlas v1

Data Atlas v1 是当前 Polymarket 数据审计的公开网页与离线入口。它使用已验收的 P1B 全量
多尺度数据，展示：

- 事件、market、可信成交和三个频率的数据规模；
- event → market → bar 的研究单位与字段；
- 每个 market 的轨迹点数分位数；
- 7 个代表案例及其中 5 个正式 P1B 小时轨迹；
- Track A 早期 pilot 与 31,949,309 条正式固定日历样本之间的关系；
- 当前能够和不能声称的研究边界。

公开地址：

https://sc-levi.github.io/econ-wm-data-atlas/

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
baseline 已经完成。P2 当前只有 lexical/calendar seed，P3 尚未开始。

## 重建数据载荷

```bash
PYTHONPATH=src python -m econwm.eval.build_polymarket_data_atlas_v1 \
  --p1b-root runs/polymarket_p1b_multiscale_v0 \
  --pilot-root runs/polymarket_fast_dataset_v0 \
  --out-dir outputs/polymarket_data_atlas_v1
```

网页只发布浏览所需的紧凑摘要；研究文档和完整数据仍保留在私有项目仓库中。
