import type { EditalInfo } from "@/types/content";
import { STATUS_ATUAL } from "./site-config";

// Conteúdo extraído do texto "Edital FA Limpo" fornecido pela equipe LABORI.
// O texto já foi aprovado pelo Comitê de Governança da AGU (CG-AGU) e
// aguarda apenas a publicação oficial (numeração do edital, do processo
// administrativo e data), etapa em que os campos "Nº ___/2026",
// "[NÚMERO DO PROCESSO]" e "[DATA]" ainda presentes no texto serão
// preenchidos. O arquivo PDF já está disponível para leitura e download.

export const EDITAL: EditalInfo = {
  titulo:
    "Edital de Chamamento Público Permanente para Habilitação Institucional de Fundações de Apoio Interessadas em Atuar junto à ICT-AGU",
  numero: null,
  status: STATUS_ATUAL,
  dataPublicacao: null,
  descricao:
    "Procedimento de chamamento público permanente para habilitação institucional de fundações de apoio interessadas em atuar junto à Instituição Científica, Tecnológica e de Inovação da Advocacia-Geral da União (ICT-AGU), prestando apoio a programas e projetos de ensino, pesquisa, extensão, desenvolvimento institucional, desenvolvimento científico e tecnológico e estímulo à inovação.",
  versaoAtual: "Aprovada pelo Comitê de Governança da AGU (CG-AGU)",
  dataUltimaAtualizacao: "2026-09-03",
  formato: "PDF",
  tamanhoArquivo: null,
  fonteOficial: "LABORI — Laboratório de Inovação da AGU",
  disponivel: true,
  urlVisualizar: "/edital/texto",
  urlDownloadPdf: "/documentos/edital-habilitacao-fundacoes-apoio.pdf",
  historico: [],
};

export const BASE_LEGAL = [
  "Lei Complementar nº 73, de 10 de fevereiro de 1993",
  "Lei nº 8.958, de 20 de dezembro de 1994",
  "Lei nº 10.973, de 2 de dezembro de 2004",
  "Decreto nº 7.423, de 31 de dezembro de 2010",
  "Decreto nº 8.241, de 21 de maio de 2014",
  "Decreto nº 9.283, de 7 de fevereiro de 2018",
  "Portaria Normativa AGU nº 209, de 3 de março de 2026",
  "Portaria Normativa AGU nº 221, de 18 de maio de 2026",
];

export const NATUREZA_HABILITACAO = [
  "Não se confunde com o registro e o credenciamento concedidos pelo MEC e pelo MCTI.",
  "Não substitui a autorização ministerial necessária para que fundação vinculada a outra ICT preste apoio à ICT-AGU.",
  "Não gera direito subjetivo à contratação, à celebração de convênio, parceria ou outro instrumento jurídico, nem sua prorrogação.",
  "Não assegura exclusividade nem garante volume mínimo de projetos, atividades, receitas ou recursos.",
  "Não implica preferência automática em seleções futuras nem vincula a AGU à utilização dos serviços da entidade.",
  "Não impede a habilitação de outras fundações.",
  "Não dispensa a análise jurídica, técnica, orçamentária, financeira e de governança exigida para cada instrumento.",
  "Não autoriza o início de atividades antes da celebração do instrumento jurídico correspondente.",
];
