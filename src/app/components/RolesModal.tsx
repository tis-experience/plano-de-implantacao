import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import modalSvg from "../../imports/ModalOverlay/svg-j25njvl7ht";
import { ROLES } from "./rolesData";
import { createSlideMetrics } from "../scaling";

interface RolesModalProps {
  open: boolean;
  initialIndex: number;
  onClose: () => void;
  scaleX: number;
  scaleY: number;
}

const PURPLE = "#3126b4";
const BLUE = "#036ef2";

export function RolesModal({ open, initialIndex, onClose, scaleX, scaleY }: RolesModalProps) {
  const { vx, vy, vs } = createSlideMetrics(scaleX, scaleY);

  const [currentPage, setCurrentPage] = useState(initialIndex);
  const directionRef = useRef(1);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseDownOutsideRef = useRef(false);
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeight, setContentHeight] = useState(0);
  const [closeHovered, setCloseHovered] = useState(false);
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  useEffect(() => {
    if (open) setCurrentPage(initialIndex);
  }, [open, initialIndex]);

  useLayoutEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => {
      const heights = measureRefs.current.filter(Boolean).map((el) => el!.scrollHeight);
      if (heights.length > 0) setContentHeight(Math.max(...heights));
    });
    return () => cancelAnimationFrame(id);
  }, [open, s, currentPage]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir * vx(40), opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
    exit: (dir: number) => ({ x: dir * -vx(40), opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } }),
  };

  const goTo = (idx: number) => {
    directionRef.current = idx > currentPage ? 1 : -1;
    setCurrentPage(idx);
  };

  const role = ROLES[currentPage];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="roles-overlay"
          data-roles-modal
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
            const outside = !!cardRef.current && !cardRef.current.contains(e.target as Node);
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
          <motion.div
            key="roles-card"
            ref={cardRef}
            initial={{ scale: 0.94, opacity: 0, y: vs(20) }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: vs(20) }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: vs(800),
              height: vy(720),
              padding: vs(64),
              borderRadius: vs(48),
              backgroundColor: PURPLE,
              display: "flex",
              flexDirection: "column",
              gap: vs(48),
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            <button
              type="button"
              aria-label="Fechar"
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
                padding: 0,
                transition: "background-color 0.15s ease",
              }}
            >
              <svg width={vs(32)} height={vs(32)} viewBox="0 0 32 32" fill="none" aria-hidden>
                <path d={modalSvg.peeed100} fill={closeHovered ? PURPLE : "white"} />
              </svg>
            </button>

            <motion.div
              style={{
                position: "absolute",
                visibility: "hidden",
                pointerEvents: "none",
                top: vs(64),
                left: vs(64),
                right: vs(64),
                zIndex: -1,
              }}
            >
              {ROLES.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    measureRefs.current[i] = el;
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: vs(24),
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <RoleModalContent role={item} vs={vs} />
                </div>
              ))}
            </motion.div>

            <motion.div
              style={{
                flex: "1 0 0",
                minHeight: 0,
                overflow: "hidden",
                height: contentHeight > 0 ? contentHeight : undefined,
              }}
            >
              <AnimatePresence mode="wait" custom={directionRef.current}>
                <motion.div
                  key={currentPage}
                  custom={directionRef.current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <RoleModalContent role={role} vs={vs} />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: vs(8),
                width: "100%",
                flexShrink: 0,
              }}
            >
              <button
                type="button"
                aria-label="Papel anterior"
                onClick={() => goTo((currentPage - 1 + ROLES.length) % ROLES.length)}
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
                  padding: 0,
                  transition: "background-color 0.15s ease",
                }}
              >
                <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d={modalSvg.pc8e8d80} fill={prevHovered ? PURPLE : "white"} />
                </svg>
              </button>

              <motion.div style={{ display: "flex", gap: vs(4), alignItems: "center" }}>
                {ROLES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para ${ROLES[i].title}`}
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
                    <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none" aria-hidden>
                      {i === currentPage ? (
                        <circle cx="12" cy="12" r="10" fill="white" />
                      ) : (
                        <circle cx="12" cy="12" r="8" fill="white" fillOpacity={0.4} />
                      )}
                    </svg>
                  </button>
                ))}
              </motion.div>

              <button
                type="button"
                aria-label="Próximo papel"
                onClick={() => goTo((currentPage + 1) % ROLES.length)}
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
                  padding: 0,
                  transition: "background-color 0.15s ease",
                }}
              >
                <svg width={vs(24)} height={vs(24)} viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d={modalSvg.p11a80500} fill={nextHovered ? PURPLE : "white"} />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RoleModalContent({
  role,
  vs,
}: {
  role: (typeof ROLES)[number];
  vs: (n: number) => number;
}) {
  return (
    <motion.div style={{ display: "flex", flexDirection: "column", gap: vs(24) }}>
      <p
        style={{
          margin: 0,
          fontFamily: "'Bronkoh-Heavy', sans-serif",
          fontSize: vs(40),
          lineHeight: 1.3,
          letterSpacing: vs(-0.5),
          color: "#ffffff",
        }}
      >
        {role.title}
      </p>
      <p
        style={{
          margin: 0,
          fontFamily: "'Bronkoh-lightItalic', 'Bronkoh-Regular', sans-serif",
          fontStyle: "italic",
          fontSize: vs(24),
          lineHeight: 1.3,
          letterSpacing: vs(0.25),
          color: "rgba(255,255,255,0.6)",
        }}
      >
        “{role.quote}”
      </p>
      <motion.div style={{ display: "flex", flexDirection: "column", gap: vs(12) }}>
        <p
          style={{
            margin: 0,
            fontFamily: "'Bronkoh-Heavy', sans-serif",
            fontSize: vs(26),
            lineHeight: 1.5,
            color: "#ffffff",
          }}
        >
          Responsabilidades
        </p>
        <motion.div style={{ display: "flex", flexDirection: "column", gap: vs(4) }}>
          {role.responsibilities.map((item) => (
            <motion.div
              key={item}
              style={{ display: "flex", gap: vs(12), alignItems: "flex-start", width: "100%" }}
            >
              <motion.div
                style={{ display: "flex", height: vs(32), alignItems: "center", flexShrink: 0 }}
              >
                <motion.div style={{ width: vs(10), height: vs(10), backgroundColor: BLUE }} />
              </motion.div>
              <p
                style={{
                  margin: 0,
                  flex: "1 0 0",
                  minWidth: 0,
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: vs(20),
                  lineHeight: 1.5,
                  color: "#ffffff",
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
