import { useRef, useState, type WheelEvent } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { createSlideMetrics } from "../scaling";
import { imgGroup } from "../../imports/05AlemDoDesenhoDeTelas/svg-s8nfu";
import svgPaths from "../../imports/05AlemDoDesenhoDeTelas/svg-d0t3u4q1u6";
import categorySvg from "../../assets/slide13/category-search.svg";
import calendarSvg from "../../assets/slide13/calendar-month.svg";
import groupsSvg from "../../assets/slide13/groups.svg";
import packageSvg from "../../assets/slide13/package.svg";

interface Props {
  scaleX: number;
  scaleY: number;
}

// ─── Paleta ───────────────────────────────────────────────────────────────────
const NAVY   = "#04165d";
const BLUE   = "#036ef2";
const INK    = "#2f3237";
const ORANGE = "#b25d00";
const GREEN  = "#308830";

// ─── Dados ───────────────────────────────────────────────────────────────────
type TagColor = "blue" | "orange" | "green";

interface Rito {
  name: string;
  tagColor: TagColor;
  whens: Array<{ label: string; color: TagColor }>;
  who: string;
  output: string;
}

const RITOS: Rito[] = [
  {
    name: "Triagem de UX",
    tagColor: "orange",
    whens: [{ label: "Sob demanda", color: "orange" }],
    who: "XP Engineering, Produto/solicitante e Desenvolvimento quando houver risco técnico.",
    output: "Tipo de atuação, prioridade, esforço, risco e próximos passos.",
  },
  {
    name: "Planeamento de UX",
    tagColor: "blue",
    whens: [{ label: "Início Projecto/Sprint", color: "blue" }],
    who: "XP Engineering e Produto se necessário.",
    output: "Itens priorizados, dependências, discovery/design necessário e riscos.",
  },
  {
    name: "Checkpoints",
    tagColor: "blue",
    whens: [{ label: "2x por semana", color: "blue" }],
    who: "XP Engineering.",
    output: "Bloqueios resolvidos, prioridades ajustadas e próximos passos.",
  },
  {
    name: "Design Critique",
    tagColor: "blue",
    whens: [{ label: "Semanal", color: "blue" }],
    who: "XP Engineering e convidados conforme tema: Produto, Desenvolvimento, QA ou stakeholders.",
    output: "Decisões de design, ajustes priorizados e riscos identificados.",
  },
  {
    name: "DS Governance",
    tagColor: "blue",
    whens: [
      { label: "Semanal", color: "blue" },
      { label: "Sob demanda", color: "orange" },
    ],
    who: "XP Engineering, Desenvolvimento DS e Produto quando houver impacto no roadmap.",
    output: "Componentes, padrões, exceções, dívidas técnicas e backlog do Design System.",
  },
  {
    name: "Design:Dev Sync",
    tagColor: "orange",
    whens: [{ label: "Sob demanda", color: "orange" }],
    who: "XP Engineering, Desenvolvimento e Produto quando houver trade-off funcional.",
    output: "Viabilidade alinhada, estados definidos, critérios de aceite e handoff claro.",
  },
  {
    name: "Experience Review",
    tagColor: "blue",
    whens: [{ label: "Fim de Sprint", color: "blue" }],
    who: "XP Engineering, Produto, Desenvolvimento e QA.",
    output: "Ajustes de experiência, acessibilidade, comportamento e fidelidade ao design.",
  },
  {
    name: "Insights Review",
    tagColor: "orange",
    whens: [{ label: "Sob demanda", color: "orange" }],
    who: "XP Engineering, Produto, Desenvolvimento (se necessário), Gestão e áreas-chave conforme pauta.",
    output: "Achados sintetizados, evidências compartilhadas, recomendações e implicações direcionadas.",
  },
  {
    name: "Ops Review",
    tagColor: "blue",
    whens: [{ label: "Trimestral", color: "blue" }],
    who: "XP Engineering, Produto, Desenvolvimento (se necessário), Gestão e áreas-chave conforme pauta.",
    output: "Gargalos identificados, métricas analisadas, decisões de melhoria e responsáveis definidos.",
  },
  {
    name: "Canal DS",
    tagColor: "green",
    whens: [{ label: "Assíncrono", color: "green" }],
    who: "XP Engineering, Desenvolvimento, Produto e QA.",
    output: "Dúvidas respondidas, orientações registradas, padrões esclarecidos e conhecimento compartilhado com o time.",
  },
  {
    name: "Suporte",
    tagColor: "green",
    whens: [{ label: "Assíncrono", color: "green" }],
    who: "XP Engineering, Desenvolvimento, Produto e QA.",
    output: "Solicitações qualificadas, problemas recorrentes identificados e itens candidatos ao backlog.",
  },
];

