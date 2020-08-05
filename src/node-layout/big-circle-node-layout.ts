import { NodeData, NodePosition } from '../api';
import { XY } from '../interfaces';
import { NodeDimensions, RenderedNode } from './node-common';
import { h } from 'maquette';

const diameter = 160;

export function renderBigCircleNodeLayout(
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
    width: diameter,
    diameter
  };

  return {
    dimensions,
    vNode: h('g', { key: data }, [
      h('circle', {
        cx: center.x,
        cy: center.y,
        r: diameter / 2,
        fill: 'white',
        stroke: 'black',
        'stroke-width': 1,
        onmousedown: mouseDownEventHandler
      }),
      h('text', {
        'font-size': '18',
        'text-anchor': 'middle',
        lengthAdjust: 'spacingAndGlyphs',
        textLength: data.displayName.length > 16 ? '145' : undefined, // pragmatic way to only shrink, never grow
        x: `${center.x}`,
        y: `${center.y}`,
        'stroke-width': '0',
        'font-family': 'Arial',
        fill: 'gray',
        'font-weight': '400'
      }, [data.displayName])
    ])
  };
}
