const cssText = `
:host {
  position: relative;
  display: block;
  width: 1000px;
  height: 600px;
  --color-background: white;
  --color-primary: black;
  --color-secondary: gray;
}

.gravi {
  user-select: none;
}

.gravi-graph {
  width: 100%;
  height: 100%;
}

.gravi-graph > svg {
  width: 100%;
  height: 100%;
}

.gravi-drag-handler {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  cursor: move;
}

.gravi-summary {
  height: 30px;
  width: 100%;
  background-color: #ccc;
  position: absolute;
  bottom: 0;
  line-height: 30px;
  padding-left: 10px;
}

.gravi-open-sidebar-button {
  position: absolute;
  top: 6px;
  right: 6px;
  height: 25px;
  width: 30px;
}

.gravi-clear-button {
  position: absolute;
  top: 6px;
  right: 41px;
  height: 25px;
  width: 30px;
}

.gravi-sidebar {
  display: flex;
  flex-direction: column;
  background: white;

  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 400px;
  border-left: 1px solid darkgray;
}

.gravi-sidebar > input {
  flex: 0 0 auto;
  height: 24px;
  margin: 35px 16px 4px 18px;
  width: 368px;
  left: 0;
}

.gravi-sidebar > .gravi-filter {
  height: 24px;
  margin: 5px 16px 4px 18px;
  width: 366px;
  padding: 4px;
  border: dotted 1px gray;
  background-color: lightgray;
}

.gravi-sidebar > .gravi-filter > button {
  margin-right: 4px;
}
.gravi-sidebar > .gravi-filter > span {
  display: inline-block;
  width: 338px;
  white-space: nowrap;
}

.gravi-sidebar > ul {
  flex: 1 1 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 400px;
}

.gravi-sidebar > ul > li {
  list-style: none;
  padding: 12px 16px;
  border-bottom: 1px solid lightgray;
  background-color: var(--color-background);
  color: var(--color-secondary);
}

.gravi-sidebar > ul > li > span {
  display: block;
}
.gravi-sidebar > ul > li > .name {
  font-size: 10px;
}

*[data-highlighted="true"] {
  filter: drop-shadow(0px 0px 4px red) drop-shadow(0px 0px 4px red);
}
`;

let cssCache: CSSStyleSheet | undefined;

export function getGraviCss(): CSSStyleSheet {
  if (!cssCache) {
    cssCache = new CSSStyleSheet();
    (cssCache as any).replaceSync(cssText);
  }
  return cssCache;
}