// ─── Paletas por cor ──────────────────────────────────────────────────────────
const ROW_BG: Record<TagColor, string> = {
  blue:   "rgba(3,110,242,0.06)",
  orange: "#fff4e5",
  green:  "#edf7ed",
};
const ROW_BORDER: Record<TagColor, string> = {
  blue:   BLUE,
  orange: ORANGE,
  green:  GREEN,
};
const TAG_BG: Record<TagColor, string> = {
  blue:   BLUE,
  orange: ORANGE,
  green:  GREEN,
};
const WHEN_BG: Record<TagColor, string> = {
  blue:   "rgba(3,110,242,0.12)",
  orange: "rgba(226,120,5,0.24)",
  green:  "rgba(48,136,48,0.16)",
};
const WHEN_COLOR: Record<TagColor, string> = {
  blue:   "#0052b8",
  orange: "#703b00",
  green:  "#226222",
};

// ─── Dados das legendas ───────────────────────────────────────────────────────
const LEGEND_CARDS = [
  {
    color: "blue" as TagColor,
    bg: "#f0f6fe",
    border: "#a1c3e6",
    titleColor: "#012e65",
    title: "Ritos recorrentes",
    desc: "Cadência fixa para alinhamento, crítica, governança e leitura da operação.",
  },
  {
    color: "orange" as TagColor,
    bg: "#fff4e5",
    border: ORANGE,
    titleColor: "#662900",
    title: "Gatilhos por demanda",
    desc: "Acontecem quando há nova demanda, handoff, risco técnico ou entrega em desenvolvimento.",
  },
  {
    color: "green" as TagColor,
    bg: "#e2f3e2",
    border: GREEN,
    titleColor: "#1b4b1b",
    title: "Canais contínuos",
    desc: "Suporte assíncrono para dúvidas, solicitações e registo de aprendizados.",
  },
];

// ─── Constantes de layout (px no frame 1920×1080) ────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;
const ANIM = { duration: 0.38, ease: EASE };

// Estado recolhido (header + footer visíveis)
const TABLE_TOP_REST  = 317;
const TABLE_HDR_H     =  56;
const CLIP_BTM_REST   = 750; // limite visível antes do branco do gradiente

// Estado expandido (ao rolar — header + footer ocultos)
const TABLE_TOP_EXP   =   8;
const CLIP_BTM_EXP    = 960; // quase fundo do slide

// Derivados
const CLIP_TOP_REST = TABLE_TOP_REST + TABLE_HDR_H;  // 373
const CLIP_H_REST   = CLIP_BTM_REST  - CLIP_TOP_REST; // 377
const CLIP_TOP_EXP  = TABLE_TOP_EXP  + TABLE_HDR_H;  //  64
const CLIP_H_EXP    = CLIP_BTM_EXP   - CLIP_TOP_EXP; // 896

