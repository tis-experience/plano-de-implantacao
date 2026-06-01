import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { INTERACTIVE_HOVER_BOX_SHADOW } from "../constants/interactiveShadow";
import { createSlideMetrics } from "../scaling";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import accessibleIcon from "../../assets/slide09/accessible.svg";
import accountCircleIcon from "../../assets/slide09/account-circle.svg";
import assignmentIcon from "../../assets/slide09/assignment.svg";
import barChartIcon from "../../assets/slide09/bar-chart-4-bars.svg";
import bidLandscapeIcon from "../../assets/slide09/bid-landscape.svg";
import cardsStackIcon from "../../assets/slide09/cards-stack.svg";
import categorySearchIcon from "../../assets/slide09/category-search.svg";
import checkbookIcon from "../../assets/slide09/checkbook.svg";
import checklistIcon from "../../assets/slide09/checklist.svg";
import clinicalNotesIcon from "../../assets/slide09/clinical-notes.svg";
import codeXmlIcon from "../../assets/slide09/code-xml.svg";
import cognitionIcon from "../../assets/slide09/cognition.svg";
import compareIcon from "../../assets/slide09/compare.svg";
import diamondShineIcon from "../../assets/slide09/diamond-shine.svg";
import docsIcon from "../../assets/slide09/docs.svg";
import exploreIcon from "../../assets/slide09/explore.svg";
import feedbackIcon from "../../assets/slide09/feedback.svg";
import gestureSelectIcon from "../../assets/slide09/gesture-select.svg";
import gridViewIcon from "../../assets/slide09/grid-view.svg";
import handshakeIcon from "../../assets/slide09/handshake.svg";
import helpIcon from "../../assets/slide09/help.svg";
import lineStyleIcon from "../../assets/slide09/line-style.svg";
import listAltCheckIcon from "../../assets/slide09/list-alt-check.svg";
import mapIcon from "../../assets/slide09/map.svg";
import mobileHandIcon from "../../assets/slide09/mobile-hand.svg";
import multimodalHandEyeIcon from "../../assets/slide09/multimodal-hand-eye.svg";
import packageIcon from "../../assets/slide09/package-2.svg";
import recordVoiceOverIcon from "../../assets/slide09/record-voice-over.svg";
import searchInsightsIcon from "../../assets/slide09/search-insights.svg";
import statIcon from "../../assets/slide09/stat-0.svg";
import stickyNoteIcon from "../../assets/slide09/sticky-note-2.svg";
import syncSavedLocallyIcon from "../../assets/slide09/sync-saved-locally.svg";
import tableIcon from "../../assets/slide09/table.svg";
import thumbsUpDownIcon from "../../assets/slide09/thumbs-up-down.svg";
import viewKanbanIcon from "../../assets/slide09/view-kanban.svg";
import viewQuiltIcon from "../../assets/slide09/view-quilt.svg";
import workspacesIcon from "../../assets/slide09/workspaces.svg";

interface Props {
  scaleX: number;
  scaleY: number;
}

type ToolChip = {
  label: string;
  background: string;
  color: string;
};

type TooltipData = {
  title: string;
  body: string;
  tools: ToolChip[];
  ai?: string;
  width?: number;
  height?: number;
};

type TooltipPlacement = "side" | "top";

type StackItem = {
  label: string;
  icon: string;
  tooltip?: TooltipData;
  compact?: boolean;
};

type StackColumn = {
  stage: string;
  icon: string;
  items: StackItem[];
  width?: number;
};

const BLUE = "#036ef2";
const NAVY = "#04165d";
const INK = "#2f3237";
const MUTED = "#6e7587";
const TAG_BG = "rgba(3,110,242,0.1)";
const AI_PURPLE = "#3126b4";
const FOOTER_TEXT = "PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING";
const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });
const primaryTool = (label: string): ToolChip => ({ label, background: "#113e75", color: "#7bdcff" });
const secondaryTool = (label: string): ToolChip => ({ label, background: "#334153", color: "#adc4cd" });
const aiTool = (label: string): ToolChip => ({ label, background: "#5f330f", color: "#fff07b" });
const preferredLabelBreaks: Record<string, [string, string]> = {
  "Testes de acessibilidade": ["Testes de", "acessibilidade"],
  "Testes de usabilidade": ["Testes de", "usabilidade"],
};

