import { EdgeData } from '../api';
import { EdgeLayout, NodeLayout } from '../interfaces';
import { createArrow } from './arrow';
import { createAngularWithDiamond } from './angular-with-diamond';
import { createDiamond } from './diamond';
import { createUmbrella } from './umbrella';

export let edgeLayoutFactory = {
  createEdgeLayout(data: EdgeData, from: NodeLayout, to: NodeLayout): EdgeLayout {
    switch (data.style) {
      case 'angularWithDiamond':
        return createAngularWithDiamond(data, from, to);
      case 'diamond':
        return createDiamond(data, from, to);
      case 'umbrella':
        return createUmbrella(data, from, to);
    }
    return createArrow(data, from, to);
  }
};
