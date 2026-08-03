import type { TradePerformance } from "@/lib/types";
import { Card, CardHeader } from "./ui/Card";
import { PrivacyTag } from "./ui/PrivacyTag";

interface TradeCardProps {
  performance: TradePerformance;
}

function Stat({ label, percent }: { label: string; percent: number }) {
  const isUp = percent >= 0;
  return (
    <div className="flex-1">
      <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">
        {label}
      </p>
      <p
        className={`mt-2 font-display text-3xl ${
          isUp ? "text-positive" : "text-negative"
        }`}
      >
        {isUp ? "+" : ""}
        {percent}%
      </p>
    </div>
  );
}

export function TradeCard({ performance }: TradeCardProps) {
  return (
    <Card>
      <CardHeader title="Trading performance" eyebrow="Personal" right={<PrivacyTag />} />
      <div className="flex gap-6">
        <Stat label="Yesterday" percent={performance.yesterdayPercent} />
        <div className="w-px bg-line" />
        <Stat label="This week" percent={performance.weeklyPercent} />
      </div>
    </Card>
  );
}
