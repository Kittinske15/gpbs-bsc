import React from "react";
import Chart from "react-apexcharts";
import { perspectives, months } from "../data/scorecard";

// Multi-series line chart: each perspective's KPI-achievement index over time.
// We approximate a monthly "index" by scaling each perspective's first KPI
// trend to a 0-100 achievement-style curve so the four lines are comparable.
export default function TrendChart() {
  const series = perspectives.map((p) => {
    const base = p.kpis[0].trend;
    const max = Math.max(...base);
    return {
      name: p.name,
      data: base.map((v) => Math.round((v / max) * p.score)),
    };
  });

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      background: "transparent",
      fontFamily: "inherit",
    },
    theme: { mode: "dark" },
    colors: perspectives.map((p) => p.accent),
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: { opacityFrom: 0.25, opacityTo: 0.02 },
    },
    grid: { borderColor: "#233149", strokeDashArray: 4 },
    xaxis: {
      categories: months,
      labels: { style: { colors: "#93a1bd" } },
      axisBorder: { color: "#233149" },
      axisTicks: { color: "#233149" },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: { style: { colors: "#93a1bd" }, formatter: (v) => `${Math.round(v)}` },
    },
    legend: { labels: { colors: "#e8eefc" }, position: "top" },
    tooltip: { theme: "dark", y: { formatter: (v) => `${v} idx` } },
  };

  return <Chart options={options} series={series} type="area" height={300} />;
}