const tooltipByLabel: Record<string, TooltipData> = {
  Mapeamento: {
    title: "Mapeamento",
    body: "Organizar informações, stakeholders, problemas, oportunidades e hipóteses.",
    tools: [primaryTool("FigJam"), primaryTool("Microsoft Whiteboard"), primaryTool("Office"), secondaryTool("Miro"), secondaryTool("Notion")],
    ai: "Ajuda para estruturar e organizar informação, CSD, formular hipótese e identificar oportunidades.",
  },
  Benchmarks: {
    title: "Benchmarks",
    body: "Analisar concorrentes, referências de mercado, padrões de UX e oportunidades.",
    tools: [primaryTool("FigJam"), primaryTool("Google search"), secondaryTool("Semrush"), secondaryTool("G2"), secondaryTool("Mobbin")],
    ai: "Acelera síntese comparativa, matriz de concorrentes e identificação de padrões.",
  },
  Analytics: {
    title: "Analytics",
    body: "Entender comportamento atual, funis, abandono, retenção e pontos de fricção.",
    tools: [primaryTool("Dados de suporte"), primaryTool("Google Analytics"), secondaryTool("Hotjar"), secondaryTool("Amplitude"), secondaryTool("Power BI")],
    ai: "Interpretação de dados, levantamento de hipóteses e geração de perguntas para investigação.",
  },
  Inquéritos: {
    title: "Inquéritos",
    body: "Coletar opiniões, percepções, satisfação, necessidades e dados quantitativos.",
    tools: [primaryTool("Microsoft Forms"), primaryTool("Google Forms"), primaryTool("Office"), secondaryTool("Typeform"), secondaryTool("Maze")],
    ai: "Ajuda a criar questionários, limpar respostas abertas e agrupar padrões.",
  },
  Entrevistas: {
    title: "Entrevistas",
    body: "Entender contexto, motivações, dores, objeções, linguagem e comportamento.",
    tools: [primaryTool("Teams"), primaryTool("Google Meet"), primaryTool("Office"), secondaryTool("Dovetail"), secondaryTool("Lookback"), secondaryTool("UserTesting")],
    ai: "Apoio na construção de roteiro, perguntas de aprofundamento, transcrição e síntese.",
  },
  "Análise SWOT": {
    title: "Análise SWOT",
    body: "Avaliar forças, fraquezas, oportunidades e ameaças relacionadas ao produto, serviço ou contexto.",
    tools: [primaryTool("FigJam"), primaryTool("Microsoft Whiteboard"), primaryTool("Office"), secondaryTool("Miro")],
    ai: "Apoio para estruturar a matriz SWOT, cruzar evidências e identificar implicações estratégicas.",
  },
  "Mapa de empatia": {
    title: "Mapa de empatia",
    body: "Consolidar o que o utilizador pensa, sente, vê, ouve, fala e faz.",
    tools: [primaryTool("FigJam"), primaryTool("Microsoft Whiteboard"), primaryTool("Office"), secondaryTool("Miro")],
    ai: "Auxílio para transformar entrevistas e inquéritos em padrões comportamentais.",
  },
  "User Stories": {
    title: "User Stories",
    body: "Traduzir necessidades em histórias para backlog e desenvolvimento.",
    tools: [primaryTool("Jira"), primaryTool("Office"), secondaryTool("Jira Product Discovery")],
    ai: "Apoio para escrever user stories, critérios de aceite, regras de negócio e exceções.",
  },
  "Jobs to be done": {
    title: "Jobs to be done",
    body: "Definir o progresso que o utilizador quer alcançar em determinado contexto.",
    tools: [primaryTool("FigJam"), primaryTool("Microsoft Whiteboard"), primaryTool("Office"), secondaryTool("Miro")],
    ai: "Ajuda na formulação de jobs, forças de progresso, dores e resultados esperados.",
  },
  Personas: {
    title: "Personas",
    body: "Representar perfis comportamentais com base em evidências, não em achismos.",
    tools: [primaryTool("FigJam"), primaryTool("Microsoft Whiteboard"), primaryTool("Office"), secondaryTool("Miro")],
    ai: "Criar proto personas e consolidar perfis, motivações, necessidades, dores e cenários de uso.",
  },
  Protótipos: {
    title: "Protótipos",
    body: "Simular navegação, interação, comportamento e proposta de valor.",
    tools: [primaryTool("Figma"), primaryTool("Figma Make"), primaryTool("Google Stitch"), secondaryTool("Lovable"), secondaryTool("UX Pilot"), secondaryTool("Framer")],
    ai: "Criação de protótipos funcionais para validação rápida, geração de conteúdo como imagens e textos.",
  },
  Wireframes: {
    title: "Wireframes",
    body: "Explorar estrutura, hierarquia, conteúdo e navegação antes da UI final.",
    tools: [primaryTool("Figma"), secondaryTool("Balsamiq"), secondaryTool("Miro"), secondaryTool("UX Pilot"), secondaryTool("Whimsical")],
    ai: "Esboços rápidos, sugestão de layouts, blocos de conteúdo, estados e variações.",
  },
  "Card Sorting": {
    title: "Card Sorting",
    body: "Validar agrupamentos, nomenclaturas e arquitectura da informação.",
    tools: [primaryTool("Jira"), primaryTool("Office"), secondaryTool("Jira Product Discovery")],
    ai: "Apoio para criar categorias, interpretar agrupamentos e sugerir taxonomias.",
  },
  Workshops: {
    title: "Workshops",
    body: "Alinhar equipas, gerar soluções, tomar decisões e resolver problemas em grupo.",
    tools: [primaryTool("FigJam"), primaryTool("Microsoft Whiteboard"), primaryTool("Office"), primaryTool("Teams"), primaryTool("Google Meet"), secondaryTool("Zoom"), secondaryTool("Miro")],
    ai: "Ajuda no para desenho das dinâmicas, agenda, perguntas, outputs e síntese final.",
  },
  Ideação: {
    title: "Ideação",
    body: "Gerar alternativas de solução, conceitos, jornadas e abordagens de produto.",
    tools: [primaryTool("FigJam"), primaryTool("Microsoft Whiteboard"), primaryTool("Office"), primaryTool("Teams"), secondaryTool("Miro"), secondaryTool("Whimsical")],
    ai: "Gerar alternativas, provocar caminhos e expandir possibilidades.",
  },
  "Análise heurística": {
    title: "Análise heurística",
    body: "Avaliar a interface contra princípios de usabilidade, consistência, feedback e prevenção de erro.",
    tools: [primaryTool("FigJam"), primaryTool("Figma"), primaryTool("Office"), secondaryTool("Miro"), secondaryTool("Notion"), secondaryTool("Airtable")],
    ai: "Apoio para elaborar checklist, avaliar severidade, recomendações de ajustes e gerar relatório.",
  },
  "Testes de acessibilidade": {
    title: "Testes de acessibilidade",
    body: "Verificar contraste, navegação por teclado, leitores de tela, focus, semântica e conformidade.",
    tools: [primaryTool("WCAG"), primaryTool("Stark"), primaryTool("Accessible Web"), secondaryTool("Axe DevTools"), secondaryTool("BrowserStack")],
    ai: "Apoio para elaborar checklist, análise, consulta rápida, priorização de problemas e documentação de correções.",
  },
  Refinamento: {
    title: "Refinamento",
    body: "Ajustar solução com base em feedback, dados, restrições técnicas e critérios de negócio.",
    tools: [primaryTool("Figma"), primaryTool("FigJam"), primaryTool("Jira"), primaryTool("Teams"), primaryTool("Office"), secondaryTool("Notion"), secondaryTool("Miro")],
    ai: "Consolidar feedbacks, propor melhorias e reescrever especificações.",
  },
  "Teste A/B": {
    title: "Teste A/B",
    body: "Comparar versões para medir impacto em conversão, engajamento ou comportamento.",
    tools: [primaryTool("Google Analytics"), secondaryTool("Crazyegg"), secondaryTool("VWO"), secondaryTool("Optimizely"), secondaryTool("LaunchDarkly")],
    ai: "Apoio para formular hipótese, definir métrica, interpretar resultado e sugerir próximos testes.",
  },
  "Testes de usabilidade": {
    title: "Testes de usabilidade",
    body: "Avaliar se utilizadores conseguem entender e completar tarefas com eficiência.",
    tools: [primaryTool("Teams"), primaryTool("Google Meet"), secondaryTool("Maze"), secondaryTool("Lookback"), secondaryTool("UserTesting"), secondaryTool("Useberry")],
    ai: "Apoio na criação de roteiro, análise dos achados, severidade e plano de acção.",
  },
  Implementação: {
    title: "Implementação",
    body: "Construir interface, lógica, integrações, testes e ajustes técnicos.",
    tools: [primaryTool("GitHub"), aiTool("Figma DEV Mode"), aiTool("Cursor"), aiTool("Codex"), aiTool("Claude Code")],
    ai: "Apoio na implementação de front-end, design system, testes e PRs.",
  },
  Backlog: {
    title: "Backlog",
    body: "Quebrar a solução em épicos, histórias, tarefas, bugs e critérios de aceite.",
    tools: [primaryTool("FigJam"), primaryTool("Jira"), primaryTool("Office"), secondaryTool("Planner"), secondaryTool("Notion"), secondaryTool("Miro")],
    ai: "Apoio na análise para fatiar entregas, escrever histórias e mapear dependências.",
  },
  "Design System": {
    title: "Design System",
    body: "Garantir consistência, componentes, tokens, padrões e documentação reutilizável.",
    tools: [primaryTool("Figma"), primaryTool("Storybook"), primaryTool("Confluence"), secondaryTool("Chromatic"), secondaryTool("Zeroheight"), secondaryTool("Supernova")],
    ai: "Apoio na construção, implementação, documentação, guidelines e exemplos de uso.",
  },
  Handoff: {
    title: "Handoff",
    body: "Transferir especificações para desenvolvimento com comportamento, estados e assets.",
    tools: [aiTool("Figma DEV Mode"), primaryTool("Storybook"), primaryTool("Jira"), primaryTool("Confluence"), primaryTool("GitHub"), primaryTool("Design System")],
    ai: "Gerar especificação funcional, estados, regras e critérios de aceite.",
  },
  Documentação: {
    title: "Documentação",
    body: "Registrar decisões, padrões, fluxos, regras, componentes e instruções de uso.",
    tools: [primaryTool("Figma"), primaryTool("GitHub"), primaryTool("Storybook"), primaryTool("Confluence"), secondaryTool("GitBook"), secondaryTool("Zeroheight")],
    ai: "Estruturar documentação, revisar clareza, gerar resumos e relatórios.",
  },
  Suporte: {
    title: "Suporte",
    body: "Monitorar dúvidas, bugs, reclamações, chamados e problemas recorrentes.",
    tools: [primaryTool("Sharepoint"), primaryTool("Jira Service"), secondaryTool("Zendesk"), secondaryTool("Intercom"), secondaryTool("Notion")],
    ai: "Ajuda para classificar chamados, resumir incidentes e identificar padrões.",
  },
  "Coleta de feedbacks": {
    title: "Coleta de feedbacks",
    body: "Capturar percepções contínuas de utilizadores, clientes e áreas internas.",
    tools: [primaryTool("Microsoft Forms"), primaryTool("Google Forms"), secondaryTool("Typeform"), secondaryTool("Hotjar"), secondaryTool("Dovetail")],
    ai: "Agrupar feedbacks, identificar temas e gerar oportunidades.",
  },
  "Observar utilizadores": {
    title: "Observar utilizadores",
    body: "Ver sessões reais, comportamentos, fricções, erros e pontos de abandono.",
    tools: [primaryTool("Microsoft Clarity"), primaryTool("Teams"), primaryTool("Google Meet"), secondaryTool("Hotjar"), secondaryTool("FullStory"), secondaryTool("UXCam")],
    ai: "Apoio para transformar observações em hipóteses e recomendações.",
  },
  "Análise de heatmaps": {
    title: "Análise de heatmaps",
    body: "Identificar cliques, scroll, atenção, áreas ignoradas e fricção visual.",
    tools: [primaryTool("Microsoft Clarity"), secondaryTool("Hotjar"), secondaryTool("FullStory"), secondaryTool("Crazyegg"), secondaryTool("UXCam"), secondaryTool("Mouseflow")],
    ai: "Interpretar padrões e sugerir melhorias de layout.",
  },
  "Coleta de dados": {
    title: "Coleta de dados",
    body: "Medir adopção, retenção, conversão, eventos, funis e impacto da solução.",
    tools: [primaryTool("Google Analytics"), primaryTool("Data Studio"), primaryTool("Power BI"), secondaryTool("Amplitude"), secondaryTool("Mixpanel")],
    ai: "Gerar leitura executiva, identificar anomalias e propor próximos ciclos.",
  },
};

