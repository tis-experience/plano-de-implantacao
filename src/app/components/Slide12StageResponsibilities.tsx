import { motion } from "motion/react";
import infoIcon from "../../assets/slide12/info.svg";
import {
  STAGE_RESPONSIBILITIES,
  STAGE_RESPONSIBILITIES_FOOTNOTE,
  type StageResponsibility,
  type StageRole,
} from "./stageResponsibilitiesData";

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

const BLUE = "#036ef2";
const NAVY = "#04165d";
const INK = "#2f3237";
const BORDER = "#c7cad1";
const TAG_APOIO_BG = "#e2eefd";
const TAG_VALIDATION_BG = "#e2f3e2";
const TAG_VALIDATION_TEXT = "#308830";
const BANNER_BG = "rgba(3, 110, 242, 0.06)";
const BANNER_BORDER = "rgba(43, 118, 193, 0.4)";
const EASE = [0.22, 1, 0.36, 1] as const;

const TAG_LABELS: Record<StageRole["tag"], string> = {
  apoio: "APOIO",
  validacao: "VALIDAÇÃO",
  avaliacao: "AVALIAÇÃO",
};

function RoleTag({ role, metrics }: { role: StageRole; metrics: Metrics }) {
  const { vx, vs } = metrics;
  const isApoio = role.tag === "apoio";

  return (
    <div style={{ display: "flex", gap: vx(8), alignItems: "center", width: "100%", minWidth: 0 }}>
      <span
        style={{
          flexShrink: 0,
          padding: `${vs(8)}px`,
          borderRadius: vs(8),
          backgroundColor: isApoio ? TAG_APOIO_BG : TAG_VALIDATION_BG,
          fontFamily: "'Bronkoh-Heavy', sans-serif",
          fontSize: vs(14),
          lineHeight: `${vs(12)}px`,
          color: isApoio ? BLUE : TAG_VALIDATION_TEXT,
          whiteSpace: "nowrap",
        }}
      >
        {TAG_LABELS[role.tag]}
      </span>
      <p
        style={{
          margin: 0,
          flex: "1 0 0",
          minWidth: 0,
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: vs(16),
          lineHeight: `${vs(20)}px`,
          color: INK,
          overflowWrap: "break-word",
        }}
      >
        {role.label}
      </p>
    </div>
  );
}

function StageCard({ stage, index, metrics }: { stage: StageResponsibility; index: number; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.article
      initial={{ opacity: 0, y: vy(12) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: EASE, delay: index * 0.04 }}
      style={{
        position: "relative",
        backgroundColor: "#fff",
        border: `${vs(1)}px solid ${BORDER}`,
        borderRadius: vs(28),
        padding: vs(24),
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: vy(16),
        alignSelf: "start",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: vy(4), width: "100%" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Bold', sans-serif",
            fontSize: vs(18),
            lineHeight: `${vs(20)}px`,
            color: BLUE,
          }}
        >
          {stage.step}
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(24),
            lineHeight: `${vs(28)}px`,
            color: NAVY,
            overflowWrap: "break-word",
          }}
        >
          {stage.title}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: vy(2), width: "100%" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Bold', sans-serif",
            fontSize: vs(16),
            lineHeight: `${vs(18)}px`,
            color: BLUE,
          }}
        >
          Responsável
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: vs(18),
            lineHeight: `${vs(24)}px`,
            color: NAVY,
            overflowWrap: "break-word",
          }}
        >
          {stage.owner}
        </p>
      </div>

      <div style={{ height: vs(1), backgroundColor: BORDER, width: "100%" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: vy(8), width: "100%" }}>
        {stage.roles.map((role) => (
          <RoleTag key={role.tag} role={role} metrics={metrics} />
        ))}
      </div>

      <img
        src={stage.icon}
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          top: vy(23),
          right: vx(30.33),
          width: vs(48),
          height: vs(48),
          pointerEvents: "none",
        }}
      />
    </motion.article>
  );
}

export function Slide12StageResponsibilities({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: vx(120),
        top: vy(325),
        width: vx(1664),
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gridTemplateRows: "repeat(2, auto) auto",
        gap: `${vy(16)}px ${vx(16)}px`,
        alignContent: "start",
      }}
    >
      {STAGE_RESPONSIBILITIES.map((stage, index) => (
        <StageCard key={stage.step} stage={stage} index={index} metrics={metrics} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: vy(8) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: EASE, delay: 0.28 }}
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          alignItems: "center",
          gap: vx(8),
          padding: `${vy(12)}px ${vx(24)}px ${vy(12)}px ${vx(16)}px`,
          borderRadius: vs(16),
          backgroundColor: BANNER_BG,
          border: `${vs(1)}px solid ${BANNER_BORDER}`,
          boxSizing: "border-box",
        }}
      >
        <img src={infoIcon} alt="" aria-hidden style={{ width: vs(24), height: vs(24), flexShrink: 0 }} />
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Bold', sans-serif",
            fontSize: vs(20),
            lineHeight: `${vs(32)}px`,
            color: NAVY,
            whiteSpace: "nowrap",
          }}
        >
          {STAGE_RESPONSIBILITIES_FOOTNOTE}
        </p>
      </motion.div>
    </motion.div>
  );
}
