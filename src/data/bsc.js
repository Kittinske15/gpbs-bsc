// ---------------------------------------------------------------------------
// GPBS Balanced Scorecard — DEMO DATA  (modeled on the True Visions BSC report)
// ---------------------------------------------------------------------------
// Code-based stand-in for the Power BI BSC. Numbers approximate the report
// screenshots and are illustrative demo data only. To wire real data later,
// replace the values here (or swap this module for an API returning the same
// shape).
// ---------------------------------------------------------------------------

// Fictional demo company (not affiliated with any real business group).
export const companies = ["Aurora Group", "Aurora TV", "Aurora Stream", "Aurora App"];
export const years = [2024, 2025, 2026];

export const meta = {
  period: "Mar 2026",
  brand: "GPBS",
  note: "Demo data — illustrative only",
};

export const months = [
  "Apr", "May", "Jun", "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec", "Jan", "Feb", "Mar",
];

// status helpers ------------------------------------------------------------
export const STATUS = {
  green: { color: "#36c46b", label: "On Target" },
  yellow: { color: "#f2c200", label: "Watch" },
  red: { color: "#e2433b", label: "Below Target" },
  none: { color: "#cfd8e6", label: "No Data" },
};

// =====================================================================
// FINANCIALS
// =====================================================================
export const financials = {
  statCards: [
    {
      key: "revenue",
      title: "Total Revenue",
      period: "Y 2026",
      status: "green",
      value: "8,640",
      unit: "MB",
      delta: 6.9,
      up: true,
      prevLabel: "Year 2025",
      prevValue: "8,080",
      curLabel: "YTD 2026",
      curValue: "8,640",
      details: true,
      trend: [620, 650, 680, 700, 705, 712, 720, 735, 742, 760, 775, 790],
    },
    {
      key: "expenses",
      title: "Total Expenses",
      period: "Y 2026",
      status: "green",
      value: "7,310",
      unit: "MB",
      delta: -4.0,
      up: false,
      prevLabel: "Year 2025",
      prevValue: "7,613",
      curLabel: "YTD 2026",
      curValue: "7,310",
      details: true,
      trend: [640, 638, 632, 628, 625, 620, 615, 610, 608, 605, 602, 600],
    },
  ],
  // Overall Profit block — two gauges
  profit: {
    title: "Overall Profit - Y 2026",
    ebitda: {
      key: "ebitda",
      label: "EBITDA",
      status: "green",
      gauge: 0.74,
      delta: 12.7,
      up: true,
      prevLabel: "Year 2025",
      prevValue: "1,180",
      curLabel: "YTD 2026",
      curValue: "1,330",
      unit: "MB",
      details: true,
      trend: [95, 100, 104, 108, 110, 112, 115, 118, 120, 124, 128, 132],
    },
    netProfit: {
      key: "netProfit",
      label: "Net Profit",
      status: "green",
      gauge: 0.7,
      delta: 14.0,
      up: true,
      prevLabel: "Year 2025",
      prevValue: "860",
      curLabel: "YTD 2026",
      curValue: "980",
      unit: "MB",
      details: true,
      trend: [70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95, 98],
    },
  },
  cashFlow: {
    key: "cashFlow",
    title: "Cash Flow",
    status: "green",
    value: "642.5",
    unit: "MB",
    delta: 8.9,
    up: true,
    curLabel: "YTD 2026",
    curValue: "642.5",
    prevLabel: "Year 2025",
    prevValue: "590.0",
    details: true,
    trend: [410, 430, 455, 480, 500, 520, 545, 565, 585, 605, 625, 642],
  },
  ap: {
    key: "ap",
    title: "AP",
    rows: [
      { label: "AP", value: "11.6M", sub: "YTD 2026" },
      { label: "AR", value: "203.2M", sub: "YTD 2026" },
      { label: "Loan", value: "141M", sub: "YTD 2026" },
    ],
    details: true,
  },
  // balance sheet trio
  balance: [
    { key: "asset", title: "Total Asset", status: "green", value: "12,450", prev: "11,720", unit: "MB", delta: 6.2, up: true },
    { key: "liab", title: "Total Liabilities", status: "yellow", value: "5,180", prev: "5,260", unit: "MB", delta: -1.5, up: false },
    { key: "equity", title: "Total Equity", status: "green", value: "7,270", prev: "6,460", unit: "MB", delta: 12.5, up: true },
  ],
  // ratio gauges trio
  ratios: [
    { key: "de", title: "D/E Ratio", status: "green", gauge: 0.6, prevValue: "0.81", curValue: "0.71" },
    { key: "roa", title: "ROA", status: "green", gauge: 0.62, prevValue: "8.1%", curValue: "9.2%" },
    { key: "roe", title: "ROE", status: "green", gauge: 0.7, prevValue: "13.4%", curValue: "14.8%" },
  ],
};

