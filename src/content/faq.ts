import type { FaqCategoriaContent, FaqItemContent } from "@/types/content";

export const FAQ_CATEGORIAS: FaqCategoriaContent[] = [
  { id: "participacao", titulo: "Participação" },
  { id: "requisitos", titulo: "Requisitos" },
  { id: "documentacao", titulo: "Documentação" },
  { id: "formularios", titulo: "Formulários" },
  { id: "protocolo", titulo: "Protocolo" },
  { id: "analise", titulo: "Análise" },
  { id: "diligencias", titulo: "Diligências" },
  { id: "recursos", titulo: "Recursos" },
  { id: "resultado", titulo: "Resultado" },
  { id: "pos-credenciamento", titulo: "Atuação após a habilitação" },
  { id: "suporte", titulo: "Suporte técnico" },
];

// Respostas fundamentadas na minuta do edital fornecida pela equipe LABORI.

export const FAQ: FaqItemContent[] = [
  {
    id: "quem-pode-participar",
    categoria: "participacao",
    pergunta: "Quais fundações podem participar do chamamento?",
    resposta:
      "Podem participar fundações de direito privado, sem fins lucrativos, constituídas para apoiar projetos de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e estímulo à inovação, que possuam registro e credenciamento vigentes perante o MEC e o MCTI, capacidade técnica e operacional compatível, solidez financeira e patrimonial, mecanismos de governança e integridade, e que não se enquadrem em nenhuma das hipóteses de impedimento previstas na Seção 7 do edital.",
  },
  {
    id: "prazo-para-participar",
    categoria: "participacao",
    pergunta: "Existe um prazo final para apresentar o requerimento?",
    resposta:
      "Não. O chamamento é permanente: o edital fica aberto por prazo indeterminado e os requerimentos podem ser apresentados a qualquer tempo, de forma contínua e ininterrupta. A AGU pode organizar a análise em ciclos trimestrais de natureza instrutória, mas isso não limita quando o requerimento pode ser protocolado.",
  },
  {
    id: "credenciamento-garante-contrato",
    categoria: "participacao",
    pergunta: "A habilitação garante a contratação da fundação?",
    resposta:
      "Não. A habilitação institucional não gera direito subjetivo à contratação, convênio, parceria ou qualquer outro instrumento jurídico, não assegura exclusividade nem volume mínimo de projetos, receitas ou recursos, e não vincula a AGU à utilização dos serviços da fundação. A atuação em projetos específicos depende de seleção própria e da celebração de instrumento jurídico com plano de trabalho aprovado.",
  },
  {
    id: "quais-documentos-exigidos",
    categoria: "documentacao",
    pergunta: "Quais documentos são exigidos para o requerimento?",
    resposta:
      "O requerimento é instruído com os Anexos II a VII (formulário de requerimento, lista de verificação documental, declaração de anuência da ICT de origem quando aplicável, declaração de inexistência de impedimentos, formulário de capacidade técnica e operacional e relação de projetos executados), além de documentos de habilitação jurídica, solidez financeira, governança/integridade e capacidade tecnológica. A relação completa está na Seção 9 do edital e no checklist desta plataforma.",
  },
  {
    id: "certidoes-fiscais-quando",
    categoria: "documentacao",
    pergunta: "Preciso apresentar certidões de regularidade fiscal já no requerimento?",
    resposta:
      "Não. As certidões de regularidade fiscal, trabalhista e a comprovação de regularidade perante o Cadin não são exigidas na apresentação do requerimento inicial — apenas no momento do pedido de autorização para atuar junto à ICT-AGU, com nova verificação a cada instrumento jurídico celebrado.",
  },
  {
    id: "onde-baixar-formularios",
    categoria: "formularios",
    pergunta: "Onde encontro os formulários e anexos oficiais?",
    resposta:
      "Todos os anexos citados no edital (I a XV) estão listados na Biblioteca de Documentos. O Anexo I (áreas e atividades) já pode ser consultado na íntegra nesta plataforma; os demais anexos ainda serão disponibilizados para preenchimento pela AGU.",
  },
  {
    id: "como-protocolar",
    categoria: "protocolo",
    pergunta: "Como devo protocolar o requerimento de habilitação?",
    resposta:
      "O requerimento deve ser apresentado pelo representante legal da fundação por meio do canal oficial que ainda será definido pela AGU (por exemplo, SAPIENS ou protocolo digital). Consulte a página de Atendimento para as informações mais atualizadas.",
  },
  {
    id: "quanto-tempo-analise",
    categoria: "analise",
    pergunta: "Quanto tempo dura a análise do requerimento?",
    resposta:
      "O edital não fixa um prazo total de análise. A AGU pode organizar a apreciação em ciclos trimestrais de natureza instrutória, sem prejuízo da ordem de apresentação e do recebimento contínuo de novos requerimentos. Diligências, quando existirem, têm prazo de resposta de 10 dias úteis.",
  },
  {
    id: "quem-analisa-requerimento",
    categoria: "analise",
    pergunta: "Quem analisa o requerimento de habilitação?",
    resposta:
      "Uma comissão multi-institucional, coordenada pelo LABORI e composta por representantes de diversas unidades da AGU (SGCS, SGE, SGA, SCI, PGF, PGU, CGU, SGCT, EAGU, CGAU e SENOR), verifica a documentação, promove diligências e elabora relatório técnico. O NIT-AGU revisa esse relatório e emite manifestação conclusiva, submetendo o pedido à deliberação final do Comitê de Governança da AGU (CG-AGU).",
  },
  {
    id: "o-que-e-diligencia",
    categoria: "diligencias",
    pergunta: "O que acontece se a fundação for notificada para diligência?",
    resposta:
      "A fundação tem o prazo de 10 dias úteis, prorrogável mediante justificativa aceita pela comissão, para atender à diligência. A ausência de resposta pode levar ao arquivamento ou indeferimento do pedido. A diligência não pode ser usada para criar uma condição que não existia na data do requerimento.",
  },
  {
    id: "cabe-recurso",
    categoria: "recursos",
    pergunta: "É possível recorrer do resultado preliminar?",
    resposta:
      "Sim. Cabe recurso, sem efeito suspensivo, no prazo de 10 dias úteis contados da publicação do resultado preliminar. O recurso deve ser fundamentado e assinado pelo representante legal; se a comissão não reconsiderar sua manifestação, o recurso é encaminhado ao CG-AGU para decisão final.",
  },
  {
    id: "onde-ver-resultado",
    categoria: "resultado",
    pergunta: "Onde posso consultar o resultado da habilitação?",
    resposta:
      "Os resultados preliminar e definitivo são publicados no sítio eletrônico oficial da Advocacia-Geral da União.",
  },
  {
    id: "apos-credenciamento",
    categoria: "pos-credenciamento",
    pergunta: "O que muda para a fundação após ser habilitada?",
    resposta:
      "A fundação passa a integrar o Cadastro de Fundações de Apoio da ICT-AGU, com vigência de até 5 anos e obrigação de atualização anual. Isso não significa contratação: a atuação em projetos específicos depende de seleção própria e da celebração de um instrumento jurídico com plano de trabalho aprovado. Mais detalhes estão na página Após a habilitação.",
  },
  {
    id: "vigencia-habilitacao",
    categoria: "pos-credenciamento",
    pergunta: "Por quanto tempo a habilitação é válida?",
    resposta:
      "A habilitação tem vigência de até 5 anos, observada a validade do registro, credenciamento ou autorização ministerial da fundação. O CG-AGU pode fixar prazo inferior conforme riscos identificados, condicionantes ou necessidade de reavaliação. A fundação deve apresentar atualização anual (Anexo X) para manter a habilitação vigente.",
  },
  {
    id: "problema-tecnico",
    categoria: "suporte",
    pergunta: "Encontrei um problema técnico na plataforma. O que faço?",
    resposta:
      "Utilize o canal de atendimento indicado na página Atendimento para relatar problemas técnicos.",
  },
];
