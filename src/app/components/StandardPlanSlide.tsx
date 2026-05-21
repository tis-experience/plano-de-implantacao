import { motion } from "motion/react";
import { createSlideMetrics } from "../scaling";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";

export interface StandardPlanSlideData {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  background?: string;
}

interface Props extends StandardPlanSlideData {
  scaleX: number;
  scaleY: number;
}

const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });

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

export function StandardPlanSlide({
  scaleX,
  scaleY,
  number,
  eyebrow,
  title,
  body,
  background = "#ffffff",
}: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  return (
    <motion.div
      key={`slide-${number}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: background }}
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
            style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal" }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
          >
            {eyebrow}
          </p>
          <p
            style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1 }}
            className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
          >
            {title}
          </p>
        </div>
        <p
          style={{ fontSize: vs(28), lineHeight: 1.5 }}
          className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
        >
          {body}
        </p>
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
        <div style={{ display: "flex", gap: vx(20), alignItems: "center", overflow: "hidden" }}>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
          >
            {number}
          </p>
          <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", background: "rgba(43,118,193,0.4)", height: vs(1), left: 0, right: 0, top: 0 }} />
          </div>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#6e7587] uppercase whitespace-nowrap"
          >
            PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
          </p>
        </div>
        <TisLogo scale={vs} />
      </motion.div>
    </motion.div>
  );
}
