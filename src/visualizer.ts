import { h } from 'maquette';

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
   * May be the key of a Node, but also _scale, _offset
   */
  key: string;
  x?: number;
  y?: number;
  data?: string;
}

export interface VisualizerAPI {
  getNodes(): NodeData[];
  getEdges(): EdgeData[];
  updateVisualizationEntry(entry: VisualizationEntry): void;
  removeVisualizationEntry(entryKey: string): void;
}

export let createVisualizer = (api: VisualizerAPI) => {
  return {
    render() {
      return h('div.gravi', []);
    }
  };
};
