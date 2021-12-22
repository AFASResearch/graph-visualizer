import { EdgeData, NodeData, NodePosition } from "./api";

/**
 * facade between inner classes (graph, visualizer, sidebar) and element. May be removed in the future.
 */
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
  getEdgesToHighlight?(): string | undefined;
  /**
   * Returns a space-separated string containing keys from nodes to highlight
   */
  getNodesToHighlight?(): string | undefined;
  updateVisualizationEntry(entry: NodePosition): void;
  removeVisualizationEntry(entryKey: string): void;
  clearVisualizationEntries(): void;
  onNavigate?(nodeKey: string): void;
  onSelectionChange?(nodeKey: string | undefined): void;
}
