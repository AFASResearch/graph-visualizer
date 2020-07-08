export interface NodeData {
  readonly key: string;
  readonly typeName?: string;
  readonly displayName: string;
  readonly style: string;
}

export interface EdgeData {
  readonly key: string;
  readonly displayName?: string;
  readonly fromNode: string;
  readonly toNode: string;
  readonly style: string;
  readonly fromLabel?: string;
  readonly toLabel?: string;
}

export interface NodePosition {
  readonly nodeKey: string;
  readonly x: number;
  readonly y: number;
}

export interface VisualizerAPI {
  /**
   * Contract: producer may not make changes to the result, but should provide a new ReadonlyArray object
   */
  getNodes(): ReadonlyArray<NodeData>;
  /**
   * Contract: producer may not make changes to the result, but should provide a new ReadonlyArray object
   */
  getEdges(): ReadonlyArray<EdgeData>;
  /**
   * Contract: producer may not make changes to the result, but should provide a new ReadonlyArray object
   */
  getNodePositions(): ReadonlyArray<NodePosition>;
  updateVisualizationEntry(entry: NodePosition): void;
  removeVisualizationEntry(entryKey: string): void;
}
