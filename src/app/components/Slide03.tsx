import { useState, useRef } from "react";
import { motion } from "motion/react";
import { createSlideMetrics } from "../scaling";
import svgPaths from "../../imports/03EstruturaEProcessoAtual/svg-q2kz47c459";
import { imgGroup } from "../../imports/03EstruturaEProcessoAtual/svg-h4x0i";

interface Props {
  scaleX: number;
  scaleY: number;
  onPrev: () => void;
  onNext: () => void;
  onDragAreaHover?: (active: boolean) => void;
}

const stagger = (i: number) => ({
  duration: 0.55,
  delay: 0.08 + i * 0.09,
  ease: "easeOut" as const,
});

const CARD_WIDTHS = [1320, 1680, 1680];
const CARD_GAP = 32;
const TOTAL_CARDS = 3;

export function Slide03({ scaleX, scaleY, onDragAreaHover }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  const [currentCard, setCurrentCard] = useState(0);

  const dragStartXRef = useRef<number | null>(null);
  const hasDraggedRef = useRef(false);

  // Translate the card row so the active card starts at x = vx(120)
  const getTranslateX = (cardIndex: number) => {
    let offset = 0;
    for (let i = 0; i < cardIndex; i++) {
      offset += CARD_WIDTHS[i] + CARD_GAP;
    }
    return vx(120 - offset);
  };

  const goCardPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentCard(c => Math.max(c - 1, 0));
  };

  const goCardNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentCard(c => Math.min(c + 1, TOTAL_CARDS - 1));
  };

  const cardBg =
    "linear-gradient(90deg, rgba(3,110,242,0.06) 0%, rgba(3,110,242,0.06) 100%), linear-gradient(90deg, #fff 0%, #fff 100%)";

  return (
    <motion.div
      key="slide-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 bg-white overflow-hidden"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: vy(24) }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(0)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(96),
          width: vx(860),
          display: "flex",
          flexDirection: "column",
          gap: vs(24),
        }}
      >
        {/* Label + Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: vs(16), width: vx(650) }}>
          <p
            style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal" }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
          >
            Estrutura e processo atual
          </p>
          <p
            style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1 }}
            className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
          >
            Como tem decorrido o trabalho da área
          </p>
        </div>
        {/* Subtitle */}
        <p
          style={{ fontSize: vs(28), lineHeight: 1.5 }}
          className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
        >
          Da entrada nos projetos às consequências observáveis no resultado final.
        </p>
      </motion.div>

      {/* ── Cards carousel ── */}
      <motion.div
        data-drag-cursor-area="slide-3-carousel"
        animate={{ x: getTranslateX(currentCard) }}
        transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
        onPointerDown={(e) => {
          dragStartXRef.current = e.clientX;
          hasDraggedRef.current = false;
          try {
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          } catch (err) {}
        }}
        onPointerMove={(e) => {
          onDragAreaHover?.(true);
          if (dragStartXRef.current !== null && Math.abs(e.clientX - dragStartXRef.current) > 8) {
            hasDraggedRef.current = true;
          }
        }}
        onPointerUp={(e) => {
          if (dragStartXRef.current === null) return;
          const delta = e.clientX - dragStartXRef.current;
          const threshold = 60;
          if (delta < -threshold) setCurrentCard(c => Math.min(c + 1, TOTAL_CARDS - 1));
          else if (delta > threshold) setCurrentCard(c => Math.max(c - 1, 0));
          dragStartXRef.current = null;
          try {
            (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          } catch (err) {}
        }}
        onPointerEnter={() => onDragAreaHover?.(true)}
        onPointerLeave={() => {
          dragStartXRef.current = null;
          onDragAreaHover?.(false);
        }}
        onPointerCancel={() => {
          dragStartXRef.current = null;
          onDragAreaHover?.(false);
        }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: vy(453),
          left: 0,
          display: "flex",
          gap: vx(CARD_GAP),
          alignItems: "flex-start",
          userSelect: "none",
          touchAction: "none",
        }}
      >
        {/* ── Card 01 – Como entramos ── */}
        <div
          style={{
            width: vx(1320),
            flexShrink: 0,
            padding: `${vy(48)}px ${vx(56)}px`,
            borderRadius: vs(40),
            backgroundImage: cardBg,
          }}
        >
          <div style={{ display: "flex", gap: vx(64), alignItems: "flex-start", width: "100%" }}>
            {/* Number */}
            <div style={{ display: "flex", flexDirection: "column", gap: vs(8), flexShrink: 0, width: vx(160) }}>
              <p
                style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal" }}
                className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
              >
                Como entramos
              </p>
              <p
                style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1 }}
                className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
              >
                01
              </p>
            </div>
            {/* 2-col content */}
            <div style={{ display: "flex", flex: 1, gap: vx(64), alignItems: "flex-start", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: vs(12), flex: 1, minWidth: 0 }}>
                <p
                  style={{ fontSize: vs(28), lineHeight: 1.3 }}
                  className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
                >
                  Entrada via proposta comercial
                </p>
                <p
                  style={{ fontSize: vs(20), lineHeight: 1.5 }}
                  className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                >
                  A área é acionada para produzir telas com prazo apertado e sem embasamento prévio. Quando aprovadas, vão diretamente para desenvolvimento.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: vs(12), flex: 1, minWidth: 0 }}>
                <p
                  style={{ fontSize: vs(28), lineHeight: 1.3 }}
                  className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
                >
                  Projeto inicia pelo desenho
                </p>
                <p
                  style={{ fontSize: vs(20), lineHeight: 1.5 }}
                  className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                >
                  O ponto de partida do projeto é o desenho de telas, porque os desenvolvedores precisam de material para trabalhar. As etapas anteriores não acontecem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 02 – O que falta ── */}
        <div
          style={{
            width: vx(1680),
            flexShrink: 0,
            padding: `${vy(48)}px ${vx(56)}px`,
            borderRadius: vs(40),
            backgroundImage: cardBg,
          }}
        >
          <div style={{ display: "flex", gap: vx(64), alignItems: "flex-start", width: "100%" }}>
            {/* Number */}
            <div style={{ display: "flex", flexDirection: "column", gap: vs(8), flexShrink: 0, width: vx(160) }}>
              <p
                style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal" }}
                className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
              >
                O que falta
              </p>
              <p
                style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1 }}
                className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
              >
                02
              </p>
            </div>
            {/* 3-col content */}
            <div style={{ display: "flex", flex: 1, gap: vx(64), alignItems: "flex-start", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: vs(12), flex: 1, minWidth: 0 }}>
                <p
                  style={{ fontSize: vs(28), lineHeight: 1.3 }}
                  className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
                >
                  Sem etapa de Discovery
                </p>
                <p
                  style={{ fontSize: vs(20), lineHeight: 1.5 }}
                  className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                >
                  UX é entendido como brainstorming seguido de criação de telas. A compreensão do problema fica de fora.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: vs(12), flex: 1, minWidth: 0 }}>
                <p
                  style={{ fontSize: vs(28), lineHeight: 1.3 }}
                  className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
                >
                  Sem teste de usabilidade
                </p>
                <p
                  style={{ fontSize: vs(20), lineHeight: 1.5 }}
                  className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                >
                  Os protótipos seguem para desenvolvimento sem validação com o utilizador. Os problemas são identificados muito tarde.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: vs(12), flex: 1, minWidth: 0 }}>
                <p
                  style={{ fontSize: vs(28), lineHeight: 1.3 }}
                  className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
                >
                  Escopos pré-fechados
                </p>
                <p
                  style={{ fontSize: vs(20), lineHeight: 1.5 }}
                  className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                >
                  User stories sem detalhamento ou documentação já contêm escopo definido, sem espaço para alternativas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 03 – Consequência ── */}
        <div
          style={{
            width: "fit-content",
            flexShrink: 0,
            padding: `${vy(48)}px ${vx(56)}px`,
            borderRadius: vs(40),
            backgroundImage: cardBg,
          }}
        >
          <div style={{ display: "flex", gap: vx(64), alignItems: "flex-start" }}>
            {/* Number */}
            <div style={{ display: "flex", flexDirection: "column", gap: vs(8), flexShrink: 0, width: vx(160) }}>
              <p
                style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal" }}
                className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
              >
                Consequência
              </p>
              <p
                style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1 }}
                className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
              >
                03
              </p>
            </div>
            {/* Single content block */}
            <div style={{ flexShrink: 0, width: vx(460) }}>
              <div style={{ display: "flex", flexDirection: "column", gap: vs(12) }}>
                <p
                  style={{ fontSize: vs(28), lineHeight: 1.3 }}
                  className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
                >
                  Projetos descartados
                </p>
                <p
                  style={{ fontSize: vs(20), lineHeight: 1.5 }}
                  className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                >
                  Alguns projetos são descartados por não atenderem à necessidade real, ou por disputa externa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Navigation arrows (card carousel) ── */}
      <div
        style={{
          position: "absolute",
          left: vx(128),
          top: vy(741),
          display: "flex",
          gap: vx(32),
          alignItems: "center",
        }}
      >
        {/* Back — cyclic */}
        <button
          onClick={(e) => { e.stopPropagation(); setCurrentCard(c => (c - 1 + TOTAL_CARDS) % TOTAL_CARDS); }}
          style={{ width: vs(40), height: vs(40) }}
          className="group flex items-center justify-center rounded-full hover:bg-[#036ef2] transition-[background-color,color,box-shadow] duration-[240ms] ease hover:shadow-[0_8px_24px_0_rgba(5,28,117,0.16),0_2px_4px_0_rgba(5,28,117,0.24)] cursor-pointer"
        >
          <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none">
            <mask id="s03-back-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#s03-back-mask)">
              <path d={svgPaths.p90d8b80} className="fill-[#036EF2] group-hover:fill-white transition-colors" />
            </g>
          </svg>
        </button>

        {/* Forward — cyclic */}
        <button
          onClick={(e) => { e.stopPropagation(); setCurrentCard(c => (c + 1) % TOTAL_CARDS); }}
          style={{ width: vs(40), height: vs(40) }}
          className="group flex items-center justify-center rounded-full hover:bg-[#036ef2] transition-[background-color,color,box-shadow] duration-[240ms] ease hover:shadow-[0_8px_24px_0_rgba(5,28,117,0.16),0_2px_4px_0_rgba(5,28,117,0.24)] cursor-pointer"
        >
          <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none">
            <mask id="s03-fwd-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#s03-fwd-mask)">
              <path d={svgPaths.p23cbb200} className="fill-[#036EF2] group-hover:fill-white transition-colors" />
            </g>
          </svg>
        </button>
      </div>

      {/* ── Note ── */}
      <motion.p
        initial={{ opacity: 0, y: vy(12) }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(2)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(860),
          fontSize: vs(26),
          lineHeight: 1.3,
        }}
        className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d] whitespace-nowrap"
      >
        A área entra tarde porque não tem uma porta de entrada formalizada.
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
        {/* Page indicator */}
        <div style={{ display: "flex", gap: vx(20), alignItems: "center" }}>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
          >
            03
          </p>
          <div style={{ width: vx(24), height: vy(2) }} className="overflow-clip relative shrink-0">
            <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" />
          </div>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal" }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#6e7587] uppercase whitespace-nowrap"
          >
            PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
          </p>
        </div>

        {/* Logo */}
        <div
          style={{
            width: vs(120),
            height: vs(56),
            opacity: 0.9,
            overflow: "visible",
            position: "relative",
            flexShrink: 0,
          }}
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
    </motion.div>
  );
}
