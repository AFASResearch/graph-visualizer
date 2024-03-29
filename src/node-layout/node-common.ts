import { CalculationCache, VNode, createCache } from "maquette";

import { XY } from "../interfaces";

export interface NodeDimensions {
  readonly center: XY;
  readonly left: number;
  readonly right: number;
  readonly bottom: number;
  readonly top: number;
  readonly height: number;
  readonly width: number;
  readonly diameter?: number;
  readonly diameterX?: number;
  readonly diameterY?: number;
}

export interface RenderedNode {
  readonly dimensions: NodeDimensions;
  readonly vNode: VNode;
}

export function createNodeState(): NodeState {
  return {
    renderMemoization: createCache<RenderedNode>(),
  };
}

export interface NodeState {
  renderMemoization: CalculationCache<RenderedNode>;
}
