import { h, MaquetteComponent, ProjectorService, VNode } from 'maquette';
import { VisualizerAPI } from './api';
import { createGraphState, renderGraph, renderGraphSummary } from './graph';
import { createSidebarState, renderSidebar } from './sidebar';
import { XY } from './interfaces';

function createVisualizerState() {
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

type VisualizerState = ReturnType<typeof createVisualizerState>;

function renderVisualizer(state: VisualizerState, api: VisualizerAPI, projector: ProjectorService) {
  let dragStart = state.dragStart;
  state.dragStart = undefined;
  return h('div.gravi', [
    renderGraph(state.graph, dragStart, filterOnNode, api, projector),
    state.sidebarOpen
      ? renderSidebar(state.sidebar, state.filterNodeKey, onFilterClear, onClose, onDragStart, api)
      : h('button.gravi-open-sidebar-button', {
        title: 'open',
        onclick() {
          state.filterNodeKey = undefined;
          state.sidebarOpen = true;
        }
      }, [
        '+'
      ]),
    state.sidebarOpen ? h('button.gravi-clear-button', {
      title: 'leegmaken',
      onclick() {
        api.clearVisualizationEntries();
      }
    }, [
      '🗑'
    ]) : undefined,
    renderGraphSummary(state.graph, api)
  ]);

  function onFilterClear() {
    state.filterNodeKey = undefined;
  }

  function onClose() {
    state.sidebarOpen = false;
  }

  function onDragStart(nodeKey: string, anchorScreenPosition: XY, mousePosition: XY) {
    state.dragStart = { nodeKey, anchorScreenPosition, mousePosition };
    api.updateVisualizationEntry({ nodeKey: nodeKey, x: mousePosition.x, y: mousePosition.y });
  }

  function filterOnNode(nodeKey: string) {
    state.sidebarOpen = true;
    state.filterNodeKey = nodeKey;
    state.sidebar.searchText = ''; // reset the searchText on filtering
  }
}

export interface VisualizerComponent {
  render(api: VisualizerAPI, projector: ProjectorService): VNode;
}

export function createVisualizer(): VisualizerComponent {
  let state = createVisualizerState();
  return {
    render(api: VisualizerAPI, projector: ProjectorService) {
      return renderVisualizer(state, api, projector);
    }
  }
}
