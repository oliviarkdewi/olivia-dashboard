// Shared types for all dashboard data sources.
// Each "Source" comment on the mock objects in mock-data.ts marks the
// real integration this type is meant to support later.

export interface HealthStats {
  stepsToday: number;
  stepsGoal: number;
  sleepScore: number;
  restingHeartRate: number;
  weightKg: number;
  screenTimeHours: number;
}

export interface CalendarEvent {
  id: string;
  time: string; // display string, e.g. "9:00 AM"
  title: string;
  location?: string;
}

export interface FocusItem {
  id: string;
  label: string;
  done: boolean;
}

export interface InvestmentSnapshot {
  totalValueLabel: string; // deliberately a masked placeholder, never real
  dailyChangePercent: number;
}

export interface Goal {
  id: string;
  label: string;
  progressPercent: number;
}

export interface TradePerformance {
  yesterdayPercent: number;
  weeklyPercent: number;
}

export interface WeatherNow {
  temperatureC: number;
  condition: string;
  code: number;
}

export interface WeatherDay {
  label: string; // "Tomorrow", "Wed", etc.
  highC: number;
  lowC: number;
  condition: string;
  code: number;
}

export interface WeatherData {
  location: string;
  now: WeatherNow;
  forecast: WeatherDay[];
}
