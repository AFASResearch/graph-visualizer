import { h, Projector, ProjectorService } from 'maquette';
import { EdgeData, NodeData, VisualizationEntry } from './api';
import { createGraph } from './graph';

export interface VisualizerAPI {
  getNodes(): NodeData[];
  getEdges(): EdgeData[];
  getVisualizationEntries(): VisualizationEntry[];
  updateVisualizationEntry(entry: VisualizationEntry): void;
  removeVisualizationEntry(entryKey: string): void;
}

export let createVisualizer = (api: VisualizerAPI, projector: ProjectorService) => {
  let graph = createGraph(api, projector);
  return {
    render() {
      return h('div.gravi', [
        graph.render()
        // renderAddButtonOrSidebar
      ]);
    }
  };
};
