import { createProjector } from 'maquette';
import { createVisualizerState, renderVisualizer } from './visualizer';
import { EdgeData, NodeData, NodePosition, VisualizerAPI } from './api';
import { fromJS, List } from 'immutable';

// tslint:disable-next-line:no-var-requires
require('./demo.css');

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();

let currentEntries: List<NodePosition> = List([
  { nodeKey: 'A', x: 0, y: 0 },
  { nodeKey: 'B', x: 100, y: 100 }
]);

let nodes: List<NodeData> = List([
  { key: 'A', displayName: 'Node A', style: 'plain' },
  { key: 'B', displayName: 'Node B', style: 'plain' }
]);

let edges: List<EdgeData> = List([
  { key: 'ab', displayName: 'a to b', fromNode: 'A', toNode: 'B', style: 'arrow', fromLabel: '0..1', toLabel: '*' }
]);

let api: VisualizerAPI = {
  getNodePositions(): List<NodePosition> {
    return currentEntries;
  },
  getNodes: () => nodes,
  getEdges: () => edges,
  updateVisualizationEntry: (newEntry) => {
    currentEntries = List(currentEntries.filter(e => e.nodeKey !== newEntry.nodeKey)).push(newEntry);
  },
  removeVisualizationEntry: () => undefined
};

let visualizerState = createVisualizerState();

projector.append(domNode, () => renderVisualizer(visualizerState, api, projector));
