import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-neutral-500">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1 hover:text-navy-900" aria-label="Início">
            <Home className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        </li>
        {items.map((item, i) => {
          const ultimo = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !ultimo ? (
                <Link href={item.href} className="hover:text-navy-900">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-navy-950">
                  {item.label}
                </span>
              )}
              {!ultimo && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
