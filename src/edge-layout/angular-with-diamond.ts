import { EdgeData } from '../api';
import { EdgeLayout, NodeLayout } from '../interfaces';
import { intersectionWithEntity } from './edge-utils';
import { h } from 'maquette';

/**
 * Only works well at the bottom.
 */
export function createAngularWithDiamond(data: EdgeData, from: NodeLayout, to: NodeLayout): EdgeLayout {
  return {
    renderLine: () => {
      let startPosition = intersectionWithEntity(to, from);
      let endPosition = intersectionWithEntity(from, to);
      return h('path', {
        key: data,
        'stroke-width': '1',
        stroke: 'black',
        d: renderAngularPathWithDiamond(startPosition.x, startPosition.y, endPosition.x, endPosition.y)
      }, []);
    },
    renderDecorations: () => undefined
  };
}

function renderAngularPathWithDiamond(fromX: number, fromY: number, toX: number, toY: number) {
  let dy = toY - fromY - 16;
  return 'M' + (fromX) + ',' + (fromY + 16)
    + ' l-6,-8 l6,-8 l6,8 l-6,8'
    + ' l 0,' + dy
    + 'L' + toX + ',' + toY;
}
