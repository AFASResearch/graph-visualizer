import { EdgeData } from '../api';
import { renderArrow } from './arrow';
import { renderAngularWithDiamond } from './angular-with-diamond';
import { renderDiamond } from './diamond';
import { renderUmbrella } from './umbrella';
import { NodeDimensions } from '../node-layout/node-common';
import { EdgeState, RenderedEdge } from './edge-common';

export let edgeFactory = {
  renderEdge(data: EdgeData, from: NodeDimensions, to: NodeDimensions, state: EdgeState): RenderedEdge {
    return state.renderMemoization.result([data, from, to], () => {
      switch (data.style) {
        case 'angularWithDiamond':
          return renderAngularWithDiamond(data, from, to);
        case 'diamond':
          return renderDiamond(data, from, to);
        case 'umbrella':
          return renderUmbrella(data, from, to);
      }
      return renderArrow(data, from, to);
    });
  }
};
