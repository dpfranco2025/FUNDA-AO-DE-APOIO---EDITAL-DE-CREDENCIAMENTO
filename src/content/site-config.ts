// Configuração central da plataforma.
// Para atualizar o status do edital, altere apenas STATUS_ATUAL abaixo.

import type { StatusEdital, StatusEditalInfo } from "@/types/content";

export const STATUS_ATUAL: StatusEdital = "em_preparacao";

export const CATALOGO_STATUS_EDITAL: Record<StatusEdital, StatusEditalInfo> = {
  em_preparacao: {
    status: "em_preparacao",
    label: "Aprovado pelo CG-AGU",
    descricao: "O edital foi aprovado pelo Comitê de Governança da AGU (CG-AGU) e aguarda publicação oficial.",
    tone: "info",
  },
  publicado: {
    status: "publicado",
    label: "Publicado",
    descricao: "O edital foi publicado. Consulte o texto oficial e os anexos.",
    tone: "info",
  },
  prazo_aberto: {
    status: "prazo_aberto",
    label: "Recebendo requerimentos",
    descricao: "O chamamento é permanente: requerimentos podem ser apresentados a qualquer tempo, sem data de encerramento.",
    tone: "success",
  },
  analise_documental: {
    status: "analise_documental",
    label: "Em análise documental",
    descricao: "Os requerimentos apresentados estão em análise.",
    tone: "info",
  },
  diligencias: {
    status: "diligencias",
    label: "Fase de diligências",
    descricao: "Fundações notificadas devem atender às diligências solicitadas.",
    tone: "warning",
  },
  resultado_preliminar: {
    status: "resultado_preliminar",
    label: "Resultado preliminar divulgado",
    descricao: "O resultado preliminar foi divulgado no sítio eletrônico oficial da AGU.",
    tone: "info",
  },
  fase_recursal: {
    status: "fase_recursal",
    label: "Fase recursal",
    descricao: "O prazo recursal está em curso.",
    tone: "warning",
  },
  resultado_definitivo: {
    status: "resultado_definitivo",
    label: "Resultado definitivo divulgado",
    descricao: "O resultado definitivo da habilitação foi divulgado.",
    tone: "success",
  },
  encerrado: {
    status: "encerrado",
    label: "Encerrado",
    descricao: "Este chamamento foi revogado, substituído ou encerrado pela AGU.",
    tone: "neutral",
  },
};

export const SITE_CONFIG = {
  nomePlataforma: "Portal de Habilitação de Fundações de Apoio",
  instituicao: "Advocacia-Geral da União",
  siglaInstituicao: "AGU",
  ictNome: "ICT-AGU",
  laboriReferencia: "LABORI — Laboratório de Inovação da AGU",
  nomeProcedimento:
    "Chamamento Público Permanente para Habilitação Institucional de Fundações de Apoio",
  descricaoCurta:
    "Consulte o edital, conheça os requisitos, prepare a documentação e acompanhe todas as etapas do chamamento público permanente para habilitação institucional de fundações de apoio junto à ICT-AGU.",
  avisoJuridicoGeral:
    "O conteúdo desta plataforma possui caráter informativo e visa facilitar a compreensão do processo de habilitação institucional (popularmente também chamado de credenciamento). Em caso de divergência, prevalecem o edital publicado, seus anexos, eventuais retificações e os atos oficiais do procedimento.",
  avisosComplementares: [
    "A habilitação institucional não se confunde com o registro e o credenciamento concedidos pelo MEC e pelo MCTI.",
    "A habilitação não representa contratação automática nem assegura exclusividade ou volume mínimo de projetos.",
    "O envio de documentação não garante o deferimento do requerimento.",
    "O chamamento é permanente: não há prazo de inscrição nem data de encerramento.",
    "Versões substituídas de documentos não devem ser utilizadas.",
  ],
  contato: {
    canalOficial: "Informação a ser inserida",
    email: null as string | null,
    horarioAtendimento: "Informação a ser inserida",
    portalOficialAgu: null as string | null,
  },
  ultimaAtualizacaoPortal: null as string | null,
};
