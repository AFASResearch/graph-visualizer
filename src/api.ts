import { List } from 'immutable';

export interface NodeData {
  key: string;
  displayName: string;
  style: string;
}

export interface EdgeData {
  key: string;
  displayName?: string;
  fromNode: string;
  toNode: string;
  style: string;
  fromLabel?: string;
  toLabel?: string;
}

export interface NodePosition {
  nodeKey: string;
  x: number;
  y: number;
}

export interface VisualizerAPI {
  getNodes(): List<NodeData>;
  getEdges(): List<EdgeData>;
  getNodePositions(): List<NodePosition>;
  updateVisualizationEntry(entry: NodePosition): void;
  removeVisualizationEntry(entryKey: string): void;
}
