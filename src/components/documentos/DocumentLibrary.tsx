"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { CategoriaDocumento, Documento } from "@/types/content";
import { normalizar } from "@/lib/search";
import { DocumentCard } from "@/components/documentos/DocumentCard";
import { EmptyState } from "@/components/ui/EmptyState";

const CATEGORIAS: (CategoriaDocumento | "Todas")[] = [
  "Todas",
  "Edital",
  "Anexos",
  "Formulários",
  "Declarações",
  "Modelos",
  "Guias e orientações",
  "Comunicados",
  "Retificações",
  "Resultados",
  "Documentos de referência",
];

const OBRIGATORIEDADES = [
  { valor: "todas", label: "Todas as obrigatoriedades" },
  { valor: "obrigatorio", label: "Obrigatório" },
  { valor: "facultativo", label: "Facultativo" },
  { valor: "condicional", label: "Condicional" },
  { valor: "informativo", label: "Informativo" },
] as const;

const ORDENACOES = [
  { valor: "titulo", label: "Título (A–Z)" },
  { valor: "numero", label: "Número" },
  { valor: "atualizacao", label: "Atualização mais recente" },
] as const;

export function DocumentLibrary({ documentos }: { documentos: Documento[] }) {
  const [termo, setTermo] = useState("");
  const [categoria, setCategoria] = useState<CategoriaDocumento | "Todas">("Todas");
  const [obrigatoriedade, setObrigatoriedade] = useState<(typeof OBRIGATORIEDADES)[number]["valor"]>("todas");
  const [ordenacao, setOrdenacao] = useState<(typeof ORDENACOES)[number]["valor"]>("titulo");

  const resultado = useMemo(() => {
    const termoNorm = normalizar(termo);
    let lista = documentos.filter((doc) => {
      const combinaTermo =
        !termoNorm ||
        normalizar(doc.titulo).includes(termoNorm) ||
        normalizar(doc.finalidade).includes(termoNorm);
      const combinaCategoria = categoria === "Todas" || doc.categoria === categoria;
      const combinaObrigatoriedade =
        obrigatoriedade === "todas" || doc.obrigatorio === obrigatoriedade;
      return combinaTermo && combinaCategoria && combinaObrigatoriedade;
    });

    lista = [...lista].sort((a, b) => {
      if (ordenacao === "titulo") return a.titulo.localeCompare(b.titulo, "pt-BR");
      if (ordenacao === "numero") return (a.numero ?? "").localeCompare(b.numero ?? "", "pt-BR");
      const dataA = a.dataAtualizacao ?? "";
      const dataB = b.dataAtualizacao ?? "";
      return dataB.localeCompare(dataA);
    });

    return lista;
  }, [documentos, termo, categoria, obrigatoriedade, ordenacao]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" aria-hidden />
          <label htmlFor="busca-documentos" className="sr-only">Pesquisar documentos</label>
          <input
            id="busca-documentos"
            type="search"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            placeholder="Pesquisar por título ou finalidade..."
            className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-9 pr-4 text-sm focus-visible:border-navy-700"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label htmlFor="filtro-categoria" className="mb-1 block text-xs font-medium text-neutral-600">
              Categoria
            </label>
            <select
              id="filtro-categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value as CategoriaDocumento | "Todas")}
              className="w-full rounded-lg border border-neutral-300 bg-white py-2 px-3 text-sm focus-visible:border-navy-700"
            >
              {CATEGORIAS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filtro-obrigatoriedade" className="mb-1 block text-xs font-medium text-neutral-600">
              Obrigatoriedade
            </label>
            <select
              id="filtro-obrigatoriedade"
              value={obrigatoriedade}
              onChange={(e) => setObrigatoriedade(e.target.value as typeof obrigatoriedade)}
              className="w-full rounded-lg border border-neutral-300 bg-white py-2 px-3 text-sm focus-visible:border-navy-700"
            >
              {OBRIGATORIEDADES.map((o) => (
                <option key={o.valor} value={o.valor}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="ordenacao-documentos" className="mb-1 block text-xs font-medium text-neutral-600">
              Ordenar por
            </label>
            <select
              id="ordenacao-documentos"
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value as typeof ordenacao)}
              className="w-full rounded-lg border border-neutral-300 bg-white py-2 px-3 text-sm focus-visible:border-navy-700"
            >
              {ORDENACOES.map((o) => (
                <option key={o.valor} value={o.valor}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="text-sm text-neutral-500" aria-live="polite">
        {resultado.length} {resultado.length === 1 ? "documento encontrado" : "documentos encontrados"}
      </p>

      {resultado.length === 0 ? (
        <EmptyState
          title="Nenhum documento encontrado"
          description="Tente ajustar os termos da pesquisa ou os filtros selecionados."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {resultado.map((doc) => (
            <DocumentCard key={doc.id} documento={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