// =====================================================================
// CUSTOMER
// =====================================================================
export const customer = {
  sections: [
    {
      group: "Aurora TV",
      subscribers: {
        key: "lin-subs",
        title: "Total Subscribers",
        year: "2026",
        value: "1.02M",
        delta: 8.6,
        up: true,
        prevLabel: "Year 2025",
        prevValue: "0.94M",
        curLabel: "YTD 2026",
        curValue: "1.02M",
        details: true,
        trend: [0.92, 0.94, 0.95, 0.97, 0.98, 0.99, 1.0, 1.0, 1.01, 1.01, 1.02, 1.02],
      },
      gauge: {
        key: "lin-topup",
        title: "Top up sale",
        year: "2026",
        status: "green",
        gauge: 0.78,
        value: "1,643",
        unit: "K THB",
        prevLabel: "Year 2025",
        prevValue: "1,420",
        curLabel: "YTD 2026",
        curValue: "1,643",
        details: true,
        trend: [110, 120, 130, 140, 150, 145, 155, 160, 158, 162, 164, 164],
      },
      donut: {
        key: "lin-pkg",
        title: "Subscribers by Package",
        labels: ["Premium", "Mid", "Mass"],
        values: [4.6, 4.52, 90.88],
        colors: ["#19b3a6", "#f2c200", "#f0883e"],
        details: true,
      },
      churn: {
        key: "lin-churn",
        title: "Churn",
        year: "2026",
        status: "green",
        value: "2.2%",
        up: false,
        prevLabel: "Jul' 2025",
        prevValue: "2.6%",
        curLabel: "Mar' 2026",
        curValue: "2.2%",
        details: true,
        trend: [3.1, 3.0, 2.9, 2.8, 2.7, 2.6, 2.5, 2.4, 2.3, 2.3, 2.2, 2.2],
      },
    },
    {
      group: "Aurora Stream",
      subscribers: {
        key: "now-subs",
        title: "Total Subscribers",
        year: "2026",
        value: "748K",
        delta: 8.4,
        up: true,
        prevLabel: "Year 2025",
        prevValue: "690K",
        curLabel: "YTD 2026",
        curValue: "748K",
        details: true,
        trend: [690, 698, 705, 712, 718, 724, 730, 735, 740, 743, 746, 748],
      },
      gauge: {
        key: "now-sales",
        title: "Sales Performance",
        year: "2026",
        status: "green",
        gauge: 0.82,
        value: "486,922",
        unit: "THB",
        prevLabel: "Year 2025",
        prevValue: "432,510",
        curLabel: "YTD 2026",
        curValue: "486,922",
        details: true,
        trend: [380, 400, 410, 420, 440, 450, 460, 470, 475, 480, 484, 487],
      },
      donut: {
        key: "now-pkg",
        title: "Subscribers by Package",
        labels: ["Aurora App", "Aurora Stream"],
        values: [11.19, 88.81],
        colors: ["#c026d3", "#22b8d6"],
        center: "748K",
        details: true,
      },
      churn: {
        key: "now-churn",
        title: "Churn",
        year: "2026",
        status: "green",
        value: "3.0%",
        up: false,
        prevLabel: "Jul' 2025",
        prevValue: "3.4%",
        curLabel: "Mar' 2026",
        curValue: "3.0%",
        details: true,
        trend: [4.2, 4.0, 3.9, 3.7, 3.6, 3.5, 3.4, 3.3, 3.2, 3.1, 3.0, 3.0],
      },
    },
  ],
};

