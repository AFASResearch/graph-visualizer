import { CalculationCache, createCache, VNode } from 'maquette';
import { XY } from '../interfaces';

export interface NodeDimensions {
  readonly center: XY;
  readonly left: number;
  readonly right: number;
  readonly bottom: number;
  readonly top: number;
  readonly height: number;
  readonly width: number;
}

export interface RenderedNode {
  readonly dimensions: NodeDimensions;
  readonly vNode: VNode;
}

export function createNodeState(): NodeState {
  return {
    renderMemoization: createCache<RenderedNode>()
  };
}

export interface NodeState {
  renderMemoization: CalculationCache<RenderedNode>;
}
