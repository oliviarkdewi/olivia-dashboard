import type { ReactNode } from "react";

interface StatTileProps {
  label: string;
  value: string;
  caption: string;
  tag?: ReactNode;
}

export function StatTile({ label, value, caption, tag }: StatTileProps) {
  return (
    <div className="rounded-3xl border border-line bg-paper p-5 shadow-card sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">
          {label}
        </p>
        {tag}
      </div>
      <p className="font-display text-3xl text-ink sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-ink-soft">{caption}</p>
    </div>
  );
}
