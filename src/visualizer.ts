import { ProjectorService, VNode, h } from "maquette";

import { createGraphState, renderGraph } from "./graph";
import { XY } from "./interfaces";
import { VisualizerAPI } from "./internal-api";
import { createSidebarState, renderSidebar } from "./sidebar";
import { createMemoization } from "./utils";

function createVisualizerState() {
  return {
    sidebar: createSidebarState(),
    graph: createGraphState(),
    summaryMemoization: createMemoization<VNode>(),
    sidebarOpen: false,
    filterNodeKey: undefined as string | undefined,
    dragStart: undefined as
      | undefined
      | {
          nodeKey: string;
          anchorScreenPosition: XY;
          mousePosition: XY;
        },
  };
}

type VisualizerState = ReturnType<typeof createVisualizerState>;

function renderVisualizer(state: VisualizerState, api: VisualizerAPI, projector: ProjectorService) {
  let dragStart = state.dragStart;
  state.dragStart = undefined;
  return h("div.gravi", [
    renderGraph(state.graph, dragStart, filterOnNode, api, projector),
    state.sidebarOpen
      ? [
          renderSidebar(
            state.sidebar,
            state.filterNodeKey,
            onFilterClear,
            onClose,
            onDragStart,
            api
          ),
          h(
            "button.gravi-clear-button",
            {
              title: "leegmaken",
              onclick() {
                api.clearVisualizationEntries();
              },
            },
            ["🗑"]
          ),
        ]
      : h(
          "button.gravi-open-sidebar-button",
          {
            title: "open",
            onclick() {
              state.filterNodeKey = undefined;
              state.sidebarOpen = true;
            },
          },
          ["+"]
        ),
    renderGraphSummary(state, api),
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
    state.sidebar.searchText = ""; // reset the searchText on filtering
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
    },
  };
}

function renderGraphSummary(state: VisualizerState, api: VisualizerAPI) {
  let nodes = api.getNodes();
  let edges = api.getEdges();
  return state.summaryMemoization.result([nodes, edges], () => {
    let nodeCountPerType: { [type: string]: number } = {};
    for (let node of nodes.values()) {
      if(node.typeName)
      {
        nodeCountPerType[node.typeName] = (nodeCountPerType[node.typeName] || 0) + 1;
      }
    }
    let nodeTypeSummary = Object.entries(nodeCountPerType).map(
      (entry) => `${entry[1]} ${entry[0]}`
    );
    return h("div.gravi-summary", {}, [
      `${nodes.size} nodes (${nodeTypeSummary.join(", ")}), ${edges.length} edges`,
    ]);
  });
}
