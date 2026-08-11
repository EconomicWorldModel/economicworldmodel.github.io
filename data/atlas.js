window.ATLAS_DATA = {
  "version": "polymarket-data-atlas-v1",
  "generated_at_utc": "2026-08-10T11:52:21.662765+00:00",
  "source_status": "pass",
  "headline": {
    "catalog_markets": 1019069,
    "traded_markets": 897580,
    "events": 379711,
    "trusted_trades": 763126566,
    "regular_hour_rows": 30415016,
    "span_days": 1259.848611111111,
    "span_years": 3.4493483401058502
  },
  "frequencies": {
    "1m": {
      "rows": 101460285,
      "market_count": 897580,
      "distinct_utc_buckets": 1215098,
      "first_bucket_utc": "2022-11-21T19:49:00+00:00",
      "last_bucket_utc": "2026-05-04T16:11:00+00:00",
      "mean_points_per_market": 113.03759553465986,
      "points_per_market": {
        "min": 1,
        "p25": 5,
        "p50": 14,
        "p75": 52,
        "p90": 170,
        "p95": 345,
        "p99": 1397,
        "max": 122945
      },
      "bytes": 4189395311,
      "role": "基础层 / 高流动性机制分析"
    },
    "15m": {
      "rows": 41110464,
      "market_count": 897580,
      "distinct_utc_buckets": 109838,
      "first_bucket_utc": "2022-11-21T19:45:00+00:00",
      "last_bucket_utc": "2026-05-04T16:00:00+00:00",
      "mean_points_per_market": 45.80144833886673,
      "points_per_market": {
        "min": 1,
        "p25": 2,
        "p50": 5,
        "p75": 21,
        "p90": 77,
        "p95": 146,
        "p99": 597,
        "max": 21405
      },
      "bytes": 1790495599,
      "role": "短时响应诊断"
    },
    "1h": {
      "rows": 21737095,
      "market_count": 897580,
      "distinct_utc_buckets": 29125,
      "first_bucket_utc": "2022-11-21T19:00:00+00:00",
      "last_bucket_utc": "2026-05-04T16:00:00+00:00",
      "mean_points_per_market": 24.217445798703178,
      "points_per_market": {
        "min": 1,
        "p25": 2,
        "p50": 3,
        "p75": 13,
        "p90": 41,
        "p95": 75,
        "p99": 348,
        "max": 7859
      },
      "bytes": 995919893,
      "role": "Track A、P2、P3 主频率"
    }
  },
  "market_distributions": {
    "observed_bar_count": {
      "min": 1,
      "p25": 2,
      "p50": 3,
      "p75": 13,
      "p90": 41,
      "p95": 75,
      "p99": 348,
      "max": 7859
    },
    "trusted_trade_count": {
      "min": 1,
      "p25": 12,
      "p50": 66,
      "p75": 515,
      "p90": 1767,
      "p95": 4655,
      "p99": 11286,
      "max": 2749424
    },
    "active_span_hours": {
      "min": 1,
      "p25": 2,
      "p50": 6,
      "p75": 45,
      "p90": 162,
      "p95": 396,
      "p99": 3113,
      "max": 24686
    },
    "observed_hour_ratio": {
      "min": 0.0005197505197505198,
      "p25": 0.3333333333333333,
      "p50": 0.8,
      "p75": 1.0,
      "p90": 1.0,
      "p95": 1.0,
      "p99": 1.0,
      "max": 1.0
    }
  },
  "event_distributions": {
    "market_count": {
      "min": 1,
      "p25": 1,
      "p50": 1,
      "p75": 1,
      "p90": 6,
      "p95": 10,
      "p99": 18,
      "max": 144
    },
    "observed_bar_count": {
      "min": 1,
      "p25": 1,
      "p50": 2,
      "p75": 10,
      "p90": 63,
      "p95": 167,
      "p99": 768,
      "max": 217183
    },
    "trusted_trade_count": {
      "min": 1,
      "p25": 87,
      "p50": 523,
      "p75": 1541,
      "p90": 5752,
      "p95": 8894,
      "p99": 14882,
      "max": 4972205
    },
    "event_span_hours": {
      "min": 1,
      "p25": 1,
      "p50": 3,
      "p75": 25,
      "p90": 103,
      "p95": 215,
      "p99": 1911,
      "max": 24686
    }
  },
  "schemas": {
    "event": [
      "event_id",
      "event_title",
      "market_count",
      "first_trade_hour_utc",
      "last_trade_hour_utc",
      "event_span_hours",
      "market_active_span_hours",
      "observed_bar_count",
      "trusted_trade_count",
      "usd_volume",
      "token_volume"
    ],
    "market": [
      "market_id",
      "condition_id",
      "event_id",
      "question",
      "event_title",
      "answer1",
      "answer2",
      "canonical_proposition",
      "price_orientation",
      "created_at_utc",
      "end_date_raw_utc",
      "first_trade_hour_utc",
      "last_trade_hour_utc",
      "closed",
      "neg_risk",
      "metadata_valid",
      "identity_status",
      "strict_event_eligible",
      "has_trusted_trades",
      "observed_bar_count",
      "trusted_trade_count",
      "usd_volume",
      "token_volume",
      "min_price",
      "max_price",
      "active_span_hours",
      "observed_hour_ratio"
    ],
    "observed_bar": [
      "bucket_start_utc",
      "market_id",
      "event_id",
      "first_timestamp",
      "first_block_number",
      "first_log_index",
      "last_timestamp",
      "last_block_number",
      "last_log_index",
      "p_open",
      "p_high",
      "p_low",
      "p_close",
      "price_x_usd",
      "usd_volume",
      "token_volume",
      "signed_usd",
      "trade_count"
    ]
  },
  "cases": [
    {
      "market_id": "253591",
      "slug": "long-trajectory",
      "type": "长轨迹与机械约束",
      "summary": "高流动性长轨迹；同一父事件中的候选人 markets 带有机械互斥关系。",
      "question": "如何避免把高关注事件或同父事件约束误当成普遍跨事件规律？",
      "event_id": "903193",
      "event_title": "Presidential Election Winner 2024",
      "question_text": "Will Donald Trump win the 2024 US Presidential Election?",
      "answer1": "Yes",
      "answer2": "No",
      "identity_status": "accepted",
      "has_trusted_trades": true,
      "trusted_trade_count": 2749424,
      "observed_points": {
        "1m": 122945,
        "15m": 17456,
        "1h": 5616
      },
      "first_trade_hour_utc": "2024-01-05T02:00:00+00:00",
      "last_trade_hour_utc": "2024-11-06T11:00:00+00:00",
      "event": {
        "market_count": 17,
        "event_span_hours": 7359,
        "observed_hour_rows": 47350
      },
      "trajectory_1h": [
        {
          "time": "2024-01-05T02:00:00+00:00",
          "price": 0.42000000000000004,
          "trade_count": 2,
          "usd_volume": 106.1
        },
        {
          "time": "2024-01-06T05:00:00+00:00",
          "price": 0.41000000000000003,
          "trade_count": 3,
          "usd_volume": 1341.5
        },
        {
          "time": "2024-01-07T16:00:00+00:00",
          "price": 0.4,
          "trade_count": 1,
          "usd_volume": 570.52
        },
        {
          "time": "2024-01-09T16:00:00+00:00",
          "price": 0.45999999999999996,
          "trade_count": 5,
          "usd_volume": 457.38
        },
        {
          "time": "2024-01-11T09:00:00+00:00",
          "price": 0.47,
          "trade_count": 3,
          "usd_volume": 208.32999999999998
        },
        {
          "time": "2024-01-13T03:00:00+00:00",
          "price": 0.48,
          "trade_count": 1,
          "usd_volume": 800.0
        },
        {
          "time": "2024-01-14T23:00:00+00:00",
          "price": 0.47999800000000004,
          "trade_count": 1,
          "usd_volume": 0.11
        },
        {
          "time": "2024-01-16T18:00:00+00:00",
          "price": 0.49,
          "trade_count": 1,
          "usd_volume": 5.2
        },
        {
          "time": "2024-01-18T05:00:00+00:00",
          "price": 0.49,
          "trade_count": 1,
          "usd_volume": 1.03
        },
        {
          "time": "2024-01-20T12:00:00+00:00",
          "price": 0.49,
          "trade_count": 1,
          "usd_volume": 22.91
        },
        {
          "time": "2024-01-22T07:00:00+00:00",
          "price": 0.52,
          "trade_count": 1,
          "usd_volume": 520.0
        },
        {
          "time": "2024-01-23T13:00:00+00:00",
          "price": 0.54,
          "trade_count": 3,
          "usd_volume": 3125.7
        },
        {
          "time": "2024-01-24T19:00:00+00:00",
          "price": 0.54,
          "trade_count": 3,
          "usd_volume": 1740.67
        },
        {
          "time": "2024-01-26T19:00:00+00:00",
          "price": 0.54,
          "trade_count": 2,
          "usd_volume": 1996.26
        },
        {
          "time": "2024-01-28T08:00:00+00:00",
          "price": 0.54,
          "trade_count": 1,
          "usd_volume": 9998.32
        },
        {
          "time": "2024-01-30T03:00:00+00:00",
          "price": 0.54,
          "trade_count": 1,
          "usd_volume": 1000.0
        },
        {
          "time": "2024-01-31T14:00:00+00:00",
          "price": 0.54,
          "trade_count": 4,
          "usd_volume": 567.3900000000001
        },
        {
          "time": "2024-02-01T19:00:00+00:00",
          "price": 0.53,
          "trade_count": 12,
          "usd_volume": 354.44
        },
        {
          "time": "2024-02-03T18:00:00+00:00",
          "price": 0.529998,
          "trade_count": 1,
          "usd_volume": 0.09
        },
        {
          "time": "2024-02-06T03:00:00+00:00",
          "price": 0.52,
          "trade_count": 1,
          "usd_volume": 5200.0
        },
        {
          "time": "2024-02-08T06:00:00+00:00",
          "price": 0.53,
          "trade_count": 1,
          "usd_volume": 4.43
        },
        {
          "time": "2024-02-09T11:00:00+00:00",
          "price": 0.52,
          "trade_count": 1,
          "usd_volume": 8840.0
        },
        {
          "time": "2024-02-11T14:00:00+00:00",
          "price": 0.53,
          "trade_count": 7,
          "usd_volume": 402.96999999999997
        },
        {
          "time": "2024-02-12T20:00:00+00:00",
          "price": 0.54,
          "trade_count": 2,
          "usd_volume": 163.43
        },
        {
          "time": "2024-02-14T16:00:00+00:00",
          "price": 0.53,
          "trade_count": 2,
          "usd_volume": 204.68
        },
        {
          "time": "2024-02-15T20:00:00+00:00",
          "price": 0.53,
          "trade_count": 3,
          "usd_volume": 193.25
        },
        {
          "time": "2024-02-17T13:00:00+00:00",
          "price": 0.53,
          "trade_count": 4,
          "usd_volume": 1786.0
        },
        {
          "time": "2024-02-19T15:00:00+00:00",
          "price": 0.53,
          "trade_count": 2,
          "usd_volume": 75.78
        },
        {
          "time": "2024-02-21T13:00:00+00:00",
          "price": 0.55,
          "trade_count": 1,
          "usd_volume": 4.09
        },
        {
          "time": "2024-02-23T10:00:00+00:00",
          "price": 0.54,
          "trade_count": 1,
          "usd_volume": 21.3
        },
        {
          "time": "2024-02-24T18:00:00+00:00",
          "price": 0.54,
          "trade_count": 1,
          "usd_volume": 0.85
        },
        {
          "time": "2024-02-26T20:00:00+00:00",
          "price": 0.53,
          "trade_count": 1,
          "usd_volume": 53.0
        },
        {
          "time": "2024-02-28T19:00:00+00:00",
          "price": 0.53,
          "trade_count": 2,
          "usd_volume": 112.0
        },
        {
          "time": "2024-03-02T02:00:00+00:00",
          "price": 0.52,
          "trade_count": 3,
          "usd_volume": 1733.16
        },
        {
          "time": "2024-03-03T14:00:00+00:00",
          "price": 0.54,
          "trade_count": 2,
          "usd_volume": 51.11
        },
        {
          "time": "2024-03-05T03:00:00+00:00",
          "price": 0.54,
          "trade_count": 1,
          "usd_volume": 9.0
        },
        {
          "time": "2024-03-06T16:00:00+00:00",
          "price": 0.54,
          "trade_count": 4,
          "usd_volume": 113.91
        },
        {
          "time": "2024-03-08T11:00:00+00:00",
          "price": 0.54,
          "trade_count": 2,
          "usd_volume": 1.7
        },
        {
          "time": "2024-03-10T04:00:00+00:00",
          "price": 0.53,
          "trade_count": 4,
          "usd_volume": 6602.27
        },
        {
          "time": "2024-03-13T01:00:00+00:00",
          "price": 0.51,
          "trade_count": 1,
          "usd_volume": 5.1
        },
        {
          "time": "2024-03-15T01:00:00+00:00",
          "price": 0.52,
          "trade_count": 2,
          "usd_volume": 5.54
        },
        {
          "time": "2024-03-17T07:00:00+00:00",
          "price": 0.51,
          "trade_count": 1,
          "usd_volume": 142.65
        },
        {
          "time": "2024-03-20T04:00:00+00:00",
          "price": 0.52,
          "trade_count": 1,
          "usd_volume": 1.0
        },
        {
          "time": "2024-03-22T01:00:00+00:00",
          "price": 0.52,
          "trade_count": 1,
          "usd_volume": 49.99
        },
        {
          "time": "2024-03-24T01:00:00+00:00",
          "price": 0.5,
          "trade_count": 2,
          "usd_volume": 799.94
        },
        {
          "time": "2024-03-26T08:00:00+00:00",
          "price": 0.5,
          "trade_count": 1,
          "usd_volume": 4.0
        },
        {
          "time": "2024-03-28T20:00:00+00:00",
          "price": 0.5,
          "trade_count": 1,
          "usd_volume": 1.0
        },
        {
          "time": "2024-03-30T21:00:00+00:00",
          "price": 0.49,
          "trade_count": 2,
          "usd_volume": 1006.6999999999999
        },
        {
          "time": "2024-04-03T02:00:00+00:00",
          "price": 0.48,
          "trade_count": 1,
          "usd_volume": 240.0
        },
        {
          "time": "2024-04-05T06:00:00+00:00",
          "price": 0.47,
          "trade_count": 1,
          "usd_volume": 785.94
        },
        {
          "time": "2024-04-07T13:00:00+00:00",
          "price": 0.47,
          "trade_count": 2,
          "usd_volume": 30.0
        },
        {
          "time": "2024-04-10T23:00:00+00:00",
          "price": 0.45,
          "trade_count": 1,
          "usd_volume": 409.09
        },
        {
          "time": "2024-04-13T23:00:00+00:00",
          "price": 0.46,
          "trade_count": 2,
          "usd_volume": 330.0
        },
        {
          "time": "2024-04-16T12:00:00+00:00",
          "price": 0.45,
          "trade_count": 3,
          "usd_volume": 31400.100000000002
        },
        {
          "time": "2024-04-18T15:00:00+00:00",
          "price": 0.45,
          "trade_count": 9,
          "usd_volume": 13255.0
        },
        {
          "time": "2024-04-20T14:00:00+00:00",
          "price": 0.43000000000000005,
          "trade_count": 3,
          "usd_volume": 2938.0
        },
        {
          "time": "2024-04-23T09:00:00+00:00",
          "price": 0.44,
          "trade_count": 1,
          "usd_volume": 88.0
        },
        {
          "time": "2024-04-26T00:00:00+00:00",
          "price": 0.43,
          "trade_count": 2,
          "usd_volume": 82.72999999999999
        },
        {
          "time": "2024-04-28T03:00:00+00:00",
          "price": 0.43000000000000005,
          "trade_count": 2,
          "usd_volume": 285.0
        },
        {
          "time": "2024-04-30T09:00:00+00:00",
          "price": 0.44,
          "trade_count": 1,
          "usd_volume": 212.0
        },
        {
          "time": "2024-05-01T23:00:00+00:00",
          "price": 0.45,
          "trade_count": 1,
          "usd_volume": 472.63
        },
        {
          "time": "2024-05-03T19:00:00+00:00",
          "price": 0.46,
          "trade_count": 9,
          "usd_volume": 13333.210000000001
        },
        {
          "time": "2024-05-05T17:00:00+00:00",
          "price": 0.47,
          "trade_count": 2,
          "usd_volume": 70.0
        },
        {
          "time": "2024-05-07T22:00:00+00:00",
          "price": 0.47,
          "trade_count": 1,
          "usd_volume": 102.95
        },
        {
          "time": "2024-05-09T17:00:00+00:00",
          "price": 0.45,
          "trade_count": 5,
          "usd_volume": 1296.72
        },
        {
          "time": "2024-05-11T21:00:00+00:00",
          "price": 0.45,
          "trade_count": 2,
          "usd_volume": 70.0
        },
        {
          "time": "2024-05-13T16:00:00+00:00",
          "price": 0.49,
          "trade_count": 15,
          "usd_volume": 55564.79
        },
        {
          "time": "2024-05-14T20:00:00+00:00",
          "price": 0.49,
          "trade_count": 1,
          "usd_volume": 1.04
        },
        {
          "time": "2024-05-15T19:00:00+00:00",
          "price": 0.49,
          "trade_count": 10,
          "usd_volume": 1812.45
        },
        {
          "time": "2024-05-16T17:00:00+00:00",
          "price": 0.5,
          "trade_count": 1,
          "usd_volume": 10.0
        },
        {
          "time": "2024-05-17T18:00:00+00:00",
          "price": 0.5,
          "trade_count": 4,
          "usd_volume": 1086.96
        },
        {
          "time": "2024-05-18T20:00:00+00:00",
          "price": 0.51,
          "trade_count": 2,
          "usd_volume": 6370.0
        },
        {
          "time": "2024-05-19T17:00:00+00:00",
          "price": 0.52,
          "trade_count": 5,
          "usd_volume": 15853.77
        },
        {
          "time": "2024-05-20T15:00:00+00:00",
          "price": 0.52,
          "trade_count": 10,
          "usd_volume": 1750.08
        },
        {
          "time": "2024-05-21T14:00:00+00:00",
          "price": 0.55,
          "trade_count": 7,
          "usd_volume": 2627.64
        },
        {
          "time": "2024-05-22T11:00:00+00:00",
          "price": 0.55,
          "trade_count": 12,
          "usd_volume": 1086.45
        },
        {
          "time": "2024-05-23T10:00:00+00:00",
          "price": 0.55,
          "trade_count": 17,
          "usd_volume": 178.16000000000003
        },
        {
          "time": "2024-05-24T09:00:00+00:00",
          "price": 0.55,
          "trade_count": 16,
          "usd_volume": 620.5799999999999
        },
        {
          "time": "2024-05-25T09:00:00+00:00",
          "price": 0.54,
          "trade_count": 23,
          "usd_volume": 2274.38
        },
        {
          "time": "2024-05-26T07:00:00+00:00",
          "price": 0.56,
          "trade_count": 8,
          "usd_volume": 398.28000000000003
        },
        {
          "time": "2024-05-27T06:00:00+00:00",
          "price": 0.56,
          "trade_count": 18,
          "usd_volume": 3645.69
        },
        {
          "time": "2024-05-28T05:00:00+00:00",
          "price": 0.56,
          "trade_count": 30,
          "usd_volume": 1256.54
        },
        {
          "time": "2024-05-29T03:00:00+00:00",
          "price": 0.56,
          "trade_count": 33,
          "usd_volume": 1740.2199999999998
        },
        {
          "time": "2024-05-30T01:00:00+00:00",
          "price": 0.569946,
          "trade_count": 5,
          "usd_volume": 2.0300000000000002
        },
        {
          "time": "2024-05-30T23:00:00+00:00",
          "price": 0.53,
          "trade_count": 21,
          "usd_volume": 9060.07
        },
        {
          "time": "2024-05-31T20:00:00+00:00",
          "price": 0.55,
          "trade_count": 2,
          "usd_volume": 121.41
        },
        {
          "time": "2024-06-01T18:00:00+00:00",
          "price": 0.54,
          "trade_count": 3,
          "usd_volume": 12.06
        },
        {
          "time": "2024-06-02T17:00:00+00:00",
          "price": 0.54,
          "trade_count": 9,
          "usd_volume": 751.0799999999999
        },
        {
          "time": "2024-06-03T15:00:00+00:00",
          "price": 0.53,
          "trade_count": 32,
          "usd_volume": 10173.67
        },
        {
          "time": "2024-06-04T14:00:00+00:00",
          "price": 0.56,
          "trade_count": 16,
          "usd_volume": 297.91999999999996
        },
        {
          "time": "2024-06-05T14:00:00+00:00",
          "price": 0.56,
          "trade_count": 5,
          "usd_volume": 83.14999999999999
        },
        {
          "time": "2024-06-06T11:00:00+00:00",
          "price": 0.56,
          "trade_count": 28,
          "usd_volume": 23361.449999999997
        },
        {
          "time": "2024-06-07T09:00:00+00:00",
          "price": 0.55,
          "trade_count": 26,
          "usd_volume": 1331.94
        },
        {
          "time": "2024-06-08T10:00:00+00:00",
          "price": 0.5599799999999999,
          "trade_count": 15,
          "usd_volume": 669.81
        },
        {
          "time": "2024-06-09T07:00:00+00:00",
          "price": 0.56,
          "trade_count": 12,
          "usd_volume": 728.15
        },
        {
          "time": "2024-06-10T05:00:00+00:00",
          "price": 0.5599799999999999,
          "trade_count": 19,
          "usd_volume": 798.9200000000001
        },
        {
          "time": "2024-06-11T04:00:00+00:00",
          "price": 0.5700000000000001,
          "trade_count": 16,
          "usd_volume": 2067.64
        },
        {
          "time": "2024-06-12T01:00:00+00:00",
          "price": 0.56,
          "trade_count": 5,
          "usd_volume": 1150.1799999999998
        },
        {
          "time": "2024-06-12T23:00:00+00:00",
          "price": 0.56,
          "trade_count": 2,
          "usd_volume": 2677.72
        },
        {
          "time": "2024-06-13T21:00:00+00:00",
          "price": 0.56,
          "trade_count": 5,
          "usd_volume": 1220.6000000000001
        },
        {
          "time": "2024-06-14T18:00:00+00:00",
          "price": 0.5700000000000001,
          "trade_count": 43,
          "usd_volume": 38578.29
        },
        {
          "time": "2024-06-15T18:00:00+00:00",
          "price": 0.57,
          "trade_count": 3,
          "usd_volume": 1034.16
        },
        {
          "time": "2024-06-16T16:00:00+00:00",
          "price": 0.57,
          "trade_count": 7,
          "usd_volume": 666.8599999999999
        },
        {
          "time": "2024-06-17T13:00:00+00:00",
          "price": 0.57,
          "trade_count": 6,
          "usd_volume": 697.2
        },
        {
          "time": "2024-06-18T12:00:00+00:00",
          "price": 0.5700000000000001,
          "trade_count": 18,
          "usd_volume": 3457.7400000000002
        },
        {
          "time": "2024-06-19T12:00:00+00:00",
          "price": 0.57,
          "trade_count": 11,
          "usd_volume": 1294.9099999999999
        },
        {
          "time": "2024-06-20T10:00:00+00:00",
          "price": 0.56,
          "trade_count": 9,
          "usd_volume": 11339.130000000001
        },
        {
          "time": "2024-06-21T07:00:00+00:00",
          "price": 0.56,
          "trade_count": 15,
          "usd_volume": 1827.6299999999999
        },
        {
          "time": "2024-06-22T05:00:00+00:00",
          "price": 0.569999,
          "trade_count": 33,
          "usd_volume": 1427.0399999999997
        },
        {
          "time": "2024-06-23T03:00:00+00:00",
          "price": 0.5700000000000001,
          "trade_count": 24,
          "usd_volume": 6208.010000000001
        },
        {
          "time": "2024-06-24T00:00:00+00:00",
          "price": 0.5800000000000001,
          "trade_count": 1,
          "usd_volume": 86.1
        },
        {
          "time": "2024-06-24T23:00:00+00:00",
          "price": 0.5900000000000001,
          "trade_count": 2,
          "usd_volume": 1640.69
        },
        {
          "time": "2024-06-26T00:00:00+00:00",
          "price": 0.6,
          "trade_count": 8,
          "usd_volume": 1018.4699999999999
        },
        {
          "time": "2024-06-26T21:00:00+00:00",
          "price": 0.6,
          "trade_count": 3,
          "usd_volume": 46050.67
        },
        {
          "time": "2024-06-27T19:00:00+00:00",
          "price": 0.5900000000000001,
          "trade_count": 6,
          "usd_volume": 729.76
        },
        {
          "time": "2024-06-28T17:00:00+00:00",
          "price": 0.63,
          "trade_count": 48,
          "usd_volume": 11974.429999999998
        },
        {
          "time": "2024-06-29T14:00:00+00:00",
          "price": 0.63,
          "trade_count": 15,
          "usd_volume": 13421.020000000002
        },
        {
          "time": "2024-06-30T12:00:00+00:00",
          "price": 0.64,
          "trade_count": 45,
          "usd_volume": 4944.31
        },
        {
          "time": "2024-07-01T10:00:00+00:00",
          "price": 0.63,
          "trade_count": 37,
          "usd_volume": 2257.18
        },
        {
          "time": "2024-07-02T07:00:00+00:00",
          "price": 0.6599999999999999,
          "trade_count": 34,
          "usd_volume": 1411.65
        },
        {
          "time": "2024-07-03T05:00:00+00:00",
          "price": 0.63,
          "trade_count": 61,
          "usd_volume": 25507.299999999996
        },
        {
          "time": "2024-07-04T03:00:00+00:00",
          "price": 0.62,
          "trade_count": 36,
          "usd_volume": 6792.539999999999
        },
        {
          "time": "2024-07-05T00:00:00+00:00",
          "price": 0.61,
          "trade_count": 12,
          "usd_volume": 2141.05
        },
        {
          "time": "2024-07-05T22:00:00+00:00",
          "price": 0.61,
          "trade_count": 10,
          "usd_volume": 12429.09
        },
        {
          "time": "2024-07-06T20:00:00+00:00",
          "price": 0.61,
          "trade_count": 12,
          "usd_volume": 2024.26
        },
        {
          "time": "2024-07-07T17:00:00+00:00",
          "price": 0.63,
          "trade_count": 19,
          "usd_volume": 4832.0599999999995
        },
        {
          "time": "2024-07-08T16:00:00+00:00",
          "price": 0.6,
          "trade_count": 9,
          "usd_volume": 2315.44
        },
        {
          "time": "2024-07-09T14:00:00+00:00",
          "price": 0.63,
          "trade_count": 51,
          "usd_volume": 9543.829999999998
        },
        {
          "time": "2024-07-10T11:00:00+00:00",
          "price": 0.62,
          "trade_count": 45,
          "usd_volume": 12623.689999999999
        },
        {
          "time": "2024-07-11T09:00:00+00:00",
          "price": 0.62,
          "trade_count": 13,
          "usd_volume": 215.6
        },
        {
          "time": "2024-07-12T07:00:00+00:00",
          "price": 0.59,
          "trade_count": 78,
          "usd_volume": 7330.4400000000005
        },
        {
          "time": "2024-07-13T05:00:00+00:00",
          "price": 0.59,
          "trade_count": 5,
          "usd_volume": 72.92
        },
        {
          "time": "2024-07-14T02:00:00+00:00",
          "price": 0.69,
          "trade_count": 146,
          "usd_volume": 21284.95
        },
        {
          "time": "2024-07-15T00:00:00+00:00",
          "price": 0.7,
          "trade_count": 89,
          "usd_volume": 25896.110000000008
        },
        {
          "time": "2024-07-15T22:00:00+00:00",
          "price": 0.7,
          "trade_count": 21,
          "usd_volume": 5761.869999999999
        },
        {
          "time": "2024-07-16T19:00:00+00:00",
          "price": 0.71,
          "trade_count": 22,
          "usd_volume": 1803.6899999999996
        },
        {
          "time": "2024-07-17T17:00:00+00:00",
          "price": 0.69,
          "trade_count": 97,
          "usd_volume": 56831.84
        },
        {
          "time": "2024-07-18T15:00:00+00:00",
          "price": 0.64,
          "trade_count": 89,
          "usd_volume": 41170.82000000002
        },
        {
          "time": "2024-07-19T12:00:00+00:00",
          "price": 0.62,
          "trade_count": 65,
          "usd_volume": 66210.09
        },
        {
          "time": "2024-07-20T10:00:00+00:00",
          "price": 0.63,
          "trade_count": 94,
          "usd_volume": 28476.960000000003
        },
        {
          "time": "2024-07-21T08:00:00+00:00",
          "price": 0.66,
          "trade_count": 35,
          "usd_volume": 7974.52
        },
        {
          "time": "2024-07-22T05:00:00+00:00",
          "price": 0.63,
          "trade_count": 72,
          "usd_volume": 19572.890000000003
        },
        {
          "time": "2024-07-23T03:00:00+00:00",
          "price": 0.64,
          "trade_count": 318,
          "usd_volume": 46387.32
        },
        {
          "time": "2024-07-24T01:00:00+00:00",
          "price": 0.6,
          "trade_count": 145,
          "usd_volume": 93390.82999999999
        },
        {
          "time": "2024-07-24T22:00:00+00:00",
          "price": 0.62,
          "trade_count": 30,
          "usd_volume": 9967.45
        },
        {
          "time": "2024-07-25T20:00:00+00:00",
          "price": 0.62,
          "trade_count": 10,
          "usd_volume": 238.15
        },
        {
          "time": "2024-07-26T18:00:00+00:00",
          "price": 0.59,
          "trade_count": 51,
          "usd_volume": 23375.2
        },
        {
          "time": "2024-07-27T15:00:00+00:00",
          "price": 0.58,
          "trade_count": 184,
          "usd_volume": 63674.59
        },
        {
          "time": "2024-07-28T13:00:00+00:00",
          "price": 0.57,
          "trade_count": 46,
          "usd_volume": 9274.99
        },
        {
          "time": "2024-07-29T11:00:00+00:00",
          "price": 0.6,
          "trade_count": 25,
          "usd_volume": 2381.2
        },
        {
          "time": "2024-07-30T08:00:00+00:00",
          "price": 0.5800000000000001,
          "trade_count": 35,
          "usd_volume": 8902.93
        },
        {
          "time": "2024-07-31T06:00:00+00:00",
          "price": 0.5900000000000001,
          "trade_count": 63,
          "usd_volume": 37760.33
        },
        {
          "time": "2024-08-01T04:00:00+00:00",
          "price": 0.54,
          "trade_count": 24,
          "usd_volume": 1713.19
        },
        {
          "time": "2024-08-02T01:00:00+00:00",
          "price": 0.54,
          "trade_count": 22,
          "usd_volume": 3074.2400000000002
        },
        {
          "time": "2024-08-02T23:00:00+00:00",
          "price": 0.53,
          "trade_count": 14,
          "usd_volume": 13492.06
        },
        {
          "time": "2024-08-03T21:00:00+00:00",
          "price": 0.549998,
          "trade_count": 24,
          "usd_volume": 3885.91
        },
        {
          "time": "2024-08-04T19:00:00+00:00",
          "price": 0.52,
          "trade_count": 13,
          "usd_volume": 4939.32
        },
        {
          "time": "2024-08-05T16:00:00+00:00",
          "price": 0.53,
          "trade_count": 23,
          "usd_volume": 14668.230000000003
        },
        {
          "time": "2024-08-06T14:00:00+00:00",
          "price": 0.53,
          "trade_count": 54,
          "usd_volume": 88311.44000000003
        },
        {
          "time": "2024-08-07T12:00:00+00:00",
          "price": 0.51,
          "trade_count": 28,
          "usd_volume": 21457.440000000002
        },
        {
          "time": "2024-08-08T09:00:00+00:00",
          "price": 0.49,
          "trade_count": 39,
          "usd_volume": 31200.4
        },
        {
          "time": "2024-08-09T07:00:00+00:00",
          "price": 0.484,
          "trade_count": 33,
          "usd_volume": 3462.1699999999996
        },
        {
          "time": "2024-08-10T05:00:00+00:00",
          "price": 0.476,
          "trade_count": 18,
          "usd_volume": 1875.0700000000002
        },
        {
          "time": "2024-08-11T02:00:00+00:00",
          "price": 0.45299999999999996,
          "trade_count": 134,
          "usd_volume": 130432.00000000001
        },
        {
          "time": "2024-08-12T00:00:00+00:00",
          "price": 0.454,
          "trade_count": 10,
          "usd_volume": 834.23
        },
        {
          "time": "2024-08-12T22:00:00+00:00",
          "price": 0.458,
          "trade_count": 31,
          "usd_volume": 10601.829999999998
        },
        {
          "time": "2024-08-13T19:00:00+00:00",
          "price": 0.45599999999999996,
          "trade_count": 40,
          "usd_volume": 38066.12999999999
        },
        {
          "time": "2024-08-14T17:00:00+00:00",
          "price": 0.452,
          "trade_count": 84,
          "usd_volume": 94575.77
        },
        {
          "time": "2024-08-15T15:00:00+00:00",
          "price": 0.44399999999999995,
          "trade_count": 22,
          "usd_volume": 7602.740000000001
        },
        {
          "time": "2024-08-16T12:00:00+00:00",
          "price": 0.441,
          "trade_count": 27,
          "usd_volume": 1708.1599999999999
        },
        {
          "time": "2024-08-17T10:00:00+00:00",
          "price": 0.484,
          "trade_count": 91,
          "usd_volume": 61025.049999999996
        },
        {
          "time": "2024-08-18T08:00:00+00:00",
          "price": 0.488,
          "trade_count": 72,
          "usd_volume": 8653.45
        },
        {
          "time": "2024-08-19T05:00:00+00:00",
          "price": 0.469,
          "trade_count": 126,
          "usd_volume": 93769.32999999996
        },
        {
          "time": "2024-08-20T03:00:00+00:00",
          "price": 0.489,
          "trade_count": 61,
          "usd_volume": 5171.259999999999
        },
        {
          "time": "2024-08-21T01:00:00+00:00",
          "price": 0.518,
          "trade_count": 117,
          "usd_volume": 160299.69
        },
        {
          "time": "2024-08-21T22:00:00+00:00",
          "price": 0.519,
          "trade_count": 22,
          "usd_volume": 9673.789999999999
        },
        {
          "time": "2024-08-22T20:00:00+00:00",
          "price": 0.513,
          "trade_count": 56,
          "usd_volume": 17709.410000000003
        },
        {
          "time": "2024-08-23T18:00:00+00:00",
          "price": 0.514,
          "trade_count": 149,
          "usd_volume": 138542.53
        },
        {
          "time": "2024-08-24T15:00:00+00:00",
          "price": 0.499,
          "trade_count": 233,
          "usd_volume": 22589.49
        },
        {
          "time": "2024-08-25T13:00:00+00:00",
          "price": 0.495,
          "trade_count": 354,
          "usd_volume": 12241.749999999998
        },
        {
          "time": "2024-08-26T11:00:00+00:00",
          "price": 0.495,
          "trade_count": 290,
          "usd_volume": 46167.399999999994
        },
        {
          "time": "2024-08-27T08:00:00+00:00",
          "price": 0.5,
          "trade_count": 213,
          "usd_volume": 19499.86
        },
        {
          "time": "2024-08-28T06:00:00+00:00",
          "price": 0.5,
          "trade_count": 216,
          "usd_volume": 22499.769999999997
        },
        {
          "time": "2024-08-29T04:00:00+00:00",
          "price": 0.502,
          "trade_count": 52,
          "usd_volume": 4264.139999999999
        },
        {
          "time": "2024-08-30T02:00:00+00:00",
          "price": 0.495,
          "trade_count": 168,
          "usd_volume": 69142.07000000002
        },
        {
          "time": "2024-08-30T23:00:00+00:00",
          "price": 0.5,
          "trade_count": 19,
          "usd_volume": 1908.67
        },
        {
          "time": "2024-08-31T21:00:00+00:00",
          "price": 0.501,
          "trade_count": 74,
          "usd_volume": 12481.22
        },
        {
          "time": "2024-09-01T19:00:00+00:00",
          "price": 0.508,
          "trade_count": 169,
          "usd_volume": 27650.939999999995
        },
        {
          "time": "2024-09-02T16:00:00+00:00",
          "price": 0.514,
          "trade_count": 52,
          "usd_volume": 37829.740000000005
        },
        {
          "time": "2024-09-03T14:00:00+00:00",
          "price": 0.513,
          "trade_count": 75,
          "usd_volume": 29584.279999999995
        },
        {
          "time": "2024-09-04T12:00:00+00:00",
          "price": 0.518,
          "trade_count": 76,
          "usd_volume": 6958.079999999999
        },
        {
          "time": "2024-09-05T09:00:00+00:00",
          "price": 0.528,
          "trade_count": 84,
          "usd_volume": 16255.99
        },
        {
          "time": "2024-09-06T07:00:00+00:00",
          "price": 0.53,
          "trade_count": 118,
          "usd_volume": 16512.66
        },
        {
          "time": "2024-09-07T05:00:00+00:00",
          "price": 0.51,
          "trade_count": 88,
          "usd_volume": 15843.189999999995
        },
        {
          "time": "2024-09-08T02:00:00+00:00",
          "price": 0.498,
          "trade_count": 57,
          "usd_volume": 8193.329999999998
        },
        {
          "time": "2024-09-09T00:00:00+00:00",
          "price": 0.514,
          "trade_count": 61,
          "usd_volume": 8223.43
        },
        {
          "time": "2024-09-09T22:00:00+00:00",
          "price": 0.524,
          "trade_count": 54,
          "usd_volume": 36251.4
        },
        {
          "time": "2024-09-10T19:00:00+00:00",
          "price": 0.519,
          "trade_count": 57,
          "usd_volume": 44124.35999999999
        },
        {
          "time": "2024-09-11T17:00:00+00:00",
          "price": 0.498,
          "trade_count": 139,
          "usd_volume": 134492.87000000002
        },
        {
          "time": "2024-09-12T15:00:00+00:00",
          "price": 0.489,
          "trade_count": 76,
          "usd_volume": 3216.1100000000006
        },
        {
          "time": "2024-09-13T12:00:00+00:00",
          "price": 0.491,
          "trade_count": 85,
          "usd_volume": 20010.850000000002
        },
        {
          "time": "2024-09-14T10:00:00+00:00",
          "price": 0.49,
          "trade_count": 107,
          "usd_volume": 18668.759999999995
        },
        {
          "time": "2024-09-15T08:00:00+00:00",
          "price": 0.486,
          "trade_count": 56,
          "usd_volume": 17465.660000000003
        },
        {
          "time": "2024-09-16T05:00:00+00:00",
          "price": 0.494,
          "trade_count": 48,
          "usd_volume": 20397.87
        },
        {
          "time": "2024-09-17T03:00:00+00:00",
          "price": 0.489,
          "trade_count": 23,
          "usd_volume": 1441.6200000000003
        },
        {
          "time": "2024-09-18T01:00:00+00:00",
          "price": 0.481,
          "trade_count": 103,
          "usd_volume": 11230.089999999998
        },
        {
          "time": "2024-09-18T22:00:00+00:00",
          "price": 0.47,
          "trade_count": 105,
          "usd_volume": 391396.48
        },
        {
          "time": "2024-09-19T20:00:00+00:00",
          "price": 0.472,
          "trade_count": 40,
          "usd_volume": 28275.09
        },
        {
          "time": "2024-09-20T18:00:00+00:00",
          "price": 0.479,
          "trade_count": 97,
          "usd_volume": 8678.949999999997
        },
        {
          "time": "2024-09-21T16:00:00+00:00",
          "price": 0.476,
          "trade_count": 73,
          "usd_volume": 9047.98
        },
        {
          "time": "2024-09-22T13:00:00+00:00",
          "price": 0.473,
          "trade_count": 133,
          "usd_volume": 49524.389999999985
        },
        {
          "time": "2024-09-23T11:00:00+00:00",
          "price": 0.474,
          "trade_count": 161,
          "usd_volume": 52137.26999999998
        },
        {
          "time": "2024-09-24T09:00:00+00:00",
          "price": 0.483,
          "trade_count": 247,
          "usd_volume": 82556.36
        },
        {
          "time": "2024-09-25T06:00:00+00:00",
          "price": 0.482,
          "trade_count": 640,
          "usd_volume": 97984.08
        },
        {
          "time": "2024-09-26T04:00:00+00:00",
          "price": 0.491,
          "trade_count": 48,
          "usd_volume": 8946.66
        },
        {
          "time": "2024-09-27T02:00:00+00:00",
          "price": 0.489,
          "trade_count": 98,
          "usd_volume": 26780.11999999999
        },
        {
          "time": "2024-09-27T23:00:00+00:00",
          "price": 0.485,
          "trade_count": 15,
          "usd_volume": 3400.18
        },
        {
          "time": "2024-09-28T21:00:00+00:00",
          "price": 0.483,
          "trade_count": 126,
          "usd_volume": 59204.66000000001
        },
        {
          "time": "2024-09-29T19:00:00+00:00",
          "price": 0.49,
          "trade_count": 71,
          "usd_volume": 33884.5
        },
        {
          "time": "2024-09-30T16:00:00+00:00",
          "price": 0.489,
          "trade_count": 79,
          "usd_volume": 22968.440000000002
        },
        {
          "time": "2024-10-01T14:00:00+00:00",
          "price": 0.483,
          "trade_count": 314,
          "usd_volume": 189609.8800000001
        },
        {
          "time": "2024-10-02T12:00:00+00:00",
          "price": 0.494,
          "trade_count": 252,
          "usd_volume": 107321.79000000001
        },
        {
          "time": "2024-10-03T09:00:00+00:00",
          "price": 0.495,
          "trade_count": 2420,
          "usd_volume": 1768254.4499999997
        },
        {
          "time": "2024-10-04T07:00:00+00:00",
          "price": 0.495,
          "trade_count": 2867,
          "usd_volume": 2005350.3000000003
        },
        {
          "time": "2024-10-05T05:00:00+00:00",
          "price": 0.499,
          "trade_count": 1738,
          "usd_volume": 1479181.23
        },
        {
          "time": "2024-10-06T02:00:00+00:00",
          "price": 0.502,
          "trade_count": 1584,
          "usd_volume": 868348.8499999999
        },
        {
          "time": "2024-10-07T00:00:00+00:00",
          "price": 0.508,
          "trade_count": 1012,
          "usd_volume": 264182.51
        },
        {
          "time": "2024-10-07T22:00:00+00:00",
          "price": 0.534,
          "trade_count": 697,
          "usd_volume": 177144.81000000003
        },
        {
          "time": "2024-10-08T19:00:00+00:00",
          "price": 0.528,
          "trade_count": 150,
          "usd_volume": 53644.2
        },
        {
          "time": "2024-10-09T17:00:00+00:00",
          "price": 0.5349999999999999,
          "trade_count": 99,
          "usd_volume": 90629.19999999998
        },
        {
          "time": "2024-10-10T15:00:00+00:00",
          "price": 0.553,
          "trade_count": 1579,
          "usd_volume": 157490.48000000004
        },
        {
          "time": "2024-10-11T19:00:00+00:00",
          "price": 0.533,
          "trade_count": 847,
          "usd_volume": 136883.57999999996
        },
        {
          "time": "2024-10-12T17:00:00+00:00",
          "price": 0.547,
          "trade_count": 964,
          "usd_volume": 135875.37
        },
        {
          "time": "2024-10-13T15:00:00+00:00",
          "price": 0.547,
          "trade_count": 319,
          "usd_volume": 316042.00000000006
        },
        {
          "time": "2024-10-14T13:00:00+00:00",
          "price": 0.537,
          "trade_count": 1439,
          "usd_volume": 715370.2300000003
        },
        {
          "time": "2024-10-15T10:00:00+00:00",
          "price": 0.561,
          "trade_count": 1759,
          "usd_volume": 837668.4299999999
        },
        {
          "time": "2024-10-16T08:00:00+00:00",
          "price": 0.589,
          "trade_count": 1403,
          "usd_volume": 663445.9600000002
        },
        {
          "time": "2024-10-17T06:00:00+00:00",
          "price": 0.589,
          "trade_count": 2525,
          "usd_volume": 991854.4099999997
        },
        {
          "time": "2024-10-18T03:00:00+00:00",
          "price": 0.61,
          "trade_count": 945,
          "usd_volume": 502061.4299999999
        },
        {
          "time": "2024-10-19T01:00:00+00:00",
          "price": 0.599,
          "trade_count": 1523,
          "usd_volume": 348166.2799999999
        },
        {
          "time": "2024-10-19T23:00:00+00:00",
          "price": 0.601,
          "trade_count": 169,
          "usd_volume": 17755.03
        },
        {
          "time": "2024-10-20T20:00:00+00:00",
          "price": 0.601,
          "trade_count": 1370,
          "usd_volume": 186310.06
        },
        {
          "time": "2024-10-21T18:00:00+00:00",
          "price": 0.618,
          "trade_count": 3857,
          "usd_volume": 253598.58000000005
        },
        {
          "time": "2024-10-22T16:00:00+00:00",
          "price": 0.649,
          "trade_count": 7954,
          "usd_volume": 714129.8800000001
        },
        {
          "time": "2024-10-23T13:00:00+00:00",
          "price": 0.639,
          "trade_count": 3786,
          "usd_volume": 459809.7899999999
        },
        {
          "time": "2024-10-24T11:00:00+00:00",
          "price": 0.611,
          "trade_count": 2649,
          "usd_volume": 329059.69999999995
        },
        {
          "time": "2024-10-25T09:00:00+00:00",
          "price": 0.646,
          "trade_count": 4113,
          "usd_volume": 742228.24
        },
        {
          "time": "2024-10-26T06:00:00+00:00",
          "price": 0.639,
          "trade_count": 6210,
          "usd_volume": 625696.0199999998
        },
        {
          "time": "2024-10-27T04:00:00+00:00",
          "price": 0.647,
          "trade_count": 5910,
          "usd_volume": 683817.6699999999
        },
        {
          "time": "2024-10-28T02:00:00+00:00",
          "price": 0.652,
          "trade_count": 6248,
          "usd_volume": 1204257.3099999998
        },
        {
          "time": "2024-10-28T23:00:00+00:00",
          "price": 0.663,
          "trade_count": 1797,
          "usd_volume": 523521.30000000016
        },
        {
          "time": "2024-10-29T21:00:00+00:00",
          "price": 0.664,
          "trade_count": 6674,
          "usd_volume": 443524.24000000005
        },
        {
          "time": "2024-10-30T19:00:00+00:00",
          "price": 0.647,
          "trade_count": 4156,
          "usd_volume": 411736.8999999999
        },
        {
          "time": "2024-10-31T16:00:00+00:00",
          "price": 0.635,
          "trade_count": 5319,
          "usd_volume": 1683935.9800000004
        },
        {
          "time": "2024-11-01T14:00:00+00:00",
          "price": 0.595,
          "trade_count": 8731,
          "usd_volume": 817705.6699999999
        },
        {
          "time": "2024-11-02T20:00:00+00:00",
          "price": 0.588,
          "trade_count": 4221,
          "usd_volume": 819922.0
        },
        {
          "time": "2024-11-03T17:00:00+00:00",
          "price": 0.5409999999999999,
          "trade_count": 2480,
          "usd_volume": 1015462.0999999996
        },
        {
          "time": "2024-11-04T15:00:00+00:00",
          "price": 0.581,
          "trade_count": 7126,
          "usd_volume": 5095219.91
        },
        {
          "time": "2024-11-05T13:00:00+00:00",
          "price": 0.609,
          "trade_count": 4779,
          "usd_volume": 1542857.36
        },
        {
          "time": "2024-11-06T11:00:00+00:00",
          "price": 0.998,
          "trade_count": 368,
          "usd_volume": 823245.24
        }
      ]
    },
    {
      "market_id": "1776899",
      "slug": "multi-market-event",
      "type": "多 market 父事件",
      "summary": "一个电竞父事件容纳胜负、让分和局内统计等不同命题。",
      "question": "为什么 event_id 是容器，而不是一条可以直接平均的概率轨迹？",
      "event_id": "321762",
      "event_title": "Dota 2: Tundra Esports vs Team Yandex (BO5) - ESL One Birmingham Playoffs",
      "question_text": "Dota 2: Tundra Esports vs Team Yandex - Game 2 Winner",
      "answer1": "Tundra Esports",
      "answer2": "Team Yandex",
      "identity_status": "accepted",
      "has_trusted_trades": true,
      "trusted_trade_count": 4702,
      "observed_points": {
        "1m": 173,
        "15m": 26,
        "1h": 7
      },
      "first_trade_hour_utc": "2026-03-29T14:00:00+00:00",
      "last_trade_hour_utc": "2026-03-29T20:00:00+00:00",
      "event": {
        "market_count": 137,
        "event_span_hours": 11,
        "observed_hour_rows": 227
      },
      "trajectory_1h": [
        {
          "time": "2026-03-29T14:00:00+00:00",
          "price": 0.59,
          "trade_count": 6,
          "usd_volume": 1349.6799999999998
        },
        {
          "time": "2026-03-29T15:00:00+00:00",
          "price": 0.59,
          "trade_count": 35,
          "usd_volume": 3667.12
        },
        {
          "time": "2026-03-29T16:00:00+00:00",
          "price": 0.67,
          "trade_count": 2026,
          "usd_volume": 277662.44
        },
        {
          "time": "2026-03-29T17:00:00+00:00",
          "price": 0.999,
          "trade_count": 2572,
          "usd_volume": 473427.08999999997
        },
        {
          "time": "2026-03-29T18:00:00+00:00",
          "price": 0.999,
          "trade_count": 42,
          "usd_volume": 92310.87
        },
        {
          "time": "2026-03-29T19:00:00+00:00",
          "price": 0.999,
          "trade_count": 10,
          "usd_volume": 7218.77
        },
        {
          "time": "2026-03-29T20:00:00+00:00",
          "price": 0.999,
          "trade_count": 11,
          "usd_volume": 2106.7999999999997
        }
      ]
    },
    {
      "market_id": "2036399",
      "slug": "deadline-family",
      "type": "短 deadline family",
      "summary": "相邻截止日期形成近重复命题，实际成交边界也可能超出 catalog 日期。",
      "question": "如何选择频率并防止相邻 deadline 跨 split 泄漏？",
      "event_id": "357625",
      "event_title": "US x Iran ceasefire extended by...?",
      "question_text": "US x Iran ceasefire extended by April 22, 2026?",
      "answer1": "Yes",
      "answer2": "No",
      "identity_status": "accepted",
      "has_trusted_trades": true,
      "trusted_trade_count": 44413,
      "observed_points": {
        "1m": 7845,
        "15m": 972,
        "1h": 246
      },
      "first_trade_hour_utc": "2026-04-20T19:00:00+00:00",
      "last_trade_hour_utc": "2026-05-01T00:00:00+00:00",
      "event": {
        "market_count": 4,
        "event_span_hours": 535,
        "observed_hour_rows": 802
      },
      "trajectory_1h": [
        {
          "time": "2026-04-20T19:00:00+00:00",
          "price": 0.38,
          "trade_count": 1,
          "usd_volume": 0.61
        },
        {
          "time": "2026-04-20T20:00:00+00:00",
          "price": 0.64,
          "trade_count": 38,
          "usd_volume": 887.16
        },
        {
          "time": "2026-04-20T21:00:00+00:00",
          "price": 0.65,
          "trade_count": 104,
          "usd_volume": 1313.73
        },
        {
          "time": "2026-04-20T22:00:00+00:00",
          "price": 0.65,
          "trade_count": 21,
          "usd_volume": 150.98000000000002
        },
        {
          "time": "2026-04-20T23:00:00+00:00",
          "price": 0.56,
          "trade_count": 57,
          "usd_volume": 2932.8499999999995
        },
        {
          "time": "2026-04-21T00:00:00+00:00",
          "price": 0.58,
          "trade_count": 57,
          "usd_volume": 1511.1499999999999
        },
        {
          "time": "2026-04-21T01:00:00+00:00",
          "price": 0.62,
          "trade_count": 151,
          "usd_volume": 2506.16
        },
        {
          "time": "2026-04-21T02:00:00+00:00",
          "price": 0.6,
          "trade_count": 113,
          "usd_volume": 4243.14
        },
        {
          "time": "2026-04-21T03:00:00+00:00",
          "price": 0.52,
          "trade_count": 54,
          "usd_volume": 2640.9199999999996
        },
        {
          "time": "2026-04-21T04:00:00+00:00",
          "price": 0.61,
          "trade_count": 32,
          "usd_volume": 988.73
        },
        {
          "time": "2026-04-21T05:00:00+00:00",
          "price": 0.64,
          "trade_count": 54,
          "usd_volume": 3115.7000000000003
        },
        {
          "time": "2026-04-21T06:00:00+00:00",
          "price": 0.65,
          "trade_count": 47,
          "usd_volume": 2549.21
        },
        {
          "time": "2026-04-21T07:00:00+00:00",
          "price": 0.67,
          "trade_count": 41,
          "usd_volume": 1680.08
        },
        {
          "time": "2026-04-21T08:00:00+00:00",
          "price": 0.69,
          "trade_count": 33,
          "usd_volume": 1368.9699999999998
        },
        {
          "time": "2026-04-21T09:00:00+00:00",
          "price": 0.67,
          "trade_count": 67,
          "usd_volume": 3337.18
        },
        {
          "time": "2026-04-21T10:00:00+00:00",
          "price": 0.62,
          "trade_count": 60,
          "usd_volume": 10850.07
        },
        {
          "time": "2026-04-21T11:00:00+00:00",
          "price": 0.65,
          "trade_count": 54,
          "usd_volume": 4889.78
        },
        {
          "time": "2026-04-21T12:00:00+00:00",
          "price": 0.57,
          "trade_count": 138,
          "usd_volume": 10707.49
        },
        {
          "time": "2026-04-21T13:00:00+00:00",
          "price": 0.62,
          "trade_count": 127,
          "usd_volume": 4720.119999999999
        },
        {
          "time": "2026-04-21T14:00:00+00:00",
          "price": 0.6,
          "trade_count": 194,
          "usd_volume": 5175.599999999999
        },
        {
          "time": "2026-04-21T15:00:00+00:00",
          "price": 0.56,
          "trade_count": 240,
          "usd_volume": 7225.05
        },
        {
          "time": "2026-04-21T16:00:00+00:00",
          "price": 0.48,
          "trade_count": 243,
          "usd_volume": 7644.690000000001
        },
        {
          "time": "2026-04-21T17:00:00+00:00",
          "price": 0.41000000000000003,
          "trade_count": 381,
          "usd_volume": 6479.8099999999995
        },
        {
          "time": "2026-04-21T18:00:00+00:00",
          "price": 0.41000000000000003,
          "trade_count": 306,
          "usd_volume": 8013.060000000002
        },
        {
          "time": "2026-04-21T19:00:00+00:00",
          "price": 0.36,
          "trade_count": 383,
          "usd_volume": 17301.969999999998
        },
        {
          "time": "2026-04-21T20:00:00+00:00",
          "price": 0.71,
          "trade_count": 2014,
          "usd_volume": 145858.03000000006
        },
        {
          "time": "2026-04-21T21:00:00+00:00",
          "price": 0.57,
          "trade_count": 893,
          "usd_volume": 58674.1
        },
        {
          "time": "2026-04-21T22:00:00+00:00",
          "price": 0.52,
          "trade_count": 397,
          "usd_volume": 34099.61
        },
        {
          "time": "2026-04-21T23:00:00+00:00",
          "price": 0.47,
          "trade_count": 239,
          "usd_volume": 12667.43
        },
        {
          "time": "2026-04-22T00:00:00+00:00",
          "price": 0.4,
          "trade_count": 174,
          "usd_volume": 11709.22
        },
        {
          "time": "2026-04-22T01:00:00+00:00",
          "price": 0.27,
          "trade_count": 514,
          "usd_volume": 20368.15
        },
        {
          "time": "2026-04-22T02:00:00+00:00",
          "price": 0.29,
          "trade_count": 243,
          "usd_volume": 10851.38
        },
        {
          "time": "2026-04-22T03:00:00+00:00",
          "price": 0.27,
          "trade_count": 420,
          "usd_volume": 14088.340000000002
        },
        {
          "time": "2026-04-22T04:00:00+00:00",
          "price": 0.25,
          "trade_count": 155,
          "usd_volume": 11874.869999999999
        },
        {
          "time": "2026-04-22T05:00:00+00:00",
          "price": 0.27,
          "trade_count": 176,
          "usd_volume": 24412.590000000004
        },
        {
          "time": "2026-04-22T06:00:00+00:00",
          "price": 0.24,
          "trade_count": 144,
          "usd_volume": 7454.300000000001
        },
        {
          "time": "2026-04-22T07:00:00+00:00",
          "price": 0.2,
          "trade_count": 234,
          "usd_volume": 19377.43
        },
        {
          "time": "2026-04-22T08:00:00+00:00",
          "price": 0.16000000000000003,
          "trade_count": 233,
          "usd_volume": 25011.69
        },
        {
          "time": "2026-04-22T09:00:00+00:00",
          "price": 0.14,
          "trade_count": 179,
          "usd_volume": 25474.119999999995
        },
        {
          "time": "2026-04-22T10:00:00+00:00",
          "price": 0.26,
          "trade_count": 298,
          "usd_volume": 29413.309999999998
        },
        {
          "time": "2026-04-22T11:00:00+00:00",
          "price": 0.15,
          "trade_count": 420,
          "usd_volume": 17425.649999999994
        },
        {
          "time": "2026-04-22T12:00:00+00:00",
          "price": 0.55,
          "trade_count": 2296,
          "usd_volume": 168078.90000000002
        },
        {
          "time": "2026-04-22T13:00:00+00:00",
          "price": 0.23,
          "trade_count": 2287,
          "usd_volume": 148847.50999999998
        },
        {
          "time": "2026-04-22T14:00:00+00:00",
          "price": 0.17000000000000004,
          "trade_count": 480,
          "usd_volume": 32637.19
        },
        {
          "time": "2026-04-22T15:00:00+00:00",
          "price": 0.27,
          "trade_count": 1210,
          "usd_volume": 77268.09999999998
        },
        {
          "time": "2026-04-22T16:00:00+00:00",
          "price": 0.19999999999999996,
          "trade_count": 1733,
          "usd_volume": 126305.05
        },
        {
          "time": "2026-04-22T17:00:00+00:00",
          "price": 0.26,
          "trade_count": 1443,
          "usd_volume": 105218.21
        },
        {
          "time": "2026-04-22T18:00:00+00:00",
          "price": 0.19,
          "trade_count": 1050,
          "usd_volume": 48981.90000000001
        },
        {
          "time": "2026-04-22T19:00:00+00:00",
          "price": 0.13,
          "trade_count": 1286,
          "usd_volume": 51221.35999999999
        },
        {
          "time": "2026-04-22T20:00:00+00:00",
          "price": 0.08,
          "trade_count": 656,
          "usd_volume": 49295.65
        },
        {
          "time": "2026-04-22T21:00:00+00:00",
          "price": 0.07,
          "trade_count": 485,
          "usd_volume": 65565.05
        },
        {
          "time": "2026-04-22T22:00:00+00:00",
          "price": 0.07,
          "trade_count": 750,
          "usd_volume": 75299.76999999999
        },
        {
          "time": "2026-04-22T23:00:00+00:00",
          "price": 0.08,
          "trade_count": 381,
          "usd_volume": 43875.35999999999
        },
        {
          "time": "2026-04-23T00:00:00+00:00",
          "price": 0.06999999999999995,
          "trade_count": 427,
          "usd_volume": 41104.12999999999
        },
        {
          "time": "2026-04-23T01:00:00+00:00",
          "price": 0.07999999999999996,
          "trade_count": 141,
          "usd_volume": 21256.88
        },
        {
          "time": "2026-04-23T02:00:00+00:00",
          "price": 0.19,
          "trade_count": 793,
          "usd_volume": 98229.45999999999
        },
        {
          "time": "2026-04-23T03:00:00+00:00",
          "price": 0.19999999999999996,
          "trade_count": 1130,
          "usd_volume": 125091.48999999999
        },
        {
          "time": "2026-04-23T04:00:00+00:00",
          "price": 0.25,
          "trade_count": 1016,
          "usd_volume": 34767.649999999994
        },
        {
          "time": "2026-04-23T05:00:00+00:00",
          "price": 0.22,
          "trade_count": 966,
          "usd_volume": 83113.86000000002
        },
        {
          "time": "2026-04-23T06:00:00+00:00",
          "price": 0.15,
          "trade_count": 605,
          "usd_volume": 46041.05
        },
        {
          "time": "2026-04-23T07:00:00+00:00",
          "price": 0.12,
          "trade_count": 1129,
          "usd_volume": 45536.25000000001
        },
        {
          "time": "2026-04-23T08:00:00+00:00",
          "price": 0.12,
          "trade_count": 307,
          "usd_volume": 34443.959999999985
        },
        {
          "time": "2026-04-23T09:00:00+00:00",
          "price": 0.09,
          "trade_count": 299,
          "usd_volume": 52656.740000000005
        },
        {
          "time": "2026-04-23T10:00:00+00:00",
          "price": 0.1,
          "trade_count": 190,
          "usd_volume": 45769.03000000001
        },
        {
          "time": "2026-04-23T11:00:00+00:00",
          "price": 0.09,
          "trade_count": 280,
          "usd_volume": 31659.079999999998
        },
        {
          "time": "2026-04-23T12:00:00+00:00",
          "price": 0.09,
          "trade_count": 270,
          "usd_volume": 38620.409999999996
        },
        {
          "time": "2026-04-23T13:00:00+00:00",
          "price": 0.09999999999999998,
          "trade_count": 158,
          "usd_volume": 33231.37
        },
        {
          "time": "2026-04-23T14:00:00+00:00",
          "price": 0.07999999999999996,
          "trade_count": 164,
          "usd_volume": 29151.54
        },
        {
          "time": "2026-04-23T15:00:00+00:00",
          "price": 0.07,
          "trade_count": 139,
          "usd_volume": 12103.19
        },
        {
          "time": "2026-04-23T16:00:00+00:00",
          "price": 0.16,
          "trade_count": 687,
          "usd_volume": 87328.67000000003
        },
        {
          "time": "2026-04-23T17:00:00+00:00",
          "price": 0.04,
          "trade_count": 978,
          "usd_volume": 131590.45
        },
        {
          "time": "2026-04-23T18:00:00+00:00",
          "price": 0.001,
          "trade_count": 232,
          "usd_volume": 326680.04
        },
        {
          "time": "2026-04-23T19:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 68,
          "usd_volume": 89693.12
        },
        {
          "time": "2026-04-23T20:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 49,
          "usd_volume": 152771.7
        },
        {
          "time": "2026-04-23T21:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 80,
          "usd_volume": 279341.49
        },
        {
          "time": "2026-04-23T22:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 46,
          "usd_volume": 226937.28000000003
        },
        {
          "time": "2026-04-23T23:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 37,
          "usd_volume": 59136.22
        },
        {
          "time": "2026-04-24T00:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 29,
          "usd_volume": 71616.12
        },
        {
          "time": "2026-04-24T01:00:00+00:00",
          "price": 0.001,
          "trade_count": 32,
          "usd_volume": 29208.690000000002
        },
        {
          "time": "2026-04-24T02:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 39,
          "usd_volume": 99218.36999999998
        },
        {
          "time": "2026-04-24T03:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 27,
          "usd_volume": 102297.77999999998
        },
        {
          "time": "2026-04-24T04:00:00+00:00",
          "price": 0.001,
          "trade_count": 25,
          "usd_volume": 171360.80000000002
        },
        {
          "time": "2026-04-24T05:00:00+00:00",
          "price": 0.001,
          "trade_count": 36,
          "usd_volume": 137946.3
        },
        {
          "time": "2026-04-24T06:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 51,
          "usd_volume": 318174.98
        },
        {
          "time": "2026-04-24T07:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 73,
          "usd_volume": 536627.4700000001
        },
        {
          "time": "2026-04-24T08:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 82,
          "usd_volume": 337254.07000000007
        },
        {
          "time": "2026-04-24T09:00:00+00:00",
          "price": 0.001,
          "trade_count": 84,
          "usd_volume": 136276.94
        },
        {
          "time": "2026-04-24T10:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 87,
          "usd_volume": 55094.37
        },
        {
          "time": "2026-04-24T11:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 36,
          "usd_volume": 64454.83
        },
        {
          "time": "2026-04-24T12:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 25,
          "usd_volume": 44382.87000000001
        },
        {
          "time": "2026-04-24T13:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 37,
          "usd_volume": 379198.62000000005
        },
        {
          "time": "2026-04-24T14:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 42,
          "usd_volume": 99249.85000000002
        },
        {
          "time": "2026-04-24T15:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 29,
          "usd_volume": 301573.23
        },
        {
          "time": "2026-04-24T16:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 28,
          "usd_volume": 53814.94
        },
        {
          "time": "2026-04-24T17:00:00+00:00",
          "price": 0.001,
          "trade_count": 22,
          "usd_volume": 70246.32
        },
        {
          "time": "2026-04-24T18:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 23,
          "usd_volume": 85970.92
        },
        {
          "time": "2026-04-24T19:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 23,
          "usd_volume": 52351.07
        },
        {
          "time": "2026-04-24T20:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 27,
          "usd_volume": 9391.97
        },
        {
          "time": "2026-04-24T21:00:00+00:00",
          "price": 0.001,
          "trade_count": 110,
          "usd_volume": 257942.48999999996
        },
        {
          "time": "2026-04-24T22:00:00+00:00",
          "price": 0.001,
          "trade_count": 13,
          "usd_volume": 77.25
        },
        {
          "time": "2026-04-24T23:00:00+00:00",
          "price": 0.001,
          "trade_count": 18,
          "usd_volume": 459.45
        },
        {
          "time": "2026-04-25T00:00:00+00:00",
          "price": 0.001,
          "trade_count": 10,
          "usd_volume": 179.33999999999997
        },
        {
          "time": "2026-04-25T01:00:00+00:00",
          "price": 0.001,
          "trade_count": 14,
          "usd_volume": 31.57
        },
        {
          "time": "2026-04-25T02:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 16,
          "usd_volume": 329168.28
        },
        {
          "time": "2026-04-25T03:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 15,
          "usd_volume": 91607.35
        },
        {
          "time": "2026-04-25T04:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 8,
          "usd_volume": 50853.05
        },
        {
          "time": "2026-04-25T05:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 9,
          "usd_volume": 56977.45
        },
        {
          "time": "2026-04-25T06:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 14,
          "usd_volume": 217788.16
        },
        {
          "time": "2026-04-25T07:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 14,
          "usd_volume": 311327.34
        },
        {
          "time": "2026-04-25T08:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 24,
          "usd_volume": 98522.03
        },
        {
          "time": "2026-04-25T09:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 21,
          "usd_volume": 208088.92
        },
        {
          "time": "2026-04-25T10:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 13,
          "usd_volume": 118892.28
        },
        {
          "time": "2026-04-25T11:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 15,
          "usd_volume": 73697.85
        },
        {
          "time": "2026-04-25T12:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 27,
          "usd_volume": 184397.19999999998
        },
        {
          "time": "2026-04-25T13:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 16,
          "usd_volume": 270975.06
        },
        {
          "time": "2026-04-25T14:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 15,
          "usd_volume": 131426.44
        },
        {
          "time": "2026-04-25T15:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 22,
          "usd_volume": 143358.76
        },
        {
          "time": "2026-04-25T16:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 27,
          "usd_volume": 476971.9
        },
        {
          "time": "2026-04-25T17:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 35,
          "usd_volume": 485533.77
        },
        {
          "time": "2026-04-25T18:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 38,
          "usd_volume": 332119.22
        },
        {
          "time": "2026-04-25T19:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 38,
          "usd_volume": 337321.44
        },
        {
          "time": "2026-04-25T20:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 22,
          "usd_volume": 162579.05
        },
        {
          "time": "2026-04-25T21:00:00+00:00",
          "price": 0.001,
          "trade_count": 21,
          "usd_volume": 179800.17
        },
        {
          "time": "2026-04-25T22:00:00+00:00",
          "price": 0.001,
          "trade_count": 27,
          "usd_volume": 190.76000000000002
        },
        {
          "time": "2026-04-25T23:00:00+00:00",
          "price": 0.001,
          "trade_count": 31,
          "usd_volume": 101.07
        },
        {
          "time": "2026-04-26T00:00:00+00:00",
          "price": 0.001,
          "trade_count": 29,
          "usd_volume": 75.94999999999999
        },
        {
          "time": "2026-04-26T01:00:00+00:00",
          "price": 0.001,
          "trade_count": 15,
          "usd_volume": 72.02
        },
        {
          "time": "2026-04-26T02:00:00+00:00",
          "price": 0.001,
          "trade_count": 12,
          "usd_volume": 156.58999999999997
        },
        {
          "time": "2026-04-26T03:00:00+00:00",
          "price": 0.001,
          "trade_count": 14,
          "usd_volume": 162.14
        },
        {
          "time": "2026-04-26T04:00:00+00:00",
          "price": 0.001,
          "trade_count": 15,
          "usd_volume": 72.44
        },
        {
          "time": "2026-04-26T05:00:00+00:00",
          "price": 0.001,
          "trade_count": 20,
          "usd_volume": 297.87
        },
        {
          "time": "2026-04-26T06:00:00+00:00",
          "price": 0.001,
          "trade_count": 8,
          "usd_volume": 142.36
        },
        {
          "time": "2026-04-26T07:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 29,
          "usd_volume": 766042.87
        },
        {
          "time": "2026-04-26T08:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 21,
          "usd_volume": 1747920.33
        },
        {
          "time": "2026-04-26T09:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 160,
          "usd_volume": 7730385.939999998
        },
        {
          "time": "2026-04-26T10:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 88,
          "usd_volume": 1334222.8800000001
        },
        {
          "time": "2026-04-26T11:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 45,
          "usd_volume": 817817.87
        },
        {
          "time": "2026-04-26T12:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 49,
          "usd_volume": 353544.41000000003
        },
        {
          "time": "2026-04-26T13:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 144,
          "usd_volume": 921578.84
        },
        {
          "time": "2026-04-26T14:00:00+00:00",
          "price": 0.001,
          "trade_count": 66,
          "usd_volume": 49668.670000000006
        },
        {
          "time": "2026-04-26T15:00:00+00:00",
          "price": 0.001,
          "trade_count": 41,
          "usd_volume": 764.87
        },
        {
          "time": "2026-04-26T16:00:00+00:00",
          "price": 0.001,
          "trade_count": 67,
          "usd_volume": 2934.5699999999997
        },
        {
          "time": "2026-04-26T17:00:00+00:00",
          "price": 0.001,
          "trade_count": 84,
          "usd_volume": 178833.42000000004
        },
        {
          "time": "2026-04-26T18:00:00+00:00",
          "price": 0.002,
          "trade_count": 37,
          "usd_volume": 396.78999999999996
        },
        {
          "time": "2026-04-26T19:00:00+00:00",
          "price": 0.001,
          "trade_count": 36,
          "usd_volume": 636.15
        },
        {
          "time": "2026-04-26T20:00:00+00:00",
          "price": 0.002,
          "trade_count": 58,
          "usd_volume": 711239.3899999999
        },
        {
          "time": "2026-04-26T21:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 59,
          "usd_volume": 162315.73
        },
        {
          "time": "2026-04-26T22:00:00+00:00",
          "price": 0.0010000000000000009,
          "trade_count": 31,
          "usd_volume": 211230.93
        },
        {
          "time": "2026-04-26T23:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 33,
          "usd_volume": 86377.11
        },
        {
          "time": "2026-04-27T00:00:00+00:00",
          "price": 0.003,
          "trade_count": 136,
          "usd_volume": 9347159.92
        },
        {
          "time": "2026-04-27T01:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 71,
          "usd_volume": 465389.8499999999
        },
        {
          "time": "2026-04-27T02:00:00+00:00",
          "price": 0.002,
          "trade_count": 58,
          "usd_volume": 119155.16999999998
        },
        {
          "time": "2026-04-27T03:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 32,
          "usd_volume": 51068.25000000001
        },
        {
          "time": "2026-04-27T04:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 50,
          "usd_volume": 742991.0800000001
        },
        {
          "time": "2026-04-27T05:00:00+00:00",
          "price": 0.002,
          "trade_count": 42,
          "usd_volume": 498663.11000000004
        },
        {
          "time": "2026-04-27T06:00:00+00:00",
          "price": 0.002,
          "trade_count": 52,
          "usd_volume": 370194.83
        },
        {
          "time": "2026-04-27T07:00:00+00:00",
          "price": 0.002,
          "trade_count": 40,
          "usd_volume": 48678.19000000001
        },
        {
          "time": "2026-04-27T08:00:00+00:00",
          "price": 0.002,
          "trade_count": 42,
          "usd_volume": 184915.41
        },
        {
          "time": "2026-04-27T09:00:00+00:00",
          "price": 0.001,
          "trade_count": 25,
          "usd_volume": 4846.710000000001
        },
        {
          "time": "2026-04-27T10:00:00+00:00",
          "price": 0.002,
          "trade_count": 24,
          "usd_volume": 152.51000000000002
        },
        {
          "time": "2026-04-27T11:00:00+00:00",
          "price": 0.002,
          "trade_count": 38,
          "usd_volume": 219.21
        },
        {
          "time": "2026-04-27T12:00:00+00:00",
          "price": 0.002,
          "trade_count": 23,
          "usd_volume": 127.19000000000001
        },
        {
          "time": "2026-04-27T13:00:00+00:00",
          "price": 0.002,
          "trade_count": 24,
          "usd_volume": 81.13
        },
        {
          "time": "2026-04-27T14:00:00+00:00",
          "price": 0.001,
          "trade_count": 13,
          "usd_volume": 133.4
        },
        {
          "time": "2026-04-27T15:00:00+00:00",
          "price": 0.001,
          "trade_count": 12,
          "usd_volume": 178.35000000000005
        },
        {
          "time": "2026-04-27T16:00:00+00:00",
          "price": 0.002,
          "trade_count": 27,
          "usd_volume": 230.69
        },
        {
          "time": "2026-04-27T17:00:00+00:00",
          "price": 0.002,
          "trade_count": 26,
          "usd_volume": 2293.7599999999998
        },
        {
          "time": "2026-04-27T18:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 50,
          "usd_volume": 686211.12
        },
        {
          "time": "2026-04-27T19:00:00+00:00",
          "price": 0.002,
          "trade_count": 53,
          "usd_volume": 564471.4900000001
        },
        {
          "time": "2026-04-27T20:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 60,
          "usd_volume": 2617260.7300000004
        },
        {
          "time": "2026-04-27T21:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 82,
          "usd_volume": 1745681.29
        },
        {
          "time": "2026-04-27T22:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 35,
          "usd_volume": 478900.9600000001
        },
        {
          "time": "2026-04-27T23:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 26,
          "usd_volume": 112338.18000000001
        },
        {
          "time": "2026-04-28T00:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 24,
          "usd_volume": 328899.98000000004
        },
        {
          "time": "2026-04-28T01:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 61,
          "usd_volume": 606955.9800000001
        },
        {
          "time": "2026-04-28T02:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 51,
          "usd_volume": 165191.73
        },
        {
          "time": "2026-04-28T03:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 36,
          "usd_volume": 66740.52999999998
        },
        {
          "time": "2026-04-28T04:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 20,
          "usd_volume": 280490.85
        },
        {
          "time": "2026-04-28T05:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 30,
          "usd_volume": 55483.55
        },
        {
          "time": "2026-04-28T06:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 31,
          "usd_volume": 151146.79
        },
        {
          "time": "2026-04-28T07:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 31,
          "usd_volume": 772926.4500000001
        },
        {
          "time": "2026-04-28T08:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 21,
          "usd_volume": 124231.8
        },
        {
          "time": "2026-04-28T09:00:00+00:00",
          "price": 0.002,
          "trade_count": 32,
          "usd_volume": 92916.06999999999
        },
        {
          "time": "2026-04-28T10:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 36,
          "usd_volume": 234268.84
        },
        {
          "time": "2026-04-28T11:00:00+00:00",
          "price": 0.991,
          "trade_count": 1,
          "usd_volume": 0.01
        },
        {
          "time": "2026-04-28T12:00:00+00:00",
          "price": 0.003,
          "trade_count": 72,
          "usd_volume": 2608468.71
        },
        {
          "time": "2026-04-28T13:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 92,
          "usd_volume": 564798.35
        },
        {
          "time": "2026-04-28T14:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 84,
          "usd_volume": 198414.26
        },
        {
          "time": "2026-04-28T15:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 63,
          "usd_volume": 168186.48
        },
        {
          "time": "2026-04-28T16:00:00+00:00",
          "price": 0.002,
          "trade_count": 47,
          "usd_volume": 202571.69999999998
        },
        {
          "time": "2026-04-28T17:00:00+00:00",
          "price": 0.002,
          "trade_count": 66,
          "usd_volume": 170205.41
        },
        {
          "time": "2026-04-28T18:00:00+00:00",
          "price": 0.002,
          "trade_count": 79,
          "usd_volume": 123765.95999999999
        },
        {
          "time": "2026-04-28T19:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 203,
          "usd_volume": 460127.93
        },
        {
          "time": "2026-04-28T20:00:00+00:00",
          "price": 0.002,
          "trade_count": 43,
          "usd_volume": 233850.93
        },
        {
          "time": "2026-04-28T21:00:00+00:00",
          "price": 0.002,
          "trade_count": 21,
          "usd_volume": 114960.81
        },
        {
          "time": "2026-04-28T22:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 57,
          "usd_volume": 1308175.2999999998
        },
        {
          "time": "2026-04-28T23:00:00+00:00",
          "price": 0.003,
          "trade_count": 73,
          "usd_volume": 925762.96
        },
        {
          "time": "2026-04-29T00:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 62,
          "usd_volume": 121628.36
        },
        {
          "time": "2026-04-29T01:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 57,
          "usd_volume": 381285.17
        },
        {
          "time": "2026-04-29T02:00:00+00:00",
          "price": 0.003,
          "trade_count": 44,
          "usd_volume": 54512.7
        },
        {
          "time": "2026-04-29T03:00:00+00:00",
          "price": 0.003,
          "trade_count": 37,
          "usd_volume": 29483.53
        },
        {
          "time": "2026-04-29T04:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 33,
          "usd_volume": 145670.33000000002
        },
        {
          "time": "2026-04-29T05:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 36,
          "usd_volume": 84983.95
        },
        {
          "time": "2026-04-29T06:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 28,
          "usd_volume": 111407.84
        },
        {
          "time": "2026-04-29T07:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 62,
          "usd_volume": 26861.49
        },
        {
          "time": "2026-04-29T08:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 36,
          "usd_volume": 290779.08999999997
        },
        {
          "time": "2026-04-29T09:00:00+00:00",
          "price": 0.002,
          "trade_count": 19,
          "usd_volume": 211323.08
        },
        {
          "time": "2026-04-29T10:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 27,
          "usd_volume": 38444.99
        },
        {
          "time": "2026-04-29T11:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 35,
          "usd_volume": 83075.40999999999
        },
        {
          "time": "2026-04-29T12:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 41,
          "usd_volume": 903916.8099999999
        },
        {
          "time": "2026-04-29T13:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 48,
          "usd_volume": 301981.87000000005
        },
        {
          "time": "2026-04-29T14:00:00+00:00",
          "price": 0.002,
          "trade_count": 54,
          "usd_volume": 236522.27999999997
        },
        {
          "time": "2026-04-29T15:00:00+00:00",
          "price": 0.003,
          "trade_count": 59,
          "usd_volume": 2060517.2099999997
        },
        {
          "time": "2026-04-29T16:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 74,
          "usd_volume": 144634.15000000002
        },
        {
          "time": "2026-04-29T17:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 50,
          "usd_volume": 92790.53000000001
        },
        {
          "time": "2026-04-29T18:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 63,
          "usd_volume": 1399832.79
        },
        {
          "time": "2026-04-29T19:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 69,
          "usd_volume": 126261.10000000002
        },
        {
          "time": "2026-04-29T20:00:00+00:00",
          "price": 0.003,
          "trade_count": 114,
          "usd_volume": 174170.96000000002
        },
        {
          "time": "2026-04-29T21:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 169,
          "usd_volume": 228060.45
        },
        {
          "time": "2026-04-29T22:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 255,
          "usd_volume": 7679625.55
        },
        {
          "time": "2026-04-29T23:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 178,
          "usd_volume": 4686084.680000001
        },
        {
          "time": "2026-04-30T00:00:00+00:00",
          "price": 0.003,
          "trade_count": 170,
          "usd_volume": 5725775.059999998
        },
        {
          "time": "2026-04-30T01:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 93,
          "usd_volume": 126657.83000000002
        },
        {
          "time": "2026-04-30T02:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 69,
          "usd_volume": 318933.88
        },
        {
          "time": "2026-04-30T03:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 72,
          "usd_volume": 85717.54
        },
        {
          "time": "2026-04-30T04:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 29,
          "usd_volume": 63989.24
        },
        {
          "time": "2026-04-30T05:00:00+00:00",
          "price": 0.002,
          "trade_count": 54,
          "usd_volume": 104592.44999999998
        },
        {
          "time": "2026-04-30T06:00:00+00:00",
          "price": 0.002,
          "trade_count": 70,
          "usd_volume": 1049234.21
        },
        {
          "time": "2026-04-30T07:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 103,
          "usd_volume": 137086.82
        },
        {
          "time": "2026-04-30T08:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 82,
          "usd_volume": 122445.46999999999
        },
        {
          "time": "2026-04-30T09:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 109,
          "usd_volume": 500816.24
        },
        {
          "time": "2026-04-30T10:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 55,
          "usd_volume": 884393.0900000001
        },
        {
          "time": "2026-04-30T11:00:00+00:00",
          "price": 0.001,
          "trade_count": 25,
          "usd_volume": 193178.00999999998
        },
        {
          "time": "2026-04-30T12:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 20,
          "usd_volume": 73314.07
        },
        {
          "time": "2026-04-30T13:00:00+00:00",
          "price": 0.001,
          "trade_count": 58,
          "usd_volume": 193031.32999999996
        },
        {
          "time": "2026-04-30T14:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 56,
          "usd_volume": 518685.23
        },
        {
          "time": "2026-04-30T15:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 69,
          "usd_volume": 313429.34
        },
        {
          "time": "2026-04-30T16:00:00+00:00",
          "price": 0.001,
          "trade_count": 65,
          "usd_volume": 326013.9
        },
        {
          "time": "2026-04-30T17:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 56,
          "usd_volume": 255821.25
        },
        {
          "time": "2026-04-30T18:00:00+00:00",
          "price": 0.001,
          "trade_count": 80,
          "usd_volume": 234766.62
        },
        {
          "time": "2026-04-30T19:00:00+00:00",
          "price": 0.006,
          "trade_count": 375,
          "usd_volume": 9004523.930000003
        },
        {
          "time": "2026-04-30T20:00:00+00:00",
          "price": 0.0040000000000000036,
          "trade_count": 998,
          "usd_volume": 2168397.5999999996
        },
        {
          "time": "2026-04-30T21:00:00+00:00",
          "price": 0.0030000000000000027,
          "trade_count": 228,
          "usd_volume": 234650.88999999998
        },
        {
          "time": "2026-04-30T22:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 190,
          "usd_volume": 715579.62
        },
        {
          "time": "2026-04-30T23:00:00+00:00",
          "price": 0.0020000000000000018,
          "trade_count": 271,
          "usd_volume": 340777.6499999999
        },
        {
          "time": "2026-05-01T00:00:00+00:00",
          "price": 0.001,
          "trade_count": 423,
          "usd_volume": 1001841.4200000002
        }
      ]
    },
    {
      "market_id": "1269423",
      "slug": "non-binary-label",
      "type": "非 Yes/No outcome",
      "summary": "价格方向对应 answer1=Seahawks，而不是抽象的 Yes。",
      "question": "为什么训练样本必须携带 answer1/answer2 的命题方向？",
      "event_id": "188978",
      "event_title": "Seattle vs. New England",
      "question_text": "Seahawks vs. Patriots",
      "answer1": "Seahawks",
      "answer2": "Patriots",
      "identity_status": "accepted",
      "has_trusted_trades": true,
      "trusted_trade_count": 61548,
      "observed_points": {
        "1m": 10190,
        "15m": 1349,
        "1h": 340
      },
      "first_trade_hour_utc": "2026-01-26T03:00:00+00:00",
      "last_trade_hour_utc": "2026-02-09T06:00:00+00:00",
      "event": {
        "market_count": 95,
        "event_span_hours": 360,
        "observed_hour_rows": 3403
      },
      "trajectory_1h": [
        {
          "time": "2026-01-26T03:00:00+00:00",
          "price": 0.67,
          "trade_count": 54,
          "usd_volume": 19372.589999999997
        },
        {
          "time": "2026-01-26T04:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 43,
          "usd_volume": 751.6399999999998
        },
        {
          "time": "2026-01-26T05:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 50,
          "usd_volume": 2739.16
        },
        {
          "time": "2026-01-26T06:00:00+00:00",
          "price": 0.67,
          "trade_count": 42,
          "usd_volume": 491.02
        },
        {
          "time": "2026-01-26T08:00:00+00:00",
          "price": 0.67,
          "trade_count": 26,
          "usd_volume": 3044.38
        },
        {
          "time": "2026-01-26T09:00:00+00:00",
          "price": 0.67,
          "trade_count": 26,
          "usd_volume": 792.98
        },
        {
          "time": "2026-01-26T10:00:00+00:00",
          "price": 0.67,
          "trade_count": 205,
          "usd_volume": 962.4900000000001
        },
        {
          "time": "2026-01-26T12:00:00+00:00",
          "price": 0.67,
          "trade_count": 15,
          "usd_volume": 253.02000000000004
        },
        {
          "time": "2026-01-26T13:00:00+00:00",
          "price": 0.67,
          "trade_count": 15,
          "usd_volume": 745.5300000000001
        },
        {
          "time": "2026-01-26T14:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 22,
          "usd_volume": 896.41
        },
        {
          "time": "2026-01-26T16:00:00+00:00",
          "price": 0.67,
          "trade_count": 171,
          "usd_volume": 233380.5
        },
        {
          "time": "2026-01-26T17:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 54,
          "usd_volume": 28218.550000000003
        },
        {
          "time": "2026-01-26T18:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 33,
          "usd_volume": 1010.22
        },
        {
          "time": "2026-01-26T20:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 54,
          "usd_volume": 60364.98000000001
        },
        {
          "time": "2026-01-26T21:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 26,
          "usd_volume": 243.58999999999997
        },
        {
          "time": "2026-01-26T22:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 37,
          "usd_volume": 1042.21
        },
        {
          "time": "2026-01-26T23:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 33,
          "usd_volume": 247.39999999999992
        },
        {
          "time": "2026-01-27T01:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 20,
          "usd_volume": 137.58
        },
        {
          "time": "2026-01-27T02:00:00+00:00",
          "price": 0.67,
          "trade_count": 27,
          "usd_volume": 355.4999999999999
        },
        {
          "time": "2026-01-27T03:00:00+00:00",
          "price": 0.67,
          "trade_count": 30,
          "usd_volume": 826.92
        },
        {
          "time": "2026-01-27T05:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 27,
          "usd_volume": 232.62999999999997
        },
        {
          "time": "2026-01-27T06:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 26,
          "usd_volume": 409.57
        },
        {
          "time": "2026-01-27T07:00:00+00:00",
          "price": 0.67,
          "trade_count": 34,
          "usd_volume": 548.52
        },
        {
          "time": "2026-01-27T09:00:00+00:00",
          "price": 0.67,
          "trade_count": 12,
          "usd_volume": 154.56
        },
        {
          "time": "2026-01-27T10:00:00+00:00",
          "price": 0.67,
          "trade_count": 32,
          "usd_volume": 398.8
        },
        {
          "time": "2026-01-27T11:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 27,
          "usd_volume": 447.17
        },
        {
          "time": "2026-01-27T13:00:00+00:00",
          "price": 0.67,
          "trade_count": 37,
          "usd_volume": 3843.38
        },
        {
          "time": "2026-01-27T14:00:00+00:00",
          "price": 0.67,
          "trade_count": 48,
          "usd_volume": 808.44
        },
        {
          "time": "2026-01-27T15:00:00+00:00",
          "price": 0.67,
          "trade_count": 57,
          "usd_volume": 1514.2900000000002
        },
        {
          "time": "2026-01-27T16:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 13,
          "usd_volume": 1250.9
        },
        {
          "time": "2026-01-27T18:00:00+00:00",
          "price": 0.69,
          "trade_count": 128,
          "usd_volume": 13499.98
        },
        {
          "time": "2026-01-27T19:00:00+00:00",
          "price": 0.69,
          "trade_count": 112,
          "usd_volume": 17337.82
        },
        {
          "time": "2026-01-27T20:00:00+00:00",
          "price": 0.68,
          "trade_count": 146,
          "usd_volume": 1665.08
        },
        {
          "time": "2026-01-27T22:00:00+00:00",
          "price": 0.69,
          "trade_count": 70,
          "usd_volume": 995.7199999999999
        },
        {
          "time": "2026-01-27T23:00:00+00:00",
          "price": 0.69,
          "trade_count": 80,
          "usd_volume": 20639.12
        },
        {
          "time": "2026-01-28T00:00:00+00:00",
          "price": 0.69,
          "trade_count": 67,
          "usd_volume": 7408.68
        },
        {
          "time": "2026-01-28T02:00:00+00:00",
          "price": 0.68,
          "trade_count": 85,
          "usd_volume": 1916.9299999999998
        },
        {
          "time": "2026-01-28T03:00:00+00:00",
          "price": 0.69,
          "trade_count": 64,
          "usd_volume": 1666.66
        },
        {
          "time": "2026-01-28T04:00:00+00:00",
          "price": 0.68,
          "trade_count": 43,
          "usd_volume": 350.11
        },
        {
          "time": "2026-01-28T06:00:00+00:00",
          "price": 0.69,
          "trade_count": 70,
          "usd_volume": 586.41
        },
        {
          "time": "2026-01-28T07:00:00+00:00",
          "price": 0.69,
          "trade_count": 47,
          "usd_volume": 1341.3299999999997
        },
        {
          "time": "2026-01-28T08:00:00+00:00",
          "price": 0.69,
          "trade_count": 63,
          "usd_volume": 18862.76
        },
        {
          "time": "2026-01-28T09:00:00+00:00",
          "price": 0.69,
          "trade_count": 74,
          "usd_volume": 1811.3400000000001
        },
        {
          "time": "2026-01-28T11:00:00+00:00",
          "price": 0.69,
          "trade_count": 172,
          "usd_volume": 419.09000000000003
        },
        {
          "time": "2026-01-28T12:00:00+00:00",
          "price": 0.69,
          "trade_count": 79,
          "usd_volume": 570.76
        },
        {
          "time": "2026-01-28T13:00:00+00:00",
          "price": 0.69,
          "trade_count": 82,
          "usd_volume": 716.94
        },
        {
          "time": "2026-01-28T15:00:00+00:00",
          "price": 0.69,
          "trade_count": 77,
          "usd_volume": 1434.5000000000002
        },
        {
          "time": "2026-01-28T16:00:00+00:00",
          "price": 0.69,
          "trade_count": 131,
          "usd_volume": 706.1999999999999
        },
        {
          "time": "2026-01-28T17:00:00+00:00",
          "price": 0.69,
          "trade_count": 120,
          "usd_volume": 46015.649999999994
        },
        {
          "time": "2026-01-28T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 53,
          "usd_volume": 414.17
        },
        {
          "time": "2026-01-28T20:00:00+00:00",
          "price": 0.69,
          "trade_count": 50,
          "usd_volume": 2101.98
        },
        {
          "time": "2026-01-28T21:00:00+00:00",
          "price": 0.69,
          "trade_count": 38,
          "usd_volume": 1009.6600000000001
        },
        {
          "time": "2026-01-28T23:00:00+00:00",
          "price": 0.69,
          "trade_count": 47,
          "usd_volume": 288.15999999999997
        },
        {
          "time": "2026-01-29T00:00:00+00:00",
          "price": 0.68,
          "trade_count": 54,
          "usd_volume": 983.3800000000001
        },
        {
          "time": "2026-01-29T01:00:00+00:00",
          "price": 0.69,
          "trade_count": 20,
          "usd_volume": 152.88
        },
        {
          "time": "2026-01-29T02:00:00+00:00",
          "price": 0.69,
          "trade_count": 35,
          "usd_volume": 925.41
        },
        {
          "time": "2026-01-29T04:00:00+00:00",
          "price": 0.69,
          "trade_count": 24,
          "usd_volume": 654.94
        },
        {
          "time": "2026-01-29T05:00:00+00:00",
          "price": 0.69,
          "trade_count": 66,
          "usd_volume": 787.1200000000002
        },
        {
          "time": "2026-01-29T06:00:00+00:00",
          "price": 0.69,
          "trade_count": 69,
          "usd_volume": 718.8099999999998
        },
        {
          "time": "2026-01-29T08:00:00+00:00",
          "price": 0.69,
          "trade_count": 37,
          "usd_volume": 378.28
        },
        {
          "time": "2026-01-29T09:00:00+00:00",
          "price": 0.68,
          "trade_count": 41,
          "usd_volume": 1485.52
        },
        {
          "time": "2026-01-29T10:00:00+00:00",
          "price": 0.68,
          "trade_count": 90,
          "usd_volume": 348.77
        },
        {
          "time": "2026-01-29T12:00:00+00:00",
          "price": 0.69,
          "trade_count": 101,
          "usd_volume": 3846.710000000001
        },
        {
          "time": "2026-01-29T13:00:00+00:00",
          "price": 0.69,
          "trade_count": 37,
          "usd_volume": 305.59000000000003
        },
        {
          "time": "2026-01-29T14:00:00+00:00",
          "price": 0.69,
          "trade_count": 27,
          "usd_volume": 280.16
        },
        {
          "time": "2026-01-29T16:00:00+00:00",
          "price": 0.69,
          "trade_count": 83,
          "usd_volume": 2692.58
        },
        {
          "time": "2026-01-29T17:00:00+00:00",
          "price": 0.69,
          "trade_count": 75,
          "usd_volume": 1705.9099999999999
        },
        {
          "time": "2026-01-29T18:00:00+00:00",
          "price": 0.68,
          "trade_count": 85,
          "usd_volume": 741.3700000000001
        },
        {
          "time": "2026-01-29T20:00:00+00:00",
          "price": 0.69,
          "trade_count": 138,
          "usd_volume": 1022.2400000000001
        },
        {
          "time": "2026-01-29T21:00:00+00:00",
          "price": 0.68,
          "trade_count": 229,
          "usd_volume": 1164.68
        },
        {
          "time": "2026-01-29T22:00:00+00:00",
          "price": 0.68,
          "trade_count": 58,
          "usd_volume": 924.27
        },
        {
          "time": "2026-01-29T23:00:00+00:00",
          "price": 0.68,
          "trade_count": 130,
          "usd_volume": 708.7800000000001
        },
        {
          "time": "2026-01-30T01:00:00+00:00",
          "price": 0.68,
          "trade_count": 95,
          "usd_volume": 2091.46
        },
        {
          "time": "2026-01-30T02:00:00+00:00",
          "price": 0.68,
          "trade_count": 53,
          "usd_volume": 1462.5700000000002
        },
        {
          "time": "2026-01-30T03:00:00+00:00",
          "price": 0.69,
          "trade_count": 81,
          "usd_volume": 2115.0
        },
        {
          "time": "2026-01-30T05:00:00+00:00",
          "price": 0.68,
          "trade_count": 38,
          "usd_volume": 658.12
        },
        {
          "time": "2026-01-30T06:00:00+00:00",
          "price": 0.69,
          "trade_count": 23,
          "usd_volume": 185.60000000000005
        },
        {
          "time": "2026-01-30T07:00:00+00:00",
          "price": 0.68,
          "trade_count": 24,
          "usd_volume": 221.51000000000002
        },
        {
          "time": "2026-01-30T09:00:00+00:00",
          "price": 0.69,
          "trade_count": 29,
          "usd_volume": 29831.44
        },
        {
          "time": "2026-01-30T10:00:00+00:00",
          "price": 0.68,
          "trade_count": 31,
          "usd_volume": 292.89
        },
        {
          "time": "2026-01-30T11:00:00+00:00",
          "price": 0.69,
          "trade_count": 36,
          "usd_volume": 191.73000000000002
        },
        {
          "time": "2026-01-30T13:00:00+00:00",
          "price": 0.68,
          "trade_count": 14,
          "usd_volume": 209.4
        },
        {
          "time": "2026-01-30T14:00:00+00:00",
          "price": 0.68,
          "trade_count": 32,
          "usd_volume": 685.03
        },
        {
          "time": "2026-01-30T15:00:00+00:00",
          "price": 0.69,
          "trade_count": 58,
          "usd_volume": 793.8800000000001
        },
        {
          "time": "2026-01-30T16:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 64,
          "usd_volume": 3119.32
        },
        {
          "time": "2026-01-30T18:00:00+00:00",
          "price": 0.69,
          "trade_count": 64,
          "usd_volume": 493.77
        },
        {
          "time": "2026-01-30T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 93,
          "usd_volume": 72377.86
        },
        {
          "time": "2026-01-30T20:00:00+00:00",
          "price": 0.68,
          "trade_count": 36,
          "usd_volume": 1834.1
        },
        {
          "time": "2026-01-30T22:00:00+00:00",
          "price": 0.68,
          "trade_count": 61,
          "usd_volume": 608.59
        },
        {
          "time": "2026-01-30T23:00:00+00:00",
          "price": 0.68,
          "trade_count": 34,
          "usd_volume": 710.91
        },
        {
          "time": "2026-01-31T00:00:00+00:00",
          "price": 0.68,
          "trade_count": 28,
          "usd_volume": 439.97
        },
        {
          "time": "2026-01-31T02:00:00+00:00",
          "price": 0.68,
          "trade_count": 27,
          "usd_volume": 2903.3599999999997
        },
        {
          "time": "2026-01-31T03:00:00+00:00",
          "price": 0.68,
          "trade_count": 30,
          "usd_volume": 576.01
        },
        {
          "time": "2026-01-31T04:00:00+00:00",
          "price": 0.68,
          "trade_count": 26,
          "usd_volume": 261.96000000000004
        },
        {
          "time": "2026-01-31T06:00:00+00:00",
          "price": 0.68,
          "trade_count": 39,
          "usd_volume": 1201.2900000000002
        },
        {
          "time": "2026-01-31T07:00:00+00:00",
          "price": 0.68,
          "trade_count": 35,
          "usd_volume": 313.1
        },
        {
          "time": "2026-01-31T08:00:00+00:00",
          "price": 0.68,
          "trade_count": 35,
          "usd_volume": 4120.48
        },
        {
          "time": "2026-01-31T09:00:00+00:00",
          "price": 0.69,
          "trade_count": 25,
          "usd_volume": 393.44
        },
        {
          "time": "2026-01-31T11:00:00+00:00",
          "price": 0.69,
          "trade_count": 44,
          "usd_volume": 990.5800000000002
        },
        {
          "time": "2026-01-31T12:00:00+00:00",
          "price": 0.69,
          "trade_count": 28,
          "usd_volume": 401.8699999999999
        },
        {
          "time": "2026-01-31T13:00:00+00:00",
          "price": 0.68,
          "trade_count": 27,
          "usd_volume": 500.93999999999994
        },
        {
          "time": "2026-01-31T15:00:00+00:00",
          "price": 0.68,
          "trade_count": 46,
          "usd_volume": 1330.0900000000001
        },
        {
          "time": "2026-01-31T16:00:00+00:00",
          "price": 0.69,
          "trade_count": 204,
          "usd_volume": 99358.70999999995
        },
        {
          "time": "2026-01-31T17:00:00+00:00",
          "price": 0.69,
          "trade_count": 47,
          "usd_volume": 1631.5700000000002
        },
        {
          "time": "2026-01-31T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 30,
          "usd_volume": 1040.88
        },
        {
          "time": "2026-01-31T20:00:00+00:00",
          "price": 0.68,
          "trade_count": 25,
          "usd_volume": 579.4000000000001
        },
        {
          "time": "2026-01-31T21:00:00+00:00",
          "price": 0.69,
          "trade_count": 18,
          "usd_volume": 639.03
        },
        {
          "time": "2026-01-31T23:00:00+00:00",
          "price": 0.68,
          "trade_count": 20,
          "usd_volume": 794.0999999999998
        },
        {
          "time": "2026-02-01T00:00:00+00:00",
          "price": 0.68,
          "trade_count": 23,
          "usd_volume": 367.96000000000004
        },
        {
          "time": "2026-02-01T01:00:00+00:00",
          "price": 0.68,
          "trade_count": 47,
          "usd_volume": 5934.23
        },
        {
          "time": "2026-02-01T02:00:00+00:00",
          "price": 0.68,
          "trade_count": 102,
          "usd_volume": 642.0600000000001
        },
        {
          "time": "2026-02-01T04:00:00+00:00",
          "price": 0.69,
          "trade_count": 42,
          "usd_volume": 6755.79
        },
        {
          "time": "2026-02-01T05:00:00+00:00",
          "price": 0.69,
          "trade_count": 51,
          "usd_volume": 205277.01
        },
        {
          "time": "2026-02-01T06:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 52,
          "usd_volume": 238715.64999999997
        },
        {
          "time": "2026-02-01T08:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 62,
          "usd_volume": 4137.539999999999
        },
        {
          "time": "2026-02-01T09:00:00+00:00",
          "price": 0.68,
          "trade_count": 40,
          "usd_volume": 9304.489999999998
        },
        {
          "time": "2026-02-01T10:00:00+00:00",
          "price": 0.68,
          "trade_count": 34,
          "usd_volume": 1050.25
        },
        {
          "time": "2026-02-01T12:00:00+00:00",
          "price": 0.68,
          "trade_count": 33,
          "usd_volume": 833.65
        },
        {
          "time": "2026-02-01T13:00:00+00:00",
          "price": 0.68,
          "trade_count": 40,
          "usd_volume": 1353.24
        },
        {
          "time": "2026-02-01T14:00:00+00:00",
          "price": 0.68,
          "trade_count": 31,
          "usd_volume": 557.58
        },
        {
          "time": "2026-02-01T16:00:00+00:00",
          "price": 0.69,
          "trade_count": 33,
          "usd_volume": 29008.07
        },
        {
          "time": "2026-02-01T17:00:00+00:00",
          "price": 0.68,
          "trade_count": 36,
          "usd_volume": 783.91
        },
        {
          "time": "2026-02-01T18:00:00+00:00",
          "price": 0.68,
          "trade_count": 43,
          "usd_volume": 976.83
        },
        {
          "time": "2026-02-01T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 57,
          "usd_volume": 1733.1
        },
        {
          "time": "2026-02-01T21:00:00+00:00",
          "price": 0.69,
          "trade_count": 44,
          "usd_volume": 1367.83
        },
        {
          "time": "2026-02-01T22:00:00+00:00",
          "price": 0.69,
          "trade_count": 24,
          "usd_volume": 237.8
        },
        {
          "time": "2026-02-01T23:00:00+00:00",
          "price": 0.69,
          "trade_count": 25,
          "usd_volume": 425.44
        },
        {
          "time": "2026-02-02T01:00:00+00:00",
          "price": 0.68,
          "trade_count": 67,
          "usd_volume": 1664.0100000000002
        },
        {
          "time": "2026-02-02T02:00:00+00:00",
          "price": 0.68,
          "trade_count": 28,
          "usd_volume": 40443.11
        },
        {
          "time": "2026-02-02T03:00:00+00:00",
          "price": 0.68,
          "trade_count": 25,
          "usd_volume": 811.74
        },
        {
          "time": "2026-02-02T05:00:00+00:00",
          "price": 0.69,
          "trade_count": 22,
          "usd_volume": 324.23
        },
        {
          "time": "2026-02-02T06:00:00+00:00",
          "price": 0.68,
          "trade_count": 35,
          "usd_volume": 853.2900000000001
        },
        {
          "time": "2026-02-02T07:00:00+00:00",
          "price": 0.69,
          "trade_count": 35,
          "usd_volume": 1173.26
        },
        {
          "time": "2026-02-02T09:00:00+00:00",
          "price": 0.69,
          "trade_count": 66,
          "usd_volume": 19781.39
        },
        {
          "time": "2026-02-02T10:00:00+00:00",
          "price": 0.68,
          "trade_count": 35,
          "usd_volume": 8506.77
        },
        {
          "time": "2026-02-02T11:00:00+00:00",
          "price": 0.69,
          "trade_count": 30,
          "usd_volume": 591.7299999999999
        },
        {
          "time": "2026-02-02T13:00:00+00:00",
          "price": 0.68,
          "trade_count": 36,
          "usd_volume": 1346.1100000000001
        },
        {
          "time": "2026-02-02T14:00:00+00:00",
          "price": 0.69,
          "trade_count": 47,
          "usd_volume": 502.14
        },
        {
          "time": "2026-02-02T15:00:00+00:00",
          "price": 0.69,
          "trade_count": 60,
          "usd_volume": 3960.93
        },
        {
          "time": "2026-02-02T16:00:00+00:00",
          "price": 0.68,
          "trade_count": 45,
          "usd_volume": 25575.850000000002
        },
        {
          "time": "2026-02-02T18:00:00+00:00",
          "price": 0.68,
          "trade_count": 51,
          "usd_volume": 1539.54
        },
        {
          "time": "2026-02-02T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 41,
          "usd_volume": 1682.2699999999998
        },
        {
          "time": "2026-02-02T20:00:00+00:00",
          "price": 0.69,
          "trade_count": 47,
          "usd_volume": 625.13
        },
        {
          "time": "2026-02-02T22:00:00+00:00",
          "price": 0.69,
          "trade_count": 33,
          "usd_volume": 3023.7200000000003
        },
        {
          "time": "2026-02-02T23:00:00+00:00",
          "price": 0.69,
          "trade_count": 41,
          "usd_volume": 1800.89
        },
        {
          "time": "2026-02-03T00:00:00+00:00",
          "price": 0.68,
          "trade_count": 22,
          "usd_volume": 528.71
        },
        {
          "time": "2026-02-03T02:00:00+00:00",
          "price": 0.69,
          "trade_count": 43,
          "usd_volume": 41241.549999999996
        },
        {
          "time": "2026-02-03T03:00:00+00:00",
          "price": 0.69,
          "trade_count": 66,
          "usd_volume": 29022.840000000004
        },
        {
          "time": "2026-02-03T04:00:00+00:00",
          "price": 0.69,
          "trade_count": 32,
          "usd_volume": 7611.719999999999
        },
        {
          "time": "2026-02-03T06:00:00+00:00",
          "price": 0.68,
          "trade_count": 30,
          "usd_volume": 1159.2000000000003
        },
        {
          "time": "2026-02-03T07:00:00+00:00",
          "price": 0.69,
          "trade_count": 36,
          "usd_volume": 9213.720000000001
        },
        {
          "time": "2026-02-03T08:00:00+00:00",
          "price": 0.69,
          "trade_count": 37,
          "usd_volume": 11495.07
        },
        {
          "time": "2026-02-03T09:00:00+00:00",
          "price": 0.69,
          "trade_count": 23,
          "usd_volume": 486.73999999999995
        },
        {
          "time": "2026-02-03T11:00:00+00:00",
          "price": 0.68,
          "trade_count": 16,
          "usd_volume": 2200.17
        },
        {
          "time": "2026-02-03T12:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 35,
          "usd_volume": 1799.38
        },
        {
          "time": "2026-02-03T13:00:00+00:00",
          "price": 0.69,
          "trade_count": 43,
          "usd_volume": 1864.6000000000001
        },
        {
          "time": "2026-02-03T15:00:00+00:00",
          "price": 0.68,
          "trade_count": 76,
          "usd_volume": 683.96
        },
        {
          "time": "2026-02-03T16:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 52,
          "usd_volume": 4601.109999999999
        },
        {
          "time": "2026-02-03T17:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 44,
          "usd_volume": 2494.629999999999
        },
        {
          "time": "2026-02-03T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 57,
          "usd_volume": 1745.0900000000001
        },
        {
          "time": "2026-02-03T20:00:00+00:00",
          "price": 0.68,
          "trade_count": 48,
          "usd_volume": 2315.9
        },
        {
          "time": "2026-02-03T21:00:00+00:00",
          "price": 0.69,
          "trade_count": 32,
          "usd_volume": 8729.610000000002
        },
        {
          "time": "2026-02-03T23:00:00+00:00",
          "price": 0.68,
          "trade_count": 30,
          "usd_volume": 4096.529999999999
        },
        {
          "time": "2026-02-04T00:00:00+00:00",
          "price": 0.69,
          "trade_count": 26,
          "usd_volume": 2225.29
        },
        {
          "time": "2026-02-04T01:00:00+00:00",
          "price": 0.69,
          "trade_count": 24,
          "usd_volume": 15972.560000000001
        },
        {
          "time": "2026-02-04T02:00:00+00:00",
          "price": 0.69,
          "trade_count": 29,
          "usd_volume": 4154.87
        },
        {
          "time": "2026-02-04T04:00:00+00:00",
          "price": 0.69,
          "trade_count": 26,
          "usd_volume": 5175.799999999999
        },
        {
          "time": "2026-02-04T05:00:00+00:00",
          "price": 0.68,
          "trade_count": 35,
          "usd_volume": 1669.4399999999998
        },
        {
          "time": "2026-02-04T06:00:00+00:00",
          "price": 0.69,
          "trade_count": 34,
          "usd_volume": 2731.3700000000003
        },
        {
          "time": "2026-02-04T08:00:00+00:00",
          "price": 0.69,
          "trade_count": 30,
          "usd_volume": 999.6800000000001
        },
        {
          "time": "2026-02-04T09:00:00+00:00",
          "price": 0.68,
          "trade_count": 39,
          "usd_volume": 4569.7699999999995
        },
        {
          "time": "2026-02-04T10:00:00+00:00",
          "price": 0.69,
          "trade_count": 41,
          "usd_volume": 2514.47
        },
        {
          "time": "2026-02-04T12:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 34,
          "usd_volume": 4435.34
        },
        {
          "time": "2026-02-04T13:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 35,
          "usd_volume": 6668.44
        },
        {
          "time": "2026-02-04T14:00:00+00:00",
          "price": 0.69,
          "trade_count": 36,
          "usd_volume": 370.53000000000003
        },
        {
          "time": "2026-02-04T16:00:00+00:00",
          "price": 0.69,
          "trade_count": 43,
          "usd_volume": 6761.4800000000005
        },
        {
          "time": "2026-02-04T17:00:00+00:00",
          "price": 0.69,
          "trade_count": 59,
          "usd_volume": 10333.9
        },
        {
          "time": "2026-02-04T18:00:00+00:00",
          "price": 0.69,
          "trade_count": 34,
          "usd_volume": 1456.06
        },
        {
          "time": "2026-02-04T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 58,
          "usd_volume": 2494.1199999999994
        },
        {
          "time": "2026-02-04T21:00:00+00:00",
          "price": 0.69,
          "trade_count": 28,
          "usd_volume": 394.6
        },
        {
          "time": "2026-02-04T22:00:00+00:00",
          "price": 0.68,
          "trade_count": 104,
          "usd_volume": 13559.449999999999
        },
        {
          "time": "2026-02-04T23:00:00+00:00",
          "price": 0.69,
          "trade_count": 52,
          "usd_volume": 2790.730000000001
        },
        {
          "time": "2026-02-05T01:00:00+00:00",
          "price": 0.68,
          "trade_count": 35,
          "usd_volume": 1719.4099999999999
        },
        {
          "time": "2026-02-05T02:00:00+00:00",
          "price": 0.69,
          "trade_count": 25,
          "usd_volume": 1370.39
        },
        {
          "time": "2026-02-05T03:00:00+00:00",
          "price": 0.69,
          "trade_count": 25,
          "usd_volume": 1850.9599999999996
        },
        {
          "time": "2026-02-05T05:00:00+00:00",
          "price": 0.69,
          "trade_count": 58,
          "usd_volume": 12697.740000000002
        },
        {
          "time": "2026-02-05T06:00:00+00:00",
          "price": 0.69,
          "trade_count": 23,
          "usd_volume": 602.8599999999998
        },
        {
          "time": "2026-02-05T07:00:00+00:00",
          "price": 0.69,
          "trade_count": 41,
          "usd_volume": 2107.9
        },
        {
          "time": "2026-02-05T09:00:00+00:00",
          "price": 0.68,
          "trade_count": 38,
          "usd_volume": 1088.31
        },
        {
          "time": "2026-02-05T10:00:00+00:00",
          "price": 0.68,
          "trade_count": 34,
          "usd_volume": 3770.9400000000005
        },
        {
          "time": "2026-02-05T11:00:00+00:00",
          "price": 0.69,
          "trade_count": 37,
          "usd_volume": 7444.389999999999
        },
        {
          "time": "2026-02-05T12:00:00+00:00",
          "price": 0.69,
          "trade_count": 56,
          "usd_volume": 3303.33
        },
        {
          "time": "2026-02-05T14:00:00+00:00",
          "price": 0.68,
          "trade_count": 82,
          "usd_volume": 20987.140000000003
        },
        {
          "time": "2026-02-05T15:00:00+00:00",
          "price": 0.68,
          "trade_count": 56,
          "usd_volume": 5703.21
        },
        {
          "time": "2026-02-05T16:00:00+00:00",
          "price": 0.68,
          "trade_count": 78,
          "usd_volume": 11444.52
        },
        {
          "time": "2026-02-05T18:00:00+00:00",
          "price": 0.68,
          "trade_count": 73,
          "usd_volume": 22345.539999999997
        },
        {
          "time": "2026-02-05T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 96,
          "usd_volume": 18463.809999999998
        },
        {
          "time": "2026-02-05T20:00:00+00:00",
          "price": 0.68,
          "trade_count": 106,
          "usd_volume": 8674.0
        },
        {
          "time": "2026-02-05T22:00:00+00:00",
          "price": 0.69,
          "trade_count": 26,
          "usd_volume": 1371.0099999999998
        },
        {
          "time": "2026-02-05T23:00:00+00:00",
          "price": 0.68,
          "trade_count": 30,
          "usd_volume": 21926.56
        },
        {
          "time": "2026-02-06T00:00:00+00:00",
          "price": 0.69,
          "trade_count": 46,
          "usd_volume": 13083.34
        },
        {
          "time": "2026-02-06T02:00:00+00:00",
          "price": 0.68,
          "trade_count": 73,
          "usd_volume": 35140.810000000005
        },
        {
          "time": "2026-02-06T03:00:00+00:00",
          "price": 0.68,
          "trade_count": 72,
          "usd_volume": 6112.35
        },
        {
          "time": "2026-02-06T04:00:00+00:00",
          "price": 0.69,
          "trade_count": 199,
          "usd_volume": 12638.44
        },
        {
          "time": "2026-02-06T06:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 153,
          "usd_volume": 13246.099999999999
        },
        {
          "time": "2026-02-06T07:00:00+00:00",
          "price": 0.68,
          "trade_count": 76,
          "usd_volume": 11485.039999999997
        },
        {
          "time": "2026-02-06T08:00:00+00:00",
          "price": 0.68,
          "trade_count": 39,
          "usd_volume": 2462.1499999999996
        },
        {
          "time": "2026-02-06T09:00:00+00:00",
          "price": 0.69,
          "trade_count": 35,
          "usd_volume": 1897.7900000000002
        },
        {
          "time": "2026-02-06T11:00:00+00:00",
          "price": 0.68,
          "trade_count": 65,
          "usd_volume": 4086.4900000000007
        },
        {
          "time": "2026-02-06T12:00:00+00:00",
          "price": 0.68,
          "trade_count": 81,
          "usd_volume": 23986.72000000001
        },
        {
          "time": "2026-02-06T13:00:00+00:00",
          "price": 0.68,
          "trade_count": 81,
          "usd_volume": 11275.31
        },
        {
          "time": "2026-02-06T15:00:00+00:00",
          "price": 0.69,
          "trade_count": 114,
          "usd_volume": 5952.049999999999
        },
        {
          "time": "2026-02-06T16:00:00+00:00",
          "price": 0.69,
          "trade_count": 86,
          "usd_volume": 5856.61
        },
        {
          "time": "2026-02-06T17:00:00+00:00",
          "price": 0.69,
          "trade_count": 87,
          "usd_volume": 6539.410000000001
        },
        {
          "time": "2026-02-06T19:00:00+00:00",
          "price": 0.69,
          "trade_count": 92,
          "usd_volume": 2975.1499999999996
        },
        {
          "time": "2026-02-06T20:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 99,
          "usd_volume": 24384.4
        },
        {
          "time": "2026-02-06T21:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 101,
          "usd_volume": 23491.43
        },
        {
          "time": "2026-02-06T23:00:00+00:00",
          "price": 0.69,
          "trade_count": 65,
          "usd_volume": 2936.15
        },
        {
          "time": "2026-02-07T00:00:00+00:00",
          "price": 0.69,
          "trade_count": 67,
          "usd_volume": 3030.9900000000007
        },
        {
          "time": "2026-02-07T01:00:00+00:00",
          "price": 0.69,
          "trade_count": 40,
          "usd_volume": 1479.58
        },
        {
          "time": "2026-02-07T02:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 59,
          "usd_volume": 28522.289999999997
        },
        {
          "time": "2026-02-07T04:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 83,
          "usd_volume": 207068.54999999996
        },
        {
          "time": "2026-02-07T05:00:00+00:00",
          "price": 0.69,
          "trade_count": 92,
          "usd_volume": 17061.69
        },
        {
          "time": "2026-02-07T06:00:00+00:00",
          "price": 0.69,
          "trade_count": 119,
          "usd_volume": 1571.3299999999997
        },
        {
          "time": "2026-02-07T08:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 108,
          "usd_volume": 3461.0699999999997
        },
        {
          "time": "2026-02-07T09:00:00+00:00",
          "price": 0.69,
          "trade_count": 124,
          "usd_volume": 5415.780000000001
        },
        {
          "time": "2026-02-07T10:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 102,
          "usd_volume": 16464.22
        },
        {
          "time": "2026-02-07T12:00:00+00:00",
          "price": 0.69,
          "trade_count": 100,
          "usd_volume": 2904.3600000000006
        },
        {
          "time": "2026-02-07T13:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 151,
          "usd_volume": 4800.1500000000015
        },
        {
          "time": "2026-02-07T14:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 109,
          "usd_volume": 29224.54
        },
        {
          "time": "2026-02-07T16:00:00+00:00",
          "price": 0.6699999999999999,
          "trade_count": 82,
          "usd_volume": 84300.96
        },
        {
          "time": "2026-02-07T17:00:00+00:00",
          "price": 0.68,
          "trade_count": 181,
          "usd_volume": 20173.339999999997
        },
        {
          "time": "2026-02-07T18:00:00+00:00",
          "price": 0.68,
          "trade_count": 155,
          "usd_volume": 15743.880000000003
        },
        {
          "time": "2026-02-07T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 119,
          "usd_volume": 20307.99
        },
        {
          "time": "2026-02-07T21:00:00+00:00",
          "price": 0.68,
          "trade_count": 177,
          "usd_volume": 30595.000000000004
        },
        {
          "time": "2026-02-07T22:00:00+00:00",
          "price": 0.67,
          "trade_count": 170,
          "usd_volume": 865399.0399999999
        },
        {
          "time": "2026-02-07T23:00:00+00:00",
          "price": 0.68,
          "trade_count": 288,
          "usd_volume": 221386.24999999997
        },
        {
          "time": "2026-02-08T01:00:00+00:00",
          "price": 0.67,
          "trade_count": 232,
          "usd_volume": 107107.24
        },
        {
          "time": "2026-02-08T02:00:00+00:00",
          "price": 0.68,
          "trade_count": 224,
          "usd_volume": 54408.9
        },
        {
          "time": "2026-02-08T03:00:00+00:00",
          "price": 0.68,
          "trade_count": 196,
          "usd_volume": 40139.74999999999
        },
        {
          "time": "2026-02-08T05:00:00+00:00",
          "price": 0.68,
          "trade_count": 300,
          "usd_volume": 93895.18
        },
        {
          "time": "2026-02-08T06:00:00+00:00",
          "price": 0.69,
          "trade_count": 492,
          "usd_volume": 1007339.2499999999
        },
        {
          "time": "2026-02-08T07:00:00+00:00",
          "price": 0.68,
          "trade_count": 326,
          "usd_volume": 67518.84
        },
        {
          "time": "2026-02-08T09:00:00+00:00",
          "price": 0.68,
          "trade_count": 565,
          "usd_volume": 132197.95
        },
        {
          "time": "2026-02-08T10:00:00+00:00",
          "price": 0.68,
          "trade_count": 279,
          "usd_volume": 39322.89
        },
        {
          "time": "2026-02-08T11:00:00+00:00",
          "price": 0.68,
          "trade_count": 230,
          "usd_volume": 32706.23
        },
        {
          "time": "2026-02-08T12:00:00+00:00",
          "price": 0.68,
          "trade_count": 362,
          "usd_volume": 49457.09
        },
        {
          "time": "2026-02-08T14:00:00+00:00",
          "price": 0.68,
          "trade_count": 552,
          "usd_volume": 90907.57
        },
        {
          "time": "2026-02-08T15:00:00+00:00",
          "price": 0.69,
          "trade_count": 800,
          "usd_volume": 163700.78
        },
        {
          "time": "2026-02-08T16:00:00+00:00",
          "price": 0.68,
          "trade_count": 990,
          "usd_volume": 251368.14
        },
        {
          "time": "2026-02-08T18:00:00+00:00",
          "price": 0.68,
          "trade_count": 764,
          "usd_volume": 639499.1900000001
        },
        {
          "time": "2026-02-08T19:00:00+00:00",
          "price": 0.68,
          "trade_count": 1983,
          "usd_volume": 420642.4199999999
        },
        {
          "time": "2026-02-08T20:00:00+00:00",
          "price": 0.6799999999999999,
          "trade_count": 3697,
          "usd_volume": 1506885.62
        },
        {
          "time": "2026-02-08T22:00:00+00:00",
          "price": 0.68,
          "trade_count": 1458,
          "usd_volume": 1151259.47
        },
        {
          "time": "2026-02-08T23:00:00+00:00",
          "price": 0.68,
          "trade_count": 5927,
          "usd_volume": 2193719.69
        },
        {
          "time": "2026-02-09T00:00:00+00:00",
          "price": 0.8200000000000001,
          "trade_count": 6432,
          "usd_volume": 909680.1000000001
        },
        {
          "time": "2026-02-09T02:00:00+00:00",
          "price": 0.999,
          "trade_count": 7242,
          "usd_volume": 1734649.51
        },
        {
          "time": "2026-02-09T03:00:00+00:00",
          "price": 0.999,
          "trade_count": 1010,
          "usd_volume": 719021.16
        },
        {
          "time": "2026-02-09T04:00:00+00:00",
          "price": 0.999,
          "trade_count": 304,
          "usd_volume": 303995.3900000001
        },
        {
          "time": "2026-02-09T06:00:00+00:00",
          "price": 0.999,
          "trade_count": 18,
          "usd_volume": 348.92
        }
      ]
    },
    {
      "market_id": "1994007",
      "slug": "invalid-catalog-date",
      "type": "日期异常",
      "summary": "原始 end date 早于 created time，但正式成交轨迹仍能界定观察窗口。",
      "question": "元数据矛盾时，如何保留异常并使用真实成交边界？",
      "event_id": "242420",
      "event_title": "Israel x Hezbollah ceasefire by...?",
      "question_text": "Israel x Hezbollah ceasefire by April 18, 2026?",
      "answer1": "Yes",
      "answer2": "No",
      "identity_status": "accepted",
      "has_trusted_trades": true,
      "trusted_trade_count": 13613,
      "observed_points": {
        "1m": 3003,
        "15m": 412,
        "1h": 106
      },
      "first_trade_hour_utc": "2026-04-16T15:00:00+00:00",
      "last_trade_hour_utc": "2026-04-21T00:00:00+00:00",
      "event": {
        "market_count": 6,
        "event_span_hours": 1176,
        "observed_hour_rows": 1590
      },
      "trajectory_1h": [
        {
          "time": "2026-04-16T15:00:00+00:00",
          "price": 0.87,
          "trade_count": 1235,
          "usd_volume": 89053.92999999998
        },
        {
          "time": "2026-04-16T16:00:00+00:00",
          "price": 0.86,
          "trade_count": 1664,
          "usd_volume": 177925.33
        },
        {
          "time": "2026-04-16T17:00:00+00:00",
          "price": 0.97,
          "trade_count": 992,
          "usd_volume": 167757.18999999997
        },
        {
          "time": "2026-04-16T18:00:00+00:00",
          "price": 0.987,
          "trade_count": 949,
          "usd_volume": 246853.97999999995
        },
        {
          "time": "2026-04-16T19:00:00+00:00",
          "price": 0.997,
          "trade_count": 540,
          "usd_volume": 272320.3
        },
        {
          "time": "2026-04-16T20:00:00+00:00",
          "price": 0.997,
          "trade_count": 523,
          "usd_volume": 1646295.64
        },
        {
          "time": "2026-04-16T21:00:00+00:00",
          "price": 0.998,
          "trade_count": 365,
          "usd_volume": 703605.65
        },
        {
          "time": "2026-04-16T22:00:00+00:00",
          "price": 0.997,
          "trade_count": 326,
          "usd_volume": 999872.46
        },
        {
          "time": "2026-04-16T23:00:00+00:00",
          "price": 0.996,
          "trade_count": 110,
          "usd_volume": 450805.92999999993
        },
        {
          "time": "2026-04-17T00:00:00+00:00",
          "price": 0.998,
          "trade_count": 164,
          "usd_volume": 313489.63000000006
        },
        {
          "time": "2026-04-17T01:00:00+00:00",
          "price": 0.999,
          "trade_count": 172,
          "usd_volume": 361567.2
        },
        {
          "time": "2026-04-17T02:00:00+00:00",
          "price": 0.999,
          "trade_count": 45,
          "usd_volume": 826705.9799999999
        },
        {
          "time": "2026-04-17T03:00:00+00:00",
          "price": 0.999,
          "trade_count": 40,
          "usd_volume": 451119.20999999996
        },
        {
          "time": "2026-04-17T04:00:00+00:00",
          "price": 0.999,
          "trade_count": 55,
          "usd_volume": 330038.49999999994
        },
        {
          "time": "2026-04-17T05:00:00+00:00",
          "price": 0.999,
          "trade_count": 47,
          "usd_volume": 760.89
        },
        {
          "time": "2026-04-17T06:00:00+00:00",
          "price": 0.999,
          "trade_count": 59,
          "usd_volume": 1041.7
        },
        {
          "time": "2026-04-17T07:00:00+00:00",
          "price": 0.999,
          "trade_count": 69,
          "usd_volume": 2898784.0100000002
        },
        {
          "time": "2026-04-17T08:00:00+00:00",
          "price": 0.999,
          "trade_count": 59,
          "usd_volume": 804045.12
        },
        {
          "time": "2026-04-17T09:00:00+00:00",
          "price": 0.999,
          "trade_count": 45,
          "usd_volume": 703072.06
        },
        {
          "time": "2026-04-17T10:00:00+00:00",
          "price": 0.999,
          "trade_count": 140,
          "usd_volume": 3217342.3099999996
        },
        {
          "time": "2026-04-17T11:00:00+00:00",
          "price": 0.998,
          "trade_count": 339,
          "usd_volume": 154800.00999999998
        },
        {
          "time": "2026-04-17T12:00:00+00:00",
          "price": 0.998,
          "trade_count": 126,
          "usd_volume": 56615.240000000005
        },
        {
          "time": "2026-04-17T13:00:00+00:00",
          "price": 0.998,
          "trade_count": 100,
          "usd_volume": 1069.08
        },
        {
          "time": "2026-04-17T14:00:00+00:00",
          "price": 0.999,
          "trade_count": 136,
          "usd_volume": 315523.05
        },
        {
          "time": "2026-04-17T15:00:00+00:00",
          "price": 0.998,
          "trade_count": 378,
          "usd_volume": 1393748.9300000002
        },
        {
          "time": "2026-04-17T16:00:00+00:00",
          "price": 0.999,
          "trade_count": 156,
          "usd_volume": 768475.34
        },
        {
          "time": "2026-04-17T17:00:00+00:00",
          "price": 0.999,
          "trade_count": 60,
          "usd_volume": 599633.29
        },
        {
          "time": "2026-04-17T18:00:00+00:00",
          "price": 0.999,
          "trade_count": 40,
          "usd_volume": 853427.3799999999
        },
        {
          "time": "2026-04-17T19:00:00+00:00",
          "price": 0.999,
          "trade_count": 65,
          "usd_volume": 501669.06
        },
        {
          "time": "2026-04-17T20:00:00+00:00",
          "price": 0.999,
          "trade_count": 109,
          "usd_volume": 306858.10000000003
        },
        {
          "time": "2026-04-17T21:00:00+00:00",
          "price": 0.999,
          "trade_count": 60,
          "usd_volume": 1238.3700000000001
        },
        {
          "time": "2026-04-17T22:00:00+00:00",
          "price": 0.999,
          "trade_count": 52,
          "usd_volume": 71544.84999999999
        },
        {
          "time": "2026-04-17T23:00:00+00:00",
          "price": 0.998,
          "trade_count": 135,
          "usd_volume": 1744190.58
        },
        {
          "time": "2026-04-18T00:00:00+00:00",
          "price": 0.999,
          "trade_count": 113,
          "usd_volume": 3146905.4799999995
        },
        {
          "time": "2026-04-18T01:00:00+00:00",
          "price": 0.999,
          "trade_count": 24,
          "usd_volume": 175.05
        },
        {
          "time": "2026-04-18T02:00:00+00:00",
          "price": 0.999,
          "trade_count": 19,
          "usd_volume": 81.57000000000001
        },
        {
          "time": "2026-04-18T03:00:00+00:00",
          "price": 0.999,
          "trade_count": 20,
          "usd_volume": 213.72
        },
        {
          "time": "2026-04-18T04:00:00+00:00",
          "price": 0.999,
          "trade_count": 19,
          "usd_volume": 113.09
        },
        {
          "time": "2026-04-18T05:00:00+00:00",
          "price": 0.999,
          "trade_count": 14,
          "usd_volume": 256.0
        },
        {
          "time": "2026-04-18T06:00:00+00:00",
          "price": 0.999,
          "trade_count": 12,
          "usd_volume": 40.14
        },
        {
          "time": "2026-04-18T07:00:00+00:00",
          "price": 0.999,
          "trade_count": 18,
          "usd_volume": 67712.08
        },
        {
          "time": "2026-04-18T08:00:00+00:00",
          "price": 0.999,
          "trade_count": 21,
          "usd_volume": 197051.07
        },
        {
          "time": "2026-04-18T09:00:00+00:00",
          "price": 0.999,
          "trade_count": 23,
          "usd_volume": 184176.29
        },
        {
          "time": "2026-04-18T10:00:00+00:00",
          "price": 0.999,
          "trade_count": 14,
          "usd_volume": 77141.69
        },
        {
          "time": "2026-04-18T11:00:00+00:00",
          "price": 0.999,
          "trade_count": 28,
          "usd_volume": 350209.95
        },
        {
          "time": "2026-04-18T12:00:00+00:00",
          "price": 0.999,
          "trade_count": 25,
          "usd_volume": 272088.21
        },
        {
          "time": "2026-04-18T13:00:00+00:00",
          "price": 0.999,
          "trade_count": 29,
          "usd_volume": 91695.04000000001
        },
        {
          "time": "2026-04-18T14:00:00+00:00",
          "price": 0.999,
          "trade_count": 26,
          "usd_volume": 171399.45
        },
        {
          "time": "2026-04-18T15:00:00+00:00",
          "price": 0.999,
          "trade_count": 21,
          "usd_volume": 101619.28000000001
        },
        {
          "time": "2026-04-18T16:00:00+00:00",
          "price": 0.999,
          "trade_count": 28,
          "usd_volume": 505041.37
        },
        {
          "time": "2026-04-18T17:00:00+00:00",
          "price": 0.999,
          "trade_count": 27,
          "usd_volume": 407272.31999999995
        },
        {
          "time": "2026-04-18T18:00:00+00:00",
          "price": 0.999,
          "trade_count": 41,
          "usd_volume": 473311.2200000001
        },
        {
          "time": "2026-04-18T19:00:00+00:00",
          "price": 0.999,
          "trade_count": 20,
          "usd_volume": 126723.15000000001
        },
        {
          "time": "2026-04-18T20:00:00+00:00",
          "price": 0.999,
          "trade_count": 30,
          "usd_volume": 248331.41999999998
        },
        {
          "time": "2026-04-18T21:00:00+00:00",
          "price": 0.999,
          "trade_count": 33,
          "usd_volume": 402488.12
        },
        {
          "time": "2026-04-18T22:00:00+00:00",
          "price": 0.999,
          "trade_count": 26,
          "usd_volume": 277761.95999999996
        },
        {
          "time": "2026-04-18T23:00:00+00:00",
          "price": 0.999,
          "trade_count": 27,
          "usd_volume": 182737.08000000002
        },
        {
          "time": "2026-04-19T00:00:00+00:00",
          "price": 0.999,
          "trade_count": 29,
          "usd_volume": 394994.61
        },
        {
          "time": "2026-04-19T01:00:00+00:00",
          "price": 0.999,
          "trade_count": 33,
          "usd_volume": 1623274.1
        },
        {
          "time": "2026-04-19T02:00:00+00:00",
          "price": 0.999,
          "trade_count": 27,
          "usd_volume": 527891.58
        },
        {
          "time": "2026-04-19T03:00:00+00:00",
          "price": 0.999,
          "trade_count": 26,
          "usd_volume": 616267.36
        },
        {
          "time": "2026-04-19T04:00:00+00:00",
          "price": 0.999,
          "trade_count": 30,
          "usd_volume": 514083.72
        },
        {
          "time": "2026-04-19T05:00:00+00:00",
          "price": 0.999,
          "trade_count": 24,
          "usd_volume": 274480.34
        },
        {
          "time": "2026-04-19T06:00:00+00:00",
          "price": 0.999,
          "trade_count": 14,
          "usd_volume": 363546.09
        },
        {
          "time": "2026-04-19T07:00:00+00:00",
          "price": 0.999,
          "trade_count": 30,
          "usd_volume": 642919.7600000001
        },
        {
          "time": "2026-04-19T08:00:00+00:00",
          "price": 0.999,
          "trade_count": 28,
          "usd_volume": 715713.57
        },
        {
          "time": "2026-04-19T09:00:00+00:00",
          "price": 0.999,
          "trade_count": 30,
          "usd_volume": 645055.86
        },
        {
          "time": "2026-04-19T10:00:00+00:00",
          "price": 0.998,
          "trade_count": 108,
          "usd_volume": 7296309.6999999955
        },
        {
          "time": "2026-04-19T11:00:00+00:00",
          "price": 0.999,
          "trade_count": 130,
          "usd_volume": 1897827.01
        },
        {
          "time": "2026-04-19T12:00:00+00:00",
          "price": 0.998,
          "trade_count": 256,
          "usd_volume": 1946811.4100000001
        },
        {
          "time": "2026-04-19T13:00:00+00:00",
          "price": 0.999,
          "trade_count": 288,
          "usd_volume": 485123.64
        },
        {
          "time": "2026-04-19T14:00:00+00:00",
          "price": 0.999,
          "trade_count": 255,
          "usd_volume": 4496.39
        },
        {
          "time": "2026-04-19T15:00:00+00:00",
          "price": 0.999,
          "trade_count": 313,
          "usd_volume": 544348.9700000001
        },
        {
          "time": "2026-04-19T16:00:00+00:00",
          "price": 0.998,
          "trade_count": 203,
          "usd_volume": 17401.93
        },
        {
          "time": "2026-04-19T17:00:00+00:00",
          "price": 0.999,
          "trade_count": 85,
          "usd_volume": 77093.75
        },
        {
          "time": "2026-04-19T18:00:00+00:00",
          "price": 0.999,
          "trade_count": 54,
          "usd_volume": 649.8
        },
        {
          "time": "2026-04-19T19:00:00+00:00",
          "price": 0.999,
          "trade_count": 47,
          "usd_volume": 844.6
        },
        {
          "time": "2026-04-19T20:00:00+00:00",
          "price": 0.999,
          "trade_count": 88,
          "usd_volume": 2529.02
        },
        {
          "time": "2026-04-19T21:00:00+00:00",
          "price": 0.999,
          "trade_count": 62,
          "usd_volume": 1815.52
        },
        {
          "time": "2026-04-19T22:00:00+00:00",
          "price": 0.999,
          "trade_count": 78,
          "usd_volume": 370533.91000000003
        },
        {
          "time": "2026-04-19T23:00:00+00:00",
          "price": 0.999,
          "trade_count": 31,
          "usd_volume": 279.67
        },
        {
          "time": "2026-04-20T00:00:00+00:00",
          "price": 0.999,
          "trade_count": 15,
          "usd_volume": 236.04
        },
        {
          "time": "2026-04-20T01:00:00+00:00",
          "price": 0.999,
          "trade_count": 18,
          "usd_volume": 121.65
        },
        {
          "time": "2026-04-20T02:00:00+00:00",
          "price": 0.999,
          "trade_count": 32,
          "usd_volume": 319286.85000000003
        },
        {
          "time": "2026-04-20T03:00:00+00:00",
          "price": 0.999,
          "trade_count": 19,
          "usd_volume": 154158.52
        },
        {
          "time": "2026-04-20T04:00:00+00:00",
          "price": 0.999,
          "trade_count": 40,
          "usd_volume": 511920.87999999995
        },
        {
          "time": "2026-04-20T05:00:00+00:00",
          "price": 0.999,
          "trade_count": 15,
          "usd_volume": 65541.4
        },
        {
          "time": "2026-04-20T06:00:00+00:00",
          "price": 0.999,
          "trade_count": 20,
          "usd_volume": 315083.1
        },
        {
          "time": "2026-04-20T07:00:00+00:00",
          "price": 0.999,
          "trade_count": 7,
          "usd_volume": 142678.64
        },
        {
          "time": "2026-04-20T08:00:00+00:00",
          "price": 0.999,
          "trade_count": 10,
          "usd_volume": 222237.54
        },
        {
          "time": "2026-04-20T09:00:00+00:00",
          "price": 0.999,
          "trade_count": 11,
          "usd_volume": 33189.06
        },
        {
          "time": "2026-04-20T10:00:00+00:00",
          "price": 0.999,
          "trade_count": 22,
          "usd_volume": 256.40999999999997
        },
        {
          "time": "2026-04-20T11:00:00+00:00",
          "price": 0.999,
          "trade_count": 26,
          "usd_volume": 295742.38999999996
        },
        {
          "time": "2026-04-20T12:00:00+00:00",
          "price": 0.999,
          "trade_count": 26,
          "usd_volume": 1304843.85
        },
        {
          "time": "2026-04-20T13:00:00+00:00",
          "price": 0.999,
          "trade_count": 39,
          "usd_volume": 868367.52
        },
        {
          "time": "2026-04-20T14:00:00+00:00",
          "price": 0.999,
          "trade_count": 23,
          "usd_volume": 401568.03
        },
        {
          "time": "2026-04-20T15:00:00+00:00",
          "price": 0.999,
          "trade_count": 1,
          "usd_volume": 999.0
        },
        {
          "time": "2026-04-20T16:00:00+00:00",
          "price": 0.999,
          "trade_count": 201,
          "usd_volume": 1157257.8800000001
        },
        {
          "time": "2026-04-20T17:00:00+00:00",
          "price": 0.999,
          "trade_count": 216,
          "usd_volume": 238353.6
        },
        {
          "time": "2026-04-20T18:00:00+00:00",
          "price": 0.999,
          "trade_count": 137,
          "usd_volume": 28443.309999999998
        },
        {
          "time": "2026-04-20T19:00:00+00:00",
          "price": 0.999,
          "trade_count": 68,
          "usd_volume": 730212.0299999999
        },
        {
          "time": "2026-04-20T20:00:00+00:00",
          "price": 0.999,
          "trade_count": 282,
          "usd_volume": 1024803.0300000001
        },
        {
          "time": "2026-04-20T21:00:00+00:00",
          "price": 0.999,
          "trade_count": 35,
          "usd_volume": 47508.77
        },
        {
          "time": "2026-04-20T22:00:00+00:00",
          "price": 0.999,
          "trade_count": 27,
          "usd_volume": 241168.68999999997
        },
        {
          "time": "2026-04-20T23:00:00+00:00",
          "price": 0.999,
          "trade_count": 13,
          "usd_volume": 8144.099999999999
        },
        {
          "time": "2026-04-21T00:00:00+00:00",
          "price": 0.999,
          "trade_count": 28,
          "usd_volume": 68754.11000000002
        }
      ]
    },
    {
      "market_id": "115",
      "slug": "identity-quarantine",
      "type": "事件身份隔离",
      "summary": "题目可读，但 event_id 缺失，因此不能进入严格事件级训练。",
      "question": "为什么语义可理解不能代替可追溯的事件身份？",
      "event_id": null,
      "event_title": "",
      "question_text": "Superbowl 55: Kansas City Chiefs vs Tampa Bay Buccaneers",
      "answer1": "Chiefs",
      "answer2": "Bucs",
      "identity_status": "quarantined",
      "has_trusted_trades": false,
      "trusted_trade_count": 0,
      "observed_points": {
        "1m": 0,
        "15m": 0,
        "1h": 0
      },
      "first_trade_hour_utc": null,
      "last_trade_hour_utc": null,
      "event": null,
      "trajectory_1h": []
    },
    {
      "market_id": "67",
      "slug": "catalog-only",
      "type": "Catalog 不等于轨迹",
      "summary": "catalog 中存在超长生命周期记录，但当前可信数据中没有成交轨迹。",
      "question": "为什么 catalog 日期不能直接当作可训练轨迹长度？",
      "event_id": "3842",
      "event_title": "Which party will win Pennsylvania in the 2020 presidential election?",
      "question_text": "Which party will win Pennsylvania in the 2020 presidential election?",
      "answer1": "Democratic",
      "answer2": "Republican",
      "identity_status": "accepted",
      "has_trusted_trades": false,
      "trusted_trade_count": 0,
      "observed_points": {
        "1m": 0,
        "15m": 0,
        "1h": 0
      },
      "first_trade_hour_utc": null,
      "last_trade_hour_utc": null,
      "event": null,
      "trajectory_1h": []
    }
  ],
  "pilot": {
    "scope": {
      "dataset_version": "polymarket-fast-research-v0",
      "status": "ready_for_pilot_research",
      "scope": "completed_relation_prefix_sample",
      "source_prefixes": [
        "00",
        "01",
        "02",
        "03"
      ],
      "source_sample_fraction": 0.015625,
      "source_file_count": 168,
      "source_relation_rows": 11925706,
      "source_relation_bytes": 2835554119,
      "daily_bar_rows": 1033390,
      "market_count": 481077,
      "event_count": 303037,
      "first_observation_utc": "2022-12-09T00:00:00+00:00",
      "last_observation_utc": "2026-05-04T00:00:00+00:00",
      "track_a_eligible_market_count": 6227,
      "track_a_window_count": 14440,
      "track_a_split_counts": {
        "test": 7354,
        "train": 5877,
        "validation": 1209
      },
      "limitations": [
        "sampled transaction counts and volumes are not full-corpus totals",
        "daily bars contain observed trade days rather than a filled calendar",
        "time split is provided; event-family split remains a next-step task"
      ]
    },
    "persistence_test": {
      "sample_count": 7354,
      "mae": 0.04407613007498349,
      "rmse": 0.10022654280306253,
      "mae_by_horizon": [
        0.022858729806908267,
        0.03028663883600798,
        0.037773454582540084,
        0.043708595866194605,
        0.04951250394343141,
        0.056881285422898144,
        0.06751170206690123
      ],
      "rmse_by_horizon": [
        0.05296483053199255,
        0.06715420872837345,
        0.08317875886688347,
        0.09527215519305758,
        0.10583142992012509,
        0.12196135592785395,
        0.14467966260707613
      ]
    },
    "sample": {
      "sample_id": "ta-00000001",
      "market_id": "1003801",
      "event_id": "119296",
      "as_of_time": "2026-04-07T00:00:00+00:00",
      "history_times_utc": [
        "2026-02-15T00:00:00+00:00",
        "2026-03-04T00:00:00+00:00",
        "2026-03-24T00:00:00+00:00",
        "2026-03-25T00:00:00+00:00",
        "2026-03-31T00:00:00+00:00",
        "2026-04-01T00:00:00+00:00",
        "2026-04-02T00:00:00+00:00",
        "2026-04-04T00:00:00+00:00",
        "2026-04-06T00:00:00+00:00",
        "2026-04-07T00:00:00+00:00"
      ],
      "history_p_answer1": [
        0.062000000000000055,
        0.207,
        0.151,
        0.143,
        0.129,
        0.22899999999999998,
        0.163,
        0.171,
        0.20099999999999996,
        0.18400000000000005
      ],
      "target_times_utc": [
        "2026-04-13T00:00:00+00:00",
        "2026-04-15T00:00:00+00:00",
        "2026-04-17T00:00:00+00:00",
        "2026-04-18T00:00:00+00:00",
        "2026-04-20T00:00:00+00:00",
        "2026-04-21T00:00:00+00:00",
        "2026-04-22T00:00:00+00:00"
      ],
      "target_p_answer1": [
        0.168,
        0.138,
        0.1,
        0.149,
        0.099,
        0.126,
        0.115
      ],
      "history_span_days": 51,
      "target_span_days": 9,
      "split": "test"
    },
    "limitations": [
      "只覆盖约 1.5625% 的成交，不是全量 P1B。",
      "10 个历史点和 7 个未来点是 observed days，不是固定日历 horizon。",
      "只有时间切分，尚无 event-family split。",
      "尚未加入规则小时状态、staleness、mask 和公共市场状态。"
    ]
  },
  "status": [
    {
      "name": "P1B 多尺度数据",
      "state": "complete",
      "detail": "全量验收通过"
    },
    {
      "name": "数据规模与分布",
      "state": "complete",
      "detail": "本轮已核验"
    },
    {
      "name": "正式 Track A",
      "state": "complete",
      "detail": "31,949,309 条固定日历样本"
    },
    {
      "name": "简单 baseline",
      "state": "complete",
      "detail": "26,330,043 条 cold-family 预测"
    },
    {
      "name": "P2 候选",
      "state": "pilot",
      "detail": "43,971 条 lexical/calendar seed"
    },
    {
      "name": "P3 增量验证",
      "state": "pending",
      "detail": "关系标签尚未生成"
    }
  ]
};
