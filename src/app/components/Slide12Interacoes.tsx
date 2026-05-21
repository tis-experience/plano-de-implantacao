import { motion } from "motion/react";
import { createSlideMetrics } from "../scaling";
import svgPaths from "../../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { imgGroup } from "../../imports/06EstruturaEProcessoIdeal/svg-cceda";

interface Props {
  scaleX: number;
  scaleY: number;
}

const ease = "easeOut" as const;
const fade = (delay: number) => ({ duration: 0.55, delay, ease });

const AREAS = [
  {
    title: "Produto (PM/PO)",
    body: "Alinha visão de produto, priorização e discovery com o trabalho de experiência.",
    highlight: "XP Engineering entra cedo no discovery para reduzir retrabalho e alinhar hipóteses.",
    receives: "Problemas de negócio, hipóteses, restrições e prioridades.",
    delivers: "Jornada validada, protótipo priorizado e critérios de aceite claros.",
  },
  {
    title: "Engenharia",
    body: "Transforma decisões de experiência em incrementos sustentáveis e testáveis.",
    highlight: "XP Engineering co-desenha handoff, contratos de interface e critérios de pronto.",
    receives: "Escopo fechado, ADRs, dependências e restrições técnicas.",
    delivers: "Incrementos testáveis, métricas técnicas e feedback de implementação.",
  },
  {
    title: "QA",
    body: "Garante qualidade e evidências antes de escalar para produção.",
    highlight: "XP Engineering define cenários críticos de experiência e critérios de validação.",
    receives: "Builds, ambientes, critérios de aceite e matriz de risco.",
    delivers: "Evidências de teste, relatórios de regressão e sinais de qualidade.",
  },
  {
    title: "Dados/BI",
    body: "Conecta decisões de produto e experiência a métricas observáveis.",
    highlight: "XP Engineering especifica eventos, funis e KPIs desde o discovery.",
    receives: "Eventos, definições de KPI e perguntas de negócio.",
    delivers: "Dashboards, insights acionáveis e leitura de comportamento.",
  },
] as const;

function TisLogo({ vs }: { vs: (n: number) => number }) {
  return (
    <div style={{ width: vs(120), height: vs(56), position: "relative", opacity: 0.9, overflow: "visible", flexShrink: 0 }}>
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
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 119.929 53.6039">
          <path d={svgPaths.p1bc3fc80} fill="#036EF2" />
          <path d={svgPaths.p8ed8880} fill="#036EF2" />
          <path d={svgPaths.p79b1980} fill="#036EF2" />
          <path d={svgPaths.p3380500} fill="#04165D" />
          <path d={svgPaths.p3777a600} fill="#04165D" />
          <path d={svgPaths.p30300b00} fill="#04165D" />
        </svg>
      </div>
    </div>
  );
}

function FlowBox({
  variant,
  title,
  description,
  vs,
  vy,
}: {
  variant: "receive" | "deliver";
  title: string;
  description: string;
  vs: (n: number) => number;
  vy: (n: number) => number;
}) {
  const isReceive = variant === "receive";
  const bg = isReceive ? "#eff6ff" : "#f0fdf4";
  const border = isReceive ? "#93c5fd" : "#86efac";
  const accent = isReceive ? "#2563eb" : "#166534";

  return (
    <div
      style={{
        background: bg,
        border: `${vs(1)}px solid ${border}`,
        borderRadius: vs(12),
        padding: `${vy(14)}px ${vs(16)}px`,
        display: "flex",
        flexDirection: "column",
        gap: vy(8),
        flex: 1,
        minHeight: 0,
      }}
    >
      <p
        style={{ margin: 0, fontSize: vs(15), lineHeight: 1.2, color: accent }}
        className="font-['Bronkoh-SemiBold',sans-serif] not-italic"
      >
        {title}
      </p>
      <p
        style={{ margin: 0, fontSize: vs(14), lineHeight: 1.45, color: "#2f3237" }}
        className="font-['Manrope',sans-serif] font-medium not-italic"
      >
        {description}
      </p>
    </div>
  );
}

export function Slide12Interacoes({ scaleX, scaleY }: Props) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);
  const cardGap = vx(24);
  const cardWidth = (vx(1680) - cardGap * 3) / 4;

  return (
    <motion.div
      key="slide-12"
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
          gap: vy(20),
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: vy(12), width: "100%" }}>
          <p
            style={{ fontSize: vs(16), letterSpacing: vs(2), lineHeight: "normal", margin: 0 }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase"
          >
            CONEXÕES OPERACIONAIS
          </p>
          <p
            style={{ fontSize: vs(64), letterSpacing: vs(-1.2), lineHeight: 1.05, margin: 0 }}
            className="font-['Bronkoh-Heavy',sans-serif] not-italic text-[#04165d]"
          >
            Interações com as demais áreas
          </p>
        </div>
        <p
          style={{ fontSize: vs(24), lineHeight: 1.45, margin: 0, maxWidth: vx(1200) }}
          className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#2f3237]"
        >
          O trabalho de Experience Engineering acontece nas interfaces entre as áreas, não em paralelo a elas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: vy(16) }}
        animate={{ opacity: 1, y: 0 }}
        transition={fade(0.2)}
        style={{
          position: "absolute",
          left: vx(120),
          top: vy(300),
          width: vx(1680),
          display: "flex",
          gap: cardGap,
          alignItems: "stretch",
        }}
      >
        {AREAS.map((area) => (
          <div
            key={area.title}
            style={{
              width: cardWidth,
              flexShrink: 0,
              border: `${vs(1)}px solid #d7dbe3`,
              borderRadius: vs(16),
              padding: `${vy(24)}px ${vs(22)}px`,
              display: "flex",
              flexDirection: "column",
              gap: vy(16),
              background: "#fff",
              minHeight: vy(520),
            }}
          >
            <p
              style={{ margin: 0, fontSize: vs(22), lineHeight: 1.2, color: "#04165d" }}
              className="font-['Bronkoh-Heavy',sans-serif] not-italic"
            >
              {area.title}
            </p>
            <p
              style={{ margin: 0, fontSize: vs(15), lineHeight: 1.5, color: "#2f3237" }}
              className="font-['Manrope',sans-serif] font-medium not-italic"
            >
              {area.body}
            </p>
            <p
              style={{ margin: 0, fontSize: vs(15), lineHeight: 1.45, color: "#04165d" }}
              className="font-['Manrope',sans-serif] font-bold not-italic"
            >
              {area.highlight}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: vy(12), marginTop: "auto" }}>
              <FlowBox variant="receive" title="Recebe" description={area.receives} vs={vs} vy={vy} />
              <FlowBox variant="deliver" title="Entrega" description={area.delivers} vs={vs} vy={vy} />
            </div>
          </div>
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
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal", margin: 0 }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
          >
            12
          </p>
          <div style={{ width: vx(24), height: vy(2), overflow: "hidden", position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", background: "rgba(43,118,193,0.4)", height: vs(1), left: 0, right: 0, top: 0 }} />
          </div>
          <p
            style={{ fontSize: vs(14), letterSpacing: vs(1.5), lineHeight: "normal", margin: 0 }}
            className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#6e7587] uppercase whitespace-nowrap"
          >
            PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING
          </p>
        </div>
        <TisLogo vs={vs} />
      </motion.div>
    </motion.div>
  );
}
