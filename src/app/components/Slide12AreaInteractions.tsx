import { useRef, useState, type MouseEvent, type ReactNode, type WheelEventHandler } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import {
  AREA_INTERACTIONS,
  AREA_INTERACTIONS_PAGE_COUNT,
  type AreaInteractionItem,
} from "./areaInteractionsData";
import { Slide12InteractionMap } from "./Slide12InteractionMap";
import {
  INTERACTIVE_HOVER_BOX_SHADOW,
  INTERACTIVE_HOVER_TRANSITION,
} from "../constants/interactiveShadow";
import { cycleVerticalPage, resolveVerticalPage } from "../constants/verticalPageNav";

interface Props {
  scaleX: number;
  scaleY: number;
  onDragAreaHover?: (active: boolean) => void;
}

const PAGE_HEADERS = [
  {
    title: "Interações com as demais áreas",
    body: "Experience Engineering como conexão entre negócio, utilizador e tecnologia.",
  },
  {
    title: "Mapa de interações",
    body: "Áreas com as quais Experience Engineering interage e o tipo de relação em cada caso.",
  },
  {
    title: "Interações com as demais áreas",
    body: "Experience Engineering como conexão entre negócio, utilizador e tecnologia.",
  },
] as const;

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

const BLUE = "#036ef2";
const NAVY = "#04165d";
const INK = "#2f3237";
const MUTED = "#6e7587";
const STROKE_BLUE = "rgba(43,118,193,0.4)";
const PALE_BLUE = "rgba(3, 110, 242, 0.06)";
const FOOTER_TEXT = "PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING";
const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_TRANSITION_SECONDS = 0.42;
const NAV_ARROW_UP_PATH = "M2 16L12 6L22 16L20.225 17.775L12 9.55L3.775 17.775L2 16Z";
const NAV_ARROW_DOWN_PATH = "M2 8.025L3.775 6.25L12 14.475L20.225 6.25L22 8.025L12 18.025L2 8.025Z";

const fade = (delay: number) => ({ duration: 0.55, delay, ease: "easeOut" as const });

function stopEvent(event: MouseEvent) {
  event.stopPropagation();
}

function TisLogo({ scale }: { scale: (n: number) => number }) {
  return (
    <div style={{ width: scale(120), height: scale(56), position: "relative", opacity: 0.9, overflow: "visible", flexShrink: 0 }}>
      <motion.div
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
      </motion.div>
    </div>
  );
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

function NavArrowButton({
  ariaLabel,
  onClick,
  children,
}: {
  ariaLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
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
        width: 40,
        height: 40,
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

function VerticalNavArrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path d={direction === "up" ? NAV_ARROW_UP_PATH : NAV_ARROW_DOWN_PATH} fill="currentColor" />
    </svg>
  );
}

function VerticalNav({
  page,
  setPage,
  metrics,
}: {
  page: number;
  setPage: (page: number) => void;
  metrics: Metrics;
}) {
  const { vx, vy } = metrics;

  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientY - rect.top) / rect.height;
    if (ratio < 0.37) setPage(cycleVerticalPage(page, -1, AREA_INTERACTIONS_PAGE_COUNT));
    if (ratio > 0.63) setPage(cycleVerticalPage(page, 1, AREA_INTERACTIONS_PAGE_COUNT));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fade(0.2)}
      style={{
        position: "absolute",
        left: vx(1832),
        top: vy(420),
        width: vx(40),
        height: vy(240),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: vy(40),
        zIndex: 20,
      }}
      onClick={handleContainerClick}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <NavArrowButton
        ariaLabel="Secção anterior"
        onClick={(event) => {
          stopEvent(event);
          setPage(cycleVerticalPage(page, -1, AREA_INTERACTIONS_PAGE_COUNT));
        }}
      >
        <VerticalNavArrow direction="up" />
      </NavArrowButton>
      <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(4), alignItems: "center" }}>
        {Array.from({ length: AREA_INTERACTIONS_PAGE_COUNT }).map((_, index) => (
          <NavDotButton
            key={index}
            active={index === page}
            onClick={(event) => {
              stopEvent(event);
              setPage(index);
            }}
            ariaLabel={`Ir para secção ${index + 1}`}
          />
        ))}
      </motion.div>
      <NavArrowButton
        ariaLabel="Próxima secção"
        onClick={(event) => {
          stopEvent(event);
          setPage(cycleVerticalPage(page, 1, AREA_INTERACTIONS_PAGE_COUNT));
        }}
      >
        <VerticalNavArrow direction="down" />
      </NavArrowButton>
    </motion.div>
  );
}

