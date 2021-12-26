import { GraphData, PositionsChange } from "./api";
import { createGraphVisualizerElementAPI } from "./graph-visualizer-element-api";
import { getGraviCss } from "./gravi-css";
import { VisualizerAPI } from "./internal-api";
import { MaquetteWebComponent } from "./util/maquette-web-component";
import { customElement } from "./util/web-component-decorators";
import { VisualizerComponent, createVisualizer } from "./visualizer";

const emptyGraphData: GraphData = {
  nodes: [],
  edges: [],
  positions: undefined,
};

const ATTRIBUTES = {
  dataVariable: "data-variable",
  localStorageKey: "local-storage-key",
  edgesToHighlight: "edges-to-highlight",
  nodesToHighlight: "nodes-to-highlight",
  dataUrl: "data-url",
};

export interface IGraphVisualizerElement {
  addEventListener(type: "navigate", listener: (evt: CustomEvent<string>) => void): void;
  addEventListener(
    type: "selectionchange",
    listener: (evt: CustomEvent<string | undefined>) => void
  ): void;
  addEventListener(
    type: "positionschange",
    listener: (evt: CustomEvent<PositionsChange>) => void
  ): void;
}

@customElement("graph-visualizer")
export class GraphVisualizerElement
  extends MaquetteWebComponent
  implements IGraphVisualizerElement
{
  private _data: GraphData = emptyGraphData;
  private readonly _api: VisualizerAPI;
  private readonly visualizer: VisualizerComponent;

  constructor() {
    super();
    this.visualizer = createVisualizer();
    this._api = createGraphVisualizerElementAPI({
      getGraphData: () => this._data,
      emitNavigate: (nodeKey: string) => {
        this.dispatchEvent(new CustomEvent<string>("navigate", { detail: nodeKey, bubbles: true }));
      },
      emitSelectionChange: (nodeKey: string | undefined) => {
        this.dispatchEvent(
          new CustomEvent<string | undefined>("selectionchange", { detail: nodeKey, bubbles: true })
        );
      },
      emitPositionsChanged: (change: PositionsChange) => {
        this.dispatchEvent(new CustomEvent("positionschange", { detail: change, bubbles: true }));
      },
      getLocalStorageKey: (): string | undefined => {
        return this.localStorageKey;
      },
      edgesToHighlight: (): string | undefined => {
        return this.edgesToHighlight;
      },
      nodesToHighlight: (): string | undefined => {
        return this.nodesToHighlight;
      },
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAdoptedStyleSheets([getGraviCss()]);
  }

  override render() {
    return this.visualizer.render(this._api, this.projector); // Cannot read private member from an object whose class did not declare it
  }

  // Properties with mirroring Attributes, getter returns attribute, setter sets/removes attribute

  // data-variable
  get dataVariable() {
    return this.getAttribute(ATTRIBUTES.dataVariable);
  }

  set dataVariable(value: string | null | undefined) {
    if (value) {
      this.setAttribute(ATTRIBUTES.dataVariable, value);
    } else {
      this.removeAttribute(ATTRIBUTES.dataVariable);
    }
  }

  // local-storage-key
  get localStorageKey() {
    return this.getAttribute(ATTRIBUTES.localStorageKey) ?? undefined;
  }

  set localStorageKey(value: string | undefined) {
    if (value) {
      this.setAttribute(ATTRIBUTES.localStorageKey, value);
    } else {
      this.removeAttribute(ATTRIBUTES.localStorageKey);
    }
  }

  // edges-to-highlight
  get edgesToHighlight() {
    return this.getAttribute(ATTRIBUTES.edgesToHighlight) ?? undefined;
  }

  set edgesToHighlight(value: string | undefined) {
    if (value) {
      this.setAttribute(ATTRIBUTES.edgesToHighlight, value);
    } else {
      this.removeAttribute(ATTRIBUTES.edgesToHighlight);
    }
  }

  // nodes-to-highlight
  get nodesToHighlight() {
    return this.getAttribute(ATTRIBUTES.nodesToHighlight) ?? undefined;
  }

  set nodesToHighlight(value: string | undefined) {
    if (value) {
      this.setAttribute(ATTRIBUTES.nodesToHighlight, value);
    } else {
      this.removeAttribute(ATTRIBUTES.nodesToHighlight);
    }
  }

  // data-url attribute
  get dataUrl() {
    return this.getAttribute(ATTRIBUTES.dataUrl) ?? undefined;
  }

  set dataUrl(value: string | undefined) {
    if (value) {
      this.setAttribute(ATTRIBUTES.dataUrl, value);
    } else {
      this.removeAttribute(ATTRIBUTES.dataUrl);
    }
  }

  // data property
  get data() {
    return this._data;
  }

  set data(data: GraphData | undefined) {
    this._data = data ?? emptyGraphData;
    this.renderNextMicroTask();
  }

  // Custom element api

  override attributeChangedCallback(
    name: string,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === ATTRIBUTES.dataVariable && newValue) {
      // custom logic after changing dataVariable
      this._data = (window as any)[newValue];
    } else if (name === ATTRIBUTES.dataUrl) {
      this._data = emptyGraphData;
      if (newValue) {
        fetch(newValue)
          .then((res) => res.json())
          .then((parsed) => {
            if (!parsed.nodes || !parsed.edges) {
              throw new Error("nodes and edges not found in the returned json");
            }
            this.data = {
              nodes: parsed.nodes,
              edges: parsed.edges,
              positions: parsed.positions ?? this._data.positions,
            };
          })
          .catch((err) => {
            throw new Error("Could not load graph data" + err);
          });
      }
    }
  }

  static get observedAttributes() {
    return [
      ATTRIBUTES.dataVariable,
      ATTRIBUTES.dataUrl,
      ATTRIBUTES.localStorageKey,
      ATTRIBUTES.edgesToHighlight,
      ATTRIBUTES.nodesToHighlight,
    ];
  }
}
