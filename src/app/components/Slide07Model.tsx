import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode, type WheelEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";
import coreArrow from "../../assets/slide07/core-arrow.svg";
import coreConnector from "../../assets/slide07/core-connector.svg";
import coreRenew from "../../assets/slide07/core-renew.svg";
import earlyArrowDiagonalDown from "../../assets/slide07/early-arrow-diagonal-down.svg";
import earlyArrowDiagonalUp from "../../assets/slide07/early-arrow-diagonal-up.svg";
import earlyArrowLong from "../../assets/slide07/early-arrow-long.svg";
import earlyArrowSmall from "../../assets/slide07/early-arrow-small.svg";
import earlyQuestionMark from "../../assets/slide07/early-question-mark.svg";
import earlyRenewA from "../../assets/slide07/early-renew-a.svg";
import earlyRenewB from "../../assets/slide07/early-renew-b.svg";
import growthRenew from "../../assets/slide07/growth-renew.svg";
import { cycleVerticalPage, resolveVerticalPage } from "../constants/verticalPageNav";
import { createSlideMetrics } from "../scaling";
import {
  INTERACTIVE_HOVER_BOX_SHADOW,
  INTERACTIVE_HOVER_TRANSITION,
} from "../constants/interactiveShadow";

interface Slide07ModelProps {
  scaleX: number;
  scaleY: number;
}

type Metrics = {
  vx: (n: number) => number;
  vy: (n: number) => number;
  vs: (n: number) => number;
};

const BLUE = "#036ef2";
const NAVY = "#04165d";
const INK = "#2f3237";
const MUTED = "#6e7587";
const PALE_BLUE = "rgba(3,110,242,0.06)";
const LIGHT_BLUE = "rgba(3,110,242,0.12)";
const MEDIUM_BLUE = "rgba(3,110,242,0.48)";
const STROKE_BLUE = "rgba(43,118,193,0.4)";
const EASE = [0.22, 1, 0.36, 1] as const;
const FOOTER_TEXT = "PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING";
const AUTORENEW_PATH =
  "M35.3 12.65C32.4 9.75 28.4 8 24 8C15.15 8 8 15.15 8 24C8 32.85 15.15 40 24 40C31.45 40 37.7 34.9 39.45 28H35.25C33.6 32.65 29.15 36 24 36C17.35 36 12 30.65 12 24C12 17.35 17.35 12 24 12C27.3 12 30.25 13.35 32.4 15.5L26 22H40V8L35.3 12.65Z";
const HORIZONTAL_ARROW_LEFT_PATH = "M15 22L5 12L15 2L16.775 3.775L8.55 12L16.775 20.225L15 22Z";
const HORIZONTAL_ARROW_RIGHT_PATH = "M9.025 22L7.25 20.225L15.475 12L7.25 3.775L9.025 2L19.025 12L9.025 22Z";
const NAV_ARROW_UP_PATH = "M2 16L12 6L22 16L20.225 17.775L12 9.55L3.775 17.775L2 16Z";
const NAV_ARROW_DOWN_PATH = "M2 8.025L3.775 6.25L12 14.475L20.225 6.25L22 8.025L12 18.025L2 8.025Z";

const classificationPages = [
  {
    title: "1. Quick win (Muita certeza + Baixo risco)",
    body: "Ajuste visual rápido ou alteração simples no fluxo com grande potencial de sucesso, que já seja uma necessidade comprovada e também de fácil reversão, se necessário.",
  },
  {
    title: "2. Melhoria (Alguma certeza + Risco médio)",
    body: "Possui um maior risco por se tratar de mudança em funcionalidade existente, sendo necessário alinhamento com os stakeholders e análise de métricas. Neste caso, a execução de desk research e benchmark podem ajudar na exploração de ideias, e também teste A/B (idealmente), num ciclo mais curto.",
  },
  {
    title: "3. Nova funcionalidade (Pouca certeza + Risco alto)",
    body: "Neste caso é importante aumentar o grau de certeza, pois o risco de criar algo que pode não ser utilizado é real, então é interessante um discovery um pouco mais estruturado, com pesquisa, benchmark, entrevistas com os utilizadores, definição de fluxo, ideação, testes de usabilidade e handoff mais robusto.",
  },
  {
    title: "4. Novo produto (Escopo estratégico ou incerto)",
    body: "A construção de um novo produto envolve um risco altamente elevado aliado a um mar de incertezas, é importante ter a máxima preocupação em focar nos problemas certos para alcançar o MVP necessário que dará base para que se possa escalar. Para isso, Discovery e Pesquisa são obrigatórios, com o utilizador como integrante ativo e todas as áreas do time envolvidas em cada etapa.",
  },
];

const maturityCards = [
  {
    title: "1. Apostas (Early stage)",
    body: "Produtos com alta incerteza. O foco correcto é aprendizagem validada, protótipos, testes com clientes e decisão rápida: continuar, ajustar ou despriorizar.",
    variant: "early" as const,
  },
  {
    title: "2. Produtos em escala (Growth)",
    body: "Produtos já validados parcialmente, com base activa e sinais de uso. O foco passa a ser escalar, medir adopção, retenção, satisfação, qualidade e operação em produção.",
    variant: "growth" as const,
  },
  {
    title: "3. Produtos maduros (Core)",
    body: "Produtos estabelecidos. O foco é optimização contínua, retenção, eficiência, suporte, evolução incremental e decisões de refresh, consolidação ou eventual descontinuação.",
    variant: "core" as const,
  },
];

