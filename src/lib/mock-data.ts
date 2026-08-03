import type {
  CalendarEvent,
  FocusItem,
  Goal,
  HealthStats,
  InvestmentSnapshot,
  TradePerformance,
} from "./types";

/**
 * ---------------------------------------------------------------------------
 * MOCK DATA LAYER
 * ---------------------------------------------------------------------------
 * Everything in this file is sample data shaped to match the real payloads
 * these features will eventually receive. Swapping a section over to a real
 * source is a matter of replacing the corresponding `getX()` function's body
 * with a real fetch/SDK call while keeping its return type unchanged.
 * ---------------------------------------------------------------------------
 */

// ---- Health & activity stats -----------------------------------------------
// Source (future): a wearable/health API — Apple Health, Oura, Whoop, Fitbit,
// or Google Fit. Swap the object below for a fetch to that provider's API,
// keeping the HealthStats shape so <StatsRow> doesn't need to change.
const MOCK_HEALTH_STATS: HealthStats = {
  stepsToday: 6842,
  stepsGoal: 10000,
  sleepScore: 82,
  restingHeartRate: 58,
  weightKg: 63.4,
  screenTimeHours: 3.2,
};

export async function getHealthStats(): Promise<HealthStats> {
  // TODO: replace with a real wearable/health API call, e.g.:
  // const res = await fetch("https://api.ouraring.com/v2/usercollection/daily_activity", { headers: { Authorization: `Bearer ${process.env.OURA_TOKEN}` } });
  // return mapOuraResponseToHealthStats(await res.json());
  return MOCK_HEALTH_STATS;
}

// ---- Calendar ---------------------------------------------------------------
// Source (future): Google Calendar API via OAuth 2.0.
const MOCK_CALENDAR_EVENTS: CalendarEvent[] = [
  { id: "1", time: "9:00 AM", title: "Team stand-up", location: "Zoom" },
  { id: "2", time: "11:30 AM", title: "1:1 with Sam" },
  { id: "3", time: "1:00 PM", title: "Lunch with Priya", location: "The Fern Cafe" },
  { id: "4", time: "3:30 PM", title: "Design review" },
  { id: "5", time: "6:00 PM", title: "Yoga class", location: "Riverside Studio" },
];

export async function getTodaysEvents(): Promise<CalendarEvent[]> {
  // TODO: replace with a real Google Calendar API call once OAuth is wired up.
  //
  // 1. Auth: complete the OAuth 2.0 consent flow (scope:
  //    "https://www.googleapis.com/auth/calendar.readonly") and persist the
  //    user's refresh token server-side (e.g. in a session store or DB).
  //
  // 2. Fetch today's events:
  //    const calendar = google.calendar({ version: "v3", auth: oauthClient });
  //    const { data } = await calendar.events.list({
  //      calendarId: "primary",
  //      timeMin: startOfDayISOString,
  //      timeMax: endOfDayISOString,
  //      singleEvents: true,
  //      orderBy: "startTime",
  //    });
  //
  // 3. Map the response into CalendarEvent[]:
  //    return data.items.slice(0, 5).map((event) => ({
  //      id: event.id,
  //      time: formatEventTime(event.start),
  //      title: event.summary ?? "Untitled event",
  //      location: event.location,
  //    }));
  return MOCK_CALENDAR_EVENTS;
}

// ---- Today's focus ------------------------------------------------------------
// Source (future): Notion API — a database/page holding a daily priorities list.
const MOCK_FOCUS_ITEMS: FocusItem[] = [
  { id: "1", label: "Ship the dashboard redesign", done: false },
  { id: "2", label: "Reply to investor update thread", done: true },
  { id: "3", label: "Book flights for Melbourne trip", done: false },
  { id: "4", label: "Review Q3 budget draft", done: false },
  { id: "5", label: "30 min walk", done: true },
];

export async function getTodaysFocus(): Promise<FocusItem[]> {
  // TODO: replace with a real Notion API call once integration is connected.
  //
  // 1. Auth: create an internal Notion integration, share the target
  //    database with it, and store the integration token as NOTION_TOKEN.
  //
  // 2. Query the database:
  //    const notion = new Client({ auth: process.env.NOTION_TOKEN });
  //    const { results } = await notion.databases.query({
  //      database_id: process.env.NOTION_FOCUS_DB_ID!,
  //      filter: { property: "Date", date: { equals: todayISODate } },
  //      sorts: [{ property: "Order", direction: "ascending" }],
  //    });
  //
  // 3. Map the response into FocusItem[] (capped at 6 items):
  //    return results.slice(0, 6).map((page) => ({
  //      id: page.id,
  //      label: page.properties.Name.title[0]?.plain_text ?? "",
  //      done: page.properties.Done.checkbox,
  //    }));
  return MOCK_FOCUS_ITEMS;
}

// ---- Investments --------------------------------------------------------------
// Deliberately fake, non-representative figures. This card should never
// display a real balance, even in a shared screenshot.
const MOCK_INVESTMENTS: InvestmentSnapshot = {
  totalValueLabel: "$XX,XXX",
  dailyChangePercent: 0.8,
};

export async function getInvestmentSnapshot(): Promise<InvestmentSnapshot> {
  return MOCK_INVESTMENTS;
}

// ---- Goals / reminders ---------------------------------------------------------
const MOCK_GOALS: Goal[] = [
  { id: "1", label: "Read 20 books this year", progressPercent: 55 },
  { id: "2", label: "Save for Japan trip", progressPercent: 70 },
  { id: "3", label: "Run a half marathon", progressPercent: 30 },
  { id: "4", label: "Learn conversational Spanish", progressPercent: 15 },
];

export async function getGoals(): Promise<Goal[]> {
  return MOCK_GOALS;
}

// ---- Trade / performance ---------------------------------------------------------
// Deliberately fake figures, same privacy treatment as investments.
const MOCK_TRADE_PERFORMANCE: TradePerformance = {
  yesterdayPercent: 1.2,
  weeklyPercent: -0.6,
};

export async function getTradePerformance(): Promise<TradePerformance> {
  return MOCK_TRADE_PERFORMANCE;
}
