import { XY } from './interfaces';

const gridSize = 40;

export let snapToGrid = (nr: number) => gridSize * Math.round(nr / gridSize);

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

export interface Memoization<Result> {
  /**
   * Manually invalidates the cached outcome.
   */
  invalidate(): void;
  /**
   * If the inputs array matches the inputs array from the previous invocation, this method returns the result of the previous invocation.
   * Otherwise, the calculation function is invoked and its result is cached and returned.
   * Objects in the inputs array are compared using ===.
   * @param inputs - Array of objects that are to be compared using === with the inputs from the previous invocation.
   * These objects are assumed to be immutable values.
   * @param calculation - Function that takes zero arguments and returns an object that can be cached.
   */
  result(inputs: unknown[], calculation: () => Result): Result;

  previousResult(): Result | undefined;
}

export function createMemoization<Result>(): Memoization<Result> {
  let cachedInputs: unknown[] | undefined;
  let cachedOutcome: Result | undefined;

  return {
    invalidate: () => {
      cachedOutcome = undefined;
      cachedInputs = undefined;
    },

    result: (inputs: unknown[], calculation: () => Result) => {
      let stillValid = true;
      if (cachedInputs) {
        for (let i = 0; i < inputs.length; i++) {
          if (cachedInputs[i] !== inputs[i]) {
            stillValid = false;
          }
        }
      } else {
        stillValid = false;
      }
      if (!stillValid) {
        cachedOutcome = calculation();
        cachedInputs = inputs;
      }
      return cachedOutcome!;
    },

    previousResult: () => cachedOutcome
  };
}
