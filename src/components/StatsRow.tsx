import type { HealthStats } from "@/lib/types";
import { SampleDataTag } from "./ui/SampleDataTag";

interface StatTileProps {
  label: string;
  value: string;
  caption: string;
}

function StatTile({ label, value, caption }: StatTileProps) {
  return (
    <div className="rounded-3xl border border-line bg-paper p-5 shadow-card sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">
          {label}
        </p>
        <SampleDataTag />
      </div>
      <p className="font-display text-3xl text-ink sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-ink-soft">{caption}</p>
    </div>
  );
}

interface StatsRowProps {
  stats: HealthStats;
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatTile
        label="Steps today"
        value={stats.stepsToday.toLocaleString()}
        caption={`of ${stats.stepsGoal.toLocaleString()} goal`}
      />
      <StatTile
        label="Sleep score"
        value={String(stats.sleepScore)}
        caption="out of 100"
      />
      <StatTile
        label="Resting HR / weight"
        value={`${stats.restingHeartRate} bpm`}
        caption={`${stats.weightKg} kg`}
      />
      <StatTile
        label="Screen time"
        value={`${stats.screenTimeHours}h`}
        caption="today"
      />
    </div>
  );
}
