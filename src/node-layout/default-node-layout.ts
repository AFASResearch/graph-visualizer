import { NodeLayout, NodeModel } from '../interfaces';
import { VNode, h } from 'maquette';

const DEFAULT_WIDTH = 250;
const DEFAULT_FONT_SIZE = 18;

/**
 * Instances only live shortly during the render cycle, so edges can position themselves accordingly
 */
export let createDefaultNodeLayout = (model: NodeModel): NodeLayout => {
  let width: number = DEFAULT_WIDTH;
  let height = 75;
  let fontSize = DEFAULT_FONT_SIZE;

  return {
    model,
    left: model.x - (width / 2),
    right: model.x + (width / 2),
    bottom: model.y + (height / 2),
    top: model.y - (height / 2),
    height: height,
    width: width,
    render(): VNode {
      let stroke = 'black';
      let fill = 'white';
      let headerColor = 'gray';
      let header2Color = 'gray';
      return h(
        'g',
        {
          key: model,
          cursor: 'move',
          fill,
          stroke,
          transform: 'translate(' + (model.x - (width / 2)) + ',' + (model.y - (height / 2)) + ')',
          onmousedown: mouseDownEventHandler
        },
        [
          h('rect', {
            width: width.toString(),
            height: height.toString(),
            filter: 'none',
            rx: '6'
          }, undefined),
          h('path', {
            d: 'M 0 20 ' + width + ' 20',
            stroke,
            'stroke-width': '1'
          }, undefined),
          h('path', {
            d: 'M0,6 Q0,0 6,0 l' + (width - 12) + ',0 q6,0 6,6 l0,14 L0,20 0,6z',
            fill,
            stroke
          }, undefined),
          h(
            'text',
            {
              'font-size': '14',
              x: '5',
              y: '13',
              'stroke-width': '0',
              'font-family': 'Arial',
              fill: headerColor,
              'font-weight': '400'
            },
            [model.data.displayName] // type?
          ),
          h(
            'text',
            {
              'text-anchor': 'middle',
              'font-size': fontSize.toString(),
              x: (width / 2).toString(),
              y: '4',
              'stroke-width': '0',
              dy: (height / 2 + 10).toString(),
              'font-family': 'Arial',
              fill: header2Color,
              'font-weight': '400'
            },
            [makeSafeTitle(model.data.displayName)]
          ),
          h('title', {}, [model.data.displayName])
        ]);
    }
  };

  function mouseDownEventHandler() {
  }

  function makeSafeTitle(tl: string): string {
    return truncateWithEllipses(tl.replace('<', '').replace('>', ''), 24);
  }

  function truncateWithEllipses(text: string, max: number) {
    if (text.length > max) {
      return text.substr(0, max - 1) + '...';
    } else {
      return text;
    }
  }
};
