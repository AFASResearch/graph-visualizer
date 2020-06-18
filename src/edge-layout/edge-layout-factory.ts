import { EdgeData } from '../api';
import { EdgeLayout, NodeLayout } from '../interfaces';
import { createArrow } from './arrow';

export let edgeLayoutFactory = {
  createEdgeLayout(data: EdgeData, from: NodeLayout, to: NodeLayout): EdgeLayout {
    return createArrow(data, from, to);
  }
};
