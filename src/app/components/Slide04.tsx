import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/04CamadasDaExperiencia/svg-n4bcoxy2ji";
import { createSlideMetrics } from "../scaling";

interface Props {
  scaleX: number;
  scaleY: number;
  onPrev: () => void;
  onNext: () => void;
}

const ease = "easeOut" as const;
const stagger = (i: number) => ({
  duration: 0.55,
  delay: 0.08 + i * 0.1,
  ease,
});

// ─── IcebergDetails container: 960 × 866 (design coords) ───────────────────
// Left edge in slide: x = 808 · scaleX
// Top  edge in slide: y = 180 · scaleY
// All inner positions use vs() → uniform scale, no squish on resize
const IC_W = 960; // container width  (iceberg + annotation area)
const IC_H = 866; // container height (all 5 layers stacked)
const ICE_W = 631; // iceberg shapes width (within container)

type IcePath =
  | "p2b77ad00"
  | "p3f899700"
  | "p15759a00"
  | "p1015e100"
  | "p16f1c900";

// Combined SVG layer data — tx/ty positions within 0..ICE_W × 0..IC_H viewBox
// flipX = rotate(180deg) scaleY(-1) ≡ scaleX(-1) around shape width
const ICE_LAYERS: {
  tx: number;
  ty: number;
  tw: number;
  flipX: boolean;
  path: IcePath;
  fill: string;
}[] = [
  {
    tx: 85,
    ty: 0,
    tw: 434,
    flipX: true,
    path: "p2b77ad00",
    fill: "#3B8DFF",
  }, // SUPERFÍCIE
  {
    tx: 4.9,
    ty: 191,
    tw: 610.5,
    flipX: true,
    path: "p3f899700",
    fill: "#0D1F63",
  }, // ESQUELETO
  {
    tx: 0.7,
    ty: 351,
    tw: 630.25,
    flipX: false,
    path: "p15759a00",
    fill: "#203170",
  }, // ESTRUTURA
  {
    tx: 33,
    ty: 511,
    tw: 583,
    flipX: false,
    path: "p1015e100",
    fill: "#33437D",
  }, // ESCOPO
  {
    tx: 94,
    ty: 671,
    tw: 431,
    flipX: false,
    path: "p16f1c900",
    fill: "#46558A",
  }, // ESTRATÉGIA
];

// Labels inside the iceberg (positions from IcebergDetails LayerContainer components)
const LABELS = [
  {
    x: 242.25,
    y: 92,
    w: 138,
    name: "SUPERFÍCIE",
    desc: "A interface visual",
  },
  {
    x: 196.25,
    y: 231,
    w: 231,
    name: "ESQUELETO",
    desc: "Componentes, wireframes e navegação",
  },
  {
    x: 173.25,
    y: 391,
    w: 277,
    name: "ESTRUTURA",
    desc: "Fluxos, arquitetura de informação e design de interação",
  },
  {
    x: 201.25,
    y: 551,
    w: 220,
    name: "ESCOPO",
    desc: "Funcionalidades, conteúdo e requisitos",
  },
  {
    x: 158.25,
    y: 711,
    w: 306,
    name: "ESTRATÉGIA",
    desc: "Necessidades do utilizador e objetivos do produto",
  },
];

// Callout annotations (positions from IcebergDetails Text components)
// Layout: [spacer 160px] [gap 24px] [text textW px]
const DETAILS: {
  left: number;
  top: number;
  textW: number;
  paras: readonly string[];
}[] = [
  {
    left: 426.25,
    top: 89,
    textW: 170,
    paras: ["Como é visualmente a solução provável?"],
  },
  {
    left: 516.25,
    top: 247,
    textW: 260,
    paras: ["Como são organizadas as informações e ações?"],
  },
  {
    left: 556.25,
    top: 375,
    textW: 220,
    paras: [
      "Como deve o utilizador interagir com o produto?",
      "Que interações podem melhorar a experiência?",
    ],
  },
  {
    left: 516.25,
    top: 567,
    textW: 210,
    paras: ["Quais informações e ações são necessárias?"],
  },
  {
    left: 426.25,
    top: 713,
    textW: 216,
    paras: [
      "O que? Por que? Para quem? Onde? Quando?",
      "Que valor isso cria para o utilizador e para o negócio?",
    ],
  },
];

