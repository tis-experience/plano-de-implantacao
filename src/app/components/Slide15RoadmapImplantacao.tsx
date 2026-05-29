import { useState, type CSSProperties, type MouseEvent } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import { createSlideMetrics } from "../scaling";
import {
  ROADMAP_MONTHS,
  ROADMAP_PHASES,
  ROADMAP_ROWS,
  ROADMAP_TASK_COLORS,
  type RoadmapTask,
} from "./slide15RoadmapData";

interface Props {
  scaleX: number;
  scaleY: number;
}

const BLUE = "#036ef2";
const INK = "#2f3237";
const MUTED = "#6e7587";
const BG = "#f4f5f7";
const MONTH_BG = "rgba(110,117,135,0.1)";
const PHASE_BORDER = "#6e7587";

const NAV_ARROW_UP_PATH =
  "M12.825 8.47501L7.57501 13.725L8.62501 14.775L12.825 10.575L17.025 14.775L18.075 13.725L12.825 8.47501Z";
const NAV_ARROW_DOWN_PATH =
  "M12.825 15.525L17.025 11.325L18.075 12.375L12.825 17.625L7.57501 12.375L8.62501 11.325L12.825 15.525Z";

const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });

type Metrics = ReturnType<typeof createSlideMetrics>;

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

function MonthHeader({
  label,
  gridRow,
  gridColumn,
  metrics,
}: {
  label: string;
  gridRow: number;
  gridColumn: number;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;
  return (
    <div
      style={{
        gridRow,
        gridColumn,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: MONTH_BG,
        borderRadius: vs(12),
        padding: `${vy(12)}px ${vx(16)}px`,
        minHeight: vy(44),
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Bronkoh-SemiBold', sans-serif",
          fontSize: vs(22),
          lineHeight: `${vs(20)}px`,
          color: INK,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </p>
    </div>
  );
}

function PhaseBand({
  label,
  colStart,
  colSpan,
  metrics,
}: {
  label: string;
  colStart: number;
  colSpan: number;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;
  return (
    <div
      style={{
        gridColumn: `${colStart} / span ${colSpan}`,
        gridRow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderLeft: `${vs(3)}px solid ${PHASE_BORDER}`,
        borderRight: `${vs(3)}px solid ${PHASE_BORDER}`,
        borderRadius: vs(12),
        padding: `${vy(12)}px ${vx(16)}px`,
        minHeight: vy(44),
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Bronkoh-SemiBold', sans-serif",
          fontSize: vs(22),
          lineHeight: `${vs(20)}px`,
          color: INK,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </p>
    </div>
  );
}

function RowLabel({ label, gridRow, metrics }: { label: string; gridRow: number; metrics: Metrics }) {
  const { vs } = metrics;
  return (
    <p
      style={{
        gridColumn: 1,
        gridRow,
        margin: 0,
        alignSelf: "center",
        fontFamily: "'Bronkoh-Bold', sans-serif",
        fontSize: vs(22),
        lineHeight: 1,
        letterSpacing: vs(-0.25),
        color: "#000",
      }}
    >
      {label}
    </p>
  );
}

function TaskCell({ task, gridRow, metrics }: { task: RoadmapTask; gridRow: number; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;
  const padding = task.padding ?? 20;

  return (
    <div
      style={{
        gridColumn: `${task.colStart} / span ${task.colSpan}`,
        gridRow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ROADMAP_TASK_COLORS[task.color],
        borderRadius: vs(12),
        padding: vs(padding),
        minHeight: vy(62),
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: vs(22),
          lineHeight: 1,
          letterSpacing: vs(-0.25),
          color: "#f5f5f5",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {task.label}
      </p>
    </div>
  );
}

function RoadmapGrid({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;
  const labelCol = vx(201);
  const monthCol = vx(201);

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `${labelCol}px repeat(7, ${monthCol}px)`,
    gridTemplateRows: "repeat(6, auto)",
    columnGap: vx(8),
    rowGap: vy(16),
    width: vx(1664),
  };

  return (
    <div style={gridStyle}>
      <div style={{ gridColumn: 1, gridRow: 1 }} aria-hidden />

      {ROADMAP_PHASES.map((phase) => (
        <PhaseBand key={phase.label} label={phase.label} colStart={phase.colStart} colSpan={phase.colSpan} metrics={metrics} />
      ))}

      <div style={{ gridColumn: 1, gridRow: 2 }} aria-hidden />
      {ROADMAP_MONTHS.map((month, monthIndex) => (
        <MonthHeader key={month} label={month} gridRow={2} gridColumn={monthIndex + 2} metrics={metrics} />
      ))}

      {ROADMAP_ROWS.map((row, index) => {
        const gridRow = index + 3;
        return (
          <div key={row.label} style={{ display: "contents" }}>
            <RowLabel label={row.label} gridRow={gridRow} metrics={metrics} />
            {row.tasks.map((task) => (
              <TaskCell key={task.label} task={task} gridRow={gridRow} metrics={metrics} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function NavDot({ active, hovered }: { active: boolean; hovered: boolean }) {
  const highlighted = active || hovered;
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <circle cx={12} cy={12} r={highlighted ? 10 : 8} fill={highlighted ? BLUE : "rgba(43,118,193,0.4)"} />
    </svg>
  );
}

function VerticalNav({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const page = 0;
  const pageCount = 2;

  const stopEvent = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fade(0.25)}
      style={{
        position: "absolute",
        left: vx(1832),
        top: "50%",
        transform: "translateY(-50%)",
        width: vs(40),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: vy(40),
        zIndex: 20,
      }}
      onPointerDown={stopEvent}
      onClick={stopEvent}
    >
      <button
        type="button"
        aria-label="Secção anterior do roadmap"
        style={{
          width: vs(40),
          height: vs(40),
          border: 0,
          padding: 0,
          borderRadius: "50%",
          background: "transparent",
          color: BLUE,
          cursor: "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none">
          <path d={NAV_ARROW_UP_PATH} fill="currentColor" />
        </svg>
      </button>

      <div style={{ display: "flex", flexDirection: "column", gap: vy(4), alignItems: "center" }}>
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Secção ${index + 1} do roadmap`}
            aria-current={index === page ? "true" : undefined}
            onPointerEnter={() => setHoveredDot(index)}
            onPointerLeave={() => setHoveredDot(null)}
            style={{
              width: vs(24),
              height: vs(24),
              border: 0,
              padding: 0,
              borderRadius: "50%",
              background: hoveredDot === index ? BLUE : "transparent",
              cursor: "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NavDot active={index === page} hovered={hoveredDot === index} />
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Próxima secção do roadmap"
        style={{
          width: vs(40),
          height: vs(40),
          border: 0,
          padding: 0,
          borderRadius: "50%",
          background: "transparent",
          color: BLUE,
          cursor: "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none">
          <path d={NAV_ARROW_DOWN_PATH} fill="currentColor" />
        </svg>
      </button>
    </motion.div>
  );
}

export function Slide15RoadmapImplantacao({ scaleX, scaleY }: Props) {
  const metrics = createSlideMetrics(scaleX, scaleY);
  const { vx, vy, vs } = metrics;
  return (
    <motion.div
      key="slide-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
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
          <p
            style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal", margin: 0 }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
          >
            PRÓXIMOS PASSOS
          </p>
          <p
            style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1, margin: 0 }}
            className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
          >
            Roadmap de implantação
          </p>
        </div>
        <p
          style={{ fontSize: vs(28), lineHeight: 1.5, margin: 0 }}
          className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
        >
          Plano de implantação em ciclos, com entregas progressivas e validação em projetos reais.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: vy(20) }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.12)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(397),
        }}
      >
        <RoadmapGrid metrics={metrics} />
      </motion.div>

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
        <div style={{ display: "flex", alignItems: "center", gap: vx(20) }}>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), margin: 0 }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
          >
            15
          </p>
          <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
            <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" />
          </div>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), margin: 0 }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#6e7587] uppercase whitespace-nowrap"
          >
            PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
          </p>
        </div>
        <TisLogo scale={vs} />
      </motion.div>

      <VerticalNav metrics={metrics} />
    </motion.div>
  );
}