const matrixRows = [
  { label: "1. Quick win", segments: [{ start: 2, end: 2, fill: LIGHT_BLUE }, { start: 3, end: 4, fill: BLUE }] },
  { label: "2. Melhoria", segments: [{ start: 1, end: 1, fill: LIGHT_BLUE }, { start: 2, end: 2, fill: MEDIUM_BLUE }, { start: 3, end: 4, fill: BLUE }] },
  { label: "3. Nova funcionalidade", segments: [{ start: 0, end: 0, fill: LIGHT_BLUE }, { start: 1, end: 1, fill: MEDIUM_BLUE }, { start: 2, end: 4, fill: BLUE }] },
  { label: "4. Novo produto", segments: [{ start: 0, end: 4, fill: BLUE }] },
];

const phases = ["Discovery", "Pesquisa", "Ideação", "Design", "Monitoramento"];

function stopEvent(event: MouseEvent<HTMLButtonElement>) {
  event.stopPropagation();
}

function ArrowIcon({ direction = "right", size }: { direction?: "left" | "right"; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path
        d={direction === "left" ? HORIZONTAL_ARROW_LEFT_PATH : HORIZONTAL_ARROW_RIGHT_PATH}
        fill="currentColor"
        style={{ transition: "fill 150ms ease" }}
      />
    </svg>
  );
}

