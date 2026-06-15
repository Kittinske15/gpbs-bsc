import React from "react";
import {
  financials,
  customer,
  internal,
  people,
  kpiSummaryDash,
  smapNodes,
  smapEdges,
  smapBands,
  SMAP_CANVAS,
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
  Bar,
} from "./components/ui";

// --------------------------------------------------------------------------
// Reusable blocks (shared by Financials + KPI Summary)
// --------------------------------------------------------------------------
function ProfitBlock({ onDetails }) {
  const f = financials;
  return (
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
            <div className="compare-label">( {g.prevLabel} vs {g.curLabel} )</div>
            <Compare {...g} />
            <button className="details-btn" onClick={() => onDetails({ ...g, title: g.label })}>
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CashFlowCard() {
  const c = financials.cashFlow;
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div className="card-title">{c.title} <Dot status={c.status} /></div>
      <div className="bigval" style={{ fontSize: 34 }}>
        {c.value}<span className="unit">{c.unit}</span>
      </div>
      <div className="card-sub">{c.curLabel}</div>
      <div className="delta down" style={{ fontSize: 18 }}>-</div>
      <div className="compare-label">( {c.prevLabel} vs YTD Actual )</div>
      <Compare prevLabel={c.prevLabel} prevValue={c.prevValue} curLabel="Year 2025" curValue={c.prevValue} />
    </div>
  );
}

function IntercoCard({ title = "AP", onDetails }) {
  const ap = financials.ap;
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div className="card-title">{title}</div>
      {ap.rows.map((r) => (
        <div key={r.label} style={{ marginTop: 10 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-dim)" }}>{r.label}</div>
          <div style={{ fontSize: 26, fontWeight: 800 }}>{r.value}</div>
        </div>
      ))}
      {ap.details && (
        <button className="details-btn" onClick={() => onDetails({ title: `${title} / AR / Loan`, curLabel: "YTD 2026", curValue: "11.6M / 203.2M / 141M" })}>
          Details
        </button>
      )}
    </div>
  );
}

// ============================ FINANCIALS ============================
export function Financials({ onDetails }) {
  const f = financials;
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">Financials</div>
        <div className="period">Overall Financial Performance</div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1.7fr 1fr 0.9fr" }}>
        <StatCard item={f.statCards[0]} onDetails={onDetails} />
        <StatCard item={f.statCards[1]} onDetails={onDetails} />
        <ProfitBlock onDetails={onDetails} />
        <CashFlowCard />
        <IntercoCard title="AP" onDetails={onDetails} />
      </div>

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
            <StatCard item={sec.churn} onDetails={onDetails} />
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

// ============================ KPI SUMMARY (dashboard) ============================
export function KpiSummary({ onDetails }) {
  const d = kpiSummaryDash;
  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">KPI Summary</div>
        <div className="period">Mar 2026</div>
      </div>

      {/* Row 1 — financial KPIs */}
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1.7fr 1fr 0.9fr" }}>
        <StatCard item={financials.statCards[0]} onDetails={onDetails} />
        <StatCard item={financials.statCards[1]} onDetails={onDetails} />
        <ProfitBlock onDetails={onDetails} />
        <CashFlowCard />
        <IntercoCard title="Interco" onDetails={onDetails} />
      </div>

      {/* Row 2 — breakdown donuts + subscribers + migration */}
      <div className="grid" style={{ gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr", marginTop: 14 }}>
        <DonutCard item={d.revenueBreakdown} onDetails={onDetails} />
        <StatCard item={d.totalSubscribers} onDetails={onDetails} />
        <DonutCard item={d.tvsLinear} onDetails={onDetails} />
        <DonutCard item={d.ottPlatform} onDetails={onDetails} />
        <div className="card">
          <div className="card-title" style={{ fontSize: 18 }}>{d.migration.title}</div>
          <Bar categories={d.migration.categories} data={d.migration.values} colors={d.migration.colors} />
        </div>
      </div>
    </div>
  );
}

// ============================ STRATEGY MAP (with arrows) ============================
function buildPath(from, to) {
  const { nodeW: w, nodeH: h } = SMAP_CANVAS;
  const cxF = from.x + w / 2;
  const cxT = to.x + w / 2;
  const cyF = from.y + h / 2;
  const cyT = to.y + h / 2;

  // horizontal (same row)
  if (Math.abs(from.y - to.y) < 30) {
    const sx = from.x < to.x ? from.x + w : from.x;
    const tx = from.x < to.x ? to.x : to.x + w;
    const midX = (sx + tx) / 2;
    return `${sx},${cyF} ${midX},${cyF} ${midX},${cyT} ${tx},${cyT}`;
  }
  // vertical elbow — arrow ends at the target
  if (from.y > to.y) {
    // source below target -> arrow points up into target bottom
    const sy = from.y; // top of source
    const ty = to.y + h; // bottom of target
    const midY = (sy + ty) / 2;
    return `${cxF},${sy} ${cxF},${midY} ${cxT},${midY} ${cxT},${ty}`;
  }
  // source above target -> arrow points down into target top
  const sy = from.y + h;
  const ty = to.y;
  const midY = (sy + ty) / 2;
  return `${cxF},${sy} ${cxF},${midY} ${cxT},${midY} ${cxT},${ty}`;
}

export function StrategyMap({ onDetails }) {
  const byId = {};
  smapNodes.forEach((n) => (byId[n.id] = n));
  const { w, h, nodeW, nodeH } = SMAP_CANVAS;

  return (
    <div className="page">
      <div className="page-head">
        <div className="section-label">Strategy Map</div>
        <div className="period">Mar 2026</div>
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div className="smap-scroll">
          <div className="smap-canvas" style={{ width: w, height: h }}>
            {/* perspective bands + labels */}
            {smapBands.map((b) => (
              <React.Fragment key={b.label}>
                <div
                  className="smap-band"
                  style={{ top: b.y, height: b.h, background: b.shade }}
                />
                <div className="smap-band-label" style={{ top: b.y + b.h / 2 - 16 }}>
                  {b.label}
                </div>
              </React.Fragment>
            ))}

            {/* arrows */}
            <svg className="smap-svg" width={w} height={h}>
              <defs>
                <marker id="arrow" markerWidth="9" markerHeight="9" refX="6" refY="3"
                  orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#7d96bf" />
                </marker>
              </defs>
              {smapEdges.map(([fromId, toId], i) => {
                const from = byId[fromId];
                const to = byId[toId];
                if (!from || !to) return null;
                return (
                  <polyline
                    key={i}
                    points={buildPath(from, to)}
                    fill="none"
                    stroke="#7d96bf"
                    strokeWidth="1.6"
                    markerEnd="url(#arrow)"
                  />
                );
              })}
            </svg>

            {/* nodes */}
            {smapNodes.map((n) => (
              <div
                key={n.id}
                className="smap-box"
                style={{ left: n.x, top: n.y, width: nodeW, minHeight: nodeH }}
                onClick={() =>
                  onDetails({
                    title: n.label,
                    perspective: bandOf(n.y),
                    status: n.status,
                    curLabel: "Status",
                    curValue: (STATUS[n.status] || STATUS.none).label,
                  })
                }
              >
                <span className="smap-dot" style={{ background: (STATUS[n.status] || STATUS.none).color }} />
                {n.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function bandOf(y) {
  const b = smapBands.find((b) => y >= b.y && y <= b.y + b.h);
  return b ? b.label : "";
}
