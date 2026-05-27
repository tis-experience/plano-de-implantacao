import type { CSSProperties } from "react";

const BLUE = "#036ef2";
const NAVY = "#04165d";
const PALE_BLUE = "rgba(3, 110, 242, 0.06)";

/** Figma 1053:2177 — Observar → Ler (viewBox 72×76.546) */
const ARC_OBSERVAR_LER =
  "M0.0081501 74.8909C-0.0774595 75.7149 0.521118 76.4523 1.34511 76.5379C2.1691 76.6235 2.90648 76.0249 2.99209 75.2009L1.50012 75.0459L0.0081501 74.8909ZM71.5608 12.1066C72.1466 11.5208 72.1466 10.5711 71.5608 9.98528L62.0148 0.43934C61.4291 -0.146447 60.4793 -0.146447 59.8935 0.43934C59.3077 1.02513 59.3077 1.97487 59.8935 2.56066L68.3788 11.0459L59.8935 19.5312C59.3077 20.117 59.3077 21.0668 59.8935 21.6525C60.4793 22.2383 61.4291 22.2383 62.0148 21.6525L71.5608 12.1066ZM1.50012 75.0459L2.99209 75.2009C6.91307 37.4615 36.2723 12.5459 70.5001 12.5459V11.0459V9.54594C34.7279 9.54594 4.08717 35.6304 0.0081501 74.8909L1.50012 75.0459Z";

/** Figma 1053:2176 — Ler → Ajustar (viewBox 76.546×72 — path próprio, sem rotação) */
const ARC_LER_AJUSTAR =
  "M1.65513 0.0081501C0.831137 -0.0774596 0.0937597 0.521118 0.0081501 1.34511C-0.0774596 2.1691 0.521118 2.90648 1.34511 2.99209L1.50012 1.50012L1.65513 0.0081501ZM64.4395 71.5608C65.0252 72.1466 65.975 72.1466 66.5608 71.5608L76.1067 62.0148C76.6925 61.4291 76.6925 60.4793 76.1067 59.8935C75.5209 59.3077 74.5712 59.3077 73.9854 59.8935L65.5001 68.3788L57.0148 59.8935C56.429 59.3077 55.4793 59.3077 54.8935 59.8935C54.3077 60.4793 54.3077 61.4291 54.8935 62.0148L64.4395 71.5608ZM1.50012 1.50012L1.34511 2.99209C39.0846 6.91307 64.0001 36.2723 64.0001 70.5001H65.5001H67.0001C67.0001 34.7279 40.9157 4.08717 1.65513 0.0081501L1.50012 1.50012Z";

/** Figma 1053:2178 — Ajustar → Observar (viewBox 201.393×58.197) */
const ARC_AJUSTAR_OBSERVAR =
  "M201.295 3.03281C201.589 2.25834 201.199 1.3921 200.425 1.098C199.65 0.803898 198.784 1.19331 198.49 1.96778L199.892 2.50029L201.295 3.03281ZM8.60268 0.179095C7.873 -0.213159 6.9635 0.0603763 6.57124 0.790053L0.179095 12.6808C-0.213159 13.4105 0.0603762 14.32 0.790053 14.7123C1.51973 15.1045 2.42923 14.831 2.82149 14.1013L8.5034 3.53173L19.073 9.21364C19.8026 9.60589 20.7122 9.33236 21.1044 8.60268C21.4967 7.873 21.2231 6.9635 20.4934 6.57124L8.60268 0.179095ZM199.892 2.50029L198.49 1.96778C183.819 40.6025 141.642 56.863 100.207 55.0642C79.5359 54.1668 59.2102 48.7659 42.8495 39.5149C26.4862 30.2624 14.1867 17.2206 9.32888 1.06828L7.89244 1.50029L6.456 1.9323C11.5982 19.03 24.5487 32.6132 41.3729 42.1263C58.1997 51.6409 78.999 57.1463 100.077 58.0614C142.143 59.8876 185.966 43.3981 201.295 3.03281L199.892 2.50029Z";

const DESIGN_W = 284;
const DESIGN_H = 186;

/** Figma 1028:1875 — posição e caixa de cada seta */
const ARROWS = [
  {
    id: "observar-ler",
    d: ARC_OBSERVAR_LER,
    x: 42,
    y: 18,
    w: 69,
    h: 64,
    vbW: 72.0001,
    vbH: 76.5461,
  },
  {
    id: "ler-ajustar",
    d: ARC_LER_AJUSTAR,
    x: 178,
    y: 14,
    w: 64,
    h: 69,
    vbW: 76.5461,
    vbH: 72.0001,
  },
  {
    id: "ajustar-observar",
    d: ARC_AJUSTAR_OBSERVAR,
    x: 47,
    y: 129,
    w: 192,
    h: 55.197,
    vbW: 201.393,
    vbH: 58.1973,
  },
] as const;

/** Figma 1028:1875 — Action Container */
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
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${DESIGN_W} ${DESIGN_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      role="img"
      style={{ display: "block", flexShrink: 0, overflow: "visible", ...style }}
    >
      {ARROWS.map((arrow) => (
        <g
          key={arrow.id}
          transform={`translate(${arrow.x} ${arrow.y}) scale(${arrow.w / arrow.vbW} ${arrow.h / arrow.vbH})`}
        >
          <path d={arrow.d} fill={BLUE} />
        </g>
      ))}

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
  );
}
