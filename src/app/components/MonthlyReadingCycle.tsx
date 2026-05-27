import type { CSSProperties } from "react";
import cycleObservarLer from "../../assets/slide14/cycle-loop-1.svg";
import cycleLerAjustar from "../../assets/slide14/cycle-loop-2.svg";
import cycleAjustarObservar from "../../assets/slide14/cycle-loop-3.svg";

const BLUE = "#036ef2";
const NAVY = "#04165d";
const PALE_BLUE = "rgba(3, 110, 242, 0.06)";

const DESIGN_W = 284;
const DESIGN_H = 186;

/** Figma 1028:1875 — três setas distintas (1053:2177, 1053:2176, 1053:2178) */
const ARROWS = [
  { id: "observar-ler", src: cycleObservarLer, left: 42, top: 18, width: 69, height: 64 },
  { id: "ler-ajustar", src: cycleLerAjustar, left: 178, top: 14, width: 64, height: 69 },
  { id: "ajustar-observar", src: cycleAjustarObservar, left: 47, top: 129, width: 192, height: 55.197 },
] as const;

const PILLS = [
  { label: "Observar", x: 0, y: 89, w: 95, h: 34 },
  { label: "Ler", x: 117, y: 0, w: 54, h: 34 },
  { label: "Ajustar", x: 201, y: 89, w: 83, h: 34 },
] as const;

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

function ActionPill({ label, x, y, w, h }: { label: string; x: number; y: number; w: number; h: number }) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={17} fill={PALE_BLUE} stroke={BLUE} strokeWidth={2} />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fill={NAVY}
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 14 }}
      >
        {label}
      </text>
    </g>
  );
}

export function MonthlyReadingCycle({
  metrics,
  style,
}: {
  metrics: Metrics;
  style?: CSSProperties;
}) {
  const { vs } = metrics;
  const width = vs(DESIGN_W);
  const height = vs(DESIGN_H);

  return (
    <div
      role="img"
      aria-hidden
      style={{
        position: "relative",
        width,
        height,
        flexShrink: 0,
        ...style,
      }}
    >
      {ARROWS.map((arrow) => (
        <img
          key={arrow.id}
          src={arrow.src}
          alt=""
          style={{
            position: "absolute",
            left: vs(arrow.left),
            top: vs(arrow.top),
            width: vs(arrow.width),
            height: vs(arrow.height),
            display: "block",
            pointerEvents: "none",
          }}
        />
      ))}

      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${DESIGN_W} ${DESIGN_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, display: "block", overflow: "visible" }}
      >
        {PILLS.map((pill) => (
          <ActionPill key={pill.label} label={pill.label} x={pill.x} y={pill.y} w={pill.w} h={pill.h} />
        ))}

        <text
          x={144}
          y={87}
          textAnchor="middle"
          fill={NAVY}
          style={{ fontFamily: "'Bronkoh-Heavy', sans-serif", fontSize: 20, lineHeight: 1 }}
        >
          <tspan x={144} dy={0}>
            Leitura
          </tspan>
          <tspan x={144} dy={20}>
            mensal
          </tspan>
        </text>
      </svg>
    </div>
  );
}
