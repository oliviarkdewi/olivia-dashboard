# Olivia — at a glance

A single-page personal life dashboard built with Next.js (App Router) and Tailwind CSS. Deploys cleanly to Vercel.

## Sections

1. **Header** — name, current date/day.
2. **Top stats** — steps, sleep score, resting heart rate / weight, screen time. Mock data, tagged "sample data".
3. **Calendar** — today's events. Mock data now; structured to swap in the Google Calendar API (OAuth) later.
4. **Today's focus** — checklist of priorities. Mock data now; structured to swap in the Notion API later.
5. **Investments** — portfolio value + daily change. Value is always a masked placeholder (`$XX,XXX`), by design — never wired to a real balance.
6. **Goals / reminders** — active goals with progress bars. Mock data.
7. **Weather** — live current conditions + 3-day forecast for Brisbane, AU, via [Open-Meteo](https://open-meteo.com) (no API key required).
8. **Trading performance** — yesterday / weekly % change. Same masking treatment as Investments — always a fake placeholder.

## Swapping mock data for real sources

All non-weather data lives behind functions in [`src/lib/mock-data.ts`](src/lib/mock-data.ts) (`getHealthStats`, `getTodaysEvents`, `getTodaysFocus`, `getInvestmentSnapshot`, `getGoals`, `getTradePerformance`). Each function keeps its return type from [`src/lib/types.ts`](src/lib/types.ts), so replacing the mock body with a real API call doesn't require touching any component.

- **Calendar → Google Calendar API**: see the `TODO` comment block inside `getTodaysEvents()` for the OAuth scope, the `calendar.events.list` call, and the response mapping.
- **Focus → Notion API**: see the `TODO` comment block inside `getTodaysFocus()` for the integration token setup, `databases.query` call, and response mapping.
- **Health stats → wearable API**: see the `TODO` comment inside `getHealthStats()` (Oura used as an example).
- **Investments / Trading performance**: intentionally left as masked placeholders in the UI layer itself (`InvestmentsCard`, `TradeCard`) — even if a real data source is wired in later, keep the displayed value masked.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to GitHub and import the repo in [Vercel](https://vercel.com/new) — no environment variables are required for the current (mock + Open-Meteo) data sources.
