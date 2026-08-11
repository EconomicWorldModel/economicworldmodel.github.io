(() => {
  "use strict";

  const data = window.ATLAS_DATA;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const fmt = (value, digits = 0) => value == null ? "—" : new Intl.NumberFormat("zh-CN", { maximumFractionDigits: digits }).format(value);
  const compact = (value) => value == null ? "—" : new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 2 }).format(value);
  const bytes = (value) => `${(value / 1024 ** 3).toFixed(2)} GiB`;
  const date = (value) => value ? value.slice(0, 10) : "—";
  const escape = (value) => String(value ?? "—").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));

  $("#source-status").textContent = data.source_status.toUpperCase();
  $("#generated-at").textContent = `Payload generated ${data.generated_at_utc}`;
  $("#hero-events").textContent = fmt(data.headline.events);
  $("#hero-markets").textContent = fmt(data.headline.traded_markets);
  $("#hero-span").textContent = data.headline.span_years.toFixed(2);

  $("#status-list").innerHTML = data.status.map((item) => `
    <div class="status-item">
      <i class="status-dot ${escape(item.state)}"></i>
      <div><b>${escape(item.name)}</b><small>${escape(item.detail)}</small></div>
      <span>${escape(item.state)}</span>
    </div>`).join("");

  const metrics = [
    ["TRUSTED TRANSACTIONS", compact(data.headline.trusted_trades), "rows", `${fmt(data.headline.trusted_trades)} 笔可信成交`],
    ["TRADED MARKETS", compact(data.headline.traded_markets), "markets", `catalog 共 ${fmt(data.headline.catalog_markets)} 个`],
    ["VALID EVENTS", compact(data.headline.events), "events", "有可信成交的父事件"],
    ["MARKET-MINUTES", compact(data.frequencies["1m"].rows), "rows", `${fmt(data.frequencies["1m"].rows)} 条观测`],
    ["MARKET-15-MINUTES", compact(data.frequencies["15m"].rows), "rows", `${fmt(data.frequencies["15m"].rows)} 条观测`],
    ["MARKET-HOURS", compact(data.frequencies["1h"].rows), "rows", `${fmt(data.frequencies["1h"].rows)} 条观测`],
    ["REGULAR HOURS", compact(data.headline.regular_hour_rows), "rows", "含最多一小时状态延续"],
    ["OBSERVED SPAN", data.headline.span_years.toFixed(2), "years", `${fmt(data.headline.span_days, 2)} 天`],
  ];
  $("#headline-metrics").innerHTML = metrics.map(([tag, value, unit, detail]) => `
    <article class="metric"><span class="metric-tag">${tag}</span><div class="metric-value">${value}<i>${unit}</i></div><p>${detail}</p></article>`).join("");

  const frequencyOrder = ["1m", "15m", "1h"];
  $("#frequency-table").innerHTML = `<thead><tr><th>尺度</th><th>不同 UTC buckets</th><th>Market-time 行</th><th>Markets</th><th>观测范围</th><th>磁盘</th><th>研究用途</th></tr></thead><tbody>${frequencyOrder.map((key) => {
    const row = data.frequencies[key];
    return `<tr><td><b>${key}</b></td><td>${fmt(row.distinct_utc_buckets)}</td><td>${fmt(row.rows)}</td><td>${fmt(row.market_count)}</td><td>${date(row.first_bucket_utc)} → ${date(row.last_bucket_utc)}</td><td>${bytes(row.bytes)}</td><td>${escape(row.role)}</td></tr>`;
  }).join("")}</tbody>`;

  const renderFields = (key, target, countTarget) => {
    const fields = data.schemas[key];
    $(target).innerHTML = fields.map((field) => `<code>${escape(field)}</code>`).join("");
    $(countTarget).textContent = `${fields.length} fields`;
  };
  renderFields("event", "#event-fields", "#event-field-count");
  renderFields("market", "#market-fields", "#market-field-count");
  renderFields("observed_bar", "#bar-fields", "#bar-field-count");

  const quantileLabels = [["p25", "P25"], ["p50", "P50"], ["p75", "P75"], ["p90", "P90"], ["p95", "P95"], ["p99", "P99"], ["max", "MAX"]];
  const renderQuantiles = (frequency) => {
    const row = data.frequencies[frequency];
    const values = row.points_per_market;
    const maxLog = Math.log1p(values.max);
    $("#distribution-title").textContent = `${frequency} observed 点数分布`;
    $("#distribution-mean").textContent = `mean ${fmt(row.mean_points_per_market, 1)}`;
    $("#quantile-chart").innerHTML = quantileLabels.map(([key, label]) => {
      const value = values[key];
      const width = Math.log1p(value) / maxLog * 100;
      return `<div class="quantile-row"><span>${label}</span><div class="bar-track"><i style="width:${width.toFixed(2)}%"></i></div><b>${fmt(value)}</b></div>`;
    }).join("");
    $("#frequency-detail").innerHTML = `<span>UTC buckets <b>${fmt(row.distinct_utc_buckets)}</b></span><span>rows <b>${fmt(row.rows)}</b></span><span>disk <b>${bytes(row.bytes)}</b></span><span>role <b>${escape(row.role)}</b></span>`;
  };
  renderQuantiles("1h");
  $$(".frequency-tabs button").forEach((button) => button.addEventListener("click", () => {
    $$(".frequency-tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderQuantiles(button.dataset.frequency);
  }));

  const eventMarket = data.event_distributions.market_count;
  const eventMaxLog = Math.log1p(eventMarket.max);
  $("#event-market-chart").innerHTML = quantileLabels.map(([key, label]) => {
    const value = eventMarket[key];
    return `<div class="quantile-row"><span>${label}</span><div class="bar-track"><i style="width:${(Math.log1p(value) / eventMaxLog * 100).toFixed(2)}%"></i></div><b>${fmt(value)}</b></div>`;
  }).join("");

  const sparkline = (points) => {
    if (!points.length) return `<div class="no-trajectory">无可信 P1B 小时轨迹</div>`;
    const width = 640, height = 145, pad = 10;
    const values = points.map((point) => Number(point.price));
    let min = Math.min(...values), max = Math.max(...values);
    if (max === min) { min -= .01; max += .01; }
    const coords = points.map((point, index) => {
      const x = pad + index / Math.max(points.length - 1, 1) * (width - pad * 2);
      const y = pad + (max - point.price) / (max - min) * (height - pad * 2);
      return [x, y];
    });
    const line = coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const area = `${pad},${height - pad} ${line} ${width - pad},${height - pad}`;
    return `<svg class="sparkline" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="小时价格轨迹"><line class="grid" x1="${pad}" y1="${height / 2}" x2="${width - pad}" y2="${height / 2}"></line><polygon class="area" points="${area}"></polygon><polyline class="line" points="${line}"></polyline></svg>`;
  };

  $("#case-grid").innerHTML = data.cases.map((item, index) => {
    const filter = item.has_trusted_trades ? "trajectory" : "governance";
    const eventMarkets = item.event ? `${fmt(item.event.market_count)} markets in event` : "no verified event";
    return `<article class="case-card" data-kind="${filter}">
      <div class="case-top"><span>CASE ${String(index + 1).padStart(2, "0")} · MARKET ${escape(item.market_id)}</span><b>${escape(item.type)}</b></div>
      <h3>${escape(item.question_text)}</h3>
      <p class="case-question">${escape(item.answer1)} ↔ ${escape(item.answer2)} · ${escape(eventMarkets)}</p>
      <p class="case-summary">${escape(item.summary)}</p>
      <div class="case-stats"><span><b>${fmt(item.observed_points["1m"])}</b>1m points</span><span><b>${fmt(item.observed_points["15m"])}</b>15m points</span><span><b>${fmt(item.observed_points["1h"])}</b>1h points</span></div>
      ${sparkline(item.trajectory_1h)}
      <div class="case-callout">它回答：${escape(item.question)}</div>
    </article>`;
  }).join("");
  $$(".case-toolbar button").forEach((button) => button.addEventListener("click", () => {
    $$(".case-toolbar button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    $$(".case-card").forEach((card) => card.classList.toggle("hidden", button.dataset.filter !== "all" && card.dataset.kind !== button.dataset.filter));
  }));

  const scope = data.pilot.scope;
  const test = data.pilot.persistence_test;
  const pilotMetrics = [
    [fmt(scope.track_a_window_count), "pilot windows"],
    [fmt(scope.track_a_eligible_market_count), "eligible markets"],
    [test.mae.toFixed(4), "test persistence MAE"],
    [test.rmse.toFixed(4), "test persistence RMSE"],
  ];
  $("#pilot-metrics").innerHTML = pilotMetrics.map(([value, label]) => `<article class="pilot-metric"><b>${value}</b><span>${label}</span></article>`).join("");

  const sample = data.pilot.sample;
  const pilotPreview = {
    sample_id: sample.sample_id,
    market_id: sample.market_id,
    event_id: sample.event_id,
    as_of_time: sample.as_of_time,
    history_times_utc: sample.history_times_utc,
    history_p_answer1: sample.history_p_answer1,
    target_times_utc: sample.target_times_utc,
    target_p_answer1: sample.target_p_answer1,
    split: sample.split,
  };
  const formalPreview = {
    dataset_version: "polymarket-track-a-v0",
    sample_count: 31949309,
    cold_family_sample_count: 26330043,
    protocols: ["A-H: 24h -> 1/6/24h", "A-D: 10d -> 7d", "A-S: 16d -> 1d"],
    identity: ["sample_id", "protocol", "market_id", "event_id", "event_family_id"],
    boundary: ["as_of_time", "temporal_split", "cold_family_eligible"],
    history: ["p_answer1", "has_trade", "volume", "trade_count", "signed_usd", "staleness", "mask"],
    target: ["target_p_answer1", "target_mask", "horizons"],
    split_rule: "time + event family",
    status: "materialized; deterministic simple baselines complete",
  };
  $("#pilot-preview").textContent = JSON.stringify(pilotPreview, null, 2);
  $("#formal-preview").textContent = JSON.stringify(formalPreview, null, 2);
  $("#pilot-limitations").innerHTML = data.pilot.limitations.map((item) => `<article class="limitation">${escape(item)}</article>`).join("");
})();
