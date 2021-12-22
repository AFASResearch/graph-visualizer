export interface NodeData {
  readonly key: string;
  readonly typeName?: string;
  readonly displayName: string;
  readonly shortName?: string;
  readonly style: string;
  readonly attributes?: { [name: string]: string | number | boolean };
}

export interface EdgeData {
  readonly key: string;
  readonly displayName?: string;
  readonly fromNode: string;
  readonly toNode: string;
  readonly style: string;
  readonly fromLabel?: string;
  readonly toLabel?: string;
  readonly attributes?: { [name: string]: string | number | boolean };
}

export interface NodePosition {
  readonly nodeKey: string;
  readonly x: number;
  readonly y: number;
}

export interface GraphData {
  nodes: ReadonlyMap<string, NodeData>;
  edges: readonly EdgeData[];
  positions?: readonly NodePosition[];
}

export interface VisualizerAPI {
  /**
   * Contract: producer may not make changes to the result, but should provide a new ReadonlyMap object
   */
  getNodes(): ReadonlyMap<string, NodeData>;
  /**
   * Contract: producer may not make changes to the result, but should provide a new ReadonlyArray object
   */
  getEdges(): ReadonlyArray<EdgeData>;
  /**
   * Contract: producer may not make changes to the result, but should provide a new ReadonlyArray object
   */
  getNodePositions(): ReadonlyArray<NodePosition>;
  /**
   * Returns a space-separated string containing keys from edges to highlight
   */
  getEdgesToHighlight(): string | undefined;
  /**
   * Returns a space-separated string containing keys from nodes to highlight
   */
  getNodesToHighlight(): string | undefined;
  updateVisualizationEntry(entry: NodePosition): void;
  removeVisualizationEntry(entryKey: string): void;
  clearVisualizationEntries(): void;
  onNavigate?(nodeKey: string): void;
  onSelectionChange?(nodeKey: string | undefined): void;
}
