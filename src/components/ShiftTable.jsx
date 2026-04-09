import { For } from 'solid-js';

/**
 * ShiftTable — renders a summary table of OEE metrics per shift for the day.
 */
export function ShiftTable(props) {
  const statusBadge = (status) => {
    if (status === 'in-progress') return { label: 'In Progress', cls: 'badge-warning' };
    return { label: 'Completed', cls: 'badge-success' };
  };

  return (
    <div class="table-scroll">
      <table class="shift-table">
        <thead>
          <tr>
            <th>Shift</th>
            <th>Status</th>
            <th>Availability</th>
            <th>Performance</th>
            <th>Quality</th>
            <th>OEE</th>
            <th>Total Parts</th>
            <th>Good Parts</th>
            <th>Downtime (min)</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.data}>
            {(row) => {
              const badge = statusBadge(row.status);
              const oeeColor =
                row.oee >= 85 ? '#22c55e' : row.oee >= 65 ? '#f59e0b' : '#ef4444';
              return (
                <tr>
                  <td class="shift-name">{row.shift}</td>
                  <td>
                    <span class={`badge ${badge.cls}`}>{badge.label}</span>
                  </td>
                  <td>{row.availability.toFixed(1)}%</td>
                  <td>{row.performance.toFixed(1)}%</td>
                  <td>{row.quality.toFixed(1)}%</td>
                  <td>
                    <span class="oee-cell" style={`color:${oeeColor};font-weight:700`}>
                      {row.oee.toFixed(1)}%
                    </span>
                  </td>
                  <td>{row.totalParts.toLocaleString()}</td>
                  <td>{row.goodParts.toLocaleString()}</td>
                  <td class={row.downtime > 35 ? 'warn-cell' : ''}>{row.downtime}</td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </div>
  );
}
