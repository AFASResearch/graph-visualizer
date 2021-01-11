import { EdgeData } from '../api';
import { intersectionWithEntity, renderAttributes } from './edge-utils';
import { h } from 'maquette';
import { RenderedEdge } from './edge-common';
import { NodeDimensions } from '../node-layout/node-common';

/**
 * Only works well at the bottom.
 */
export function renderAngularWithDiamond(data: EdgeData, from: NodeDimensions, to: NodeDimensions): RenderedEdge {
  let startPosition = intersectionWithEntity(to.center, from);
  let endPosition = intersectionWithEntity(from.center, to);
  return {
    line: h('path', {
      key: data,
      'stroke-width': '1',
      stroke: 'black',
      d: renderAngularPathWithDiamond(startPosition.x, startPosition.y, endPosition.x, endPosition.y),
      ...renderAttributes(data)
    }, []),
    decorations: undefined
  };
}

function renderAngularPathWithDiamond(fromX: number, fromY: number, toX: number, toY: number) {
  let dy = toY - fromY - 16;
  return 'M' + (fromX) + ',' + (fromY + 16)
    + ' l-6,-8 l6,-8 l6,8 l-6,8'
    + ' l 0,' + dy
    + 'L' + toX + ',' + toY;
}
