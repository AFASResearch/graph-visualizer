import { ProjectorService, VNode, createCache, h } from "maquette";

import { EdgeData, NodeData, NodePosition } from "./api";
import { renderDragHandler } from "./drag-handler";
import { EdgeState, createEdgeState } from "./edge-layout/edge-common";
import { edgeFactory } from "./edge-layout/edge-factory";
import { XY } from "./interfaces";
import { VisualizerAPI } from "./internal-api";
import {
  NodeDimensions,
  NodeState,
  RenderedNode,
  createNodeState,
} from "./node-layout/node-common";
import { renderNode } from "./node-layout/node-factory";
import { createMemoization, snapToGrid, toSVGCoordinates } from "./utils";

/**
 * Used for keeping a record for each node for efficient rendering
 */
export interface VisibleNodeEntry {
  readonly position: NodePosition;
  readonly state: NodeState;
  highlighted: boolean;
  data?: NodeData;
  renderedNode?: RenderedNode;
}

export interface VisibleEdgeEntry {
  data: EdgeData;
  highlighted: boolean;
  readonly state: EdgeState;
}

export function createGraphState() {
  let zoomFactor = 0.4;
  let visualizationTransform = { x: 0, y: 0 };

  return {
    svgElement: undefined as SVGSVGElement | undefined,
    activeNodeKey: undefined as string | undefined,
    dragging: undefined as
      | undefined
      | {
          newNode?: NodePosition;
          position: XY;
          readonly startPosition: XY;
          readonly startVisualizationTransform: XY;
          readonly startMousePosition: XY;
        },
    visibleNodesMemoization: createMemoization<ReadonlyMap<string, VisibleNodeEntry>>(),
    visibleEdgesMemoization: createMemoization<ReadonlyMap<string, VisibleEdgeEntry>>(),
    previousNodes: undefined as unknown,
    renderCache: createCache<VNode>(),
    getZoomFactor: () => zoomFactor,
    setZoomFactor: (newZoomFactor: number) => {
      zoomFactor = newZoomFactor;
    },
    getVisualizationTransform: () => visualizationTransform,
    setVisualizationTransform: (transform: any) => {
      visualizationTransform = transform;
    },
  };
}

export type GraphState = ReturnType<typeof createGraphState>;

