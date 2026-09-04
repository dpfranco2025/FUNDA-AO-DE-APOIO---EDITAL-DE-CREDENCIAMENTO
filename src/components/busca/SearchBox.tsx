"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

export function SearchBox({
  autoFocus = false,
  placeholder = "Buscar...",
  className = "",
  defaultValue = "",
}: {
  autoFocus?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
}) {
  const [termo, setTermo] = useState(defaultValue);
  const router = useRouter();

  function aoEnviar(e: FormEvent) {
    e.preventDefault();
    const q = termo.trim();
    if (!q) return;
    router.push(`/busca?q=${encodeURIComponent(q)}`);
  }

  return (
    <form role="search" onSubmit={aoEnviar} className={`relative ${className}`}>
      <label htmlFor="campo-busca-global" className="sr-only">
        Buscar no portal
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
        aria-hidden
      />
      <input
        id="campo-busca-global"
        type="search"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-9 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-navy-700"
      />
    </form>
  );
}
