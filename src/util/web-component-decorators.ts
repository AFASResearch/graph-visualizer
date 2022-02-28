export function customElement(tagName: string) {
  return function (target: CustomElementConstructor) {
    if (customElements.get(tagName) === undefined) {
      customElements.define(tagName, target);
    }
  };
}
