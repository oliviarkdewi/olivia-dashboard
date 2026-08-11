import type { SystemHealth } from "@/lib/ceo-types";
import { Card, CardHeader } from "../ui/Card";
import { SampleDataTag } from "../ui/SampleDataTag";

interface SystemHealthCardProps {
  health: SystemHealth;
}

const STATUS_LABEL: Record<SystemHealth["status"], string> = {
  operational: "All systems operational",
  degraded: "Degraded performance",
  down: "Outage in progress",
};

const STATUS_DOT: Record<SystemHealth["status"], string> = {
  operational: "bg-positive",
  degraded: "bg-gold",
  down: "bg-negative",
};

export function SystemHealthCard({ health }: SystemHealthCardProps) {
  return (
    <Card>
      <CardHeader title="System health" eyebrow="Platform" right={<SampleDataTag />} />
      <div className="mb-4 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${STATUS_DOT[health.status]}`} />
        <span className="text-sm font-medium text-ink">{STATUS_LABEL[health.status]}</span>
      </div>
      <dl className="grid grid-cols-3 gap-2 border-t border-line pt-4 text-center">
        <div>
          <dt className="text-xs text-ink-soft">Uptime</dt>
          <dd className="mt-1 font-display text-xl text-ink">{health.uptimePercent}%</dd>
        </div>
        <div>
          <dt className="text-xs text-ink-soft">Error rate</dt>
          <dd className="mt-1 font-display text-xl text-ink">{health.errorRatePercent}%</dd>
        </div>
        <div>
          <dt className="text-xs text-ink-soft">Avg response</dt>
          <dd className="mt-1 font-display text-xl text-ink">{health.avgResponseMs}ms</dd>
        </div>
      </dl>
    </Card>
  );
}
