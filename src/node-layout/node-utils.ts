import { NodeData } from "../api";

export function renderAttributes(data: NodeData) {
  let attr: any = {};

  Object.entries(data.attributes || {}).forEach(([key, val]) => {
    attr[`data-attr-${key}`] = val;
  });
  return attr;
}
