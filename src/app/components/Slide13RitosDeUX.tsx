import { useEffect, useRef, useState, type CSSProperties, type WheelEvent } from "react";
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

// ─── Layout Figma 1920×1080 (52:1034 inicial · 797:733 rolado) ───────────────
const EASE = [0.22, 1, 0.36, 1] as const;
const ANIM = { duration: 0.55, ease: EASE };
const EXPAND_LOCK_MS = Math.round(ANIM.duration * 1000);

const DESIGN_HEIGHT = 1080;

const TABLE_LEFT      = 120;
const TABLE_WIDTH     = 1680;
const TABLE_TOP_REST  = 317;
const TABLE_TOP_EXP   = 0;

const TABLE_HDR_REST_H = 48; // py 12 + linha ~24
const LIST_GAP         = 8;
const STICKY_HDR_H     = 80; // py 28 + linha ~24 + py 28 (797:735)
const ROWS_GAP_HDR     = 24; // folga abaixo do título sticky (não igual à altura do header)
const ROWS_PT_REST     = TABLE_HDR_REST_H + LIST_GAP; // 56
const ROWS_PT_EXP      = STICKY_HDR_H + ROWS_GAP_HDR; // 104

const OVERLAY_H_REST = 314;
const OVERLAY_H_EXP  = 180;
const LEGEND_TOP     = 32;

const HEADER_TOP_REST = 96;
const HEADER_TOP_EXP  = -181;
const FOOTER_TOP_REST = 946;
const FOOTER_TOP_EXP  = 1080;

const CLIP_TOP_REST = TABLE_TOP_REST + TABLE_HDR_REST_H + LIST_GAP; // 373
const CLIP_H_REST   = DESIGN_HEIGHT - OVERLAY_H_REST - CLIP_TOP_REST; // 393
const CLIP_TOP_EXP  = 0;
const CLIP_H_EXP    = DESIGN_HEIGHT - OVERLAY_H_EXP; // 900

const COL_HEADER_BLUR: CSSProperties = {
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  backgroundColor: "rgba(255,255,255,0.8)",
};

const OVERLAY_GRADIENT =
  "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.9) 46.97%)";

