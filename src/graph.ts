import { h, ProjectorService, CalculationCache, VNode, createCache } from 'maquette';
import { EdgeData, NodeData, NodePosition, VisualizerAPI } from './api';
import { EdgeLayout, NodeLayout, NodeModel, XY } from './interfaces';
import { snapToGrid, toSVGCoordinates } from './utils';
import { createDefaultNodeLayout } from './node-layout/default-node-layout';
import { edgeLayoutFactory } from './edge-layout/edge-layout-factory';
import { renderDragHandler } from './drag-handler';

export interface GraphState {
  renderCache: CalculationCache<VNode>;
  svgElement?: SVGSVGElement;
  activeNodeKey?: string;
  dragPosition?: XY;
  dragStartPosition?: XY;
  dragStartVisualizationTransform?: XY;
  dragStartMousePosition?: XY;
  zoomFactor: number;
  visualizationTransform: XY;
}

export function createGraphState(): GraphState {
  return {
    renderCache: createCache<VNode>(),
    zoomFactor: 1,
    visualizationTransform: {
      x: 0,
      y: 0
    }
  };
}

export function renderGraph(state: GraphState, api: VisualizerAPI, projector: ProjectorService) {
  let nodes = api.getNodes();
  let nodePositions = api.getNodePositions();
  let edges = api.getEdges();
  return state.renderCache.result(
    [nodes, edges, nodePositions, state.activeNodeKey, state.dragStartPosition, state.dragPosition, state.zoomFactor, state.visualizationTransform],
    () => {
      let activeNode: NodeLayout | undefined;
      let nodeLayouts = new Map<string, NodeLayout>();
      nodePositions.forEach(nodePosition => processVisualizationEntry(nodePosition));
      // edges
      let relationLines = edges.map(e => processEdge(e, nodeLayouts));
      if (state.activeNodeKey) {
        activeNode = nodeLayouts.get(state.activeNodeKey);
        if (!activeNode) {
          state.activeNodeKey = undefined;
        }
      }
      return h('div.gravi-graph', [
        state.dragStartPosition ? renderDragHandler(afterDragging, onDragging) : undefined,
        h('svg',
          {
            preserveAspectRatio: 'xMidYMid slice',
            viewBox: '-600 -600 1200 1200',
            'pointer-events': 'all',
            afterCreate: registerSVG,
            'shape-rendering': 'optimizeQuality'
          },
          [
            h('g',
              {
                onmousedown: mouseDownEventHandler,
                afterCreate: fixOnWheel
              },
              [
                h('rect', {
                  x: '-600',
                  y: '-600',
                  width: '1200',
                  height: '1200',
                  fill: 'transparent'
                }),
                h('g',
                  {
                    transform: 'translate(' + state.visualizationTransform.x + ',' + state.visualizationTransform.y + ')',
                    'data-transform': { x: state.visualizationTransform.x, y: state.visualizationTransform.y }
                  },
                  [
                    h('g',
                      {
                        transform: 'scale(' + state.zoomFactor + ')'
                      },
                      [
                        // graph relationlines
                        h('g',
                          {
                            key: 'relationlines layer',
                            fill: 'none'
                          },
                          [
                            relationLines.toArray().map((edge) => {
                              return edge?.renderLine();
                            })
                          ]
                        ),
                        // graph entities
                        h('g',
                          {
                            key: 'entities layer'
                          },
                          [
                            [...nodeLayouts.values()].map(node => node.render()),
                            // graph relationlines decorations
                            h('g',
                              {
                                key: 'relationlines decorations'
                              },
                              [
                                relationLines.toArray().map((edge) => {
                                  return edge?.renderDecorations();
                                })
                              ]),
                            (activeNode) ? [
                              h('rect', {
                                'stroke-width': '2',
                                'stroke-dasharray': '2 0 2',
                                stroke: '#2896DD',
                                fill: 'none',
                                'pointer-events': 'none',
                                display: state.dragStartPosition ? '' : 'none',
                                rx: '6',
                                transform: 'translate(' + activeNode.x + ',' + activeNode.y + ')',
                                x: (-activeNode.width / 2).toString(),
                                y: (-activeNode.height / 2).toString(),
                                width: activeNode.width.toString(),
                                height: activeNode.height.toString()
                              }),
                              h(
                                'g',
                                {
                                  key: 'focus',
                                  fill: 'none',
                                  'stroke-width': '2',
                                  stroke: '#2896DD',
                                  transform: 'translate(' + activeNode.x + ',' + activeNode.y + ')',
                                  display: state.dragStartPosition ? 'none' : ''
                                },
                                [
                                  h('rect',
                                    {
                                      rx: '6',
                                      x: (-activeNode.width / 2).toString(),
                                      y: (-activeNode.height / 2).toString(),
                                      width: activeNode.width.toString(),
                                      height: activeNode.height.toString(),
                                      'pointer-events': 'none'
                                    }),
                                  [
                                    h(
                                      'g',
                                      {
                                        transform: 'translate(' +
                                          ((activeNode.width / 2) - 10).toString() + ', '
                                          + ((-activeNode.height / 2) - 14).toString() + ')',
                                        onmousedown: unselectNode,
                                        cursor: 'pointer'
                                      },
                                      [
                                        h('circle', {
                                          cx: '0',
                                          cy: '0',
                                          r: '10',
                                          fill: 'rgba(255,255,255,0.5)'
                                        }),
                                        h('path', {
                                          'stroke-width': '2',
                                          d: 'M-6,-6 l12,12 M-6,6 l 12, -12'
                                        })
                                      ]
                                    ),
                                    h('g',
                                      {
                                        transform: 'translate(' + ((activeNode.width / 2) - 35).toString() +
                                          ', ' + ((-activeNode.height / 2) - 14).toString() + ')',
                                        onmousedown: showRelatedNodes,
                                        onclick: showDropDown,
                                        cursor: 'pointer'
                                      },
                                      [
                                        h('circle', {
                                          cx: '0',
                                          cy: '0',
                                          r: '10',
                                          fill: 'rgba(255,255,255,0.5)'
                                        }),
                                        h('polygon', {
                                          points: '-2,6 1,4 1,0 5,-5 -5,-5 -2,0 '
                                        })
                                      ]
                                    )
                                  ]
                                ])
                            ] : [/*no active item*/]
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ]);

      function processVisualizationEntry(visualizationEntry: NodePosition) {
        let nodeData = nodes.find(nd => nd.key === visualizationEntry.nodeKey);
        if (nodeData) {
          nodeLayouts.set(
            visualizationEntry.nodeKey,
            createDefaultNodeLayout(createNodeModel(visualizationEntry, nodeData), (evt) => {
              evt.preventDefault();
              selectNode(visualizationEntry.nodeKey);
            })
          );
        }
      }
    }
  );

  function transformXYCoordinates(x: number, y: number) {
    return toSVGCoordinates(state.svgElement!, x, y, state.visualizationTransform.x, state.visualizationTransform.y, state.zoomFactor);
  }

  function processEdge(data: EdgeData, visibleNodes: Map<string, NodeLayout>): EdgeLayout | undefined {
    let from = visibleNodes.get(data.fromNode);
    if (!from) {
      return undefined;
    }
    let to = visibleNodes.get(data.toNode);
    if (!to) {
      return undefined;
    }
    return edgeLayoutFactory.createEdgeLayout(data, from, to);
  }

  function createNodeModel(visualizationEntry: NodePosition, nodeData: NodeData): NodeModel {
    let x = visualizationEntry.x ?? 0;
    let y = visualizationEntry.y ?? 0;
    if (state.activeNodeKey === nodeData.key && state.dragPosition) {
      x += state.dragPosition.x - state.dragStartPosition!.x;
      y += state.dragPosition.y - state.dragStartPosition!.y;
    }
    return {
      data: nodeData,
      x,
      y
    };
  }

  function mouseWheelEventHandler(evt: WheelEvent) {
    evt.preventDefault();
    // setting new zoom
    let oldZoomFactor = state.zoomFactor;
    let zoom = (evt.deltaY / 120) > 0 ? 0.8 : 1.25;
    state.zoomFactor = state.zoomFactor * zoom;

    // calculation transform by mouse position
    function calculateNewMousePosition(mousePosition: XY) {
      let calculate = (pos: number): number => {
        return (pos / state.zoomFactor) * oldZoomFactor;
      };
      return {
        x: calculate(mousePosition.x),
        y: calculate(mousePosition.y)
      };
    } // current mouseposition on the SVG

    let currentMousePosition = toSVGCoordinates(
      state.svgElement!,
      evt.pageX,
      evt.pageY,
      state.visualizationTransform.x,
      state.visualizationTransform.y,
      state.zoomFactor);

    // calculate the new mouse position after zooming
    let newMousePosition = calculateNewMousePosition(currentMousePosition);

    let mouseDelta = {
      x: (newMousePosition.x - currentMousePosition.x) * state.zoomFactor,
      y: (newMousePosition.y - currentMousePosition.y) * state.zoomFactor
    };
    state.visualizationTransform = {
      x: state.visualizationTransform.x + (mouseDelta.x / oldZoomFactor) * state.zoomFactor,
      y: state.visualizationTransform.y + (mouseDelta.y / oldZoomFactor) * state.zoomFactor
    };
  }

  function fixOnWheel(elem: HTMLElement) {
    // Fix for IE who has not a onwheel attribute
    elem.addEventListener('wheel', (evt) => {
      mouseWheelEventHandler(evt);
      projector.scheduleRender();
    }
    );
  }

  function mouseDownEventHandler(evt: MouseEvent) {
    state.dragStartMousePosition = { x: evt.x, y: evt.y };
    state.dragStartPosition = transformXYCoordinates(evt.x, evt.y);
    state.dragPosition = state.dragStartPosition;
    state.dragStartVisualizationTransform = state.visualizationTransform;
    if (!evt.defaultPrevented) {
      state.activeNodeKey = undefined;
      evt.preventDefault();
    }
  }

  function registerSVG(elem: SVGSVGElement) {
    state.svgElement = elem;
  }

  function unselectNode() {
    state.activeNodeKey = undefined;
  }

  function selectNode(key: string) {
    state.activeNodeKey = key;
  }

  function showRelatedNodes() {
    // wip
  }

  function showDropDown() {
    // wip
  }

  function afterDragging() {
    if (state.activeNodeKey) {
      let entry = api.getNodePositions().find(e => e.nodeKey === state.activeNodeKey);
      if (entry) {
        let x = snapToGrid((entry.x ?? 0) + state.dragPosition!.x - state.dragStartPosition!.x);
        let y = snapToGrid((entry.y ?? 0) + state.dragPosition!.y - state.dragStartPosition!.y);
        api.updateVisualizationEntry({ nodeKey: state.activeNodeKey, x, y });
      }
    }
    state.dragStartPosition = undefined;
    state.dragPosition = undefined;
  }

  function onDragging(mousePosition: XY) {
    if (state.dragStartPosition) {
      let position = transformXYCoordinates(mousePosition.x, mousePosition.y);
      if (!state.activeNodeKey) {
        let oldPosition = transformXYCoordinates(state.dragStartMousePosition!.x, state.dragStartMousePosition!.y);
        let dx = position.x - oldPosition.x;
        let dy = position.y - oldPosition.y;
        state.visualizationTransform = {
          x: state.dragStartVisualizationTransform!.x + dx * state.zoomFactor,
          y: state.dragStartVisualizationTransform!.y + dy * state.zoomFactor
        };
      }
      state.dragPosition = position;
    }
  }
}
