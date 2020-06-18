import { MaquetteComponent, h } from 'maquette';
import { VisualizerAPI } from './visualizer';
import { EdgeData, NodeData, VisualizationEntry } from './api';
import { EdgeLayout, NodeLayout, NodeModel, XY } from './interfaces';
import { toSVGCoordinates } from './utils';
import { createDefaultNodeLayout } from './node-layout/default-node-layout';
import { edgeLayoutFactory } from './edge-layout/edge-layout-factory';

export let createGraph = (api: VisualizerAPI): MaquetteComponent => {
  let svgElement: SVGSVGElement;

  let state: {
    activeNode?: NodeData;
    zoomFactor: number;
    visualizationTransform: XY;
  } = {
    zoomFactor: 0.65,
    visualizationTransform: {
      x: 0,
      y: 0
    }
  };

  let registerSVG = function(elem: SVGSVGElement) {
    if (!svgElement) {
      svgElement = elem;
    }
  };

  return {
    render: () => {
      let nodeDatas = api.getNodes();
      let nodeLayouts = new Map<string, NodeLayout>();
      api.getVisualizationEntries().forEach(visualizationEntry => processVisualizationEntry(visualizationEntry, nodeDatas, nodeLayouts));
      // edges
      let relationLines = api.getEdges().map(e => processEdge(e, nodeLayouts));
      return h('div.gravi-graph', [
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
                            relationLines.map((edge) => {
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
                                relationLines.map(function(edge) {
                                  return edge?.renderDecorations();
                                })
                              ])
                            // (activeItem) ? [
                            //   h('rect', {
                            //     'stroke-width': '2',
                            //     'stroke-dasharray': '2 0 2',
                            //     stroke: '#2896DD',
                            //     fill: 'none',
                            //     'pointer-events': 'none',
                            //     display: model.dragging.isDragging ? '' : 'none',
                            //     rx: '6',
                            //     transform: 'translate(' + activeItem.getPosition().x + ',' + activeItem.getPosition().y + ')',
                            //     x: (-activeItem.getWidth() / 2).toString(),
                            //     y: (-activeItem.getHeight() / 2).toString(),
                            //     width: activeItem.getWidth().toString(),
                            //     height: activeItem.getHeight().toString(),
                            //   }),
                            //   h(
                            //     'g',
                            //     {
                            //       key: 'focus',
                            //       fill: 'none',
                            //       'stroke-width': '2',
                            //       'stroke': '#2896DD',
                            //       transform: 'translate(' + activeItem.getLayout().x + ',' + activeItem.getLayout().y + ')',
                            //       display: model.dragging.isDragging ? 'none' : ''
                            //     },
                            //     [
                            //       h('rect',
                            //         {
                            //           rx: '6',
                            //           x: (-activeItem.getWidth() / 2).toString(),
                            //           y: (-activeItem.getHeight() / 2).toString(),
                            //           width: activeItem.getWidth().toString(),
                            //           height: activeItem.getHeight().toString(),
                            //           'pointer-events': 'none'
                            //         }),
                            //       [
                            //         h(
                            //           'g',
                            //           {
                            //             transform: 'translate(' +
                            //               ((activeItem.getWidth() / 2) - 10).toString() + ', '
                            //               + ((-activeItem.getHeight() / 2) - 14).toString() + ')',
                            //             onmousedown: graph.removeActiveItem,
                            //             cursor: 'pointer'
                            //           },
                            //           [
                            //             h('circle', {
                            //               'cx': '0',
                            //               'cy': '0',
                            //               'r': '10',
                            //               'fill': 'rgba(255,255,255,0.5)'
                            //             }),
                            //             h('path', {
                            //               'stroke-width': '2',
                            //               'd': 'M-6,-6 l12,12 M-6,6 l 12, -12'
                            //             })
                            //           ]
                            //         ),
                            //         h('g',
                            //           {
                            //             'transform': 'translate(' + ((activeItem.getWidth() / 2) - 35).toString() +
                            //               ', ' + ((-activeItem.getHeight() / 2) - 14).toString() + ')',
                            //             onmousedown: showRelatedNodes,
                            //             onclick: showDropDown,
                            //             'cursor': 'pointer'
                            //           },
                            //           [
                            //             h('circle', {
                            //               'cx': '0',
                            //               'cy': '0',
                            //               'r': '10',
                            //               'fill': 'rgba(255,255,255,0.5)'
                            //             }),
                            //             h('polygon', {
                            //               'points': '-2,6 1,4 1,0 5,-5 -5,-5 -2,0 '
                            //             })
                            //           ]),
                            //         activeItem.getData().childrenVertical.length > 0 ? [
                            //           h('g',
                            //             {
                            //               transform: 'translate(' + ((-activeItem.getWidth() / 2) + 11).toString()
                            //                 + ', ' + ((activeItem.getHeight() / 2) - 12).toString() + ')',
                            //               onmousedown: toggleVerticalNodes,
                            //               cursor: 'pointer',
                            //               key: 'expand-vertical-collapse',
                            //               'stroke': 'black'
                            //             },
                            //             [
                            //               h('circle', {
                            //                 cx: '0',
                            //                 cy: '0',
                            //                 r: '8',
                            //                 'stroke-width': '1',
                            //                 fill: 'rgba(255,255,255,0.5)'
                            //               }),
                            //               h('path', {
                            //                 'stroke-width': '1',
                            //                 d: checkAllInTheGraph(activeItem.getData().childrenVertical) ? 'M-4,0 l8,0' : 'M-4,0 l8,0 l-4,0 l0,-4 l0,8'
                            //               })
                            //             ]
                            //           )
                            //         ] : [],
                            //         activeItem.getData().childrenHorizontal.length > 0 ? [
                            //           h(
                            //             'g',
                            //             {
                            //               transform: 'translate(' + ((activeItem.getWidth() / 2) - 15).toString()
                            //                 + ', ' + ((activeItem.getHeight() / 2 - 37)).toString() + ')',
                            //               onmousedown: toggleHorizontalNodes,
                            //               cursor: 'pointer',
                            //               key: 'expand-horizontal',
                            //               'stroke': 'black'
                            //             },
                            //             [
                            //               h('circle', {
                            //                 cx: '0',
                            //                 cy: '0',
                            //                 r: '8',
                            //                 'stroke-width': '1',
                            //                 fill: 'rgba(255,255,255,0.5)'
                            //               }),
                            //               h('path', {
                            //                 'stroke-width': '1',
                            //                 d: checkAllInTheGraph(activeItem.getData().childrenHorizontal) ? 'M-4,0 l8,0' : 'M-4,0 l8,0 l-4,0 l0,-4 l0,8'
                            //               })
                            //             ]
                            //           )
                            //         ] : []
                            //       ]
                            //     ])
                            // ] : [/*no active item*/]
                          ])
                      ])
                  ])
              ])
          ])
      ]);
    }
  };

  function transformXYCoordinates(x: number, y: number) {
    return toSVGCoordinates(svgElement, x, y, state.visualizationTransform.x, state.visualizationTransform.y, state.zoomFactor);
  }

  function processVisualizationEntry(visualizationEntry: VisualizationEntry, nodeDatas: NodeData[], nodeModels: Map<string, NodeLayout>) {
    if (visualizationEntry.key === '_zoom') {
      state.zoomFactor = visualizationEntry.x || 1;
    } else if (visualizationEntry.key === '_offset') {
      state.visualizationTransform = { x: visualizationEntry.x ?? 0, y: visualizationEntry.y ?? 0 };
    } else {
      let nodeData = nodeDatas.find(nd => nd.key === visualizationEntry.key);
      if (nodeData) {
        nodeModels.set(visualizationEntry.key, createDefaultNodeLayout(createNodeModel(visualizationEntry, nodeData)));
      }
    }
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

  function createNodeModel(visualizationEntry: VisualizationEntry, nodeData: NodeData): NodeModel {
    return {
      data: nodeData,
      x: visualizationEntry.x ?? 0,
      y: visualizationEntry.y ?? 0
    };
  }

  function mouseWheelEventHandler(evt: WheelEvent) {
  }

  function fixOnWheel(elem: HTMLElement) {
    // Fix for IE who has not a onwheel attribute
    elem.addEventListener('wheel', function(evt) {
      mouseWheelEventHandler(evt);
      // projector.scheduleRender();
    }
    );
  }

  function mouseDownEventHandler(evt: MouseEvent) {
    // dragHandler.activate();
    // projector.scheduleRender();
    if (!evt.defaultPrevented) {
      // model.dragging.x = evt.pageX;
      // model.dragging.y = evt.pageY;
      // model.dragging.isDragging = true;
      // activeItem = null;
    }
  }
};
