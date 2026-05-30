import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type WheelEventHandler } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import { createSlideMetrics } from "../scaling";
import { INTERACTIVE_HOVER_BOX_SHADOW } from "../constants/interactiveShadow";
import { resolveVerticalPage } from "../constants/verticalPageNav";
import { VerticalPageNav } from "./VerticalPageNav";
import {
  ROADMAP_MONTHS,
  ROADMAP_PAGE_COUNT,
  ROADMAP_PHASES,
  ROADMAP_ROWS,
  ROADMAP_TASK_COLORS,
  ROADMAP_TASK_TOOLTIPS,
  ROADMAP_TOOLTIP_WIDTH,
  type RoadmapTask,
  type RoadmapTaskColor,
} from "./slide15RoadmapData";

interface Props {
  scaleX: number;
  scaleY: number;
}

const INK = "#2f3237";
const BG = "#f4f5f7";
const MONTH_BG = "rgba(110,117,135,0.1)";
const PHASE_BORDER = "#6e7587";
const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_TRANSITION_SECONDS = 0.42;

const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });

type Metrics = ReturnType<typeof createSlideMetrics>;

type ActiveRoadmapTooltip = {
  title: string;
  body: string;
  color: RoadmapTaskColor;
};

function RoadmapTooltipPopover({
  tooltip,
  x,
  y,
  vs,
}: {
  tooltip: ActiveRoadmapTooltip | null;
  x: number;
  y: number;
  vs: (n: number) => number;
}) {
  const width = vs(ROADMAP_TOOLTIP_WIDTH);
  const estimatedHeight = vs(280);
  const margin = vs(16);
  const offset = vs(18);
  const preferredLeft = x + offset;
  const fallbackLeft = x - width - offset;
  const left =
    preferredLeft + width + margin <= window.innerWidth
      ? preferredLeft
      : Math.max(margin, fallbackLeft);
  const top = Math.min(
    window.innerHeight - estimatedHeight - margin,
    Math.max(margin, y - estimatedHeight / 2),
  );

  return (
    <AnimatePresence>
      {tooltip ? (
        <motion.div
          key={tooltip.title}
          initial={{ opacity: 0, scale: 0.96, y: vs(6) }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: vs(4) }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          style={{
            position: "fixed",
            left,
            top,
            width,
            zIndex: 5000,
            pointerEvents: "none",
            borderRadius: vs(28),
            padding: vs(24),
            boxSizing: "border-box",
            background: "rgba(0,0,0,0.9)",
            boxShadow: INTERACTIVE_HOVER_BOX_SHADOW,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            gap: vs(16),
          }}
        >
          <div
            style={{
              display: "flex",
              gap: vs(8),
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              style={{
                width: vs(12),
                height: vs(12),
                borderRadius: "50%",
                backgroundColor: ROADMAP_TASK_COLORS[tooltip.color],
                border: `${vs(1)}px solid rgba(255,255,255,0.2)`,
                flexShrink: 0,
                marginTop: vs(5),
              }}
            />
            <p
              style={{
                margin: 0,
                flex: 1,
                minWidth: 0,
                fontFamily: "'Bronkoh-Heavy', sans-serif",
                fontWeight: 900,
                fontSize: vs(20),
                lineHeight: `${vs(22)}px`,
                color: "#fff",
                wordBreak: "break-word",
              }}
            >
              {tooltip.title}
            </p>
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: vs(16),
              lineHeight: 1.4,
              color: "#fff",
              wordBreak: "break-word",
            }}
          >
            {tooltip.body}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

const ROADMAP_LEGEND: { rowLabel: string; color: RoadmapTaskColor; description: string }[] = [
  {
    rowLabel: "Design System",
    color: "blue",
    description: "Versões do sistema, aplicação no piloto e evolução contínua do DS.",
  },
  {
    rowLabel: "Hub de conhecimento",
    color: "purple",
    description: "Playbook, hub de UX, templates de metodologias e consolidação de insights.",
  },
  {
    rowLabel: "Ritos e processo",
    color: "navy",
    description: "Ritos iniciais, implantação no piloto e revisão dos processos.",
  },
  {
    rowLabel: "Adoção e métricas",
    color: "gray",
    description: "Indicadores, medição no piloto e definição do ciclo seguinte.",
  },
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

function TaskCell({
  task,
  gridRow,
  metrics,
  onTooltipChange,
}: {
  task: RoadmapTask;
  gridRow: number;
  metrics: Metrics;
  onTooltipChange: (tooltip: ActiveRoadmapTooltip | null, position?: { x: number; y: number }) => void;
}) {
  const { vy, vs } = metrics;
  const padding = task.padding ?? 20;
  const tooltipData = ROADMAP_TASK_TOOLTIPS[task.label];

  const showTooltip = (event: MouseEvent<HTMLElement>) => {
    if (!tooltipData) return;
    onTooltipChange(
      { title: tooltipData.title, body: tooltipData.body, color: task.color },
      { x: event.clientX, y: event.clientY },
    );
  };

  return (
    <div
      role={tooltipData ? "button" : undefined}
      tabIndex={tooltipData ? 0 : undefined}
      aria-label={tooltipData ? `Ver detalhes de ${task.label}` : task.label}
      onMouseEnter={showTooltip}
      onMouseMove={showTooltip}
      onMouseLeave={() => onTooltipChange(null)}
      onFocus={(event) => {
        if (!tooltipData) return;
        const rect = event.currentTarget.getBoundingClientRect();
        onTooltipChange(
          { title: tooltipData.title, body: tooltipData.body, color: task.color },
          { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        );
      }}
      onBlur={() => onTooltipChange(null)}
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
        cursor: tooltipData ? "pointer" : "default",
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

function RoadmapGrid({
  metrics,
  onTooltipChange,
}: {
  metrics: Metrics;
  onTooltipChange: (tooltip: ActiveRoadmapTooltip | null, position?: { x: number; y: number }) => void;
}) {
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
              <TaskCell
                key={task.label}
                task={task}
                gridRow={gridRow}
                metrics={metrics}
                onTooltipChange={onTooltipChange}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function RoadmapLegendPage({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        width: vx(1664),
        display: "flex",
        flexDirection: "column",
        gap: vy(24),
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Bronkoh-SemiBold', sans-serif",
          fontSize: vs(28),
          lineHeight: 1.4,
          color: INK,
        }}
      >
        Frentes de trabalho e leitura das cores no roadmap
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(2, ${vx(820)}px)`,
          columnGap: vx(24),
          rowGap: vy(24),
        }}
      >
        {ROADMAP_LEGEND.map((item) => (
          <div
            key={item.rowLabel}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: vy(16),
              padding: vs(32),
              borderRadius: vs(24),
              background: "#fff",
              border: `${vs(2)}px solid ${ROADMAP_TASK_COLORS[item.color]}`,
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: vx(16) }}>
              <div
                style={{
                  width: vs(16),
                  height: vs(16),
                  borderRadius: "50%",
                  backgroundColor: ROADMAP_TASK_COLORS[item.color],
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Bronkoh-Bold', sans-serif",
                  fontSize: vs(28),
                  lineHeight: 1.2,
                  color: "#000",
                }}
              >
                {item.rowLabel}
              </p>
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Bronkoh-Regular', sans-serif",
                fontSize: vs(24),
                lineHeight: 1.5,
                color: INK,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Slide15RoadmapImplantacao({ scaleX, scaleY }: Props) {
  const metrics = createSlideMetrics(scaleX, scaleY);
  const { vx, vy, vs } = metrics;
  const reducedMotion = useReducedMotion();
  const lastWheelRef = useRef(0);
  const [page, setPageState] = useState(0);
  const [pageDirection, setPageDirection] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState<ActiveRoadmapTooltip | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const updateTooltip = (next: ActiveRoadmapTooltip | null, position?: { x: number; y: number }) => {
    setActiveTooltip(next);
    if (position) setTooltipPos(position);
  };

  useEffect(() => {
    if (page !== 0) setActiveTooltip(null);
  }, [page]);

  const setPage = (next: number) => {
    const { target, direction } = resolveVerticalPage(next, page, ROADMAP_PAGE_COUNT);
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

  return (
    <motion.div
      key="slide-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.35 }}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
      onWheel={handleWheel}
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
          Plano de implantação em ciclos, com entregas progressivas e validação em projectos reais.
        </p>
      </motion.div>

      <AnimatePresence mode="wait" custom={pageDirection}>
        <motion.div
          key={page}
          initial={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(28) }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(-22) }}
          transition={{ duration: reducedMotion ? 0 : PAGE_TRANSITION_SECONDS, ease: EASE }}
          style={{
            position: "absolute",
            left: vx(120),
            top: vy(397),
          }}
        >
          {page === 0 ? (
            <RoadmapGrid metrics={metrics} onTooltipChange={updateTooltip} />
          ) : (
            <RoadmapLegendPage metrics={metrics} />
          )}
        </motion.div>
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

      <VerticalPageNav
        page={page}
        setPage={setPage}
        pageCount={ROADMAP_PAGE_COUNT}
        metrics={metrics}
        slideLabel="roadmap de implantação"
      />

      {page === 0 ? (
        <RoadmapTooltipPopover tooltip={activeTooltip} x={tooltipPos.x} y={tooltipPos.y} vs={vs} />
      ) : null}
    </motion.div>
  );
}
