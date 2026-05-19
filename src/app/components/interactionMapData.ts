export type InteractionAreaCard = {
  title: string;
  intro: string;
  xpRole: string;
  receives: string;
  delivers: string;
};

export const INTERACTION_MAP_PANELS: InteractionAreaCard[][] = [
  [
    {
      title: "Produto (PM/PO)",
      intro: "Recebe a demanda, enquadra e prioriza o backlog.",
      xpRole: "investiga o problema real e desenha a solução que atende o utilizador final.",
      receives: "Demanda priorizada, contexto de negócio e expectativas de resultado.",
      delivers: "Fluxos validados, protótipos e especificações de handoff.",
    },
    {
      title: "Engenharia",
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
  [
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
];

export const INTERACTION_MAP_PANEL_COUNT = INTERACTION_MAP_PANELS.length;