// =====================================================================
// INTERNAL
// =====================================================================
export const internal = {
  gauges: [
    { key: "sys-ontime", title: "System On-Time", status: "green", gauge: 0.92, unit: "%", prevLabel: "Year 2025", prevValue: "88", curLabel: "YTD 2026", curValue: "92", details: true, trend: [85, 86, 87, 88, 88, 89, 90, 90, 91, 91, 92, 92] },
    { key: "prog-rating", title: "Program Rating", status: "yellow", gauge: 0.74, unit: "score", prevLabel: "Year 2025", prevValue: "7.1", curLabel: "YTD 2026", curValue: "7.4", details: true, trend: [6.8, 6.9, 7.0, 7.0, 7.1, 7.1, 7.2, 7.2, 7.3, 7.3, 7.4, 7.4] },
    { key: "chan-rating", title: "Channel Rating", status: "green", gauge: 0.81, unit: "score", prevLabel: "Year 2025", prevValue: "7.6", curLabel: "YTD 2026", curValue: "8.1", details: true, trend: [7.4, 7.5, 7.6, 7.7, 7.7, 7.8, 7.9, 7.9, 8.0, 8.0, 8.1, 8.1] },
    { key: "part-rating", title: "Partner Rating", status: "yellow", gauge: 0.68, unit: "score", prevLabel: "Year 2025", prevValue: "6.5", curLabel: "YTD 2026", curValue: "6.8", details: true, trend: [6.2, 6.3, 6.4, 6.4, 6.5, 6.5, 6.6, 6.6, 6.7, 6.7, 6.8, 6.8] },
  ],
};

// =====================================================================
// PEOPLE
// =====================================================================
export const people = {
  cards: [
    { key: "cost-head", title: "Cost Per Head", status: "green", value: "0.42", unit: "MB", delta: -6.5, up: false, prevLabel: "Year 2025", prevValue: "0.45", curLabel: "YTD 2026", curValue: "0.42", details: true, trend: [0.49, 0.48, 0.47, 0.46, 0.45, 0.45, 0.44, 0.44, 0.43, 0.43, 0.42, 0.42] },
    { key: "rev-head", title: "Revenue Per Head", status: "green", value: "1.86", unit: "MB", delta: 8.1, up: true, prevLabel: "Year 2025", prevValue: "1.72", curLabel: "YTD 2026", curValue: "1.86", details: true, trend: [1.6, 1.64, 1.68, 1.7, 1.72, 1.74, 1.77, 1.79, 1.81, 1.83, 1.85, 1.86] },
    { key: "regret-turnover", title: "Regretted Turn Over Rate", status: "yellow", value: "8.3", unit: "%", delta: -1.7, up: false, prevLabel: "Year 2025", prevValue: "10.0", curLabel: "YTD 2026", curValue: "8.3", details: true, trend: [12, 11.6, 11.2, 10.7, 10.2, 9.8, 9.4, 9.0, 8.8, 8.6, 8.4, 8.3] },
    { key: "staff-eng", title: "Staff Engagement", status: "green", value: "79", unit: "%", delta: 4.0, up: true, prevLabel: "Year 2025", prevValue: "75", curLabel: "YTD 2026", curValue: "79", details: true, trend: [72, 73, 74, 74, 75, 76, 76, 77, 78, 78, 79, 79] },
    { key: "roi-training", title: "ROI Training", status: "green", value: "1.34", unit: "x", delta: 12.0, up: true, prevLabel: "Year 2025", prevValue: "1.20", curLabel: "YTD 2026", curValue: "1.34", details: true, trend: [1.05, 1.09, 1.13, 1.16, 1.2, 1.23, 1.26, 1.28, 1.3, 1.32, 1.33, 1.34] },
    { key: "promotion", title: "Promotion Rate", status: "yellow", value: "6.1", unit: "%", delta: 0.6, up: true, prevLabel: "Year 2025", prevValue: "5.5", curLabel: "YTD 2026", curValue: "6.1", details: true, trend: [4.9, 5.0, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 6.0, 6.1] },
  ],
};

