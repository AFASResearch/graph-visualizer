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
}

export interface VisualizationEntry {
  /**
   * Key of a node
   */
  key: string;
  x: number;
  y: number;
}
