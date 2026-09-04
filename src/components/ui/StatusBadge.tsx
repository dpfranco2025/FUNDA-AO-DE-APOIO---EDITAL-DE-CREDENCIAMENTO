import type { StatusEdital } from "@/types/content";
import { CATALOGO_STATUS_EDITAL } from "@/content/site-config";

const TONE_CLASSES: Record<string, string> = {
  neutral: "bg-neutral-100 text-neutral-700 border-neutral-300",
  info: "bg-blue-100 text-navy-800 border-blue-500/40",
  success: "bg-green-100 text-green-700 border-green-600/30",
  warning: "bg-amber-100 text-amber-700 border-amber-600/30",
  danger: "bg-red-100 text-red-700 border-red-600/30",
};

export function StatusBadge({ status }: { status: StatusEdital }) {
  const info = CATALOGO_STATUS_EDITAL[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${TONE_CLASSES[info.tone]}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {info.label}
    </span>
  );
}
