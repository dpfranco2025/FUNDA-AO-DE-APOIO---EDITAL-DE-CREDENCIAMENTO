import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";
import type { ReactNode } from "react";

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-12 text-center">
      <Icon className="h-8 w-8 text-neutral-400" aria-hidden />
      <p className="font-semibold text-neutral-800">{title}</p>
      {description && <p className="max-w-md text-sm text-neutral-500">{description}</p>}
      {action}
    </div>
  );
}
