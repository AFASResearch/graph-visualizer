// Provides all information for a Node to render
import { VNode, VNodeChild } from 'maquette';
import { EdgeData, NodeData } from './api';

export interface XY {
  readonly x: number;
  readonly y: number;
}

export type HorizontalAlign = 'left' | 'right';
export type VerticalAlign = 'top' | 'bottom';

export interface Align {
  horizontal: HorizontalAlign;
  vertical: VerticalAlign;
}

export interface DockPosition extends XY {
  labelAlign: Align;
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
