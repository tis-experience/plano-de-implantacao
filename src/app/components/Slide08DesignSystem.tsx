import { useRef, useState, type MouseEvent, type ReactNode, type WheelEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import {
  INTERACTIVE_HOVER_BOX_SHADOW,
  INTERACTIVE_HOVER_TRANSITION,
} from "../constants/interactiveShadow";
import { cycleVerticalPage, resolveVerticalPage } from "../constants/verticalPageNav";
import { createSlideMetrics, scaleTypography } from "../scaling";

interface Slide08DesignSystemProps {
  scaleX: number;
  scaleY: number;
}

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
  vg: (n: number) => number;
};

const BLUE = "#036ef2";
const NAVY = "#04165d";
const INK = "#2f3237";
const MUTED = "#6e7587";
const PALE_BLUE = "rgba(3,110,242,0.06)";
const STROKE_BLUE = "rgba(43,118,193,0.4)";
const FOOTER_TEXT = "PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING";
const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_CONTENT_TRANSITION_SECONDS = 0.42;
const GOVERNANCE_BODY_TEXT_SIZE = 15;
const NAV_ARROW_UP_PATH = "M2 16L12 6L22 16L20.225 17.775L12 9.55L3.775 17.775L2 16Z";
const NAV_ARROW_DOWN_PATH = "M2 8.025L3.775 6.25L12 14.475L20.225 6.25L22 8.025L12 18.025L2 8.025Z";
const SLIDE_08_DEFAULT_HEADER = {
  eyebrow: "Em construção",
  title: "Design System TIS",
  description: "Design System como infraestrutura operacional para consistência, velocidade, acessibilidade e integração com engenharia.",
  width: 820,
  descriptionWidth: 760,
};
const SLIDE_08_FLOW_HEADER = {
  eyebrow: "Design System TIS",
  title: "Fluxo de governança do Design System",
  description:
    "A IA acelera análise, síntese e produção assistida. Decisão, qualidade, acessibilidade e aceite permanecem sob responsabilidade da equipa.",
  width: 1664,
  descriptionWidth: 1664,
};

const metricsRows = [
  {
    value: "Até\n70%",
    title: "Redução de custos com Front-end",
    body: "Automação da escrita de código e geração de componentes com IA.",
  },
  {
    value: "65%",
    title: "Mais velocidade nas entregas",
    body: "Redução do ciclo entre a descoberta do problema e a entrega da solução.",
  },
  {
    value: "85%",
    title: "Redução de débitos técnicos",
    body: "Eliminação de componentes duplicados e padronização automática de código legado.",
  },
  {
    value: "800%",
    title: "Retorno sobre o Investimento anual",
    body: "Impacto gerado pela escala da automação em múltiplos produtos e squads.",
  },
];

const benefits = [
  {
    title: "Escalabilidade:",
    body: "Permite criar novas telas e funcionalidades muito mais rápido.",
  },
  {
    title: "Consistência:",
    body: "Garante que o usuário tenha a mesma experiência em diferentes partes do produto ou em dispositivos variados.",
  },
  {
    title: "Eficiência de Custos:",
    body: "Reduz o retrabalho de designers e desenvolvedores ao evitar que criem o mesmo componente do zero várias vezes.",
  },
  {
    title: "Melhor Comunicação:",
    body: "Serve como uma linguagem comum entre times de design e engenharia.",
  },
];

type TextPart = {
  text: string;
  bold?: boolean;
};

type BulletContent =
  | { kind: "parts"; parts: TextPart[] }
  | {
      kind: "ordered";
      title: string;
      items: Array<{ label: string; body: string }>;
    };

type FeatureCardContent = {
  title: string;
  bullets: BulletContent[];
};

type Slide08HeaderContent = {
  eyebrow: string;
  title: string;
  description: string;
  width: number;
  descriptionWidth: number;
};

