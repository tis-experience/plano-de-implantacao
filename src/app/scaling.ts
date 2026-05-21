/** Tokens de tipografia no Figma a partir de 14px; não renderizar abaixo disso. */
export const MIN_FONT_PX = 14;

function scaleValue(n: number, scale: number): number {
  const scaled = n * scale;
  if (n >= MIN_FONT_PX && scaled < MIN_FONT_PX) return MIN_FONT_PX;
  return scaled;
}

/**
 * Métricas de slide: vx/vy seguem scaleX/scaleY; vs usa min(scaleX, scaleY)
 * com piso de 14px apenas para tokens tipográficos (n >= 14).
 */
export function createSlideMetrics(scaleX: number, scaleY: number) {
  const s = Math.min(scaleX, scaleY);

  return {
    s,
    vx: (n: number) => n * scaleX,
    vy: (n: number) => n * scaleY,
    vs: (n: number) => scaleValue(n, s),
  };
}

/** Escala de texto alternativa (ex.: governança no slide 8). */
export function scaleTypography(n: number, scale: number): number {
  return scaleValue(n, scale);
}
