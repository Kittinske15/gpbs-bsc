import React from "react";
import {
  financials,
  customer,
  internal,
  people,
  strategyMap,
  kpiSummary,
  STATUS,
} from "./data/bsc";
import {
  StatCard,
  GaugeCard,
  DonutCard,
  Gauge,
  Dot,
  Delta,
  Compare,
  Sparkline,
} from "./components/ui";

// ============================ FINANCIALS ============================
export function Financials({ onDetails }) {
  const f = financials;
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">Financials</div>
        <div className="period">Overall Financial Performance</div>
      </div>

      {/* Row 1: revenue, expenses, profit (2 gauges), cash flow, AP */}
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1.6fr 1fr 1fr" }}>
        <StatCard item={f.statCards[0]} onDetails={onDetails} />
        <StatCard item={f.statCards[1]} onDetails={onDetails} />

        {/* Overall profit block */}
        <div className="card">
          <div className="card-title">{f.profit.title}</div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 6 }}>
            {[f.profit.ebitda, f.profit.netProfit].map((g) => (
              <div key={g.key} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 700, fontSize: 17 }}>
                  {g.label} <Dot status={g.status} />
                </div>
                <Gauge id={`g-${g.key}`} percent={g.gauge} />
                <Delta value={g.delta} />
                <Compare {...g} />
                <button className="details-btn" onClick={() => onDetails({ ...g, title: g.label })}>
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cash flow */}
        <div className="card">
          <div className="card-title">{f.cashFlow.title} <Dot status={f.cashFlow.status} /></div>
          <div className="bigval" style={{ fontSize: 34 }}>
            {f.cashFlow.value}<span className="unit">{f.cashFlow.unit}</span>
          </div>
          <div className="card-sub">{f.cashFlow.curLabel}</div>
          <div className="delta down" style={{ fontSize: 18 }}>-</div>
          <div className="compare-label">( {f.cashFlow.prevLabel} )</div>
          <Compare prevLabel={f.cashFlow.prevLabel} prevValue={f.cashFlow.prevValue} curLabel={f.cashFlow.curLabel} curValue={"N/A"} />
        </div>

        {/* AP / AR / Loan */}
        <div className="card" style={{ textAlign: "center" }}>
          <div className="card-title">{f.ap.title}</div>
          {f.ap.rows.map((r) => (
            <div key={r.label} style={{ marginTop: 8 }}>
              <div style={{ fontSize: 13, color: "var(--text-dim)" }}>{r.label}</div>
              <div style={{ fontSize: 26, fontWeight: 800 }}>{r.value}</div>
              <div style={{ fontSize: 11, color: "var(--text-faint)" }}>{r.sub}</div>
            </div>
          ))}
          <button className="details-btn" onClick={() => onDetails({ title: "AP / AR / Loan", curLabel: "YTD 2026", curValue: "11.6M / 203.2M / 141M" })}>
            Details
          </button>
        </div>
      </div>

      {/* Row 2: balance trio + ratio gauges */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(6, 1fr)", marginTop: 14 }}>
        {f.balance.map((b) => (
          <div className="card" key={b.key} style={{ textAlign: "center" }}>
            <div className="card-title" style={{ fontSize: 17 }}>{b.title} <Dot status={b.status} /></div>
            <div className="bigval" style={{ fontSize: 34 }}>{b.value}<span className="unit">{b.unit}</span></div>
            <div className="card-sub">Y 2026</div>
            <div className="delta down" style={{ fontSize: 16 }}>-</div>
            <div className="compare-label">(YTD Actual vs Year 2025)</div>
            <div style={{ fontSize: 24, fontWeight: 700, marginTop: 6 }}>{b.value}<span className="unit">{b.unit}</span></div>
            <div style={{ fontSize: 11, color: "var(--text-faint)" }}>Year 2025</div>
          </div>
        ))}
        {f.ratios.map((r) => (
          <div className="card gauge-card" key={r.key} style={{ textAlign: "center" }}>
            <div className="card-title" style={{ fontSize: 17 }}>{r.title} <Dot status={r.status} /></div>
            <Gauge id={`g-${r.key}`} percent={r.gauge} center={r.curValue} />
            <div className="compare-label">( Year 2025 vs YTD Actual )</div>
            <Compare prevLabel="Year 2025" prevValue={r.prevValue} curLabel="YTD 2026" curValue={r.curValue} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================ CUSTOMER ============================
export function Customer({ onDetails }) {
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">Customer</div>
        <div className="period">Mar 2026</div>
      </div>
      {customer.sections.map((sec) => (
        <div key={sec.group}>
          <div className="section-band">{sec.group}</div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1.2fr 1fr" }}>
            <StatCard item={sec.subscribers} onDetails={onDetails} />
            <GaugeCard item={sec.gauge} onDetails={onDetails} />
            <DonutCard item={sec.donut} onDetails={onDetails} />
            <StatCard item={{ ...sec.churn, value: sec.churn.value, prevLabel: sec.churn.prevLabel, curLabel: sec.churn.curLabel }} onDetails={onDetails} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================ INTERNAL ============================
export function Internal({ onDetails }) {
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">Internal</div>
        <div className="period">Mar 2026</div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {internal.gauges.map((g) => (
          <GaugeCard key={g.key} item={g} onDetails={onDetails} />
        ))}
      </div>
    </div>
  );
}

// ============================ PEOPLE ============================
export function People({ onDetails }) {
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">People</div>
        <div className="period">Mar 2026</div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {people.cards.map((c) => (
          <StatCard key={c.key} item={c} onDetails={onDetails} />
        ))}
      </div>
    </div>
  );
}

// ============================ KPI SUMMARY ============================
export function KpiSummary({ onDetails }) {
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">KPI Summary</div>
        <div className="period">Mar 2026</div>
      </div>
      <div className="card">
        <table className="kpi-table">
          <thead>
            <tr>
              <th>Perspective</th>
              <th>KPI</th>
              <th>Actual (YTD)</th>
              <th>Target</th>
              <th>Trend</th>
              <th>Change</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {kpiSummary.map((k, i) => {
              const s = STATUS[k.status];
              return (
                <tr key={i} onClick={() => onDetails({ title: k.name, perspective: k.perspective, status: k.status, curLabel: "Actual", curValue: k.actual, prevLabel: "Target", prevValue: k.target, delta: k.delta, trend: k.trend })}>
                  <td>{k.perspective}</td>
                  <td className="nm">{k.name}</td>
                  <td>{k.actual}</td>
                  <td>{k.target}</td>
                  <td style={{ width: 120 }}><Sparkline data={k.trend} color={s.color} height={30} /></td>
                  <td style={{ color: k.delta >= 0 ? "var(--good)" : "var(--bad)" }}>
                    {k.delta >= 0 ? "▲" : "▼"} {Math.abs(k.delta).toLocaleString()}%
                  </td>
                  <td>
                    <span className="chip" style={{ background: `${s.color}22`, color: s.color }}>{s.label}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================ STRATEGY MAP ============================
export function StrategyMap({ onDetails }) {
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">Strategy Map</div>
        <div className="period">Mar 2026</div>
      </div>
      <div className="card" style={{ padding: "6px 22px" }}>
        {strategyMap.rows.map((row) => (
          <div className="smap-row" key={row.perspective}>
            <div className="persp">{row.perspective}</div>
            <div className="smap-nodes">
              {row.nodes.map((n) => (
                <div
                  className="smap-node"
                  key={n.id}
                  onClick={() =>
                    onDetails({
                      title: n.label,
                      perspective: row.perspective,
                      status: n.status,
                      curLabel: "Status",
                      curValue: (STATUS[n.status] || STATUS.none).label,
                    })
                  }
                >
                  <Dot status={n.status} />
                  {n.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
