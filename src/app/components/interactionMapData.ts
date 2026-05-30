export type InteractionAreaCard = {
  title: string;
  intro: string;
  xpRole: string;
  receives: string;
  delivers: string;
};

export type InteractionMapPanel =
  | { layout: "four"; areas: InteractionAreaCard[] }
  | { layout: "three"; areas: InteractionAreaCard[] };

export const INTERACTION_MAP_PANELS: InteractionMapPanel[] = [
  {
    layout: "four",
    areas: [
      {
        title: "Produto (PM/PO)",
        intro: "Recebe a demanda, enquadra e prioriza o backlog.",
        xpRole: "investiga o problema real e desenha a solução que atende o utilizador final.",
        receives: "Demanda priorizada, contexto de negócio e expectativas de resultado.",
        delivers: "Fluxos validados, protótipos e especificações de handoff.",
      },
      {
        title: "Desenvolvimento",
        intro: "Recebe o handoff e implementa.",
        xpRole: "acompanha fidelidade e resolve dúvidas técnicas.",
        receives: "Feedback técnico e limitações de plataforma.",
        delivers: "Handoff estruturado e suporte durante o desenvolvimento.",
      },
      {
        title: "QA",
        intro: "Valida a experiência antes do release.",
        xpRole: "apoia na definição dos critérios de aceite.",
        receives: "Reporte de divergências entre protótipo e produto entregue.",
        delivers: "Critérios de aceite visuais e interativos, e suporte na revisão.",
      },
      {
        title: "Dados/BI",
        intro: "Fornece métricas de comportamento.",
        xpRole: "usa dados para validar hipóteses e orientar decisões.",
        receives: "Perguntas de pesquisa, hipóteses a validar e eventos/jornadas a instrumentar.",
        delivers: "Métricas de comportamento, dashboards e insights quantitativos sobre uso.",
      },
    ],
  },
  {
    layout: "four",
    areas: [
      {
        title: "Comercial",
        intro: "Levanta demandas e contexto do cliente.",
        xpRole: "valida viabilidade e propõe soluções.",
        receives: "Contexto do cliente, restrições e expectativas do projecto.",
        delivers: "Proposta de solução e materiais de apresentação.",
      },
      {
        title: "Marketing",
        intro: "Define identidade e tom de voz da marca.",
        xpRole: "alinha a experiência com o posicionamento.",
        receives: "Diretrizes de marca, tom de voz e activos visuais.",
        delivers: "Experiências alinhadas à identidade e ao posicionamento.",
      },
      {
        title: "Suporte/CS",
        intro: "Traz fricções e problemas reais dos utilizadores.",
        xpRole: "transforma em oportunidades de melhoria.",
        receives: "Reporte de problemas recorrentes dos utilizadores.",
        delivers: "Melhorias priorizadas com foco na redução de fricção.",
      },
      {
        title: "Segurança/Compliance",
        intro: "Estabelece restrições técnicas e regulatórias.",
        xpRole: "assegura que o design respeita esses limites.",
        receives: "Fluxos, protótipos e pontos de coleta/tratamento de dados para revisão.",
        delivers:
          "Restrições regulatórias, requisitos de privacidade e critérios de conformidade (LGPD, acessibilidade, auditoria).",
      },
    ],
  },
  {
    layout: "three",
    areas: [
      {
        title: "Digital Office",
        intro: "Define a estratégia de transição para o ambiente de trabalho digital.",
        xpRole: "garante a adoção dessas tecnologias através de um design centrado no comportamento humano.",
        receives: "Requisitos de negócio, escopo de projectos de digitalização e regras de compliance.",
        delivers:
          "Visão de produto (Product Discovery), fluxos de navegação validados e protótipos de média/alta fidelidade.",
      },
      {
        title: "Analytics e AI",
        intro:
          "Desenvolve inteligência preditiva, modelos de Inteligência Artificial (IA) e análises de dados para o negócio.",
        xpRole: "transforma os dados em melhorias práticas na experiência do produto.",
        receives: "Modelos de inteligência artificial aplicados e insights baseados em dados de negócio.",
        delivers: "Experiências digitais inteligentes e interações personalizadas para o utilizador.",
      },
    ],
  },
];

export const INTERACTION_MAP_PANEL_COUNT = INTERACTION_MAP_PANELS.length;
