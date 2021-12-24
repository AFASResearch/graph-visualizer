# Graph visualizer

Displays the nodes and edges from a dataset that the user can specify.
Meant to be integrated in other applications.

## Live demo

https://graph-visualizer.github.io/

## Embedding
When loaded, this library exposes a <graph-visualizer> (`GraphVisualizerElement`) custom element. it has the following attributes:

- `data-url`: url which can be fetched that will retrieve json in the `GraphData` format describing all nodes and edges
- `data-variable`: global variable stored on window that contains `GraphData`, alternative of `data-url`
- `local-storage-key`: when specified, the library stores its state in localstorage under this key
- `edges-to-highlight`: a space separated string consisting of keys from edges that should be highlighted
- `nodes-to-highlight`: a space separated string consisting of keys from nodes that should be highlighted

It also has the following properties:

- `data`: can be used to programmatically set the `GraphData` for the graph to render. Two things are important:
    - All arrays, maps and objects in `GraphData` are considered immutable once they have been set on the component.
      Making changes to these objects will cause problems.
    - Reuse as many arrays, maps and objects from previous `GraphData` as possible for optimal performance.

  Changing a location programmatically can therefore be best achieved using the following code:

```ts
let data = { ...graphVisualizerElement.data, positions: [...graphVisualizerElement.data.positions] };
data.positions[2] = { nodeKey: 'a', x: 0, y: 0 }; // modifications are still allowed, because data.positions is a new array
graphVisualizerElement.data = data;
```

It fires the following events:

- `navigate`: will be called when the user clicks on the arrow of a node to navigate to its details
- `selectionchange`: will be used to notify that the user changed the selected node
- `positionschange`: used to inform that the user modified/deleted/cleared the positions of one of the nodes. Detail is a `PositionsChange` type


## Internals

Algorithm: pure function executed on every render:
- input (API): NodeData + VisualizationEntry
  + config = NodeModel
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
- Touch support
