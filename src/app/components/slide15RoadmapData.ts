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
