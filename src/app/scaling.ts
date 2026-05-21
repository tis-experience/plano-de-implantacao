/** Métricas de slide: vx/vy seguem scaleX/scaleY; vs usa min(scaleX, scaleY). */
export function createSlideMetrics(scaleX: number, scaleY: number) {
  const s = Math.min(scaleX, scaleY);

  return {
    s,
    vx: (n: number) => n * scaleX,
    vy: (n: number) => n * scaleY,
    vs: (n: number) => n * s,
  };
}
