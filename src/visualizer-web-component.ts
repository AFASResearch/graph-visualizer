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
};

@customElement("graph-visualizer")
export class VisualizerWebComponent extends MaquetteWebComponent {
  private _data: GraphData = emptyGraphData;
  private readonly visualizer: VisualizerComponent;
  private readonly api: VisualizerAPI;

  constructor() {
    super();
    this.visualizer = createVisualizer();
    this.api = createVisualizerWebComponentAPI({
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
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAdoptedStyleSheets([css]);
  }

  override render() {
    return this.visualizer.render(this.api, this.projector); // Cannot read private member from an object whose class did not declare it
  }

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

  get data() {
    return this._data;
  }

  set data(data: GraphData | undefined) {
    this._data = data ?? emptyGraphData;
    this.renderNextMicroTask(); // no attribute, so we need to trigger this ourselves
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === ATTRIBUTES.dataVariable && newValue) {
      this._data = (window as any)[newValue];
    }
  }

  static get observedAttributes() {
    return [ATTRIBUTES.dataVariable, ATTRIBUTES.localStorageKey];
  }
}
