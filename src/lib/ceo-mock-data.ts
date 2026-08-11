import type {
  BusinessStats,
  ContentPlatformStat,
  GrowthPipeline,
  LeadershipFocusItem,
  LinkedInOutreach,
  RevenueSnapshot,
  SystemHealth,
} from "./ceo-types";

/**
 * ---------------------------------------------------------------------------
 * MOCK DATA LAYER — CEO Briefing
 * ---------------------------------------------------------------------------
 * Everything in this file is sample data shaped to match the real payloads
 * Eightlab's internal systems will eventually return. Swapping a section
 * over to a real source is a matter of replacing the corresponding
 * `getX()` function's body with a real fetch/SDK call while keeping its
 * return type unchanged.
 * ---------------------------------------------------------------------------
 */

// ---- Top-line business stats -----------------------------------------------
// Source (future): Eightlab's product analytics database (e.g. Postgres via
// an internal metrics API, or a warehouse like PostHog/Amplitude).
const MOCK_BUSINESS_STATS: BusinessStats = {
  dailyActiveUsers: 1284,
  dauChangePercent: 4.6,
  autoPostsToday: 312,
  autoPostsGoal: 400,
  linkedinRepliesToday: 18,
  newSignupsToday: 27,
};

export async function getBusinessStats(): Promise<BusinessStats> {
  // TODO: replace with a real query against Eightlab's product database or
  // analytics warehouse, e.g.:
  // const res = await fetch(`${process.env.INTERNAL_METRICS_API}/daily-summary`, {
  //   headers: { Authorization: `Bearer ${process.env.INTERNAL_METRICS_TOKEN}` },
  // });
  // return mapMetricsResponseToBusinessStats(await res.json());
  return MOCK_BUSINESS_STATS;
}

// ---- LinkedIn outreach --------------------------------------------------------
// Source (future): LinkedIn API (via an outreach tool like Sales Navigator /
// a CRM integration) or Eightlab's own outbound automation service.
const MOCK_LINKEDIN_OUTREACH: LinkedInOutreach = {
  messagesSent: 146,
  replies: 18,
  meetingsBooked: 5,
  replyRatePercent: 12.3,
};

export async function getLinkedInOutreach(): Promise<LinkedInOutreach> {
  // TODO: replace with a real call to the outreach/CRM provider, e.g.:
  // const res = await fetch("https://api.<crm-provider>.com/v1/campaigns/linkedin/today", {
  //   headers: { Authorization: `Bearer ${process.env.CRM_API_TOKEN}` },
  // });
  // return mapCrmResponseToLinkedInOutreach(await res.json());
  return MOCK_LINKEDIN_OUTREACH;
}

// ---- Content automation ----------------------------------------------------------
// Source (future): Eightlab's own auto-posting/scheduling service API.
const MOCK_CONTENT_PLATFORMS: ContentPlatformStat[] = [
  { id: "1", platform: "LinkedIn", published: 128, scheduled: 150, successRatePercent: 97 },
  { id: "2", platform: "X / Twitter", published: 96, scheduled: 110, successRatePercent: 94 },
  { id: "3", platform: "Reddit", published: 51, scheduled: 60, successRatePercent: 91 },
  { id: "4", platform: "Blog / SEO", published: 37, scheduled: 40, successRatePercent: 99 },
];

export async function getContentAutomation(): Promise<ContentPlatformStat[]> {
  // TODO: replace with a real call to the internal auto-posting service, e.g.:
  // const res = await fetch(`${process.env.AUTOMATION_API}/publishing/today`, {
  //   headers: { Authorization: `Bearer ${process.env.AUTOMATION_API_TOKEN}` },
  // });
  // return mapAutomationResponseToContentPlatforms(await res.json());
  return MOCK_CONTENT_PLATFORMS;
}

// ---- Revenue -----------------------------------------------------------------------
// Deliberately fake, non-representative figures. This card should never
// display a real MRR balance, even in a shared screenshot or recording.
const MOCK_REVENUE: RevenueSnapshot = {
  mrrLabel: "$XX,XXX MRR",
  dailyChangePercent: 1.4,
  weeklyChangePercent: 3.9,
};

export async function getRevenueSnapshot(): Promise<RevenueSnapshot> {
  // TODO (value masking must remain in the UI layer even once wired up):
  // const res = await fetch("https://api.stripe.com/v1/billing/summary", {
  //   headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` },
  // });
  // return mapStripeResponseToRevenueSnapshot(await res.json());
  return MOCK_REVENUE;
}

// ---- System health --------------------------------------------------------------------
// Source (future): an uptime/observability provider (e.g. Better Uptime,
// Datadog, Grafana) or Eightlab's own status-page API.
const MOCK_SYSTEM_HEALTH: SystemHealth = {
  status: "operational",
  uptimePercent: 99.98,
  errorRatePercent: 0.12,
  avgResponseMs: 184,
};

export async function getSystemHealth(): Promise<SystemHealth> {
  // TODO: replace with a real call to the uptime/observability provider, e.g.:
  // const res = await fetch("https://api.<uptime-provider>.com/v2/status-summary", {
  //   headers: { Authorization: `Bearer ${process.env.UPTIME_API_TOKEN}` },
  // });
  // return mapUptimeResponseToSystemHealth(await res.json());
  return MOCK_SYSTEM_HEALTH;
}

// ---- Growth / pipeline -----------------------------------------------------------------
const MOCK_GROWTH_PIPELINE: GrowthPipeline = {
  trialToPaidPercent: 22.5,
  weeklyGrowthPercent: 6.1,
};

export async function getGrowthPipeline(): Promise<GrowthPipeline> {
  // TODO: replace with a real query against the billing/product database
  // (trial → paid conversion) and the analytics warehouse (week-over-week
  // active account growth).
  return MOCK_GROWTH_PIPELINE;
}

// ---- Leadership focus -------------------------------------------------------------------
// Source (future): Notion API — a database/page holding the CEO's daily
// priorities list, same integration pattern as the personal dashboard.
const MOCK_LEADERSHIP_FOCUS: LeadershipFocusItem[] = [
  { id: "1", label: "Review LinkedIn outreach reply rate with growth team", done: false },
  { id: "2", label: "Approve Q3 hiring plan", done: false },
  { id: "3", label: "Investor update draft — final pass", done: true },
  { id: "4", label: "1:1 with Head of Product", done: false },
  { id: "5", label: "Sign off on new pricing page copy", done: false },
];

export async function getLeadershipFocus(): Promise<LeadershipFocusItem[]> {
  // TODO: replace with a real Notion API call once integration is connected
  // (see getTodaysFocus() in mock-data.ts for the full auth/query/mapping
  // pattern — this reuses the same database, filtered to the CEO's items).
  return MOCK_LEADERSHIP_FOCUS;
}
