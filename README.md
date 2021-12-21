# Graph visualizer

Displays the nodes and edges from a dataset that the user can specify.
Meant to be integrated in other applications.

To see a demo, execute
`npm run start`

To embed in another application, import this module and include a <graph-visualizer> element.

## Work in progress

Allow highlighting edges using a changeable attribute
expose full api through properties and attributes

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
