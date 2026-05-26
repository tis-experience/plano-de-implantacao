export const INTERACTIVE_HOVER_BOX_SHADOW =
  "0 8px 24px 0 rgba(5, 28, 117, 0.16), 0 2px 4px 0 rgba(5, 28, 117, 0.24)";

export const INTERACTIVE_HOVER_TRANSITION =
  "background-color 0.24s ease, color 0.24s ease, box-shadow 0.24s ease, fill 0.24s ease";

/** Mesmo easing do ExpandButton (Slide 06): círculo cresce no hover */
export const INTERACTIVE_HOVER_GROW_TRANSITION = {
  duration: 0.24,
  ease: [0.22, 1, 0.36, 1] as const,
};

/** 40px → 56px no hover (setas); botões maiores crescem ~12,5% */
export function interactiveCircleHoverSize(restSize: number) {
  if (restSize <= 40) {
    return Math.round(restSize * (56 / 40));
  }
  return Math.round(restSize * 1.125);
}
