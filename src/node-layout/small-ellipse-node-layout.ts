import { h } from "maquette";

import { NodeData, NodePosition } from "../api";
import { renderAttributes } from "../edge-layout/edge-utils";
import { XY } from "../interfaces";
import { NodeDimensions, RenderedNode } from "./node-common";

const diameterWidth = 160;
const diameterHeight = 50;

export function renderSmallEllipseNodeLayout(
  data: NodeData,
  highlighted: boolean,
  position: NodePosition,
  dragPosition: XY | undefined,
  mouseDownEventHandler: (evt: MouseEvent) => void
): RenderedNode {
  let center: XY = dragPosition ?? position;

  let dimensions: NodeDimensions = {
    center,
    left: center.x - diameterWidth / 2,
    right: center.x + diameterWidth / 2,
    bottom: center.y + diameterHeight / 2,
    top: center.y - diameterHeight / 2,
    height: diameterHeight,
    width: diameterWidth,
    diameterX: diameterWidth,
    diameterY: diameterHeight,
  };

  let title = data.shortName ?? data.displayName;

  return {
    dimensions,
    vNode: h(
      "g",
      {
        key: position,
        cursor: "move",
        transform: `translate(${dimensions.left},${dimensions.top})`,
        "data-nodetype": data.typeName,
        onmousedown: mouseDownEventHandler,
        ...renderAttributes(data, highlighted),
      },
      [
        h("ellipse", {
          key: data,
          cx: diameterWidth / 2,
          cy: diameterHeight / 2,
          rx: diameterWidth / 2,
          ry: diameterHeight / 2,
          fill: "white",
          stroke: "black",
          "stroke-width": 1,
          "data-nodetype": data.typeName,
          title: data.displayName,
          onmousedown: mouseDownEventHandler,
        }),
        h(
          "text",
          {
            "font-size": "18",
            "text-anchor": "middle",
            lengthAdjust: "spacingAndGlyphs",
            textLength: title.length > 16 ? (diameterWidth - 20).toString() : undefined, // pragmatic way to only shrink, never grow
            x: diameterWidth / 2,
            y: diameterHeight / 2 + 5,
            "stroke-width": "0",
            "font-family": "Arial",
            fill: "white",
            "font-weight": "400",
          },
          [title]
        ),
        h("title", { id: "unique-id" }, [data.displayName]),
      ]
    ),
  };
}
