import { createProjector } from 'maquette';
import { createVisualizer } from './visualizer';
import { EdgeData, NodeData, NodePosition } from './api';
import { demoData } from './demo-data';

// tslint:disable-next-line:no-var-requires
require('./demo.css');

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();

let positions: ReadonlyArray<NodePosition> = [
  { nodeKey: 'A', x: 0, y: 0 },
  { nodeKey: 'B', x: 100, y: 100 }
];

let nodes: ReadonlyArray<NodeData> = [
  { key: 'A', displayName: 'Node A', style: 'plain' },
  { key: 'B', displayName: 'Node B', style: 'plain' }
];

let edges: ReadonlyArray<EdgeData> = [
  { key: 'ab', displayName: 'a to b', fromNode: 'A', toNode: 'B', style: 'arrow', fromLabel: '0..1', toLabel: '＊' }
];

let visualizer = createVisualizer();

function onNavigate(key: string) {
  alert(`navigate to ${key}`);
}

projector.append(domNode, () => visualizer.render(demoData, projector));
