import { Header } from "@/components/Header";
import { StatsRow } from "@/components/StatsRow";
import { CalendarCard } from "@/components/CalendarCard";
import { FocusCard } from "@/components/FocusCard";
import { InvestmentsCard } from "@/components/InvestmentsCard";
import { GoalsCard } from "@/components/GoalsCard";
import { WeatherCard } from "@/components/WeatherCard";
import { TradeCard } from "@/components/TradeCard";
import {
  getHealthStats,
  getTodaysEvents,
  getTodaysFocus,
  getInvestmentSnapshot,
  getGoals,
  getTradePerformance,
} from "@/lib/mock-data";
import { getBrisbaneWeather } from "@/lib/weather";

export default async function Home() {
  const [stats, events, focusItems, investments, goals, trade, weather] =
    await Promise.all([
      getHealthStats(),
      getTodaysEvents(),
      getTodaysFocus(),
      getInvestmentSnapshot(),
      getGoals(),
      getTradePerformance(),
      getBrisbaneWeather(),
    ]);

  return (
    <div className="min-h-screen bg-cream">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Header />

        <StatsRow stats={stats} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CalendarCard events={events} />
          <FocusCard items={focusItems} />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InvestmentsCard snapshot={investments} />
          <GoalsCard goals={goals} />
          <WeatherCard weather={weather} />
          <TradeCard performance={trade} />
        </div>

        <footer className="pb-4 text-center text-xs text-ink-soft">
          Built for Olivia · data marked{" "}
          <span className="rounded-full bg-gold-soft px-1.5 py-0.5 text-gold">
            sample data
          </span>{" "}
          is illustrative and not yet connected to a live source.
        </footer>
      </main>
    </div>
  );
}
