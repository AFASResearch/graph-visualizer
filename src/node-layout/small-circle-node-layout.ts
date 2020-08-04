import { NodeData, NodePosition } from '../api';
import { XY } from '../interfaces';
import { NodeDimensions, NodeState, RenderedNode } from './node-common';
import { h } from 'maquette';

const diameter = 80;

export function renderSmallCircleNodeLayout(
  data: NodeData,
  position: NodePosition,
  dragPosition: XY | undefined,
  mouseDownEventHandler: (evt: MouseEvent) => void
): RenderedNode {
  let center: XY = dragPosition ?? position;

  let dimensions: NodeDimensions = {
    center,
    left: center.x - (diameter / 2),
    right: center.x + (diameter / 2),
    bottom: center.y + (diameter / 2),
    top: center.y - (diameter / 2),
    height: diameter,
    width: diameter
  };

  return {
    dimensions,
    vNode: h('circle', {
      cx: center.x,
      cy: center.y,
      r: diameter / 2,
      fill: 'white',
      stroke: 'black',
      'stroke-width': 1,
      onmousedown: mouseDownEventHandler
    })
  };
}
