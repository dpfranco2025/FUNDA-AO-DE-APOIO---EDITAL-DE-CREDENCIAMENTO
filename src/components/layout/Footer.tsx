import Link from "next/link";
import { LINKS_RODAPE } from "@/content/navegacao";
import { SITE_CONFIG } from "@/content/site-config";
import { formatarData } from "@/lib/format";
import { LaboriMark } from "@/components/brand/LaboriBrand";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-navy-950 text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <LaboriMark compact />
              <div><p className="text-sm font-extrabold tracking-wide text-white">LABORI · {SITE_CONFIG.ictNome}</p><p className="mt-1 text-xs text-neutral-400">Laboratório de Inovação da Advocacia-Geral da União</p></div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Links</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {LINKS_RODAPE.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Portal oficial</p>
            <p className="mt-2 text-sm text-neutral-400">
              {SITE_CONFIG.contato.portalOficialAgu ?? "Link a ser informado"}
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row"><p className="text-xs leading-relaxed text-neutral-400 max-w-3xl">{SITE_CONFIG.avisoJuridicoGeral}</p><p className="shrink-0 text-xs text-neutral-500">Atualização: {formatarData(SITE_CONFIG.ultimaAtualizacaoPortal)}</p></div>
        </div>
      </div>
    </footer>
  );
}
