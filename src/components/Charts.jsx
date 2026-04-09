import { onMount, onCleanup } from 'solid-js';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/**
 * OEE Trend — line chart showing Availability, Performance, Quality and OEE
 * over the last 14 days.
 */
export function OEETrendChart(props) {
  let canvasRef;
  let chart;

  onMount(() => {
    const { data } = props;
    chart = new Chart(canvasRef, {
      type: 'line',
      data: {
        labels: data.map((d) => d.date),
        datasets: [
          {
            label: 'OEE',
            data: data.map((d) => d.oee),
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99,102,241,0.15)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointRadius: 4,
          },
          {
            label: 'Availability',
            data: data.map((d) => d.availability),
            borderColor: '#22c55e',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 3,
          },
          {
            label: 'Performance',
            data: data.map((d) => d.performance),
            borderColor: '#f59e0b',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 3,
          },
          {
            label: 'Quality',
            data: data.map((d) => d.quality),
            borderColor: '#3b82f6',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { boxWidth: 12, font: { size: 12 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}%`,
            },
          },
        },
        scales: {
          y: {
            min: 50,
            max: 100,
            ticks: { callback: (v) => `${v}%`, font: { size: 11 } },
            grid: { color: 'rgba(0,0,0,0.06)' },
          },
          x: { ticks: { font: { size: 11 } }, grid: { display: false } },
        },
      },
    });
  });

  onCleanup(() => chart?.destroy());

  return (
    <div class="chart-wrapper">
      <canvas ref={canvasRef} />
    </div>
  );
}

/**
 * Downtime Pareto — horizontal bar chart showing downtime minutes by reason.
 */
export function DowntimeChart(props) {
  let canvasRef;
  let chart;

  onMount(() => {
    const { data } = props;
    const sorted = [...data].sort((a, b) => b.minutes - a.minutes);
    chart = new Chart(canvasRef, {
      type: 'bar',
      data: {
        labels: sorted.map((d) => d.reason),
        datasets: [
          {
            label: 'Downtime (min)',
            data: sorted.map((d) => d.minutes),
            backgroundColor: sorted.map((d) => d.color),
            borderRadius: 4,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.parsed.x} min`,
            },
          },
        },
        scales: {
          x: {
            ticks: { font: { size: 11 } },
            grid: { color: 'rgba(0,0,0,0.06)' },
          },
          y: { ticks: { font: { size: 11 } }, grid: { display: false } },
        },
      },
    });
  });

  onCleanup(() => chart?.destroy());

  return (
    <div class="chart-wrapper">
      <canvas ref={canvasRef} />
    </div>
  );
}

/**
 * Hourly Production — grouped bar chart (actual vs target units/hour).
 */
export function HourlyProductionChart(props) {
  let canvasRef;
  let chart;

  onMount(() => {
    const { data } = props;
    chart = new Chart(canvasRef, {
      type: 'bar',
      data: {
        labels: data.map((d) => d.hour),
        datasets: [
          {
            label: 'Target',
            data: data.map((d) => d.target),
            backgroundColor: 'rgba(99,102,241,0.2)',
            borderColor: '#6366f1',
            borderWidth: 1.5,
            borderRadius: 3,
          },
          {
            label: 'Actual',
            data: data.map((d) => d.actual),
            backgroundColor: data.map((d) =>
              d.actual >= d.target ? 'rgba(34,197,94,0.75)' : 'rgba(239,68,68,0.75)',
            ),
            borderRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { boxWidth: 12, font: { size: 12 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} units/hr`,
            },
          },
        },
        scales: {
          y: {
            min: 0,
            ticks: { font: { size: 11 } },
            grid: { color: 'rgba(0,0,0,0.06)' },
          },
          x: { ticks: { font: { size: 11 } }, grid: { display: false } },
        },
      },
    });
  });

  onCleanup(() => chart?.destroy());

  return (
    <div class="chart-wrapper">
      <canvas ref={canvasRef} />
    </div>
  );
}

/**
 * Cycle Time — line chart showing actual cycle time vs target over a shift.
 */
export function CycleTimeChart(props) {
  let canvasRef;
  let chart;

  onMount(() => {
    const { data } = props;
    chart = new Chart(canvasRef, {
      type: 'line',
      data: {
        labels: data.map((d) => d.time),
        datasets: [
          {
            label: 'Cycle Time',
            data: data.map((d) => d.cycleTime),
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245,158,11,0.1)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
          },
          {
            label: 'Target',
            data: data.map((d) => d.target),
            borderColor: '#6366f1',
            borderDash: [6, 3],
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { boxWidth: 12, font: { size: 12 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} min/unit`,
            },
          },
        },
        scales: {
          y: {
            min: 0.9,
            max: 1.5,
            ticks: {
              callback: (v) => `${v.toFixed(2)}`,
              font: { size: 11 },
            },
            grid: { color: 'rgba(0,0,0,0.06)' },
          },
          x: { ticks: { font: { size: 11 } }, grid: { display: false } },
        },
      },
    });
  });

  onCleanup(() => chart?.destroy());

  return (
    <div class="chart-wrapper">
      <canvas ref={canvasRef} />
    </div>
  );
}