function FlowArrow({ width, metrics, dark = false }: { width: number; metrics: Metrics; dark?: boolean }) {
  const { vx, vs } = metrics;
  return (
    <svg width={vx(width)} height={vs(18)} viewBox={`0 0 ${width} 18`} fill="none" style={{ flexShrink: 0 }}>
      <path d={`M1 9H${width - 6}`} stroke={dark ? NAVY : BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <path d={`M${width - 13} 3L${width - 5} 9L${width - 13} 15`} stroke={dark ? NAVY : BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RenewIcon({ metrics, color = NAVY }: { metrics: Metrics; color?: string }) {
  const { vs } = metrics;
  return (
    <svg width={vs(40)} height={vs(40)} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
      <path d={AUTORENEW_PATH} fill={color} />
    </svg>
  );
}

function SvgAsset({
  src,
  width,
  height,
  metrics,
  scaleMode = "uniform",
  style,
}: {
  src: string;
  width: number;
  height: number;
  metrics: Metrics;
  scaleMode?: "stretch" | "uniform";
  style?: CSSProperties;
}) {
  const { vx, vy, vs } = metrics;
  const renderedWidth = scaleMode === "uniform" ? vs(width) : vx(width);
  const renderedHeight = scaleMode === "uniform" ? vs(height) : vy(height);

  return (
    <img
      alt=""
      src={src}
      draggable={false}
      style={{
        display: "block",
        width: renderedWidth,
        height: renderedHeight,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

function ResponsiveRightArrow({
  width,
  metrics,
  color = NAVY,
  style,
}: {
  width: number;
  metrics: Metrics;
  color?: string;
  style?: CSSProperties;
}) {
  const { vx, vs } = metrics;
  const renderedWidth = vx(width);
  const renderedHeight = vs(14.728);
  const strokeWidth = vs(2);
  const head = vs(6.36);
  const y = renderedHeight / 2;
  const endX = renderedWidth - strokeWidth / 2;
  const baseX = Math.max(0, endX - head);

  return (
    <svg
      width={renderedWidth}
      height={renderedHeight}
      viewBox={`0 0 ${renderedWidth} ${renderedHeight}`}
      fill="none"
      style={{ display: "block", overflow: "visible", flexShrink: 0, ...style }}
    >
      <path d={`M0 ${y}H${endX}`} stroke={color} strokeLinecap="round" strokeWidth={strokeWidth} />
      <path d={`M${baseX} ${y - head}L${endX} ${y}L${baseX} ${y + head}`} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

function ResponsiveUpArrow({ metrics, color = INK, style }: { metrics: Metrics; color?: string; style?: CSSProperties }) {
  const { vs } = metrics;
  const renderedWidth = vs(14.728);
  const renderedHeight = vs(40);
  const strokeWidth = vs(2);
  const head = vs(6.36);
  const x = renderedWidth / 2;

  return (
    <svg
      width={renderedWidth}
      height={renderedHeight}
      viewBox={`0 0 ${renderedWidth} ${renderedHeight}`}
      fill="none"
      style={{ display: "block", overflow: "visible", flexShrink: 0, ...style }}
    >
      <path d={`M${x} ${renderedHeight}V${strokeWidth / 2}`} stroke={color} strokeLinecap="round" strokeWidth={strokeWidth} />
      <path d={`M${x - head} ${head}L${x} ${strokeWidth / 2}L${x + head} ${head}`} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
    </svg>
  );
}

function CoreFlowArrow({ metrics, style }: { metrics: Metrics; style?: CSSProperties }) {
  const { vs } = metrics;

  return (
    <div
      style={{
        width: vs(50),
        height: vs(14.728),
        position: "relative",
        overflow: "visible",
        flexShrink: 0,
        ...style,
      }}
    >
      <img
        alt=""
        src={coreArrow}
        draggable={false}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: vs(51),
          height: vs(14.728),
          display: "block",
        }}
      />
    </div>
  );
}

function CoreConnectorArrow({ metrics, style }: { metrics: Metrics; style?: CSSProperties }) {
  const { vs } = metrics;

  return (
    <div
      style={{
        width: vs(891),
        height: vs(100.5),
        position: "relative",
        overflow: "visible",
        ...style,
      }}
    >
      <img
        alt=""
        src={coreConnector}
        draggable={false}
        style={{
          position: "absolute",
          left: "-0.83%",
          top: "-1%",
          width: "100.94%",
          height: "102%",
          display: "block",
        }}
      />
    </div>
  );
}

function NavDot({
  active,
  hovered,
}: {
  active: boolean;
  hovered: boolean;
}) {
  const size = 24;
  const highlighted = active || hovered;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        display: "block",
        overflow: "visible",
        flexShrink: 0,
        filter: hovered
          ? "drop-shadow(0 2px 4px rgba(5, 28, 117, 0.24)) drop-shadow(0 8px 24px rgba(5, 28, 117, 0.16))"
          : "none",
        transition: "filter 0.24s ease",
      }}
    >
      <motion.circle
        cx="12"
        cy="12"
        animate={{
          r: highlighted ? 10 : 8,
          fill: highlighted ? BLUE : STROKE_BLUE,
        }}
        initial={false}
        transition={{ duration: 0.24, ease: EASE }}
      />
    </motion.svg>
  );
}

function VerticalNavArrow({
  direction,
}: {
  direction: "up" | "down";
}) {
  const size = 24;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path
        d={direction === "up" ? NAV_ARROW_UP_PATH : NAV_ARROW_DOWN_PATH}
        fill="currentColor"
        style={{ transition: "fill 150ms ease" }}
      />
    </svg>
  );
}

function NavArrowButton({
  ariaLabel,
  onClick,
  children,
  size,
}: {
  ariaLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  size: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      className="flex items-center justify-center rounded-full cursor-pointer"
      style={{
        width: size,
        height: size,
        border: 0,
        padding: 0,
        outline: "none",
        background: hovered ? BLUE : "transparent",
        color: hovered ? "#fff" : BLUE,
        boxShadow: hovered ? INTERACTIVE_HOVER_BOX_SHADOW : "none",
        transition: INTERACTIVE_HOVER_TRANSITION,
      }}
    >
      {children}
    </button>
  );
}

function NavDotButton({
  active,
  ariaLabel,
  onClick,
}: {
  active: boolean;
  ariaLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        border: 0,
        padding: 0,
        cursor: "pointer",
        background: hovered ? BLUE : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        overflow: "visible",
        transition: INTERACTIVE_HOVER_TRANSITION,
      }}
    >
      <NavDot active={active} hovered={hovered} />
    </button>
  );
}

function TisLogo({ scale }: { scale: (n: number) => number }) {
  return (
    <div style={{ width: scale(120), height: scale(56), position: "relative", opacity: 0.9, overflow: "visible", flexShrink: 0 }}>
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
          <path d={svgPaths.p1bc3fc80} fill={BLUE} />
          <path d={svgPaths.p8ed8880} fill={BLUE} />
          <path d={svgPaths.p79b1980} fill={BLUE} />
          <path d={svgPaths.p3380500} fill={NAVY} />
          <path d={svgPaths.p3777a600} fill={NAVY} />
          <path d={svgPaths.p30300b00} fill={NAVY} />
        </svg>
      </div>
    </div>
  );
}

function Header({ page, metrics }: { page: number; metrics: Metrics }) {
  const { vx, vy, vs } = metrics;
  const subtitle =
    page === 0
      ? "Da criação pontual de ecrãs para um modelo operacional de experiência."
      : "Da criação pontual de ecrãs para um modelo operacional de experiência.";

  return (
    <motion.div
      initial={{ opacity: 0, y: vy(-24) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
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
          Padronização do trabalho
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
          Modelo de actuação
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
        {subtitle}
      </p>
    </motion.div>
  );
}

function Footer({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
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
          07
        </p>
        <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", background: STROKE_BLUE, height: vs(1), left: 0, right: 0, top: 0 }} />
        </div>
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
  );
}

const SLIDE_07_PAGE_COUNT = 3;

function VerticalNav({
  page,
  setPage,
  metrics,
}: {
  page: number;
  setPage: (page: number) => void;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;
  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientY - rect.top) / rect.height;
    if (ratio < 0.37) setPage(cycleVerticalPage(page, -1, SLIDE_07_PAGE_COUNT));
    if (ratio > 0.63) setPage(cycleVerticalPage(page, 1, SLIDE_07_PAGE_COUNT));
  };

  return (
    <div
      style={{
        position: "absolute",
        left: vx(1810),
        top: vy(420),
        width: 88,
        height: 240,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 20,
      }}
      onClick={handleContainerClick}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <div
        style={{
          marginLeft: vx(22),
          width: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        <NavArrowButton
          ariaLabel="Página anterior do slide 7"
          onClick={(event) => {
            stopEvent(event);
            setPage(cycleVerticalPage(page, -1, SLIDE_07_PAGE_COUNT));
          }}
          size={40}
        >
          <VerticalNavArrow direction="up" />
        </NavArrowButton>

        <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
          {Array.from({ length: SLIDE_07_PAGE_COUNT }).map((_, dot) => (
            <NavDotButton
              key={dot}
              active={page === dot}
              ariaLabel={`Ir para página ${dot + 1} do slide 7`}
              onClick={(event) => {
                stopEvent(event);
                setPage(dot);
              }}
            />
          ))}
        </div>

        <NavArrowButton
          ariaLabel="Próxima página do slide 7"
          onClick={(event) => {
            stopEvent(event);
            setPage(cycleVerticalPage(page, 1, SLIDE_07_PAGE_COUNT));
          }}
          size={40}
        >
          <VerticalNavArrow direction="down" />
        </NavArrowButton>
      </div>
    </div>
  );
}

function Bullet({
  children,
  metrics,
}: {
  children: ReactNode;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: vx(12), listStyle: "none", width: "100%" }}>
      <span style={{ height: vy(32), display: "flex", alignItems: "center", flexShrink: 0 }}>
        <span
          style={{
            width: vs(10),
            height: vs(10),
            background: BLUE,
            flexShrink: 0,
          }}
        />
      </span>
      <span
        style={{
          flex: "1 0 0",
          minWidth: 0,
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: vs(20),
          lineHeight: 1.5,
          color: NAVY,
        }}
      >
        {children}
      </span>
    </li>
  );
}

function PageOne({ metrics }: { metrics: Metrics }) {
  const { vx, vy, vs } = metrics;

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <ul
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(357),
          width: vx(736),
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: vy(32),
        }}
      >
        <Bullet metrics={metrics}>
          <span style={{ display: "block", marginBottom: vy(8) }}>Criar uma porta de entrada única para pedidos, com briefing mínimo:</span>
          <strong style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}>
            Objectivos de negócio, público, contexto de uso, restrições, prazo, stakeholders e critérios de sucesso.
          </strong>
        </Bullet>
        <Bullet metrics={metrics}>Classificar pedidos por níveis de risco e incerteza.</Bullet>
        <Bullet metrics={metrics}>
          Definir tipos de demandas:{" "}
          <strong style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}>
            Quick win, Melhoria, Nova funcionalidade e Novo produto
          </strong>
          , cada um com métodos, prazos, papéis e entregáveis compatíveis.
        </Bullet>
        <Bullet metrics={metrics}>
          <strong style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}>Estabelecer gates mínimos:</strong> problema
          compreendido, escopo validado, uso do Design System, critérios de acessibilidade, handoff e métrica pós-release.
        </Bullet>
      </ul>

      <p
        style={{
          position: "absolute",
          left: vx(130),
          top: vy(813),
          width: vx(829),
          margin: 0,
          fontFamily: "'Bronkoh-Heavy', sans-serif",
          fontSize: vs(26),
          lineHeight: 1.3,
          color: NAVY,
        }}
      >
        A área passa a actuar com critério de triagem e priorização. Reduzindo entrada tardia, retrabalho e decisões baseadas apenas em percepção
        visual.
      </p>

      <motion.div
        initial={{ opacity: 0, x: vx(32) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.16, ease: EASE }}
        style={{
          position: "absolute",
          left: vx(1072),
          top: vy(384),
          width: vx(620),
          borderRadius: vs(40),
          background: PALE_BLUE,
          padding: `${vy(48)}px ${vx(56)}px`,
          display: "flex",
          flexDirection: "column",
          gap: vy(32),
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: vy(8), justifyContent: "center", width: "100%" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontSize: vs(32),
              lineHeight: 1.3,
              color: NAVY,
            }}
          >
            Pesquisa e Discovery
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
              fontSize: vs(18),
              lineHeight: 1.5,
              color: INK,
            }}
          >
            Compreender o problema antes de resolver reduz o risco de construir o produto errado.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: vy(8), width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: vx(16),
              paddingBottom: vy(32),
              borderBottom: `${vs(1)}px solid ${STROKE_BLUE}`,
              width: "100%",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "'Bronkoh-Heavy', sans-serif",
                fontSize: vs(64),
                lineHeight: `${vs(56)}px`,
                letterSpacing: vs(-1),
                color: BLUE,
                whiteSpace: "nowrap",
              }}
            >
              135<span style={{ fontSize: vs(48), lineHeight: `${vs(56)}px` }}>%</span>
            </p>
            <p
              style={{
                flex: "1 0 0",
                minWidth: 0,
                margin: 0,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: vs(20),
                lineHeight: 1.3,
                color: NAVY,
              }}
            >
              de melhoria média nas métricas após redesenho focado em usabilidade
            </p>
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
              fontSize: vs(14),
              lineHeight: 1.5,
              color: INK,
              whiteSpace: "nowrap",
            }}
          >
            Nielsen Norman Group
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function ArrowPairNav({
  previous,
  next,
  metrics,
  justify = "center",
}: {
  previous: () => void;
  next: () => void;
  metrics: Metrics;
  justify?: CSSProperties["justifyContent"];
}) {
  const { vx, vs } = metrics;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: justify,
        gap: vx(32),
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <NavArrowButton
        ariaLabel="Anterior"
        onClick={(event) => {
          stopEvent(event);
          previous();
        }}
        size={vs(40)}
      >
        <ArrowIcon direction="left" size={vs(24)} />
      </NavArrowButton>
      <NavArrowButton
        ariaLabel="Próximo"
        onClick={(event) => {
          stopEvent(event);
          next();
        }}
        size={vs(40)}
      >
        <ArrowIcon direction="right" size={vs(24)} />
      </NavArrowButton>
    </div>
  );
}

