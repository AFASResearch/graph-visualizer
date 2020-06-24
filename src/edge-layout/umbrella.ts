import { EdgeData } from '../api';
import { EdgeLayout, NodeLayout } from '../interfaces';
import { h } from 'maquette';

export function createUmbrella(data: EdgeData, from: NodeLayout, to: NodeLayout): EdgeLayout {
  return {
    renderLine: () => {
      let startPosition = { x: from.x, y: from.top };
      let endPosition = { x: to.x, y: to.bottom };
      return h('path', {
        key: data,
        'stroke-width': '1',
        stroke: 'black',
        d: renderUmbrella(startPosition.x, startPosition.y, endPosition.x, endPosition.y)
      }, []);
    },
    renderDecorations: () => undefined
  };
}

function renderUmbrella(fromX: number, fromY: number, toX: number, toY: number) {
  return 'M' + toX + ',' + (toY + 10)
    + 'l-5,0 l5,-10 l5,10 l-5,0 l0,20 '
    + 'l' + (fromX - toX) + ',0 '
    + 'L' + fromX + ',' + fromY;
}
