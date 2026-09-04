export function LaboriMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`labori-mark ${compact ? "h-10 w-10 rounded-xl" : "h-12 w-12 rounded-2xl"}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className={compact ? "h-6 w-6" : "h-7 w-7"} fill="none">
        <circle cx="16" cy="16" r="12.5" stroke="white" strokeOpacity=".72" />
        <path d="M9 18c4.1-1 6.1-4.3 7-9 1 4.7 2.9 8 7 9M11 22h10" stroke="#e7b84b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="9" r="2" fill="#50c6da" />
      </svg>
    </span>
  );
}

export function LaboriWordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="hidden border-l border-neutral-200 pl-3 sm:block">
      <span className={`block text-base font-black leading-none tracking-[.09em] ${inverse ? "text-white" : "text-blue-600"}`}>LABORI</span>
      <span className={`mt-1 block text-[8px] font-bold tracking-[.14em] ${inverse ? "text-neutral-400" : "text-neutral-500"}`}>INOVAÇÃO AGU</span>
    </span>
  );
}
