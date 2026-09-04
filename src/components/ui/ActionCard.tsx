import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function ActionCard({
  icon: Icon,
  title,
  description,
  href,
  accent = "blue",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accent?: "blue" | "violet" | "green" | "amber" | "cyan" | "rose";
}) {
  const accents = { blue: "bg-blue-50 text-blue-700", violet: "bg-violet-50 text-violet-700", green: "bg-emerald-50 text-emerald-700", amber: "bg-amber-50 text-amber-700", cyan: "bg-cyan-50 text-cyan-700", rose: "bg-rose-50 text-rose-700" };
  return (
    <Link
      href={href}
      className="modern-card group flex min-h-52 flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_45px_rgba(10,31,56,.12)]"
    >
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accents[accent]}`}>
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span>
        <span className="block font-semibold text-navy-950">{title}</span>
        <span className="mt-1 block text-sm text-neutral-600">{description}</span>
      </span>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
        Acessar
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
