import { motion } from "motion/react";
import { createSlideMetrics } from "../scaling";
import svgPaths from "../../imports/05AlemDoDesenhoDeTelas/svg-d0t3u4q1u6";
import { imgGroup } from "../../imports/05AlemDoDesenhoDeTelas/svg-s8nfu";
import iconPaths from "../../imports/MainContainer/svg-xc3vwdt1gg";

interface Props {
  scaleX: number;
  scaleY: number;
  onPrev: () => void;
  onNext: () => void;
}

const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    num: "01",
    iconKey: "p22ba1e00",
    title: "Pesquisa e Discovery",
    items: [
      "Entrevistas com utilizadores e stakeholders",
      "Personas e jornadas",
      "Benchmarks e análise de contexto",
    ],
  },
  {
    num: "02",
    iconKey: "p1c0e6c00",
    title: "Design de Interface e Interacção",
    items: [
      "Wireframes, fluxos e protótipos",
      "Design de alta fidelidade",
      "Especificação técnica para DEV",
    ],
  },
  {
    num: "03",
    iconKey: "p37c7f480",
    title: "Design de Serviço",
    items: [
      "Mapeamento de processos",
      "Service blueprints",
      "Desenho de jornadas operacionais",
    ],
  },
  {
    num: "04",
    iconKey: "p132ccd80",
    title: "Design System",
    items: [
      "Tokens, componentes e padrões",
      "Documentação e governança",
      "Integração com desenvolvimento",
    ],
  },
  {
    num: "05",
    iconKey: "p1fba0a80",
    title: "Acessibilidade e Compliance",
    items: [
      "Auditoria WCAG 2.2",
      "Documentação de boas práticas",
      "Testes com utilizadores diversos",
    ],
  },
  {
    num: "06",
    iconKey: "p37567ac0",
    title: "Validação e Testes",
    items: [
      "Testes de usabilidade",
      "Análise de dados qualitativos",
      "Iteração baseada em evidência",
    ],
  },
];

export function Slide05({ scaleX, scaleY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  // Card column width: 3 × 560 + 2 × 20 = 1720 (MainContainer)
  const cardW = vx(560);
  const cardGap = vx(20);

  return (
    <motion.div
      key="slide-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 bg-white overflow-hidden"
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: vy(-24) }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.08)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(96),
          width: vx(1672),
          display: "flex",
          flexDirection: "column",
          gap: vy(24),
        }}
      >
        {/* HeaderContainer: label + title — gap 16px (design spec) */}
        <div style={{ display: "flex", flexDirection: "column", gap: vy(16) }}>
          <p
            style={{ fontSize: vs(16), letterSpacing: vs(2) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase leading-normal"
          >
            Mudança de paradigma
          </p>
          {/* leading-[0] on wrapper + leading-none on each line = tight stacking */}
          <div
            style={{ fontSize: vs(80), letterSpacing: vs(-1.5), lineHeight: 0 }}
            className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
          >
            <p style={{ lineHeight: 1, marginBottom: 0 }}>Experience Engineering</p>
            <p style={{ lineHeight: 1 }}>muito além do desenho de ecrãs</p>
          </div>
        </div>

        {/* Subtitle — inside the same flex-col, 24px below the title block */}
        <p
          style={{ fontSize: vs(28), lineHeight: 1.5, width: vx(1536) }}
          className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
        >
          A área deve assegurar que as soluções atendam a problemas reais, funcionem adequadamente em
          cada contexto de uso e cumpram os requisitos de negócio. Para isso, existem seis frentes nas
          quais devemos atuar com protagonismo:
        </p>
      </motion.div>

      {/* ── Cards grid ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(455),
          width: vx(1720),
          display: "flex",
          flexWrap: "wrap",
          gap: `${vy(20)}px ${cardGap}px`,
          alignItems: "flex-start",
        }}
      >
        {CARDS.map((card, i) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: vy(32) }}
            animate={{ opacity: 1, y: 0 }}
            transition={fade(0.18 + i * 0.08)}
            style={{
              width: cardW,
              boxSizing: "border-box",
              backgroundColor: "#fff",
              border: `${vs(2)}px solid #036ef2`,
              borderRadius: vs(32),
              padding: `${vy(24)}px ${vx(32)}px`,
              display: "flex",
              flexDirection: "column",
              gap: vy(20),
            }}
          >
            {/* Card header — Figma 52:797 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: vx(12),
                width: "100%",
              }}
              className="font-['Bronkoh-Heavy',sans-serif] not-italic"
            >
              <div
                style={{
                  width: vs(32),
                  height: vs(32),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="shrink-0"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d={iconPaths[card.iconKey as keyof typeof iconPaths]}
                    fill="#036ef2"
                  />
                </svg>
              </div>
              <p
                style={{
                  margin: 0,
                  flex: "1 0 0",
                  minWidth: 0,
                  fontSize: vs(24),
                  lineHeight: `${vs(32)}px`,
                  color: "#04165d",
                }}
              >
                {card.title}
              </p>
            </div>

            {/* Card items — Figma 52:800 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: vy(12),
                paddingLeft: vx(4),
                width: "100%",
              }}
            >
              {card.items.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: vx(12) }}
                >
                  {/* Bullet square */}
                  <div
                    style={{
                      width: vs(12),
                      height: vs(12),
                      backgroundColor: "#036ef2",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      flex: "1 0 0",
                      minWidth: 0,
                      fontSize: vs(18),
                      lineHeight: `${vs(24)}px`,
                    }}
                    className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={fade(0.55)}
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
        <div style={{ display: "flex", alignItems: "center", gap: vx(20) }}>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
          >
            05
          </p>
          {/* Spacer line */}
          <div style={{ width: vx(24), height: vy(2) }} className="overflow-clip relative shrink-0">
            <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" />
          </div>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#6e7587] uppercase whitespace-nowrap"
          >
            PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
          </p>
        </div>

        {/* TIS Logo */}
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
          {/* Mask group */}
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: vs(120),
              height: vs(54),
              maskImage: `url('${imgGroup}')`,
              WebkitMaskImage: `url('${imgGroup}')`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "0px 0px",
              WebkitMaskPosition: "0px 0px",
              maskSize: `${vs(236)}px ${vs(105.223)}px`,
              WebkitMaskSize: `${vs(236)}px ${vs(105.223)}px`,
            }}
          >
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
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
