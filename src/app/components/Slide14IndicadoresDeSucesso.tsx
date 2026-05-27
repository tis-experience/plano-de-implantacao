import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import navSvgPaths from "../../imports/Container/svg-veiw3t7zfa";
import modalSvgPaths from "../../imports/Modal/svg-plwxvk4et1";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import flowsheetIcon from "../../assets/slide14/flowsheet.svg";
import modelingIcon from "../../assets/slide14/modeling.svg";
import workspacePremiumIcon from "../../assets/slide14/workspace-premium.svg";
import thumbsUpDownIcon from "../../assets/slide14/thumbs-up-down.svg";
import { MonthlyReadingCycle } from "./MonthlyReadingCycle";
import {
  INTERACTIVE_HOVER_BOX_SHADOW,
  INTERACTIVE_HOVER_TRANSITION,
  interactiveCircleHoverSize,
} from "../constants/interactiveShadow";
import { createSlideMetrics } from "../scaling";
import {
  OPERACIONAL_COLUMNS,
  PILLAR_CARDS,
  UX_COLUMNS,
  type MetricColumn,
} from "./slide14MetricsData";

interface Props {
  scaleX: number;
  scaleY: number;
  onPanelViewChange?: (view: PanelView) => void;
}

type PanelView = "overview" | "operacional" | "ux";

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

const BLUE = "#036ef2";
const NAVY = "#04165d";
const STROKE_BLUE = "rgba(43,118,193,0.4)";
const PALE_BLUE = "rgba(3, 110, 242, 0.06)";
const PANEL_BG = "#f0f6fe";
const FOOTER_TEXT = "PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING";
const EASE = [0.22, 1, 0.36, 1] as const;
const PANEL_TRANSITION = { duration: 0.5, ease: EASE };
const PANEL_SWAP_TRANSITION = { duration: 0.38, ease: EASE };
/** Saída some antes do slide terminar — evita colunas flex sobrepostas no último frame */
const PANEL_SWAP_EXIT_TRANSITION = {
  x: { duration: 0.38, ease: EASE },
  opacity: { duration: 0.22, ease: EASE },
};

const panelChromeStyle = (radius: number): CSSProperties => ({
  isolation: "isolate",
  transform: "translateZ(0)",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  borderRadius: radius,
});

/** Figma 1018:1642 — linha do painel aberto */
const PANEL_ROW_H = 458;
const PANEL_CLOSE_LEFT = 32;
const PANEL_CLOSE_SIZE = 64;
const PANEL_MAIN_W = 1676;
const SIDE_TAB_W = 100;
/** Figma 1018:1432 — coluna do painel: bloco 458px + gap 24 + setas; setas com pl=240 no slide */
const PANEL_SHELL_TOP = 357;
const PANEL_NAV_PL = 240;
const PANEL_NAV_INSET_FROM_SHELL = PANEL_NAV_PL - PANEL_CLOSE_LEFT;
const PANEL_NAV_GAP = 32;
const OVERVIEW_SIDEBAR_LEFT = 1668;
const OVERVIEW_SIDEBAR_W = 252;
const OVERVIEW_SIDEBAR_H = 458;
const OVERVIEW_ARROW_GAP = 12;
/** Figma 1033:2154 — Main container 200px; cada aba 100px */
const OVERVIEW_TABS_W = 200;
const OVERVIEW_TAB_W = 100;

const PANEL_ROW_GAP = 24;
const PANEL_CONTENT_SWAP_X = 520;

const PILLAR_ICONS = {
  flowsheet: flowsheetIcon,
  modeling: modelingIcon,
  "workspace-premium": workspacePremiumIcon,
  "thumbs-up-down": thumbsUpDownIcon,
} as const;

const fade = (delay: number) => ({ duration: 0.55, delay, ease: "easeOut" as const });

function stopEvent(event: MouseEvent) {
  event.stopPropagation();
}

function stopPointerEvent(event: MouseEvent) {
  event.stopPropagation();
}

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
          <path d={svgPaths.p1bc3fc80} fill="#036EF2" />
          <path d={svgPaths.p8ed8880} fill="#036EF2" />
          <path d={svgPaths.p79b1980} fill="#036EF2" />
          <path d={svgPaths.p3380500} fill="#04165D" />
          <path d={svgPaths.p3777a600} fill="#04165D" />
          <path d={svgPaths.p30300b00} fill="#04165D" />
        </svg>
      </div>
    </div>
  );
}

