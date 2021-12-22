# Graph visualizer

Displays the nodes and edges from a dataset that the user can specify.
Meant to be integrated in other applications.

To see a demo, execute
`npm run start`

## Embedding
When loaded, this library exposes a <graph-visualizer> (`GraphVisualizerElement`) custom element. it has the following attributes:

- `data-url`: url which can be fetched that will retrieve json in the `GraphData` format describing all nodes and edges
- `data-variable`: global variable stored on window that contains `GraphData`, alternative of `data-url`
- `local-storage-key`: when specified, the library stores its state in localstorage under this key
- `edges-to-highlight`: a space separated string consisting of keys from edges that should be highlighted
- `nodes-to-highlight`: a space separated string consisting of keys from nodes that should be highlighted

It also has the following properties:

- `data`: can be used to programmatically set the `GraphData` for the graph to render

It fires the following events:

- `navigate`: will be called when the user clicks on the arrow of a node to navigate to its details
- `selectionchange`: will be used to notify that the user changed the selected node
- `positionschange`: used to inform that the user modified/deleted/cleared the positions of one of the nodes. Detail is a `PositionsChange` type


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
- Gray out existing nodes, center on click
- hover for long names in sidebar
- Dark mode
- Styling
- Touch support
