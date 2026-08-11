import type { RevenueSnapshot } from "@/lib/ceo-types";
import { Card, CardHeader } from "../ui/Card";
import { PrivacyTag } from "../ui/PrivacyTag";

interface RevenueCardProps {
  revenue: RevenueSnapshot;
}

function ChangeBadge({ percent, label }: { percent: number; label: string }) {
  const isUp = percent >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium ${
        isUp ? "bg-positive-soft text-positive" : "bg-negative-soft text-negative"
      }`}
    >
      {isUp ? "▲" : "▼"} {Math.abs(percent)}% {label}
    </span>
  );
}

export function RevenueCard({ revenue }: RevenueCardProps) {
  return (
    <Card>
      <CardHeader title="Revenue" eyebrow="MRR" right={<PrivacyTag />} />
      <p className="font-display text-4xl text-ink">{revenue.mrrLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <ChangeBadge percent={revenue.dailyChangePercent} label="today" />
        <ChangeBadge percent={revenue.weeklyChangePercent} label="this week" />
      </div>
    </Card>
  );
}