function InteractionCard({
  item,
  index,
  visible,
  metrics,
}: {
  item: AreaInteractionItem;
  index: number;
  visible: boolean;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.article
          key={item.number}
          initial={{ opacity: 0, y: vy(16) }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: vy(-12) }}
          transition={{ duration: 0.32, ease: EASE, delay: index * 0.04 }}
          style={{
            height: "100%",
            padding: `${vy(48)}px ${vx(56)}px`,
            borderRadius: vs(40),
            backgroundColor: PALE_BLUE,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              gap: vx(24),
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p
              style={{
                margin: 0,
                flexShrink: 0,
                fontFamily: "'Bronkoh-Heavy', sans-serif",
                fontSize: vs(80),
                lineHeight: 1,
                letterSpacing: vs(-1.5),
                color: BLUE,
                whiteSpace: "nowrap",
              }}
            >
              {item.number}
            </p>
            <motion.div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: vy(12) }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Bronkoh-Heavy', sans-serif",
                  fontSize: vs(32),
                  lineHeight: 1.3,
                  color: NAVY,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: vs(20),
                  lineHeight: 1.5,
                  color: INK,
                }}
              >
                {item.body}
              </p>
            </motion.div>
          </motion.div>
        </motion.article>
      ) : null}
    </AnimatePresence>
  );
}

function isCardVisible(cardIndex: number, page: number) {
  if (page === 0) return true;
  if (page === 1) return cardIndex < 2;
  return cardIndex >= 2;
}

function Slide12Header({
  header,
  metrics,
  reducedMotion,
  descriptionEnterDelay,
}: {
  header: (typeof PAGE_HEADERS)[number];
  metrics: Metrics;
  reducedMotion: boolean;
  descriptionEnterDelay: number;
}) {
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
      }}
    >
      <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(16), width: "100%" }}>
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
          CONEXÕES OPERACIONAIS
        </p>
        <AnimatePresence initial={false} mode="wait">
          <motion.p
            key={header.title}
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
            }}
          >
            {header.title}
          </motion.p>
        </AnimatePresence>
      </motion.div>
      <AnimatePresence initial={false} mode="wait">
        <motion.p
          key={header.body}
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
            transition: { duration: reducedMotion ? 0 : 0.18, ease: EASE },
          }}
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Regular', sans-serif",
            fontSize: vs(28),
            lineHeight: 1.5,
            color: INK,
          }}
        >
          {header.body}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}

function InteractionGrid({ page, metrics }: { page: number; metrics: Metrics }) {
  const { vx, vy } = metrics;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(341),
        width: vx(1664),
        height: vy(564),
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gridTemplateRows: `repeat(2, minmax(${vy(270)}px, auto))`,
        gap: `${vy(24)}px ${vx(24)}px`,
        alignContent: "start",
      }}
    >
      {AREA_INTERACTIONS.map((item, index) => (
        <div
          key={item.number}
          style={{
            gridColumn: (index % 2) + 1,
            gridRow: Math.floor(index / 2) + 1,
            minHeight: vy(270),
          }}
        >
          <InteractionCard item={item} index={index} visible={isCardVisible(index, page)} metrics={metrics} />
        </div>
      ))}
    </motion.div>
  );
}

export function Slide12AreaInteractions({ scaleX, scaleY, onDragAreaHover }: Props) {
  const s = Math.min(scaleX, scaleY);
  const vx = (n: number) => n * scaleX;
  const vy = (n: number) => n * scaleY;
  const vs = (n: number) => n * s;
  const metrics: Metrics = { vx, vy, vs };

  const reducedMotion = useReducedMotion();
  const lastWheelRef = useRef(0);
  const [page, setPageState] = useState(0);
  const [pageDirection, setPageDirection] = useState(0);

  const setPage = (next: number) => {
    const { target, direction } = resolveVerticalPage(next, page, AREA_INTERACTIONS_PAGE_COUNT);
    if (direction === 0) return;
    setPageDirection(direction);
    setPageState(target);
  };

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    if (Math.abs(event.deltaY) < 20) return;

    const now = window.performance.now();
    if (now - lastWheelRef.current < 650) return;
    lastWheelRef.current = now;
    setPage(page + (event.deltaY > 0 ? 1 : -1));
  };

  const header = PAGE_HEADERS[page];
  const descriptionEnterDelay =
    page === 1 && pageDirection > 0 ? PAGE_TRANSITION_SECONDS : page === 0 && pageDirection < 0 ? PAGE_TRANSITION_SECONDS : 0;

  return (
    <motion.div
      key="slide-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.35 }}
      className="absolute inset-0 overflow-hidden bg-white"
      onWheel={handleWheel}
    >
      <VerticalNav page={page} setPage={setPage} metrics={metrics} />

      <Slide12Header
        header={header}
        metrics={metrics}
        reducedMotion={!!reducedMotion}
        descriptionEnterDelay={reducedMotion ? 0 : descriptionEnterDelay}
      />

      <AnimatePresence mode="wait" custom={pageDirection}>
        {page === 1 ? (
          <Slide12InteractionMap key="map" metrics={metrics} onDragAreaHover={onDragAreaHover} />
        ) : (
          <motion.div
            key={page}
            initial={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(28) }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(-22) }}
            transition={{ duration: reducedMotion ? 0 : PAGE_TRANSITION_SECONDS, ease: EASE }}
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          >
            <motion.div style={{ pointerEvents: "auto" }}>
              <InteractionGrid page={page} metrics={metrics} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            12
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
    </motion.div>
  );
}
