import { EdgeData } from '../api';
import { h } from 'maquette';
import { intersectionWithEntity } from './edge-utils';
import { RenderedEdge } from './edge-common';
import { NodeDimensions } from '../node-layout/node-common';

export function renderDiamond(data: EdgeData, from: NodeDimensions, to: NodeDimensions): RenderedEdge {
  let startPosition = intersectionWithEntity(to.center, from);
  let endPosition = intersectionWithEntity(from.center, to);
  return {
    line: h('path', {
      key: data,
      'stroke-width': '1',
      stroke: 'black',
      d: renderDiamondLine(startPosition.x, startPosition.y, endPosition.x, endPosition.y)
    }, []),
    decorations: undefined
  };
}

function renderDiamondLine(fromX: number, fromY: number, toX: number, toY: number) {
  let dx = toX - fromX;
  let dy = toY - fromY;
  let length = Math.sqrt(dx * dx + dy * dy);
  let ndx = dx / length;
  let ndy = dy / length;
  return 'M' + (fromX + 16 * ndx) + ',' + (fromY + 16 * ndy)
    + ' l' + (-8 * ndx + 4 * ndy) + ',' + (-8 * ndy - 4 * ndx)
    + ' l' + (-8 * ndx - 4 * ndy) + ',' + (-8 * ndy + 4 * ndx)
    + ' l' + (8 * ndx - 4 * ndy) + ',' + (8 * ndy + 4 * ndx)
    + ' l' + (8 * ndx + 4 * ndy) + ',' + (8 * ndy - 4 * ndx)
    + ' L' + toX + ',' + toY;
}