const aiAccelerationTooltip: TooltipData = {
  title: "Aceleração com IA",
  body: "A IA acelera o processo de UX ao apoiar pesquisa, análise, ideação, prototipação, validação e documentação, tornando decisões mais rápidas, consistentes e baseadas em evidências.",
  tools: [primaryTool("Figma Make"), primaryTool("Google Stitch"), primaryTool("Google AI Studio"), aiTool("ChatGPT"), aiTool("Claude"), secondaryTool("Cursor"), secondaryTool("Lovable"), secondaryTool("Gemini"), secondaryTool("UX Pilot")],
  width: 520,
  height: 220,
};

const columns: StackColumn[] = [
  {
    stage: "Descobrir",
    icon: exploreIcon,
    items: [
      { label: "Mapeamento", icon: stickyNoteIcon, tooltip: tooltipByLabel.Mapeamento },
      { label: "Benchmarks", icon: thumbsUpDownIcon, tooltip: tooltipByLabel.Benchmarks },
      { label: "Analytics", icon: barChartIcon, tooltip: tooltipByLabel.Analytics },
      { label: "Inquéritos", icon: checklistIcon, tooltip: tooltipByLabel.Inquéritos },
      { label: "Entrevistas", icon: recordVoiceOverIcon, tooltip: tooltipByLabel.Entrevistas },
    ],
  },
  {
    stage: "Definir",
    icon: assignmentIcon,
    items: [
      { label: "Análise SWOT", icon: gridViewIcon, tooltip: tooltipByLabel["Análise SWOT"] },
      { label: "Personas", icon: accountCircleIcon, tooltip: tooltipByLabel.Personas },
      { label: "Mapa de empatia", icon: mapIcon, tooltip: tooltipByLabel["Mapa de empatia"] },
      { label: "User Stories", icon: clinicalNotesIcon, tooltip: tooltipByLabel["User Stories"] },
      { label: "Jobs to be done", icon: checkbookIcon, tooltip: tooltipByLabel["Jobs to be done"] },
    ],
  },
  {
    stage: "Explorar",
    icon: categorySearchIcon,
    items: [
      { label: "Ideação", icon: cognitionIcon, tooltip: tooltipByLabel.Ideação },
      { label: "Workshops", icon: workspacesIcon, tooltip: tooltipByLabel.Workshops },
      { label: "Card Sorting", icon: cardsStackIcon, tooltip: tooltipByLabel["Card Sorting"] },
      { label: "Wireframes", icon: tableIcon, tooltip: tooltipByLabel.Wireframes },
      { label: "Protótipos", icon: viewQuiltIcon, tooltip: tooltipByLabel.Protótipos },
    ],
  },
  {
    stage: "Validar",
    icon: syncSavedLocallyIcon,
    items: [
      { label: "Análise heurística", icon: listAltCheckIcon, tooltip: tooltipByLabel["Análise heurística"] },
      { label: "Testes de usabilidade", icon: mobileHandIcon, compact: true, tooltip: tooltipByLabel["Testes de usabilidade"] },
      { label: "Testes de acessibilidade", icon: accessibleIcon, compact: true, tooltip: tooltipByLabel["Testes de acessibilidade"] },
      { label: "Teste A/B", icon: compareIcon, tooltip: tooltipByLabel["Teste A/B"] },
      { label: "Refinamento", icon: diamondShineIcon, tooltip: tooltipByLabel.Refinamento },
    ],
  },
  {
    stage: "Entregar",
    icon: packageIcon,
    items: [
      { label: "Design System", icon: gestureSelectIcon, tooltip: tooltipByLabel["Design System"] },
      { label: "Documentação", icon: docsIcon, tooltip: tooltipByLabel.Documentação },
      { label: "Backlog", icon: viewKanbanIcon, tooltip: tooltipByLabel.Backlog },
      { label: "Handoff", icon: handshakeIcon, tooltip: tooltipByLabel.Handoff },
      { label: "Implementação", icon: codeXmlIcon, tooltip: tooltipByLabel.Implementação },
    ],
  },
  {
    stage: "Acompanhar",
    icon: searchInsightsIcon,
    width: 300,
    items: [
      { label: "Suporte", icon: helpIcon, tooltip: tooltipByLabel.Suporte },
      { label: "Coleta de feedbacks", icon: feedbackIcon, tooltip: tooltipByLabel["Coleta de feedbacks"] },
      { label: "Coleta de dados", icon: bidLandscapeIcon, tooltip: tooltipByLabel["Coleta de dados"] },
      { label: "Observar utilizadores", icon: multimodalHandEyeIcon, tooltip: tooltipByLabel["Observar utilizadores"] },
      { label: "Análise de heatmaps", icon: lineStyleIcon, tooltip: tooltipByLabel["Análise de heatmaps"] },
    ],
  },
];

