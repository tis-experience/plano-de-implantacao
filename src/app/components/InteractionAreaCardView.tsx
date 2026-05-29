import { motion } from "motion/react";
import type { InteractionAreaCard } from "./interactionMapData";

export type InteractionCardMetrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

const NAVY = "#04165d";
const INK = "#2f3237";
const BLUE = "#036ef2";
const GREEN = "#078207";
const GREEN_BORDER = "#3b953b";
const BORDER = "#c7cad1";
const RECEIVE_BG = "rgba(3, 110, 242, 0.06)";
const DELIVER_BG = "rgba(44, 201, 44, 0.06)";

export const INTERACTION_MAP_CARD_WIDTH = 320;
export const INTERACTION_COLUMN_CARD_WIDTH = 432;

function DownloadIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4V13M12 13L8.5 9.5M12 13L15.5 9.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18H19" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UploadIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 20V11M12 11L8.5 14.5M12 11L15.5 14.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 6H19" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ExchangeBox({
  kind,
  text,
  metrics,
}: {
  kind: "receive" | "deliver";
  text: string;
  metrics: InteractionCardMetrics;
}) {
  const { vx, vy, vs } = metrics;
  const isReceive = kind === "receive";

  return (
    <motion.div
      style={{
        width: "100%",
        borderRadius: vs(16),
        padding: vs(16),
        boxSizing: "border-box",
        border: `1px solid ${isReceive ? BLUE : GREEN_BORDER}`,
        background: isReceive ? RECEIVE_BG : DELIVER_BG,
        display: "flex",
        flexDirection: "column",
        gap: vy(8),
      }}
    >
      <div style={{ display: "flex", gap: vx(4), alignItems: "center", width: "100%" }}>
        {isReceive ? <DownloadIcon size={vs(20)} color={BLUE} /> : <UploadIcon size={vs(20)} color={GREEN} />}
        <p
          style={{
            margin: 0,
            flex: "1 0 0",
            fontFamily: "'Bronkoh-Bold', sans-serif",
            fontSize: vs(18),
            lineHeight: `${vs(20)}px`,
            color: isReceive ? BLUE : GREEN,
          }}
        >
          {isReceive ? "Recebe" : "Entrega"}
        </p>
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: vs(14),
          lineHeight: 1.4,
          color: INK,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

export function InteractionAreaCardView({
  area,
  metrics,
  cardWidth = "100%",
}: {
  area: InteractionAreaCard;
  metrics: InteractionCardMetrics;
  cardWidth?: number | "100%";
}) {
  const { vx, vy, vs } = metrics;
  const widthStyle = cardWidth === "100%" ? "100%" : vx(cardWidth);

  return (
    <article
      style={{
        width: widthStyle,
        height: vy(500),
        flexShrink: 0,
        boxSizing: "border-box",
        padding: vs(20),
        borderRadius: vs(28),
        border: `1px solid ${BORDER}`,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ width: "100%", padding: vs(8), display: "flex", flexDirection: "column", gap: vy(12) }}>
        <p
          style={{
            margin: 0,
            width: "100%",
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(28),
            lineHeight: 1.2,
            color: NAVY,
            overflowWrap: "break-word",
          }}
        >
          {area.title.replace(/\//g, "/\u200b")}
        </p>
        <motion.div style={{ display: "flex", flexDirection: "column", gap: vy(12) }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: vs(18),
              lineHeight: 1.4,
              color: INK,
            }}
          >
            {area.intro}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: vs(18),
              lineHeight: 1.4,
              color: INK,
            }}
          >
            <span style={{ fontWeight: 800, color: NAVY }}>XP Engineering</span> {area.xpRole}
          </p>
        </motion.div>
      </motion.div>
      <motion.div style={{ width: "100%", display: "flex", flexDirection: "column", gap: vy(8) }}>
        <ExchangeBox kind="receive" text={area.receives} metrics={metrics} />
        <ExchangeBox kind="deliver" text={area.delivers} metrics={metrics} />
      </motion.div>
    </article>
  );
}
