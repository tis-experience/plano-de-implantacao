import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createSlideMetrics } from "../scaling";
import modalSvg from "../../imports/ModalOverlay/svg-j25njvl7ht";

interface NNgModalProps {
  open: boolean;
  onClose: () => void;
  scaleX: number;
  scaleY: number;
}

// Placeholder content — user will fill in later
const LEVELS: {
  tag: string;
  title: string;
  quote: string;
  body: (vs: (n: number) => number) => React.ReactNode;
}[] = [
  {
    tag: "Nível 1",
    title: "Ausente",
    quote: `"A UX é ignorada ou desconhecida. Foco total no produto/negócio, sem considerar o utilizador."`,
    body: (vs) => (
      <p style={{ fontSize: vs(20), letterSpacing: vs(0.25), lineHeight: 1.4 }}
         className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.6)]">
        Nas organizações de estágio 1, a experiência do utilizador (UX) está completamente ausente. Uma empresa neste estágio ou não tem consciência do pensamento centrado no utilizador, ou acredita que não precisa dele. O trabalho de UX não é planeado, muito menos incorporado na visão da organização. As poucas pessoas na organização que pensam nos utilizadores são ignoradas ou desvalorizadas.
      </p>
    ),
  },
  {
    tag: "Nível 2",
    title: "Limitado",
    quote: `"Esforços de UX são esporádicos, informais e pouco valorizados. O design é considerado apenas fazer a interface."`,
    body: (vs) => (
      <div style={{ fontSize: vs(20), letterSpacing: vs(0.25), lineHeight: 0 }}
           className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.6)]">
        <p style={{ lineHeight: 1.4, marginBottom: vs(16) }}>
          Uma organização na fase limitada aborda o UX de forma errática. São feitos pequenos esforços de UX, geralmente por uma das três razões:
        </p>
        <ol className="list-decimal">
          <li style={{ marginBottom: vs(4), marginInlineStart: vs(30) }}>
            <span style={{ lineHeight: 1.4 }}>Necessidade legal</span>
          </li>
          <li style={{ marginBottom: vs(4), marginInlineStart: vs(30) }}>
            <span style={{ lineHeight: 1.4 }}>Um indivíduo consciente de UX (talvez líder) que toma a iniciativa</span>
          </li>
          <li style={{ marginInlineStart: vs(30) }}>
            <span style={{ lineHeight: 1.4 }}>Uma equipa experimental que tenta métodos de UX</span>
          </li>
        </ol>
      </div>
    ),
  },
  {
    tag: "Nível 3",
    title: "Emergente",
    quote: `"O trabalho de UX é funcional e promissor, mas é realizado de forma inconsistente e ineficiente."`,
    body: (vs) => (
      <p style={{ fontSize: vs(20), letterSpacing: vs(0.25), lineHeight: 1.4 }}
         className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.6)]">
        Em empresas com maturidade emergente em UX, várias equipas realizam trabalho de UX. As empresas envolvem-se em algum planeamento relacionado com UX e podem ter orçamentos para UX. No entanto, os esforços de UX são pequenos, instáveis e baseados em iniciativas de gestores individuais, em vez de políticas organizacionais.
      </p>
    ),
  },
  {
    tag: "Nível 4",
    title: "Estruturado",
    quote: `"A empresa reconhece o valor da UX. Existe uma equipa, processos definidos e apoio da liderança, resultando em qualidade."`,
    body: (vs) => (
      <p style={{ fontSize: vs(20), lineHeight: 1.5 }}
         className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.6)]">
        As organizações de Nível 4 reconhecem o valor do UX e possuem uma ou mais equipas de UX estabelecidas. A liderança geralmente apoia o UX e, por vezes, até o incorpora em estratégias e iniciativas de alto nível. O design é amplamente compreendido em toda a organização e existe um processo iterativo de design centrado no ser humano bem estabelecido. A pesquisa com utilizadores é realizada ao longo de todo o ciclo de vida do produto.
      </p>
    ),
  },
  {
    tag: "Nível 5",
    title: "Integrado",
    quote: `"A UX está enraizada na cultura e no fluxo de trabalho. O design é contínuo e gera resultados consistentes."`,
    body: (vs) => (
      <p style={{ fontSize: vs(20), letterSpacing: vs(0.25), lineHeight: 1.4 }}
         className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.6)]">
        Quando as organizações atingem o estágio de UX integrado, o seu trabalho de UX torna-se abrangente, omnipresente e universal. Quase todas as equipas dentro da organização realizam atividades relacionadas com UX de forma eficiente e eficaz. Muitas vezes há inovação nos métodos e processos de UX e até contribuições para o campo do UX.
      </p>
    ),
  },
  {
    tag: "Nível 6",
    title: "Orientado ao Utilizador",
    quote: `"O nível mais alto, onde a investigação e a UX impulsionam a estratégia de negócios e a inovação."`,
    body: (vs) => (
      <p style={{ fontSize: vs(20), letterSpacing: vs(0.25), lineHeight: 1.4 }}
         className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.6)]">
        Nas organizações de estágio 6, todos estão plenamente conscientes do valor do design centrado no utilizador. A investigação com utilizadores e o design centrado no utilizador são a força motriz por trás de tudo o que estas organizações fazem, desde o mais alto nível da estratégia organizacional até ao menor elemento de design dentro de um sistema de design. As operações de desenvolvimento adoptam um design iterativo orientado pelo utilizador. Tanto indivíduos como equipas planeiam para a mudança e inovação, e a investigação com utilizadores impulsiona novos investimentos ao responder a necessidades não satisfeitas no mercado.
      </p>
    ),
  },
];

