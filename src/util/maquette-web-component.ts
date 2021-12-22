import { Projector, ProjectorService, VNode, createProjector } from "maquette";

/**
 * A Custom component that uses maquette internally.
 * It follows the maquette convention that string properties are always mirrored as attributes.
 */
export abstract class MaquetteWebComponent extends HTMLElement {
  readonly #projector: Projector;
  #nextMicroTaskPromise: Promise<void> | undefined;

  protected constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.#projector = createProjector({});
    this.#nextMicroTaskPromise = Promise.resolve().then(() => {
      this.#projector.merge(this.shadowRoot as unknown as HTMLElement, () => this.render());
      this.#nextMicroTaskPromise = undefined;
    });
  }

  renderNextMicroTask() {
    if (!this.#nextMicroTaskPromise) {
      this.#nextMicroTaskPromise = Promise.resolve().then(() => {
        this.#nextMicroTaskPromise = undefined;
        this.#projector.renderNow();
      });
    }
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    this.renderNextMicroTask();
  }

  connectedCallback() {
    this.renderNextMicroTask();
  }

  setAdoptedStyleSheets(stylesheets: CSSStyleSheet[]) {
    (this.shadowRoot as any).adoptedStyleSheets = stylesheets;
  }

  abstract render(): VNode;

  get projector(): ProjectorService {
    return this.#projector;
  }
}
