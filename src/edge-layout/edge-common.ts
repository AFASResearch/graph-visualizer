import { VNode, VNodeChild } from "maquette";

import { Memoization, createMemoization } from "../utils";

export interface RenderedEdge {
  readonly line: VNode;
  readonly decorations: VNodeChild;
}

export interface EdgeState {
  renderMemoization: Memoization<RenderedEdge>;
}

export function createEdgeState(): EdgeState {
  return {
    renderMemoization: createMemoization(),
  };
}
