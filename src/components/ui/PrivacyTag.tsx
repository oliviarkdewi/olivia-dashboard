export function PrivacyTag() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-medium tracking-wide text-ink-muted uppercase">
      <svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
        <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      Always masked
    </span>
  );
}
