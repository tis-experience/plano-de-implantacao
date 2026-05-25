import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import svgPaths from "../imports/01Capa/svg-9xym7sn689";
import backSvgPaths from "../imports/Back/svg-v4jzanzdmi";
import dragSvgPaths from "../imports/Drag/svg-nfjmokf13z";
import slide06SvgPaths from "../imports/06EstruturaEProcessoIdeal/svg-qr6s1d1r3a";
import { Slide02 } from "./components/Slide02";
import { Slide03 } from "./components/Slide03";
import { Slide04 } from "./components/Slide04";
import { Slide05 } from "./components/Slide05";
import { Slide06 } from "./components/Slide06";
import { Slide07Model } from "./components/Slide07Model";
import { Slide08DesignSystem } from "./components/Slide08DesignSystem";
import { Slide09Stack } from "./components/Slide09Stack";
import { Slide10TeamComposition } from "./components/Slide10TeamComposition";
import { Slide11Roles } from "./components/Slide11Roles";
import { Slide12AreaInteractions } from "./components/Slide12AreaInteractions";
import { Slide13RitosDeUX } from "./components/Slide13RitosDeUX";
import { ClosingSlide } from "./components/ClosingSlide";
import { StandardPlanSlide, type StandardPlanSlideData } from "./components/StandardPlanSlide";
import { createSlideMetrics } from "./scaling";

