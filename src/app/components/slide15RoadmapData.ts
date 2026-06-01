export const ROADMAP_MONTHS = [
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
] as const;

export const ROADMAP_PHASES = [
  { label: "Fundação", colStart: 2, colSpan: 2 },
  { label: "Piloto", colStart: 4, colSpan: 3 },
  { label: "Escala", colStart: 7, colSpan: 2 },
] as const;

export type RoadmapTaskColor = "blue" | "purple" | "navy" | "gray";

export type RoadmapTask = {
  label: string;
  colStart: number;
  colSpan: number;
  color: RoadmapTaskColor;
  padding?: 16 | 20;
};

export type RoadmapRow = {
  label: string;
  tasks: RoadmapTask[];
};

export const ROADMAP_TASK_COLORS: Record<RoadmapTaskColor, string> = {
  blue: "#036ef2",
  purple: "#3126b4",
  navy: "#04165d",
  gray: "#494e5a",
};

export const ROADMAP_PAGE_COUNT = 2;

export const ROADMAP_PAGE_COPY = [
  {
    title: "Roadmap de implantação",
    subtitle: "Plano de implantação em ciclos, com entregas progressivas e validação em projectos reais.",
    contentTop: 397,
  },
  {
    title: "Dependências e estratégia de adopção",
    subtitle: "O que é necessário para a área sair do plano e entrar em operação.",
    contentTop: 358,
  },
] as const;

export const ROADMAP_ADOPTION_ITEMS = [
  {
    title: "Fundação",
    body: "Fundação depende de alinhamento de expectativas, papéis claros, sponsor executivo, comunicação para as demais áreas com adesão de produto e desenvolvimento.",
  },
  {
    title: "Piloto",
    body: "Piloto depende de Playbook publicado, Design System V1 disponível para uso, definição do projecto e ritos e processos iniciais implantados.",
  },
  {
    title: "Escala",
    body: "Escala depende de Hub de conhecimento publicado, ritos em funcionamento, processo testado em projecto real e backlog do DS priorizado.",
  },
  {
    title: "Maturidade",
    body: "Maturidade depende de métricas consistentes, repositório de insights, expansão da equipa e integração entre as áreas.",
  },
] as const;

export type RoadmapTaskTooltip = {
  title: string;
  body: string;
};

/** Conteúdos dos popovers (Figma node 1106:753). Chave = label da barra no grid. */
export const ROADMAP_TASK_TOOLTIPS: Record<string, RoadmapTaskTooltip> = {
  "Design System V1": {
    title: "Design System V1",
    body: "Design System disponível para uso por designers e programadores. Estrutura de tokens, componentes base e brand principles personalizável.",
  },
  "DS aplicado em projecto piloto": {
    title: "DS aplicado em projecto piloto",
    body: "Aplicação do design system em projecto piloto para validação prática do sistema criado. Validar uso com Designers, Programadores e Agentes de IA.",
  },
  "Design System V1.5": {
    title: "Design System V1.5",
    body: "Evolução natural com incrementos e correcções do Design System, pós-validação inicial. Novos itens de maior complexidade entram em backlog para V2.",
  },
  Playbook: {
    title: "Kickoff",
    body: "Disponibilização desta apresentação como documentação fundacional da área Experience Engineering. Adaptações podem ser necessárias antes da publicação para uso como Playbook.",
  },
  "Criação do Hub de UX": {
    title: "Criação do Hub de UX",
    body: "Portal agregador de conhecimento da área, contendo a visão do processo, melhores práticas, templates de metodologias, ferramentas e suporte.",
  },
  "Templates de metodologias e IA": {
    title: "Templates de metodologias e IA",
    body: "Documentação e templates de metodologias para reutilização nos projectos. Além de boas práticas no uso da IA e como integrá-la em cada parte do processo.",
  },
  Insights: {
    title: "Insights Review",
    body: "Primeiro rito de Insights Review com apresentação e publicação de resultados no Hub de UX. Disponibilizar o material também ao marketing e área de vendas da TIS para uso comercial.",
  },
  "Ritos e processos iniciais": {
    title: "Ritos e processos iniciais",
    body: "Execução dos ritos iniciais da área e disseminação do processo, aos designers e demais áreas. Incluindo nivelamento de conhecimento para uso e entendimento do processo pelos designers.",
  },
  "Implantação do processo e ritos no piloto": {
    title: "Implantação do processo e ritos no piloto",
    body: "Execução do processo na prática em projecto piloto, com ritos formais e pleno uso do design system.",
  },
  "Revisão dos processos": {
    title: "Revisão dos processos",
    body: "Revisão do que deu certo e o que deu errado para melhorias e evolução do processo. Garantir o bom uso de recursos e eliminar etapas desnecessárias.",
  },
  "Primeiros indicadores definidos": {
    title: "Primeiros indicadores definidos",
    body: "Definição dos indicadores iniciais como metas a atingir durante o projecto piloto.",
  },
  "Medição com o projecto piloto": {
    title: "Medição com o projecto piloto",
    body: "Monitorar as métricas operacionais do projecto para acompanhar a evolução das metas estabelecidas.",
  },
  "Revisão / Definição ciclo seguinte": {
    title: "Revisão / Definição ciclo seguinte",
    body: "Revisar os resultados do piloto, avaliar e registar aprendizagem para correcção de curso e planeamento para o próximo ciclo. Além de expandir e replicar processos para os outros projectos.",
  },
};

export const ROADMAP_TOOLTIP_WIDTH = 360;

export const ROADMAP_ROWS: RoadmapRow[] = [
  {
    label: "Design System",
    tasks: [
      { label: "Design System V1", colStart: 2, colSpan: 2, color: "blue", padding: 16 },
      { label: "DS aplicado em projecto piloto", colStart: 4, colSpan: 3, color: "blue", padding: 20 },
      { label: "Design System V1.5", colStart: 7, colSpan: 2, color: "blue", padding: 20 },
    ],
  },
  {
    label: "Hub de conhecimento",
    tasks: [
      { label: "Playbook", colStart: 2, colSpan: 1, color: "purple", padding: 20 },
      { label: "Criação do Hub de UX", colStart: 3, colSpan: 2, color: "purple", padding: 20 },
      { label: "Templates de metodologias e IA", colStart: 5, colSpan: 3, color: "purple", padding: 20 },
      { label: "Insights", colStart: 8, colSpan: 1, color: "purple", padding: 20 },
    ],
  },
  {
    label: "Ritos e processo",
    tasks: [
      { label: "Ritos e processos iniciais", colStart: 2, colSpan: 2, color: "navy", padding: 20 },
      { label: "Implantação do processo e ritos no piloto", colStart: 4, colSpan: 3, color: "navy", padding: 16 },
      { label: "Revisão dos processos", colStart: 7, colSpan: 2, color: "navy", padding: 16 },
    ],
  },
  {
    label: "Adopção e métricas",
    tasks: [
      { label: "Primeiros indicadores definidos", colStart: 2, colSpan: 2, color: "gray", padding: 20 },
      { label: "Medição com o projecto piloto", colStart: 4, colSpan: 3, color: "gray", padding: 20 },
      { label: "Revisão / Definição ciclo seguinte", colStart: 7, colSpan: 2, color: "gray", padding: 20 },
    ],
  },
];
