import Link from "next/link";
import { Inter_Tight } from "next/font/google";
import { Header } from "@/components/Header";
import { FocusCard } from "@/components/FocusCard";
import { BusinessStatsRow } from "@/components/ceo/BusinessStatsRow";
import { LinkedInOutreachCard } from "@/components/ceo/LinkedInOutreachCard";
import { RevenueCard } from "@/components/ceo/RevenueCard";
import { ContentAutomationCard } from "@/components/ceo/ContentAutomationCard";
import { SystemHealthCard } from "@/components/ceo/SystemHealthCard";
import { GrowthCard } from "@/components/ceo/GrowthCard";
import {
  getBusinessStats,
  getLinkedInOutreach,
  getContentAutomation,
  getRevenueSnapshot,
  getSystemHealth,
  getGrowthPipeline,
  getLeadershipFocus,
} from "@/lib/ceo-mock-data";

const interTight = Inter_Tight({
  variable: "--font-eightlab",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eightlab — CEO Briefing",
  description: "Daily briefing on Eightlab's health: users, outreach, content, revenue and system status.",
};

export default async function CeoBriefing() {
  const [stats, outreach, platforms, revenue, health, growth, focusItems] =
    await Promise.all([
      getBusinessStats(),
      getLinkedInOutreach(),
      getContentAutomation(),
      getRevenueSnapshot(),
      getSystemHealth(),
      getGrowthPipeline(),
      getLeadershipFocus(),
    ]);

  return (
    <div className={`theme-eightlab ${interTight.variable} min-h-screen bg-cream font-body`}>
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Header title="Eightlab — CEO briefing" eyebrow="Good morning" />

        <BusinessStatsRow stats={stats} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LinkedInOutreachCard outreach={outreach} />
          <FocusCard items={focusItems} title="Leadership focus" eyebrow="Today" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <RevenueCard revenue={revenue} />
          <ContentAutomationCard platforms={platforms} />
          <SystemHealthCard health={health} />
          <GrowthCard growth={growth} />
        </div>

        <footer className="flex flex-col items-center gap-2 pb-4 text-center text-xs text-ink-soft">
          <p>
            Built for Eightlab · data marked{" "}
            <span className="rounded-full bg-gold-soft px-1.5 py-0.5 text-gold">
              sample data
            </span>{" "}
            is illustrative and not yet connected to a live source.
          </p>
          <Link href="/" className="font-medium text-moss hover:underline">
            ← Back to Olivia&apos;s dashboard
          </Link>
        </footer>
      </main>
    </div>
  );
}
