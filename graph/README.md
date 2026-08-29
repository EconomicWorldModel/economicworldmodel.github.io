# Polymarket Graph Atlas v1

Graph Atlas 将当前 EventConnector-compatible 图审计与数据结构整理为可浏览页面。它重点
展示：

- 从可信成交到 `10→7` records、静态图和日历候选的处理结构；
- 500-record 审计图的 degree、density、邻接矩阵、相关和 lead-lag 分布；
- 62,020 条跨事件静态边的真实 UTC 日期重合情况；
- 109 条完整同日期边形成的有限子图；
- 1,225 个高阈值、待审核 event pairs，以及四组可读的事件级关系 motif；
- 当前静态边、P2 时间证据与已物化 temporal snapshot 的区别；
- 已物化的 277 个日频 Parquet snapshots、时间字段契约与 DuckDB 查询方式。

本地查看：

```bash
cd outputs/polymarket_data_atlas_v1
python -m http.server 8765
```

然后访问 `http://localhost:8765/graph/`。页面与 Data Atlas 使用相同的前端会话口令。

重建图表和机器可读摘要：

```bash
python figures/gen_fig_eventconnector_graph_structure.py
```

该命令同时输出 PNG、PDF 和 `data/graph_summary.json`。当前页面不把静态相关边称为事件
关系。当前已实现分区 Parquet snapshots，但未引入专门 temporal database，也未将边解释
为 P3 预测增量或因果关系。
