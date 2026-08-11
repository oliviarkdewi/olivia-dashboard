// Shared types for the CEO Briefing dashboard.
// Each "Source" comment on the mock objects in ceo-mock-data.ts marks the
// real integration this type is meant to support later.

export interface BusinessStats {
  dailyActiveUsers: number;
  dauChangePercent: number;
  autoPostsToday: number;
  autoPostsGoal: number;
  linkedinRepliesToday: number;
  newSignupsToday: number;
}

export interface LinkedInOutreach {
  messagesSent: number;
  replies: number;
  meetingsBooked: number;
  replyRatePercent: number;
}

export interface ContentPlatformStat {
  id: string;
  platform: string;
  published: number;
  scheduled: number;
  successRatePercent: number;
}

export interface RevenueSnapshot {
  mrrLabel: string; // deliberately a masked placeholder, never real
  dailyChangePercent: number;
  weeklyChangePercent: number;
}

export interface SystemHealth {
  status: "operational" | "degraded" | "down";
  uptimePercent: number;
  errorRatePercent: number;
  avgResponseMs: number;
}

export interface GrowthPipeline {
  trialToPaidPercent: number;
  weeklyGrowthPercent: number;
}

export interface LeadershipFocusItem {
  id: string;
  label: string;
  done: boolean;
}
