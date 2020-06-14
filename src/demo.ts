import { createProjector } from 'maquette';
import { createVisualizer, VisualizerAPI } from './visualizer';

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();

let api: VisualizerAPI = {
  getNodes: () => [
    { key: 'A', displayName: 'Node A', style: 'plain' },
    { key: 'B', displayName: 'Node B', style: 'plain' }
  ],
  getEdges: () => [
    { key: 'ab', displayName: 'a to b', fromNode: 'A', toNode: 'B', style: 'straight' }
  ],
  updateVisualizationEntry: () => undefined,
  removeVisualizationEntry: () => undefined
};

let visualizer = createVisualizer(api);

projector.append(domNode, visualizer.render);