const designSystemFeatureCards: FeatureCardContent[] = [
  {
    title: "Arquitetura",
    bullets: [
      {
        kind: "parts",
        parts: [
          { text: "Core agnóstico a stack", bold: true },
          { text: ", preparado para múltiplos produtos, frameworks e contextos" },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "Tokens em JSON/DTCG", bold: true },
          { text: " como contrato entre design, código, documentação e IA." },
        ],
      },
      {
        kind: "ordered",
        title: "Arquitetura em 3 camadas:",
        items: [
          { label: "Foundation:", body: " valores primitivos do sistema." },
          { label: "Semantic:", body: " intenções, estados, hierarquia e contexto." },
          { label: "Component:", body: " tokens específicos de componentes." },
        ],
      },
    ],
  },
  {
    title: "Governança e documentação",
    bullets: [
      {
        kind: "parts",
        parts: [
          { text: "Documentação estruturada", bold: true },
          { text: " em páginas publicadas e " },
          { text: "arquivos .md", bold: true },
          { text: "." },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "ADRs", bold: true },
          { text: " registram decisões arquiteturais, trade-offs e mudanças de direção." },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "Brand Principles", bold: true },
          { text: " orientam fundamentos de marca, tom, identidade e critérios de evolução." },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "Changelog", bold: true },
          { text: ", " },
          { text: "inventários", bold: true },
          { text: ", " },
          { text: "guias de processo", bold: true },
          { text: " e " },
          { text: "documentação técnica", bold: true },
          { text: " garantem rastreabilidade." },
        ],
      },
    ],
  },
  {
    title: "Integração com engenharia",
    bullets: [
      {
        kind: "parts",
        parts: [
          { text: "Tokens sincronizados", bold: true },
          { text: " entre Figma e código." },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "Handoff", bold: true },
          { text: " com propriedades, estados, adaptação responsiva e critérios de aceite." },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "Changelog, inventários, guias de processo e documentação técnica garantem " },
          { text: "rastreabilidade", bold: true },
          { text: "." },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "Storybook", bold: true },
          { text: " com " },
          { text: "documentação viva", bold: true },
          { text: " para consumo técnico." },
        ],
      },
      {
        kind: "parts",
        parts: [
          { text: "QA visual", bold: true },
          { text: " e " },
          { text: "acessibilidade", bold: true },
          { text: " como parte do componente." },
        ],
      },
    ],
  },
  {
    title: "Operação e métricas",
    bullets: [
      { kind: "parts", parts: [{ text: "% de projectos consumindo o DS." }] },
      { kind: "parts", parts: [{ text: "% de reutilização de componentes." }] },
      { kind: "parts", parts: [{ text: "Tempo design → dev." }] },
      { kind: "parts", parts: [{ text: "Redução de retrabalho." }] },
      { kind: "parts", parts: [{ text: "Cobertura de templates e playbooks." }] },
      { kind: "parts", parts: [{ text: "Conformidade WCAG 2.2 AA." }] },
      { kind: "parts", parts: [{ text: "Bugs de UI por release." }] },
      { kind: "parts", parts: [{ text: "Componentes ativos, deprecated e backlog crítico." }] },
    ],
  },
];

const designSystemBottomCards = [
  {
    title: "Uso por agentes de IA",
    body: "AGENTS.md define regras operacionais para agentes, enquanto documentação, inventários e APIs tornam o repositório legível para auditoria, manutenção e planejamento apoiados por IA.",
  },
  {
    title: "Acessibilidade como premissa",
    body: "WCAG 2.2 AA como referência de qualidade. Tokens, componentes e documentação consideram contraste, foco visível, estados, ARIA e padrões acessíveis de interação.",
  },
];