export function renderGraph(
  state: GraphState,
  dragStart: undefined | { nodeKey: string; anchorScreenPosition: XY; mousePosition: XY },
  filterOnNode: (nodeKey: string) => void,
  api: VisualizerAPI,
  projector: ProjectorService
) {
  if (dragStart) {
    selectNode(undefined);
    // a one-time instruction passed as an argument
    let anchorPosition = transformXYCoordinates(
      dragStart.anchorScreenPosition.x,
      dragStart.anchorScreenPosition.y
    );
    state.dragging = {
      newNode: {
        nodeKey: dragStart.nodeKey,
        x: anchorPosition.x - 115,
        y: anchorPosition.y,
      },
      position: anchorPosition,
      startPosition: anchorPosition,
      startVisualizationTransform: state.getVisualizationTransform(),
      startMousePosition: dragStart.mousePosition,
    };
  }

  let nodes = api.getNodes();
  let nodePositions = api.getNodePositions();
  let edges = api.getEdges();
  let edgesToHighlight = api.getEdgesToHighlight?.();
  let nodesToHighlight = api.getNodesToHighlight?.();

  return state.renderCache.result(
    [
      nodes,
      edges,
      nodesToHighlight,
      edgesToHighlight,
      nodePositions,
      state.activeNodeKey,
      state.dragging?.position,
      state.getZoomFactor(),
      state.getVisualizationTransform(),
    ],
    () => {
      let visibleNodes = state.visibleNodesMemoization.result(
        [nodePositions, nodesToHighlight, state.dragging?.newNode],
        () => {
          state.previousNodes = undefined;
          let highlightNodeKeys = new Set<string>(nodesToHighlight?.split(" ") ?? []);
          let oldVisibleNodes = state.visibleNodesMemoization.previousResult();
          let result = new Map(
            nodePositions.map((np) => {
              let oldEntry = oldVisibleNodes?.get(np.nodeKey);
              if (oldEntry && oldEntry.position === np) {
                oldEntry.highlighted = highlightNodeKeys.has(np.nodeKey);
                return [np.nodeKey, oldEntry];
              }
              return [
                np.nodeKey,
                {
                  position: np,
                  state: createNodeState(),
                  highlighted: highlightNodeKeys.has(np.nodeKey),
                },
              ];
            })
          );
          if (state.dragging?.newNode) {
            result.set(state.dragging.newNode.nodeKey, {
              position: state.dragging.newNode,
              highlighted: false,
              state: createNodeState(),
            });
          }
          return result;
        }
      );
      // update data on visibleNodes if needed
      if (state.previousNodes !== nodes) {
        state.previousNodes = nodes;
        for (let entry of visibleNodes.values()) {
          entry.data = undefined;
        }
        for (let node of nodes.values()) {
          let nodeKey = node.key;
          let visibleNode = visibleNodes.get(nodeKey);
          if (visibleNode) {
            visibleNode.data = node;
          }
        }
      }

      // render Each node, calculating their dimensions
      for (let [nodeKey, entry] of [...visibleNodes.entries()]) {
        if (entry.data) {
          entry.renderedNode = renderNode(
            entry.data,
            entry.highlighted,
            entry.position,
            state.dragging &&
              (nodeKey === state.activeNodeKey || state.dragging.newNode === entry.position)
              ? calculateDraggedPosition(entry.position)
              : undefined,
            entry.state,
            generateNodeMouseDownEventHander(nodeKey)
          );
        } else {
          entry.renderedNode = undefined;
        }
      }

      // update edges
      let visibleEdges = state.visibleEdgesMemoization.result(
        [visibleNodes, nodes, edges, edgesToHighlight],
        () => {
          let highlightEdgeKeys = new Set<string>(edgesToHighlight?.split(" ") ?? []);
          let edgeEntries = edges
            .map((edgeData) => {
              let from = visibleNodes.get(edgeData.fromNode);
              if (!from || !from.renderedNode) {
                return undefined;
              }
              let to = visibleNodes.get(edgeData.toNode);
              if (!to || !to.renderedNode) {
                return undefined;
              }
              let previous = state.visibleEdgesMemoization.previousResult()?.get(edgeData.key);
              if (previous) {
                previous.highlighted = highlightEdgeKeys.has(edgeData.key);
                previous.data = edgeData;
                return previous;
              } else {
                return {
                  data: edgeData,
                  highlighted: highlightEdgeKeys.has(edgeData.key),
                  state: createEdgeState(),
                };
              }
            })
            .filter((edge) => !!edge) as VisibleEdgeEntry[];
          return new Map(edgeEntries.map((e) => [e.data.key, e]));
        }
      );

      let renderedEdges = [...visibleEdges.values()].map((entry) =>
        edgeFactory.renderEdge(
          entry.data,
          entry.highlighted,
          visibleNodes.get(entry.data.fromNode)!.renderedNode!.dimensions,
          visibleNodes.get(entry.data.toNode)!.renderedNode!.dimensions,
          entry.state
        )
      );

      let activeNode: NodeDimensions | undefined;
      if (state.activeNodeKey) {
        activeNode = visibleNodes.get(state.activeNodeKey)?.renderedNode?.dimensions;
      }
      let visualizationTransform = state.getVisualizationTransform();
      return h("div.gravi-graph", [
        state.dragging ? renderDragHandler(afterDragging, onDragging) : undefined,
        h(
          "svg",
          {
            preserveAspectRatio: "xMidYMid slice",
            viewBox: "-600 -600 1200 1200",
            "pointer-events": "all",
            afterCreate: registerSVG,
            "shape-rendering": "optimizeQuality",
          },
          [
            h(
              "g",
              {
                onmousedown: mouseDownEventHandler,
                afterCreate: fixOnWheel,
              },
              [
                h("rect", {
                  x: "-600",
                  y: "-600",
                  width: "1200",
                  height: "1200",
                  fill: "transparent",
                }),
                h(
                  "g",
                  {
                    transform:
                      "translate(" +
                      visualizationTransform.x +
                      "," +
                      visualizationTransform.y +
                      ")",
                    "data-transform": { x: visualizationTransform.x, y: visualizationTransform.y },
                  },
                  [
                    h(
                      "g",
                      {
                        transform: "scale(" + state.getZoomFactor() + ")",
                      },
                      [
                        // graph relationlines
                        h(
                          "g",
                          {
                            key: "relationlines layer",
                            fill: "none",
                          },
                          renderedEdges.map((edge) => edge.line)
                        ),
                        // graph entities
                        h(
                          "g",
                          {
                            key: "entities layer",
                          },
                          [
                            [...visibleNodes.values()].map((node) => node.renderedNode?.vNode),
                            // graph relationlines decorations
                            h(
                              "g",
                              {
                                key: "relationlines decorations",
                              },
                              [renderedEdges.map((edge) => edge.decorations)]
                            ),
                            activeNode
                              ? [
                                  h("rect", {
                                    "stroke-width": "2",
                                    "stroke-dasharray": "2 0 2",
                                    stroke: "#2896DD",
                                    fill: "none",
                                    "pointer-events": "none",
                                    display: state.dragging ? "" : "none",
                                    rx: "6",
                                    transform:
                                      "translate(" +
                                      activeNode.center.x +
                                      "," +
                                      activeNode.center.y +
                                      ")",
                                    x: (-activeNode.width / 2).toString(),
                                    y: (-activeNode.height / 2).toString(),
                                    width: activeNode.width.toString(),
                                    height: activeNode.height.toString(),
                                  }),
                                  h(
                                    "g",
                                    {
                                      key: "focus",
                                      fill: "none",
                                      "stroke-width": "2",
                                      stroke: "#2896DD",
                                      transform:
                                        "translate(" +
                                        activeNode.center.x +
                                        "," +
                                        activeNode.center.y +
                                        ")",
                                      display: state.dragging ? "none" : "",
                                    },
                                    [
                                      h("rect", {
                                        rx: "6",
                                        x: (-activeNode.width / 2).toString(),
                                        y: (-activeNode.height / 2).toString(),
                                        width: activeNode.width.toString(),
                                        height: activeNode.height.toString(),
                                        "pointer-events": "none",
                                      }),
                                      [
                                        h(
                                          "g",
                                          {
                                            transform:
                                              "translate(" +
                                              (activeNode.width / 2 - 10).toString() +
                                              ", " +
                                              (-activeNode.height / 2 - 14).toString() +
                                              ")",
                                            onmousedown: hideActiveNode,
                                            cursor: "pointer",
                                          },
                                          [
                                            h("circle", {
                                              cx: "0",
                                              cy: "0",
                                              r: "10",
                                              fill: "rgba(255,255,255,0.5)",
                                            }),
                                            h("path", {
                                              "stroke-width": "2",
                                              d: "M-6,-6 l12,12 M-6,6 l 12, -12",
                                            }),
                                          ]
                                        ),
                                        h(
                                          "g",
                                          {
                                            transform:
                                              "translate(" +
                                              (activeNode.width / 2 - 35).toString() +
                                              ", " +
                                              (-activeNode.height / 2 - 14).toString() +
                                              ")",
                                            onmousedown: filterRelatedNodes,
                                            cursor: "pointer",
                                          },
                                          [
                                            h("circle", {
                                              cx: "0",
                                              cy: "0",
                                              r: "10",
                                              fill: "rgba(255,255,255,0.5)",
                                            }),
                                            h("polygon", {
                                              points: "-2,6 1,4 1,0 5,-5 -5,-5 -2,0 ",
                                            }),
                                          ]
                                        ),
                                        api.onNavigate
                                          ? h(
                                              "g",
                                              {
                                                transform:
                                                  "translate(" +
                                                  (-(activeNode.width / 2) + 10).toString() +
                                                  ", " +
                                                  (-activeNode.height / 2 - 14).toString() +
                                                  ")",
                                                onmousedown: navigateToActiveNode,
                                                cursor: "pointer",
                                              },
                                              [
                                                h("circle", {
                                                  cx: "0",
                                                  cy: "0",
                                                  r: "10",
                                                  fill: "rgba(255,255,255,0.5)",
                                                }),
                                                h("path", {
                                                  "stroke-width": "2",
                                                  d: "M-4,4 l8,-8 m-6,0 l6,0 l0,6",
                                                }),
                                              ]
                                            )
                                          : undefined,
                                      ],
                                    ]
                                  ),
                                ]
                              : [
                                  /*no active item*/
                                ],
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]);
    }
  );

  function calculateDraggedPosition(position: NodePosition): XY {
    let dragging = state.dragging!;
    return {
      x: position.x + dragging.position.x - dragging.startPosition.x,
      y: position.y + dragging.position.y - dragging.startPosition.y,
    };
  }

  function transformXYCoordinates(x: number, y: number) {
    return toSVGCoordinates(
      state.svgElement!,
      x,
      y,
      state.getVisualizationTransform().x,
      state.getVisualizationTransform().y,
      state.getZoomFactor()
    );
  }

  function mouseWheelEventHandler(evt: WheelEvent) {
    evt.preventDefault();
    // setting new zoom
    let oldZoomFactor = state.getZoomFactor();
    let zoom = evt.deltaY / 120 > 0 ? 0.8 : 1.25;
    let zoomFactor = oldZoomFactor * zoom;

    // calculation transform by mouse position
    function calculateNewMousePosition(mousePosition: XY) {
      let calculate = (pos: number): number => {
        return (pos / zoomFactor) * oldZoomFactor;
      };
      return {
        x: calculate(mousePosition.x),
        y: calculate(mousePosition.y),
      };
    } // current mouseposition on the SVG

    let currentMousePosition = toSVGCoordinates(
      state.svgElement!,
      evt.pageX,
      evt.pageY,
      state.getVisualizationTransform().x,
      state.getVisualizationTransform().y,
      zoomFactor
    );

    // calculate the new mouse position after zooming
    let newMousePosition = calculateNewMousePosition(currentMousePosition);

    let mouseDelta = {
      x: (newMousePosition.x - currentMousePosition.x) * zoomFactor,
      y: (newMousePosition.y - currentMousePosition.y) * zoomFactor,
    };
    state.setVisualizationTransform({
      x: state.getVisualizationTransform().x + (mouseDelta.x / oldZoomFactor) * zoomFactor,
      y: state.getVisualizationTransform().y + (mouseDelta.y / oldZoomFactor) * zoomFactor,
    });

    state.setZoomFactor(zoomFactor);
  }

  function fixOnWheel(elem: HTMLElement) {
    // Fix for IE who has not a onwheel attribute
    elem.addEventListener("wheel", (evt) => {
      mouseWheelEventHandler(evt);
      projector.scheduleRender();
    });
  }

  function generateNodeMouseDownEventHander(nodeKey: string) {
    return (evt: MouseEvent) => {
      evt.preventDefault();
      selectNode(nodeKey);
    };
  }

  function mouseDownEventHandler(evt: MouseEvent) {
    let startPosition = transformXYCoordinates(evt.x, evt.y);
    state.dragging = {
      position: startPosition,
      startPosition,
      startMousePosition: { x: evt.x, y: evt.y },
      startVisualizationTransform: state.getVisualizationTransform(),
    };
    if (!evt.defaultPrevented) {
      selectNode(undefined);
      evt.preventDefault();
    }
  }

  function registerSVG(elem: SVGSVGElement) {
    state.svgElement = elem;
  }

  function hideActiveNode(evt: MouseEvent) {
    api.removeVisualizationEntry(state.activeNodeKey!);
    selectNode(undefined);
    evt.preventDefault();
  }

  function navigateToActiveNode(evt: MouseEvent) {
    api.onNavigate!(state.activeNodeKey!);
    selectNode(undefined);
    evt.preventDefault();
    evt.stopPropagation();
  }

  function selectNode(key: string | undefined) {
    state.activeNodeKey = key;
    if (api.onSelectionChange) {
      api.onSelectionChange(key);
    }
  }

  function filterRelatedNodes() {
    filterOnNode(state.activeNodeKey!);
  }

  function afterDragging() {
    let activeNodeKey = state.dragging?.newNode?.nodeKey ?? state.activeNodeKey;
    if (activeNodeKey) {
      let drag = state.dragging!;
      let entry =
        state.dragging?.newNode ?? api.getNodePositions().find((e) => e.nodeKey === activeNodeKey);
      if (entry) {
        let x = snapToGrid((entry.x ?? 0) + drag.position.x - drag.startPosition.x);
        let y = snapToGrid((entry.y ?? 0) + drag.position.y - drag.startPosition.y);
        api.updateVisualizationEntry({ nodeKey: activeNodeKey, x, y });
      }
    }
    state.dragging = undefined;
  }

  function onDragging(mousePosition: XY) {
    if (state.dragging) {
      let position = transformXYCoordinates(mousePosition.x, mousePosition.y);
      if (!state.activeNodeKey && !state.dragging.newNode) {
        let oldPosition = transformXYCoordinates(
          state.dragging.startMousePosition.x,
          state.dragging.startMousePosition.y
        );
        let dx = position.x - oldPosition.x;
        let dy = position.y - oldPosition.y;
        state.setVisualizationTransform({
          x: state.dragging.startVisualizationTransform.x + dx * state.getZoomFactor(),
          y: state.dragging.startVisualizationTransform.y + dy * state.getZoomFactor(),
        });
      }
      state.dragging.position = position;
    }
  }
}
