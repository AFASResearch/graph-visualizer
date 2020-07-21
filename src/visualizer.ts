import { h, ProjectorService } from 'maquette';
import { VisualizerAPI } from './api';
import { createGraphState, renderGraph } from './graph';
import { createSidebarState, renderSidebar } from './sidebar';
import { XY } from './interfaces';

export function createVisualizerState() {
  return {
    sidebar: createSidebarState(),
    graph: createGraphState(),
    sidebarOpen: false,
    filterNodeKey: undefined as string | undefined,
    dragStart: undefined as undefined | {
      nodeKey: string;
      anchorScreenPosition: XY;
      mousePosition: XY;
    }
  };
}

export type VisualizerState = ReturnType<typeof createVisualizerState>;

export function renderVisualizer(state: VisualizerState, api: VisualizerAPI, projector: ProjectorService) {
  let dragStart = state.dragStart;
  state.dragStart = undefined;
  return h('div.gravi', [
    renderGraph(state.graph, dragStart, filterOnNode, api, projector),
    state.sidebarOpen
      ? renderSidebar(state.sidebar, state.filterNodeKey, onClose, onDragStart, api)
      : h('button.gravi-open-sidebar-button', {
        onclick() {
          state.filterNodeKey = undefined;
          state.sidebarOpen = true;
        }
      }, [
        '+'
      ])
  ]);

  function onClose() {
    state.sidebarOpen = false;
  }

  function onDragStart(nodeKey: string, anchorScreenPosition: XY, mousePosition: XY) {
    state.dragStart = { nodeKey, anchorScreenPosition, mousePosition };
  }

  function filterOnNode(nodeKey: string) {
    state.sidebarOpen = true;
    state.filterNodeKey = nodeKey;
  }
}
