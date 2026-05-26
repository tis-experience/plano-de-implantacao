import type { CSSProperties } from "react";

const BLUE = "#036ef2";
const NAVY = "#04165d";
const PALE_BLUE = "rgba(3, 110, 242, 0.06)";

/** Figma 1028:1872 / 1028:1873 — arco com seta (viewBox 72×76.546 → 69×64) */
const CYCLE_ARC_SMALL =
  "M0.0081501 74.8909C-0.0774595 75.7149 0.521118 76.4523 1.34511 76.5379C2.1691 76.6235 2.90648 76.0249 2.99209 75.2009L1.50012 75.0459L0.0081501 74.8909ZM71.5608 12.1066C72.1466 11.5208 72.1466 10.5711 71.5608 9.98528L62.0148 0.43934C61.4291 -0.146447 60.4793 -0.146447 59.8935 0.43934C59.3077 1.02513 59.3077 1.97487 59.8935 2.56066L68.3788 11.0459L59.8935 19.5312C59.3077 20.117 59.3077 21.0668 59.8935 21.6525C60.4793 22.2383 61.4291 22.2383 62.0148 21.6525L71.5608 12.1066ZM1.50012 75.0459L2.99209 75.2009C6.91307 37.4615 36.2723 12.5459 70.5001 12.5459V11.0459V9.54594C34.7279 9.54594 4.08717 35.6304 0.0081501 74.8909L1.50012 75.0459Z";

/** Figma 1028:1869 — arco inferior (viewBox 201.393×58.197 → 192×55.197) */
const CYCLE_ARC_BOTTOM =
  "M201.295 3.03281C201.589 2.25834 201.199 1.3921 200.425 1.098C199.65 0.803898 198.784 1.19331 198.49 1.96778L199.892 2.50029L201.295 3.03281ZM8.60268 0.179095C7.873 -0.213159 6.9635 0.0603763 6.57124 0.790053L0.179095 12.6808C-0.213159 13.4105 0.0603762 14.32 0.790053 14.7123C1.51973 15.1045 2.42923 14.831 2.82149 14.1013L8.5034 3.53173L19.073 9.21364C19.8026 9.60589 20.7122 9.33236 21.1044 8.60268C21.4967 7.873 21.2231 6.9635 20.4934 6.57124L8.60268 0.179095ZM199.892 2.50029L198.49 1.96778C183.819 40.6025 141.642 56.863 100.207 55.0642C79.5359 54.1668 59.2102 48.7659 42.8495 39.5149C26.4862 30.2624 14.1867 17.2206 9.32888 1.06828L7.89244 1.50029L6.456 1.9323C11.5982 19.03 24.5487 32.6132 41.3729 42.1263C58.1997 51.6409 78.999 57.1463 100.077 58.0614C142.143 59.8876 185.966 43.3981 201.295 3.03281L199.892 2.50029Z";

const DESIGN_W = 284;
const DESIGN_H = 186;

const SMALL_ARC_SCALE_X = 69 / 72.0001;
const SMALL_ARC_SCALE_Y = 64 / 76.5461;
const BOTTOM_ARC_SCALE_X = 192 / 201.393;
const BOTTOM_ARC_SCALE_Y = 55.197 / 58.1973;

const PILLS = [
  { label: "Observar", x: 0, y: 89 },
  { label: "Ler", x: 117, y: 0 },
  { label: "Ajustar", x: 201, y: 89 },
] as const;

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

export function MonthlyReadingCycle({
  metrics,
  style,
}: {
  metrics: Metrics;
  style?: CSSProperties;
}) {
  const { vx, vy, vs } = metrics;
  const width = vx(DESIGN_W);
  const height = vy(DESIGN_H);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        flexShrink: 0,
        ...style,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${DESIGN_W} ${DESIGN_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        style={{ display: "block", overflow: "visible" }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Figma 1028:1873 — Observar → Ler */}
        <g transform={`translate(42 18) scale(${SMALL_ARC_SCALE_X} ${SMALL_ARC_SCALE_Y})`}>
          <path d={CYCLE_ARC_SMALL} fill={BLUE} />
        </g>
        {/* Figma 1028:1872 — Ler → Ajustar (caixa 64×69 em 178,14, rotate 90°) */}
        <g transform={`translate(210 48.5) rotate(90) translate(-34.5 -32) scale(${SMALL_ARC_SCALE_X} ${SMALL_ARC_SCALE_Y})`}>
          <path d={CYCLE_ARC_SMALL} fill={BLUE} />
        </g>
        {/* Figma 1028:1869 — Ajustar → Observar */}
        <g transform={`translate(47 129) scale(${BOTTOM_ARC_SCALE_X} ${BOTTOM_ARC_SCALE_Y})`}>
          <path d={CYCLE_ARC_BOTTOM} fill={BLUE} />
        </g>
      </svg>

      {PILLS.map((pill) => (
        <div
          key={pill.label}
          style={{
            position: "absolute",
            left: vx(pill.x),
            top: vy(pill.y),
            height: vy(34),
            padding: `${vy(8)}px ${vx(16)}px`,
            borderRadius: vy(17),
            border: `2px solid ${BLUE}`,
            backgroundColor: PALE_BLUE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontSize: vs(14),
              lineHeight: `${vy(17)}px`,
              whiteSpace: "nowrap",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              color: NAVY,
            }}
          >
            {pill.label}
          </span>
        </div>
      ))}

      <p
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: vy(77),
          width: vx(80),
          margin: 0,
          fontSize: vs(20),
          lineHeight: `${vy(20)}px`,
          textAlign: "center",
          fontFamily: "'Bronkoh-Heavy', sans-serif",
          color: NAVY,
        }}
      >
        Leitura mensal
      </p>
    </div>
  );
}
