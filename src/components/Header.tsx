"use client";

export function Header() {
  const now = new Date();
  const dayOfWeek = now.toLocaleDateString("en-AU", { weekday: "long" });
  const dateStr = now.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">
        Olivia <span className="text-ink-soft">—</span> at a glance
      </h1>
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
