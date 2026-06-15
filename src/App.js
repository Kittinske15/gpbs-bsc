import React, { useState } from "react";
import { TABS, companies, years, meta } from "./data/bsc";
import { DetailModal } from "./components/ui";
import {
  StrategyMap,
  KpiSummary,
  Financials,
  Customer,
  Internal,
  People,
} from "./pages";

const PAGES = {
  "Strategy Map": StrategyMap,
  "KPI Summary": KpiSummary,
  Financials: Financials,
  Customer: Customer,
  Internal: Internal,
  People: People,
};

export default function App() {
  const [tab, setTab] = useState("Strategy Map");
  const [company, setCompany] = useState(companies[0]);
  const [year, setYear] = useState(years[years.length - 1]);
  const [detail, setDetail] = useState(null);

  const Page = PAGES[tab];

  return (
    <div>
      <nav className="topnav">
        <div className="brand">
          <img src={process.env.PUBLIC_URL + "/gpbs-logo.png"} alt="GPBS" />
        </div>
        <div className="tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`tab ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="selectors">
          <span>
            <label>Company:</label>
            <select value={company} onChange={(e) => setCompany(e.target.value)}>
              {companies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </span>
          <span>
            <label>Year:</label>
            <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </span>
        </div>
      </nav>

      <Page onDetails={setDetail} />

      <div className="footer">
        {meta.brand} Balanced Scorecard · {company} · {year} · {meta.note}
      </div>

      <DetailModal item={detail} onClose={() => setDetail(null)} />
    </div>
  );
}
