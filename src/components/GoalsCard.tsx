import type { Goal } from "@/lib/types";
import { Card, CardHeader } from "./ui/Card";
import { ProgressBar } from "./ui/ProgressBar";
import { SampleDataTag } from "./ui/SampleDataTag";

interface GoalsCardProps {
  goals: Goal[];
}

export function GoalsCard({ goals }: GoalsCardProps) {
  return (
    <Card>
      <CardHeader title="Goals & reminders" eyebrow="Active" right={<SampleDataTag />} />
      <ul className="flex flex-col gap-4">
        {goals.slice(0, 4).map((goal) => (
          <li key={goal.id}>
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <span className="text-sm text-ink">{goal.label}</span>
              <span className="text-sm font-medium text-ink-muted">
                {goal.progressPercent}%
              </span>
            </div>
            <ProgressBar percent={goal.progressPercent} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
