import { useState, type MouseEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import {
  INTERACTIVE_HOVER_BOX_SHADOW,
  INTERACTIVE_HOVER_TRANSITION,
} from "../constants/interactiveShadow";
import { cycleVerticalPage } from "../constants/verticalPageNav";

const BLUE = "#036ef2";
const STROKE_BLUE = "rgba(43,118,193,0.4)";
const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_ARROW_UP_PATH = "M2 16L12 6L22 16L20.225 17.775L12 9.55L3.775 17.775L2 16Z";
const NAV_ARROW_DOWN_PATH = "M2 8.025L3.775 6.25L12 14.475L20.225 6.25L22 8.025L12 18.025L2 8.025Z";

export type VerticalPageNavMetrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
};

function stopEvent(event: MouseEvent) {
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

export function VerticalPageNav({
  page,
  setPage,
  pageCount,
  metrics,
  slideLabel,
}: {
  page: number;
  setPage: (page: number) => void;
  pageCount: number;
  metrics: VerticalPageNavMetrics;
  slideLabel: string;
}) {
  const { vx, vy } = metrics;

  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    stopEvent(event);
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientY - rect.top) / rect.height;
    if (ratio < 0.37) setPage(cycleVerticalPage(page, -1, pageCount));
    if (ratio > 0.63) setPage(cycleVerticalPage(page, 1, pageCount));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
        cursor: "pointer",
      }}
      onClick={handleContainerClick}
      onPointerDown={stopEvent}
    >
      <NavArrowButton
        ariaLabel={`Secção anterior — ${slideLabel}`}
        onClick={(event) => {
          stopEvent(event);
          setPage(cycleVerticalPage(page, -1, pageCount));
        }}
      >
        <VerticalNavArrow direction="up" />
      </NavArrowButton>
      <div style={{ display: "flex", flexDirection: "column", gap: vy(4), alignItems: "center" }}>
        {Array.from({ length: pageCount }).map((_, index) => (
          <NavDotButton
            key={index}
            active={index === page}
            onClick={(event) => {
              stopEvent(event);
              setPage(index);
            }}
            ariaLabel={`Ir para secção ${index + 1} — ${slideLabel}`}
          />
        ))}
      </div>
      <NavArrowButton
        ariaLabel={`Próxima secção — ${slideLabel}`}
        onClick={(event) => {
          stopEvent(event);
          setPage(cycleVerticalPage(page, 1, pageCount));
        }}
      >
        <VerticalNavArrow direction="down" />
      </NavArrowButton>
    </motion.div>
  );
}