const TOTAL_SLIDES = 16;
const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;
const CLOSE_ICON_PATH = "M11.176 22.7L9.3 20.8333L14.124 16L9.3 11.2L11.176 9.33333L16 14.1537L20.7907 9.33333L22.6667 11.2L17.8427 16L22.6667 20.8333L20.7907 22.7L16 17.8797L11.176 22.7Z";
const REPEAT_ICON_PATH = "M35.3 12.65C32.4 9.75 28.4 8 24 8C15.15 8 8 15.15 8 24C8 32.85 15.15 40 24 40C31.45 40 37.7 34.9 39.45 28H35.25C33.6 32.65 29.15 36 24 36C17.35 36 12 30.65 12 24C12 17.35 17.35 12 24 12C27.3 12 30.25 13.35 32.4 15.5L26 22H40V8L35.3 12.65Z";
const INFOGRAPHIC_CURSOR_SIZE = 64;
const INFOGRAPHIC_CURSOR_ICON_SIZE = 40;
const LOGO_IDLE_X_RANGE = 0.42;
const LOGO_IDLE_Y_RANGE = 0.36;
const LOGO_MOUSE_TILT_MULTIPLIER = 1.32;
const LOGO_MOUSE_IDLE_DELAY_MS = 560;
const STANDARD_PLAN_SLIDES: StandardPlanSlideData[] = [
  { number: "14", eyebrow: "Como vamos medir", title: "Indicadores de sucesso", body: "AAA" },
  { number: "15", eyebrow: "AAAA", title: "Roadmap de implantação", body: "AAA", background: "#f4f5f7" },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [stageOffsetX, setStageOffsetX] = useState(0);
  const [stageOffsetY, setStageOffsetY] = useState(0);
  const [stageW, setStageW] = useState<number | string>("100%");
  const [stageH, setStageH] = useState<number | string>("100%");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorReady, setCursorReady] = useState(false);
  const [isLeftHalf, setIsLeftHalf] = useState(false);
  const [isTapping, setIsTapping] = useState(false);
  const [isNearInteractive, setIsNearInteractive] = useState(false);
  const [isOnInteractive, setIsOnInteractive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfographicExpanded, setIsInfographicExpanded] = useState(false);
  const [isDragAreaActive, setIsDragAreaActive] = useState(false);
  const [isDragCursorIconLatched, setIsDragCursorIconLatched] = useState(false);
  const [isExpandHover, setIsExpandHover] = useState(false);
  const [isNearCustomCursorTarget, setIsNearCustomCursorTarget] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  // Logo 3D tilt effect (distorção 3D)
  const logoX = useMotionValue(0);
  const logoY = useMotionValue(0);
  const logoSpringConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const logoSpringX = useSpring(logoX, logoSpringConfig);
  const logoSpringY = useSpring(logoY, logoSpringConfig);
  const logoRotateX = useTransform(logoSpringY, [-0.5, 0.5], [15, -15]);
  const logoRotateY = useTransform(logoSpringX, [-0.5, 0.5], [-15, 15]);
  const logoMouseActiveRef = useRef(false);
  const logoMouseIdleTimerRef = useRef<number | null>(null);

  const setLogoIdleTarget = (time: number) => {
    const t = time / 1000;
    const x =
      Math.sin(t * 0.82) * (LOGO_IDLE_X_RANGE * 0.82) +
      Math.sin(t * 0.35 + 1.7) * (LOGO_IDLE_X_RANGE * 0.18);
    const y =
      Math.cos(t * 0.71 + 0.8) * (LOGO_IDLE_Y_RANGE * 0.8) +
      Math.sin(t * 0.38 + 2.4) * (LOGO_IDLE_Y_RANGE * 0.2);

    logoX.set(x);
    logoY.set(y);
  };

  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (w >= 1440) {
        setScaleX(w / DESIGN_WIDTH);
        setScaleY(h / DESIGN_HEIGHT);
        setStageOffsetX(0);
        setStageOffsetY(0);
        setStageW("100%");
        setStageH("100%");
      } else {
        const scale = Math.min(w / DESIGN_WIDTH, h / DESIGN_HEIGHT);

        setScaleX(scale);
        setScaleY(scale);
        setStageOffsetX((w - DESIGN_WIDTH * scale) / 2);
        setStageOffsetY((h - DESIGN_HEIGHT * scale) / 2);
        setStageW(DESIGN_WIDTH * scale);
        setStageH(DESIGN_HEIGHT * scale);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Custom cursor ready after cover animations finish
  useEffect(() => {
    const timer = setTimeout(() => setCursorReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    let frameId: number;
    const tick = (time: number) => {
      if (!logoMouseActiveRef.current) {
        setLogoIdleTarget(time);
      }
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      if (logoMouseIdleTimerRef.current !== null) {
        window.clearTimeout(logoMouseIdleTimerRef.current);
      }
    };
  }, []);

  // Reset per-slide cursor flags when navigating away — slide-scoped onPointerLeave
  // doesn't fire on unmount, so the drag/expand cursors can get stuck otherwise.
  useEffect(() => {
    setIsDragAreaActive(false);
    setIsDragCursorIconLatched(false);
    setIsExpandHover(false);
    setIsNearCustomCursorTarget(false);
  }, [currentSlide]);

  useEffect(() => {
    if (isDragAreaActive) {
      setIsDragCursorIconLatched(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setIsDragCursorIconLatched(false), 260);
    return () => window.clearTimeout(timer);
  }, [isDragAreaActive]);

  const resetTransientCursorStates = () => {
    setIsDragAreaActive(false);
    setIsDragCursorIconLatched(false);
    setIsExpandHover(false);
    setIsNearCustomCursorTarget(false);
    setIsNearInteractive(false);
    setIsOnInteractive(false);
  };

  const goToSlide = (n: number) => {
    const nextSlide = Math.max(0, Math.min(TOTAL_SLIDES - 1, n));
    if (nextSlide !== currentSlide) resetTransientCursorStates();
    setCurrentSlide(nextSlide);
  };
  const goNext = () => goToSlide(currentSlide + 1);
  const goPrev = () => goToSlide(currentSlide - 1);

  // ── Navegação por teclado ──────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isInfographicExpanded) return;
      if (isModalOpen) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isModalOpen, isInfographicExpanded]);
  // ──────────────────────────────────────────────────────────────────────

  const PROXIMITY_BUFFER = 32; // px — custom cursor starts hiding before reaching element

  const isPointerOverDragCursorArea = (x: number, y: number) => {
    if (currentSlide !== 2 && currentSlide !== 11) return false;
    const target = document.elementFromPoint(x, y);
    const selector =
      currentSlide === 2
        ? '[data-drag-cursor-area="slide-3-carousel"]'
        : '[data-drag-cursor-area="slide-12-map-carousel"]';
    return Boolean(target?.closest(selector));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    setIsLeftHalf(e.clientX < window.innerWidth / 2);
    if (!cursorVisible) setCursorVisible(true);
    setIsDragAreaActive(isPointerOverDragCursorArea(e.clientX, e.clientY));

    // Calculate rotation regardless of current slide, though only slide 0 shows the logo
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xRatio = (clientX / innerWidth) - 0.5; // -0.5 to 0.5
    const yRatio = (clientY / innerHeight) - 0.5; // -0.5 to 0.5
    
    // Set values within the expected [-0.5, 0.5] range for useTransform
    logoMouseActiveRef.current = true;
    if (logoMouseIdleTimerRef.current !== null) {
      window.clearTimeout(logoMouseIdleTimerRef.current);
    }
    logoMouseIdleTimerRef.current = window.setTimeout(() => {
      logoMouseActiveRef.current = false;
    }, LOGO_MOUSE_IDLE_DELAY_MS);
    logoX.set(xRatio * LOGO_MOUSE_TILT_MULTIPLIER);
    logoY.set(yRatio * LOGO_MOUSE_TILT_MULTIPLIER);

    const els = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
    let near = false;
    let on = false;
    let nearCustomCursorTarget = false;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      const isNearElement =
        e.clientX >= r.left - PROXIMITY_BUFFER &&
        e.clientX <= r.right + PROXIMITY_BUFFER &&
        e.clientY >= r.top - PROXIMITY_BUFFER &&
        e.clientY <= r.bottom + PROXIMITY_BUFFER;

      if (isNearElement) {
        near = true;
        if (el instanceof HTMLElement && el.dataset.expandHotspot === "slide-6") {
          nearCustomCursorTarget = true;
        }
      }

      if (
        e.clientX >= r.left && e.clientX <= r.right &&
        e.clientY >= r.top  && e.clientY <= r.bottom
      ) { on = true; near = true; }
      if (near && on && nearCustomCursorTarget) break;
    }
    setIsNearInteractive(near);
    setIsOnInteractive(on);
    setIsNearCustomCursorTarget(nearCustomCursorTarget);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isInfographicExpanded) return;
    if (isModalOpen) return;
    const target = event.target instanceof Element ? event.target : null;
    // Ignora cliques na modal mesmo após fechar no mouseUp (antes do click disparar).
    if (target?.closest("[data-nng-modal], [data-roles-modal]")) return;
    if (target?.closest('button, a, input, select, textarea, [role="button"]')) return;

    const clickIsLeftHalf = event.clientX < window.innerWidth / 2;
    setIsLeftHalf(clickIsLeftHalf);

    if (isDragAreaActive) {
      if (isPointerOverDragCursorArea(event.clientX, event.clientY)) return;
      setIsDragAreaActive(false);
    }

    setIsTapping(true);
    setTimeout(() => setIsTapping(false), 180);

    if (currentSlide === TOTAL_SLIDES - 1 && !clickIsLeftHalf) {
      goToSlide(0);
      return;
    }

    if (currentSlide === 0 || !clickIsLeftHalf) {
      goNext();
    } else {
      goPrev();
    }
  };

  const isSlide0 = currentSlide === 0;
  const isClosingSlide = currentSlide === TOTAL_SLIDES - 1;
  const isDarkSlide = isSlide0 || isClosingSlide;
  const showBackCursor = currentSlide > 0 && isLeftHalf;
  const showRepeatCursor = isClosingSlide && !isLeftHalf;
  const isInfographicActionCursor = isInfographicExpanded || isExpandHover;
  const isInteractiveSuppressingCursor = isOnInteractive && !isNearCustomCursorTarget;
  const showDragCursorIcon = isDragAreaActive || isDragCursorIconLatched;

  useEffect(() => {
    if (isInfographicExpanded || currentSlide !== 5) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const hotspot = document
        .elementFromPoint(mouseX.get(), mouseY.get())
        ?.closest('[data-expand-hotspot="slide-6"]');

      setIsExpandHover(Boolean(hotspot));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [currentSlide, isInfographicExpanded, mouseX]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setCursorVisible(false);
        setIsDragAreaActive(false);
        setIsDragCursorIconLatched(false);
        setIsNearInteractive(false);
        setIsOnInteractive(false);
        setIsNearCustomCursorTarget(false);
        logoMouseActiveRef.current = false;
        if (logoMouseIdleTimerRef.current !== null) {
          window.clearTimeout(logoMouseIdleTimerRef.current);
        }
      }}
      onMouseEnter={() => setCursorVisible(true)}
      onClickCapture={handleClick}
      style={{ backgroundColor: isDarkSlide ? "#04165d" : "#ffffff" }}
      className={`w-screen h-screen overflow-hidden relative select-none transition-colors duration-500 ${isInfographicExpanded ? "cursor-none" : (isModalOpen ? "cursor-auto" : (isInteractiveSuppressingCursor ? "" : "cursor-none"))}`}
    >
      <div
        style={{
          position: "absolute",
          left: stageOffsetX,
          top: stageOffsetY,
          width: stageW,
          height: stageH,
          overflow: "hidden",
        }}
      >
      <AnimatePresence mode="wait">
        {/* ─────────────── SLIDE 1 — Cover ─────────────── */}
        {currentSlide === 0 && (
          <motion.div
            key="slide-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                left: vx(120),
                top: `calc(35% - ${vy(151)}px)`,
                transform: "translateY(-50%)",
              }}
              className="absolute flex flex-col items-start"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ fontSize: vs(24), letterSpacing: vs(1) }}
                className="font-['Bronkoh-Regular',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
              >
                Planejamento da área
              </motion.p>

              <div style={{ height: vy(40) }} />

              <div
                style={{ fontSize: vs(168), letterSpacing: vs(-5) }}
                className="font-['Bronkoh-Heavy',sans-serif] not-italic text-white whitespace-nowrap"
              >
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  style={{ lineHeight: 0.92 }}
                >
                  TIS Experience
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  style={{ lineHeight: 0.92 }}
                >
                  Engineering
                </motion.p>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ left: vx(120), bottom: vy(96), gap: vx(20) }}
              className="absolute flex items-center"
            >
              <p
                style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
                className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-[#036ef2] uppercase whitespace-nowrap"
              >
                2026
              </p>
              <div style={{ width: vx(24), height: vy(2) }} className="overflow-clip relative shrink-0">
                <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" />
              </div>
              <p
                style={{ fontSize: vs(14), letterSpacing: vs(1.5) }}
                className="font-['Bronkoh-SemiBold',sans-serif] not-italic text-white uppercase whitespace-nowrap"
              >
                Kickoff
              </p>
            </motion.div>

            {/* Decorative SVG */}
            <motion.div
              style={{
                bottom: vy(80),
                right: vx(80),
                width: vs(540),
                height: vs(538),
                perspective: 1200,
              }}
              className="absolute pointer-events-none"
            >
              <motion.svg
                style={{
                  rotateX: logoRotateX,
                  rotateY: logoRotateY,
                  transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0, x: vs(-80) }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 540 538.358"
              >
                <g>
                  <path d={svgPaths.p26e5dc80} fill="#036EF2" />
                  <path d={svgPaths.p2da8a80} fill="#036EF2" />
                  <path d={svgPaths.p21370b80} fill="#036EF2" />
                </g>
              </motion.svg>
            </motion.div>
          </motion.div>
        )}

        {/* ─────────────── SLIDE 2 ─────────────── */}
        {currentSlide === 1 && (
          <Slide02
            key="slide-2"
            scaleX={scaleX}
            scaleY={scaleY}
            onPrev={goPrev}
            onNext={goNext}
            onModalChange={setIsModalOpen}
          />
        )}

        {/* ─────────────── SLIDE 3 ─────────────── */}
        {currentSlide === 2 && (
          <Slide03
            key="slide-3"
            scaleX={scaleX}
            scaleY={scaleY}
            onPrev={goPrev}
            onNext={goNext}
            onDragAreaHover={setIsDragAreaActive}
          />
        )}

        {/* ─────────────── SLIDE 4 ─────────────── */}
        {currentSlide === 3 && (
          <Slide04
            key="slide-4"
            scaleX={scaleX}
            scaleY={scaleY}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}

        {/* ─────────────── SLIDE 5 ─────────────── */}
        {currentSlide === 4 && (
          <Slide05
            key="slide-5"
            scaleX={scaleX}
            scaleY={scaleY}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}

        {/* ─────────────── SLIDE 6 ─────────────── */}
        {currentSlide === 5 && (
          <Slide06
            key="slide-6"
            scaleX={scaleX}
            scaleY={scaleY}
            onPrev={goPrev}
            onNext={goNext}
            onExpandedChange={setIsInfographicExpanded}
            onExpandHoverChange={setIsExpandHover}
          />
        )}

        {/* ─────────────── SLIDE 7 ─────────────── */}
        {currentSlide === 6 && (
          <Slide07Model
            key="slide-7"
            scaleX={scaleX}
            scaleY={scaleY}
          />
        )}

        {/* ─────────────── SLIDE 8 ─────────────── */}
        {currentSlide === 7 && (
          <Slide08DesignSystem
            key="slide-8"
            scaleX={scaleX}
            scaleY={scaleY}
          />
        )}

        {/* ─────────────── SLIDE 9 ─────────────── */}
        {currentSlide === 8 && (
          <Slide09Stack
            key="slide-9"
            scaleX={scaleX}
            scaleY={scaleY}
          />
        )}

        {/* ─────────────── SLIDE 10 ─────────────── */}
        {currentSlide === 9 && (
          <Slide10TeamComposition
            key="slide-10"
            scaleX={scaleX}
            scaleY={scaleY}
          />
        )}

        {/* ─────────────── SLIDE 11 ─────────────── */}
        {currentSlide === 10 && (
          <Slide11Roles
            key="slide-11"
            scaleX={scaleX}
            scaleY={scaleY}
            onModalChange={setIsModalOpen}
          />
        )}

        {/* ─────────────── SLIDE 12 ─────────────── */}
        {currentSlide === 11 && (
          <Slide12AreaInteractions
            key="slide-12"
            scaleX={scaleX}
            scaleY={scaleY}
            onDragAreaHover={setIsDragAreaActive}
          />
        )}

        {/* ─────────────── SLIDE 13 ─────────────── */}
        {currentSlide === 12 && (
          <Slide13RitosDeUX
            key="slide-13"
            scaleX={scaleX}
            scaleY={scaleY}
          />
        )}

        {/* ─────────────── SLIDES 14–15 ─────────────── */}
        {currentSlide >= 13 && currentSlide <= 14 && (
          <StandardPlanSlide
            key={`slide-${currentSlide + 1}`}
            scaleX={scaleX}
            scaleY={scaleY}
            {...STANDARD_PLAN_SLIDES[currentSlide - 13]}
          />
        )}

        {/* ─────────────── SLIDE 16 — Closing ─────────────── */}
        {currentSlide === 15 && (
          <ClosingSlide
            key="slide-16-closing"
            scaleX={scaleX}
            scaleY={scaleY}
            logoRotateX={logoRotateX}
            logoRotateY={logoRotateY}
          />
        )}
      </AnimatePresence>
      </div>

      {/* ── Custom cursor ── */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 8px 24px 0 rgba(5, 28, 117, 0.16), 0 2px 4px 0 rgba(5, 28, 117, 0.24)",
        }}
        animate={{
          opacity: isInfographicActionCursor ? (cursorReady && cursorVisible ? 1 : 0) : (!isModalOpen && cursorReady && cursorVisible && !isInteractiveSuppressingCursor ? 1 : 0),
          scale: isInfographicActionCursor ? (cursorReady && cursorVisible ? 1 : 0.4) : (isInteractiveSuppressingCursor ? 0 : (isTapping ? 0.82 : (cursorReady && cursorVisible ? 1 : 0.4))),
          width: isInfographicActionCursor ? vs(INFOGRAPHIC_CURSOR_SIZE) : (isDragAreaActive ? vs(80) : (showBackCursor ? vs(56) : vs(80))),
          height: isInfographicActionCursor ? vs(INFOGRAPHIC_CURSOR_SIZE) : (isDragAreaActive ? vs(40) : (showBackCursor ? vs(56) : vs(80))),
        }}
        transition={{
          opacity: { duration: isInteractiveSuppressingCursor && !isInfographicActionCursor ? 0.18 : 0.3, ease: "easeInOut" },
          scale: {
            duration: isInteractiveSuppressingCursor && !isInfographicActionCursor ? 0.22 : (isTapping ? 0.12 : 0.3),
            ease: isInteractiveSuppressingCursor && !isInfographicActionCursor ? "easeIn" : (isTapping ? "easeOut" : undefined),
            type: (!isInteractiveSuppressingCursor && !isTapping) || isInfographicActionCursor ? "spring" : "tween",
            stiffness: 300,
          },
          width: { duration: 0.25, ease: "easeInOut" },
          height: { duration: 0.25, ease: "easeInOut" },
        }}
        className="flex items-center justify-center bg-[#036ef2] rounded-full"
      >
        {isInfographicActionCursor ? (
          <div
            style={{
              position: "relative",
              width: vs(INFOGRAPHIC_CURSOR_ICON_SIZE),
              height: vs(INFOGRAPHIC_CURSOR_ICON_SIZE),
            }}
          >
            <motion.div
              animate={{
                opacity: isInfographicExpanded ? 1 : 0,
                rotate: isInfographicExpanded ? 0 : -32,
              }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width={vs(INFOGRAPHIC_CURSOR_ICON_SIZE)} height={vs(INFOGRAPHIC_CURSOR_ICON_SIZE)} viewBox="0 0 32 32" fill="none">
                <path d={CLOSE_ICON_PATH} fill="white" />
              </svg>
            </motion.div>
            <motion.div
              animate={{
                opacity: isInfographicExpanded ? 0 : 1,
                rotate: isInfographicExpanded ? 32 : 0,
              }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width={vs(INFOGRAPHIC_CURSOR_ICON_SIZE)} height={vs(INFOGRAPHIC_CURSOR_ICON_SIZE)} viewBox="0 0 24 24" fill="none">
                <mask id="cursor-expand-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#cursor-expand-mask)">
                  <path d={slide06SvgPaths.p2e4a3200} fill="white" />
                </g>
              </svg>
            </motion.div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {showDragCursorIcon ? (
              <motion.div
                key="drag"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="flex items-center justify-center"
                style={{ gap: vs(2) }}
              >
                <svg width={vs(18)} height={vs(18)} viewBox="0 0 24 24" fill="none">
                  <mask id="cursor-drag-back" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#cursor-drag-back)">
                    <path d={dragSvgPaths.p90d8b80} fill="white" />
                  </g>
                </svg>
                <svg width={vs(18)} height={vs(18)} viewBox="0 0 24 24" fill="none">
                  <mask id="cursor-drag-fwd" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: "alpha" }}>
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#cursor-drag-fwd)">
                    <path d={dragSvgPaths.p23cbb200} fill="white" />
                  </g>
                </svg>
              </motion.div>
            ) : showBackCursor ? (
              <motion.div
                key="back"
                initial={{ opacity: 0, rotate: 45, scale: 0.4 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -45, scale: 0.4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <svg width={vs(32)} height={vs(32)} viewBox="0 0 32 32" fill="none">
                  <mask id="cursor-back-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32" style={{ maskType: "alpha" }}>
                    <rect width="32" height="32" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#cursor-back-mask)">
                    <path d={backSvgPaths.p1cb876f0} fill="white" />
                  </g>
                </svg>
              </motion.div>
            ) : showRepeatCursor ? (
              <motion.div
                key="repeat"
                initial={{ opacity: 0, rotate: -45, scale: 0.4 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <svg width={vs(48)} height={vs(48)} viewBox="0 0 48 48" fill="none">
                  <path d={REPEAT_ICON_PATH} fill="white" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="forward"
                initial={{ opacity: 0, rotate: -45, scale: 0.4 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <svg width={vs(48)} height={vs(48)} viewBox="0 0 48 48" fill="none">
                  <mask id="cursor-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48" style={{ maskType: "alpha" }}>
                    <rect width="48" height="48" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#cursor-mask)">
                    <path d={svgPaths.pa0c5900} fill="white" />
                  </g>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}
