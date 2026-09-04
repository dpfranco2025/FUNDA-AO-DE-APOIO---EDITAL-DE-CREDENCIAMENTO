import type { SituacaoEtapaCronograma } from "@/types/content";

export const SITUACAO_CRONOGRAMA_LABEL: Record<SituacaoEtapaCronograma, string> = {
  nao_iniciada: "Não iniciada",
  em_andamento: "Em andamento",
  concluida: "Concluída",
  atrasada: "Atrasada",
  a_confirmar: "Data a confirmar",
};

export const SITUACAO_CRONOGRAMA_CLASSES: Record<SituacaoEtapaCronograma, string> = {
  nao_iniciada: "bg-neutral-100 text-neutral-600 border-neutral-300",
  em_andamento: "bg-blue-100 text-navy-800 border-blue-500/30",
  concluida: "bg-green-100 text-green-700 border-green-600/30",
  atrasada: "bg-red-100 text-red-700 border-red-600/30",
  a_confirmar: "bg-neutral-100 text-neutral-500 border-neutral-300",
};
