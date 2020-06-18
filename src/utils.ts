import { XY } from './interfaces';

export let snapToGrid = (nr: number) => 10 * Math.round(nr / 10);

export let toSVGCoordinates = (svgElement: SVGSVGElement, x: number, y: number, transformX: number, transformY: number, scale: number): XY => {
  let point = svgElement.createSVGPoint();
  point.x = x;
  point.y = y;
  point = point.matrixTransform(svgElement.getScreenCTM()!.inverse());
  return {
    x: (point.x - transformX) / scale,
    y: (point.y - transformY) / scale
  };
};