function TisLogo({ scale }: { scale: (n: number) => number }) {
  return (
    <div style={{ width: scale(120), height: scale(56), position: "relative", opacity: 0.9, overflow: "visible", flexShrink: 0 }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: scale(120),
          height: scale(54),
          maskImage: `url('${imgGroup}')`,
          WebkitMaskImage: `url('${imgGroup}')`,
          maskSize: `${scale(236)}px ${scale(105.223)}px`,
          WebkitMaskSize: `${scale(236)}px ${scale(105.223)}px`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "0px 0px",
          WebkitMaskPosition: "0px 0px",
        }}
      >
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 119.929 53.6039">
          <path d={svgPaths.p1bc3fc80} fill={BLUE} />
          <path d={svgPaths.p8ed8880} fill={BLUE} />
          <path d={svgPaths.p79b1980} fill={BLUE} />
          <path d={svgPaths.p3380500} fill={NAVY} />
          <path d={svgPaths.p3777a600} fill={NAVY} />
          <path d={svgPaths.p30300b00} fill={NAVY} />
        </svg>
      </div>
    </div>
  );
}

function Footer({ vs, vx, vy }: { vs: (n: number) => number; vx: (n: number) => number; vy: (n: number) => number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fade(0.35)}
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(946),
        width: vx(1680),
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: vx(20), alignItems: "center", overflow: "hidden" }}>
        <p style={{ margin: 0, fontFamily: "'Bronkoh-SemiBold', sans-serif", fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal", color: BLUE, textTransform: "uppercase", whiteSpace: "nowrap" }}>
          09
        </p>
        <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", background: "rgba(43,118,193,0.4)", height: vs(1), left: 0, right: 0, top: 0 }} />
        </div>
        <p style={{ margin: 0, fontFamily: "'Bronkoh-SemiBold', sans-serif", fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal", color: MUTED, textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {FOOTER_TEXT}
        </p>
      </div>
      <TisLogo scale={vs} />
    </motion.div>
  );
}

function Header({ vx, vy, vs }: { vx: (n: number) => number; vy: (n: number) => number; vs: (n: number) => number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: vy(-24) }}
      animate={{ opacity: 1, y: 0 }}
      transition={fade(0.08)}
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(96),
        width: vx(1680),
        display: "flex",
        flexDirection: "column",
        gap: vy(24),
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: vy(16), width: "100%" }}>
        <p style={{ margin: 0, fontFamily: "'Bronkoh-SemiBold', sans-serif", fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal", color: BLUE, textTransform: "uppercase" }}>
          Ferramentas essenciais
        </p>
        <p style={{ margin: 0, fontFamily: "'Bronkoh-Heavy', sans-serif", fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1, color: NAVY }}>
          Stack e IA no processo
        </p>
      </div>
      <p style={{ width: vx(703), margin: 0, fontFamily: "'Bronkoh-Regular', sans-serif", fontSize: vs(28), lineHeight: 1.5, color: INK }}>
        Ferramentas e IA organizadas por etapa do ciclo de trabalho, com critérios de uso e governança.
      </p>
    </motion.div>
  );
}

