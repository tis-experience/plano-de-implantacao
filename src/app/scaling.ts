/**
 * Slide layout uses independent scaleX / scaleY on viewports >= 1440px.
 * Typography must grow on ultrawide screens where scaleX >> scaleY.
 */
export function createSlideMetrics(scaleX: number, scaleY: number) {
  const s = Math.min(scaleX, scaleY);
  const stretch = scaleY > 0 ? scaleX / scaleY : 1;
  const typeBoost =
    stretch > 1.05 ? Math.min(1 + (stretch - 1) * 0.48, 1.34) : 1;
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
