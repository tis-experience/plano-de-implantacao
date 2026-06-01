export function cycleVerticalPage(current: number, delta: number, pageCount: number) {
  return (current + delta + pageCount) % pageCount;
}

export function resolveVerticalPage(next: number, current: number, pageCount: number) {
  const target = ((next % pageCount) + pageCount) % pageCount;
  if (target === current) return { target, direction: 0 as const };

  // Usa o passo pedido (next vs current), não a distância modular — evita
  // tratar 1→0 em slides de 2 páginas como avanço em vez de retrocesso.
  const direction = next > current ? (1 as const) : (-1 as const);
  return { target, direction };
}
