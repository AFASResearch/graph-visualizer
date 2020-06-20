import { createProjector } from 'maquette';
import { createVisualizer, VisualizerAPI } from './visualizer';
import { VisualizationEntry } from './api';

// tslint:disable-next-line:no-var-requires
require('./demo.css');

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();

let api: VisualizerAPI = {
  getVisualizationEntries(): VisualizationEntry[] {
    return [
      { key: 'A', x: 0, y: 0 },
      { key: 'B', x: 100, y: 100 }
    ];
  },
  getNodes: () => [
    { key: 'A', displayName: 'Node A', style: 'plain' },
    { key: 'B', displayName: 'Node B', style: 'plain' }
  ],
  getEdges: () => [
    { key: 'ab', displayName: 'a to b', fromNode: 'A', toNode: 'B', style: 'arrow' }
  ],
  updateVisualizationEntry: () => undefined,
  removeVisualizationEntry: () => undefined
};

let visualizer = createVisualizer(api);

projector.append(domNode, visualizer.render);
