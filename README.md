# Graph visualizer

Displays the nodes and edges from a dataset that the user can specify.
Meant to be integrated in other applications.

To see a demo, execute
`npm run start`

To embed in another application, use `npm install graph-visualizer`, create a visualizer using `createVisualizer` and add its `render` function to a
 `maquette` projector.

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

## Future plans / niceties
- do not start dragging when clicking buttons
- Show/remove filter on node
- Gray out existing nodes, center on click
- button styling
- Multiple node-layouts
