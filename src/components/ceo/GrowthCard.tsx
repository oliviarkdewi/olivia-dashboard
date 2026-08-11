import type { GrowthPipeline } from "@/lib/ceo-types";
import { Card, CardHeader } from "../ui/Card";
import { SampleDataTag } from "../ui/SampleDataTag";

interface GrowthCardProps {
  growth: GrowthPipeline;
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

export function GrowthCard({ growth }: GrowthCardProps) {
  return (
    <Card>
      <CardHeader title="Growth & pipeline" eyebrow="Trends" right={<SampleDataTag />} />
      <div className="flex gap-6">
        <Stat label="Trial → paid" percent={growth.trialToPaidPercent} />
        <div className="w-px bg-line" />
        <Stat label="Weekly growth" percent={growth.weeklyGrowthPercent} />
      </div>
    </Card>
  );
}
