import { createSignal } from 'solid-js';
import { KPICard, StatPill } from './components/KPICard';
import {
  OEETrendChart,
  DowntimeChart,
  HourlyProductionChart,
  CycleTimeChart,
} from './components/Charts';
import { ShiftTable } from './components/ShiftTable';
import {
  currentOEE,
  dailyOEE,
  downtimeReasons,
  shiftSummary,
  hourlyProduction,
  cycleTimeData,
} from './data/mockData';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = createSignal('overview');

  const tabs = [
    { id: 'overview',    label: '📊 Overview' },
    { id: 'trend',       label: '📈 OEE Trend' },
    { id: 'downtime',    label: '🔧 Downtime' },
    { id: 'production',  label: '⚙️ Production' },
    { id: 'shifts',      label: '📋 Shifts' },
  ];

  return (
    <div class="dashboard">
      {/* ── Header ─────────────────────────────────────────────── */}
      <header class="dash-header">
        <div class="dash-title">
          <span class="dash-icon">🏭</span>
          <div>
            <h1>OEE Manufacturing Dashboard</h1>
            <p class="dash-subtitle">Line 3 · Shift C · 2026-04-09</p>
          </div>
        </div>
        <div class="dash-meta">
          <span class="live-dot" aria-hidden="true" />
          <span class="live-label">Live</span>
          <span class="dash-time">05:47 AM</span>
        </div>
      </header>

      {/* ── Stats bar ──────────────────────────────────────────── */}
      <div class="stats-bar">
        <StatPill label="Planned Time"       value={`${currentOEE.plannedProductionTime} min`} />
        <StatPill label="Actual Run Time"    value={`${currentOEE.actualRunTime} min`} />
        <StatPill label="Total Count"        value={currentOEE.totalCount.toLocaleString()} />
        <StatPill label="Good Count"         value={currentOEE.goodCount.toLocaleString()} />
        <StatPill label="Ideal Cycle Time"   value={`${currentOEE.idealCycleTime} min/unit`} />
        <StatPill label="Planned Cycle Time" value={`${currentOEE.plannedCycleTime} min/unit`} />
      </div>

      {/* ── Navigation tabs ────────────────────────────────────── */}
      <nav class="tab-nav">
        {tabs.map((t) => (
          <button
            type="button"
            class={`tab-btn${activeTab() === t.id ? ' active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* ── Tab panels ─────────────────────────────────────────── */}
      <main class="dash-content">

        {/* Overview — KPI cards */}
        {activeTab() === 'overview' && (
          <section class="tab-panel">
            <div class="kpi-grid">
              <KPICard
                label="Overall OEE"
                value={currentOEE.oee}
                target={85}
                color="#6366f1"
                icon="🎯"
                description="Availability × Performance × Quality"
              />
              <KPICard
                label="Availability"
                value={currentOEE.availability}
                target={90}
                color="#22c55e"
                icon="⏱️"
                description="Actual run time / Planned production time"
              />
              <KPICard
                label="Performance"
                value={currentOEE.performance}
                target={90}
                color="#f59e0b"
                icon="⚡"
                description="Ideal cycle time × Total count / Run time"
              />
              <KPICard
                label="Quality"
                value={currentOEE.quality}
                target={95}
                color="#3b82f6"
                icon="✅"
                description="Good count / Total count"
              />
            </div>

            {/* Mini charts row */}
            <div class="mini-charts">
              <div class="chart-card">
                <h3 class="chart-title">Hourly Production vs Target</h3>
                <HourlyProductionChart data={hourlyProduction} />
              </div>
              <div class="chart-card">
                <h3 class="chart-title">Cycle Time (current shift)</h3>
                <CycleTimeChart data={cycleTimeData} />
              </div>
            </div>
          </section>
        )}

        {/* OEE Trend */}
        {activeTab() === 'trend' && (
          <section class="tab-panel">
            <div class="chart-card wide">
              <h3 class="chart-title">14-Day OEE Trend</h3>
              <OEETrendChart data={dailyOEE} />
            </div>
          </section>
        )}

        {/* Downtime */}
        {activeTab() === 'downtime' && (
          <section class="tab-panel">
            <div class="chart-card wide">
              <h3 class="chart-title">Downtime by Reason (today)</h3>
              <DowntimeChart data={downtimeReasons} />
            </div>
            <div class="downtime-legend">
              {downtimeReasons.map((r) => (
                <div class="legend-item">
                  <span class="legend-dot" style={`background:${r.color}`} />
                  <span class="legend-reason">{r.reason}</span>
                  <span class="legend-min">{r.minutes} min</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Production */}
        {activeTab() === 'production' && (
          <section class="tab-panel">
            <div class="mini-charts">
              <div class="chart-card">
                <h3 class="chart-title">Hourly Production vs Target</h3>
                <HourlyProductionChart data={hourlyProduction} />
              </div>
              <div class="chart-card">
                <h3 class="chart-title">Cycle Time Analysis</h3>
                <CycleTimeChart data={cycleTimeData} />
              </div>
            </div>
          </section>
        )}

        {/* Shifts */}
        {activeTab() === 'shifts' && (
          <section class="tab-panel">
            <h3 class="chart-title" style="margin-bottom:12px">
              Shift Summary — 2026-04-09
            </h3>
            <ShiftTable data={shiftSummary} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
