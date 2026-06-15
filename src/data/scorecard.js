// ---------------------------------------------------------------------------
// GPBS Balanced Scorecard — DEMO DATA
// ---------------------------------------------------------------------------
// This is a code-based stand-in for the Power BI BSC report. All numbers below
// are illustrative demo data. To wire up real data later, replace the values
// here (or swap this module for an API call that returns the same shape).
//
// Shape:
//   perspectives[]            one of the four classic BSC perspectives
//     .key / .name / .accent  identity + theme color
//     .icon                   emoji used in the panel header
//     .score                  rolled-up % achievement (0-100)
//     .kpis[]                  individual measures
//        .name                measure label
//        .unit                "%", "THB M", "days", "score", ...
//        .actual / .target    current vs goal
//        .higherIsBetter      true if actual >= target is good
//        .trend[]             last 6 periods (for the mini sparkline)
// ---------------------------------------------------------------------------

export const meta = {
  unit: "Great Performance Business Solutions (GPBS)",
  period: "FY2026 · Q2",
  updated: "15 Jun 2026",
  asOf: "Demo data — illustrative only",
};

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const perspectives = [
  {
    key: "financial",
    name: "Financial",
    accent: "#4f7cff",
    icon: "💰",
    score: 88,
    summary: "Revenue ahead of plan; margin recovering after Q1 dip.",
    kpis: [
      {
        name: "Revenue",
        unit: "THB M",
        actual: 142.6,
        target: 135.0,
        higherIsBetter: true,
        trend: [98, 104, 112, 121, 133, 142.6],
      },
      {
        name: "Gross Margin",
        unit: "%",
        actual: 38.4,
        target: 40.0,
        higherIsBetter: true,
        trend: [41, 39, 36, 37, 38, 38.4],
      },
      {
        name: "Operating Cost",
        unit: "THB M",
        actual: 84.1,
        target: 88.0,
        higherIsBetter: false,
        trend: [70, 74, 79, 82, 83, 84.1],
      },
      {
        name: "EBITDA Margin",
        unit: "%",
        actual: 22.7,
        target: 21.0,
        higherIsBetter: true,
        trend: [18, 19, 20, 21, 22, 22.7],
      },
    ],
  },
  {
    key: "customer",
    name: "Customer",
    accent: "#19b3a6",
    icon: "🤝",
    score: 81,
    summary: "Strong retention; NPS climbing but acquisition cost rising.",
    kpis: [
      {
        name: "Net Promoter Score",
        unit: "score",
        actual: 47,
        target: 50,
        higherIsBetter: true,
        trend: [38, 40, 42, 43, 45, 47],
      },
      {
        name: "Customer Retention",
        unit: "%",
        actual: 92.5,
        target: 90.0,
        higherIsBetter: true,
        trend: [88, 89, 90, 91, 92, 92.5],
      },
      {
        name: "Active Clients",
        unit: "clients",
        actual: 318,
        target: 300,
        higherIsBetter: true,
        trend: [270, 282, 295, 304, 312, 318],
      },
      {
        name: "Avg. Resolution Time",
        unit: "hrs",
        actual: 6.2,
        target: 5.0,
        higherIsBetter: false,
        trend: [9, 8.4, 7.7, 7.1, 6.6, 6.2],
      },
    ],
  },
  {
    key: "process",
    name: "Internal Process",
    accent: "#f0883e",
    icon: "⚙️",
    score: 76,
    summary: "Delivery on time improving; defect rate still above target.",
    kpis: [
      {
        name: "On-Time Delivery",
        unit: "%",
        actual: 87.0,
        target: 95.0,
        higherIsBetter: true,
        trend: [78, 80, 82, 84, 86, 87],
      },
      {
        name: "Project Cycle Time",
        unit: "days",
        actual: 34,
        target: 30,
        higherIsBetter: false,
        trend: [45, 42, 40, 38, 36, 34],
      },
      {
        name: "Defect Rate",
        unit: "%",
        actual: 4.1,
        target: 2.5,
        higherIsBetter: false,
        trend: [6.5, 6.0, 5.4, 4.9, 4.5, 4.1],
      },
      {
        name: "Process Automation",
        unit: "%",
        actual: 61,
        target: 70,
        higherIsBetter: true,
        trend: [40, 45, 50, 54, 58, 61],
      },
    ],
  },
  {
    key: "learning",
    name: "Learning & Growth",
    accent: "#a855f7",
    icon: "🌱",
    score: 84,
    summary: "Training hours on track; engagement steady, attrition low.",
    kpis: [
      {
        name: "Training Hours / Emp.",
        unit: "hrs",
        actual: 28,
        target: 30,
        higherIsBetter: true,
        trend: [12, 16, 19, 22, 25, 28],
      },
      {
        name: "Employee Engagement",
        unit: "%",
        actual: 79,
        target: 80,
        higherIsBetter: true,
        trend: [72, 74, 75, 76, 78, 79],
      },
      {
        name: "Staff Attrition",
        unit: "%",
        actual: 8.3,
        target: 10.0,
        higherIsBetter: false,
        trend: [13, 12, 11, 10, 9, 8.3],
      },
      {
        name: "Skill Certifications",
        unit: "certs",
        actual: 64,
        target: 60,
        higherIsBetter: true,
        trend: [30, 38, 45, 52, 58, 64],
      },
    ],
  },
];

// Strategic initiatives table (demo)
export const initiatives = [
  { name: "Digital Self-Service Portal", perspective: "Customer", owner: "P. Suthida", progress: 72, status: "On Track" },
  { name: "Margin Recovery Program", perspective: "Financial", owner: "K. Anan", progress: 58, status: "At Risk" },
  { name: "Delivery Automation Phase 2", perspective: "Internal Process", owner: "T. Worawit", progress: 40, status: "At Risk" },
  { name: "Leadership Academy", perspective: "Learning & Growth", owner: "N. Chayada", progress: 86, status: "On Track" },
  { name: "Client Success Playbook", perspective: "Customer", owner: "S. Pimchanok", progress: 95, status: "On Track" },
];

// Helpers ------------------------------------------------------------------

// % achievement of a KPI against its target, capped at 0-150 for display.
export function achievement(kpi) {
  const { actual, target, higherIsBetter } = kpi;
  if (!target) return 0;
  const ratio = higherIsBetter ? actual / target : target / actual;
  return Math.max(0, Math.round(ratio * 100));
}

// Status bucket from an achievement %.
export function statusOf(pct) {
  if (pct >= 100) return { label: "On Target", color: "#22c55e" };
  if (pct >= 90) return { label: "Near Target", color: "#eab308" };
  return { label: "Below Target", color: "#ef4444" };
}

// Overall scorecard health = average of perspective scores.
export const overallScore = Math.round(
  perspectives.reduce((s, p) => s + p.score, 0) / perspectives.length
);
