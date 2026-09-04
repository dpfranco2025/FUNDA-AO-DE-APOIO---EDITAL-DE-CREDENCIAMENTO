import type { EtapaCronograma } from "@/types/content";

// O chamamento é PERMANENTE (Seção 5 do edital): não há prazo de inscrição
// nem data de encerramento. A AGU pode organizar a análise em ciclos
// trimestrais de natureza instrutória, sem prejuízo do recebimento
// contínuo e ininterrupto de requerimentos. O cronograma detalhado com
// datas consta do Anexo XV, ainda não publicado.

export const CRONOGRAMA: EtapaCronograma[] = [
  {
    id: "recebimento-continuo",
    etapa: "Recebimento de requerimentos",
    dataInicial: null,
    dataFinal: null,
    situacao: "em_andamento",
    descricao: "O edital permanece aberto por prazo indeterminado. Requerimentos podem ser apresentados a qualquer tempo, de forma contínua e ininterrupta — não há data de encerramento.",
  },
  {
    id: "ciclo-instrutorio",
    etapa: "Ciclos trimestrais de análise instrutória",
    dataInicial: null,
    dataFinal: null,
    situacao: "a_confirmar",
    descricao: "A AGU pode organizar a análise dos requerimentos recebidos em ciclos trimestrais, sem prejuízo da ordem de apresentação. As datas de cada ciclo constam do Anexo XV (ainda não publicado).",
  },
  {
    id: "conferencia-diligencias",
    etapa: "Conferência preliminar e eventuais diligências",
    dataInicial: null,
    dataFinal: null,
    situacao: "a_confirmar",
    descricao: "A comissão confere a documentação e pode solicitar diligências. A fundação tem 10 dias úteis (prorrogáveis) para responder a cada diligência.",
  },
  {
    id: "resultado-preliminar",
    etapa: "Divulgação do resultado preliminar",
    dataInicial: null,
    dataFinal: null,
    situacao: "a_confirmar",
    descricao: "Publicação da decisão proposta pela comissão para cada requerimento analisado, com abertura do prazo recursal.",
  },
  {
    id: "fase-recursal",
    etapa: "Fase recursal",
    dataInicial: null,
    dataFinal: null,
    situacao: "a_confirmar",
    descricao: "Prazo de 10 dias úteis, contados da publicação do resultado preliminar, para apresentação de recurso, sem efeito suspensivo.",
  },
  {
    id: "resultado-definitivo",
    etapa: "Deliberação do CG-AGU e resultado definitivo",
    dataInicial: null,
    dataFinal: null,
    situacao: "a_confirmar",
    descricao: "Decisão final do Comitê de Governança da AGU, publicada no sítio eletrônico oficial, com inclusão da fundação habilitada no Cadastro de Fundações de Apoio da ICT-AGU.",
  },
];

export interface PrazoProcessual {
  id: string;
  titulo: string;
  prazo: string;
  observacao?: string;
}

export const PRAZOS_PROCESSUAIS: PrazoProcessual[] = [
  { id: "diligencia", titulo: "Resposta a diligência", prazo: "10 dias úteis", observacao: "Prorrogável mediante justificativa aceita pela comissão." },
  { id: "recurso", titulo: "Apresentação de recurso", prazo: "10 dias úteis", observacao: "Contados da publicação do resultado preliminar, sem efeito suspensivo." },
  { id: "saneamento-atualizacao", titulo: "Saneamento da atualização anual não apresentada", prazo: "10 dias úteis", observacao: "Após notificação; a omissão pode levar à suspensão da habilitação." },
  { id: "vigencia-habilitacao", titulo: "Vigência da habilitação", prazo: "Até 5 anos", observacao: "O CG-AGU pode fixar prazo inferior conforme riscos ou condicionantes." },
  { id: "atualizacao-anual", titulo: "Atualização cadastral", prazo: "Anual", observacao: "Relatório de gestão, demonstrações contábeis e atos ministeriais atualizados (Anexo X)." },
];
