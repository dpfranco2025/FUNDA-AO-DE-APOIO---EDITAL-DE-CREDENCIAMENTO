"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, ThumbsUp, ThumbsDown } from "lucide-react";
import type { FaqCategoriaContent, FaqItemContent } from "@/types/content";
import { normalizar } from "@/lib/search";
import { EmptyState } from "@/components/ui/EmptyState";
import Link from "next/link";

export function FaqAccordion({
  perguntas,
  categorias,
}: {
  perguntas: FaqItemContent[];
  categorias: FaqCategoriaContent[];
}) {
  const [termo, setTermo] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("todas");
  const [abertas, setAbertas] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<Record<string, "sim" | "nao">>({});

  const filtradas = useMemo(() => {
    const termoNorm = normalizar(termo);
    return perguntas.filter((p) => {
      const combinaTermo =
        !termoNorm ||
        normalizar(p.pergunta).includes(termoNorm) ||
        normalizar(p.resposta).includes(termoNorm);
      const combinaCategoria = categoriaAtiva === "todas" || p.categoria === categoriaAtiva;
      return combinaTermo && combinaCategoria;
    });
  }, [perguntas, termo, categoriaAtiva]);

  function alternar(id: string) {
    setAbertas((atual) => {
      const novo = new Set(atual);
      if (novo.has(id)) novo.delete(id);
      else novo.add(id);
      return novo;
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden />
          <label htmlFor="busca-faq" className="sr-only">Pesquisar perguntas frequentes</label>
          <input
            id="busca-faq"
            type="search"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            placeholder="Pesquisar dúvida..."
            className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-9 pr-4 text-sm focus-visible:border-navy-700"
          />
        </div>

        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por tema">
          <button
            type="button"
            onClick={() => setCategoriaAtiva("todas")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              categoriaAtiva === "todas" ? "bg-navy-900 text-white" : "bg-white border border-neutral-300 text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Todos os temas
          </button>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                categoriaAtiva === cat.id ? "bg-navy-900 text-white" : "bg-white border border-neutral-300 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {cat.titulo}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-neutral-500" aria-live="polite">
        {filtradas.length} {filtradas.length === 1 ? "pergunta encontrada" : "perguntas encontradas"}
      </p>

      {filtradas.length === 0 ? (
        <EmptyState
          title="Nenhum resultado encontrado"
          description="Tente outros termos ou consulte a página de Atendimento."
          action={
            <Link href="/atendimento" className="text-sm font-medium text-blue-600 hover:underline">
              Ir para Atendimento
            </Link>
          }
        />
      ) : (
        <ul className="flex flex-col divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
          {filtradas.map((item) => {
            const aberta = abertas.has(item.id);
            return (
              <li key={item.id}>
                <h3>
                  <button
                    type="button"
                    onClick={() => alternar(item.id)}
                    aria-expanded={aberta}
                    aria-controls={`faq-resposta-${item.id}`}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                  >
                    <span className="font-medium text-navy-950">{item.pergunta}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform ${aberta ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                </h3>
                {aberta && (
                  <div id={`faq-resposta-${item.id}`} className="px-4 pb-4">
                    <p className="text-sm leading-relaxed text-neutral-600">{item.resposta}</p>

                    <div className="mt-3 flex items-center gap-3 text-xs">
                      {feedback[item.id] ? (
                        <span className="text-neutral-500">Obrigado pelo retorno.</span>
                      ) : (
                        <>
                          <span className="text-neutral-500">Esta resposta esclareceu sua dúvida?</span>
                          <button
                            type="button"
                            onClick={() => setFeedback((f) => ({ ...f, [item.id]: "sim" }))}
                            className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-2 py-1 hover:bg-neutral-100"
                          >
                            <ThumbsUp className="h-3.5 w-3.5" aria-hidden /> Sim
                          </button>
                          <button
                            type="button"
                            onClick={() => setFeedback((f) => ({ ...f, [item.id]: "nao" }))}
                            className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-2 py-1 hover:bg-neutral-100"
                          >
                            <ThumbsDown className="h-3.5 w-3.5" aria-hidden /> Não
                          </button>
                        </>
                      )}
                    </div>

                    {feedback[item.id] === "nao" && (
                      <p className="mt-2 text-xs text-neutral-500">
                        Consulte o{" "}
                        <Link href="/atendimento" className="font-medium text-blue-600 hover:underline">
                          canal de atendimento
                        </Link>{" "}
                        para esclarecer sua dúvida diretamente.
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
