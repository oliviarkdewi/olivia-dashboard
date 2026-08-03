import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-line bg-paper p-6 shadow-card sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  eyebrow?: string;
  right?: ReactNode;
}

export function CardHeader({ title, eyebrow, right }: CardHeaderProps) {
  return (
    <div className="mb-5 flex items-start justify-between gap-3">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-medium tracking-wide text-ink-soft uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-xl text-ink">{title}</h2>
      </div>
      {right}
    </div>
  );
}
