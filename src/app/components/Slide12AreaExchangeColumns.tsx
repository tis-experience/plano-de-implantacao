import { motion } from "motion/react";
import { INTERACTION_MAP_COLUMN_AREAS } from "./interactionMapData";
import { InteractionAreaCardView } from "./InteractionAreaCardView";

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

export function Slide12AreaExchangeColumns({ metrics }: { metrics: Metrics }) {
  const { vx, vy } = metrics;
  const columnWidth = vx(432);
  const gap = vx(16);

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
        width: columnWidth * 3 + gap * 2,
        height: vy(500),
        display: "grid",
        gridTemplateColumns: `${columnWidth}px ${columnWidth}px ${columnWidth}px`,
        columnGap: gap,
        alignItems: "start",
      }}
    >
      {INTERACTION_MAP_COLUMN_AREAS.map((area) => (
        <InteractionAreaCardView key={area.title} area={area} metrics={metrics} cardWidth="100%" />
      ))}
      <div aria-hidden style={{ width: columnWidth, height: vy(500) }} />
    </motion.div>
  );
}
