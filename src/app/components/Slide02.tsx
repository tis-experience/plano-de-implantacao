import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/02UxNaTisAtualmente/svg-pfywxk28k6";
import { imgGroup } from "../../imports/02UxNaTisAtualmente/svg-5kz7o";
import { NNgModal } from "./NNgModal";
import { createSlideMetrics } from "../scaling";

interface Props {
  scaleX: number;
  scaleY: number;
  onPrev: () => void;
  onNext: () => void;
  onModalChange?: (open: boolean) => void;
}

const stagger = (i: number) => ({
  duration: 0.55,
  delay: 0.1 + i * 0.1,
  ease: "easeOut" as const,
});

export function Slide02({ scaleX, scaleY, onPrev, onNext, onModalChange }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  const [statsPage, setStatsPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const directionRef = useRef(1);

  const STATS_PAGES = [
    [
      { num: "83",  suffix: "%", desc: "acredita que um profissional de UX seria útil para a sua área", dw: 337 },
      { num: "72",  suffix: "%", desc: "considera que UX impacta muito o sucesso dos produtos", dw: 307 },
      { num: "138", suffix: "",  desc: "pessoas querem saber mais sobre UX (workshops, formações, conteúdos)", dw: 351 },
      { num: "69",  suffix: "",  desc: "pessoas pediram envolvimento da área desde o início dos projectos", dw: 334 },
    ],
    [
      { num: "53", suffix: "%", desc: "não conhecem bem o conceito de User Experience", dw: 292 },
      { num: "34", suffix: "%", desc: "acham que UX é responsabilidade apenas dos designers", dw: 280 },
      { num: "31", suffix: "%", desc: "não sabem exatamente o que a área (Gabinete Criativo) faz", dw: 351 },
      { num: "23", suffix: "%", desc: `dizem que UX "impacta bastante mas não é tratada como prioridade"`, dw: 334 },
    ],
  ];

  const statsVariants = {
    enter: (dir: number) => ({ x: dir * vx(32), opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
    exit: (dir: number) => ({ x: dir * vx(-32), opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } }),
  };

  const handleStatsPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    directionRef.current = -1;
    setStatsPage(p => (p - 1 + STATS_PAGES.length) % STATS_PAGES.length);
  };

  const handleStatsNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    directionRef.current = 1;
    setStatsPage(p => (p + 1) % STATS_PAGES.length);
  };

  const BULLETS = [
    {
      w: 549,
      text: "A área de UX opera dentro da TIS de forma reactiva, sendo accionada pontualmente nos projectos.",
    },
    {
      w: 620,
      text: "A operação atual ainda não está formalizada por método repetível ou entrada estruturada nos processos da empresa.",
    },
  ];

  const openModal = () => { setModalOpen(true); onModalChange?.(true); };
  const closeModal = () => { setModalOpen(false); onModalChange?.(false); };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      style={{ position: "absolute", inset: 0, backgroundColor: "#ffffff" }}
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(0)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(96),
          width: vx(640),
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: vy(24),
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: vy(16) }}>
          <p
            style={{ fontSize: vs(16), letterSpacing: vs(2) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#036ef2] uppercase"
          >
            Diagnóstico
          </p>
          <p
            style={{ fontSize: vs(80), letterSpacing: vs(-1.5), width: vx(640) }}
            className="font-['Bronkoh-Heavy',sans-serif] not-italic leading-none text-[#04165d]"
          >
            Visão geral sobre UX na TIS até hoje
          </p>
        </div>
        <p
          style={{ fontSize: vs(28), width: vx(640) }}
          className="font-['Bronkoh-Regular',sans-serif] not-italic leading-[1.5] text-[#2f3237]"
        >
          Como a área opera e o que as pessoas pensam sobre UX.
        </p>
      </motion.div>

      {/* ── Bullet points ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={stagger(1)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(437),
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: vy(40),
        }}
      >
        <p
          style={{ fontSize: vs(16), letterSpacing: vs(2) }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#036ef2] uppercase"
        >
          Como a área opera até hoje
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: vy(32) }}>
          {BULLETS.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: vx(12), width: vx(b.w) }}>
              <div style={{ height: vy(32), display: "flex", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: vs(10), height: vs(10), backgroundColor: "#036ef2" }} />
              </div>
              <p
                style={{ fontSize: vs(20), flex: 1 }}
                className="font-['Manrope',sans-serif] font-normal leading-[1.5] text-[#04165d]"
              >
                {b.text}
              </p>
            </div>
          ))}

          {/* Bullet 3 — com destaque e link */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: vx(12), width: vx(620) }}>
            <div style={{ height: vy(32), display: "flex", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: vs(10), height: vs(10), backgroundColor: "#036ef2" }} />
            </div>
            <div style={{ flex: 1 }} className="font-['Manrope',sans-serif] font-normal text-[#04165d]">
              <p style={{ fontSize: vs(20) }} className="leading-[1.5]">
                Estágio de maturidade UX da TIS na escala NN/g:
              </p>
              <p
                style={{ fontSize: vs(24), letterSpacing: vs(-0.25) }}
                className="font-['Bronkoh-Heavy',sans-serif]"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); openModal(); }}
                  onMouseEnter={() => setLinkHovered(true)}
                  onMouseLeave={() => setLinkHovered(false)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    fontSize: "inherit",
                    letterSpacing: "inherit",
                    fontFamily: "inherit",
                    fontWeight: "inherit",
                    fontStyle: "inherit",
                  }}
                >
                  <span
                    style={{
                      color: "#04165d",
                      display: "inline-block",
                      position: "relative",
                      lineHeight: 1,
                    }}
                  >
                    Nível entre 2 e 3
                    <motion.span
                      initial={{ height: vs(2), backgroundColor: "#04165d" }}
                      animate={{
                        height: linkHovered ? vs(4) : vs(2),
                        backgroundColor: linkHovered ? "#036EF2" : "#04165d",
                      }}
                      transition={{ duration: 0.12, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        display: "block",
                      }}
                    />
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Conclusion ── */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(2)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(860),
          fontSize: vs(26),
        }}
        className="font-['Bronkoh-Heavy',sans-serif] not-italic leading-[1.3] text-[#04165d] whitespace-nowrap"
      >
        Há demanda. Mas o modo como ela é tratada hoje produz fricção.
      </motion.p>

      {/* ── Footer ── */}
      <div
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
            style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#036ef2] uppercase whitespace-nowrap"
          >
            02
          </p>
          <div
            style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}
          >
            <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" />
          </div>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#6e7587] uppercase whitespace-nowrap"
          >
            PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
          </p>
        </div>

        {/* Logo */}
        <div
          style={{ width: vs(120), height: vs(56), overflow: "visible", position: "relative", flexShrink: 0 }}
          className="opacity-90"
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: vs(120),
              height: vs(54),
              maskImage: `url('${imgGroup}')`,
              WebkitMaskImage: `url('${imgGroup}')`,
              maskSize: `${vs(236)}px ${vs(105.223)}px`,
              WebkitMaskSize: `${vs(236)}px ${vs(105.223)}px`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "0px 0px",
              WebkitMaskPosition: "0px 0px",
            }}
          >
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 119.929 53.6039"
            >
              <path d={svgPaths.p1bc3fc80} fill="#036EF2" />
              <path d={svgPaths.p8ed8880} fill="#036EF2" />
              <path d={svgPaths.p79b1980} fill="#036EF2" />
              <path d={svgPaths.p3380500} fill="#04165D" />
              <path d={svgPaths.p3777a600} fill="#04165D" />
              <path d={svgPaths.p30300b00} fill="#04165D" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Stats Card ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.2, type: "spring", stiffness: 110 }}
        style={{
          position: "absolute",
          left: vx(1100),
          top: vy(220),
          width: vx(620),
          paddingLeft: vx(56),
          paddingRight: vx(56),
          paddingTop: vy(48),
          paddingBottom: vy(48),
          borderRadius: vs(40),
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: vy(40),
          backgroundColor: "rgba(3, 110, 242, 0.06)",
        }}
      >
        <p
          style={{ fontSize: vs(16), letterSpacing: vs(2) }}
          className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#036ef2] uppercase"
        >
          Inquérito interno (NOV/2024) · 143 respostas
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: vy(12), width: "100%", overflow: "hidden", position: "relative", minHeight: vy(220) }}>
          <AnimatePresence mode="wait" custom={directionRef.current}>
            <motion.div
              key={statsPage}
              custom={directionRef.current}
              variants={statsVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ display: "flex", flexDirection: "column", gap: vy(12), width: "100%" }}
            >
              {STATS_PAGES[statsPage].map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: vx(24), width: "100%" }}>
                  <p
                    style={{ width: vx(120), letterSpacing: vs(-1), flexShrink: 0, fontSize: 0, lineHeight: 0 }}
                    className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#036ef2]"
                  >
                    <span style={{ fontSize: vs(64), lineHeight: "normal" }}>{row.num}</span>
                    {row.suffix && <span style={{ fontSize: vs(48), lineHeight: "normal" }}>{row.suffix}</span>}
                  </p>
                  <p
                    style={{ flex: 1, minWidth: 0, fontSize: vs(20) }}
                    className="font-['Manrope',sans-serif] font-normal leading-[1.5] text-[#04165d]"
                  >
                    {row.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: vx(32), width: "100%" }}
        >
          <button
            onClick={handleStatsPrev}
            style={{ width: vs(40), height: vs(40) }}
            className="group flex items-center justify-center rounded-full hover:bg-[#036ef2] transition-[background-color,color,box-shadow] duration-[240ms] ease hover:shadow-[0_8px_24px_0_rgba(5,28,117,0.16),0_2px_4px_0_rgba(5,28,117,0.24)] cursor-pointer"
          >
            <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none" className="transition-colors">
              <mask id="s2-back" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#s2-back)">
                <path d={svgPaths.p90d8b80} className="fill-[#036EF2] group-hover:fill-white transition-colors" />
              </g>
            </svg>
          </button>
          <button
            onClick={handleStatsNext}
            style={{ width: vs(40), height: vs(40) }}
            className="group flex items-center justify-center rounded-full hover:bg-[#036ef2] transition-[background-color,color,box-shadow] duration-[240ms] ease hover:shadow-[0_8px_24px_0_rgba(5,28,117,0.16),0_2px_4px_0_rgba(5,28,117,0.24)] cursor-pointer"
          >
            <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none" className="transition-colors">
              <mask id="s2-fwd" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#s2-fwd)">
                <path d={svgPaths.p23cbb200} className="fill-[#036EF2] group-hover:fill-white transition-colors" />
              </g>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ── NNg Modal ── */}
      <NNgModal
        open={modalOpen}
        onClose={closeModal}
        scaleX={scaleX}
        scaleY={scaleY}
      />
    </motion.div>
  );
}
