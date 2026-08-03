interface ProgressBarProps {
  percent: number;
}

export function ProgressBar({ percent }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-moss-soft">
      <div
        className="h-full rounded-full bg-moss transition-[width]"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
