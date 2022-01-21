import { h } from "maquette";

import { NodeData, NodePosition } from "../api";
import { renderAttributes } from "../edge-layout/edge-utils";
import { XY } from "../interfaces";
import { NodeDimensions, RenderedNode } from "./node-common";

const dbRadiusWidth = 80;
const dbTopRadiusHeight = 10;

export function renderDatabaseNodeLayout(
  data: NodeData,
  highlighted: boolean,
  position: NodePosition,
  dragPosition: XY | undefined,
  mouseDownEventHandler: (evt: MouseEvent) => void
): RenderedNode {
  let center: XY = dragPosition ?? position;

  let dimensions: NodeDimensions = {
    center,
    left: center.x - dbRadiusWidth,
    right: center.x + dbRadiusWidth,
    bottom: center.y + dbTopRadiusHeight * 4,
    top: center.y - dbTopRadiusHeight * 4,
    height: dbTopRadiusHeight * 8,
    width: dbRadiusWidth * 2,
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
        h("title", { id: "unique-id" }, [data.displayName]),
        h("rect", {
          width: dimensions.width,
          height: dbTopRadiusHeight * 6,
          y: dbTopRadiusHeight,
          fill: "var(--color-background)",
          stroke: "var(--color-primary)",
          filter: "none",
        }),
        h("ellipse", {
          key: data,
          cx: dbRadiusWidth,
          cy: dbTopRadiusHeight,
          rx: dbRadiusWidth,
          ry: dbTopRadiusHeight,
          fill: "var(--color-background)",
          stroke: "var(--color-primary)",
          "stroke-width": 1,
          title: data.displayName,
          onmousedown: mouseDownEventHandler,
        }),
        h("ellipse", {
          key: data,
          cx: dbRadiusWidth,
          cy: dbTopRadiusHeight * 7,
          rx: dbRadiusWidth,
          ry: dbTopRadiusHeight,
          fill: "var(--color-background)",
          stroke: "var(--color-primary)",
          "stroke-width": 1,
          title: data.displayName,
          onmousedown: mouseDownEventHandler,
        }),
        h(
          "text",
          {
            "font-size": "18",
            "text-anchor": "middle",
            lengthAdjust: "spacingAndGlyphs",
            textLength: title.length > 16 ? (dimensions.width - 20).toString() : undefined, // pragmatic way to only shrink, never grow
            x: dimensions.width / 2,
            y: dbTopRadiusHeight * 4.5,
            "stroke-width": "0",
            "font-family": "Arial",
            fill: "var(--color-primary)",
            "font-weight": "400",
          },
          [title]
        ),
        h("title", { id: "unique-id" }, [data.displayName]),
      ]
    ),
  };
}
