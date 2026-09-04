// Texto integral da minuta do edital, organizado por Bloco/Seção,
// extraído do documento "Edital FA Limpo" fornecido pela equipe LABORI.
// Trata-se de MINUTA EM ELABORAÇÃO — contém lacunas (ex.: número do
// edital, número do processo, data) e refletiu a redação final já
// incorporando as contribuições supervenientes da PGF na Seção 5.
// Não é a versão oficialmente publicada.

export interface SecaoEdital {
  id: string;
  titulo: string;
  paragrafos: string[];
}

export interface BlocoEdital {
  id: string;
  titulo: string;
  secoes: SecaoEdital[];
}

export const EDITAL_TEXTO: BlocoEdital[] = [
  {
    id: "bloco-1",
    titulo: "Bloco 1 — Fundamentos, objeto e definições",
    secoes: [
      {
        id: "preambulo",
        titulo: "Preâmbulo",
        paragrafos: [
          "EDITAL DE CHAMAMENTO PÚBLICO PERMANENTE Nº ___/2026",
          "Habilitação institucional de fundações de apoio interessadas em atuar junto à Instituição Científica, Tecnológica e de Inovação da Advocacia-Geral da União — ICT-AGU.",
          "O ADVOGADO-GERAL DA UNIÃO, no exercício de suas atribuições previstas na Lei Complementar nº 73, de 10 de fevereiro de 1993, e no disposto na Lei nº 8.958, de 20 de dezembro de 1994, na Lei nº 10.973, de 2 de dezembro de 2004, no Decreto nº 7.423, de 31 de dezembro de 2010, no Decreto nº 8.241, de 21 de maio de 2014, no Decreto nº 9.283, de 7 de fevereiro de 2018, na Portaria Normativa AGU nº 209, de 3 de março de 2026, e na Portaria Normativa AGU nº 221, de 18 de maio de 2026, torna público o presente Edital de Chamamento Público Permanente para Habilitação Institucional de Fundações de Apoio Interessadas em Atuar junto à ICT-AGU.",
          "O procedimento será processado no âmbito do Processo Administrativo NUP nº [NÚMERO DO PROCESSO], observadas as condições estabelecidas neste Edital e em seus anexos.",
        ],
      },
      {
        id: "secao-1",
        titulo: "Seção 1 — Do contexto institucional",
        paragrafos: [
          "1.1. A Advocacia-Geral da União, na condição de Instituição Científica, Tecnológica e de Inovação — ICT-AGU, desenvolve atividades de pesquisa, desenvolvimento institucional, científico e tecnológico e de estímulo à inovação, com a finalidade de promover eficiência, segurança jurídica e aperfeiçoamento contínuo no exercício de suas funções institucionais.",
          "1.2. A Política de Inovação da Advocacia-Geral da União é implementada e executada com o apoio técnico do Núcleo de Inovação Tecnológica da Advocacia-Geral da União — NIT-AGU, cujas atividades são exercidas pelo Laboratório de Inovação da Advocacia-Geral da União — LABORI.",
          "1.3. A atuação da ICT-AGU compreende, entre outras iniciativas: pesquisa e desenvolvimento jurídico-tecnológico; transformação do conhecimento em produtos, serviços, processos e soluções úteis às funções institucionais da AGU; promoção de soluções jurídicas inovadoras e sustentáveis; transformação digital; gestão e proteção da propriedade intelectual; formação de alianças estratégicas e parcerias de pesquisa, desenvolvimento e inovação; capacitação de pesquisadores, membros, servidores, colaboradores e parceiros; captação, gestão e aplicação de recursos destinados a projetos de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e estímulo à inovação; e cooperação com ICTs, universidades, entidades públicas, empresas, startups, agências de fomento e organismos nacionais e internacionais.",
          "1.4. As fundações de apoio poderão prestar apoio administrativo, financeiro, logístico e operacional aos projetos da ICT-AGU, observados o disposto no art. 2º do Decreto nº 7.423, de 31 de dezembro de 2010, e demais legislação de regência, os instrumentos jurídicos, planos de trabalho, controles e mecanismos de governança aplicáveis a cada caso.",
        ],
      },
      {
        id: "secao-2",
        titulo: "Seção 2 — Do objeto",
        paragrafos: [
          "2.1. Este Edital tem por objeto a habilitação institucional de fundações de apoio interessadas em atuar junto à ICT-AGU, prestando apoio a programas e projetos de ensino, pesquisa, extensão, desenvolvimento institucional, desenvolvimento científico e tecnológico, estímulo à inovação e outras atividades compatíveis com a Política de Inovação da AGU e com a legislação aplicável.",
          "2.2. O apoio poderá compreender, conforme as características do programa ou projeto: captação, recebimento, gestão e aplicação de recursos financeiros de origem pública ou privada; gestão administrativa e financeira; contratação e pagamento de serviços, bens, obras, equipamentos e insumos; gestão de equipes e colaboradores; concessão e pagamento de bolsas, quando admitidos; realização de aquisições, contratações e importações; apoio à prestação de contas; gestão de eventos, publicações, capacitações, missões e intercâmbios; apoio à proteção da propriedade intelectual e à transferência de tecnologia; desenvolvimento, implantação e manutenção de soluções tecnológicas; administração de receitas decorrentes de atividades de pesquisa, desenvolvimento, inovação e prestação de serviços técnicos especializados; apoio à celebração e execução de parcerias nacionais e internacionais; e outras atividades previstas no respectivo instrumento jurídico e no plano de trabalho.",
          "2.3. As áreas e atividades passíveis de apoio encontram-se descritas, de maneira exemplificativa, no Anexo I deste Edital.",
          "2.4. O presente Edital tem por objeto a habilitação das fundações de apoio que manifestarem interesse em obter a autorização do grupo a que se refere o § 1º do art. 3º do Decreto nº 7.423, de 31 de dezembro de 2010, para apoiar a Advocacia-Geral da União na sua missão institucional enquanto ICT.",
          "2.5. A habilitação objeto deste Edital corresponde ao procedimento interno pelo qual a Advocacia-Geral da União avaliará a capacidade jurídica, técnica, operacional, financeira, tecnológica, gerencial e institucional da fundação; não acarretará a seleção imediata de fundação para projeto determinado.",
          "2.6. As fundações de apoio habilitadas neste Edital e autorizadas na forma do § 1º do art. 3º do Decreto nº 7.423, de 2010, e da Portaria Interministerial MEC/MCTI nº 191, de 13 de março de 2012, poderão receber convocação específica para a formalização de vínculo institucional, contratual ou convenial com a AGU para a prestação de apoio fundacional em projeto específico, mediante procedimento próprio.",
        ],
      },
      {
        id: "secao-3",
        titulo: "Seção 3 — Das definições",
        paragrafos: [
          "3.1. Para os fins deste Edital, considera-se: ICT-AGU — a Instituição Científica, Tecnológica e de Inovação da Advocacia-Geral da União; NIT-AGU — o Núcleo de Inovação Tecnológica da AGU, cujas atividades são exercidas pelo LABORI; LABORI — o Laboratório de Inovação da Advocacia-Geral da União; CG-AGU — o Comitê de Governança da Advocacia-Geral da União; fundação de apoio — fundação de direito privado, sem fins lucrativos, constituída para apoiar projetos de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e estímulo à inovação de interesse das ICTs, registrada e credenciada na forma da legislação aplicável; ICT de origem — a instituição à qual a fundação se encontra originalmente vinculada ou credenciada.",
          "3.1 (cont.) habilitação institucional — procedimento interno pelo qual a AGU avalia a capacidade jurídica, técnica, operacional, financeira, tecnológica, gerencial e institucional da fundação; credenciamento ministerial — ato conjunto dos Ministérios da Educação e da Ciência, Tecnologia e Inovação que reconhece a entidade como fundação de apoio; autorização ministerial — ato que permite à fundação já registrada e credenciada prestar apoio a ICT diferente daquela à qual se encontra originalmente vinculada; Cadastro de Fundações de Apoio da ICT-AGU — base institucional que reúne as fundações habilitadas e, quando exigível, credenciadas ou autorizadas a prestar apoio à AGU.",
          "3.1 (cont.) perfil institucional — conjunto de informações que identifica as competências, especialidades, experiências, capacidade operacional, abrangência territorial e características da fundação habilitada; programa — conjunto articulado de projetos, ações e iniciativas voltadas a objetivos institucionais comuns; projeto — empreendimento temporário, com objeto, objetivos, metas, entregas, indicadores, cronograma, recursos e responsabilidades definidos em plano de trabalho; seleção específica — procedimento destinado à escolha de fundação habilitada para apoiar programa ou projeto determinado; despesas operacionais e administrativas — custos necessários à estruturação, gestão e execução do apoio prestado pela fundação, desde que previstos, demonstrados e aprovados no plano de trabalho; comissão — comissão responsável pelo processamento e pela avaliação dos pedidos apresentados no âmbito deste Edital.",
        ],
      },
      {
        id: "secao-4",
        titulo: "Seção 4 — Da natureza e dos efeitos da habilitação",
        paragrafos: [
          "4.1. A habilitação institucional constitui procedimento administrativo prévio de avaliação da capacidade das fundações interessadas em atuar junto à ICT-AGU.",
          "4.2. A habilitação concedida pela Advocacia-Geral da União: não se confunde com o registro e o credenciamento concedidos pelo MEC e pelo MCTI; não substitui a autorização ministerial necessária para que fundação vinculada a outra ICT preste apoio à ICT-AGU; não gera direito subjetivo à contratação, à celebração de convênio, parceria ou outro instrumento jurídico, nem sua prorrogação; não assegura exclusividade; não garante volume mínimo de projetos, atividades, receitas ou recursos; não implica preferência automática em seleções futuras; não vincula a AGU à utilização dos serviços da entidade; não impede a habilitação de outras fundações; não dispensa a análise jurídica, técnica, orçamentária, financeira e de governança exigida para cada instrumento; não transfere à fundação competências legais ou institucionais da AGU; e não autoriza o início de atividades antes da celebração do instrumento jurídico correspondente.",
          "4.3. A fundação somente poderá prestar apoio à Advocacia-Geral da União após: a deliberação favorável do CG-AGU; a publicação do ato de registro e credenciamento ou de autorização ministerial para atuar junto à ICT-AGU, quando exigível; sua inclusão no Cadastro de Fundações de Apoio da ICT-AGU; e a celebração de instrumento jurídico com objeto específico, prazo determinado e plano de trabalho aprovado.",
          "4.4. A habilitação terá caráter institucional e poderá reconhecer diferentes perfis, especialidades e níveis de capacidade da fundação.",
          "4.5. A inexistência de determinada especialidade ou capacidade não impedirá necessariamente a habilitação geral da fundação, mas poderá restringir sua participação em programas ou projetos que demandem tal requisito.",
        ],
      },
    ],
  },
  {
    id: "bloco-2",
    titulo: "Bloco 2 — Participação, impedimentos e habilitação",
    secoes: [
      {
        id: "secao-5",
        titulo: "Seção 5 — Do funcionamento permanente do chamamento",
        paragrafos: [
          "5.1. O presente Edital permanecerá aberto por prazo indeterminado, enquanto vigente, permitindo a apresentação de requerimentos a qualquer tempo.",
          "5.2. A Advocacia-Geral da União poderá organizar a análise dos requerimentos em ciclos trimestrais, de natureza instrutória, sem prejuízo da ordem de apresentação e do recebimento contínuo e ininterrupto de requerimentos.",
          "5.3. O cronograma inicial consta do Anexo XV, podendo ser atualizado mediante publicação no sítio eletrônico da Advocacia-Geral da União.",
          "5.4. A atualização do cronograma não implicará alteração das condições materiais de participação.",
          "5.5. A Advocacia-Geral da União poderá, mediante decisão fundamentada: suspender temporariamente o recebimento de novos requerimentos; estabelecer períodos específicos para análise; revisar requisitos e documentos; substituir ou revogar o Edital; ou publicar novo chamamento.",
          "5.6. As alterações relevantes, bem como quaisquer revisões promovidas em requisitos e documentos para habilitação, serão divulgadas pelos mesmos meios utilizados para publicação deste Edital.",
          "5.7. Publicado o Edital ou retomado o recebimento de novos requerimentos, a Advocacia-Geral da União promoverá sua divulgação ativa, mediante: publicação no sítio eletrônico oficial da AGU e no Portal Nacional de Contratações Públicas; encaminhamento por ofício circular às Instituições Federais de Ensino Superior e às demais ICTs federais, com solicitação de que dele deem ciência às fundações de apoio que as apoiem; encaminhamento às Procuradorias Federais junto às Instituições Federais de Ensino Superior e às demais unidades da Procuradoria-Geral Federal; comunicação ao CONFIES e às demais entidades representativas do setor; e comunicação ao Ministério da Educação e ao Ministério da Ciência, Tecnologia e Inovação.",
          "5.8. A divulgação por ofício circular às IFES e demais ICTs federais será renovada anualmente, enquanto vigente o Edital.",
          "5.9. A comprovação das comunicações será juntada aos autos do processo administrativo correspondente.",
        ],
      },
      {
        id: "secao-6",
        titulo: "Seção 6 — Das condições de participação",
        paragrafos: [
          "6.1. Poderão participar deste chamamento as fundações que: sejam pessoas jurídicas de direito privado, sem fins lucrativos; tenham sido constituídas para apoiar projetos de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e estímulo à inovação; possuam registro e credenciamento vigentes perante o MEC e o MCTI; apresentem anuência da ICT à qual estejam vinculadas, quando aplicável; apresentem ou se comprometam a obter a autorização necessária para atuar junto à ICT-AGU; possuam capacidade técnica e operacional compatível com as atividades previstas neste Edital; demonstrem solidez financeira e patrimonial; possuam mecanismos de governança, integridade, transparência, gestão de riscos e controles internos; possuam experiência na gestão administrativa e financeira de projetos; disponham de sistema eletrônico de gestão e acompanhamento de projetos; possuam estrutura para atendimento a gestores, coordenadores, pesquisadores e demais participantes; demonstrem capacidade de prestar contas dos recursos geridos; aceitem integralmente as condições deste Edital; e não se enquadrem em qualquer das hipóteses de impedimento.",
          "6.2. Poderão ser habilitadas fundações com atuação nacional, regional ou especializada, desde que sua abrangência e capacidades sejam claramente identificadas no perfil institucional.",
          "6.3. Não será exigida atuação nacional como condição geral de habilitação, salvo quando indispensável ao perfil ou à categoria para a qual a fundação pretenda ser reconhecida.",
          "6.4. A fundação poderá indicar uma ou mais áreas de especialização, sem prejuízo da avaliação de outras competências identificadas durante o procedimento.",
          "6.5. A regularidade fiscal e trabalhista e perante o Cadin não constitui condição para participação ou habilitação neste chamamento, observado o momento de comprovação previsto na subcláusula 9.10 (formalização do pedido de autorização).",
        ],
      },
      {
        id: "secao-7",
        titulo: "Seção 7 — Dos impedimentos",
        paragrafos: [
          "7.1. Não poderá participar ou permanecer habilitada a fundação que: esteja com registro, credenciamento ou autorização suspensos, vencidos ou cancelados; esteja impedida de contratar ou celebrar parcerias com a Administração Pública; tenha sido declarada inidônea; esteja submetida a dissolução, liquidação ou extinção; apresente situação fiscal, trabalhista ou previdenciária irregular não sanada no prazo concedido; tenha contas rejeitadas definitivamente em razão de irregularidade grave, salvo reparação demonstrada; tenha praticado fraude, falsidade documental ou omissão relevante em procedimento administrativo; tenha descumprido obrigações assumidas em projeto anterior de forma grave ou reiterada; não possua mecanismos mínimos de governança e integridade; mantenha conflito de interesses incompatível com a atuação junto à AGU; possua administrador ou dirigente enquadrado em hipótese legal de impedimento; utilize ou pretenda utilizar recursos em finalidade diferente da prevista no projeto; não assegure a segregação contábil e financeira dos recursos; não permita o acesso da AGU e dos órgãos de controle às informações e documentos relacionados aos projetos; tenha praticado tratamento ilícito ou inseguro de dados pessoais sem medidas corretivas; ou se enquadre em outra vedação prevista na legislação.",
          "7.2. A fundação não poderá utilizar recursos dos projetos para: finalidade estranha ao objeto aprovado; pagamento de despesas não previstas ou não autorizadas; contratação de pessoas ou empresas em situação de conflito de interesses; favorecimento pessoal ou institucional; remuneração ou benefício vedado pela legislação; ou transferência indevida de recursos entre projetos.",
          "7.3. As vedações relativas a nepotismo, conflito de interesses e contratação de pessoas vinculadas à AGU serão observadas na forma da legislação e das normas internas aplicáveis.",
        ],
      },
      {
        id: "secao-8",
        titulo: "Seção 8 — Da apresentação do requerimento",
        paragrafos: [
          "8.1. O pedido de habilitação deverá ser apresentado pelo representante legal da fundação por meio de: [SAPIENS, PROTOCOLO DIGITAL OU OUTRO CANAL A SER DEFINIDO].",
          "8.2. O requerimento será instruído com: Formulário de Requerimento de Habilitação Institucional (Anexo II); Lista de Verificação Documental (Anexo III); Declaração de Anuência da ICT de Origem (Anexo IV), quando aplicável; Declaração de Inexistência de Impedimentos e de Compromisso com a Integridade (Anexo V); Formulário de Capacidade Técnica e Operacional (Anexo VI); Relação de Projetos Executados (Anexo VII); documentos comprobatórios exigidos neste Edital; e demais informações que a fundação considere relevantes.",
          "8.3. Os documentos deverão: ser apresentados em formato eletrônico; estar legíveis e organizados conforme a ordem do checklist; ser assinados eletronicamente pelo representante competente, quando exigível; estar dentro do prazo de validade; conter índice e identificação dos respectivos anexos; e permitir a conferência de sua autenticidade.",
          "8.4. Documentos que já se encontrem disponíveis em base pública oficial poderão ser consultados diretamente pela comissão.",
          "8.5. A fundação responderá pela exatidão, autenticidade e integridade das informações apresentadas.",
          "8.6. A apresentação do requerimento implica: conhecimento e aceitação integral deste Edital; autorização para realização de consultas a bases públicas; compromisso de prestar esclarecimentos adicionais; autorização para realização de diligências institucionais; compromisso de comunicar fatos supervenientes; e ciência de que a habilitação não assegura contratação ou seleção futura.",
        ],
      },
      {
        id: "secao-9",
        titulo: "Seção 9 — Da documentação de habilitação",
        paragrafos: [
          "9.1. Habilitação jurídica e institucional — a fundação deverá apresentar: ato constitutivo, estatuto e alterações vigentes; ata de eleição ou designação dos dirigentes; comprovante de inscrição no CNPJ; documento de identificação e comprovação dos poderes do representante legal; organograma institucional; identificação dos órgãos deliberativos, consultivos, fiscais e executivos; regulamentos internos relacionados à gestão de projetos; comprovante de registro e credenciamento perante MEC e MCTI; atos de renovação do credenciamento, quando existentes; e autorização para apoiar a ICT-AGU ou documentos necessários à sua obtenção.",
          "9.2. A regularidade fiscal e trabalhista será comprovada no momento da formalização do pedido de autorização de que trata o § 1º do art. 3º do Decreto nº 7.423, de 2010 — não na apresentação inicial do requerimento — mediante: certidão relativa aos tributos federais e à Dívida Ativa da União; certificado de regularidade do FGTS; Certidão Negativa de Débitos Trabalhistas; comprovante de regularidade previdenciária; certidões estaduais e municipais da sede, quando pertinentes; comprovante de regularidade perante o Cadin; e demais documentos exigidos pela legislação.",
          "9.3. Solidez financeira e patrimonial — a fundação deverá apresentar: balanço patrimonial; demonstração do resultado do exercício; demonstração dos fluxos de caixa, quando aplicável; notas explicativas; relatório anual de gestão; parecer do conselho fiscal ou órgão equivalente; parecer de auditoria independente, quando existente ou exigível; declaração sobre passivos relevantes, contingências e compromissos financeiros; relação consolidada dos projetos sob sua gestão; e informações sobre sua capacidade de administrar novos projetos sem comprometer os atualmente executados.",
          "9.4. Governança, integridade e controles internos — a fundação deverá apresentar: política ou programa de integridade; código de ética ou conduta; política de prevenção e tratamento de conflitos de interesses; mecanismos de denúncia e proteção ao denunciante; política de gestão de riscos; estrutura de auditoria e controles internos; procedimentos de segregação de funções; regras sobre contratação de pessoas e fornecedores; política de transparência; procedimentos de prevenção a fraudes, desvios e irregularidades; política de brindes, presentes e hospitalidades, quando existente; e identificação do responsável pela integridade.",
          "9.5. Capacidade técnica e operacional — a fundação deverá demonstrar: estrutura física e tecnológica; quadro de pessoal permanente; qualificação da equipe; experiência em gestão de projetos de CT&I; experiência com a Administração Pública; capacidade de gerir recursos públicos e privados; experiência em prestação de contas; estrutura jurídica, contábil, financeira e administrativa; capacidade de realizar compras e contratações; capacidade de gerenciar bolsas e equipes de projeto; experiência em captação de recursos; capacidade de operar projetos em diferentes localidades; estrutura de atendimento a coordenadores e pesquisadores; metodologia de gerenciamento de projetos; procedimentos para gestão de riscos; capacidade de produzir relatórios gerenciais; e experiência relacionada às áreas de atuação indicadas no Anexo I.",
          "9.6. Capacidade tecnológica e gestão da informação — a fundação deverá demonstrar sistema eletrônico capaz de: registrar projetos, planos de trabalho, metas e entregas; acompanhar receitas e despesas; individualizar recursos por projeto; disponibilizar informações atualizadas à AGU; armazenar documentos comprobatórios; acompanhar aquisições e contratações; gerir bolsas e pagamentos; produzir relatórios físicos e financeiros; controlar perfis e níveis de acesso; manter registros de auditoria; exportar dados em formato interoperável; assegurar cópias de segurança; proteger dados pessoais e informações sensíveis; comunicar incidentes de segurança; e permitir, quando necessário, integração com sistemas da AGU.",
          "9.7. Experiência anterior — a fundação deverá apresentar relação dos projetos mais relevantes executados nos últimos cinco anos, contendo instituição apoiada, objeto, período, valor gerido, fonte dos recursos, abrangência territorial, equipe envolvida, resultados alcançados, situação da prestação de contas, contato da instituição apoiada e documento comprobatório.",
          "9.8. A comissão poderá considerar projetos executados em período superior a cinco anos quando sua relevância, complexidade ou relação com o objeto justificar a análise.",
          "9.9. A ausência de experiência em determinada área não impedirá, isoladamente, a habilitação geral da fundação, mas poderá limitar o perfil institucional reconhecido.",
          "9.10. A regularidade fiscal e trabalhista e perante o Cadin deverá ser comprovada pela fundação no momento da formalização do pedido de autorização do grupo a que se refere o § 1º do art. 3º do Decreto nº 7.423, de 2010, sem prejuízo de nova verificação por ocasião da celebração de cada instrumento jurídico.",
        ],
      },
      {
        id: "secao-10",
        titulo: "Seção 10 — Da qualificação técnica e operacional",
        paragrafos: [
          "10.1. As fundações que atenderem aos requisitos documentais serão submetidas à avaliação institucional prevista no Anexo VIII.",
          "10.2. A avaliação compreenderá, no mínimo: governança institucional; integridade e controles internos; solidez financeira; gestão de projetos; gestão administrativa e financeira; capacidade tecnológica; experiência com ICTs; experiência com a Administração Pública; prestação de contas; captação e gestão de recursos; qualificação e disponibilidade da equipe; abrangência territorial; especialização temática; proteção de dados e segurança da informação; e desempenho anterior.",
          "10.3. A avaliação poderá envolver: análise documental; entrevistas com dirigentes e equipes técnicas; apresentação institucional; demonstração do sistema de gestão; visita técnica presencial ou virtual; consulta a instituições anteriormente apoiadas; verificação de dados em bases públicas; solicitação de amostras de relatórios; realização de testes operacionais; e diligências de integridade e gestão de riscos.",
          "10.4. A avaliação não terá por finalidade exclusiva estabelecer classificação geral entre as fundações.",
          "10.5. O resultado deverá identificar: capacidades reconhecidas; especialidades; abrangência territorial; tipos e portes de projetos compatíveis; limitações verificadas; condicionantes; riscos relevantes; recomendações para eventual atuação junto à ICT-AGU; e prazo sugerido para reavaliação.",
        ],
      },
    ],
  },
  {
    id: "bloco-3",
    titulo: "Bloco 3 — Avaliação, recursos e decisão do CG-AGU",
    secoes: [
      {
        id: "secao-11",
        titulo: "Seção 11 — Da comissão de avaliação",
        paragrafos: [
          "11.1. O procedimento será conduzido por comissão instituída por ato da autoridade competente.",
          "11.2. A comissão será composta por representantes titulares e suplentes indicados pelo LABORI (que a coordenará), SGCS, SGE, SGA, SCI, PGF, PGU, CGU, SGCT, EAGU, CGAU e SENOR.",
          "11.3. A comissão poderá solicitar apoio técnico de outras unidades, servidores, especialistas ou instâncias de articulação e colaboração do NIT-AGU.",
          "11.4. Os integrantes da comissão deverão declarar eventual conflito de interesses.",
          "11.5. Compete à comissão: receber e organizar os requerimentos; verificar a documentação; promover diligências; avaliar a capacidade institucional; elaborar relatório técnico; propor o perfil institucional da fundação; recomendar o deferimento, o deferimento condicionado ou o indeferimento; analisar pedidos de reconsideração, quando cabível; e encaminhar o processo ao NIT-AGU.",
          "11.6. Compete ao NIT-AGU: coordenar tecnicamente o procedimento; revisar o relatório da comissão; propor ajustes ou diligências complementares; emitir manifestação técnica conclusiva; e submeter o pedido à deliberação do CG-AGU.",
          "11.7. A deliberação final sobre o pedido caberá ao Comitê de Governança da Advocacia-Geral da União.",
          "11.8. A comissão deliberará com a presença da maioria de seus membros, admitida a deliberação por meio eletrônico; na ausência ou impedimento do titular, atuará o respectivo suplente.",
        ],
      },
      {
        id: "secao-12",
        titulo: "Seção 12 — Das diligências e do saneamento",
        paragrafos: [
          "12.1. A comissão poderá realizar diligências para esclarecer informações, complementar a instrução, verificar a autenticidade de documentos, corrigir falhas formais, confirmar capacidade técnica, verificar riscos, validar informações financeiras ou avaliar o sistema de gestão da fundação.",
          "12.2. A diligência não poderá ser utilizada para permitir a criação posterior de condição material inexistente na data da apresentação do requerimento.",
          "12.3. A fundação terá o prazo de 10 (dez) dias úteis para atender à diligência, prorrogável mediante justificativa aceita pela comissão.",
          "12.4. A ausência de resposta poderá resultar no arquivamento ou indeferimento do pedido.",
          "12.5. A comissão poderá suspender a análise enquanto aguarda atualização de credenciamento, regularização documental, autorização ministerial, decisão de órgão de controle ou esclarecimento essencial.",
        ],
      },
      {
        id: "secao-13",
        titulo: "Seção 13 — Do resultado preliminar",
        paragrafos: [
          "13.1. Concluída a análise, será publicado resultado preliminar contendo identificação da fundação, decisão proposta, síntese dos fundamentos, perfil institucional preliminar (quando houver recomendação favorável), condicionantes eventualmente estabelecidas e prazo para recurso.",
          "13.2. O resultado poderá recomendar: habilitação; habilitação com condicionantes; sobrestamento; habilitação parcial, restrita a determinados perfis ou atividades; ou indeferimento.",
          "13.3. A habilitação com condicionantes será admitida quando as pendências não comprometerem a capacidade essencial da fundação, puderem ser sanadas em prazo razoável e não impedirem a deliberação do CG-AGU.",
          "13.4. A fundação não poderá iniciar atividades enquanto não cumprir as condicionantes estabelecidas.",
        ],
      },
      {
        id: "secao-14",
        titulo: "Seção 14 — Dos recursos administrativos",
        paragrafos: [
          "14.1. Caberá recurso contra o resultado preliminar no prazo de 10 (dez) dias úteis, contado de sua publicação, sem efeito suspensivo.",
          "14.2. O recurso deverá ser dirigido à autoridade ou instância indicada no resultado, identificar os pontos impugnados, apresentar fundamentos objetivos, estar acompanhado dos documentos pertinentes e ser assinado pelo representante legal.",
          "14.3. Não serão conhecidos recursos intempestivos, apresentados por pessoa sem poderes, sem fundamentação, ou destinados apenas a suprir requisito material inexistente na data do requerimento.",
          "14.4. A comissão poderá reconsiderar sua manifestação.",
          "14.5. Não havendo reconsideração, o recurso será encaminhado à instância competente para decisão.",
          "14.6. A interposição de recurso não assegura a habilitação provisória da fundação.",
        ],
      },
      {
        id: "secao-15",
        titulo: "Seção 15 — Do resultado definitivo e da deliberação do CG-AGU",
        paragrafos: [
          "15.1. Negada a reconsideração pela comissão, o processo será encaminhado ao CG-AGU para análise dos recursos.",
          "15.2. O CG-AGU poderá: deferir o pedido; deferir o pedido com condicionantes; restringir o perfil institucional; determinar diligências; sobrestar a decisão; ou indeferir o pedido.",
          "15.3. A decisão será motivada e registrada em ata.",
          "15.4. O resultado definitivo será publicado no sítio eletrônico da Advocacia-Geral da União.",
          "15.5. A deliberação favorável do CG-AGU não autoriza, isoladamente, a atuação da fundação quando ainda for necessária autorização ministerial.",
          "15.6. O CG-AGU poderá solicitar manifestação técnica do NIT-AGU e parecer jurídico do NPD&I antes do julgamento do recurso; tais manifestações não vinculam o CG-AGU.",
        ],
      },
      {
        id: "secao-16",
        titulo: "Seção 16 — Da autorização perante MEC e MCTI",
        paragrafos: [
          "16.1. A fundação cuja atuação junto à ICT-AGU dependa de autorização específica deverá adotar as providências necessárias perante os órgãos competentes.",
          "16.2. A Advocacia-Geral da União fornecerá os atos e manifestações que sejam de sua responsabilidade.",
          "16.3. A obtenção, renovação e manutenção da autorização serão de responsabilidade da fundação, ressalvadas as providências atribuídas à ICT-AGU.",
          "16.4. A fundação deverá comunicar imediatamente o deferimento, o indeferimento, a suspensão, o cancelamento, a renovação ou qualquer alteração relevante.",
          "16.5. A habilitação poderá ser registrada como \"deferida, pendente de autorização\", sem permissão para início de atividades.",
        ],
      },
    ],
  },
  {
    id: "bloco-4",
    titulo: "Bloco 4 — Cadastro, vigência e seleção por projeto",
    secoes: [
      {
        id: "secao-17",
        titulo: "Seção 17 — Do Cadastro de Fundações de Apoio da ICT-AGU",
        paragrafos: [
          "17.1. As fundações habilitadas e autorizadas, quando exigível, serão incluídas no Cadastro de Fundações de Apoio da ICT-AGU.",
          "17.2. O cadastro conterá: nome e CNPJ; ICT de origem; atos ministeriais vigentes; prazo de validade; perfil institucional; especialidades; abrangência territorial; condicionantes; situação cadastral; projetos apoiados; resultados das avaliações; e informações públicas pertinentes.",
          "17.3. A inclusão no cadastro será formalizada por certificado conforme o Anexo IX.",
          "17.4. O cadastro poderá conter as seguintes situações: habilitada e autorizada; habilitada, pendente de autorização; habilitada com condicionantes; suspensa; em processo de renovação; desabilitada; ou excluída.",
        ],
      },
      {
        id: "secao-18",
        titulo: "Seção 18 — Da vigência e da atualização",
        paragrafos: [
          "18.1. A habilitação terá vigência de até cinco anos, observada a validade do registro, credenciamento ou autorização ministerial.",
          "18.2. A decisão do CG-AGU poderá estabelecer prazo inferior, conforme riscos identificados, experiência da fundação, condicionantes, prazo da autorização ministerial ou necessidade de reavaliação.",
          "18.3. A fundação deverá apresentar atualização anual (Anexo X), incluindo relatório de gestão, manifestação de desempenho, demonstrações contábeis, parecer de auditoria (quando exigível), atos ministeriais atualizados, certidões de regularidade, alterações estatutárias e administrativas, projetos apoiados, ocorrências relevantes e indicadores de desempenho.",
          "18.4. A não apresentação da atualização anual ensejará notificação da fundação para saneamento no prazo de 10 (dez) dias úteis; persistindo a omissão, a habilitação poderá ser suspensa por decisão fundamentada, sem prejuízo das demais medidas cabíveis.",
        ],
      },
      {
        id: "secao-19",
        titulo: "Seção 19 — Da seleção para programas ou projetos específicos",
        paragrafos: [
          "19.1. A habilitação geral será seguida, quando necessário, de procedimento específico de escolha da fundação mais adequada ao programa ou projeto.",
          "19.2. A seleção observará a matriz prevista no Anexo XI e poderá considerar: aderência ao objeto; experiência temática; capacidade operacional; disponibilidade de equipe; prazo de implantação; abrangência territorial; capacidade tecnológica; capacidade de captação; experiência com a fonte de recursos; metodologia de gestão; riscos; despesas operacionais; histórico de desempenho; e qualidade da proposta técnica.",
          "19.3. Conforme a complexidade, a seleção poderá ocorrer por escolha direta motivada (quando houver apenas uma fundação habilitada com capacidade compatível), consulta simplificada, seleção técnica estruturada ou chamamento específico.",
          "19.4. A menor despesa operacional não determinará, isoladamente, a escolha.",
          "19.5. A opção por proposta que não apresente o menor custo deverá ser motivada com base na vantagem técnica, operacional, gerencial ou institucional.",
          "19.6. A fundação deverá apresentar proposta técnica e operacional conforme o Anexo XII.",
          "19.7. Os critérios de seleção serão objetivados na matriz do Anexo XI, com atribuição de pesos e forma de pontuação, assegurando comparabilidade entre as propostas.",
        ],
      },
      {
        id: "secao-20",
        titulo: "Seção 20 — Da celebração dos instrumentos",
        paragrafos: [
          "20.1. As relações entre a Advocacia-Geral da União e a fundação serão formalizadas por instrumento adequado a cada caso.",
          "20.2. É vedada a celebração de instrumento: com objeto genérico; sem prazo determinado; sem plano de trabalho; sem metas, entregas e indicadores; sem definição de responsabilidades; sem previsão das despesas operacionais; sem mecanismos de prestação de contas; ou desvinculado de programa ou projeto aprovado.",
          "20.3. O plano de trabalho deverá conter, no mínimo: objeto; justificativa; objetivos; metas; etapas; entregas; indicadores; cronograma; orçamento detalhado; fontes de recursos; equipe; governança; riscos e medidas de mitigação; regras sobre propriedade intelectual; proteção de dados; prestação de contas; e critérios de encerramento.",
        ],
      },
    ],
  },
  {
    id: "bloco-5",
    titulo: "Bloco 5 — Execução, controle e disposições finais",
    secoes: [
      {
        id: "secao-21",
        titulo: "Seção 21 — Das obrigações da fundação habilitada",
        paragrafos: [
          "21.1. Constituem obrigações da fundação: manter as condições de habilitação; observar a legislação e as normas da AGU; executar os projetos conforme os instrumentos celebrados; manter segregação financeira e contábil; disponibilizar informações atualizadas; assegurar acesso aos sistemas; observar integridade, transparência e impessoalidade; proteger dados e informações; comunicar irregularidades e incidentes; prestar contas; manter documentos; permitir auditorias; comunicar fatos supervenientes; evitar conflitos de interesses; manter pessoal qualificado; e cumprir as recomendações e condicionantes institucionais.",
        ],
      },
      {
        id: "secao-22",
        titulo: "Seção 22 — Do monitoramento e da avaliação de desempenho",
        paragrafos: [
          "22.1. A atuação da fundação será monitorada continuamente.",
          "22.2. A avaliação poderá considerar cumprimento de prazos, execução física e financeira, qualidade dos relatórios, atendimento aos pesquisadores, transparência, tempo de resposta, gestão de riscos, regularidade das contratações, prestação de contas, resultados e impactos, segurança da informação e satisfação dos gestores.",
          "22.3. Os resultados integrarão o cadastro e poderão influenciar renovação, seleção para novos projetos, imposição de condicionantes, suspensão ou desabilitação.",
        ],
      },
      {
        id: "secao-23",
        titulo: "Seção 23 — Da integridade, transparência e conflitos de interesses",
        paragrafos: [
          "23.1. A fundação deverá adotar medidas para prevenir, detectar e corrigir irregularidades.",
          "23.2. Deverá comunicar imediatamente fraude, desvio, conflito de interesses, favorecimento, irregularidade financeira, violação de dados, investigação relevante ou sanção aplicada por órgão público.",
          "23.3. A fundação deverá disponibilizar informações públicas sobre os projetos, ressalvadas as hipóteses legais de sigilo e de segredo industrial.",
        ],
      },
      {
        id: "secao-24",
        titulo: "Seção 24 — Da proteção de dados e da segurança da informação",
        paragrafos: [
          "24.1. A fundação observará a legislação de proteção de dados e as normas de segurança da Advocacia-Geral da União.",
          "24.2. A fundação deverá firmar a declaração constante do Anexo XIII.",
          "24.3. O acesso a dados institucionais será limitado ao necessário para a execução do projeto.",
          "24.4. Incidentes deverão ser comunicados imediatamente à Advocacia-Geral da União.",
          "24.5. A utilização de infraestrutura tecnológica da AGU dependerá de avaliação prévia de riscos e autorização das áreas competentes.",
        ],
      },
      {
        id: "secao-25",
        titulo: "Seção 25 — Da suspensão, desabilitação e exclusão",
        paragrafos: [
          "25.1. A habilitação poderá ser suspensa quando houver perda temporária de requisito, ausência de atualização documental, risco relevante, irregularidade em apuração, descumprimento de condicionante ou desempenho insatisfatório.",
          "25.2. A fundação poderá ser desabilitada ou excluída em caso de fraude, falsidade, perda definitiva do credenciamento ou autorização, irregularidade grave, rejeição de contas por irregularidade insanável, violação grave de integridade, dano relevante aos projetos, uso indevido de recursos, violação grave de dados ou descumprimento reiterado.",
          "25.3. Será assegurado contraditório e ampla defesa.",
          "25.4. A exclusão não prejudicará a obrigação de concluir prestações de contas, devolver recursos e reparar danos.",
        ],
      },
      {
        id: "secao-26",
        titulo: "Seção 26 — Da impugnação e dos pedidos de esclarecimento",
        paragrafos: [
          "26.1. O Edital poderá ser impugnado por qualquer interessado.",
          "26.2. Os pedidos serão encaminhados para: [ENDEREÇO ELETRÔNICO OU SISTEMA].",
          "26.3. As respostas poderão ser publicadas no portal da Advocacia-Geral da União.",
        ],
      },
      {
        id: "secao-27",
        titulo: "Seção 27 — Das disposições finais",
        paragrafos: [
          "27.1. A participação implica aceitação integral deste Edital.",
          "27.2. A Advocacia-Geral da União poderá revogar ou anular o procedimento, mediante decisão motivada.",
          "27.3. Não haverá direito à indenização em razão da habilitação, indeferimento, suspensão, revogação ou ausência de contratação.",
          "27.4. Os casos omissos serão resolvidos pelo [NIT-AGU/CG-AGU/AUTORIDADE COMPETENTE], observada a distribuição normativa de competências.",
          "27.5. Integram este Edital: Anexo I — Áreas e atividades passíveis de apoio; Anexo II — Formulário de requerimento; Anexo III — Checklist documental; Anexo IV — Declaração da ICT de origem; Anexo V — Declaração de inexistência de impedimentos; Anexo VI — Capacidade técnica e operacional; Anexo VII — Relação de projetos executados; Anexo VIII — Matriz de avaliação institucional; Anexo IX — Certificado de habilitação; Anexo X — Relatório anual; Anexo XI — Matriz de escolha por projeto; Anexo XII — Proposta técnica e operacional; Anexo XIII — Proteção de dados e segurança; Anexo XIV — Termo de ciência e compromisso; e Anexo XV — Cronograma.",
          "Brasília, [DATA].",
        ],
      },
    ],
  },
];