export function Slide04({ scaleX, scaleY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  const [hoveredLayer, setHoveredLayer] = useState<
    number | null
  >(null);

  return (
    <motion.div
      key="slide-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 bg-white overflow-hidden"
    >
      {/* ── Blue tint (bottom vy(709)) ── */}
      <motion.div
        animate={{ y: [0, vs(8), 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: vs(371),
          bottom: vs(-20),
          left: 0,
          right: 0,
          backgroundColor: "rgba(3,110,242,0.06)",
        }}
      />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: vy(24) }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(0)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(96),
          display: "flex",
          flexDirection: "column",
          gap: vs(16),
        }}
      >
        <p
          style={{
            fontSize: vs(16),
            letterSpacing: vs(2),
            lineHeight: "normal",
          }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
        >
          Escopo de actuação
        </p>
        <div
          style={{ fontSize: vs(80), letterSpacing: vs(-1.5) }}
          className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
        >
          <p style={{ lineHeight: 1 }}>A experiência</p>
          <p style={{ lineHeight: 1 }}>tem 5 camadas</p>
        </div>
      </motion.div>

      {/* ── Logo ── */}
      <div
        style={{
          position: "absolute",
          left: vx(1680),
          top: vy(80),
          width: vs(120),
          height: vs(54),
        }}
      >
        <svg
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
          fill="none"
          viewBox="0 0 119.929 53.6039"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d={svgPaths.p1bc3fc80} fill="#036EF2" />
          <path d={svgPaths.p8ed8880} fill="#036EF2" />
          <path d={svgPaths.p79b1980} fill="#036EF2" />
          <path d={svgPaths.p3380500} fill="#04165D" />
          <path d={svgPaths.p3777a600} fill="#04165D" />
          <path d={svgPaths.p30300b00} fill="#04165D" />
        </svg>
      </div>

      {/* ── Body text ── */}
      <motion.p
        initial={{ opacity: 0, y: vy(16) }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(1)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(467),
          width: vx(516),
          fontSize: vs(32),
          letterSpacing: vs(-0.48),
          lineHeight: 1.5,
        }}
      >
        <span className="font-['Manrope',sans-serif] font-normal text-[#04165D]">
          A interface é a parte visível de um trabalho que{" "}
        </span>
        <span
          className="font-['Manrope',sans-serif] font-extrabold text-white"
          style={{
            backgroundColor: "#036ef2",
            padding: `${vs(0)}px ${vs(8)}px`,
            boxDecorationBreak: "clone",
            WebkitBoxDecorationBreak: "clone",
          }}
        >
          começa muito antes do desenho da tela.
        </span>
      </motion.p>

      {/* ── Bold statement ── */}
      <motion.p
        initial={{ opacity: 0, y: vy(16) }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(2)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(691),
          width: vx(474),
          fontSize: vs(32),
          lineHeight: 1.3,
        }}
        className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
      >
        A área de Experience Engineering deve atuar em todas
        elas.
      </motion.p>

      {/* ── Citation ── */}
      <p
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(899),
          fontSize: vs(14),
          lineHeight: 1.5,
        }}
        className="font-['Manrope',sans-serif] font-normal text-[#6e7587] whitespace-nowrap"
      >
        Modelo: Jesse James Garrett (2002), ilustração de Trevor
        van Gorp (2007)
      </p>

      {/* ══════════════════════════════════════════════════════════════
          ICEBERG + DETAILS CONTAINER
          · Positioned with vx/vy (preserves alignment with slide)
          · Sized with vs (uniform scale → no squish)
          · All inner elements use vs() → scale together as one unit
      ══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: vs(28) }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        style={{
          position: "absolute",
          left: vx(808),
          top: vs(
            180,
          ) /* ← vs() em vez de vy() → escala uniforme */,
          width: vs(IC_W),
          height: vs(IC_H),
          cursor:
            "default" /* ← sobrescreve cursor-none do root */,
        }}
      >
        {/* Botão oculto: faz o App.tsx detectar esta área como "interativa" por
            proximidade, escondendo o cursor de navegação customizado ao passar
            sobre o iceberg (pointerEvents:none → não intercepta cliques) */}
        <button
          aria-hidden
          tabIndex={-1}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: vs(ICE_W),
            height: vs(IC_H),
            opacity: 0,
            pointerEvents: "none",
            cursor: "default",
          }}
        />

        {/* ── 1. Iceberg shapes — single SVG (zero sub-pixel gaps) ── */}
        <svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: vs(ICE_W),
            height: vs(IC_H),
            display: "block",
            zIndex: 1,
          }}
          viewBox={`0 0 ${ICE_W} ${IC_H}`}
          fill="none"
          preserveAspectRatio="none"
        >
          {ICE_LAYERS.map((layer, i) => (
            <g
              key={i}
              transform={`translate(${layer.tx},${layer.ty})`}
            >
              {layer.flipX ? (
                <g
                  transform={`translate(${layer.tw},0) scale(-1,1)`}
                >
                  <path
                    d={svgPaths[layer.path]}
                    fill={layer.fill}
                  />
                </g>
              ) : (
                <path
                  d={svgPaths[layer.path]}
                  fill={layer.fill}
                />
              )}
            </g>
          ))}
        </svg>

        {/* ── 2. Hover highlight + hit-detection overlay SVG ── */}
        {/* Same viewBox/size as visual SVG — paths are transparent but
            capture pointer events; hovered path gets a subtle white tint. */}
        <svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: vs(ICE_W),
            height: vs(IC_H),
            display: "block",
            zIndex: 2,
            mixBlendMode: "screen",
          }}
          viewBox={`0 0 ${ICE_W} ${IC_H}`}
          fill="none"
          preserveAspectRatio="none"
          onMouseLeave={() => setHoveredLayer(null)}
        >
          {ICE_LAYERS.map((layer, i) => {
            const isHovered = hoveredLayer === i;
            const highlightFill = isHovered
              ? "rgba(255,255,255,0.2)"
              : "rgba(255,255,255,0)";
            const path = (
              <path
                d={svgPaths[layer.path]}
                fill={highlightFill}
                style={{
                  pointerEvents: "all",
                  cursor: "default",
                  transition: "fill 0.15s ease",
                }}
                onMouseEnter={() => setHoveredLayer(i)}
              />
            );
            return (
              <g
                key={i}
                transform={`translate(${layer.tx},${layer.ty})`}
              >
                {layer.flipX ? (
                  <g
                    transform={`translate(${layer.tw},0) scale(-1,1)`}
                  >
                    {path}
                  </g>
                ) : (
                  path
                )}
              </g>
            );
          })}
        </svg>

        {/* ── 3. Layer name + description labels (inside iceberg) ── */}
        {LABELS.map((label) => (
          <div
            key={label.name}
            style={{
              position: "absolute",
              left: vs(label.x),
              top: vs(label.y),
              width: vs(label.w),
              display: "flex",
              flexDirection: "column",
              gap: vs(8),
              textAlign: "center",
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            <p
              style={{ fontSize: vs(26), lineHeight: 1 }}
              className="font-['Bronkoh-Heavy',sans-serif] not-italic text-white"
            >
              {label.name}
            </p>
            <p
              style={{ fontSize: vs(18), lineHeight: 1.3 }}
              className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.85)]"
            >
              {label.desc}
            </p>
          </div>
        ))}

        {/* ── 4. Callout annotation — one visible at a time, keyed for cross-fade ── */}
        <AnimatePresence mode="wait">
          {hoveredLayer !== null &&
            (() => {
              const d = DETAILS[hoveredLayer];
              return (
                <motion.div
                  key={hoveredLayer}
                  initial={{ opacity: 0, x: vs(-14) }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: vs(-8) }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{
                    position: "absolute",
                    left: vs(d.left),
                    top: vs(d.top),
                    display: "flex",
                    alignItems: "center",
                    gap: vs(24),
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                >
                  {/* Horizontal spacer line */}
                  <div
                    style={{
                      width: vs(160),
                      height: vs(2),
                      overflow: "hidden",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        backgroundColor: "rgba(43,118,193,0.4)",
                      }}
                    />
                  </div>
                  {/* Text block */}
                  <div style={{ width: vs(d.textW) }}>
                    {d.paras.map((para, j) => (
                      <p
                        key={j}
                        style={{
                          fontSize: vs(20),
                          letterSpacing: vs(-0.25),
                          lineHeight: 1.2,
                          marginBottom:
                            j < d.paras.length - 1 ? vs(16) : 0,
                        }}
                        className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#04165d]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
        </AnimatePresence>
      </motion.div>

      {/* ── Ship ── */}
      <motion.div
        animate={{ y: [0, vs(8), 0], rotate: [0, 1, 0, -1, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: vx(0.833 * 1920),
          top: vs(0.2546 * 1080),
          width: vs(200.594),
          height: vs(96),
          transformOrigin: "bottom center",
        }}
      >
        <div
          style={{
            transform: "scaleX(-1)",
            width: "100%",
            height: "100%",
          }}
        >
          <svg
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 200.594 96"
          >
            <path d={svgPaths.p73e8f00} fill="#203170" />
            <path d={svgPaths.p17d81e80} fill="#D4DEE2" />
            <path d={svgPaths.p2fd83500} fill="#203170" />
            <path d={svgPaths.p3ffd3e40} fill="#709CC2" />
            <path d={svgPaths.p1652d380} fill="#A3B3C2" />
            <path d={svgPaths.p17ce3e00} fill="#6D91B0" />
            <path d={svgPaths.p1cad9ff0} fill="#203170" />
            <path d={svgPaths.p39297080} fill="#D4DEE2" />
            <path d={svgPaths.p93b5e80} fill="#D4DEE2" />
            <path d={svgPaths.p159ddb00} fill="#203170" />
            <path d={svgPaths.pf6a7880} fill="#D4DEE2" />
            <path d={svgPaths.p12014000} fill="#203170" />
          </svg>
        </div>
      </motion.div>

      {/* ── Footer ── */}
      <div
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(984),
          display: "flex",
          alignItems: "center",
          gap: vx(20),
        }}
      >
        <p
          style={{
            fontSize: vs(14),
            letterSpacing: vs(1.5),
            lineHeight: "normal",
          }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
        >
          04
        </p>
        <div
          style={{ width: vx(24), height: vy(2) }}
          className="overflow-clip relative shrink-0"
        >
          <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" />
        </div>
        <p
          style={{
            fontSize: vs(14),
            letterSpacing: vs(1.5),
            lineHeight: "normal",
          }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#6e7587] uppercase whitespace-nowrap"
        >
          PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
        </p>
      </div>
    </motion.div>
  );
}
