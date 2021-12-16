import { h } from "maquette";

import { EdgeData } from "../api";
import { NodeDimensions } from "../node-layout/node-common";
import { RenderedEdge } from "./edge-common";
import { intersectionWithEntity, renderAttributes, renderLabel } from "./edge-utils";

export function renderArrow(
  data: EdgeData,
  from: NodeDimensions,
  to: NodeDimensions
): RenderedEdge {
  let startPosition = intersectionWithEntity(to.center, from);
  let endPosition = intersectionWithEntity(from.center, to);
  return {
    line: h(
      "path",
      {
        key: data,
        "stroke-width": "1",
        stroke: "black",
        d: renderArrowLine(startPosition.x, startPosition.y, endPosition.x, endPosition.y),
        ...renderAttributes(data),
      },
      []
    ),
    decorations: [
      renderLabel(data.fromLabel, startPosition, from),
      renderLabel(data.toLabel, endPosition, to),
    ],
  };
}

function renderArrowLine(fromX: number, fromY: number, toX: number, toY: number) {
  let dx = toX - fromX;
  let dy = toY - fromY;
  let length = Math.hypot(dx, dy) || 0.01;
  let ndx = dx / length;
  let ndy = dy / length;
  return (
    "M" +
    toX +
    "," +
    toY +
    " l" +
    (-8 * ndx - 3 * ndy) +
    "," +
    (-8 * ndy + 3 * ndx) +
    " m" +
    (8 * ndx + 3 * ndy) +
    "," +
    (8 * ndy - 3 * ndx) +
    " l" +
    (-8 * ndx + 3 * ndy) +
    "," +
    (-8 * ndy - 3 * ndx) +
    " m" +
    (8 * ndx - 3 * ndy) +
    "," +
    (8 * ndy + 3 * ndx) +
    " l" +
    -dx +
    "," +
    -dy
  );
}
