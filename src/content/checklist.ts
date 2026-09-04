import type { ChecklistGrupo } from "@/types/content";

// Reconstituído a partir da Seção 9 do edital e do Anexo III (Lista de
// Verificação Documental). Os documentos de regularidade fiscal/Cadin
// aparecem em grupo à parte porque, conforme item 9.2 e 9.10, só são
// exigidos no momento do pedido de autorização — não na habilitação inicial.

export const AVISO_CHECKLIST =
  "Este checklist reproduz a estrutura da Lista de Verificação Documental (Anexo III) da minuta do edital. Em caso de divergência, prevalecem o edital publicado, seus anexos e eventuais retificações.";

export const CHECKLIST: ChecklistGrupo[] = [
  {
    id: "formularios-requerimento",
    titulo: "Formulários e declarações do requerimento",
    itens: [
      {
        id: "anexo-ii-preenchido",
        titulo: "Anexo II — Formulário de Requerimento de Habilitação Institucional",
        descricao: "Identificação da fundação, do representante legal e da ICT de origem, situação de registro/credenciamento e áreas de atuação pretendidas.",
        obrigatorio: true,
        quemEmite: "Representante legal da fundação",
        exigeValidadeOuAssinatura: "Assinatura eletrônica do representante legal",
      },
      {
        id: "anexo-iii-preenchido",
        titulo: "Anexo III — Lista de Verificação Documental",
        descricao: "Checklist oficial que acompanha o requerimento, indicando quais documentos foram apresentados ou não se aplicam.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
      {
        id: "anexo-iv-preenchido",
        titulo: "Anexo IV — Declaração de Anuência da ICT de Origem",
        descricao: "Anuência da instituição à qual a fundação está originalmente vinculada.",
        obrigatorio: false,
        quemEmite: "Autoridade competente da ICT de origem",
        alertaComum: "Exigível apenas quando a fundação possui ICT de origem distinta da ICT-AGU.",
      },
      {
        id: "anexo-v-preenchido",
        titulo: "Anexo V — Declaração de Inexistência de Impedimentos e de Compromisso com a Integridade",
        descricao: "Declaração sob as penas da lei sobre a inexistência das hipóteses de impedimento da Seção 7 e compromisso com integridade.",
        obrigatorio: true,
        quemEmite: "Representante legal da fundação",
        exigeValidadeOuAssinatura: "Assinatura eletrônica do representante legal",
      },
      {
        id: "anexo-vi-preenchido",
        titulo: "Anexo VI — Formulário de Capacidade Técnica e Operacional",
        descricao: "Descrição detalhada de estrutura física, quadro de pessoal, capacidade tecnológica, gestão de recursos e proteção de dados.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
      {
        id: "anexo-vii-preenchido",
        titulo: "Anexo VII — Relação de Projetos Executados",
        descricao: "Relação dos projetos mais relevantes executados nos últimos cinco anos, com documentos comprobatórios.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
    ],
  },
  {
    id: "habilitacao-juridica",
    titulo: "Habilitação jurídica e institucional (item 9.1)",
    itens: [
      {
        id: "ato-constitutivo-estatuto",
        titulo: "Ato constitutivo, estatuto e alterações vigentes",
        descricao: "Estatuto social da fundação, com todas as alterações em vigor.",
        obrigatorio: true,
        quemEmite: "Cartório de registro civil de pessoas jurídicas",
      },
      {
        id: "ata-eleicao-dirigentes",
        titulo: "Ata de eleição ou designação dos dirigentes",
        descricao: "Documento que comprova a atual diretoria da fundação.",
        obrigatorio: true,
        quemEmite: "Assembleia/conselho da fundação",
      },
      {
        id: "cnpj",
        titulo: "Comprovante de inscrição no CNPJ",
        descricao: "Cartão CNPJ atualizado.",
        obrigatorio: true,
        quemEmite: "Receita Federal do Brasil",
      },
      {
        id: "poderes-representante",
        titulo: "Documento de identificação e comprovação dos poderes do representante legal",
        descricao: "Identificação do signatário e ato que lhe confere poderes de representação.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
      {
        id: "organograma-orgaos",
        titulo: "Organograma e identificação dos órgãos deliberativos, consultivos, fiscais e executivos",
        descricao: "Estrutura organizacional da fundação e regulamentos internos de gestão de projetos.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
      {
        id: "registro-credenciamento-mec-mcti",
        titulo: "Comprovante de registro e credenciamento vigente perante MEC e MCTI",
        descricao: "Ato conjunto dos Ministérios da Educação e da Ciência, Tecnologia e Inovação que reconhece a entidade como fundação de apoio, com eventuais atos de renovação.",
        obrigatorio: true,
        exigeValidadeOuAssinatura: "Atenção à vigência do ato de credenciamento",
        alertaComum: "Credenciamento vencido é um dos motivos mais comuns de pendência.",
      },
      {
        id: "autorizacao-atuar-ict-agu",
        titulo: "Autorização para atuar junto à ICT-AGU (ou documentos para obtê-la)",
        descricao: "Autorização ministerial vigente, comprovante de pedido em tramitação, ou compromisso de obtê-la após a habilitação.",
        obrigatorio: false,
        alertaComum: "A habilitação pode ser registrada como \"deferida, pendente de autorização\" quando este item ainda estiver em andamento.",
      },
    ],
  },
  {
    id: "solidez-financeira",
    titulo: "Solidez financeira e patrimonial (item 9.3)",
    itens: [
      {
        id: "balanco-patrimonial",
        titulo: "Balanço patrimonial e demonstração do resultado do exercício",
        descricao: "Demonstrações contábeis, notas explicativas e relatório anual de gestão.",
        obrigatorio: true,
        quemEmite: "Contabilidade da fundação",
      },
      {
        id: "parecer-conselho-fiscal",
        titulo: "Parecer do conselho fiscal (e de auditoria independente, quando exigível)",
        descricao: "Pareceres sobre as contas da fundação.",
        obrigatorio: true,
        quemEmite: "Conselho fiscal / auditoria independente",
      },
      {
        id: "relacao-projetos-sob-gestao",
        titulo: "Relação consolidada dos projetos sob gestão",
        descricao: "Inclui declaração sobre passivos, contingências e capacidade de administrar novos projetos sem comprometer os atuais.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
    ],
  },
  {
    id: "governanca-integridade",
    titulo: "Governança, integridade e controles internos (item 9.4)",
    itens: [
      {
        id: "politica-integridade",
        titulo: "Política ou programa de integridade e código de ética",
        descricao: "Inclui política de prevenção de conflitos de interesses, mecanismos de denúncia e identificação do responsável pela integridade.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
      {
        id: "controles-internos",
        titulo: "Estrutura de auditoria, controles internos e política de gestão de riscos",
        descricao: "Procedimentos de segregação de funções, regras de contratação e política de transparência.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
    ],
  },
  {
    id: "capacidade-tecnica-tecnologica",
    titulo: "Capacidade técnica, operacional e tecnológica (itens 9.5 e 9.6)",
    itens: [
      {
        id: "estrutura-fisica-pessoal",
        titulo: "Estrutura física, tecnológica e quadro de pessoal permanente",
        descricao: "Evidências de qualificação da equipe e experiência em gestão de projetos de CT&I e com a Administração Pública.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
      {
        id: "sistema-eletronico-gestao",
        titulo: "Sistema eletrônico de gestão e acompanhamento de projetos",
        descricao: "Capacidade de registrar projetos, individualizar recursos, gerar relatórios, manter auditoria e proteger dados pessoais.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
      },
    ],
  },
  {
    id: "experiencia-protecao-dados",
    titulo: "Experiência anterior e proteção de dados (itens 9.7 e Anexo XIII)",
    itens: [
      {
        id: "experiencia-cinco-anos",
        titulo: "Relação de projetos relevantes dos últimos cinco anos (Anexo VII)",
        descricao: "Instituição apoiada, objeto, período, valor gerido, resultados e situação da prestação de contas.",
        obrigatorio: true,
        quemEmite: "Fundação interessada",
        alertaComum: "A comissão pode considerar projetos mais antigos quando relevantes.",
      },
      {
        id: "declaracao-protecao-dados",
        titulo: "Anexo XIII — Declaração de Proteção de Dados e Segurança da Informação",
        descricao: "Compromisso com a legislação de proteção de dados e as normas de segurança da AGU.",
        obrigatorio: true,
        quemEmite: "Representante legal da fundação",
      },
    ],
  },
  {
    id: "regularidade-fiscal-fase-posterior",
    titulo: "Regularidade fiscal, trabalhista e Cadin — fase posterior (item 9.2)",
    itens: [
      {
        id: "certidoes-negativas-posterior",
        titulo: "Certidões federais, FGTS, trabalhistas, estaduais/municipais e Cadin",
        descricao: "Não são exigidas na apresentação do requerimento inicial: só precisam ser comprovadas no momento do pedido de autorização (§1º do art. 3º do Decreto nº 7.423/2010), com nova verificação a cada instrumento jurídico celebrado.",
        obrigatorio: false,
        alertaComum: "Não é necessário reunir estas certidões para protocolar o requerimento de habilitação.",
      },
    ],
  },
];
