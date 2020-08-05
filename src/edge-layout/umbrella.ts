import { EdgeData } from '../api';
import { h } from 'maquette';
import { RenderedEdge } from './edge-common';
import { NodeDimensions } from '../node-layout/node-common';

export function renderUmbrella(data: EdgeData, from: NodeDimensions, to: NodeDimensions): RenderedEdge {
  let startPosition = { x: from.center.x, y: from.top };
  let endPosition = { x: to.center.x, y: to.bottom };
  return {
    line: h('path', {
      key: data,
      'stroke-width': '1',
      stroke: 'black',
      d: renderUmbrellaLine(startPosition.x, startPosition.y, endPosition.x, endPosition.y)
    }, []),
    decorations: undefined
  };
}

function renderUmbrellaLine(fromX: number, fromY: number, toX: number, toY: number) {
  return 'M' + toX + ',' + (toY + 10)
    + 'l-8,0 l8,-10 l8,10 l-8,0 l0,20 '
    + 'l' + (fromX - toX) + ',0 '
    + 'L' + fromX + ',' + fromY;
}