function SlideHeader({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

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
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: vy(16), width: "100%" }}>
        <p
          style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal" }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
        >
          Como vamos medir
        </p>
        <p
          style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1 }}
          className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
        >
          Indicadores de sucesso
        </p>
      </div>
      <p
        style={{ fontSize: vs(28), lineHeight: 1.5 }}
        className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
      >
        Começar com poucas perguntas. Decidir o que manter, corrigir, investigar ou registar.
      </p>
    </motion.div>
  );
}

function SlideFooter({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

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
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", gap: vx(20), alignItems: "center", overflow: "hidden" }}>
        <p
          style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
        >
          14
        </p>
        <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", background: STROKE_BLUE, height: vs(1), left: 0, right: 0, top: 0 }} />
        </div>
        <p
          style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#6e7587] uppercase whitespace-nowrap"
        >
          {FOOTER_TEXT}
        </p>
      </div>
      <TisLogo scale={vs} />
    </motion.div>
  );
}

function InteractiveCircleButton({
  ariaLabel,
  onClick,
  size,
  background,
  color = "#fff",
  growOnHover = false,
  children,
}: {
  ariaLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size: number;
  background: string;
  color?: string;
  /** Slide 06: 40px → 56px no hover (overview, fechar) */
  growOnHover?: boolean;
  children: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  if (growOnHover) {
    const hoverSize = interactiveCircleHoverSize(size);

    return (
      <motion.button
        type="button"
        aria-label={ariaLabel}
        initial="rest"
        animate="rest"
        whileHover="hover"
        onClick={onClick}
        onPointerDown={stopPointerEvent}
        style={{
          width: hoverSize,
          height: hoverSize,
          border: 0,
          padding: 0,
          background: "transparent",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
          flexShrink: 0,
        }}
      >
        <motion.div
          variants={{
            rest: { width: size, height: size, boxShadow: "none" },
            hover: { width: hoverSize, height: hoverSize, boxShadow: INTERACTIVE_HOVER_BOX_SHADOW },
          }}
          transition={{ duration: 0.24, ease: EASE }}
          style={{
            borderRadius: "50%",
            background,
            color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {children}
        </motion.div>
      </motion.button>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onPointerDown={stopPointerEvent}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{
        width: size,
        height: size,
        border: 0,
        padding: 0,
        borderRadius: "50%",
        background,
        color,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        boxShadow: hovered ? INTERACTIVE_HOVER_BOX_SHADOW : "none",
        transition: INTERACTIVE_HOVER_TRANSITION,
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

function HorizontalNavButton({
  ariaLabel,
  onClick,
  direction,
  metrics,
}: {
  ariaLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  direction: "left" | "right";
  metrics: Metrics;
}) {
  const { vs } = metrics;
  const size = vs(40);
  const iconSize = vs(24);
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onPointerDown={stopPointerEvent}
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
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        boxShadow: hovered ? INTERACTIVE_HOVER_BOX_SHADOW : "none",
        transition: INTERACTIVE_HOVER_TRANSITION,
        flexShrink: 0,
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" aria-hidden style={{ display: "block" }}>
        <path
          d={direction === "left" ? navSvgPaths.p90d8b80 : navSvgPaths.p23cbb200}
          fill={hovered ? "#fff" : BLUE}
          style={{ transition: "fill 0.24s ease" }}
        />
      </svg>
    </button>
  );
}

function MetricList({
  items,
  metrics,
}: {
  items: string[];
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: vy(8), width: "100%" }}>
      {items.map((item) => (
        <div key={item} style={{ display: "flex", gap: vx(12), alignItems: "flex-start", width: "100%" }}>
          <div style={{ display: "flex", height: vy(28), alignItems: "center", flexShrink: 0 }}>
            <div style={{ width: vs(10), height: vs(10), backgroundColor: BLUE, flexShrink: 0 }} />
          </div>
          <p
            style={{ flex: 1, fontSize: vs(20), lineHeight: 1.3, margin: 0 }}
            className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function MetricColumnBlock({
  column,
  metrics,
  width,
  flex,
}: {
  column: MetricColumn;
  metrics: Metrics;
  width?: number;
  flex?: number;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: vy(24),
        width: width !== undefined ? vx(width) : undefined,
        flex: flex !== undefined ? `${flex} 1 1 0` : undefined,
        minWidth: flex !== undefined ? 0 : undefined,
      }}
    >
      <p
        style={{ fontSize: vs(26), lineHeight: 1, margin: 0 }}
        className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
      >
        {column.title}
      </p>
      <MetricList items={column.items} metrics={metrics} />
    </div>
  );
}

function VerticalTab({
  label,
  height,
  accent = false,
  onClick,
  metrics,
  edge = "panel",
}: {
  label: string;
  height: number;
  accent?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  metrics: Metrics;
  /** panel = aba ativa no miolo (1018:1648 · rounded 16); right = aba lateral aberta (1018:1763) */
  edge?: "panel" | "right";
}) {
  const { vx, vy, vs } = metrics;
  const isRightEdge = edge === "right";
  const sideTabR = vy(48);
  const innerTabR = vy(16);

  const cornerRadius: CSSProperties = isRightEdge
    ? {
        borderTopLeftRadius: sideTabR,
        borderBottomLeftRadius: sideTabR,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }
    : {
        borderRadius: innerTabR,
      };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      onPointerDown={onClick ? stopPointerEvent : undefined}
      style={{
        border: 0,
        padding: `${vy(16)}px ${vx(32)}px`,
        width: isRightEdge ? vx(SIDE_TAB_W) : undefined,
        height: vy(height),
        backgroundColor: accent ? BLUE : NAVY,
        ...cornerRadius,
        cursor: onClick ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        outline: "none",
        transition: INTERACTIVE_HOVER_TRANSITION,
        boxSizing: "border-box",
      }}
    >
      <VerticalTabLabel label={label} metrics={metrics} />
    </button>
  );
}

function VerticalTabLabel({
  label,
  metrics,
}: {
  label: string;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        width: vx(36),
        height: vy(label === "Métricas operacionais" ? 321 : 219),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          transform: "rotate(-90deg)",
          fontSize: vs(36),
          letterSpacing: vs(-0.5),
          lineHeight: 1,
          margin: 0,
          whiteSpace: "nowrap",
        }}
        className="font-['Bronkoh-Heavy',sans-serif] not-italic text-white"
      >
        {label}
      </p>
    </div>
  );
}

/** Figma 1033:2154 / 1018:1419 — bloco único navy + operacional (16) + UX (azul) */
function OverviewTabsStrip({
  metrics,
  onOpenOperacional,
  onOpenUx,
}: {
  metrics: Metrics;
  onOpenOperacional: (event: MouseEvent<HTMLButtonElement>) => void;
  onOpenUx: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const { vx, vy } = metrics;
  const tabButtonStyle = (bg: string, radius: CSSProperties): CSSProperties => ({
    border: 0,
    margin: 0,
    padding: `${vy(16)}px ${vx(32)}px`,
    width: vx(OVERVIEW_TAB_W),
    height: vy(PANEL_ROW_H),
    backgroundColor: bg,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    boxSizing: "border-box",
    flexShrink: 0,
    ...radius,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        width: vx(OVERVIEW_TABS_W),
        height: vy(PANEL_ROW_H),
        backgroundColor: NAVY,
        borderTopLeftRadius: vy(48),
        borderBottomLeftRadius: vy(48),
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <button
        type="button"
        aria-label="Métricas operacionais"
        onClick={onOpenOperacional}
        onPointerDown={stopPointerEvent}
        style={tabButtonStyle(NAVY, { borderRadius: vy(16) })}
      >
        <VerticalTabLabel label="Métricas operacionais" metrics={metrics} />
      </button>
      <button
        type="button"
        aria-label="Métricas de UX"
        onClick={onOpenUx}
        onPointerDown={stopPointerEvent}
        style={tabButtonStyle(BLUE, {
          borderTopLeftRadius: vy(48),
          borderBottomLeftRadius: vy(48),
        })}
      >
        <VerticalTabLabel label="Métricas de UX" metrics={metrics} />
      </button>
    </div>
  );
}

function PanelMainChrome({
  metrics,
  view,
  swapDirection,
}: {
  metrics: Metrics;
  view: Exclude<PanelView, "overview">;
  swapDirection: number;
}) {
  const { vx, vy } = metrics;
  const panelR = vy(48);
  const isOperacional = view === "operacional";
  const swapTravel = vx(PANEL_CONTENT_SWAP_X);

  const rightEdgeSeal = Math.max(1, vy(1));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: vx(PANEL_MAIN_W),
        height: "100%",
        flexShrink: 0,
        backgroundColor: NAVY,
        overflow: "hidden",
        ...panelChromeStyle(panelR),
      }}
    >
      <VerticalTab
        label={isOperacional ? "Métricas operacionais" : "Métricas de UX"}
        height={PANEL_ROW_H}
        edge="panel"
        metrics={metrics}
      />
      <div
        style={{
          flex: 1,
          backgroundColor: PANEL_BG,
          borderTopLeftRadius: panelR,
          borderTopRightRadius: panelR,
          borderBottomLeftRadius: panelR,
          borderBottomRightRadius: panelR,
          minWidth: 0,
          overflow: "hidden",
          display: "flex",
          position: "relative",
          zIndex: 1,
          isolation: "isolate",
          boxShadow: `inset -${rightEdgeSeal}px 0 0 0 ${PANEL_BG}, 0 0 0 1px ${PANEL_BG}`,
        }}
      >
        <AnimatePresence mode="wait" initial={false} custom={swapDirection}>
          <motion.div
            key={view}
            custom={swapDirection}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? swapTravel : -swapTravel,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (direction: number) => ({
                x: direction > 0 ? -swapTravel : swapTravel,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              ...PANEL_SWAP_TRANSITION,
              exit: PANEL_SWAP_EXIT_TRANSITION,
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              overflow: "hidden",
              flexShrink: 0,
              willChange: "transform, opacity",
            }}
          >
            <PanelMetricsBody metrics={metrics} view={view} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Figma 1033:2154 — faixa à direita no overview (seta + abas 200px) */
function OverviewMetricsSidebar({
  metrics,
  onOpenOperacional,
  onOpenUx,
}: {
  metrics: Metrics;
  onOpenOperacional: (event: MouseEvent<HTMLButtonElement>) => void;
  onOpenUx: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.div
      initial={{ opacity: 0, x: vx(48) }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: vx(48) }}
      transition={PANEL_TRANSITION}
      style={{
        position: "absolute",
        left: vx(OVERVIEW_SIDEBAR_LEFT),
        top: vy(PANEL_SHELL_TOP),
        width: vx(OVERVIEW_SIDEBAR_W),
        height: vy(OVERVIEW_SIDEBAR_H),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: vx(OVERVIEW_ARROW_GAP),
        zIndex: 5,
        pointerEvents: "auto",
        overflow: "visible",
      }}
    >
      <InteractiveCircleButton
        ariaLabel="Abrir métricas operacionais"
        onClick={onOpenOperacional}
        size={vs(40)}
        background={BLUE}
        growOnHover
      >
        <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none" aria-hidden style={{ display: "block" }}>
          <path d={navSvgPaths.p90d8b80} fill="#fff" />
        </svg>
      </InteractiveCircleButton>
      <OverviewTabsStrip metrics={metrics} onOpenOperacional={onOpenOperacional} onOpenUx={onOpenUx} />
    </motion.div>
  );
}

/** Figma 1018:1432 / 1011:399 — painel aberto: close + miolo + aba lateral; setas abaixo */
function OpenPanelShell({
  metrics,
  view,
  swapDirection,
  onClose,
  onOpenOperacional,
  onOpenUx,
  onPrev,
  onNext,
}: {
  metrics: Metrics;
  view: Exclude<PanelView, "overview">;
  swapDirection: number;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  onOpenOperacional: (event: MouseEvent<HTMLButtonElement>) => void;
  onOpenUx: (event: MouseEvent<HTMLButtonElement>) => void;
  onPrev: (event: MouseEvent<HTMLButtonElement>) => void;
  onNext: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const { vx, vy, vs } = metrics;
  const isOperacional = view === "operacional";
  const closeSize = vs(PANEL_CLOSE_SIZE);
  const iconSize = vs(40);
  const openFromX = vx(OVERVIEW_SIDEBAR_LEFT - PANEL_CLOSE_LEFT);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={PANEL_TRANSITION}
      style={{
        position: "absolute",
        left: vx(PANEL_CLOSE_LEFT),
        top: vy(PANEL_SHELL_TOP),
        display: "flex",
        flexDirection: "column",
        gap: vy(PANEL_ROW_GAP),
        zIndex: 6,
        pointerEvents: "auto",
        overflow: "visible",
      }}
    >
      <motion.div
        initial={{ x: openFromX, opacity: 0.92 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: openFromX, opacity: 0 }}
        transition={PANEL_TRANSITION}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          gap: vx(PANEL_ROW_GAP),
          height: vy(PANEL_ROW_H),
          overflow: "visible",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0, overflow: "visible" }}>
          <InteractiveCircleButton
            ariaLabel="Fechar painel"
            onClick={onClose}
            size={closeSize}
            background={BLUE}
            growOnHover
          >
            <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" style={{ display: "block" }}>
              <path d={modalSvgPaths.peeed100} fill="currentColor" />
            </svg>
          </InteractiveCircleButton>
        </div>

        <PanelMainChrome metrics={metrics} view={view} swapDirection={swapDirection} />

        {isOperacional ? (
          <VerticalTab
            label="Métricas de UX"
            height={PANEL_ROW_H}
            accent
            edge="right"
            onClick={onOpenUx}
            metrics={metrics}
          />
        ) : (
          <VerticalTab
            label="Métricas operacionais"
            height={PANEL_ROW_H}
            accent
            edge="right"
            onClick={onOpenOperacional}
            metrics={metrics}
          />
        )}
      </motion.div>

      <PanelNavigation metrics={metrics} onPrev={onPrev} onNext={onNext} insetLeft={vx(PANEL_NAV_INSET_FROM_SHELL)} />
    </motion.div>
  );
}

function PanelNavigation({
  metrics,
  onPrev,
  onNext,
  insetLeft,
}: {
  metrics: Metrics;
  onPrev: (event: MouseEvent<HTMLButtonElement>) => void;
  onNext: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Recuo dentro da coluna do painel (240 no slide − 32 do shell) */
  insetLeft: number;
}) {
  const { vx, vy } = metrics;

  /** Espaço para box-shadow no hover (não cortar em height: 40) */
  const shadowPad = vy(20);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: vx(PANEL_NAV_GAP),
        paddingLeft: insetLeft,
        paddingRight: vx(16),
        paddingBottom: shadowPad,
        width: vx(352),
        boxSizing: "border-box",
        overflow: "visible",
        flexShrink: 0,
      }}
    >
      <HorizontalNavButton
        ariaLabel="Métricas operacionais"
        direction="left"
        onClick={onPrev}
        metrics={metrics}
      />
      <HorizontalNavButton
        ariaLabel="Métricas de UX"
        direction="right"
        onClick={onNext}
        metrics={metrics}
      />
    </div>
  );
}