// =====================================================================
// STRATEGY MAP — perspectives -> nodes with status + connections
// =====================================================================
export const strategyMap = {
  rows: [
    {
      perspective: "Financials",
      nodes: [
        { id: "roe", label: "ROE", status: "green" },
        { id: "de", label: "D/E Ratio", status: "green" },
        { id: "roa", label: "ROA", status: "green" },
        { id: "netprofit", label: "Net Profit", status: "red" },
        { id: "eps", label: "EPS", status: "green" },
        { id: "pe", label: "P/E", status: "green" },
        { id: "dps", label: "DPS", status: "green" },
        { id: "ebitda", label: "EBITDA", status: "red" },
        { id: "cashflow", label: "Cash Flow", status: "green" },
        { id: "equity", label: "Total Equity", status: "green" },
        { id: "liab", label: "Total Liabilities", status: "green" },
        { id: "assets", label: "Total Assets", status: "green" },
        { id: "revenue", label: "Total Revenue", status: "red" },
        { id: "expense", label: "Total Expense", status: "red" },
        { id: "fincash", label: "Financial Cash", status: "green" },
        { id: "opcash", label: "Operating Cash", status: "green" },
        { id: "invcash", label: "Investing Cash", status: "green" },
      ],
    },
    {
      perspective: "Customer",
      nodes: [
        { id: "loyalty", label: "Cust Loyalty", status: "green" },
        { id: "churn", label: "Churn Rate", status: "green" },
        { id: "subs", label: "Total Subscribers", status: "green" },
        { id: "growth-now", label: "Sales Growth (TVS Now)", status: "green" },
        { id: "growth-lin", label: "Sales Growth (Linear)", status: "green" },
        { id: "satisfaction", label: "Cust Satisfaction", status: "green" },
        { id: "complaint", label: "Cust Complaint", status: "green" },
        { id: "ott", label: "OTT", status: "yellow" },
        { id: "linear", label: "Linear", status: "green" },
        { id: "online-piracy", label: "ONLINE PIRACY", status: "green" },
        { id: "cmdu-piracy", label: "CMDU PIRACY", status: "green" },
      ],
    },
    {
      perspective: "Internal",
      nodes: [
        { id: "sys-ontime", label: "System On-Time", status: "green" },
        { id: "prog-rating", label: "Program Rating", status: "green" },
        { id: "chan-rating", label: "Channel Rating", status: "green" },
        { id: "part-rating", label: "Partner Rating", status: "green" },
      ],
    },
    {
      perspective: "People",
      nodes: [
        { id: "cost-head", label: "Cost Per Head", status: "green" },
        { id: "rev-head", label: "Revenue Per Head", status: "green" },
        { id: "regret", label: "Regretted Turn Over Rate", status: "green" },
        { id: "staff-eng", label: "Staff Engagement", status: "green" },
        { id: "roi-training", label: "ROI Training", status: "green" },
        { id: "promotion", label: "Promotion Rate", status: "green" },
      ],
    },
  ],
};

// =====================================================================
// KPI SUMMARY — flat list rolled up across perspectives
// =====================================================================
export const kpiSummary = [
  { perspective: "Financials", name: "Total Revenue", actual: "2,162 MB", target: "8,080 MB", status: "red", delta: -73.2, trend: financials.statCards[0].trend },
  { perspective: "Financials", name: "Total Expenses", actual: "2,146 MB", target: "7,613 MB", status: "green", delta: -71.8, trend: financials.statCards[1].trend },
  { perspective: "Financials", name: "EBITDA", actual: "16 MB", target: "467 MB", status: "red", delta: -96.5, trend: financials.profit.ebitda.trend },
  { perspective: "Financials", name: "Net Profit", actual: "-333 MB", target: "-860 MB", status: "red", delta: 61, trend: financials.profit.netProfit.trend },
  { perspective: "Customer", name: "Total Subscribers (Aurora TV)", actual: "997.25K", target: "1.00M", status: "green", delta: 97604.83, trend: customer.sections[0].subscribers.trend },
  { perspective: "Customer", name: "Total Subscribers (Aurora Stream)", actual: "748K", target: "748K", status: "yellow", delta: 0, trend: customer.sections[1].subscribers.trend },
  { perspective: "Internal", name: "System On-Time", actual: "92%", target: "95%", status: "green", delta: 4.0, trend: internal.gauges[0].trend },
  { perspective: "Internal", name: "Program Rating", actual: "7.4", target: "8.0", status: "yellow", delta: 4.2, trend: internal.gauges[1].trend },
  { perspective: "Internal", name: "Channel Rating", actual: "8.1", target: "8.0", status: "green", delta: 6.6, trend: internal.gauges[2].trend },
  { perspective: "Internal", name: "Partner Rating", actual: "6.8", target: "7.5", status: "yellow", delta: 4.6, trend: internal.gauges[3].trend },
  { perspective: "People", name: "Cost Per Head", actual: "0.42 MB", target: "0.45 MB", status: "green", delta: -6.5, trend: people.cards[0].trend },
  { perspective: "People", name: "Revenue Per Head", actual: "1.86 MB", target: "1.72 MB", status: "green", delta: 8.1, trend: people.cards[1].trend },
  { perspective: "People", name: "Staff Engagement", actual: "79%", target: "80%", status: "green", delta: 4.0, trend: people.cards[3].trend },
  { perspective: "People", name: "Regretted Turnover", actual: "8.3%", target: "10%", status: "yellow", delta: -1.7, trend: people.cards[2].trend },
];

