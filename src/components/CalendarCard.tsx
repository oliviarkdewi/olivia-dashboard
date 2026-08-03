import type { CalendarEvent } from "@/lib/types";
import { Card, CardHeader } from "./ui/Card";
import { SampleDataTag } from "./ui/SampleDataTag";

interface CalendarCardProps {
  events: CalendarEvent[];
}

export function CalendarCard({ events }: CalendarCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader title="Today's calendar" eyebrow="Schedule" right={<SampleDataTag />} />
      <ul className="flex flex-1 flex-col justify-center gap-4">
        {events.slice(0, 5).map((event) => (
          <li key={event.id} className="flex items-baseline gap-4">
            <span className="w-20 shrink-0 text-sm font-medium text-ink-muted">
              {event.time}
            </span>
            <span className="flex-1">
              <span className="block text-sm text-ink">{event.title}</span>
              {event.location && (
                <span className="block text-xs text-ink-soft">{event.location}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
