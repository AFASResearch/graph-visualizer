import { GraphData, VisualizerAPI } from "./api";
import { MaquetteWebComponent } from "./util/maquette-web-component";
import { customElement } from "./util/web-component-decorators";
import { VisualizerComponent, createVisualizer } from "./visualizer";
import { createVisualizerWebComponentAPI } from "./visualizer-web-component-api";

// eslint-disable-next-line @typescript-eslint/no-var-requires
let css: CSSStyleSheet = require("./gravi.css").default;

const emptyGraphData: GraphData = {
  nodes: new Map(),
  edges: [],
  positions: undefined,
};

const ATTRIBUTES = {
  dataVariable: "data-variable",
  localStorageKey: "local-storage-key",
  edgesToHighlight: "edges-to-highlight",
};

@customElement("graph-visualizer")
export class VisualizerWebComponent extends MaquetteWebComponent {
  private _data: GraphData = emptyGraphData;
  private _api: VisualizerAPI;
  private readonly visualizer: VisualizerComponent;

  constructor() {
    super();
    this.visualizer = createVisualizer();
    this._api = createVisualizerWebComponentAPI({
      getGraphData: () => this._data,
      emitNavigate: (nodeKey: string) => {
        this.dispatchEvent(new CustomEvent<string>("navigate", { detail: nodeKey, bubbles: true }));
      },
      emitPositionsChanged: () => {
        this.dispatchEvent(new CustomEvent("positionChanged"));
      },
      getLocalStorageKey: (): string | undefined => {
        return this.localStorageKey;
      },
      edgesToHighlight: (): string | undefined => {
        return this.edgesToHighlight;
      },
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAdoptedStyleSheets([css]);
  }

  override render() {
    return this.visualizer.render(this.api, this.projector); // Cannot read private member from an object whose class did not declare it
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

  // Properties: getter and setter where setter calls render
  get api() {
    return this._api;
  }

  set api(newApi: VisualizerAPI) {
    this._api = newApi;
    this.renderNextMicroTask();
  }

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
    }
  }

  static get observedAttributes() {
    return [ATTRIBUTES.dataVariable, ATTRIBUTES.localStorageKey, ATTRIBUTES.edgesToHighlight];
  }
}