// ─── Subcomponentes ───────────────────────────────────────────────────────────
function TableColumnHeader({
  vx,
  vy,
  vs,
  sticky,
}: {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
  sticky: boolean;
}) {
  const cols = [
    { icon: categorySvg, label: "Rito/Canal",     width: vx(220) },
    { icon: calendarSvg, label: "Quando",         width: vx(260) },
    { icon: groupsSvg,   label: "Quem participa", width: undefined as number | undefined },
    { icon: packageSvg,  label: "Saída esperada", width: undefined as number | undefined },
  ];

  return (
    <div
      style={{
        ...COL_HEADER_BLUR,
        display: "flex",
        gap: vx(48),
        alignItems: "center",
        boxSizing: "border-box",
        width: sticky ? vx(1920) : "100%",
        paddingLeft: sticky ? vx(136) : vx(16),
        paddingRight: sticky ? vx(136) : vx(16),
        paddingTop: vy(sticky ? 28 : 12),
        paddingBottom: vy(sticky ? 28 : 12),
        position: "absolute",
        top: 0,
        left: sticky ? vx(-120) : 0,
        zIndex: 25,
      }}
    >
      {cols.map(({ icon, label, width }) => (
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
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontWeight: 900,
              fontStyle: "normal",
              fontSize: Math.round(vs(20)),
              lineHeight: `${Math.round(vs(20))}px`,
              color: NAVY,
              whiteSpace: "nowrap",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

function RitoRows({
  vx,
  vy,
  vs,
  fade,
}: {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
  fade: (delay: number) => { duration: number; delay: number; ease: readonly [number, number, number, number] };
}) {
  return (
    <>
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
                style={{
                  margin: 0,
                  fontFamily: "'Bronkoh-Heavy', sans-serif",
                  fontWeight: 900,
                  fontStyle: "normal",
                  fontSize: Math.round(vs(20)),
                  lineHeight: `${Math.round(vs(20))}px`,
                  letterSpacing: Math.round(vs(-0.25) * 10) / 10,
                  color: "#fff",
                  whiteSpace: "nowrap",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {rito.name}
              </p>
            </div>
          </div>

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
                    margin: 0,
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    fontStyle: "normal",
                    fontSize: Math.round(vs(16)),
                    lineHeight: `${Math.round(vs(16))}px`,
                    letterSpacing: Math.round(vs(-0.25) * 10) / 10,
                    color: WHEN_COLOR[w.color],
                    whiteSpace: "nowrap",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {w.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ flex: "1 0 0", minWidth: 0, paddingRight: vx(24) }}>
            <p
              style={{ fontSize: vs(16), lineHeight: `${vs(24)}px`, letterSpacing: vs(0.12) }}
              className="font-['Manrope',sans-serif] font-normal text-[#2f3237]"
            >
              {rito.who}
            </p>
          </div>

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
    </>
  );
}

export function Slide13RitosDeUX({ scaleX, scaleY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);
  const contentRef = useRef<HTMLDivElement>(null);

  const rawScroll = useRef(0);
  const isExpandedRef = useRef(false);
  const expandLockRef = useRef(false);
  const expandTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const springScroll = useSpring(0, { damping: 32, stiffness: 220, mass: 0.8 });
  const translateY = useTransform(springScroll, (v) => `${-v}px`);

  useEffect(() => {
    return () => {
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
    };
  }, []);

  const startExpandLock = () => {
    expandLockRef.current = true;
    rawScroll.current = 0;
    springScroll.set(0);
    if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
    expandTimerRef.current = setTimeout(() => {
      expandLockRef.current = false;
      expandTimerRef.current = null;
    }, EXPAND_LOCK_MS);
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const delta = e.deltaY * 0.7;

    // Recolher layout ao puxar para cima com a lista no topo
    if (isExpandedRef.current && delta < 0 && rawScroll.current <= 0) {
      if (expandTimerRef.current) {
        clearTimeout(expandTimerRef.current);
        expandTimerRef.current = null;
      }
      expandLockRef.current = false;
      isExpandedRef.current = false;
      setIsExpanded(false);
      return;
    }

    // Primeira rolagem: só expande o layout; conteúdo espera a animação
    if (!isExpandedRef.current && delta > 0) {
      isExpandedRef.current = true;
      setIsExpanded(true);
      startExpandLock();
      return;
    }

    if (!isExpandedRef.current || expandLockRef.current) return;

    const contentH = contentRef.current?.scrollHeight ?? 0;
    const clipH = vy(CLIP_H_EXP);
    const maxS = Math.max(0, contentH - clipH);

    rawScroll.current = Math.max(0, Math.min(maxS, rawScroll.current + delta));
    springScroll.set(rawScroll.current);
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
      {/* Header da página (52:1034 · some ao rolar → 797:733 top -181) */}
      <motion.div
        initial={{ opacity: 0, y: vy(-20) }}
        animate={{
          opacity: isExpanded ? 0 : 1,
          top: vy(isExpanded ? HEADER_TOP_EXP : HEADER_TOP_REST),
        }}
        transition={isExpanded ? ANIM : fade(0.06)}
        style={{
          position: "absolute",
          left: vx(TABLE_LEFT),
          width: vx(TABLE_WIDTH),
          display: "flex",
          flexDirection: "column",
          gap: vy(16),
          pointerEvents: isExpanded ? "none" : "auto",
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

      {/* Área da tabela: top 317 → 0 (52:1034 / 797:734) */}
      <motion.div
        animate={{ top: vy(isExpanded ? TABLE_TOP_EXP : TABLE_TOP_REST) }}
        transition={ANIM}
        style={{
          position: "absolute",
          left: vx(TABLE_LEFT),
          width: vx(TABLE_WIDTH),
        }}
      >
        {/* Miolo rolável — overflow visible (blur do cabeçalho precisa do conteúdo atrás) */}
        <motion.div
          animate={{ height: vy(isExpanded ? CLIP_H_EXP : CLIP_H_REST) }}
          transition={ANIM}
          style={{ position: "relative", overflow: "visible" }}
        >
          <TableColumnHeader vx={vx} vy={vy} vs={vs} sticky={isExpanded} />
          <motion.div ref={contentRef} style={{ y: translateY }}>
            <motion.div
              animate={{ paddingTop: vy(isExpanded ? ROWS_PT_EXP : ROWS_PT_REST) }}
              transition={ANIM}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: vy(LIST_GAP),
                paddingBottom: vy(24),
              }}
            >
              <RitoRows vx={vx} vy={vy} vs={vs} fade={fade} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Overlay de legenda — fixo no fundo, 314px → 180px (775:891 / 797:885) */}
      <motion.div
        animate={{ height: vy(isExpanded ? OVERLAY_H_EXP : OVERLAY_H_REST) }}
        transition={ANIM}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: vx(1920),
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          background: OVERLAY_GRADIENT,
          overflow: "hidden",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: vy(12) }}
          animate={{ opacity: 1, y: 0 }}
          transition={fade(0.45)}
          style={{
            position: "absolute",
            left: vx(TABLE_LEFT),
            top: vy(LEGEND_TOP),
            width: vx(TABLE_WIDTH),
            display: "flex",
            gap: vx(16),
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
                  margin: 0,
                  fontFamily: "'Bronkoh-Heavy', sans-serif",
                  fontWeight: 900,
                  fontStyle: "normal",
                  fontSize: Math.round(vs(20)),
                  lineHeight: `${Math.round(vs(20))}px`,
                  color: card.titleColor,
                  WebkitFontSmoothing: "antialiased",
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

      {/* Footer (946 → 1080 fora da tela ao rolar) */}
      <motion.div
        animate={{
          opacity: isExpanded ? 0 : 1,
          top: vy(isExpanded ? FOOTER_TOP_EXP : FOOTER_TOP_REST),
        }}
        transition={ANIM}
        style={{
          position: "absolute",
          left: vx(TABLE_LEFT),
          width: vx(TABLE_WIDTH),
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          pointerEvents: isExpanded ? "none" : "auto",
          zIndex: 15,
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
