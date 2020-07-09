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

## TODO

- Add/remove nodes (list, search, etc)
- filter on current node
- aquire testdata
- Navigate out
- integrate!

## Future plans
- Lock, unlock?
- Multiple node-layouts
