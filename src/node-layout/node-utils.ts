import { NodeData } from "../api";

export function renderAttributes(data: NodeData) {
  let attr: any = {};

  if (data.attributes) {
    for (let [key, val] of Object.entries(data.attributes)) {
      attr[`data-attr-${key}`] = val;
    }
  }
  return attr;
}
