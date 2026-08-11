import type { ContentPlatformStat } from "@/lib/ceo-types";
import { Card, CardHeader } from "../ui/Card";
import { ProgressBar } from "../ui/ProgressBar";
import { SampleDataTag } from "../ui/SampleDataTag";

interface ContentAutomationCardProps {
  platforms: ContentPlatformStat[];
}

export function ContentAutomationCard({ platforms }: ContentAutomationCardProps) {
  return (
    <Card>
      <CardHeader title="Content automation" eyebrow="Auto-posting" right={<SampleDataTag />} />
      <ul className="flex flex-col gap-4">
        {platforms.map((platform) => (
          <li key={platform.id}>
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <span className="text-sm text-ink">{platform.platform}</span>
              <span className="text-sm font-medium text-ink-muted">
                {platform.published}/{platform.scheduled}
              </span>
            </div>
            <ProgressBar percent={(platform.published / platform.scheduled) * 100} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
