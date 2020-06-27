import { Align, DockPosition, NodeLayout, XY } from '../interfaces';
import { h, VNode, VNodeChild, VNodeChildren } from 'maquette';

export function intersectionWithEntity(from: XY, entity: NodeLayout): DockPosition {
  let dx = entity.x - from.x;
  let dy = entity.y - from.y;
  let adx = Math.abs(dx);
  let ady = Math.abs(dy);
  let entityWidthHeightRatio = (entity.width - 40) / entity.height; // -40: angle must not be too sharp
  let topOrBottom = adx / ady < entityWidthHeightRatio;
  let toX: number;
  let toY: number;
  if (topOrBottom) {
    toX = -dx * (entity.height / 2) / ady;
    toY = dy > 0 ? -entity.height / 2 : entity.height / 2;
    // move away from the rounded borders
    let maxX = entity.width / 2 - 10;
    if (toX > maxX) {
      toX = maxX;
    }
    if (toX < -maxX) {
      toX = -maxX;
    }
  } else {
    toX = dx > 0 ? -entity.width / 2 : entity.width / 2;
    toY = -dy * (entity.width / 2);
    if (adx !== 0) {
      toY /= adx;
    }
    // move away from the rounded borders
    let maxY = entity.height / 2 - 10;
    if (toY > maxY) {
      toY = maxY;
    }
    if (toY < -maxY) {
      toY = -maxY;
    }
  }
  let labelAlign: Align = topOrBottom
    ? { vertical: dy >= 0 ? 'top' : 'bottom', horizontal: dx >= 0 ? 'right' : 'left' }
    : { vertical: dy >= 0 ? 'bottom' : 'top', horizontal: dx >= 0 ? 'left' : 'right' };
  return { x: entity.x + toX, y: entity.y + toY, labelAlign };
}

const LABEL_FONT_SIZE = 14;

export function renderLabel(label: string | undefined, position: DockPosition, key: object): VNodeChild {
  if (!label) {
    return undefined;
  }
  let vAlign = position.labelAlign.vertical;
  let hAlign = position.labelAlign.horizontal;
  return h('text', {
    key,
    x: (position.x + (hAlign === 'left' ? -4 : 4)).toString(),
    y: (position.y + (vAlign === 'top' ? -8 : 14)).toString(),
    fill: 'black',
    width: '10',
    'font-size': LABEL_FONT_SIZE.toString(),
    'text-anchor': hAlign === 'left' ? 'end' : 'start',
    cursor: 'default'
  }, [label]);
}
