import { EdgeData } from '../api';
import { EdgeLayout, NodeLayout } from '../interfaces';
import { h } from 'maquette';
import { intersectionWithEntity } from './edge-utils';

export function createDiamond(data: EdgeData, from: NodeLayout, to: NodeLayout): EdgeLayout {
  return {
    renderLine: () => {
      let startPosition = intersectionWithEntity(to, from);
      let endPosition = intersectionWithEntity(from, to);
      return h('path', {
        key: data,
        'stroke-width': '1',
        stroke: 'black',
        d: renderPathWithDiamond(startPosition.x, startPosition.y, endPosition.x, endPosition.y)
      }, []);
    },
    renderDecorations: () => undefined
  };
}

function renderPathWithDiamond(fromX: number, fromY: number, toX: number, toY: number) {
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
