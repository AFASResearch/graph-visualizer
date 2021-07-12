import { createProjector } from "maquette";

import { demoData } from "./demo-data";
import { createVisualizer } from "./visualizer";

// tslint:disable-next-line:no-var-requires
require("./demo.css");
// tslint:disable-next-line:no-var-requires
require("./gravi.css");

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();

let visualizer = createVisualizer();

projector.append(domNode, () => visualizer.render(demoData, projector));
