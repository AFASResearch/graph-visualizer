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

- use immutableJS, API returns immutable lists/maps
- graph is cached by 3 API collections + all of state
- each node has a cache
- edges need state, cache according to endpoint-coordinates and edge data
- nodes same solution as edge

## TODO

- Add/remove nodes (list, search, etc)
- Navigate away

## Future plans
- Lock, unlock?
- Multiple node-layouts
- Investigate caching
- Consistent architecture with regard to state and caching
