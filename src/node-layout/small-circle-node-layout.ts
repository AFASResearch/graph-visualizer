import { h } from "maquette";

import { NodeData, NodePosition } from "../api";
import { renderAttributes } from "../edge-layout/edge-utils";
import { XY } from "../interfaces";
import { NodeDimensions, RenderedNode } from "./node-common";

const diameter = 80;

export function renderSmallCircleNodeLayout(
  data: NodeData,
  highlighted: boolean,
  position: NodePosition,
  dragPosition: XY | undefined,
  mouseDownEventHandler: (evt: MouseEvent) => void
): RenderedNode {
  let center: XY = dragPosition ?? position;

  let dimensions: NodeDimensions = {
    center,
    left: center.x - diameter / 2,
    right: center.x + diameter / 2,
    bottom: center.y + diameter / 2,
    top: center.y - diameter / 2,
    height: diameter,
    width: diameter,
    diameter,
  };

  return {
    dimensions,
    vNode: h(
      "circle",
      {
        key: data,
        cx: center.x,
        cy: center.y,
        r: diameter / 2,
        fill: "var(--color-background)",
        stroke: "var(--color-primary)",
        "stroke-width": 1,
        "data-nodetype": data.typeName,
        title: data.displayName,
        onmousedown: mouseDownEventHandler,
        ...renderAttributes(data, highlighted),
      },
      [h("title", { id: "unique-id" }, [data.displayName])]
    ),
  };
}
