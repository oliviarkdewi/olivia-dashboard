import type { LinkedInOutreach } from "@/lib/ceo-types";
import { Card, CardHeader } from "../ui/Card";
import { SampleDataTag } from "../ui/SampleDataTag";

interface LinkedInOutreachCardProps {
  outreach: LinkedInOutreach;
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 min-w-[7rem]">
      <p className="font-display text-3xl text-ink sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-ink-soft">{label}</p>
    </div>
  );
}

export function LinkedInOutreachCard({ outreach }: LinkedInOutreachCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader title="LinkedIn outreach" eyebrow="Growth" right={<SampleDataTag />} />
      <div className="flex flex-1 flex-wrap items-center gap-6">
        <Metric label="Messages sent" value={outreach.messagesSent.toLocaleString()} />
        <Metric label="Replies" value={String(outreach.replies)} />
        <Metric label="Meetings booked" value={String(outreach.meetingsBooked)} />
        <Metric label="Reply rate" value={`${outreach.replyRatePercent}%`} />
      </div>
    </Card>
  );
}