export function Slide13RitosDeUX({ scaleX, scaleY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);
  const contentRef = useRef<HTMLDivElement>(null);

  // ── Scroll suave via spring ────────────────────────────────────────────────
  const rawScroll    = useRef(0);
  const isScrolledRef = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const springScroll = useSpring(0, { damping: 28, stiffness: 280, mass: 0.6 });
  const translateY   = useTransform(springScroll, (v) => `${-v}px`);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const contentH = contentRef.current?.scrollHeight ?? 0;
    // viewport muda conforme o estado de expansão
    const clipH = isScrolledRef.current ? vy(CLIP_H_EXP) : vy(CLIP_H_REST);
    const maxS  = Math.max(0, contentH - clipH);

    rawScroll.current = Math.max(0, Math.min(maxS, rawScroll.current + e.deltaY * 0.7));
    springScroll.set(rawScroll.current);

    const nowScrolled = rawScroll.current > 2;
    if (nowScrolled !== isScrolledRef.current) {
      isScrolledRef.current = nowScrolled;
      setIsScrolled(nowScrolled);
    }
  };

  const fade = (delay: number) => ({ duration: 0.45, delay, ease: EASE });

  return (
    <motion.div
      key="slide-13"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 overflow-hidden bg-white"
      onWheel={handleWheel}
    >
      {/* ── Header (some quando scrollY === 0) ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: vy(-20) }}
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? vy(-260) : 0 }}
        transition={isScrolled ? ANIM : fade(0.06)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(96),
          width: vx(1680),
          display: "flex",
          flexDirection: "column",
          gap: vy(16),
          pointerEvents: isScrolled ? "none" : "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: vy(16) }}>
          <p
            style={{ fontSize: vs(16), letterSpacing: vs(2) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#036ef2] uppercase"
          >
            cadência e alinhamento
          </p>
          <p
            style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 1 }}
            className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
          >
            Ritos de UX
          </p>
        </div>
        <p
          style={{ fontSize: vs(28), lineHeight: 1.5 }}
          className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
        >
          Cadência de trabalho para decisão, qualidade, alinhamento e melhoria contínua.
        </p>
      </motion.div>

      {/* ── Cabeçalho fixo da tabela (reposiciona ao expandir) ──────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          top: isScrolled ? vy(TABLE_TOP_EXP) : vy(TABLE_TOP_REST),
        }}
        transition={fade(0.12)}
        style={{
          position: "absolute",
          left: vx(120),
          width: vx(1680),
          display: "flex",
          gap: vx(48),
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: vs(999),
          paddingLeft: vx(16),
          paddingRight: vx(16),
          paddingTop: vy(12),
          paddingBottom: vy(12),
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        {[
          { icon: categorySvg, label: "Rito/Canal",      width: vx(220) },
          { icon: calendarSvg, label: "Quando",          width: vx(260) },
          { icon: groupsSvg,   label: "Quem participa",  width: undefined },
          { icon: packageSvg,  label: "Saída esperada",  width: undefined },
        ].map(({ icon, label, width }) => (
          <div
            key={label}
            style={{
              display: "flex",
              gap: vx(8),
              alignItems: "center",
              width: width ?? undefined,
              flex: width ? undefined : "1 0 0",
              minWidth: width ? undefined : 0,
              overflow: "hidden",
            }}
          >
            <img src={icon} alt="" aria-hidden style={{ width: vs(24), height: vs(24), flexShrink: 0 }} />
            <p
              style={{ fontSize: vs(20), lineHeight: 1 }}
              className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d] whitespace-nowrap"
            >
              {label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ── Miolo rolável (expande ao ocultar header/footer) ─────────────────── */}
      <motion.div
        animate={{
          top:    isScrolled ? vy(CLIP_TOP_EXP)  : vy(CLIP_TOP_REST),
          height: isScrolled ? vy(CLIP_H_EXP)    : vy(CLIP_H_REST),
        }}
        transition={ANIM}
        style={{
          position: "absolute",
          left: vx(120),
          width: vx(1680),
          overflow: "hidden",
        }}
      >
        <motion.div ref={contentRef} style={{ y: translateY }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: vy(8),
              paddingBottom: vy(8),
            }}
          >
            {RITOS.map((rito, i) => (
              <motion.div
                key={rito.name}
                initial={{ opacity: 0, y: vy(16) }}
                animate={{ opacity: 1, y: 0 }}
                transition={fade(0.14 + i * 0.03)}
                style={{
                  display: "flex",
                  gap: vx(48),
                  alignItems: "center",
                  backgroundColor: ROW_BG[rito.tagColor],
                  border: `${vs(1)}px solid ${ROW_BORDER[rito.tagColor]}`,
                  borderRadius: vs(999),
                  paddingLeft: vx(16),
                  paddingRight: vx(16),
                  paddingTop: vy(16),
                  paddingBottom: vy(16),
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                {/* Coluna: Rito/Canal */}
                <div style={{ width: vx(220), flexShrink: 0, overflow: "hidden" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: TAG_BG[rito.tagColor],
                      borderRadius: vs(999),
                      paddingLeft: vx(20),
                      paddingRight: vx(20),
                      paddingTop: vy(16),
                      paddingBottom: vy(16),
                    }}
                  >
                    <p
                      style={{ fontSize: vs(20), lineHeight: 1, letterSpacing: vs(-0.25) }}
                      className="font-['Bronkoh-Heavy',sans-serif] not-italic text-white whitespace-nowrap"
                    >
                      {rito.name}
                    </p>
                  </div>
                </div>

                {/* Coluna: Quando */}
                <div style={{ width: vx(260), flexShrink: 0, display: "flex", gap: vx(4), flexWrap: "wrap", alignItems: "center" }}>
                  {rito.whens.map((w) => (
                    <div
                      key={w.label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: WHEN_BG[w.color],
                        borderRadius: vs(999),
                        paddingLeft: vx(16),
                        paddingRight: vx(16),
                        paddingTop: vy(12),
                        paddingBottom: vy(12),
                      }}
                    >
                    <p
                      style={{
                        fontSize: vs(16),
                        lineHeight: 1,
                        letterSpacing: vs(-0.25),
                        color: WHEN_COLOR[w.color],
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 800,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {w.label}
                    </p>
                    </div>
                  ))}
                </div>

                {/* Coluna: Quem participa */}
                <div style={{ flex: "1 0 0", minWidth: 0, paddingRight: vx(24) }}>
                  <p
                    style={{ fontSize: vs(16), lineHeight: `${vs(24)}px`, letterSpacing: vs(0.12) }}
                    className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                  >
                    {rito.who}
                  </p>
                </div>

                {/* Coluna: Saída esperada */}
                <div style={{ flex: "1 0 0", minWidth: 0, paddingRight: vx(24) }}>
                  <p
                    style={{ fontSize: vs(16), lineHeight: `${vs(24)}px`, letterSpacing: vs(0.12) }}
                    className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
                  >
                    {rito.output}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Gradiente inferior + cartões de legenda (some ao rolar) ──────────── */}
      <motion.div
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? vy(80) : 0 }}
        transition={ANIM}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: vx(1920),
          height: vy(400),
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 24.75%)",
          overflow: "hidden",
          pointerEvents: isScrolled ? "none" : "auto",
        }}
      >
        {/* Cartões de legenda */}
        <motion.div
          initial={{ opacity: 0, y: vy(12) }}
          animate={{ opacity: 1, y: 0 }}
          transition={fade(0.45)}
          style={{
            position: "absolute",
            left: vx(120),
            top: vy(110),
            width: vx(1680),
            display: "flex",
            gap: vx(16),
            pointerEvents: "auto",
          }}
        >
          {LEGEND_CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                flex: "1 0 0",
                minWidth: 0,
                backgroundColor: card.bg,
                border: `${vs(1)}px solid ${card.border}`,
                borderRadius: vs(20),
                padding: vs(20),
                display: "flex",
                flexDirection: "column",
                gap: vy(8),
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  fontSize: vs(20),
                  lineHeight: 1,
                  color: card.titleColor,
                  fontFamily: "'Bronkoh-Heavy', sans-serif",
                  fontStyle: "normal",
                }}
              >
                {card.title}
              </p>
              <p
                style={{ fontSize: vs(16), lineHeight: `${vs(24)}px`, letterSpacing: vs(0.12) }}
                className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
              >
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Footer (some ao rolar) ───────────────────────────────────────────── */}
      <motion.div
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? vy(60) : 0 }}
        transition={ANIM}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(946),
          width: vx(1680),
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          pointerEvents: isScrolled ? "none" : "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: vx(20) }}>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#036ef2] uppercase whitespace-nowrap"
          >
            13
          </p>
          <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
            <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" />
          </div>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic leading-normal text-[#6e7587] uppercase whitespace-nowrap"
          >
            PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
          </p>
        </div>

        {/* Logo TIS */}
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
      </motion.div>
    </motion.div>
  );
}
