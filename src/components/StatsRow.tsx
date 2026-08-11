import type { HealthStats } from "@/lib/types";
import { StatTile } from "./ui/StatTile";
import { SampleDataTag } from "./ui/SampleDataTag";

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
        tag={<SampleDataTag />}
      />
      <StatTile
        label="Sleep score"
        value={String(stats.sleepScore)}
        caption="out of 100"
        tag={<SampleDataTag />}
      />
      <StatTile
        label="Resting HR / weight"
        value={`${stats.restingHeartRate} bpm`}
        caption={`${stats.weightKg} kg`}
        tag={<SampleDataTag />}
      />
      <StatTile
        label="Screen time"
        value={`${stats.screenTimeHours}h`}
        caption="today"
        tag={<SampleDataTag />}
      />
    </div>
  );
}
