# OEE Manufacturing Dashboard

A real-time manufacturing performance monitoring dashboard built with [Solid.js](https://solidjs.com). Tracks **Overall Equipment Effectiveness (OEE)** — the industry-standard metric for measuring manufacturing productivity — along with related KPIs like Availability, Performance, and Quality.

## Features

- **OEE Overview** — KPI cards with circular progress arcs and status indicators (Good / Warning / Critical)
- **OEE Trend** — 14-day line chart for OEE, Availability, Performance, and Quality
- **Downtime Analysis** — Pareto-style horizontal bar chart breaking down downtime by reason
- **Production** — Hourly actual vs. target production bars and cycle time analysis
- **Shift Summary** — Table view of all shift metrics for the current day

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Solid.js](https://solidjs.com) | 1.9.x | Reactive UI framework |
| [Chart.js](https://www.chartjs.org) | 4.5.x | Data visualization |
| [Vite](https://vite.dev) | 8.x | Build tool & dev server |

## Getting Started

**Prerequisites:** Node.js `^20.19.0` or `>=22.12.0`

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

```bash
npm run dev      # Start dev server with hot module replacement
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview the production build locally
```

## Project Structure

```
src/
├── App.jsx                  # Main dashboard with tab navigation
├── index.jsx                # App entry point
├── components/
│   ├── Charts.jsx           # OEETrendChart, DowntimeChart, HourlyProductionChart, CycleTimeChart
│   ├── KPICard.jsx          # KPI card with circular progress arc
│   └── ShiftTable.jsx       # Shift summary table
└── data/
    └── mockData.js          # Mock manufacturing data (OEE, downtime, production, shifts)
```

## OEE Status Thresholds

| Status | OEE Range | Indicator |
|--------|-----------|-----------|
| Good | ≥ 85% | 🟢 |
| Warning | 65–84% | 🟡 |
| Critical | < 65% | 🔴 |

## Deployment

Deploy the contents of the `dist/` folder to any static hosting provider. See the [Vite static deploy guide](https://vite.dev/guide/static-deploy.html) for platform-specific instructions.

---

Built with [Solid.js](https://solidjs.com) · Join the community on [Discord](https://discord.com/invite/solidjs)
