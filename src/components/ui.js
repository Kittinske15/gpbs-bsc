import React from "react";
import GaugeChart from "react-gauge-chart";
import Chart from "react-apexcharts";
import { STATUS, months } from "../data/bsc";

// ---- Status dot -----------------------------------------------------------
export function Dot({ status }) {
  const s = STATUS[status] || STATUS.none;
  return <span className="dot" style={{ background: s.color }} title={s.label} />;
}

// ---- Red/Yellow/Green half gauge -----------------------------------------
export function Gauge({ percent, id, center }) {
  return (
    <div className="gauge-wrap">
      <GaugeChart
        id={id}
        nrOfLevels={3}
        arcsLength={[0.4, 0.25, 0.35]}
        colors={["#e2433b", "#f2c200", "#36c46b"]}
        arcWidth={0.32}
        percent={Math.min(Math.max(percent || 0, 0), 1)}
        hideText
        needleColor="#cdd8ea"
        needleBaseColor="#cdd8ea"
        animate={false}
      />
      {center !== undefined && <div className="gauge-center">{center}</div>}
    </div>
  );
}

// ---- Donut ----------------------------------------------------------------
export function Donut({ labels, values, colors, center }) {
  const options = {
    chart: { type: "donut", background: "transparent" },
    theme: { mode: "dark" },
    labels,
    colors,
    legend: { position: "top", labels: { colors: "#eaf2ff" }, fontSize: "12px" },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(2)}%`,
      style: { fontSize: "11px" },
    },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        donut: {
          size: "68%",
          labels: center
            ? {
                show: true,
                total: {
                  show: true,
                  label: "",
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#eaf2ff",
                  formatter: () => center,
                },
              }
            : { show: false },
        },
      },
    },
    tooltip: { theme: "dark", y: { formatter: (v) => `${v}%` } },
  };
  return <Chart options={options} series={values} type="donut" height={210} />;
}

// ---- Bar / column chart ---------------------------------------------------
export function Bar({ categories, data, colors }) {
  const options = {
    chart: { type: "bar", toolbar: { show: false }, background: "transparent" },
    theme: { mode: "dark" },
    colors: colors && colors.length ? colors : ["#19b3a6"],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 4,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (v) => `${v.toFixed(2)}M`,
      style: { fontSize: "12px", colors: ["#eaf2ff"] },
      offsetY: -18,
    },
    legend: { show: true, position: "top", labels: { colors: "#eaf2ff" } },
    grid: { borderColor: "#1b3760", strokeDashArray: 4 },
    xaxis: {
      categories,
      labels: { style: { colors: "#9fb4d6" } },
      axisBorder: { color: "#1b3760" },
      axisTicks: { color: "#1b3760" },
    },
    yaxis: { labels: { style: { colors: "#9fb4d6" } } },
    tooltip: { theme: "dark", y: { formatter: (v) => `${v}M` } },
  };
  return (
    <Chart options={options} series={[{ name: "Subscribers", data }]} type="bar" height={210} />
  );
}

// ---- Sparkline / mini trend ----------------------------------------------
export function Sparkline({ data, color = "#5aa0ff", height = 38 }) {
  const options = {
    chart: { sparkline: { enabled: true }, animations: { enabled: false } },
    stroke: { curve: "smooth", width: 2 },
    colors: [color],
    fill: { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0 } },
    tooltip: { enabled: false },
  };
  return <Chart options={options} series={[{ data }]} type="area" height={height} />;
}

// ---- Trend chart (used in modal) -----------------------------------------
export function TrendChart({ data, color = "#5aa0ff" }) {
  const options = {
    chart: { type: "area", toolbar: { show: false }, background: "transparent" },
    theme: { mode: "dark" },
    colors: [color],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2.5 },
    fill: { type: "gradient", gradient: { opacityFrom: 0.3, opacityTo: 0.02 } },
    grid: { borderColor: "#1b3760", strokeDashArray: 4 },
    xaxis: {
      categories: months,
      labels: { style: { colors: "#9fb4d6" } },
      axisBorder: { color: "#1b3760" },
      axisTicks: { color: "#1b3760" },
    },
    yaxis: { labels: { style: { colors: "#9fb4d6" } } },
    tooltip: { theme: "dark" },
  };
  return <Chart options={options} series={[{ name: "Actual", data }]} type="area" height={260} />;
}

// ---- Delta line (▲ / ▼ %) -------------------------------------------------
export function Delta({ value, up }) {
  if (value === undefined || value === null) return null;
  const isUp = up !== undefined ? up : value >= 0;
  return (
    <div className={`delta ${isUp ? "up" : "down"}`}>
      <span className="tri">{isUp ? "▲" : "▼"}</span>
      {Math.abs(value).toLocaleString()}%
    </div>
  );
}

// ---- Compare footer (prev vs current) ------------------------------------
export function Compare({ prevLabel, prevValue, curLabel, curValue }) {
  const neg = (v) => typeof v === "string" && v.trim().startsWith("-");
  return (
    <div className="compare">
      <div className="col">
        <div className={`v ${neg(prevValue) ? "neg" : ""}`}>{prevValue ?? "N/A"}</div>
        <div className="l">{prevLabel}</div>
      </div>
      <div className="col">
        <div className={`v ${neg(curValue) ? "neg" : ""}`}>{curValue ?? "N/A"}</div>
        <div className="l">{curLabel}</div>
      </div>
    </div>
  );
}

// ---- Detail modal ---------------------------------------------------------
export function DetailModal({ item, onClose }) {
  if (!item) return null;
  const color =
    (STATUS[item.status] && STATUS[item.status].color) || "#5aa0ff";
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h2>
            {item.status && <Dot status={item.status} />} {item.title}
          </h2>
          <button className="close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-sub">
          {item.perspective ? `${item.perspective} · ` : ""}Detail breakdown ·
          demo data
        </div>

        <div className="stat-row">
          {item.curValue !== undefined && (
            <div className="stat-box">
              <div className="l">{item.curLabel || "YTD 2026"}</div>
              <div className="v">
                {item.curValue}
                {item.unit ? ` ${item.unit}` : ""}
              </div>
            </div>
          )}
          {item.prevValue !== undefined && (
            <div className="stat-box">
              <div className="l">{item.prevLabel || "Year 2025"}</div>
              <div className="v">
                {item.prevValue}
                {item.unit ? ` ${item.unit}` : ""}
              </div>
            </div>
          )}
          {item.delta !== undefined && (
            <div className="stat-box">
              <div className="l">Change</div>
              <div
                className="v"
                style={{ color: item.delta >= 0 ? "#36c46b" : "#e2433b" }}
              >
                {item.delta >= 0 ? "▲" : "▼"} {Math.abs(item.delta).toLocaleString()}%
              </div>
            </div>
          )}
        </div>

        {item.trend && <TrendChart data={item.trend} color={color} />}
      </div>
    </div>
  );
}

// ===========================================================================
// CARDS
// ===========================================================================

// Big-number stat card (Revenue / Subscribers style)
export function StatCard({ item, onDetails }) {
  return (
    <div className="card">
      <div className="card-title">
        {item.title}
        {item.year ? ` ${item.year}` : ""}{" "}
        {item.status && <Dot status={item.status} />}
      </div>
      {item.period && <div className="card-sub">{item.period}</div>}
      <div className="bigval">
        {item.value}
        {item.unit && <span className="unit">{item.unit}</span>}
      </div>
      {item.delta !== undefined ? (
        <Delta value={item.delta} up={item.up} />
      ) : (
        <div style={{ height: 6 }} />
      )}
      <div className="compare-label">( {item.prevLabel} vs {item.curLabel} )</div>
      <Compare {...item} />
      {item.details && (
        <button className="details-btn" onClick={() => onDetails(item)}>
          Details
        </button>
      )}
    </div>
  );
}

// Gauge card (Top up sale / Sales Performance / ratios style)
export function GaugeCard({ item, onDetails }) {
  return (
    <div className="card gauge-card">
      <div className="card-title">
        {item.title}
        {item.year ? ` ${item.year}` : ""}{" "}
        {item.status && <Dot status={item.status} />}
      </div>
      <Gauge id={`g-${item.key}`} percent={item.gauge} />
      <div className="bigval" style={{ fontSize: 26, marginTop: -6 }}>
        {item.value ?? "N/A"}
        {item.unit && item.value !== "N/A" && <span className="unit">{item.unit}</span>}
      </div>
      {(item.prevLabel || item.curLabel) && (
        <>
          <div className="compare-label">
            ( {item.prevLabel} vs {item.curLabel} )
          </div>
          <Compare {...item} />
        </>
      )}
      {item.details && (
        <button className="details-btn" onClick={() => onDetails(item)}>
          Details
        </button>
      )}
    </div>
  );
}

// Donut card
export function DonutCard({ item, onDetails }) {
  return (
    <div className="card">
      <div className="card-title" style={{ fontSize: 18 }}>
        {item.title}
      </div>
      <Donut
        labels={item.labels}
        values={item.values}
        colors={item.colors}
        center={item.center}
      />
      {item.details && (
        <button className="details-btn" onClick={() => onDetails(item)}>
          Details
        </button>
      )}
    </div>
  );
}
