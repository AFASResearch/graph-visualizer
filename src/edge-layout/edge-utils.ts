import { NodeLayout, XY } from '../interfaces';

export function intersectionWithEntity(from: XY, entity: NodeLayout): XY {
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
  return { x: entity.x + toX, y: entity.y + toY };
}
