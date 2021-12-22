import { VNode, h } from "maquette";

import { EdgeData, NodeData } from "./api";
import { XY } from "./interfaces";
import { VisualizerAPI } from "./internal-api";
import { createMemoization } from "./utils";

export function createSidebarState() {
  return {
    searchText: "",
    draggingNodeKey: undefined as string | undefined,
    filterMemoization: createMemoization<GraphFilter>(),
    renderMemoization: createMemoization<VNode>(),
    resultsMemoization: createMemoization<NodeData[]>(),
  };
}

export type GraphFilter = ((n: NodeData) => boolean)[];

export type SidebarState = ReturnType<typeof createSidebarState>;

function createNodeFilters(searchText: string): ((n: NodeData) => boolean)[] {
  if (searchText) {
    let searchParts = searchText.split(" ");
    return searchParts.map((search): ((n: NodeData) => boolean) => {
      let complexSearch = search.split(":");
      if (complexSearch.length === 1) {
        return (n: NodeData) => n.displayName.toLowerCase().includes(search);
      } else if (complexSearch.length === 2) {
        let attr = complexSearch[0];
        let value = complexSearch[1];

        if (value.toLowerCase() === "true") {
          return (n: NodeData) => !!n.attributes?.[attr];
        } else if (value.toLowerCase() === "false") {
          return (n: NodeData) => !n.attributes?.[attr];
        }

        return (n: NodeData) =>
          n.attributes?.[attr] ? (n.attributes[attr] + "").toLowerCase().includes(value) : false;
      } else {
        throw new Error(`Unrecognized filter: ${search}`);
      }
    });
  }
  return [];
}

export function renderSidebar(
  state: SidebarState,
  filterNodeKey: string | undefined,
  onFilterClear: (evt: MouseEvent) => void,
  onClose: (evt: MouseEvent) => void,
  onDragStart: (nodeKey: string, anchorScreenPosition: XY, mousePosition: XY) => void,
  api: VisualizerAPI
) {
  let positions = api.getNodePositions();
  let nodes = api.getNodes();
  let edges = api.getEdges();
  let filters = state.filterMemoization.result([state.searchText], () => {
    return createNodeFilters(state.searchText);
  });
  return state.renderMemoization.result(
    [positions, nodes, edges, state.searchText, state.draggingNodeKey, filterNodeKey],
    () => {
      let results = state.resultsMemoization.result(
        [positions, nodes, state.searchText, filterNodeKey, filterNodeKey ? edges : undefined],
        () => {
          let filteredNodes = [...nodes.values()].filter(
            (n) =>
              // we shouldn't show nodes that are already displayed
              !positions.some((p) => p.nodeKey === n.key) &&
              // if a filterNode is present, the node should be connected to it
              (filterNodeKey ? edgeExists(edges, n.key, filterNodeKey) : true) &&
              // if a searchText is present, we should apply the parsed filters
              filters.every((f) => f(n))
          );
          filteredNodes.sort((a, b) => a.displayName.localeCompare(b.displayName));
          return filteredNodes;
        }
      );
      return h("div.gravi-sidebar", [
        h(
          "button.gravi-open-sidebar-button",
          {
            onclick: onClose,
          },
          ["×"]
        ),
        h("input.gravi-search", {
          type: "text",
          value: state.searchText,
          oninput(ev) {
            state.searchText = (ev.currentTarget as HTMLInputElement).value.toLowerCase();
          },
        }),
        filterNodeKey
          ? h(
              "div.gravi-filter",
              {
                value: state.searchText,
                oninput(ev) {
                  state.searchText = (ev.currentTarget as HTMLInputElement).value.toLowerCase();
                },
              },
              [
                h(
                  "button.gravi-filter-clear-button",
                  {
                    onclick: onFilterClear,
                  },
                  ["×"]
                ),
                h("span", [filterNodeKey]),
              ]
            )
          : undefined,
        h("ul.gravi-list", [
          // Show only the first 500 elements. This speeds up rendering.
          // More results has no use.
          results.slice(0, 500).map((n) =>
            h(
              "li",
              {
                key: n,
                "data-nodetype": n.typeName,
                onmousedown(evt: MouseEvent) {
                  let element = evt.target! as HTMLElement;
                  let rect = element.getBoundingClientRect();
                  onDragStart(
                    n.key,
                    { x: rect.left, y: (rect.top + rect.bottom) / 2 },
                    { x: evt.x, y: evt.y }
                  );
                },
              },
              [h("span.shortName", [n.shortName ?? n.displayName]), h("span.name", [n.displayName])]
            )
          ),
        ]),
      ]);
    }
  );
}

function edgeExists(edges: readonly EdgeData[], nodeKey: string, otherNodeKey: string) {
  return edges.some(
    (e) =>
      (e.fromNode === nodeKey && e.toNode === otherNodeKey) ||
      (e.fromNode === otherNodeKey && e.toNode === nodeKey)
  );
}
