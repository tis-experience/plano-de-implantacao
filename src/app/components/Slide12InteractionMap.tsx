import { useRef, useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import navSvgPaths from "../../imports/NavigationContainer/svg-p070wn3cp5";
import { INTERACTION_MAP_PANELS, INTERACTION_MAP_PANEL_COUNT, type InteractionAreaCard } from "./interactionMapData";
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
const INK = "#2f3237";
const BLUE = "#036ef2";
const GREEN = "#078207";
const GREEN_BORDER = "#3b953b";
const BORDER = "#c7cad1";
const RECEIVE_BG = "rgba(3, 110, 242, 0.06)";
const DELIVER_BG = "rgba(44, 201, 44, 0.06)";

const CARD_WIDTH = 320;
const CARD_GAP = 16;
const PANEL_WIDTH = CARD_WIDTH * 4 + CARD_GAP * 3;

function DownloadIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4V13M12 13L8.5 9.5M12 13L15.5 9.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18H19" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UploadIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 20V11M12 11L8.5 14.5M12 11L15.5 14.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 6H19" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ExchangeBox({
  kind,
  text,
  metrics,
}: {
  kind: "receive" | "deliver";
  text: string;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;
  const isReceive = kind === "receive";

  return (
    <motion.div
      style={{
        width: "100%",
        borderRadius: vs(16),
        padding: vs(16),
        boxSizing: "border-box",
        border: `1px solid ${isReceive ? BLUE : GREEN_BORDER}`,
        background: isReceive ? RECEIVE_BG : DELIVER_BG,
        display: "flex",
        flexDirection: "column",
        gap: vy(8),
      }}
    >
      <div style={{ display: "flex", gap: vx(4), alignItems: "center", width: "100%" }}>
        {isReceive ? <DownloadIcon size={vs(20)} color={BLUE} /> : <UploadIcon size={vs(20)} color={GREEN} />}
        <p
          style={{
            margin: 0,
            flex: "1 0 0",
            fontFamily: "'Bronkoh-Bold', sans-serif",
            fontSize: vs(18),
            lineHeight: `${vs(20)}px`,
            color: isReceive ? BLUE : GREEN,
          }}
        >
          {isReceive ? "Recebe" : "Entrega"}
        </p>
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: vs(14),
          lineHeight: 1.4,
          color: INK,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

function AreaCard({ area, metrics }: { area: InteractionAreaCard; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <article
      style={{
        width: vx(CARD_WIDTH),
        height: vy(500),
        flexShrink: 0,
        boxSizing: "border-box",
        padding: vs(20),
        borderRadius: vs(28),
        border: `1px solid ${BORDER}`,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ width: "100%", padding: vs(8), display: "flex", flexDirection: "column", gap: vy(12) }}>
        <p
          style={{
            margin: 0,
            width: "100%",
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(28),
            lineHeight: 1.2,
            color: NAVY,
            overflowWrap: "break-word",
          }}
        >
          {area.title.replace(/\//g, "/\u200b")}
        </p>
        <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(12) }}>
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
            {area.intro}
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
            <span style={{ fontWeight: 800, color: NAVY }}>XP Engineering</span> {area.xpRole}
          </p>
        </motion.div>
      </motion.div>
      <motion.div style={{ width: "100%", display: "flex", flexDirection: "column", gap: vy(8) }}>
        <ExchangeBox kind="receive" text={area.receives} metrics={metrics} />
        <ExchangeBox kind="deliver" text={area.delivers} metrics={metrics} />
      </motion.div>
    </article>
  );
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

export function Slide12InteractionMap({ metrics, onDragAreaHover }: Props) {
  const { vx, vy, vs } = metrics;
  const [panel, setPanel] = useState(0);
  const dragStartXRef = useRef<number | null>(null);

  const getTranslateX = (panelIndex: number) => -vx(panelIndex * (PANEL_WIDTH + CARD_GAP));

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
          width: vx(1328),
          display: "flex",
          flexDirection: "column",
          gap: vy(20),
          flexShrink: 0,
        }}
      >
        <motion.div
          data-drag-cursor-area="slide-12-map-carousel"
          style={{
            width: vx(1328),
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
              if (delta < -threshold) setPanel((current) => cyclePanel(current, 1));
              else if (delta > threshold) setPanel((current) => cyclePanel(current, -1));
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
            {INTERACTION_MAP_PANELS.map((areas, panelIndex) => (
              <motion.div
                key={panelIndex}
                style={{
                  display: "flex",
                  gap: vx(CARD_GAP),
                  width: vx(PANEL_WIDTH),
                  flexShrink: 0,
                }}
              >
                {areas.map((area) => (
                  <AreaCard key={area.title} area={area} metrics={metrics} />
                ))}
              </motion.div>
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
