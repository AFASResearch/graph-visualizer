import { h } from "maquette";

import { EdgeData } from "../api";
import { NodeDimensions } from "../node-layout/node-common";
import { RenderedEdge } from "./edge-common";
import { intersectionWithEntity, renderAttributes } from "./edge-utils";

/**
 * Only works well at the bottom.
 */
export function renderAngularWithDiamond(
  data: EdgeData,
  highlighted: boolean,
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
        stroke: "var(--color-primary)",
        d: renderAngularPathWithDiamond(
          startPosition.x,
          startPosition.y,
          endPosition.x,
          endPosition.y
        ),
        ...renderAttributes(data, highlighted),
      },
      []
    ),
    decorations: undefined,
  };
}

function renderAngularPathWithDiamond(fromX: number, fromY: number, toX: number, toY: number) {
  let dy = toY - fromY - 16;
  return (
    "M" +
    fromX +
    "," +
    (fromY + 16) +
    " l-6,-8 l6,-8 l6,8 l-6,8" +
    " l 0," +
    dy +
    "L" +
    toX +
    "," +
    toY
  );
}
