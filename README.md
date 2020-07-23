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

## Future plans / niceties
- do not start dragging when clicking buttons
- Show/remove filter on node
- Gray out existing nodes, center on click
- button styling
- Multiple node-layouts
