"use client";

interface HeaderProps {
  title: string;
  eyebrow?: string;
}

export function Header({ title, eyebrow }: HeaderProps) {
  const now = new Date();
  const dayOfWeek = now.toLocaleDateString("en-AU", { weekday: "long" });
  const dateStr = now.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [lead, ...rest] = title.split("—");

  return (
    <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-medium tracking-wide text-ink-soft uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          {rest.length ? (
            <>
              {lead.trim()} <span className="text-ink-soft">—</span>{rest.join("—")}
            </>
          ) : (
            title
          )}
        </h1>
      </div>
      <div className="text-left sm:text-right">
        <p suppressHydrationWarning className="text-sm font-medium text-ink">
          {dayOfWeek}
        </p>
        <p suppressHydrationWarning className="text-sm text-ink-soft">
          {dateStr}
        </p>
      </div>
    </header>
  );
}
