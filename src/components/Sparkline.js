import React from "react";
import Chart from "react-apexcharts";

// Tiny inline trend line shown next to each KPI.
export default function Sparkline({ data, color }) {
  const options = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: { curve: "smooth", width: 2 },
    colors: [color],
    tooltip: {
      enabled: true,
      theme: "dark",
      fixed: { enabled: false },
      x: { show: false },
      marker: { show: false },
      y: { title: { formatter: () => "" } },
    },
    fill: {
      type: "gradient",
      gradient: { opacityFrom: 0.4, opacityTo: 0 },
    },
  };
  return (
    <Chart
      options={options}
      series={[{ name: "", data }]}
      type="line"
      height={34}
    />
  );
}