function ItemTag({
  item,
  vx,
  vy,
  vs,
  onTooltipChange,
}: {
  item: StackItem;
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
  onTooltipChange: (tooltip: TooltipData | null, position?: { x: number; y: number }, placement?: TooltipPlacement) => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [compactShouldWrap, setCompactShouldWrap] = useState(false);
  const labelFontSize = vs(20);
  const labelLineHeight = vs(20);
  const labelGap = item.compact ? vx(4) : vx(12);
  const preferredBreak = item.compact ? preferredLabelBreaks[item.label] : undefined;

  useLayoutEffect(() => {
    if (!item.compact) return;

    const updateWrapState = () => {
      const button = buttonRef.current;
      const measure = measureRef.current;
      if (!button || !measure) return;

      const styles = window.getComputedStyle(button);
      const paddingX = Number.parseFloat(styles.paddingLeft) + Number.parseFloat(styles.paddingRight);
      const availableWidth = button.clientWidth - paddingX;
      const requiredInlineWidth = vs(32) + labelGap + measure.scrollWidth;
      setCompactShouldWrap(requiredInlineWidth + vs(12) > availableWidth);
    };

    updateWrapState();
    const resizeObserver = new ResizeObserver(updateWrapState);
    if (buttonRef.current) resizeObserver.observe(buttonRef.current);
    window.addEventListener("resize", updateWrapState);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWrapState);
    };
  }, [item.compact, item.label, labelGap, vx, vs]);

  const handleEnter = (event: MouseEvent<HTMLButtonElement>) => {
    if (item.tooltip) onTooltipChange(item.tooltip, { x: event.clientX, y: event.clientY }, "side");
  };

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (item.tooltip) onTooltipChange(item.tooltip, { x: event.clientX, y: event.clientY }, "side");
  };

  const handleLeave = () => onTooltipChange(null);

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={item.tooltip ? `Ver detalhes de ${item.label}` : item.label}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onFocus={(event) => {
        if (!item.tooltip) return;
        const rect = event.currentTarget.getBoundingClientRect();
        onTooltipChange(item.tooltip, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }, "side");
      }}
      onBlur={handleLeave}
      style={{
        border: 0,
        padding: `${vy(10)}px ${vx(20)}px ${vy(10)}px ${vx(12)}px`,
        borderRadius: vs(16),
        background: TAG_BG,
        width: "100%",
        boxSizing: "border-box",
        display: "block",
        cursor: "pointer",
        color: NAVY,
        flexShrink: 0,
        outline: "none",
      }}
    >
      <span
        style={{
          width: "max-content",
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: labelGap,
        }}
      >
        <img src={item.icon} alt="" style={{ width: vs(32), height: vs(32), display: "block", flex: "0 0 auto" }} />
        <span
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Bold', sans-serif",
            fontSize: labelFontSize,
            lineHeight: `${labelLineHeight}px`,
            color: NAVY,
            whiteSpace: item.compact && compactShouldWrap ? "normal" : "nowrap",
            width: "fit-content",
            textAlign: "left",
          }}
        >
          {item.compact && compactShouldWrap && preferredBreak ? (
            <>
              <span style={{ display: "block" }}>{preferredBreak[0]}</span>
              <span style={{ display: "block" }}>{preferredBreak[1]}</span>
            </>
          ) : (
            item.label
          )}
        </span>
      </span>
      {item.compact ? (
        <span
          ref={measureRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            fontFamily: "'Bronkoh-Bold', sans-serif",
            fontSize: labelFontSize,
            lineHeight: `${labelLineHeight}px`,
          }}
        >
          {item.label}
        </span>
      ) : null}
    </button>
  );
}

