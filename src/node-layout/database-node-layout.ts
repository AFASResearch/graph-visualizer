import { NodeData, NodePosition } from '../api';
import { XY } from '../interfaces';
import { NodeDimensions, NodeState, RenderedNode } from './node-common';
import { h } from 'maquette';

const ellipseDiameterWidth = 40;
const ellipseDiameterHeight = 10;

export function renderDatabaseNodeLayout(
  data: NodeData,
  position: NodePosition,
  dragPosition: XY | undefined,
  mouseDownEventHandler: (evt: MouseEvent) => void
): RenderedNode {
  let center: XY = dragPosition ?? position;

  let dimensions: NodeDimensions = {
    center,
    left: center.x - ellipseDiameterWidth,
    right: center.x + ellipseDiameterWidth,
    bottom: center.y + ellipseDiameterWidth,
    top: center.y - ellipseDiameterWidth,
    height: ellipseDiameterHeight * 6, // the rect plus twice the ellipse diameter height
    width: ellipseDiameterWidth * 2
  };

  return {
    dimensions,
    vNode: h('g',
      {
        key: position,
        cursor: 'move',
        transform: `translate(${dimensions.left},${dimensions.top})`,
        'data-nodetype': data.typeName,
        onmousedown: mouseDownEventHandler
      },
      [
        h('title', { id: 'unique-id' }, [data.displayName]),
        h('rect', {
          width: dimensions.width,
          height: ellipseDiameterHeight * 4,
          y: ellipseDiameterHeight * 2,
          fill: 'white',
          stroke: 'black',
          filter: 'none'
        }),
        h('ellipse', {
          key: data,
          cx: ellipseDiameterWidth,
          cy: ellipseDiameterHeight * 2,
          rx: ellipseDiameterWidth,
          ry: ellipseDiameterHeight,
          fill: 'white',
          stroke: 'black',
          'stroke-width': 1,
          title: data.displayName,
          onmousedown: mouseDownEventHandler
        }),
        h('ellipse', {
          key: data,
          cx: ellipseDiameterWidth,
          cy: ellipseDiameterWidth + (ellipseDiameterHeight * 2),
          rx: ellipseDiameterWidth,
          ry: ellipseDiameterHeight,
          fill: 'white',
          stroke: 'black',
          'stroke-width': 1,
          title: data.displayName,
          onmousedown: mouseDownEventHandler
        })
      ]
    )
  };
}
