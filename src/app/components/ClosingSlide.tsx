import { motion, type MotionValue } from "motion/react";
import { createSlideMetrics } from "../scaling";
import svgPaths from "../../imports/01Capa/svg-9xym7sn689";

interface Props {
  scaleX: number;
  scaleY: number;
  logoRotateX: MotionValue<number>;
  logoRotateY: MotionValue<number>;
}

export function ClosingSlide({ scaleX, scaleY, logoRotateX, logoRotateY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  return (
    <motion.div
      key="slide-17"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 overflow-hidden bg-[#04165d]"
    >
      <div
        style={{
          position: "absolute",
          left: vx(120),
          top: `calc(50% - ${vy(54)}px)`,
          transform: "translateY(-50%)",
          width: vx(708),
        }}
      >
        <motion.p
          initial={{ opacity: 0, x: vx(-80) }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{ fontSize: vs(180), letterSpacing: vs(-5), lineHeight: 0.92, margin: 0 }}
          className="font-['Bronkoh-Heavy',sans-serif] not-italic text-white"
        >
          Muito obrigado!
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(984),
          display: "flex",
          alignItems: "center",
          gap: vx(20),
          overflow: "hidden",
        }}
      >
        <p
          style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
        >
          2026
        </p>
        <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", background: "rgba(43,118,193,0.4)", height: vs(1), left: 0, right: 0, top: 0 }} />
        </div>
        <p
          style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-white uppercase whitespace-nowrap"
        >
          EQUIPA EXPERIENCE ENGINEERING
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: vx(-80) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: vx(91),
          bottom: vy(-81.57),
          width: vs(800),
          height: vs(797.568),
          perspective: 1200,
        }}
        className="pointer-events-none"
      >
        <motion.svg
          style={{
            rotateX: logoRotateX,
            rotateY: logoRotateY,
            transformStyle: "preserve-3d",
          }}
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 540 538.358"
        >
          <path d={svgPaths.p26e5dc80} fill="#036EF2" />
          <path d={svgPaths.p2da8a80} fill="#036EF2" />
          <path d={svgPaths.p21370b80} fill="#036EF2" />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
