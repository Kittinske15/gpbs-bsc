# GPBS Balanced Scorecard (gpbs-bsc)

A code-based Balanced Scorecard dashboard that replaces the Power BI BSC view
used in GPBS PMS. It renders the four classic BSC perspectives — **Financial,
Customer, Internal Process, Learning & Growth** — with KPI cards, sparklines, a
performance-index trend chart, and a strategic-initiatives table.

> All figures are **illustrative demo data**. See `src/data/scorecard.js`.

## Stack

React 18 (CRA) · `react-apexcharts` · `react-gauge-chart` — same toolchain as
the other GPBS apps.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
```

## Build for deploy

```bash
npm run build      # outputs ./build
```

`package.json` sets `"homepage": "/gpbs-bsc"`, so the build is ready to be
served at `https://ibsdo.com/gpbs-bsc/` — which is where the GPBS PMS sidebar
("Balanced Scorecard" item) now links.

## Wiring real data later

Everything the UI shows comes from `src/data/scorecard.js`. To go live, either:

1. Replace the demo numbers in that file, or
2. Swap the static `export`s for a fetch to your BSC API that returns the same
   shape (`perspectives[]`, `initiatives[]`, `meta`).
