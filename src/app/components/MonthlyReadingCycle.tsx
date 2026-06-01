import type { CSSProperties } from "react";
import monthlyReadingCycleImage from "../../assets/slide14/monthly-reading-cycle.svg";

const DESIGN_W = 344;
const DESIGN_H = 226;

type Metrics = {
  vs: (n: number) => number;
};

export function MonthlyReadingCycle({
  metrics,
  style,
}: {
  metrics: Metrics;
  style?: CSSProperties;
}) {
  const { vs } = metrics;
  const width = vs(DESIGN_W);
  const height = vs(DESIGN_H);

  return (
    <img
      src={monthlyReadingCycleImage}
      alt=""
      aria-hidden
      width={width}
      height={height}
      style={{ display: "block", flexShrink: 0, ...style }}
    />
  );
}
