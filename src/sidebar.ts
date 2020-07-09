import { h, VNode } from 'maquette';
import { EdgeData, NodeData, VisualizerAPI } from './api';
import { createMemoization } from './utils';

export function createSidebarState() {
  return {
    searchText: '',
    filterNodeKey: undefined as string | undefined,
    draggingNodeKey: undefined as string | undefined,
    renderMemoization: createMemoization<VNode>(),
    resultsMemoization: createMemoization<NodeData[]>()
  };
}

export type SidebarState = ReturnType<typeof createSidebarState>;

function edgeExists(node: NodeData, otherNodeKey: string, edges: ReadonlyArray<EdgeData>) {
  return edges.some(e => (e.fromNode === otherNodeKey && e.toNode === node.key) || (e.toNode === otherNodeKey && e.fromNode === node.key));
}

export function renderSidebar(state: SidebarState, onClose: (evt: MouseEvent) => void, api: VisualizerAPI) {
  let positions = api.getNodePositions();
  let nodes = api.getNodes();
  let edges = api.getEdges();
  return state.renderMemoization.result([positions, nodes, edges, state.searchText, state.draggingNodeKey, state.filterNodeKey], () => {
    let results = state.resultsMemoization.result([nodes, state.searchText, state.filterNodeKey, state.filterNodeKey ? edges : undefined], () => {
      let filteredNodes = nodes.filter(n =>
        (state.searchText ? n.displayName.toLowerCase().includes(state.searchText) : true) &&
        (state.filterNodeKey ? edgeExists(n, state.filterNodeKey, edges) : true));
      filteredNodes.sort((a, b) => a.displayName.localeCompare(b.displayName));
      return filteredNodes;
    });
    return h('div.gravi-sidebar', [
      h('button.gravi-open-sidebar-button', {
        onclick: onClose
      }, [
        '×'
      ]),
      h('input.gravi-search', {
        type: 'text',
        value: state.searchText,
        oninput(ev) {
          state.searchText = (ev.currentTarget as HTMLInputElement).value.toLowerCase();
        }
      }),
      h('ul.gravi-list', [
        results.map(n => h('li', { key: n }, [n.displayName]))
      ])
    ]);
  });
}
