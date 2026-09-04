import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1.5">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-bold text-navy-950 tracking-tight">{title}</h2>
        {description && (
          <p className="mt-1.5 max-w-2xl text-neutral-600">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
