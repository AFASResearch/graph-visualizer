// Provides all information for a Node to render
import { VNode, VNodeChild } from 'maquette';
import { EdgeData, NodeData, NodePosition } from './api';

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
