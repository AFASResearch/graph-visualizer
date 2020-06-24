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

## TODO

- labels on both ends
- Add/remove nodes (list, search, etc)
- Navigate away

## Future plans
- Lock, unlock?
- Multiple node-layouts
- Investigate caching
- Consistent architecture with regard to state and caching
