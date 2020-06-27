import { EdgeData } from '../api';
import { EdgeLayout, NodeLayout } from '../interfaces';
import { h } from 'maquette';
import { intersectionWithEntity, renderLabel } from './edge-utils';

export function createArrow(data: EdgeData, from: NodeLayout, to: NodeLayout): EdgeLayout {
  let startPosition = intersectionWithEntity(to, from);
  let endPosition = intersectionWithEntity(from, to);
  return {
    renderLine: () => {
      return h('path', {
        key: data,
        'stroke-width': '1',
        stroke: 'black',
        d: renderPathWithArrow(startPosition.x, startPosition.y, endPosition.x, endPosition.y)
      }, []);
    },
    renderDecorations: () => {
      return [
        renderLabel(data.fromLabel, startPosition, from),
        renderLabel(data.toLabel, endPosition, to)
      ];
    }
  };
}

function renderPathWithArrow(fromX: number, fromY: number, toX: number, toY: number) {
  let dx = toX - fromX;
  let dy = toY - fromY;
  let length = Math.sqrt(dx * dx + dy * dy);
  let ndx = dx;
  let ndy = dy;
  if (length !== 0) {
    ndx = dx / length;
    ndy = dy / length;
  }
  return 'M' + toX + ',' + toY
    + ' l' + (-8 * ndx - 3 * ndy) + ',' + (-8 * ndy + 3 * ndx)
    + ' m' + (8 * ndx + 3 * ndy) + ',' + (8 * ndy - 3 * ndx)
    + ' l' + (-8 * ndx + 3 * ndy) + ',' + (-8 * ndy - 3 * ndx)
    + ' m' + (8 * ndx - 3 * ndy) + ',' + (8 * ndy + 3 * ndx)
    + ' l' + -dx + ',' + -dy;
}