function StageTag({ column, vx, vy, vs }: { column: StackColumn; vx: (n: number) => number; vy: (n: number) => number; vs: (n: number) => number }) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: vs(16),
        background: BLUE,
        padding: `${vy(12)}px ${vx(24)}px ${vy(12)}px ${vx(16)}px`,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: vx(16),
      }}
    >
      <img src={column.icon} alt="" style={{ width: vs(32), height: vs(32), display: "block", flexShrink: 0 }} />
      <p style={{ margin: 0, fontFamily: "'Bronkoh-Heavy', sans-serif", fontSize: vs(26), lineHeight: `${vs(28)}px`, color: "#fff", whiteSpace: "nowrap" }}>
        {column.stage}
      </p>
    </div>
  );
}

function Tooltip({
  tooltip,
  x,
  y,
  vs,
  placement,
}: {
  tooltip: TooltipData | null;
  x: number;
  y: number;
  vs: (n: number) => number;
  placement: TooltipPlacement;
}) {
  const width = vs(tooltip?.width ?? 360);
  const estimatedHeight = vs(tooltip?.height ?? 300);
  const margin = vs(16);
  const offset = vs(18);
  const preferredLeft = x + offset;
  const fallbackLeft = x - width - offset;
  const sideLeft = preferredLeft + width + margin <= window.innerWidth ? preferredLeft : Math.max(margin, fallbackLeft);
  const centeredLeft = Math.min(window.innerWidth - width - margin, Math.max(margin, x - width / 2));
  const left = placement === "top" ? centeredLeft : sideLeft;
  const sideTop = Math.min(window.innerHeight - estimatedHeight - margin, Math.max(margin, y - estimatedHeight / 2));
  const topTop = Math.max(margin, y - estimatedHeight - offset);
  const top = placement === "top" ? topTop : sideTop;

  return (
    <AnimatePresence>
      {tooltip ? (
        <motion.div
          key={tooltip.title}
          initial={{ opacity: 0, scale: 0.96, y: vs(6) }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: vs(4) }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          style={{
            position: "fixed",
            left,
            top,
            width,
            zIndex: 5000,
            pointerEvents: "none",
            borderRadius: vs(28),
            padding: vs(24),
            boxSizing: "border-box",
            background: "rgba(0,0,0,0.9)",
            boxShadow: INTERACTIVE_HOVER_BOX_SHADOW,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            gap: vs(8),
          }}
        >
          <p style={{ margin: 0, fontFamily: "'Bronkoh-Heavy', sans-serif", fontSize: vs(20), lineHeight: `${vs(20)}px`, color: "#fff", whiteSpace: "nowrap" }}>
            {tooltip.title}
          </p>
          <p style={{ minWidth: "100%", margin: 0, fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: vs(16), lineHeight: 1.4, color: "#fff" }}>
            {tooltip.body}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: vs(4), paddingTop: vs(8), paddingBottom: vs(4), width: "100%" }}>
            {tooltip.tools.map((tool) => (
              <span
                key={tool.label}
                style={{
                  borderRadius: vs(8),
                  background: tool.background,
                  padding: `${vs(8)}px ${vs(12)}px`,
                  fontFamily: "'Bronkoh-Heavy', sans-serif",
                  fontSize: vs(16),
                  lineHeight: `${vs(16)}px`,
                  color: tool.color,
                  whiteSpace: "nowrap",
                }}
              >
                {tool.label}
              </span>
            ))}
          </div>
          {tooltip.ai ? (
            <div style={{ width: "100%", boxSizing: "border-box", borderRadius: vs(8), padding: vs(16), background: BLUE }}>
              <p style={{ margin: 0, fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: vs(15), lineHeight: 1.3, color: "#fff" }}>
                <strong style={{ fontWeight: 800 }}>✦ IA:</strong> {tooltip.ai}
              </p>
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Slide09Stack({ scaleX, scaleY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipPlacement, setTooltipPlacement] = useState<TooltipPlacement>("side");

  const updateTooltip = (next: TooltipData | null, position?: { x: number; y: number }, placement: TooltipPlacement = "side") => {
    setTooltip(next);
    setTooltipPlacement(placement);
    if (position) setTooltipPos(position);
  };

  const handleAiTooltipEnter = (event: MouseEvent<HTMLButtonElement>) => {
    updateTooltip(aiAccelerationTooltip, { x: event.clientX, y: event.clientY }, "top");
  };

  const handleAiTooltipMove = (event: MouseEvent<HTMLButtonElement>) => {
    updateTooltip(aiAccelerationTooltip, { x: event.clientX, y: event.clientY }, "top");
  };

  const handleAiTooltipFocus = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    updateTooltip(aiAccelerationTooltip, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }, "top");
  };

  return (
    <motion.div
      key="slide-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 overflow-hidden bg-white"
    >
      <Header vx={vx} vy={vy} vs={vs} />
      <motion.div
        initial={{ opacity: 0, y: vy(28) }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.18)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(399),
          width: vx(1680),
          display: "flex",
          flexDirection: "column",
          gap: vy(24),
        }}
      >
        <div style={{ width: "100%", display: "flex", gap: vx(24), alignItems: "flex-start", justifyContent: "center" }}>
          {columns.map((column) => (
            <div
              key={column.stage}
              style={{
                width: column.width ? vx(column.width) : undefined,
                flex: column.width ? "0 0 auto" : "1 0 0",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: vy(16),
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <StageTag column={column} vx={vx} vy={vy} vs={vs} />
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: vy(8), alignItems: "stretch", flexShrink: 0 }}>
                {column.items.map((item) => (
                  <ItemTag key={item.label} item={item} vx={vx} vy={vy} vs={vs} onTooltipChange={updateTooltip} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Ver detalhes de Aceleração com IA"
          onMouseEnter={handleAiTooltipEnter}
          onMouseMove={handleAiTooltipMove}
          onMouseLeave={() => updateTooltip(null)}
          onFocus={handleAiTooltipFocus}
          onBlur={() => updateTooltip(null)}
          style={{
            border: 0,
            width: "100%",
            borderRadius: vs(16),
            background: AI_PURPLE,
            padding: `${vy(12)}px ${vx(24)}px ${vy(12)}px ${vx(16)}px`,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: vx(16),
            cursor: "pointer",
            outline: "none",
          }}
        >
          <img src={statIcon} alt="" style={{ width: vs(32), height: vs(32), display: "block", flexShrink: 0 }} />
          <p style={{ margin: 0, fontFamily: "'Bronkoh-Heavy', sans-serif", fontSize: vs(26), lineHeight: `${vs(28)}px`, color: "#fff", whiteSpace: "nowrap" }}>
            Aceleração com IA
          </p>
        </button>
      </motion.div>
      <Footer vx={vx} vy={vy} vs={vs} />
      <Tooltip tooltip={tooltip} x={tooltipPos.x} y={tooltipPos.y} vs={vs} placement={tooltipPlacement} />
    </motion.div>
  );
}