const governanceStages = [
  {
    title: "Entrada e triagem",
    color: BLUE,
    tint: "rgba(3,110,242,0.05)",
    bullets: [
      "Necessidade vem de projecto real, incidente, dívida ou padrão recorrente.",
      "Responsável, objectivo, impacto e urgência ficam registados na solicitação.",
    ],
    ai: "IA compara o pedido com o que já existe. A equipa valida necessidade e variações.",
  },
  {
    title: "Descoberta e especificação",
    color: "#6546be",
    tint: "rgba(101,70,190,0.05)",
    bullets: ["Mapear variantes, estados, conteúdo, acessibilidade, tokens e dependências.", "Verificar se um componente existente resolve o caso."],
    ai: "IA identifica padrões e pontos de ajuste. A equipa decide o que muda.",
  },
  {
    title: "Design e protótipo",
    color: "#27975b",
    tint: "rgba(39,151,91,0.05)",
    bullets: ["Criar componente em Figma com propriedades, estados e adaptação responsiva.", "Aplicar tokens e nomenclatura do Design System."],
    ai: "IA sugere estrutura e nomes. Designer valida anatomia e uso.",
  },
  {
    title: "Aprovação e plano técnico",
    color: "#be6627",
    tint: "rgba(190,102,39,0.05)",
    bullets: ["Revisão por responsável do Design System e engenharia.", "Definir versão, impacto e migração quando necessário."],
    ai: "IA resume impacto. Responsável avalia e aprova avanço.",
  },
  {
    title: "Implementação e QA",
    color: BLUE,
    tint: "rgba(3,110,242,0.05)",
    bullets: ["Código, testes de estados, acessibilidade e exemplos.", "Verificar tokens, temas e comportamento responsivo."],
    ai: "IA apoia implementação e documentação. Engenharia valida qualidade e testes.",
  },
  {
    title: "Release e adopção",
    color: "#27975b",
    tint: "rgba(39,151,91,0.05)",
    bullets: ["Publicar em Figma, código e documentação.", "Comunicar uso recomendado e substituições."],
    ai: "IA identifica desvios de uso. A equipa ajusta documentação e adopção.",
  },
];

const governanceChecks = [
  { label: "Necessidade comprovada", color: BLUE, width: 260 },
  { label: "Sem duplicação funcional", color: "#6546be", width: 260 },
  { label: "Componente criado com tokens, estados e acessibilidade", color: "#27975b", width: 540 },
  { label: "Documentação publicada", color: BLUE, width: 260 },
  { label: "Adopção por projecto", color: "#27975b", width: 260 },
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

function Header({
  metrics,
  content,
  showDescription = true,
  reducedMotion,
  descriptionEnterDelay = 0,
}: {
  metrics: Metrics;
  content: Slide08HeaderContent;
  showDescription?: boolean;
  reducedMotion: boolean;
  descriptionEnterDelay?: number;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.div
      initial={{ opacity: 0, y: vy(-24) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(96),
        width: vx(1664),
        display: "flex",
        flexDirection: "column",
        gap: vy(24),
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: vy(16), width: "100%" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-SemiBold', sans-serif",
            fontSize: vs(16),
            letterSpacing: vs(2),
            lineHeight: "normal",
            color: BLUE,
            textTransform: "uppercase",
          }}
        >
          {content.eyebrow}
        </p>
        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={content.title}
            initial={{ opacity: 0, y: reducedMotion ? 0 : vy(8) }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : vy(-8) }}
            transition={{ duration: reducedMotion ? 0 : 0.28, ease: EASE }}
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontSize: vs(80),
              letterSpacing: vs(-1.5),
              lineHeight: 1,
              color: NAVY,
              whiteSpace: "nowrap",
            }}
          >
            {content.title}
          </motion.p>
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {showDescription ? (
          <motion.p
            key={content.description}
            initial={{ opacity: 0, y: reducedMotion ? 0 : vy(-6) }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: reducedMotion ? 0 : 0.34,
                delay: reducedMotion ? 0 : descriptionEnterDelay,
                ease: EASE,
              },
            }}
            exit={{
              opacity: 0,
              y: reducedMotion ? 0 : vy(-8),
              transition: {
                duration: reducedMotion ? 0 : 0.18,
                delay: 0,
                ease: EASE,
              },
            }}
            style={{
              width: vx(content.descriptionWidth),
              margin: 0,
              fontFamily: "'Bronkoh-Regular', sans-serif",
              fontSize: vs(28),
              lineHeight: 1.5,
              color: INK,
            }}
          >
            {content.description}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

