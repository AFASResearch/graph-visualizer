// Provides all information for a Node to render
import { VNode, VNodeChild } from 'maquette';
import { EdgeData, NodeData } from './api';

export interface XY {
  x: number;
  y: number;
}

export interface NodeModel extends XY {
  data: NodeData;
}

export interface EdgeLayout {
  renderLine(): VNode;
  renderDecorations(): VNodeChild;
}

// may get different implementations for each style
export interface NodeLayout extends XY {
  model: NodeModel;
  left: number;
  right: number;
  bottom: number;
  top: number;
  height: number;
  width: number;
  render(): VNode;
}
