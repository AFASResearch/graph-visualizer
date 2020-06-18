import { h } from 'maquette';
import { EdgeData, NodeData, VisualizationEntry } from './api';
import { createGraph } from './graph';

export interface VisualizerAPI {
  getNodes(): NodeData[];
  getEdges(): EdgeData[];
  getVisualizationEntries(): VisualizationEntry[];
  updateVisualizationEntry(entry: VisualizationEntry): void;
  removeVisualizationEntry(entryKey: string): void;
}

export let createVisualizer = (api: VisualizerAPI) => {
  let graph = createGraph(api);
  return {
    render() {
      return h('div.gravi', [
        graph.render()
        // renderAddButtonOrSidebar
      ]);
    }
  };
};
