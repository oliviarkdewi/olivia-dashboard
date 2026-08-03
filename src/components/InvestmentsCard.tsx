import type { InvestmentSnapshot } from "@/lib/types";
import { Card, CardHeader } from "./ui/Card";
import { PrivacyTag } from "./ui/PrivacyTag";

interface InvestmentsCardProps {
  snapshot: InvestmentSnapshot;
}

export function InvestmentsCard({ snapshot }: InvestmentsCardProps) {
  const isUp = snapshot.dailyChangePercent >= 0;
  return (
    <Card>
      <CardHeader title="Investments" eyebrow="Portfolio" right={<PrivacyTag />} />
      <p className="font-display text-4xl text-ink">{snapshot.totalValueLabel}</p>
      <p
        className={`mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium ${
          isUp ? "bg-positive-soft text-positive" : "bg-negative-soft text-negative"
        }`}
      >
        {isUp ? "▲" : "▼"} {Math.abs(snapshot.dailyChangePercent)}% today
      </p>
    </Card>
  );
}
