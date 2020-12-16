import { createProjector } from 'maquette';
import { createVisualizer } from './visualizer';
import { createData } from './data';

// tslint:disable-next-line:no-var-requires
require('./demo.css');
// tslint:disable-next-line:no-var-requires
require('./gravi.css');

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();
let visualizer = createVisualizer();
let data = createData((window as any).GraphData);
projector.append(domNode, () => visualizer.render(data, projector));
