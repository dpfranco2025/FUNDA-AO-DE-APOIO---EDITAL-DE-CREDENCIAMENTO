"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { MENU_PRINCIPAL } from "@/content/navegacao";
import { SITE_CONFIG, STATUS_ATUAL, CATALOGO_STATUS_EDITAL } from "@/content/site-config";
import { SearchBox } from "@/components/busca/SearchBox";
import { LaboriMark, LaboriWordmark } from "@/components/brand/LaboriBrand";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const pathname = usePathname();
  const statusInfo = CATALOGO_STATUS_EDITAL[STATUS_ATUAL];

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 shadow-[0_1px_0_rgba(10,31,56,.03)] backdrop-blur-xl">
      <div className="bg-navy-950 text-white text-xs">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
          <span className="truncate">
            {SITE_CONFIG.instituicao} · {SITE_CONFIG.ictNome}
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.12)]" />
            Situação do edital: {statusInfo.label}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.75rem] items-center justify-between gap-4">
          <Link href="/" className="flex shrink items-center gap-3 min-w-0" aria-label={`${SITE_CONFIG.nomePlataforma} — página inicial`}>
            <LaboriMark />
            <span className="min-w-0">
              <span className="block text-[15px] font-extrabold text-navy-950 leading-tight truncate sm:text-base">
                Portal de Habilitação
              </span>
              <span className="block text-[11px] text-neutral-500 leading-tight truncate">
                Fundações de Apoio · {SITE_CONFIG.ictNome}
              </span>
            </span>
            <LaboriWordmark />
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setBuscaAberta((v) => !v)}
              aria-expanded={buscaAberta}
              aria-controls="busca-header"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-navy-900"
              aria-label="Abrir busca"
            >
              <Search className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-navy-900 lg:hidden"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            >
              {menuAberto ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        {buscaAberta && (
          <div id="busca-header" className="pb-4">
            <SearchBox autoFocus placeholder="Buscar no portal: documentos, dúvidas, comunicados..." />
          </div>
        )}

        <nav
          aria-label="Menu principal"
          className="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-0.5 lg:border-t lg:border-neutral-100 lg:py-1.5"
        >
          {MENU_PRINCIPAL.filter((item) => item.href !== "/").map((item) => {
            const ativo = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={ativo ? "page" : undefined}
                className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                  ativo
                    ? "bg-blue-50 text-navy-900"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Menu principal (mobile)"
          className="lg:hidden border-t border-neutral-200 bg-white px-4 py-3"
        >
          <ul className="flex flex-col gap-1">
            {MENU_PRINCIPAL.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuAberto(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-navy-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
