import { useMemo, useRef, useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import navSvgPaths from "../../imports/NavigationContainer/svg-p070wn3cp5";
import { INTERACTION_MAP_PANELS, INTERACTION_MAP_PANEL_COUNT, type InteractionMapPanel } from "./interactionMapData";
import {
  InteractionAreaCardView,
  INTERACTION_COLUMN_CARD_WIDTH,
  INTERACTION_MAP_CARD_WIDTH,
} from "./InteractionAreaCardView";
import {
  INTERACTIVE_HOVER_BOX_SHADOW,
  INTERACTIVE_HOVER_TRANSITION,
} from "../constants/interactiveShadow";

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

interface Props {
  metrics: Metrics;
  onDragAreaHover?: (active: boolean) => void;
}

const NAVY = "#04165d";
const BLUE = "#036ef2";
const CARD_GAP = 16;
const VIEWPORT_WIDTH = 1328;

function panelDesignWidth(panel: InteractionMapPanel) {
  if (panel.layout === "four") {
    return INTERACTION_MAP_CARD_WIDTH * 4 + CARD_GAP * 3;
  }
  return INTERACTION_COLUMN_CARD_WIDTH * 3 + CARD_GAP * 2;
}

function HorizontalNavButton({
  direction,
  onClick,
  metrics,
}: {
  direction: "left" | "right";
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  metrics: Metrics;
}) {
  const { vs } = metrics;
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Painel anterior" : "Próximo painel"}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{
        width: vs(40),
        height: vs(40),
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
      }}
    >
      <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={direction === "left" ? navSvgPaths.p90d8b80 : navSvgPaths.p23cbb200}
          fill={hovered ? "#fff" : BLUE}
          style={{ transition: "fill 0.24s ease" }}
        />
      </svg>
    </button>
  );
}

function cyclePanel(current: number, delta: number) {
  return (current + delta + INTERACTION_MAP_PANEL_COUNT) % INTERACTION_MAP_PANEL_COUNT;
}

function InteractionMapPanelView({ panel, metrics }: { panel: InteractionMapPanel; metrics: Metrics }) {
  const { vx, vy } = metrics;
  const viewportWidth = vx(VIEWPORT_WIDTH);

  if (panel.layout === "four") {
    return (
      <motion.div
        style={{
          display: "flex",
          gap: vx(CARD_GAP),
          width: viewportWidth,
          flexShrink: 0,
          justifyContent: "flex-start",
        }}
      >
        {panel.areas.map((area) => (
          <InteractionAreaCardView
            key={area.title}
            area={area}
            metrics={metrics}
            cardWidth={INTERACTION_MAP_CARD_WIDTH}
          />
        ))}
      </motion.div>
    );
  }

  const columnWidth = vx(INTERACTION_COLUMN_CARD_WIDTH);
  const gap = vx(CARD_GAP);

  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: `${columnWidth}px ${columnWidth}px ${columnWidth}px`,
        columnGap: gap,
        width: viewportWidth,
        flexShrink: 0,
        height: vy(500),
        alignItems: "start",
      }}
    >
      {panel.areas.map((area) => (
        <InteractionAreaCardView key={area.title} area={area} metrics={metrics} cardWidth="100%" />
      ))}
      <div aria-hidden style={{ width: columnWidth, height: vy(500) }} />
    </motion.div>
  );
}

export function Slide12InteractionMap({ metrics, onDragAreaHover }: Props) {
  const { vx, vy, vs } = metrics;
  const [panel, setPanel] = useState(0);
  const dragStartXRef = useRef<number | null>(null);

  const panelOffsets = useMemo(() => {
    const offsets: number[] = [0];
    for (let i = 0; i < INTERACTION_MAP_PANELS.length - 1; i++) {
      offsets.push(offsets[i]! + panelDesignWidth(INTERACTION_MAP_PANELS[i]!) + CARD_GAP);
    }
    return offsets;
  }, []);

  const getTranslateX = (panelIndex: number) => -vx(panelOffsets[panelIndex] ?? 0);

  const goPrev = (event: MouseEvent) => {
    event.stopPropagation();
    setPanel((current) => cyclePanel(current, -1));
  };

  const goNext = (event: MouseEvent) => {
    event.stopPropagation();
    setPanel((current) => cyclePanel(current, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: vy(12) }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: vy(-8) }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(357),
        width: vx(1664),
        height: vy(500),
        display: "flex",
        gap: vx(16),
        alignItems: "flex-start",
      }}
    >
      <motion.aside
        style={{
          width: vx(320),
          height: vy(500),
          flexShrink: 0,
          boxSizing: "border-box",
          padding: `${vy(48)}px ${vx(32)}px`,
          borderRadius: vs(28),
          background: NAVY,
          display: "flex",
          flexDirection: "column",
          gap: vy(28),
          overflow: "hidden",
        }}
      >
        <motion.div style={{ display: "flex", flexDirection: "column", color: "#fff" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontSize: vs(80),
              lineHeight: 1,
              color: "#fff",
            }}
          >
            XP
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontSize: vs(40),
              lineHeight: "normal",
              color: "#fff",
            }}
          >
            Engineering
          </p>
        </motion.div>
        <div style={{ width: vx(52), height: vy(3), background: BLUE, flexShrink: 0 }} />
        <p
          style={{
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 500,
            fontSize: vs(16),
            lineHeight: 1.5,
            letterSpacing: vs(0.25),
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Equipa responsável pelo design de produtos e serviços da TIS.
        </p>
      </motion.aside>

      <motion.div
        style={{
          width: vx(VIEWPORT_WIDTH),
          display: "flex",
          flexDirection: "column",
          gap: vy(20),
          flexShrink: 0,
        }}
      >
        <motion.div
          data-drag-cursor-area="slide-12-map-carousel"
          style={{
            width: vx(VIEWPORT_WIDTH),
            height: vy(500),
            overflow: "hidden",
            position: "relative",
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <motion.div
            animate={{ x: getTranslateX(panel) }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            onPointerDown={(event) => {
              dragStartXRef.current = event.clientX;
              try {
                (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
              } catch {
                /* ignore */
              }
            }}
            onPointerMove={() => onDragAreaHover?.(true)}
            onPointerUp={(event) => {
              if (dragStartXRef.current === null) return;
              const delta = event.clientX - dragStartXRef.current;
              const threshold = 60;
              if (delta < -threshold) {
                setPanel((current) => Math.min(current + 1, INTERACTION_MAP_PANEL_COUNT - 1));
              } else if (delta > threshold) {
                setPanel((current) => Math.max(current - 1, 0));
              }
              dragStartXRef.current = null;
              try {
                (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
              } catch {
                /* ignore */
              }
            }}
            onPointerEnter={() => onDragAreaHover?.(true)}
            onPointerLeave={() => {
              dragStartXRef.current = null;
              onDragAreaHover?.(false);
            }}
            onPointerCancel={() => {
              dragStartXRef.current = null;
              onDragAreaHover?.(false);
            }}
            style={{
              display: "flex",
              gap: vx(CARD_GAP),
              alignItems: "flex-start",
              userSelect: "none",
              touchAction: "none",
            }}
          >
            {INTERACTION_MAP_PANELS.map((panelConfig, panelIndex) => (
              <InteractionMapPanelView key={panelIndex} panel={panelConfig} metrics={metrics} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ display: "flex", gap: vx(32), alignItems: "center" }}>
          <HorizontalNavButton direction="left" onClick={goPrev} metrics={metrics} />
          <HorizontalNavButton direction="right" onClick={goNext} metrics={metrics} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