function TextPager({
  index,
  total,
  setIndex,
  metrics,
}: {
  index: number;
  total: number;
  setIndex: (next: number) => void;
  metrics: Metrics;
}) {
  const previous = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <ArrowPairNav previous={previous} next={next} metrics={metrics} justify="flex-end" />
    </div>
  );
}

function ClassificationText({
  index,
  setIndex,
  direction,
  metrics,
  reducedMotion,
}: {
  index: number;
  setIndex: (next: number) => void;
  direction: number;
  metrics: Metrics;
  reducedMotion: boolean;
}) {
  const { vy, vs } = metrics;
  const page = classificationPages[index];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: vy(24), width: "100%", background: "#fff" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: vy(24), minHeight: vy(260), overflow: "hidden" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-SemiBold', sans-serif",
            fontSize: vs(16),
            letterSpacing: vs(2),
            textTransform: "uppercase",
            color: BLUE,
          }}
        >
          CritérioS de classificação
        </p>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -32 }}
            transition={{ duration: reducedMotion ? 0 : 0.32, ease: EASE }}
            style={{ display: "flex", flexDirection: "column", gap: vy(12), lineHeight: 1.5 }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "'Bronkoh-Heavy', sans-serif",
                fontSize: vs(26),
                lineHeight: 1.5,
                color: NAVY,
              }}
            >
              {page.title}
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "'Manrope', sans-serif",
                fontSize: vs(22),
                lineHeight: 1.5,
                color: INK,
              }}
            >
              {page.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <TextPager index={index} total={classificationPages.length} setIndex={setIndex} metrics={metrics} />
    </div>
  );
}

