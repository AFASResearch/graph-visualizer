import { NodeData, NodePosition } from "../api";
import { XY } from "../interfaces";
import { renderBigCircleNodeLayout } from "./big-circle-node-layout";
import { renderDatabaseNodeLayout } from "./database-node-layout";
import { renderDefaultNodeLayout } from "./default-node-layout";
import { NodeState } from "./node-common";
import { renderSmallCircleNodeLayout } from "./small-circle-node-layout";
import { renderSmallEllipseNodeLayout } from "./small-ellipse-node-layout";

export function renderNode(
  data: NodeData,
  highlighted: boolean,
  position: NodePosition,
  dragPosition: XY | undefined,
  state: NodeState,
  mouseDownEventHandler: (evt: MouseEvent) => void
) {
  return state.renderMemoization.result([data, highlighted, position, dragPosition], () => {
    switch (data.style) {
      case "big-circle":
        return renderBigCircleNodeLayout(
          data,
          highlighted,
          position,
          dragPosition,
          mouseDownEventHandler
        );
      case "small-circle":
        return renderSmallCircleNodeLayout(
          data,
          highlighted,
          position,
          dragPosition,
          mouseDownEventHandler
        );
      case "small-ellipse":
        return renderSmallEllipseNodeLayout(
          data,
          highlighted,
          position,
          dragPosition,
          mouseDownEventHandler
        );
      case "database":
        return renderDatabaseNodeLayout(
          data,
          highlighted,
          position,
          dragPosition,
          mouseDownEventHandler
        );
      default:
        return renderDefaultNodeLayout(
          data,
          highlighted,
          position,
          dragPosition,
          mouseDownEventHandler
        );
    }
  });
}
