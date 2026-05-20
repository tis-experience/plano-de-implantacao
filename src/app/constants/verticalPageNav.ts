export function cycleVerticalPage(current: number, delta: number, pageCount: number) {
  return (current + delta + pageCount) % pageCount;
}

export function resolveVerticalPage(next: number, current: number, pageCount: number) {
  const target = ((next % pageCount) + pageCount) % pageCount;
  if (target === current) return { target, direction: 0 as const };

  const delta = (target - current + pageCount) % pageCount;
  return { target, direction: delta === 1 ? (1 as const) : (-1 as const) };
}