function ClassificationMatrix({
  activeIndex,
  setIndex,
  metrics,
}: {
  activeIndex: number;
  setIndex: (next: number) => void;
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const segmentPercent = 100 / phases.length;

  return (
    <div
      style={{
        width: vx(760),
        borderRadius: vs(40),
        background: PALE_BLUE,
        padding: `${vy(48)}px ${vx(56)}px`,
        display: "flex",
        flexDirection: "column",
        gap: vy(32),
      }}
    >
      {matrixRows.map((row, rowIndex) => {
        const [number, ...labelParts] = row.label.split(" ");
        const label = labelParts.join(" ");
        const isActive = rowIndex === activeIndex;
        const isHoverPreview = hoveredIndex === rowIndex && !isActive;
        const hasUnderline = isActive || isHoverPreview;

        return (
          <div
            key={row.label}
            role="button"
            tabIndex={0}
            aria-current={isActive ? "true" : undefined}
            aria-label={`Mostrar critério ${row.label}`}
            onMouseEnter={() => setHoveredIndex(rowIndex)}
            onMouseLeave={() => setHoveredIndex((current) => (current === rowIndex ? null : current))}
            onFocus={() => setHoveredIndex(rowIndex)}
            onBlur={() => setHoveredIndex((current) => (current === rowIndex ? null : current))}
            onClick={(event) => {
              event.stopPropagation();
              setIndex(rowIndex);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIndex(rowIndex);
              }
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: vy(12),
              alignItems: "flex-start",
              width: "100%",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <p
              style={{
                margin: 0,
                width: "100%",
                fontFamily: "'Bronkoh-Heavy', sans-serif",
                fontSize: vs(24),
                lineHeight: 1.5,
                color: NAVY,
              }}
            >
              <span>{number} </span>
              <span
                style={{
                  textDecorationLine: hasUnderline ? "underline" : "none",
                  textDecorationStyle: isHoverPreview ? "dotted" : "solid",
                  textDecorationSkipInk: "none",
                  textDecorationColor: BLUE,
                  textDecorationThickness: vs(4),
                  textUnderlineOffset: vs(4),
                  textUnderlinePosition: "from-font",
                }}
              >
                {label}
              </span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: vy(12), width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                {phases.map((phase) => (
                  <p
                    key={`${row.label}-${phase}`}
                    style={{
                      flex: "1 0 0",
                      minWidth: 0,
                      margin: 0,
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 800,
                      fontSize: vs(16),
                      lineHeight: 1.4,
                      color: INK,
                      textAlign: "center",
                    }}
                  >
                    {phase}
                  </p>
                ))}
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: vy(48),
                  background: "#fff",
                  overflow: "hidden",
                  borderRadius: vs(999),
                }}
              >
                {row.segments.map((segment) => {
                  const leftPadding = segment.start === 0 ? 12 : 6;
                  const rightPadding = segment.end === phases.length - 1 ? 12 : 6;

                  return (
                    <div
                      key={`${row.label}-${segment.start}-${segment.end}`}
                      style={{
                        position: "absolute",
                        left: `calc(${segment.start * segmentPercent}% + ${vx(leftPadding)}px)`,
                        top: vy(12),
                        width: `calc(${(segment.end - segment.start + 1) * segmentPercent}% - ${vx(leftPadding + rightPadding)}px)`,
                        height: vy(24),
                        background: segment.fill,
                        borderRadius: vs(999),
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PageTwo({
  metrics,
  classificationIndex,
  setClassificationIndex,
  classificationDirection,
  setClassificationDirection,
  reducedMotion,
}: {
  metrics: Metrics;
  classificationIndex: number;
  setClassificationIndex: (next: number) => void;
  classificationDirection: number;
  setClassificationDirection: (direction: number) => void;
  reducedMotion: boolean;
}) {
  const { vx, vy, vs } = metrics;

  const updateIndex = (next: number) => {
    const normalized = (next + classificationPages.length) % classificationPages.length;
    if (normalized === classificationIndex) return;
    setClassificationDirection(normalized > classificationIndex || (classificationIndex === classificationPages.length - 1 && normalized === 0) ? 1 : -1);
    setClassificationIndex(normalized);
  };

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          left: vx(124),
          top: vy(357),
          width: vx(720),
          display: "flex",
          flexDirection: "column",
          gap: vy(80),
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: vs(22),
            lineHeight: 1.5,
            color: NAVY,
          }}
        >
          O processo e os entregáveis mudam conforme a necessidade, considerando o grau de risco e incerteza envolvidos. Nem toda demanda precisa
          de Discovery completo, mas toda demanda precisa seguir um critério claro.
        </p>
        <ClassificationText
          index={classificationIndex}
          setIndex={updateIndex}
          direction={classificationDirection}
          metrics={metrics}
          reducedMotion={reducedMotion}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: vx(34) }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.48, delay: 0.12, ease: EASE }}
        style={{ position: "absolute", left: vx(1016), top: vy(160) }}
      >
        <ClassificationMatrix activeIndex={classificationIndex} setIndex={updateIndex} metrics={metrics} />
      </motion.div>
    </div>
  );
}

function FlowLabel({
  children,
  metrics,
  width,
  color = BLUE,
  weight = 800,
  scaleMode = "x",
}: {
  children: ReactNode;
  metrics: Metrics;
  width?: number;
  color?: string;
  weight?: number;
  scaleMode?: "x" | "uniform";
}) {
  const { vx, vs } = metrics;
  const renderedWidth = width ? (scaleMode === "uniform" ? vs(width) : vx(width)) : undefined;

  return (
    <p
      style={{
        margin: 0,
        width: renderedWidth,
        fontFamily: "'Manrope', sans-serif",
        fontWeight: weight,
        fontSize: vs(16),
        lineHeight: 1.2,
        letterSpacing: vs(-0.5),
        color,
        textAlign: "center",
        whiteSpace: width ? "normal" : "nowrap",
      }}
    >
      {children}
    </p>
  );
}

function QuestionMark({ metrics }: { metrics: Metrics }) {
  const { vs } = metrics;
  return (
    <div
      style={{
        width: vs(40),
        height: vs(40),
        borderRadius: "50%",
        border: `${vs(2)}px solid ${BLUE}`,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <SvgAsset src={earlyQuestionMark} width={24} height={24} metrics={metrics} />
    </div>
  );
}

function EarlyDiagram({ metrics }: { metrics: Metrics }) {
  const { vy, vs } = metrics;
  const innerWidth = vs(1312);
  const ix = (n: number) => `calc(50% - ${innerWidth / 2}px + ${vs(n)}px)`;
  const rowTop = 62;
  const rowCenterY = rowTop + 40;
  const arrowTop = rowCenterY - 14.728 / 2;

  return (
    <div style={{ position: "relative", height: vy(220), width: "100%", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: vy(rowTop),
          width: "100%",
          height: vy(80),
          borderRadius: vs(24),
          background: PALE_BLUE,
        }}
      />
      <div style={{ position: "absolute", left: ix(40), top: vy(rowTop + 30.5) }}>
        <FlowLabel metrics={metrics} width={80} scaleMode="uniform">
          Protótipos
        </FlowLabel>
      </div>
      <SvgAsset
        src={earlyArrowSmall}
        width={51}
        height={14.728}
        metrics={metrics}
        style={{ position: "absolute", left: ix(152), top: vy(arrowTop) }}
      />
      <div style={{ position: "absolute", left: ix(234), top: vy(rowTop + 21) }}>
        <FlowLabel metrics={metrics} width={177} scaleMode="uniform">
          Testes com público alvo
          <br />
          <span style={{ fontWeight: 400 }}>(gerar aprendizagem)</span>
        </FlowLabel>
      </div>
      <SvgAsset
        src={earlyArrowSmall}
        width={51}
        height={14.728}
        metrics={metrics}
        style={{ position: "absolute", left: ix(443), top: vy(arrowTop) }}
      />
      <div style={{ position: "absolute", left: ix(525), top: vy(rowTop + 20) }}>
        <QuestionMark metrics={metrics} />
      </div>
      <SvgAsset
        src={earlyArrowLong}
        width={486}
        height={14.728}
        metrics={metrics}
        style={{ position: "absolute", left: ix(597), top: vy(arrowTop) }}
      />
      <div style={{ position: "absolute", left: ix(1114), top: vy(rowTop + 21) }}>
        <FlowLabel metrics={metrics} width={158} scaleMode="uniform">
          Backlog de produto e/ou produção
        </FlowLabel>
      </div>

      <div style={{ position: "absolute", left: ix(653.3), top: vy(30), width: vs(90.898), height: vy(48), display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ transform: "rotate(-27.84deg) skewX(4.42deg)" }}>
          <SvgAsset src={earlyArrowDiagonalUp} width={103.793} height={14.728} metrics={metrics} />
        </div>
      </div>
      <div style={{ position: "absolute", left: ix(652.72), top: vy(126), width: vs(90.898), height: vy(48), display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ transform: "rotate(27.84deg) skewX(-4.42deg)" }}>
          <SvgAsset src={earlyArrowDiagonalDown} width={103.793} height={14.728} metrics={metrics} />
        </div>
      </div>

      <p
        style={{
          position: "absolute",
          left: ix(764),
          top: vy(16),
          width: vs(168),
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: vs(16),
          lineHeight: 1.1,
          letterSpacing: vs(-0.5),
          color: INK,
        }}
      >
        Despriorizar/Pivotar
      </p>
      <div
        style={{
          position: "absolute",
          left: ix(764),
          top: vy(166),
          width: vs(432),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlowLabel metrics={metrics} width={102} color={INK} scaleMode="uniform">
          Continuar aprendendo
          <br />
          <span style={{ fontWeight: 400 }}>(novos testes)</span>
        </FlowLabel>
        <SvgAsset src={earlyRenewA} width={40} height={40} metrics={metrics} />
        <SvgAsset src={earlyRenewB} width={40} height={40} metrics={metrics} />
        <SvgAsset src={earlyRenewB} width={40} height={40} metrics={metrics} />
        <SvgAsset src={earlyRenewA} width={40} height={40} metrics={metrics} />
        <div style={{ width: vs(14.728), height: vs(40), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <ResponsiveUpArrow metrics={metrics} />
        </div>
      </div>
    </div>
  );
}

function GrowthDiagram({ metrics }: { metrics: Metrics }) {
  const { vy, vs } = metrics;
  const innerWidth = vs(1312);
  const ix = (n: number) => `calc(50% - ${innerWidth / 2}px + ${vs(n)}px)`;
  const rowTop = 64;
  const rowCenterY = rowTop + 40;
  const arrowTop = rowCenterY - 14.728 / 2;
  const cycleLabelWidth = vs(236);
  const renewGroupLeft = ix(702.5);
  const cycleLabelLeft = ix(697.5);

  return (
    <div style={{ position: "relative", height: vy(220), width: "100%", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: vy(rowTop),
          width: "100%",
          height: vy(80),
          borderRadius: vs(24),
          background: PALE_BLUE,
        }}
      />
      <div style={{ position: "absolute", left: ix(111.5), top: vy(rowTop + 30.5) }}>
        <FlowLabel metrics={metrics} width={80} scaleMode="uniform">Protótipos</FlowLabel>
      </div>
      <CoreFlowArrow metrics={metrics} style={{ position: "absolute", left: ix(223.5), top: vy(arrowTop) }} />
      <div style={{ position: "absolute", left: ix(305.5), top: vy(rowTop + 21) }}>
        <FlowLabel metrics={metrics} width={149} scaleMode="uniform">
          Testes com clientes
          <br />
          <span style={{ fontWeight: 400 }}>(Rápido de avaliação)</span>
        </FlowLabel>
      </div>
      <CoreFlowArrow metrics={metrics} style={{ position: "absolute", left: ix(486.5), top: vy(arrowTop) }} />
      <div style={{ position: "absolute", left: ix(568.5), top: vy(rowTop + 21) }}>
        <FlowLabel metrics={metrics} width={102} scaleMode="uniform">Produto em produção</FlowLabel>
      </div>
      <div style={{ position: "absolute", left: renewGroupLeft, top: vy(rowTop + 20), display: "flex", gap: vs(22), alignItems: "center" }}>
        {[0, 1, 2, 3].map((item) => (
          <SvgAsset key={item} src={growthRenew} width={40} height={40} metrics={metrics} />
        ))}
      </div>
      <CoreFlowArrow metrics={metrics} style={{ position: "absolute", left: ix(960.5), top: vy(arrowTop) }} />
      <div style={{ position: "absolute", left: ix(1042.5), top: vy(rowTop + 30.5) }}>
        <FlowLabel metrics={metrics} width={158} scaleMode="uniform">Versão validada</FlowLabel>
      </div>
      <p
        style={{
          position: "absolute",
          left: cycleLabelLeft,
          top: vy(156),
          width: cycleLabelWidth,
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
          fontSize: vs(16),
          lineHeight: 1.1,
          letterSpacing: vs(-0.5),
          color: INK,
          textAlign: "center",
        }}
      >
        Ciclo de testes/acompanhamento
      </p>
    </div>
  );
}

function CoreDiagram({ metrics }: { metrics: Metrics }) {
  const { vy, vs } = metrics;
  const innerWidth = vs(1312);
  const ix = (n: number) => `calc(50% - ${innerWidth / 2}px + ${vs(n)}px)`;
  const topRowHeight = 60;
  const bottomRowTop = 116;
  const bottomRowHeight = 80;
  const arrowHeight = 14.728;
  const arrowTop = (lineY: number) => lineY - arrowHeight / 2;
  const cycleLabelWidth = vs(236);
  const renewGroupLeft = ix(634.5);
  const cycleLabelLeft = ix(629);

  return (
    <div style={{ position: "relative", height: vy(222), width: "100%", overflow: "visible" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: vy(topRowHeight),
          boxSizing: "border-box",
          borderRadius: vs(22.424),
          border: `${vs(0.934)}px solid ${STROKE_BLUE}`,
          background: "#fff",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: vy(topRowHeight),
          boxSizing: "border-box",
          padding: `0 ${vs(40)}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: vs(32),
        }}
      >
        <FlowLabel metrics={metrics} width={471} scaleMode="uniform">
          Pesquisas, análise de feedbacks, pedidos de suporte e analytics
        </FlowLabel>
        <CoreFlowArrow metrics={metrics} />
        <FlowLabel metrics={metrics} width={203} scaleMode="uniform">
          Oportunidades de melhoria
        </FlowLabel>
      </div>

      <CoreConnectorArrow metrics={metrics} style={{ position: "absolute", left: ix(218), top: vy(32) }} />

      <div
        style={{
          position: "absolute",
          left: 0,
          top: vy(bottomRowTop),
          width: "100%",
          height: vy(bottomRowHeight),
          borderRadius: vs(22.424),
          background: PALE_BLUE,
        }}
      />
      <div style={{ position: "absolute", left: ix(179.5), top: vy(bottomRowTop + 30.5) }}>
        <FlowLabel metrics={metrics} width={80} scaleMode="uniform">
          Protótipos
        </FlowLabel>
      </div>
      <CoreFlowArrow metrics={metrics} style={{ position: "absolute", left: ix(291.5), top: vy(arrowTop(bottomRowTop + 40)) }} />
      <div style={{ position: "absolute", left: ix(373.5), top: vy(bottomRowTop + 21) }}>
        <FlowLabel metrics={metrics} width={147} scaleMode="uniform">
          Testes com clientes
          <br />
          <span style={{ fontWeight: 400 }}>(Gerar aprendizagem)</span>
        </FlowLabel>
      </div>
      <CoreFlowArrow metrics={metrics} style={{ position: "absolute", left: ix(552.5), top: vy(arrowTop(bottomRowTop + 40)) }} />
      <div style={{ position: "absolute", left: renewGroupLeft, top: vy(bottomRowTop + 20), display: "flex", gap: vs(22), alignItems: "center" }}>
          {[0, 1, 2, 3].map((item) => (
            <SvgAsset key={item} src={coreRenew} width={40} height={40} metrics={metrics} />
          ))}
      </div>
      <CoreFlowArrow metrics={metrics} style={{ position: "absolute", left: ix(892.5), top: vy(arrowTop(bottomRowTop + 40)) }} />
      <div style={{ position: "absolute", left: ix(974.5), top: vy(bottomRowTop + 21) }}>
        <FlowLabel metrics={metrics} width={158} scaleMode="uniform">
          Backlog de produto e/ou produção
        </FlowLabel>
      </div>
      <p
        style={{
          position: "absolute",
          left: cycleLabelLeft,
          top: vy(204),
          width: cycleLabelWidth,
          margin: 0,
          fontFamily: "'Manrope', sans-serif",
          fontSize: vs(16),
          lineHeight: 1.1,
          letterSpacing: vs(-0.5),
          color: INK,
          textAlign: "center",
        }}
      >
        Ciclo de testes/acompanhamento
      </p>
    </div>
  );
}

function MaturityCard({
  card,
  metrics,
}: {
  card: (typeof maturityCards)[number];
  metrics: Metrics;
}) {
  const { vx, vy, vs } = metrics;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: vs(40),
        border: `${vs(1)}px solid ${MUTED}`,
        background: "#fff",
        padding: `${vy(64)}px ${vx(64)}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: vy(24), alignItems: "flex-start" }}>
        <p
          style={{
            margin: 0,
            width: "100%",
            fontFamily: "'Bronkoh-SemiBold', sans-serif",
            fontSize: vs(16),
            letterSpacing: vs(2),
            lineHeight: "normal",
            textTransform: "uppercase",
            color: BLUE,
          }}
        >
          Estratégia por maturidade do produto
        </p>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: vy(12), alignItems: "flex-start" }}>
          <p
            style={{
              margin: 0,
              width: "100%",
              fontFamily: "'Bronkoh-Heavy', sans-serif",
              fontSize: vs(26),
              lineHeight: 1.5,
              color: NAVY,
            }}
          >
            {card.title}
          </p>
          <p
            style={{
              margin: 0,
              width: "100%",
              fontFamily: "'Manrope', sans-serif",
              fontSize: vs(22),
              lineHeight: 1.5,
              color: INK,
            }}
          >
            {card.body}
          </p>
          {card.variant === "early" && <EarlyDiagram metrics={metrics} />}
          {card.variant === "growth" && <GrowthDiagram metrics={metrics} />}
          {card.variant === "core" && <CoreDiagram metrics={metrics} />}
        </div>
      </div>
    </div>
  );
}

function CardShell({ metrics }: { metrics: Metrics }) {
  const { vs } = metrics;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: vs(40),
        border: `${vs(1)}px solid ${MUTED}`,
        background: "#fff",
      }}
    />
  );
}

function PageThree({
  metrics,
  maturityIndex,
  setMaturityIndex,
  setMaturityDirection,
  reducedMotion,
}: {
  metrics: Metrics;
  maturityIndex: number;
  setMaturityIndex: (index: number) => void;
  setMaturityDirection: (direction: number) => void;
  reducedMotion: boolean;
}) {
  const { vx, vy, vs } = metrics;
  const activeCardHeight = 520;
  const depthOffsets = [0, 103.35, 49.15];
  const depthScales = [1, 0.9666, 0.9343];
  const depthLips = [0, 9, 17];
  const shellHeight = (depth: number) => {
    if (depth === 0) return activeCardHeight;
    return Math.max(0, (activeCardHeight + depthLips[depth] - depthOffsets[depth]) / depthScales[depth]);
  };

  const updateIndex = (next: number) => {
    const normalized = (next + maturityCards.length) % maturityCards.length;
    setMaturityDirection(normalized > maturityIndex || (maturityIndex === maturityCards.length - 1 && normalized === 0) ? 1 : -1);
    setMaturityIndex(normalized);
  };

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(341),
          width: vx(1440),
          height: vy(593),
          overflow: "hidden",
        }}
      >
        {maturityCards.map((card, i) => {
          const depth = (i - maturityIndex + maturityCards.length) % maturityCards.length;
          const y = depthOffsets[depth];
          const scale = depthScales[depth];
          const height = depth === 0 ? activeCardHeight : shellHeight(depth);

          return (
            <motion.div
              key={card.title}
              animate={{
                y: vy(y),
                scale,
                zIndex: 10 - depth,
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.48,
                ease: EASE,
              }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: vx(1440),
                height: vy(height),
                transformOrigin: "top center",
              }}
            >
              {depth === 0 ? <MaturityCard card={card} metrics={metrics} /> : <CardShell metrics={metrics} />}
            </motion.div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          left: vx(784),
          top: vy(341 + activeCardHeight + 33),
          width: vx(112),
          display: "flex",
          justifyContent: "center",
          zIndex: 30,
        }}
      >
        <ArrowPairNav
          previous={() => updateIndex(maturityIndex - 1)}
          next={() => updateIndex(maturityIndex + 1)}
          metrics={metrics}
        />
      </div>
    </div>
  );
}

export function Slide07Model({ scaleX, scaleY }: Slide07ModelProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [page, setPageState] = useState(0);
  const [pageDirection, setPageDirection] = useState(1);
  const [classificationIndex, setClassificationIndex] = useState(0);
  const [classificationDirection, setClassificationDirection] = useState(1);
  const [maturityIndex, setMaturityIndex] = useState(0);
  const [, setMaturityDirection] = useState(1);
  const lastWheelRef = useRef(0);
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);
  const metrics = { vx, vy, vs };

  const setPage = (next: number) => {
    const { target, direction } = resolveVerticalPage(next, page, SLIDE_07_PAGE_COUNT);
    if (direction === 0) return;
    setPageDirection(direction);
    setPageState(target);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (Math.abs(event.deltaY) < 20) return;

    const now = window.performance.now();
    if (now - lastWheelRef.current < 650) return;
    lastWheelRef.current = now;
    setPage(event.deltaY > 0 ? page + 1 : page - 1);
  };

  return (
    <motion.div
      key="slide-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.35 }}
      className="absolute inset-0 overflow-hidden bg-white"
      onWheel={handleWheel}
    >
      <Header page={page} metrics={metrics} />
      <VerticalNav page={page} setPage={setPage} metrics={metrics} />
      <AnimatePresence mode="wait" custom={pageDirection}>
        <motion.div
          key={page}
          initial={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(40) }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reducedMotion ? 0 : pageDirection * vy(-34) }}
          transition={{ duration: reducedMotion ? 0 : 0.42, ease: EASE }}
          style={{ position: "absolute", inset: 0 }}
        >
          {page === 0 && <PageOne metrics={metrics} />}
          {page === 1 && (
            <PageTwo
              metrics={metrics}
              classificationIndex={classificationIndex}
              setClassificationIndex={setClassificationIndex}
              classificationDirection={classificationDirection}
              setClassificationDirection={setClassificationDirection}
              reducedMotion={reducedMotion}
            />
          )}
          {page === 2 && (
            <PageThree
              metrics={metrics}
              maturityIndex={maturityIndex}
              setMaturityIndex={setMaturityIndex}
              setMaturityDirection={setMaturityDirection}
              reducedMotion={reducedMotion}
            />
          )}
        </motion.div>
      </AnimatePresence>
      <Footer metrics={metrics} />
    </motion.div>
  );
}
