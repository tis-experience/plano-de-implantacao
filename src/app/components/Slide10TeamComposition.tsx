import { motion } from "motion/react";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import { createSlideMetrics } from "../scaling";

interface Props {
  scaleX: number;
  scaleY: number;
}

type TeamRole = {
  bold: string;
  suffix?: string;
};

type PhaseCard = {
  phase: string;
  title: string;
  roles: TeamRole[];
  focus: string;
};

const BLUE = "#036ef2";
const NAVY = "#04165d";
const INK = "#2f3237";
const MUTED = "#6e7587";
const BORDER = "#c7cad1";
const FOOTER_TEXT = "PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING";
const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });

const PHASES: PhaseCard[] = [
  {
    phase: "FUNDAÇÃO",
    title: "Hoje",
    roles: [
      { bold: "1 Designer Lead" },
      { bold: "2 Designers", suffix: "(1 Pleno e 1 Júnior)" },
    ],
    focus: "Foco em processo mínimo, Design System v1, pilotos, templates e handoff padronizado.",
  },
  {
    phase: "EXPANSÃO",
    title: "+6 meses",
    roles: [
      { bold: "1 Designer Lead" },
      { bold: "4 Designers", suffix: "(3 Plenos e 1 Júnior)" },
      { bold: "1 UX Researcher", suffix: "(Pleno)" },
    ],
    focus: "Researcher dedicado, implantação de métricas, consumo do Design System em projectos da fábrica.",
  },
  {
    phase: "ESCALA",
    title: "+12 meses",
    roles: [
      { bold: "1 Designer Lead" },
      { bold: "7 Designers", suffix: "(1 Sênior, 4 Plenos e 2 Júniors)" },
      { bold: "1 UX Researcher", suffix: "(Pleno)" },
    ],
    focus: "Cultura de pesquisa estabelecida, decisões apoiadas por dados, designers além da entrega de UI.",
  },
];

function TisLogo({ scale }: { scale: (n: number) => number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fade(0.35)}
      style={{ width: scale(120), height: scale(56), position: "relative", opacity: 0.9, overflow: "visible", flexShrink: 0 }}
    >
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
    </motion.div>
  );
}

function Bullet({ vs }: { vs: (n: number) => number }) {
  return (
    <motion.div
      style={{
        display: "flex",
        height: vs(32),
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <div style={{ width: vs(10), height: vs(10), backgroundColor: BLUE, flexShrink: 0 }} />
    </motion.div>
  );
}

function TeamRoleRow({
  role,
  vx,
  vs,
}: {
  role: TeamRole;
  vx: (n: number) => number;
  vs: (n: number) => number;
}) {
  return (
    <div style={{ display: "flex", gap: vx(12), alignItems: "flex-start", width: "100%" }}>
      <Bullet vs={vs} />
      <p
        style={{
          margin: 0,
          flex: "1 0 0",
          minWidth: 0,
          fontFamily: "'Manrope', sans-serif",
          fontSize: vs(20),
          lineHeight: 1.5,
          color: NAVY,
        }}
      >
        <span style={{ fontWeight: 800 }}>{role.bold}</span>
        {role.suffix ? <span>{` ${role.suffix}`}</span> : null}
      </p>
    </div>
  );
}

function PhaseColumn({
  card,
  index,
  vx,
  vy,
  vs,
}: {
  card: PhaseCard;
  index: number;
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: vy(28) }}
      animate={{ opacity: 1, y: 0 }}
      transition={fade(0.14 + index * 0.08)}
      style={{
        flex: "1 0 0",
        minWidth: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.div
        style={{
          backgroundColor: NAVY,
          minHeight: vy(168),
          padding: vs(40),
          borderTopLeftRadius: vs(28),
          borderTopRightRadius: vs(28),
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexShrink: 0,
        }}
      >
        <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(16), alignItems: "flex-start" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-SemiBold', sans-serif",
              fontSize: vs(16),
              letterSpacing: vs(2),
              lineHeight: "normal",
              color: BLUE,
              textTransform: "uppercase",
            }}
          >
            {card.phase}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontSize: vs(48),
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            {card.title}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          flex: "1 0 0",
          minHeight: 0,
          backgroundColor: "#ffffff",
          borderLeft: `${vs(1)}px solid ${BORDER}`,
          borderRight: `${vs(1)}px solid ${BORDER}`,
          borderBottom: `${vs(1)}px solid ${BORDER}`,
          borderBottomLeftRadius: vs(28),
          borderBottomRightRadius: vs(28),
          padding: vs(40),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <motion.div
          style={{
            flex: "1 0 0",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(16), width: "100%" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "'Bronkoh-Heavy', sans-serif",
                fontSize: vs(26),
                lineHeight: 1.5,
                color: NAVY,
              }}
            >
              Equipa
            </p>
            <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(8), width: "100%" }}>
              {card.roles.map((role) => (
                <TeamRoleRow key={`${card.phase}-${role.bold}`} role={role} vx={vx} vs={vs} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(12), width: "100%" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "'Bronkoh-SemiBold', sans-serif",
                fontSize: vs(16),
                letterSpacing: vs(2),
                lineHeight: "normal",
                color: BLUE,
                textTransform: "uppercase",
              }}
            >
              FOCO DA FASE
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "'Manrope', sans-serif",
                fontSize: vs(18),
                lineHeight: 1.5,
                letterSpacing: vs(0.25),
                color: INK,
              }}
            >
              {card.focus}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Slide10TeamComposition({ scaleX, scaleY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  return (
    <motion.div
      key="slide-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 overflow-hidden bg-white"
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
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-SemiBold', sans-serif",
              fontSize: vs(16),
              letterSpacing: vs(2),
              lineHeight: "normal",
              color: BLUE,
              textTransform: "uppercase",
            }}
          >
            Dimensionamento de Time
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontSize: vs(80),
              letterSpacing: vs(-1.5),
              lineHeight: 1,
              color: NAVY,
            }}
          >
            Composição da equipa
          </p>
        </div>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Regular', sans-serif",
            fontSize: vs(28),
            lineHeight: 1.5,
            color: INK,
          }}
        >
          Dimensionamento progressivo condicionado a demanda, criticidade e maturidade operacional.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: vy(24) }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.16)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(357),
          width: vx(1680),
          height: vy(540),
          display: "flex",
          gap: vx(24),
          alignItems: "stretch",
        }}
      >
        {PHASES.map((card, index) => (
          <PhaseColumn key={card.phase} card={card} index={index} vx={vx} vy={vy} vs={vs} />
        ))}
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
        <motion.div style={{ display: "flex", gap: vx(20), alignItems: "center", overflow: "hidden" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-SemiBold', sans-serif",
              fontSize: vs(14),
              letterSpacing: vs(1.5),
              lineHeight: "normal",
              color: BLUE,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            10
          </p>
          <motion.div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
            <motion.div
              style={{ position: "absolute", background: "rgba(43,118,193,0.4)", height: vs(1), left: 0, right: 0, top: 0 }}
            />
          </motion.div>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-SemiBold', sans-serif",
              fontSize: vs(14),
              letterSpacing: vs(1.5),
              lineHeight: "normal",
              color: MUTED,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {FOOTER_TEXT}
          </p>
        </motion.div>
        <TisLogo scale={vs} />
      </motion.div>
    </motion.div>
  );
}
