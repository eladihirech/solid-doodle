/**
 * KPI Card — displays a large metric value with label, trend indicator, and
 * a thin colour-coded progress arc (SVG).
 */
export function KPICard(props) {
  // props: label, value (%), target (%), color, icon, description
  const pct = () => Math.min(Math.max(props.value, 0), 100);
  const radius = 36;
  const circ = () => 2 * Math.PI * radius;
  const dash = () => (pct() / 100) * circ();
  const gap = () => circ() - dash();

  const statusColor = () => {
    if (pct() >= 85) return '#22c55e';
    if (pct() >= 65) return '#f59e0b';
    return '#ef4444';
  };

  const statusLabel = () => {
    if (pct() >= 85) return 'Good';
    if (pct() >= 65) return 'Warning';
    return 'Critical';
  };

  return (
    <div class="kpi-card" style={`--card-color: ${props.color}`}>
      <div class="kpi-header">
        <span class="kpi-icon">{props.icon}</span>
        <span class="kpi-label">{props.label}</span>
      </div>

      <div class="kpi-body">
        <svg class="kpi-arc" viewBox="0 0 100 100" aria-hidden="true">
          {/* background track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--arc-track)"
            stroke-width="8"
          />
          {/* value arc */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={statusColor()}
            stroke-width="8"
            stroke-linecap="round"
            stroke-dasharray={`${dash()} ${gap()}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div class="kpi-value-block">
          <span class="kpi-value">{pct().toFixed(1)}</span>
          <span class="kpi-unit">%</span>
        </div>
      </div>

      <div class="kpi-footer">
        <span class="kpi-status" style={`color:${statusColor()}`}>
          ● {statusLabel()}
        </span>
        <span class="kpi-target">Target: {props.target}%</span>
      </div>

      {props.description && <p class="kpi-desc">{props.description}</p>}
    </div>
  );
}

/**
 * Summary stat pill — small inline metric used in the stats bar.
 */
export function StatPill(props) {
  return (
    <div class="stat-pill">
      <span class="stat-pill-label">{props.label}</span>
      <span class="stat-pill-value">{props.value}</span>
    </div>
  );
}
