import "../graph-visualizer-element";

import { createProjector, h } from "maquette";

import { createDemoData } from "./demo-data";

// eslint-disable-next-line @typescript-eslint/no-var-requires
let css: CSSStyleSheet = require("./demo.css").default;
(window.document as any).adoptedStyleSheets = [css];

// Bootstrap demo data and show the graph-visualizer widget fullscreen

let domNode = document.body;
let projector = createProjector();
let data = createDemoData();
function nav(evt: CustomEvent<string>) {
  window.alert("Navigate to " + evt.detail);
}

function selectionChanged(evt: CustomEvent<string | undefined>) {
  window.document.title = evt.detail ?? "no selection";
}

let highlighting = false;

projector.append(domNode, () =>
  h("div", [
    h("graph-visualizer", {
      id: "1",
      data,
      "local-storage-key": "graph-positions",
      "edges-to-highlight":
        "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forAddButton-instanceTemplate1",
      onnavigate: nav,
      onselectionchange: selectionChanged,
      afterCreate(el) {
        // needed until https://github.com/AFASSoftware/maquette/issues/170 is resolved
        el.addEventListener("navigate", (el as any).onnavigate);
        setTimeout(() => {
          // or setInterval
          highlighting = !highlighting;
          if (highlighting) {
            el.setAttribute(
              "nodes-to-highlight",
              "ERVisualizationNode:entityVisualization_Entity:AddButton"
            );
            el.removeAttribute("edges-to-highlight");
          } else {
            el.setAttribute(
              "edges-to-highlight",
              "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forAddButton-instanceTemplate1"
            );
            el.removeAttribute("nodes-to-highlight");
          }
        }, 2000);
      },
    }),
  ])
);
