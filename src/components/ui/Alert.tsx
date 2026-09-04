import { AlertTriangle, Info, CheckCircle2, AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "info" | "success" | "warning" | "danger";

const TONE_STYLES: Record<Tone, { wrap: string; icon: ReactNode }> = {
  info: {
    wrap: "bg-blue-50 border-blue-500/40 text-navy-900",
    icon: <Info className="h-5 w-5 shrink-0 text-blue-600" aria-hidden />,
  },
  success: {
    wrap: "bg-green-50 border-green-600/30 text-green-900",
    icon: <CheckCircle2 className="h-5 w-5 shrink-0 text-green-700" aria-hidden />,
  },
  warning: {
    wrap: "bg-amber-50 border-amber-600/30 text-amber-900",
    icon: <AlertTriangle className="h-5 w-5 shrink-0 text-amber-700" aria-hidden />,
  },
  danger: {
    wrap: "bg-red-50 border-red-600/30 text-red-900",
    icon: <AlertCircle className="h-5 w-5 shrink-0 text-red-700" aria-hidden />,
  },
};

export function Alert({
  tone = "info",
  title,
  children,
  className = "",
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  const style = TONE_STYLES[tone];
  return (
    <div
      role={tone === "danger" || tone === "warning" ? "alert" : "status"}
      className={`flex gap-3 rounded-xl border p-4 text-sm ${style.wrap} ${className}`}
    >
      {style.icon}
      <div>
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        <div className="leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
