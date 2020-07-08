# Graph visualizer

## Internals

Algorithm: pure function executed on every render:
- input (API): NodeData + VisualizationEntry
- + config = NodeModel
- nodeRenderers provide Dimensions to NodeModels
- EdgeData is queried to determine visible edges, create EdgeLayouts
- Render:
  - EdgeLayouts line
  - NodeLayouts
  - EdgeLayouts decoration

- 'Session' state:
  - zoom, transform
  - selected node

## interaction

- + button opens sidebar global list
- + button on node opens filtered list
- list can be closed using an 'x' button
- click on item copies item to canvas, (just center left of popup) list remains open

## caching (hobby thing)

- each node has a cache
- edges need state, cache according to endpoint-coordinates and edge data
- nodes same solution as edge

## TODO

- caching of node and edge
  - Node: NodeData + NodePosition = NodeLayout + VNode
  - Edge: EdgeData + NodeLayout from + NodeLayout to = VNodes
  - NodeState: NodeData, NodePosition, RenderCache (render = NodeLayout + VNode)
  - Algorithm:
    - Determine visibleNodes: Map<string, NodeState>
      - cached using api.NodePositions
      - reuse if possible (when same NodePosition)
    - Update NodeData in NodeStates (if NodeStates have changed: clear all and set)
    - Set/clear dragPosition
    - Have nodes update nodeState.nodeLayout (nodeData may be undefined)
    - Keep map of EdgeStates cached by EdgeData.
    - Render Edges using EdgeState + nodeState.nodeLayouts (lookup NodeLayout for to and from)
    - Render Nodes,
    - Render Edge decorations
- Add/remove nodes (list, search, etc)
- Navigate away
- integrate!

## Future plans
- Lock, unlock?
- Multiple node-layouts
