export const PILLAR_CARDS = [
  {
    icon: "flowsheet",
    title: "Operação",
    body: "O problema foi entendido antes da solução?",
  },
  {
    icon: "modeling",
    title: "Design System",
    body: "Há padrões reutilizáveis sendo aplicados?",
  },
  {
    icon: "workspace-premium",
    title: "Qualidade",
    body: "A entrega reduz dúvidas e retrabalho?",
  },
  {
    icon: "thumbs-up-down",
    title: "Impacto",
    body: "Há sinal real de uso, satisfação ou atrito?",
  },
] as const;

export type MetricColumn = {
  title: string;
  items: string[];
};

export const OPERACIONAL_COLUMNS: MetricColumn[] = [
  {
    title: "Maturidade e adoção",
    items: [
      "Nível de Maturidade (NN/g)",
      "% de projectos com UX desde o kickoff",
      "% de projectos consumindo o Design System",
      "% de pedidos com briefing completo",
      "Relação Design:DEV (Meta: 1:3)",
      "Participação nos ritos",
    ],
  },
  {
    title: "Saúde da operação",
    items: [
      "Backlog do DS",
      "Tempo de resposta",
      "Contribuição das áreas",
      "Componentes activos",
      "Adoção por projecto",
      "Itens deprecated",
      "Cobertura de componentes, templates e padrões",
    ],
  },
  {
    title: "Qualidade",
    items: [
      "Sucesso de tarefa",
      "Usability Score",
      "Taxa de bugs de UX/UI",
      "Satisfação interna do time",
      "Consistência visual",
      "Conformidade com a WCAG 2.2 AA",
    ],
  },
  {
    title: "Eficiência",
    items: [
      "Tempo design -> dev",
      "Lead time de entrega",
      "% de reutilização de componentes",
      "Redução de retrabalho",
      "Pedidos de suporte",
      "Tempo de manutenção",
      "Impacto em propostas comerciais",
    ],
  },
];

export const UX_COLUMNS: MetricColumn[] = [
  {
    title: "Usabilidade",
    items: [
      "Taxa de sucesso",
      "Tempo médio de conclusão de tarefas",
      "Taxa de erro",
    ],
  },
  {
    title: "Satisfação",
    items: [
      "NPS (Net Promoter Score)",
      "CSAT (Customer Satisfaction Score)",
      "SUS (System Usability Scale)",
      "CES (Customer Effort Score)",
    ],
  },
  {
    title: "Comportamentais",
    items: [
      "Tempo de permanência (Dwell Time)",
      "Profundidade de rolagem (Scroll Depth)",
      "Taxa de retorno (Bounce Rate)",
    ],
  },
];
