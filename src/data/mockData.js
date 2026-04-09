// Mock manufacturing data for OEE KPI dashboard

export const shifts = [
  { id: 1, name: 'Shift A', date: '2026-04-09', start: '06:00', end: '14:00' },
  { id: 2, name: 'Shift B', date: '2026-04-09', start: '14:00', end: '22:00' },
  { id: 3, name: 'Shift C', date: '2026-04-09', start: '22:00', end: '06:00' },
];

// Daily OEE data for the last 14 days
export const dailyOEE = [
  { date: '03/27', oee: 71.2, availability: 88.5, performance: 87.3, quality: 92.1 },
  { date: '03/28', oee: 74.8, availability: 90.2, performance: 89.1, quality: 93.0 },
  { date: '03/29', oee: 68.5, availability: 84.0, performance: 86.5, quality: 94.2 },
  { date: '03/30', oee: 79.3, availability: 93.1, performance: 91.2, quality: 93.5 },
  { date: '03/31', oee: 76.1, availability: 91.0, performance: 89.5, quality: 93.8 },
  { date: '04/01', oee: 72.4, availability: 87.3, performance: 88.0, quality: 94.5 },
  { date: '04/02', oee: 80.5, availability: 94.2, performance: 91.8, quality: 93.0 },
  { date: '04/03', oee: 77.9, availability: 92.5, performance: 90.3, quality: 93.5 },
  { date: '04/04', oee: 65.2, availability: 80.1, performance: 85.5, quality: 95.1 },
  { date: '04/05', oee: 81.4, availability: 94.8, performance: 92.0, quality: 93.4 },
  { date: '04/06', oee: 83.1, availability: 95.3, performance: 93.5, quality: 93.2 },
  { date: '04/07', oee: 78.6, availability: 91.8, performance: 91.2, quality: 93.8 },
  { date: '04/08', oee: 75.3, availability: 89.6, performance: 89.9, quality: 93.6 },
  { date: '04/09', oee: 79.8, availability: 93.0, performance: 91.5, quality: 93.7 },
];

// Today's current OEE values
export const currentOEE = {
  oee: 79.8,
  availability: 93.0,
  performance: 91.5,
  quality: 93.7,
  plannedProductionTime: 480, // minutes
  actualRunTime: 446,         // minutes
  plannedCycleTime: 1.2,      // minutes per unit
  totalCount: 381,
  goodCount: 357,
  idealCycleTime: 1.1,        // minutes per unit
};

// Downtime reasons
export const downtimeReasons = [
  { reason: 'Mechanical Failure', minutes: 18, color: '#ef4444' },
  { reason: 'Changeover / Setup',  minutes: 12, color: '#f97316' },
  { reason: 'Material Shortage',   minutes: 9,  color: '#eab308' },
  { reason: 'Operator Break',      minutes: 7,  color: '#3b82f6' },
  { reason: 'Quality Inspection',  minutes: 5,  color: '#8b5cf6' },
  { reason: 'Planned Maintenance', minutes: 3,  color: '#6b7280' },
];

// Shift summary (today)
export const shiftSummary = [
  {
    shift: 'Shift A (06:00–14:00)',
    availability: 94.2,
    performance: 92.8,
    quality: 94.0,
    oee: 82.1,
    totalParts: 381,
    goodParts: 358,
    downtime: 28,
    status: 'completed',
  },
  {
    shift: 'Shift B (14:00–22:00)',
    availability: 91.8,
    performance: 90.5,
    quality: 93.3,
    oee: 77.6,
    totalParts: 364,
    goodParts: 340,
    downtime: 39,
    status: 'completed',
  },
  {
    shift: 'Shift C (22:00–06:00)',
    availability: 93.0,
    performance: 91.5,
    quality: 93.7,
    oee: 79.8,
    totalParts: 371,
    goodParts: 348,
    downtime: 34,
    status: 'in-progress',
  },
];

// Hourly production rate (units/hour) for the current shift
export const hourlyProduction = [
  { hour: '22:00', actual: 47, target: 50 },
  { hour: '23:00', actual: 49, target: 50 },
  { hour: '00:00', actual: 44, target: 50 },
  { hour: '01:00', actual: 51, target: 50 },
  { hour: '02:00', actual: 48, target: 50 },
  { hour: '03:00', actual: 46, target: 50 },
  { hour: '04:00', actual: 50, target: 50 },
  { hour: '05:00', actual: 36, target: 50 },
];

// Cycle time data (minutes per unit) over the current shift
export const cycleTimeData = [
  { time: '22:00', cycleTime: 1.18, target: 1.10 },
  { time: '22:30', cycleTime: 1.15, target: 1.10 },
  { time: '23:00', cycleTime: 1.12, target: 1.10 },
  { time: '23:30', cycleTime: 1.10, target: 1.10 },
  { time: '00:00', cycleTime: 1.22, target: 1.10 },
  { time: '00:30', cycleTime: 1.19, target: 1.10 },
  { time: '01:00', cycleTime: 1.11, target: 1.10 },
  { time: '01:30', cycleTime: 1.09, target: 1.10 },
  { time: '02:00', cycleTime: 1.13, target: 1.10 },
  { time: '02:30', cycleTime: 1.14, target: 1.10 },
  { time: '03:00', cycleTime: 1.16, target: 1.10 },
  { time: '03:30', cycleTime: 1.20, target: 1.10 },
  { time: '04:00', cycleTime: 1.10, target: 1.10 },
  { time: '04:30', cycleTime: 1.08, target: 1.10 },
  { time: '05:00', cycleTime: 1.25, target: 1.10 },
  { time: '05:30', cycleTime: 1.30, target: 1.10 },
];
