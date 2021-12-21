export function customElement(tagName: string) {
  return function (target: CustomElementConstructor) {
    customElements.define(tagName, target);
  };
}
