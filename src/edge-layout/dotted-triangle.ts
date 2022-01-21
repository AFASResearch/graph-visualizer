import { h } from "maquette";

import { EdgeData } from "../api";
import { NodeDimensions } from "../node-layout/node-common";
import { RenderedEdge } from "./edge-common";
import { intersectionWithEntity, renderAttributes } from "./edge-utils";

const sizeLength = 8;
const halfSizeWidth = 4.6;

export function renderDottedTriangle(
  data: EdgeData,
  highlighted: boolean,
  from: NodeDimensions,
  to: NodeDimensions
): RenderedEdge {
  let start = from.center;
  let end = intersectionWithEntity(start, to);
  let dx = end.x - start.x;
  let dy = end.y - start.y;

  let length = Math.hypot(dx, dy) || 0.01;
  let ndx = dx / length;
  let ndy = dy / length;

  let centerPos = `${end.x - sizeLength * ndx},${end.y - sizeLength * ndy}`;

  return {
    line: h("path", {
      key: data,
      "stroke-width": "1",
      stroke: "var(--color-primary)",
      "stroke-dasharray": "2 1",
      d:
        `M${centerPos}` +
        ` l${ndy * halfSizeWidth},${-ndx * halfSizeWidth}` +
        ` L${end.x},${end.y}` +
        ` M${centerPos}` +
        ` l${-ndy * halfSizeWidth},${ndx * halfSizeWidth}` +
        ` L${end.x},${end.y}` +
        ` M${centerPos}` +
        ` L${start.x},${start.y}`,
      ...renderAttributes(data, highlighted),
    }),
    decorations: undefined,
  };
}
