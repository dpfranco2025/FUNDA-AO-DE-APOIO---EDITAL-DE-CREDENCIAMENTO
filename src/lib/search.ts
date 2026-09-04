import { DOCUMENTOS } from "@/content/documentos";
import { FAQ } from "@/content/faq";
import { ETAPAS_JORNADA } from "@/content/jornada";

export type CategoriaResultadoBusca = "Página" | "Documento" | "Pergunta frequente" | "Etapa";

export interface ResultadoBusca {
  categoria: CategoriaResultadoBusca;
  titulo: string;
  descricao: string;
  href: string;
}

const PAGINAS: ResultadoBusca[] = [
  { categoria: "Página", titulo: "Início", descricao: "Página inicial do portal.", href: "/" },
  { categoria: "Página", titulo: "O credenciamento", descricao: "Entenda o objeto e as regras do credenciamento.", href: "/o-credenciamento" },
  { categoria: "Página", titulo: "Edital", descricao: "Central do edital: versão publicada e anexos.", href: "/edital" },
  { categoria: "Página", titulo: "Documentos", descricao: "Biblioteca de documentos, formulários e modelos.", href: "/documentos" },
  { categoria: "Página", titulo: "Como participar", descricao: "Guia passo a passo do procedimento.", href: "/como-participar" },
  { categoria: "Página", titulo: "Prepare sua documentação", descricao: "Checklist interativo de preparação.", href: "/checklist" },
  { categoria: "Página", titulo: "Cronograma", descricao: "Datas e etapas oficiais do procedimento.", href: "/cronograma" },
  { categoria: "Página", titulo: "Perguntas frequentes", descricao: "Dúvidas comuns sobre o credenciamento.", href: "/faq" },
  { categoria: "Página", titulo: "Após o credenciamento", descricao: "Orientações sobre a atuação futura junto à ICT-AGU.", href: "/pos-credenciamento" },
  { categoria: "Página", titulo: "Atendimento", descricao: "Canais oficiais para dúvidas.", href: "/atendimento" },
];

export function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function construirIndice(): ResultadoBusca[] {
  const documentos: ResultadoBusca[] = DOCUMENTOS.map((doc) => ({
    categoria: "Documento",
    titulo: doc.titulo,
    descricao: doc.finalidade,
    href: "/documentos",
  }));

  const faq: ResultadoBusca[] = FAQ.map((item) => ({
    categoria: "Pergunta frequente",
    titulo: item.pergunta,
    descricao: item.resposta,
    href: "/faq",
  }));

  const etapas: ResultadoBusca[] = ETAPAS_JORNADA.map((etapa) => ({
    categoria: "Etapa",
    titulo: etapa.nome,
    descricao: etapa.objetivo,
    href: "/como-participar",
  }));

  return [...PAGINAS, ...documentos, ...faq, ...etapas];
}

export function buscar(termo: string): ResultadoBusca[] {
  const termoNormalizado = normalizar(termo);
  if (!termoNormalizado) return [];
  const indice = construirIndice();
  return indice.filter(
    (item) =>
      normalizar(item.titulo).includes(termoNormalizado) ||
      normalizar(item.descricao).includes(termoNormalizado)
  );
}
