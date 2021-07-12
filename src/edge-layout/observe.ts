import { h } from "maquette";

import { EdgeData } from "../api";
import { NodeDimensions } from "../node-layout/node-common";
import { RenderedEdge } from "./edge-common";
import { intersectionWithEntity } from "./edge-utils";

const sizeLength = 20;
const halfSizeWidth = 4;
const offset = 12;

export function renderObserve(
  data: EdgeData,
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

  let centerPos = `${end.x - (sizeLength + offset) * ndx},${end.y - (sizeLength + offset) * ndy}`;

  return {
    line: h("path", {
      key: data,
      "stroke-width": "1",
      stroke: "black",
      d:
        `M${centerPos}` +
        ` l${ndx * sizeLength + ndy * halfSizeWidth},${ndy * sizeLength - ndx * halfSizeWidth}` +
        ` M${centerPos}` +
        ` l${ndx * sizeLength - ndy * halfSizeWidth},${ndy * sizeLength + ndx * halfSizeWidth}` +
        ` l${ndy * halfSizeWidth * 2},${-ndx * halfSizeWidth * 2}` +
        ` M${centerPos}` +
        ` L${start.x},${start.y}`,
    }),
    decorations: undefined,
  };
}
