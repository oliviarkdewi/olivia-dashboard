import type { RevenueSnapshot } from "@/lib/ceo-types";
import { Card, CardHeader } from "../ui/Card";
import { PrivacyTag } from "../ui/PrivacyTag";

interface RevenueCardProps {
  revenue: RevenueSnapshot;
}

export function RevenueCard({ revenue }: RevenueCardProps) {
  const isUp = revenue.dailyChangePercent >= 0;
  return (
    <Card>
      <CardHeader title="Revenue" eyebrow="MRR" right={<PrivacyTag />} />
      <p className="font-display text-4xl text-ink">{revenue.mrrLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium ${
            isUp ? "bg-positive-soft text-positive" : "bg-negative-soft text-negative"
          }`}
        >
          {isUp ? "▲" : "▼"} {Math.abs(revenue.dailyChangePercent)}% today
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-moss-soft px-2.5 py-1 text-sm font-medium text-moss">
          {revenue.weeklyChangePercent >= 0 ? "▲" : "▼"} {Math.abs(revenue.weeklyChangePercent)}% this week
        </span>
      </div>
    </Card>
  );
}