function PanelMetricsBody({ metrics, view }: { metrics: Metrics; view: Exclude<PanelView, "overview"> }) {
  const { vx, vy } = metrics;
  const isOperacional = view === "operacional";

  if (isOperacional) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          padding: `${vy(64)}px ${vx(48)}px ${vy(64)}px ${vx(80)}px`,
          display: "flex",
          justifyContent: "space-between",
          gap: vx(24),
          minWidth: 0,
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {OPERACIONAL_COLUMNS.map((column, index) => (
          <MetricColumnBlock
            key={column.title}
            column={column}
            metrics={metrics}
            width={[320, 300, 280, 296][index]}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        padding: `${vy(64)}px ${vx(80)}px`,
        display: "flex",
        gap: vx(80),
        minWidth: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {UX_COLUMNS.map((column) => (
        <MetricColumnBlock key={column.title} column={column} metrics={metrics} flex={1} />
      ))}
    </div>
  );
}

function OverviewContent({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;
  const cardBg: CSSProperties = {
    backgroundImage: `linear-gradient(90deg, ${PALE_BLUE} 0%, ${PALE_BLUE} 100%), linear-gradient(90deg, #ffffff 0%, #ffffff 100%)`,
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: vx(-48) }}
      transition={PANEL_TRANSITION}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
    >
      <div
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(357),
          display: "flex",
          gap: vx(64),
          alignItems: "flex-start",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(2, ${vx(382)}px)`,
            gap: `${vy(16)}px ${vx(16)}px`,
            width: vx(780),
          }}
        >
          {PILLAR_CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                ...cardBg,
                borderRadius: vy(32),
                padding: `${vy(32)}px ${vx(40)}px`,
                display: "flex",
                flexDirection: "column",
                gap: vy(16),
              }}
            >
              <img
                src={PILLAR_ICONS[card.icon]}
                alt=""
                aria-hidden
                style={{ width: vs(40), height: vs(40), display: "block" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: vy(8) }}>
                <p
                  style={{ fontSize: vs(28), lineHeight: 1.2, margin: 0 }}
                  className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
                >
                  {card.title}
                </p>
                <p
                  style={{ fontSize: vs(20), lineHeight: 1.5, margin: 0 }}
                  className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            width: vx(624),
            border: `1px solid ${STROKE_BLUE}`,
            borderRadius: vy(32),
            padding: `${vy(40)}px ${vx(40)}px`,
            display: "flex",
            flexDirection: "column",
            gap: vy(32),
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: vy(12), width: "100%" }}>
            <p
              style={{ fontSize: vs(28), lineHeight: 1.2, margin: 0 }}
              className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
            >
              Critério para medir
            </p>
            <p
              style={{ fontSize: vs(20), lineHeight: 1.5, margin: 0 }}
              className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
            >
              Uma métrica só entra se tiver pergunta clara, forma de observação e decisão possível.
            </p>
          </div>

          <MonthlyReadingCycle metrics={metrics} />

          <p
            style={{ fontSize: vs(18), lineHeight: `${vy(22)}px`, letterSpacing: vs(-0.25), margin: 0, textAlign: "center" }}
            className="font-['Manrope',sans-serif] font-bold text-[#04165d] whitespace-nowrap"
          >
            Consolidar padrões em 90 dias, sem esperar para agir.
          </p>
        </div>
      </div>

      <p
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(865),
          fontSize: vs(26),
          lineHeight: 1.3,
          margin: 0,
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
        className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
      >
        Indicadores devem ser acompanhados por ciclo, com uma linha de base no início da implantação e revisão ao fim de cada período.
      </p>
    </motion.div>
  );
}

export function Slide14IndicadoresDeSucesso({ scaleX, scaleY, onPanelViewChange }: Props) {
  const metrics = createSlideMetrics(scaleX, scaleY);
  const [view, setView] = useState<PanelView>("overview");
  /** 1 = próximo painel vem da direita; -1 = da esquerda */
  const [panelSwapDirection, setPanelSwapDirection] = useState(1);

  useEffect(() => {
    onPanelViewChange?.(view);
  }, [view, onPanelViewChange]);

  const goToPanel = (next: Exclude<PanelView, "overview">, direction: number) => {
    setPanelSwapDirection(direction);
    setView(next);
  };

  const openOperacional = (event: MouseEvent<HTMLButtonElement>) => {
    stopEvent(event);
    goToPanel("operacional", view === "ux" ? -1 : 1);
  };

  const openUx = (event: MouseEvent<HTMLButtonElement>) => {
    stopEvent(event);
    goToPanel("ux", view === "operacional" ? 1 : 1);
  };

  const closePanel = (event: MouseEvent<HTMLButtonElement>) => {
    stopEvent(event);
    setView("overview");
  };

  const handlePrev = (event: MouseEvent<HTMLButtonElement>) => {
    stopEvent(event);
    if (view === "overview") return;
    const next = view === "operacional" ? "ux" : "operacional";
    goToPanel(next, next === "ux" ? 1 : -1);
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    stopEvent(event);
    if (view === "overview") return;
    const next = view === "ux" ? "operacional" : "ux";
    goToPanel(next, next === "ux" ? 1 : -1);
  };

  return (
    <motion.div
      key="slide-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <SlideHeader metrics={metrics} />
      <SlideFooter metrics={metrics} />

      <AnimatePresence initial={false}>
        {view === "overview" && (
          <OverviewContent key="overview-cards" metrics={metrics} />
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {view === "overview" ? (
          <OverviewMetricsSidebar
            key="overview-sidebar"
            metrics={metrics}
            onOpenOperacional={openOperacional}
            onOpenUx={openUx}
          />
        ) : (
          <OpenPanelShell
            key="open-panel"
            metrics={metrics}
            view={view}
            swapDirection={panelSwapDirection}
            onClose={closePanel}
            onOpenOperacional={openOperacional}
            onOpenUx={openUx}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
