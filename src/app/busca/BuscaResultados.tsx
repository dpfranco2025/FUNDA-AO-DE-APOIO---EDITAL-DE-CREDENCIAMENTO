"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { buscar, normalizar } from "@/lib/search";
import { SearchBox } from "@/components/busca/SearchBox";
import { EmptyState } from "@/components/ui/EmptyState";

function destacar(texto: string, termo: string) {
  if (!termo) return texto;
  const termoNorm = normalizar(termo);
  const textoNorm = normalizar(texto);
  const indice = textoNorm.indexOf(termoNorm);
  if (indice === -1) return texto;
  return (
    <>
      {texto.slice(0, indice)}
      <mark className="bg-gold-100 text-navy-950 rounded px-0.5">
        {texto.slice(indice, indice + termo.length)}
      </mark>
      {texto.slice(indice + termo.length)}
    </>
  );
}

export function BuscaResultados() {
  const params = useSearchParams();
  const termo = params.get("q") ?? "";
  const resultados = useMemo(() => buscar(termo), [termo]);

  const agrupados = useMemo(() => {
    const grupos = new Map<string, typeof resultados>();
    for (const r of resultados) {
      const lista = grupos.get(r.categoria) ?? [];
      lista.push(r);
      grupos.set(r.categoria, lista);
    }
    return grupos;
  }, [resultados]);

  return (
    <div className="flex flex-col gap-6">
      <SearchBox placeholder="Buscar no portal..." defaultValue={termo} />

      {!termo ? (
        <p className="text-sm text-neutral-500">Digite um termo para iniciar a busca.</p>
      ) : resultados.length === 0 ? (
        <EmptyState
          title={`Nenhum resultado encontrado para "${termo}"`}
          description="Tente outros termos, ou consulte a página de Perguntas frequentes."
          action={
            <Link href="/faq" className="text-sm font-medium text-blue-600 hover:underline">
              Ir para Perguntas frequentes
            </Link>
          }
        />
      ) : (
        <div className="flex flex-col gap-6">
          <p className="text-sm text-neutral-500" aria-live="polite">
            {resultados.length} resultado(s) para &ldquo;{termo}&rdquo;
          </p>
          {[...agrupados.entries()].map(([categoria, itens]) => (
            <div key={categoria}>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{categoria}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {itens.map((item, i) => (
                  <li key={`${item.href}-${i}`}>
                    <Link
                      href={item.href}
                      className="block rounded-lg border border-neutral-200 bg-white p-4 hover:border-navy-800"
                    >
                      <p className="font-medium text-navy-950">{destacar(item.titulo, termo)}</p>
                      <p className="mt-0.5 text-sm text-neutral-500 line-clamp-2">{item.descricao}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
