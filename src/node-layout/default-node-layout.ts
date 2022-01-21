import { h } from "maquette";

import { NodeData, NodePosition } from "../api";
import { renderAttributes } from "../edge-layout/edge-utils";
import { XY } from "../interfaces";
import { NodeDimensions, RenderedNode } from "./node-common";

const DEFAULT_WIDTH = 230;
const DEFAULT_FONT_SIZE = 18;
const SMALLER_FONT_SIZE = 12;

/**
 * Instances only live shortly during the render cycle, so edges can position themselves accordingly
 */
export function renderDefaultNodeLayout(
  data: NodeData,
  highlighted: boolean,
  position: NodePosition,
  dragPosition: XY | undefined,
  mouseDownEventHandler: (evt: MouseEvent) => void
): RenderedNode {
  let width: number = DEFAULT_WIDTH;
  let height = 70;
  let fontSize = DEFAULT_FONT_SIZE;
  let center: XY = dragPosition ?? position;

  let dimensions: NodeDimensions = {
    center,
    left: center.x - width / 2,
    right: center.x + width / 2,
    bottom: center.y + height / 2,
    top: center.y - height / 2,
    height: height,
    width: width,
  };

  let safeTitle = makeSafeTitle(data.shortName ?? data.displayName);

  return {
    dimensions,
    vNode: h(
      "g",
      {
        key: position,
        cursor: "move",
        fill: "var(--color-background)",
        stroke: "var(--color-primary)",
        transform: `translate(${dimensions.left},${dimensions.top})`,
        "data-nodetype": data.typeName,
        onmousedown: mouseDownEventHandler,
        ...renderAttributes(data, highlighted),
      },
      [
        h("rect", {
          width: width.toString(),
          height: height.toString(),
          filter: "none",
          rx: "6",
        }),
        h("path", {
          d: "M 0 20 " + width + " 20",
          stroke: "var(--color-primary)",
          "stroke-width": "1",
        }),
        h("path", {
          d: "M0,6 Q0,0 6,0 l" + (width - 12) + ",0 q6,0 6,6 l0,14 L0,20 0,6z",
          fill: "var(--color-background)",
          stroke: "var(--color-primary)",
          "data-nodeelement": "title",
        }),
        h(
          "text",
          {
            "font-size": "14",
            x: "5",
            y: "13",
            "stroke-width": "0",
            "font-family": "Arial",
            fill: "var(--color-primary)",
            "font-weight": "400",
          },
          [data.typeName]
        ),
        h(
          "text",
          {
            "text-anchor": "middle",
            "font-size": fontSize.toString(),
            lengthAdjust: "spacingAndGlyphs",
            textLength: safeTitle.length > 24 ? "210" : undefined, // pragmatic way to only shrink, never grow
            x: (width / 2).toString(),
            y: "0",
            "stroke-width": "0",
            dy: (height / 2 + 10).toString(),
            "font-family": "Arial",
            fill: "var(--color-secondary)",
            "font-weight": "400",
          },
          [makeSafeTitle(safeTitle)]
        ),
        data.shortName
          ? h(
              "text",
              {
                "text-anchor": "middle",
                "font-size": SMALLER_FONT_SIZE.toString(),
                lengthAdjust: "spacingAndGlyphs",
                textLength: data.displayName.length > 24 ? "210" : undefined, // pragmatic way to only shrink, never grow
                x: (width / 2).toString(),
                y: "18",
                "stroke-width": "0",
                dy: (height / 2 + 10).toString(),
                "font-family": "Arial",
                fill: "var(color-secondary)",
              },
              [makeSafeTitle(data.displayName)]
            )
          : undefined,
        h("title", {}, [data.displayName]),
      ]
    ),
  };
}

function makeSafeTitle(tl: string): string {
  return tl.replace("<", "").replace(">", "");
}
