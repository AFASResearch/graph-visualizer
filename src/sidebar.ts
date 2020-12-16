import { h, VNode } from 'maquette';
import { EdgeData, NodeData, VisualizerAPI } from './api';
import { createMemoization } from './utils';
import { XY } from './interfaces';

export function createSidebarState() {
  return {
    searchText: '',
    draggingNodeKey: undefined as string | undefined,
    renderMemoization: createMemoization<VNode>(),
    resultsMemoization: createMemoization<NodeData[]>()
  };
}

export type SidebarState = ReturnType<typeof createSidebarState>;

function edgeExists(node: NodeData, otherNodeKey: string, edges: ReadonlyArray<EdgeData>) {
  return edges.some(e => (e.fromNode === otherNodeKey && e.toNode === node.key) || (e.toNode === otherNodeKey && e.fromNode === node.key));
}

export function renderSidebar(
  state: SidebarState,
  filterNodeKey: string | undefined,
  onClose: (evt: MouseEvent) => void,
  onDragStart: (nodeKey: string, anchorScreenPosition: XY, mousePosition: XY) => void,
  api: VisualizerAPI
) {
  let positions = api.getNodePositions();
  let nodes = api.getNodes();
  let edges = api.getEdges();
  return state.renderMemoization.result([positions, nodes, edges, state.searchText, state.draggingNodeKey, filterNodeKey], () => {
    let results = state.resultsMemoization.result([nodes, state.searchText, filterNodeKey, filterNodeKey ? edges : undefined], () => {
      let filteredNodes = [...nodes.values()].filter(n =>
        // we shouldn't show nodes that are already displayed
        !positions.some(p => p.nodeKey === n.key) &&
        // if a searchText is done, the node should match it
        (state.searchText ? n.displayName.toLowerCase().includes(state.searchText) : true) &&
        // if a filterNode is present, the node should be connected to it
        (filterNodeKey ? api.edgeExists(n.key, filterNodeKey) : true));
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
        results.map(n => h('li', {
          key: n,
          'data-nodetype': n.typeName,
          onmousedown(evt: MouseEvent) {
            let element = evt.target! as HTMLElement;
            let rect = element.getBoundingClientRect();
            onDragStart(n.key, { x: rect.left, y: (rect.top + rect.bottom) / 2 }, { x: evt.x, y: evt.y });
          }
        }, [n.displayName]))
      ])
    ]);
  });
}