export function NNgModal({ open, onClose, scaleX, scaleY }: NNgModalProps) {
  const { s, vs, vx } = createSlideMetrics(scaleX, scaleY);

  const [currentPage, setCurrentPage] = useState(0);
  const directionRef = useRef(1);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseDownOutsideRef = useRef(false);
  const [closeHovered, setCloseHovered] = useState(false);
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  // ── Fecha apenas quando o clique cai no overlay (fundo), nunca na modal ──
  // Não precisamos mais de listener nativo — e.target === e.currentTarget
  // garante que o handler só dispara quando o clique é no próprio overlay,
  // não em nenhum elemento filho (o card, botões, etc.).
  // ─────────────────────────────────────────────────────────────────────────

  // Fixed height measured from all slides at once
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fixedHeight, setFixedHeight] = useState(0);

  useLayoutEffect(() => {
    if (!open) return;
    // Small delay to let the hidden layer paint before measuring
    const id = requestAnimationFrame(() => {
      const heights = measureRefs.current
        .filter(Boolean)
        .map(el => el!.scrollHeight);
      if (heights.length > 0) setFixedHeight(Math.max(...heights));
    });
    return () => cancelAnimationFrame(id);
  }, [open, s]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir * vx(40), opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
    exit: (dir: number) => ({ x: dir * -vx(40), opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } }),
  };

  const goTo = (idx: number) => {
    directionRef.current = idx > currentPage ? 1 : -1;
    setCurrentPage(idx);
  };
  const goPrev = () => { if (currentPage > 0) goTo(currentPage - 1); };
  const goNext = () => { if (currentPage < LEVELS.length - 1) goTo(currentPage + 1); };

  const level = LEVELS[currentPage];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="nng-overlay"
          data-nng-modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => {
            e.stopPropagation();
            mouseDownOutsideRef.current =
              !!cardRef.current && !cardRef.current.contains(e.target as Node);
          }}
          onMouseUp={(e) => {
            e.stopPropagation();
            const outside =
              !!cardRef.current && !cardRef.current.contains(e.target as Node);
            if (mouseDownOutsideRef.current && outside) onClose();
            mouseDownOutsideRef.current = false;
          }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.40)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {/* Modal card */}
          <motion.div
            key="nng-card"
            ref={cardRef}
            initial={{ scale: 0.94, opacity: 0, y: vs(20) }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: vs(20) }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: vs(800),
              padding: vs(64),
              borderRadius: vs(48),
              backgroundColor: "#3126b4",
              display: "flex",
              flexDirection: "column",
              gap: vs(48),
              overflow: "hidden",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              onMouseEnter={() => setCloseHovered(true)}
              onMouseLeave={() => setCloseHovered(false)}
              style={{
                position: "absolute",
                top: vs(24),
                right: vs(24),
                width: vs(32),
                height: vs(32),
                borderRadius: "999px",
                backgroundColor: closeHovered ? "white" : "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,
                padding: 0,
                transition: "background-color 0.15s ease",
              }}
            >
              <svg width={vs(32)} height={vs(32)} viewBox="0 0 32 32" fill="none">
                <mask id="nng-close-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" style={{ maskType: "alpha" }}>
                  <rect width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#nng-close-mask)">
                  <path d={modalSvg.peeed100} fill={closeHovered ? "#3126B4" : "white"} style={{ transition: "fill 0.15s ease" }} />
                </g>
              </svg>
            </button>

            {/* Hidden measurement layer – all slides rendered at once, invisible */}
            <div style={{
              position: "absolute",
              visibility: "hidden",
              pointerEvents: "none",
              top: vs(64),
              left: vs(64),
              right: vs(64),
              zIndex: -1,
            }}>
              {LEVELS.map((lvl, i) => (
                <div
                  key={i}
                  ref={el => { measureRefs.current[i] = el; }}
                  style={{ display: "flex", flexDirection: "column", gap: vs(24), position: "absolute", top: 0, left: 0, right: 0 }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: vs(16) }}>
                    <div style={{
                      display: "inline-flex", alignSelf: "flex-start", alignItems: "center",
                      justifyContent: "center", paddingLeft: vs(16), paddingRight: vs(16),
                      paddingTop: vs(10), paddingBottom: vs(10), borderRadius: "999px",
                      backgroundColor: "#036ef2",
                    }}>
                      <p style={{ fontSize: vs(20), letterSpacing: vs(-0.5), lineHeight: 1.3 }}
                         className="font-['Bronkoh-Bold',sans-serif] not-italic text-white whitespace-nowrap">
                        {lvl.tag}
                      </p>
                    </div>
                    <p style={{ fontSize: vs(40), letterSpacing: vs(-0.5), lineHeight: 1.3 }}
                       className="font-['Bronkoh-Heavy',sans-serif] not-italic text-white whitespace-nowrap">
                      {lvl.title}
                    </p>
                  </div>
                  <p style={{ fontSize: vs(30), lineHeight: 1.2 }}
                     className="font-['Bronkoh-lightItalic','Bronkoh-Regular',sans-serif] italic text-white">
                    {lvl.quote}
                  </p>
                  {lvl.body(vs)}
                </div>
              ))}
            </div>

            {/* Animated content */}
            <div style={{
              overflow: "hidden",
              minHeight: vs(280),
              height: fixedHeight > 0 ? fixedHeight : undefined,
              flexShrink: 0,
            }}>
              <AnimatePresence mode="wait" custom={directionRef.current}>
                <motion.div
                  key={currentPage}
                  custom={directionRef.current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ display: "flex", flexDirection: "column", gap: vs(24) }}
                >
                  {/* Tag + Title */}
                  <div style={{ display: "flex", flexDirection: "column", gap: vs(16) }}>
                    <div style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingLeft: vs(16),
                      paddingRight: vs(16),
                      paddingTop: vs(10),
                      paddingBottom: vs(8),
                      borderRadius: "999px",
                      backgroundColor: "#036ef2",
                    }}>
                      <p
                        style={{ fontSize: vs(20), letterSpacing: vs(-0.5), lineHeight: 1.3 }}
                        className="font-['Bronkoh-Bold',sans-serif] not-italic text-white whitespace-nowrap"
                      >
                        {level.tag}
                      </p>
                    </div>
                    <p
                      style={{ fontSize: vs(40), letterSpacing: vs(-0.5), lineHeight: 1.3 }}
                      className="font-['Bronkoh-Heavy',sans-serif] not-italic text-white whitespace-nowrap"
                    >
                      {level.title}
                    </p>
                  </div>

                  {/* Quote */}
                  <p
                    style={{ fontSize: vs(30), lineHeight: 1.2 }}
                    className="font-['Bronkoh-lightItalic','Bronkoh-Regular',sans-serif] italic text-white"
                  >
                    {level.quote}
                  </p>

                  {/* Body */}
                  {level.body(vs)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: vs(8),
              width: "100%",
            }}>
              {/* Arrow left */}
              <button
                onClick={() => goTo((currentPage - 1 + LEVELS.length) % LEVELS.length)}
                onMouseEnter={() => setPrevHovered(true)}
                onMouseLeave={() => setPrevHovered(false)}
                style={{
                  width: vs(40),
                  height: vs(40),
                  borderRadius: "999px",
                  backgroundColor: prevHovered ? "white" : "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  opacity: 1,
                  transition: "opacity 0.2s, background-color 0.15s ease",
                  flexShrink: 0,
                  padding: 0,
                }}
              >
                <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none">
                  <mask id="nng-back-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#nng-back-mask)">
                    <path d={modalSvg.pc8e8d80} fill={prevHovered ? "#3126B4" : "white"} style={{ transition: "fill 0.15s ease" }} />
                  </g>
                </svg>
              </button>

              {/* Pagination dots */}
              <div style={{ display: "flex", gap: vs(4), alignItems: "center" }}>
                {LEVELS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: vs(24),
                      height: vs(24),
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none">
                      {i === currentPage ? (
                        <circle cx="12" cy="12" r="10" fill="white" />
                      ) : (
                        <circle
                          cx="12" cy="12" r="8"
                          fill="white"
                          fillOpacity="0.4"
                          style={{ transition: "fill-opacity 0.15s ease" }}
                          className="hover:[fill-opacity:1]"
                        />
                      )}
                    </svg>
                  </button>
                ))}
              </div>

              {/* Arrow right */}
              <button
                onClick={() => goTo((currentPage + 1) % LEVELS.length)}
                onMouseEnter={() => setNextHovered(true)}
                onMouseLeave={() => setNextHovered(false)}
                style={{
                  width: vs(40),
                  height: vs(40),
                  borderRadius: "999px",
                  backgroundColor: nextHovered ? "white" : "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  opacity: 1,
                  transition: "opacity 0.2s, background-color 0.15s ease",
                  flexShrink: 0,
                  padding: 0,
                }}
              >
                <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none">
                  <mask id="nng-fwd-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#nng-fwd-mask)">
                    <path d={modalSvg.p11a80500} fill={nextHovered ? "#3126B4" : "white"} style={{ transition: "fill 0.15s ease" }} />
                  </g>
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}