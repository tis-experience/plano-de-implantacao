import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { createSlideMetrics } from "../scaling";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import { ROLES } from "./rolesData";
import { RolesModal } from "./RolesModal";
import { INTERACTIVE_HOVER_TRANSITION } from "../constants/interactiveShadow";

interface Props {
  scaleX: number;
  scaleY: number;
  onModalChange?: (open: boolean) => void;
}

const BLUE = "#036ef2";
const NAVY = "#04165d";
const INK = "#2f3237";
const MUTED = "#6e7587";
const SNOW = "#f5f5f5";
const FOOTER_TEXT = "PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING";
const ROLE_ROW_HOVER_BOX_SHADOW = "0 8px 24px 0 rgba(5, 28, 117, 0.16)";
const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });

function stopEvent(event: MouseEvent) {
  event.stopPropagation();
}

function TisLogo({ scale }: { scale: (n: number) => number }) {
  return (
    <motion.div
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

function PlusIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5V19M5 12H19" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function RoleRow({
  index,
  title,
  summary,
  hovered,
  onHover,
  onLeave,
  onOpen,
  vx,
  vy,
  vs,
}: {
  index: number;
  title: string;
  summary: string;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onOpen: () => void;
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
}) {
  const active = hovered;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: vy(12) }}
      animate={{ opacity: 1, y: 0 }}
      transition={fade(0.14 + index * 0.05)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={(event) => {
        stopEvent(event);
        onOpen();
      }}
      onFocus={onHover}
      onBlur={onLeave}
      style={{
        width: "100%",
        minHeight: vy(90),
        padding: `${vy(20)}px ${vx(active ? 20 : 40)}px ${vy(20)}px ${vx(40)}px`,
        border: "none",
        borderLeft: `${vs(4)}px solid ${BLUE}`,
        borderRadius: vs(16),
        backgroundColor: active ? BLUE : SNOW,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        textAlign: "left",
        boxSizing: "border-box",
        boxShadow: active ? ROLE_ROW_HOVER_BOX_SHADOW : "none",
        transition: `${INTERACTIVE_HOVER_TRANSITION}, padding 0.24s ease`,
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: vx(64),
          alignItems: "center",
          width: "100%",
        }}
      >
        <p
          style={{
            margin: 0,
            width: vx(200),
            flexShrink: 0,
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(28),
            lineHeight: "normal",
            color: active ? "#ffffff" : NAVY,
            transition: "color 0.15s ease",
          }}
        >
          {title}
        </p>
        <p
          style={{
            margin: 0,
            flex: "1 0 0",
            minWidth: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 500,
            fontSize: vs(18),
            lineHeight: "normal",
            color: active ? "#ffffff" : INK,
            transition: "color 0.15s ease",
          }}
        >
          {summary}
        </p>
        {active ? (
          <motion.div
            aria-hidden
            style={{
              width: vs(40),
              height: vs(40),
              borderRadius: "999px",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <PlusIcon size={vs(24)} color={BLUE} />
          </motion.div>
        ) : null}
      </motion.div>
    </motion.button>
  );
}

export function Slide11Roles({ scaleX, scaleY, onModalChange }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
    onModalChange?.(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    onModalChange?.(false);
  };

  return (
    <motion.div
      key="slide-11"
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
            Quem faz o quê
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
            Papéis e responsabilidades
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
          Responsabilidades e entregas que cada papel deve assumir ao longo do trabalho.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: vy(16) }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.16)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(357),
          width: vx(1680),
          display: "flex",
          flexDirection: "column",
          gap: vy(8),
        }}
      >
        {ROLES.map((role, index) => (
          <RoleRow
            key={role.title}
            index={index}
            title={role.title}
            summary={role.summary}
            hovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
            onOpen={() => openModal(index)}
            vx={vx}
            vy={vy}
            vs={vs}
          />
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
        <div style={{ display: "flex", gap: vx(20), alignItems: "center", overflow: "hidden" }}>
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
            11
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
        </div>
        <TisLogo scale={vs} />
      </motion.div>

      <RolesModal
        open={modalOpen}
        initialIndex={modalIndex}
        onClose={closeModal}
        scaleX={scaleX}
        scaleY={scaleY}
      />
    </motion.div>
  );
}
