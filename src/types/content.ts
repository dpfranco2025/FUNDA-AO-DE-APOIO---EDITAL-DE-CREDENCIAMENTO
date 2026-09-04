// Tipos centrais de conteúdo do portal.
// Ver src/content/*.ts para os dados editáveis correspondentes a cada tipo.

export type StatusEdital =
  | "em_preparacao"
  | "publicado"
  | "prazo_aberto"
  | "analise_documental"
  | "diligencias"
  | "resultado_preliminar"
  | "fase_recursal"
  | "resultado_definitivo"
  | "encerrado";

export interface StatusEditalInfo {
  status: StatusEdital;
  label: string;
  descricao: string;
  tone: "neutral" | "info" | "success" | "warning" | "danger";
}

export type FormatoArquivo = "PDF" | "DOCX" | "XLSX" | "A confirmar";

export type CategoriaDocumento =
  | "Edital"
  | "Anexos"
  | "Formulários"
  | "Declarações"
  | "Modelos"
  | "Guias e orientações"
  | "Comunicados"
  | "Retificações"
  | "Resultados"
  | "Documentos de referência";

export interface Documento {
  id: string;
  numero?: string;
  titulo: string;
  categoria: CategoriaDocumento;
  finalidade: string;
  quandoUtilizar?: string;
  obrigatorio: "obrigatorio" | "facultativo" | "condicional" | "informativo";
  formatos: FormatoArquivo[];
  versao: string;
  dataAtualizacao: string | null; // ISO 8601, null = "Data a confirmar"
  disponivel: boolean;
  novo?: boolean;
  atualizadoRecentemente?: boolean;
  urlVisualizar?: string;
  urlDownloadPdf?: string;
  urlDownloadDocx?: string;
}

export interface VersaoEdital {
  versao: string;
  data: string | null;
  descricao: string;
}

export interface EditalInfo {
  titulo: string;
  numero: string | null;
  status: StatusEdital;
  dataPublicacao: string | null;
  descricao: string;
  versaoAtual: string;
  dataUltimaAtualizacao: string | null;
  formato: FormatoArquivo;
  tamanhoArquivo: string | null;
  fonteOficial: string;
  disponivel: boolean;
  urlVisualizar?: string;
  urlDownloadPdf?: string;
  urlDownloadEditavel?: string;
  historico: VersaoEdital[];
}

export interface EtapaJornada {
  id: string;
  ordem: number;
  nome: string;
  objetivo: string;
  providenciaEsperada: string;
  documentosRelacionados: string[]; // ids de Documento
  prazo: string | null;
  responsavel: string;
  resultadoEsperado: string;
  cuidados: string[];
  linkRelacionado?: { label: string; href: string };
}

export type SituacaoEtapaCronograma =
  | "nao_iniciada"
  | "em_andamento"
  | "concluida"
  | "atrasada"
  | "a_confirmar";

export interface EtapaCronograma {
  id: string;
  etapa: string;
  dataInicial: string | null;
  dataFinal: string | null;
  situacao: SituacaoEtapaCronograma;
  descricao: string;
  alteracao?: string;
}

export interface ChecklistItemContent {
  id: string;
  titulo: string;
  descricao: string;
  obrigatorio: boolean;
  quemEmite?: string;
  exigeValidadeOuAssinatura?: string;
  alertaComum?: string;
}

export interface ChecklistGrupo {
  id: string;
  titulo: string;
  itens: ChecklistItemContent[];
}

export interface FaqItemContent {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: string;
}

export interface FaqCategoriaContent {
  id: string;
  titulo: string;
}

export type CategoriaComunicado =
  | "Publicação"
  | "Esclarecimento"
  | "Retificação"
  | "Atualização de documento"
  | "Prorrogação de prazo"
  | "Resultado"
  | "Aviso técnico";

export interface Comunicado {
  id: string;
  slug: string;
  titulo: string;
  data: string;
  categoria: CategoriaComunicado;
  resumo: string;
  conteudo: string;
  documentosRelacionados?: string[];
  importante: boolean;
  dataUltimaAtualizacao?: string;
}

export type TipoResultado =
  | "preliminar"
  | "diligencia"
  | "recurso"
  | "definitivo";

export interface ResultadoItem {
  id: string;
  tipo: TipoResultado;
  titulo: string;
  data: string | null;
  descricao: string;
  documentosRelacionados?: string[];
  disponivel: boolean;
}

export interface FundacaoCredenciada {
  nome: string;
  situacao: string;
  vigencia: string | null;
}

export interface NavItem {
  label: string;
  href: string;
}