// =====================================================================
// KPI SUMMARY — dashboard (cards + donuts), mirrors the report page
// =====================================================================
export const kpiSummaryDash = {
  revenueBreakdown: {
    key: "rev-breakdown",
    title: "Revenue Breakdown",
    labels: ["Subs&install", "Ads", "Spons", "Music&Ent", "Influ"],
    values: [58.75, 22.28, 7.06, 6.91, 5.0],
    colors: ["#c026d3", "#19b3a6", "#36c46b", "#7c5cff", "#e2433b"],
    details: true,
  },
  totalSubscribers: {
    key: "kpi-subs",
    title: "Total Subscribers",
    year: "2026",
    status: "green",
    value: "1.77M",
    delta: 8.5,
    up: true,
    prevLabel: "Year 2025",
    prevValue: "1.63M",
    curLabel: "YTD 2026",
    curValue: "1.77M",
    details: true,
    trend: [1.61, 1.64, 1.66, 1.68, 1.7, 1.71, 1.73, 1.74, 1.75, 1.76, 1.76, 1.77],
  },
  tvsLinear: {
    key: "kpi-linear",
    title: "Aurora TV",
    labels: ["Premium", "Mid", "Mass"],
    values: [4.6, 4.52, 90.88],
    colors: ["#19b3a6", "#f2c200", "#f0883e"],
    center: "1.00M",
    details: true,
  },
  ottPlatform: {
    key: "kpi-ott",
    title: "OTT Platform",
    labels: ["Aurora App", "Aurora Stream"],
    values: [11.19, 88.81],
    colors: ["#c026d3", "#22b8d6"],
    center: "748K",
    details: true,
  },
  migration: {
    key: "kpi-migration",
    title: "Migration",
    categories: ["Aurora TV", "Migrate"],
    values: [1.02, 0.34],
    colors: ["#19b3a6", "#f2c200"],
  },
};

// =====================================================================
// STRATEGY MAP LAYOUT — fixed-coordinate nodes + edges (for SVG arrows)
// Canvas is 1740 x 930; each node box is 168 x 58 (top-left x,y).
// =====================================================================
export const SMAP_CANVAS = { w: 1740, h: 930, nodeW: 168, nodeH: 58 };

export const smapBands = [
  { label: "Financials", y: 100, h: 320, shade: "rgba(255,255,255,0.035)" },
  { label: "Customer", y: 425, h: 235, shade: "rgba(255,255,255,0.0)" },
  { label: "Internal", y: 665, h: 100, shade: "rgba(255,255,255,0.05)" },
  { label: "People", y: 770, h: 160, shade: "rgba(255,255,255,0.0)" },
];

