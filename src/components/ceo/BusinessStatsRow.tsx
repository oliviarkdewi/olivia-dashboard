import type { BusinessStats } from "@/lib/ceo-types";
import { StatTile } from "../ui/StatTile";
import { SampleDataTag } from "../ui/SampleDataTag";

interface BusinessStatsRowProps {
  stats: BusinessStats;
}

export function BusinessStatsRow({ stats }: BusinessStatsRowProps) {
  const dauUp = stats.dauChangePercent >= 0;
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatTile
        label="Daily active users"
        value={stats.dailyActiveUsers.toLocaleString()}
        caption={`${dauUp ? "▲" : "▼"} ${Math.abs(stats.dauChangePercent)}% vs yesterday`}
        tag={<SampleDataTag />}
      />
      <StatTile
        label="Auto-posts today"
        value={stats.autoPostsToday.toLocaleString()}
        caption={`of ${stats.autoPostsGoal.toLocaleString()} scheduled`}
        tag={<SampleDataTag />}
      />
      <StatTile
        label="LinkedIn replies"
        value={String(stats.linkedinRepliesToday)}
        caption="today"
        tag={<SampleDataTag />}
      />
      <StatTile
        label="New signups"
        value={String(stats.newSignupsToday)}
        caption="today"
        tag={<SampleDataTag />}
      />
    </div>
  );
}