function Footer({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
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
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-SemiBold', sans-serif",
            fontSize: vs(14),
            letterSpacing: vs(1.5),
            lineHeight: "normal",
            color: BLUE,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          08
        </p>
        <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", background: STROKE_BLUE, height: vs(1), left: 0, right: 0, top: 0 }} />
        </div>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-SemiBold', sans-serif",
            fontSize: vs(14),
            letterSpacing: vs(1.5),
            lineHeight: "normal",
            color: MUTED,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {FOOTER_TEXT}
        </p>
      </div>
      <TisLogo scale={vs} />
    </motion.div>
  );
}

function stopEvent(event: MouseEvent<HTMLButtonElement>) {
  event.stopPropagation();
}

function NavDot({ active, hovered }: { active: boolean; hovered: boolean }) {
  const highlighted = active || hovered;

  return (
    <motion.svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        display: "block",
        overflow: "visible",
        flexShrink: 0,
        filter: hovered
          ? "drop-shadow(0 2px 4px rgba(5, 28, 117, 0.24)) drop-shadow(0 8px 24px rgba(5, 28, 117, 0.16))"
          : "none",
        transition: "filter 0.24s ease",
      }}
    >
      <motion.circle
        cx="12"
        cy="12"
        animate={{
          r: highlighted ? 10 : 8,
          fill: highlighted ? BLUE : STROKE_BLUE,
        }}
        initial={false}
        transition={{ duration: 0.24, ease: EASE }}
      />
    </motion.svg>
  );
}

function NavDotButton({
  active,
  onClick,
  ariaLabel,
}: {
  active: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={active ? "true" : undefined}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        border: 0,
        padding: 0,
        cursor: "pointer",
        background: hovered ? BLUE : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        overflow: "visible",
        transition: INTERACTIVE_HOVER_TRANSITION,
      }}
    >
      <NavDot active={active} hovered={hovered} />
    </button>
  );
}

function VerticalNavArrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path
        d={direction === "up" ? NAV_ARROW_UP_PATH : NAV_ARROW_DOWN_PATH}
        fill="currentColor"
        style={{ transition: "fill 150ms ease" }}
      />
    </svg>
  );
}

function NavArrowButton({
  onClick,
  ariaLabel,
  children,
  size,
}: {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
  children: ReactNode;
  size: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{
        width: size,
        height: size,
        border: 0,
        padding: 0,
        borderRadius: "50%",
        background: hovered ? BLUE : "transparent",
        color: hovered ? "#fff" : BLUE,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        boxShadow: hovered ? INTERACTIVE_HOVER_BOX_SHADOW : "none",
        transition: INTERACTIVE_HOVER_TRANSITION,
      }}
    >
      {children}
    </button>
  );
}

