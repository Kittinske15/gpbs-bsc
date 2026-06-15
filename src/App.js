import React from "react";
import GaugeChart from "react-gauge-chart";
import Sparkline from "./components/Sparkline";
import TrendChart from "./components/TrendChart";
import {
  meta,
  perspectives,
  initiatives,
  achievement,
  statusOf,
  overallScore,
} from "./data/scorecard";

function fmt(n) {
  return Number.isInteger(n) ? n : n.toFixed(1);
}

function PerspectivePanel({ p }) {
  return (
    <div className="panel">
      <div className="panel-head">
        <div className="title">
          <span
            className="icon"
            style={{ background: `${p.accent}22`, color: p.accent }}
          >
            {p.icon}
          </span>
          {p.name}
        </div>
        <div className="pscore" style={{ color: p.accent }}>
          {p.score}
          <span style={{ fontSize: 13, color: "var(--text-faint)" }}>/100</span>
        </div>
      </div>
      <div className="summary-line">{p.summary}</div>

      {p.kpis.map((kpi) => {
        const pct = achievement(kpi);
        const st = statusOf(pct);
        return (
          <div className="kpi" key={kpi.name}>
            <div>
              <div className="name">{kpi.name}</div>
              <div className="vals">
                <b>
                  {fmt(kpi.actual)}
                  {kpi.unit === "%" ? "%" : ""}
                </b>{" "}
                / {fmt(kpi.target)}
                {kpi.unit === "%" ? "%" : ` ${kpi.unit}`}
              </div>
            </div>
            <div className="spark">
              <Sparkline data={kpi.trend} color={p.accent} />
            </div>
            <span
              className="badge"
              style={{ background: `${st.color}22`, color: st.color }}
            >
              {pct}%
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <div>
          <h1>Balanced Scorecard</h1>
          <div className="sub">
            {meta.unit} · <span className="pill">{meta.period}</span>
          </div>
        </div>
        <div className="meta">
          Updated {meta.updated}
          <br />
          {meta.asOf}
        </div>
      </div>

      {/* Summary band: overall gauge + 4 perspective minis */}
      <div className="summary">
        <div className="card overall">
          <div className="gauge-wrap">
            <GaugeChart
              id="overall-gauge"
              nrOfLevels={20}
              colors={["#ef4444", "#eab308", "#22c55e"]}
              arcWidth={0.3}
              percent={overallScore / 100}
              textColor="#e8eefc"
              needleColor="#5b6b88"
              needleBaseColor="#5b6b88"
              animate={false}
            />
          </div>
          <div className="big">Overall scorecard health</div>
        </div>

        {perspectives.map((p) => (
          <div className="card persp-mini" key={p.key}>
            <div className="label">
              <span style={{ fontSize: 16 }}>{p.icon}</span>
              {p.name}
            </div>
            <div className="score" style={{ color: p.accent }}>
              {p.score}
            </div>
            <div className="bar">
              <span
                style={{ width: `${p.score}%`, background: p.accent }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Four perspective panels */}
      <div className="panels">
        {perspectives.map((p) => (
          <PerspectivePanel key={p.key} p={p} />
        ))}
      </div>

      {/* Lower grid: trend chart + initiatives table */}
      <div className="lower">
        <div className="panel">
          <div className="section-title">Performance Index Trend</div>
          <TrendChart />
        </div>

        <div className="panel">
          <div className="section-title">Strategic Initiatives</div>
          <table className="init">
            <thead>
              <tr>
                <th>Initiative</th>
                <th>Perspective</th>
                <th>Owner</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {initiatives.map((it) => {
                const ok = it.status === "On Track";
                return (
                  <tr key={it.name}>
                    <td className="pname">{it.name}</td>
                    <td>{it.perspective}</td>
                    <td>{it.owner}</td>
                    <td>
                      <div className="progress">
                        <span
                          style={{
                            width: `${it.progress}%`,
                            background: ok ? "var(--good)" : "var(--bad)",
                          }}
                        />
                      </div>
                      <span style={{ fontSize: 11, color: "var(--text-faint)" }}>
                        {it.progress}%
                      </span>
                    </td>
                    <td>
                      <span className={`tag ${ok ? "ok" : "risk"}`}>
                        {it.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer">
        GPBS Balanced Scorecard · code-based demo replacing the Power BI BSC
        view · all figures are illustrative demo data
      </div>
    </div>
  );
}
