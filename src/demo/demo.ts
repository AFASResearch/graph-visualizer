import "../visualizer-web-component";

import { createProjector, h } from "maquette";

import { createDemoData } from "./demo-data";

// eslint-disable-next-line @typescript-eslint/no-var-requires
let css: CSSStyleSheet = require("./demo.css").default;
(window.document as any).adoptedStyleSheets = [css];

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();
let data = createDemoData();
(window as any).VisualizerData = data;
let nav = ((window as any).NavigateCallback = (evt: CustomEvent<string>) => {
  window.alert("Navigate to " + evt.detail);
});

projector.append(domNode, () =>
  h("div", [
    h("graph-visualizer", {
      id: "1",
      "data-variable": "VisualizerData",
      "local-storage-key": "graph-positions",
      onnavigate: nav,
      afterCreate(el) {
        // needed until https://github.com/AFASSoftware/maquette/issues/170 is resolved
        el.addEventListener("navigate", (el as any).onnavigate);
      },
    }),
  ])
);
