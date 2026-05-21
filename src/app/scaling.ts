/**
 * On viewports >= 1440px the stage stretches horizontally (scaleX > scaleY).
 * Typography uses typeScale so fonts grow on ultrawide screens; layout keeps vx/vy.
 */
export function createSlideMetrics(scaleX: number, scaleY: number) {
  const s = Math.min(scaleX, scaleY);
  const stretch = scaleY > 0 ? scaleX / scaleY : 1;
  const typeBoost =
    stretch > 1.05 ? Math.min(1 + (stretch - 1) * 0.38, 1.28) : 1;
  const typeScale = s * typeBoost;

  return {
    s,
    typeScale,
    stretch,
    vx: (n: number) => n * scaleX,
    vy: (n: number) => n * scaleY,
    vs: (n: number) => n * typeScale,
  };
}