function VerticalNav({
  page,
  setPage,
  pageCount,
  metrics,
}: {
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
  metrics: Metrics;
}) {
  const { vx, vy } = metrics;
  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientY - rect.top) / rect.height;
    if (ratio < 0.37) setPage(cycleVerticalPage(page, -1, pageCount));
    if (ratio > 0.63) setPage(cycleVerticalPage(page, 1, pageCount));
  };

  return (
    <div
      style={{
        position: "absolute",
        left: vx(1810),
        top: vy(420),
        width: 88,
        height: 240,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 20,
      }}
      onClick={handleContainerClick}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <div
        style={{
          marginLeft: vx(22),
          width: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        <NavArrowButton
          ariaLabel="Página anterior do slide 8"
          onClick={(event) => {
            stopEvent(event);
            setPage(cycleVerticalPage(page, -1, pageCount));
          }}
          size={40}
        >
          <VerticalNavArrow direction="up" />
        </NavArrowButton>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
          {Array.from({ length: pageCount }).map((_, index) => (
            <NavDotButton
              key={index}
              active={index === page}
              onClick={(event) => {
                stopEvent(event);
                setPage(index);
              }}
              ariaLabel={`Ir para página ${index + 1} do slide 8`}
            />
          ))}
        </div>
        <NavArrowButton
          ariaLabel="Próxima página do slide 8"
          onClick={(event) => {
            stopEvent(event);
            setPage(cycleVerticalPage(page, 1, pageCount));
          }}
          size={40}
        >
          <VerticalNavArrow direction="down" />
        </NavArrowButton>
      </div>
    </div>
  );
}

function RoiCard({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;
  const rowHeights = [92, 78, 78, 72];

  return (
    <motion.div
      initial={{ opacity: 0, x: vx(32) }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.52, delay: 0.16, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: vx(1148),
        top: vy(220),
        width: vx(620),
        height: vy(547),
        boxSizing: "border-box",
        borderRadius: vs(40),
        background: PALE_BLUE,
        padding: `${vy(48)}px ${vx(56)}px`,
        display: "flex",
        flexDirection: "column",
        gap: vy(40),
      }}
    >
      <p
        style={{
          width: vx(508),
          margin: 0,
          fontFamily: "'Bronkoh-SemiBold', sans-serif",
          fontSize: vs(16),
          letterSpacing: vs(2),
          lineHeight: "normal",
          color: BLUE,
          textTransform: "uppercase",
        }}
      >
        Redução de Custos e ROI (Design system + IA)
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: vy(24), width: vx(491) }}>
        {metricsRows.map((row, index) => (
          <div
            key={row.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: vx(24),
              width: "100%",
              height: vy(rowHeights[index]),
            }}
          >
            <p
              style={{
                margin: 0,
                width: vx(120),
                flexShrink: 0,
                fontFamily: "'Bronkoh-Heavy', sans-serif",
                fontSize: 0,
                lineHeight: 0,
                letterSpacing: index === 3 ? vs(-2) : vs(-1),
                color: BLUE,
              }}
            >
              {index === 0 ? (
                <>
                  <span style={{ display: "block", fontFamily: "'Bronkoh-Regular', sans-serif", fontSize: vs(30), lineHeight: 0.9, paddingBottom: 8 }}>Até</span>
                  <span style={{ fontSize: vs(64), lineHeight: 0.9 }}>70</span>
                  <span style={{ fontSize: vs(48), lineHeight: 0.9 }}>%</span>
                </>
              ) : index === 3 ? (
                <>
                  <span style={{ fontSize: vs(56), lineHeight: "normal" }}>800</span>
                  <span style={{ fontSize: vs(32), lineHeight: "normal" }}>%</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: vs(64), lineHeight: "normal" }}>{index === 1 ? "65" : "85"}</span>
                  <span style={{ fontSize: vs(48), lineHeight: "normal" }}>%</span>
                </>
              )}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: vy(4), width: vx(347), minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Bronkoh-Bold', sans-serif",
                  fontSize: vs(20),
                  lineHeight: 1.2,
                  color: NAVY,
                }}
              >
                {row.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: vs(16),
                  lineHeight: 1.4,
                  color: INK,
                }}
              >
                {row.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Benefits({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.div
      initial={{ opacity: 0, y: vy(24) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(384),
        width: vx(760),
        display: "flex",
        flexDirection: "column",
        gap: vy(28),
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Bronkoh-Heavy', sans-serif",
          fontSize: vs(26),
          lineHeight: 1.3,
          color: NAVY,
        }}
      >
        Benefícios na implantação
      </p>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: vy(28),
        }}
      >
        {benefits.map((benefit) => (
          <li key={benefit.title} style={{ display: "grid", gridTemplateColumns: `${vs(10)}px 1fr`, columnGap: vx(16), alignItems: "baseline" }}>
            <span style={{ width: vs(10), height: vs(10), background: BLUE, display: "block", transform: `translateY(${vs(-1)}px)` }} />
            <p
              style={{
                margin: 0,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 400,
                fontSize: vs(20),
                lineHeight: 1.5,
                color: NAVY,
              }}
            >
              <span style={{ fontWeight: 800 }}>{benefit.title}</span> {benefit.body}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FeatureBullet({ content, metrics }: { content: BulletContent; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div style={{ display: "flex", gap: vx(12), alignItems: "flex-start", width: "100%" }}>
      <span style={{ width: vs(10), height: vy(26), display: "flex", alignItems: "center", flexShrink: 0 }}>
        <span style={{ width: vs(10), height: vs(10), background: BLUE, display: "block", flexShrink: 0 }} />
      </span>
      {content.kind === "ordered" ? (
        <div
          style={{
            flex: "1 0 0",
            minWidth: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: vs(18),
            lineHeight: 1.4,
            letterSpacing: vs(-0.018),
            color: INK,
          }}
        >
          <p style={{ margin: `0 0 ${vy(8)}px 0` }}>{content.title}</p>
          <ol style={{ margin: 0, paddingLeft: vx(27), listStyleType: "decimal" }}>
            {content.items.map((item) => (
              <li key={item.label} style={{ margin: 0, padding: 0 }}>
                <span>{item.label}</span>
                <span style={{ fontWeight: 400 }}>{item.body}</span>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <p
          style={{
            flex: "1 0 0",
            minWidth: 0,
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: vs(18),
            lineHeight: 1.4,
            letterSpacing: vs(-0.018),
            color: INK,
          }}
        >
          {content.parts.map((part, index) => (
            <span key={`${part.text}-${index}`} style={{ fontWeight: part.bold ? 800 : 400 }}>
              {part.text}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

function FeatureCard({ card, metrics }: { card: FeatureCardContent; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        width: vx(404),
        height: vy(481),
        boxSizing: "border-box",
        border: `${vs(2)}px solid ${BLUE}`,
        borderRadius: vs(24),
        background: "#fff",
        padding: `${vy(32)}px ${vx(32)}px`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: vy(16) }}>
        <p
          style={{
            width: "100%",
            margin: 0,
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(26),
            lineHeight: 1.4,
            color: NAVY,
          }}
        >
          {card.title}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: vy(16), width: "100%" }}>
          {card.bullets.map((bullet, index) => (
            <FeatureBullet key={`${card.title}-${index}`} content={bullet} metrics={metrics} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BottomInfoCard({ title, body, metrics }: { title: string; body: string; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        width: vx(824),
        height: vy(138),
        boxSizing: "border-box",
        border: `${vs(2)}px solid ${BLUE}`,
        borderRadius: vs(24),
        background: PALE_BLUE,
        padding: `${vy(24)}px ${vx(24)}px`,
        display: "flex",
        flexDirection: "column",
        gap: vy(8),
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Bronkoh-Heavy', sans-serif",
          fontSize: vs(24),
          lineHeight: 1.4,
          color: NAVY,
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </p>
      <p
        style={{
          width: vx(776),
          margin: 0,
          fontFamily: "'Inter', 'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: vs(16),
          lineHeight: `${vs(24)}px`,
          color: "#14171a",
        }}
      >
        {body}
      </p>
    </div>
  );
}

function StageBullet({ text, color, metrics }: { text: string; color: string; metrics: Metrics }) {
  const { vx, vs } = metrics;
  const markerSize = metrics.vg(12);

  return (
    <div style={{ display: "flex", gap: vx(10), alignItems: "flex-start", width: "100%" }}>
      <svg
        data-governance-bullet-marker
        width={markerSize}
        height={markerSize}
        viewBox="0 0 12 12"
        aria-hidden="true"
        focusable="false"
        style={{
          width: markerSize,
          height: markerSize,
          marginTop: metrics.vg(4.5),
          display: "block",
          flex: "0 0 auto",
          overflow: "visible",
        }}
      >
        <rect
          x="1"
          y="1"
          width="10"
          height="10"
          rx="1.5"
          fill="none"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          shapeRendering="geometricPrecision"
        />
      </svg>
      <p
        style={{
          flex: "1 0 0",
          minWidth: 0,
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: metrics.vg(GOVERNANCE_BODY_TEXT_SIZE),
          lineHeight: 1.4,
          letterSpacing: vs(-0.016),
          color: INK,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function StageAiNote({ text, color, tint, metrics }: { text: string; color: string; tint: string; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        width: "100%",
        height: vy(106),
        boxSizing: "border-box",
        border: `${vs(1)}px solid ${color}`,
        borderRadius: vs(16),
        background: tint,
        padding: `${vy(20)}px ${vx(16)}px`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", gap: vx(8), alignItems: "flex-start", width: "100%" }}>
        <span style={{ width: vs(10), height: vy(22), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span
            style={{
              width: vs(8),
              height: vs(8),
              background: color,
              transform: "rotate(45deg)",
              display: "block",
              flexShrink: 0,
            }}
          />
        </span>
        <p
          style={{
            flex: "1 0 0",
            minWidth: 0,
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: metrics.vg(GOVERNANCE_BODY_TEXT_SIZE),
            lineHeight: 1.4,
            letterSpacing: vs(-0.016),
            color: INK,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function GovernanceStageCard({ stage, metrics }: { stage: (typeof governanceStages)[number]; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div style={{ width: vx(260.6667), height: vy(400), display: "flex", flexDirection: "column", gap: vy(16), flexShrink: 0 }}>
      <div
        style={{
          width: "100%",
          height: vy(74),
          boxSizing: "border-box",
          borderRadius: vs(16),
          background: stage.color,
          padding: `${vy(24)}px ${vx(24)}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            width: "100%",
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(20),
            lineHeight: 1.1,
            textAlign: "center",
            color: "#fff",
          }}
        >
          {stage.title}
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: vy(188),
          boxSizing: "border-box",
          border: `${vs(1)}px solid rgba(110,117,135,0.4)`,
          borderRadius: vs(16),
          padding: `${vy(20)}px ${vx(16)}px`,
          display: "flex",
          flexDirection: "column",
          gap: vy(16),
        }}
      >
        {stage.bullets.map((bullet) => (
          <StageBullet key={bullet} text={bullet} color={stage.color} metrics={metrics} />
        ))}
      </div>
      <StageAiNote text={stage.ai} color={stage.color} tint={stage.tint} metrics={metrics} />
    </div>
  );
}

function GovernanceFlowArrow({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div style={{ width: vx(20), height: vy(400), paddingTop: vy(30), display: "flex", justifyContent: "center", boxSizing: "border-box", flexShrink: 0 }}>
      <svg width={vs(14)} height={vs(14)} viewBox="0 0 14 14" fill="none" style={{ display: "block", overflow: "visible" }}>
        <path d="M1.25 7H12.25M8.25 3L12.25 7L8.25 11" stroke={INK} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function GovernanceCheck({ item, metrics }: { item: (typeof governanceChecks)[number]; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        width: vx(item.width),
        height: vy(62),
        boxSizing: "border-box",
        border: `${vs(1)}px solid rgba(110,117,135,0.4)`,
        borderRadius: vs(16),
        padding: `${vy(20)}px ${vx(20)}px`,
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", gap: vx(8), alignItems: "center", width: "100%" }}>
        <svg width={vs(20)} height={vs(20)} viewBox="0 0 20 20" fill="none" style={{ display: "block", flexShrink: 0 }}>
          <path d="M5.5 10.3L8.35 13.1L14.5 6.9" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p
          style={{
            flex: "1 0 0",
            minWidth: 0,
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: metrics.vg(16),
            lineHeight: 1.4,
            letterSpacing: vs(-0.5),
            color: INK,
            whiteSpace: "nowrap",
          }}
        >
          {item.label}
        </p>
      </div>
    </div>
  );
}

function PageOne({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <>
      <Benefits metrics={metrics} />
      <RoiCard metrics={metrics} />
      <motion.p
        initial={{ opacity: 0, y: vy(18) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.46, delay: 0.28, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: vx(130),
          top: vy(813),
          width: vx(829),
          margin: 0,
          fontFamily: "'Bronkoh-Heavy', sans-serif",
          fontSize: vs(26),
          lineHeight: 1.3,
          color: NAVY,
        }}
      >
        Nosso Design System já nasce preparado para o uso por agentes, fornecendo contexto e acelerando o processo.
      </motion.p>
    </>
  );
}

function PageTwo({ metrics }: { metrics: Metrics }) {
  const { vx, vy } = metrics;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: vy(24) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(267),
          width: vx(1664),
          height: vy(635),
          display: "flex",
          flexDirection: "column",
          gap: vy(16),
        }}
      >
        <div style={{ display: "flex", gap: vx(16), width: "100%", height: vy(481), alignItems: "stretch" }}>
          {designSystemFeatureCards.map((card) => (
            <FeatureCard key={card.title} card={card} metrics={metrics} />
          ))}
        </div>
        <div style={{ display: "flex", gap: vx(16), width: "100%", height: vy(138), alignItems: "stretch" }}>
          {designSystemBottomCards.map((card) => (
            <BottomInfoCard key={card.title} title={card.title} body={card.body} metrics={metrics} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

function PageThree({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.div
      initial={{ opacity: 0, y: vy(24) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.14, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(341),
        width: vx(1664),
        height: vy(561),
        display: "flex",
        flexDirection: "column",
        gap: vy(32),
      }}
    >
      <div style={{ width: "100%", height: vy(400), display: "flex", alignItems: "flex-start" }}>
        {governanceStages.map((stage, index) => (
          <div key={stage.title} style={{ display: "flex", alignItems: "flex-start", flexShrink: 0 }}>
            <GovernanceStageCard stage={stage} metrics={metrics} />
            {index < governanceStages.length - 1 ? <GovernanceFlowArrow metrics={metrics} /> : null}
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          height: vy(129),
          boxSizing: "border-box",
          borderTop: `${vs(1)}px solid rgba(110,117,135,0.5)`,
          paddingTop: vy(24),
          display: "flex",
          flexDirection: "column",
          gap: vy(12),
        }}
      >
        <p
          style={{
            width: "100%",
            margin: 0,
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(22),
            lineHeight: 1.4,
            color: NAVY,
          }}
        >
          Camada de validação
        </p>
        <div style={{ display: "flex", gap: vx(20), width: "100%", height: vy(62), alignItems: "flex-start" }}>
          {governanceChecks.map((item) => (
            <GovernanceCheck key={item.label} item={item} metrics={metrics} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PlaceholderPage() {
  return null;
}

export function Slide08DesignSystem({ scaleX, scaleY }: Slide08DesignSystemProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [page, setPageState] = useState(0);
  const [pageDirection, setPageDirection] = useState(1);
  const lastWheelRef = useRef(0);
  const pageCount = 3;
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);
  const governanceTextScale = Math.min(scaleX, scaleY * 1.16);
  const metrics = {
    vx,
    vy,
    vs,
    vg: (n: number) => scaleTypography(n, governanceTextScale),
  };
  const headerContent = page === 2 ? SLIDE_08_FLOW_HEADER : SLIDE_08_DEFAULT_HEADER;
  const showHeaderDescription = page !== 1;
  const descriptionEnterDelay =
    page === 2
      ? 0.36
      : page === 0 && pageDirection < 0
        ? PAGE_CONTENT_TRANSITION_SECONDS
        : 0;

  const setPage = (next: number) => {
    const { target, direction } = resolveVerticalPage(next, page, pageCount);
    if (direction === 0) return;
    setPageDirection(direction);
    setPageState(target);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (Math.abs(event.deltaY) < 20) return;

    const now = window.performance.now();
    if (now - lastWheelRef.current < 650) return;
    lastWheelRef.current = now;
    setPage(event.deltaY > 0 ? page + 1 : page - 1);
  };

  return (
    <motion.div
      key="slide-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.35 }}
      className="absolute inset-0 overflow-hidden bg-white"
      onWheel={handleWheel}
    >
      <VerticalNav page={page} setPage={setPage} pageCount={pageCount} metrics={metrics} />
      <Header metrics={metrics} content={headerContent} showDescription={showHeaderDescription} reducedMotion={reducedMotion} descriptionEnterDelay={descriptionEnterDelay} />
      <AnimatePresence mode="wait" custom={pageDirection}>
        <motion.div
          key={page}
          initial={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(40) }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(-34) }}
          transition={{ duration: reducedMotion ? 0 : PAGE_CONTENT_TRANSITION_SECONDS, ease: EASE }}
          style={{ position: "absolute", inset: 0 }}
        >
          {page === 0 ? <PageOne metrics={metrics} /> : page === 1 ? <PageTwo metrics={metrics} /> : page === 2 ? <PageThree metrics={metrics} /> : <PlaceholderPage />}
        </motion.div>
      </AnimatePresence>
      <Footer metrics={metrics} />
    </motion.div>
  );
}
