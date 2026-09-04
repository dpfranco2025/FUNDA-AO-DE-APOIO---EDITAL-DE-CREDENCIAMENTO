export interface TopicoPosCredenciamento {
  id: string;
  titulo: string;
  conteudo: string;
}

// Reconstituído a partir das Seções 16 a 25 da minuta do edital.

export const TOPICOS_POS_CREDENCIAMENTO: TopicoPosCredenciamento[] = [
  {
    id: "natureza-limites",
    titulo: "Natureza e limites da habilitação",
    conteudo:
      "A habilitação institucional é um procedimento administrativo prévio de avaliação da capacidade da fundação. Ela não se confunde com o registro e o credenciamento concedidos pelo MEC e pelo MCTI, não substitui a autorização ministerial exigível para fundação vinculada a outra ICT, não transfere à fundação competências legais da AGU e não autoriza o início de qualquer atividade antes da celebração do instrumento jurídico correspondente.",
  },
  {
    id: "nao-contratacao-automatica",
    titulo: "A habilitação não significa contratação automática",
    conteudo:
      "A habilitação não gera direito subjetivo à contratação, à celebração de convênio, parceria ou outro instrumento jurídico, nem sua prorrogação. Não assegura exclusividade, preferência automática em seleções futuras, nem garante volume mínimo de projetos, atividades, receitas ou recursos. A fundação só poderá prestar apoio à AGU após deliberação favorável do CG-AGU, publicação do ato de registro/credenciamento ou autorização ministerial (quando exigível), inclusão no Cadastro de Fundações de Apoio da ICT-AGU e celebração de instrumento jurídico com objeto específico, prazo determinado e plano de trabalho aprovado.",
  },
  {
    id: "cadastro-vigencia",
    titulo: "Cadastro de Fundações de Apoio da ICT-AGU e vigência",
    conteudo:
      "As fundações habilitadas (e autorizadas, quando exigível) são incluídas no Cadastro de Fundações de Apoio da ICT-AGU, formalizado por certificado (Anexo IX). O cadastro registra perfil institucional, especialidades, abrangência territorial, condicionantes e situação cadastral (habilitada e autorizada; habilitada, pendente de autorização; habilitada com condicionantes; suspensa; em renovação; desabilitada; ou excluída). A habilitação tem vigência de até 5 anos, podendo o CG-AGU fixar prazo inferior conforme riscos ou condicionantes.",
  },
  {
    id: "atualizacao-anual",
    titulo: "Atualização anual",
    conteudo:
      "A fundação deve apresentar atualização anual (Anexo X) com relatório de gestão, manifestação de desempenho, demonstrações contábeis, atos ministeriais atualizados, certidões de regularidade e indicadores de desempenho. A ausência de atualização gera notificação para saneamento em 10 dias úteis; persistindo a omissão, a habilitação pode ser suspensa.",
  },
  {
    id: "selecao-por-projeto",
    titulo: "Seleção para programas ou projetos específicos",
    conteudo:
      "A habilitação geral é seguida, quando necessário, de procedimento próprio de escolha da fundação mais adequada a um programa ou projeto, considerando aderência ao objeto, experiência temática, capacidade operacional, disponibilidade de equipe, abrangência territorial, histórico de desempenho e qualidade da proposta técnica (Anexo XII), entre outros critérios da matriz do Anexo XI. Conforme a complexidade, a seleção pode ocorrer por escolha direta motivada, consulta simplificada, seleção técnica estruturada ou chamamento específico. A menor despesa operacional não determina, isoladamente, a escolha.",
  },
  {
    id: "instrumentos-juridicos",
    titulo: "Celebração dos instrumentos jurídicos",
    conteudo:
      "É vedada a celebração de instrumento com objeto genérico, sem prazo determinado, sem plano de trabalho, sem metas/entregas/indicadores, sem definição de responsabilidades, sem previsão de despesas operacionais ou sem mecanismos de prestação de contas. O plano de trabalho deve conter, no mínimo: objeto, justificativa, objetivos, metas, etapas, entregas, indicadores, cronograma, orçamento detalhado, fontes de recursos, equipe, governança, riscos e medidas de mitigação, regras sobre propriedade intelectual, proteção de dados, prestação de contas e critérios de encerramento.",
  },
  {
    id: "obrigacoes-fundacao",
    titulo: "Obrigações da fundação habilitada",
    conteudo:
      "A fundação deve manter as condições de habilitação, observar a legislação e as normas da AGU, executar os projetos conforme os instrumentos celebrados, manter segregação financeira e contábil, disponibilizar informações atualizadas, assegurar acesso aos sistemas, observar integridade e transparência, proteger dados e informações, comunicar irregularidades e incidentes, prestar contas, manter documentos, permitir auditorias, comunicar fatos supervenientes, evitar conflitos de interesses e manter pessoal qualificado.",
  },
  {
    id: "monitoramento-desempenho",
    titulo: "Monitoramento e avaliação de desempenho",
    conteudo:
      "A atuação da fundação é monitorada continuamente, considerando cumprimento de prazos, execução física e financeira, qualidade dos relatórios, transparência, gestão de riscos, regularidade das contratações, prestação de contas e resultados. Os resultados integram o cadastro e podem influenciar renovação, seleção para novos projetos, imposição de condicionantes, suspensão ou desabilitação.",
  },
  {
    id: "integridade-transparencia",
    titulo: "Integridade, transparência e conflitos de interesses",
    conteudo:
      "A fundação deve adotar medidas para prevenir, detectar e corrigir irregularidades, comunicando imediatamente fraude, desvio, conflito de interesses, favorecimento, irregularidade financeira ou sanção aplicada por órgão público. Deve disponibilizar informações públicas sobre os projetos, ressalvadas as hipóteses legais de sigilo e segredo industrial.",
  },
  {
    id: "protecao-dados",
    titulo: "Proteção de dados e segurança da informação",
    conteudo:
      "A fundação deve observar a legislação de proteção de dados e as normas de segurança da AGU, firmando declaração específica (Anexo XIII). O acesso a dados institucionais é limitado ao necessário para a execução do projeto, incidentes devem ser comunicados imediatamente à AGU, e o uso de infraestrutura tecnológica da AGU depende de avaliação prévia de riscos.",
  },
  {
    id: "suspensao-desabilitacao",
    titulo: "Suspensão, desabilitação e exclusão",
    conteudo:
      "A habilitação pode ser suspensa em caso de perda temporária de requisito, ausência de atualização documental, risco relevante, irregularidade em apuração, descumprimento de condicionante ou desempenho insatisfatório. A desabilitação ou exclusão pode ocorrer em casos de fraude, falsidade, irregularidade grave, rejeição de contas por irregularidade insanável ou descumprimento reiterado — sempre assegurados contraditório e ampla defesa. A exclusão não afasta a obrigação de concluir prestações de contas, devolver recursos e reparar danos.",
  },
];
