import { h, ProjectorService } from 'maquette';
import { VisualizerAPI } from './api';
import { createGraphState, renderGraph } from './graph';
import { createSidebarState, renderSidebar } from './sidebar';

export function createVisualizerState() {
  return {
    sidebar: createSidebarState(),
    graph: createGraphState(),
    sidebarOpen: false
  };
}

export type VisualizerState = ReturnType<typeof createVisualizerState>;

export function renderVisualizer(state: VisualizerState, api: VisualizerAPI, projector: ProjectorService) {
  return h('div.gravi', [
    renderGraph(state.graph, api, projector),
    state.sidebarOpen
      ? renderSidebar(state.sidebar, api)
      : h('button.gravi-open-sidebar-button', {
        onclick() {
          state.sidebarOpen = true;
        }
      }, [
        '+'
      ])
  ]);
}
