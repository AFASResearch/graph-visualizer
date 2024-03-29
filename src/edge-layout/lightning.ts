import { h } from "maquette";

import { EdgeData } from "../api";
import { NodeDimensions } from "../node-layout/node-common";
import { RenderedEdge } from "./edge-common";
import { renderAttributes } from "./edge-utils";

const diameter = 12;

export function renderLightning(
  data: EdgeData,
  highlighted: boolean,
  from: NodeDimensions,
  to: NodeDimensions
): RenderedEdge {
  let start = from.center;
  let end = to.center;
  let dx = end.x - start.x;
  let dy = end.y - start.y;
  let length = Math.hypot(dx, dy) || 0.01;
  let ndx = dx / length;
  let ndy = dy / length;
  if (from.diameter) {
    start = { x: start.x + (ndx * from.diameter) / 2, y: start.y + (ndy * from.diameter) / 2 };
  }
  if (to.diameter) {
    end = { x: end.x - (ndx * to.diameter) / 2, y: end.y - (ndy * to.diameter) / 2 };
  }
  if (from.diameter || to.diameter) {
    dx = end.x - start.x;
    dy = end.y - start.y;
  }
  let centerDx = -ndy * diameter - 2 * ndx * diameter;
  let centerDy = ndx * diameter - 2 * ndy * diameter;
  let firstLastDx = (dx - centerDx) / 2;
  let firstLastDy = (dy - centerDy) / 2;

  return {
    line: h("path", {
      key: data,
      "stroke-width": "1",
      stroke: "var(--color-primary)",
      d:
        `M${start.x},${start.y}` +
        ` l${firstLastDx},${firstLastDy}` +
        ` l${centerDx},${centerDy}` +
        ` l${firstLastDx},${firstLastDy}`,
      ...renderAttributes(data, highlighted),
    }),
    decorations: undefined,
  };
}
