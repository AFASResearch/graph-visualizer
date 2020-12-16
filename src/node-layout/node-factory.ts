import { NodeData, NodePosition } from '../api';
import { XY } from '../interfaces';
import { NodeState } from './node-common';
import { renderSmallCircleNodeLayout } from './small-circle-node-layout';
import { renderDefaultNodeLayout } from './default-node-layout';
import { renderBigCircleNodeLayout } from './big-circle-node-layout';
import { renderDatabaseNodeLayout } from './database-node-layout';

export function renderNode(
  data: NodeData,
  position: NodePosition,
  dragPosition: XY | undefined,
  state: NodeState,
  mouseDownEventHandler: (evt: MouseEvent) => void
) {
  return state.renderMemoization.result([data, position, dragPosition], () => {
    switch (data.style) {
      case 'big-circle':
        return renderBigCircleNodeLayout(data, position, dragPosition, mouseDownEventHandler);
      case 'small-circle':
        return renderSmallCircleNodeLayout(data, position, dragPosition, mouseDownEventHandler);
      case 'database':
        return renderDatabaseNodeLayout(data, position, dragPosition, mouseDownEventHandler);
      default:
        return renderDefaultNodeLayout(data, position, dragPosition, mouseDownEventHandler);
    }
  });
}