export const smapNodes = [
  // Financials
  { id: "netprofit", label: "Net Profit", status: "green", x: 900, y: 120 },
  { id: "eps", label: "EPS", status: "green", x: 1180, y: 120 },
  { id: "pe", label: "P/E", status: "green", x: 1380, y: 120 },
  { id: "roe", label: "ROE", status: "green", x: 300, y: 215 },
  { id: "de", label: "D/E Ratio", status: "yellow", x: 480, y: 215 },
  { id: "roa", label: "ROA", status: "green", x: 660, y: 215 },
  { id: "ebitda", label: "EBITDA", status: "green", x: 900, y: 215 },
  { id: "dps", label: "DPS", status: "green", x: 1180, y: 215 },
  { id: "cashflow", label: "Cash Flow", status: "green", x: 1380, y: 215 },
  { id: "equity", label: "Total Equity", status: "green", x: 300, y: 320 },
  { id: "liab", label: "Total Liabilities", status: "green", x: 480, y: 320 },
  { id: "assets", label: "Total Assets", status: "green", x: 660, y: 320 },
  { id: "revenue", label: "Total Revenue", status: "green", x: 840, y: 320 },
  { id: "expense", label: "Total Expense", status: "green", x: 1020, y: 320 },
  { id: "fincash", label: "Financial Cash", status: "green", x: 1200, y: 320 },
  { id: "opcash", label: "Operating Cash", status: "green", x: 1380, y: 320 },
  { id: "invcash", label: "Investing Cash", status: "green", x: 1545, y: 320 },
  // Customer
  { id: "loyalty", label: "Cust Loyalty", status: "green", x: 300, y: 445 },
  { id: "churn", label: "Churn Rate", status: "green", x: 500, y: 445 },
  { id: "subs", label: "Total Subscribers", status: "green", x: 690, y: 445 },
  { id: "growthnow", label: "Sales Growth (Stream)", status: "green", x: 950, y: 445 },
  { id: "growthlin", label: "Sales Growth (TV)", status: "green", x: 1240, y: 445 },
  { id: "satisfaction", label: "Cust Satisfaction", status: "green", x: 290, y: 565 },
  { id: "complaint", label: "Cust Complaint", status: "yellow", x: 490, y: 565 },
  { id: "ott", label: "Streaming", status: "yellow", x: 680, y: 565 },
  { id: "linear", label: "Broadcast", status: "green", x: 870, y: 565 },
  { id: "onlinepiracy", label: "Online Piracy", status: "yellow", x: 1060, y: 565 },
  { id: "cmdupiracy", label: "Content Piracy", status: "red", x: 1320, y: 565 },
  // Internal
  { id: "sysontime", label: "System On-Time", status: "green", x: 350, y: 685 },
  { id: "prograting", label: "Program Rating", status: "yellow", x: 560, y: 685 },
  { id: "chanrating", label: "Channel Rating", status: "green", x: 800, y: 685 },
  { id: "partrating", label: "Partner Rating", status: "yellow", x: 1010, y: 685 },
  // People
  { id: "costhead", label: "Cost Per Head", status: "green", x: 340, y: 795 },
  { id: "revhead", label: "Revenue Per Head", status: "green", x: 540, y: 795 },
  { id: "regret", label: "Regretted Turn Over Rate", status: "yellow", x: 820, y: 795 },
  { id: "staffeng", label: "Staff Engagement", status: "green", x: 1030, y: 795 },
  { id: "roitraining", label: "ROI Training", status: "green", x: 540, y: 862 },
  { id: "promotion", label: "Promotion Rate", status: "yellow", x: 1030, y: 862 },
];

export const smapEdges = [
  ["equity", "roe"], ["liab", "de"], ["assets", "roa"],
  ["revenue", "ebitda"], ["expense", "ebitda"], ["revenue", "netprofit"],
  ["ebitda", "netprofit"], ["netprofit", "eps"], ["netprofit", "dps"],
  ["eps", "pe"], ["fincash", "cashflow"], ["opcash", "cashflow"],
  ["invcash", "cashflow"],
  ["subs", "revenue"], ["growthnow", "revenue"], ["growthlin", "expense"],
  ["loyalty", "churn"], ["satisfaction", "loyalty"], ["complaint", "churn"],
  ["ott", "subs"], ["linear", "subs"],
  ["onlinepiracy", "growthnow"], ["cmdupiracy", "growthlin"],
  ["sysontime", "satisfaction"], ["prograting", "complaint"],
  ["chanrating", "ott"], ["partrating", "linear"],
  ["costhead", "sysontime"], ["revhead", "prograting"],
  ["roitraining", "costhead"], ["roitraining", "revhead"],
  ["regret", "chanrating"], ["staffeng", "partrating"],
  ["promotion", "staffeng"], ["promotion", "regret"],
];

// Tabs in display order
export const TABS = [
  "Strategy Map",
  "KPI Summary",
  "Financials",
  "Customer",
  "Internal",
  "People",
];
