import { EdgeData } from "../api";
import { NodeDimensions } from "../node-layout/node-common";
import { renderAngularWithDiamond } from "./angular-with-diamond";
import { renderArrow } from "./arrow";
import { renderDiamond } from "./diamond";
import { renderDottedTriangle } from "./dotted-triangle";
import { EdgeState, RenderedEdge } from "./edge-common";
import { renderLightning } from "./lightning";
import { renderObserve } from "./observe";
import { renderUmbrella } from "./umbrella";

export let edgeFactory = {
  renderEdge(
    data: EdgeData,
    highlighted: boolean,
    from: NodeDimensions,
    to: NodeDimensions,
    state: EdgeState
  ): RenderedEdge {
    return state.renderMemoization.result([data, highlighted, from, to], () => {
      switch (data.style) {
        case "angularWithDiamond":
          return renderAngularWithDiamond(data, highlighted, from, to);
        case "diamond":
          return renderDiamond(data, highlighted, from, to);
        case "umbrella":
          return renderUmbrella(data, highlighted, from, to);
        case "lightning":
          return renderLightning(data, highlighted, from, to);
        case "dotted-triangle":
          return renderDottedTriangle(data, highlighted, from, to);
        case "observe":
          return renderObserve(data, highlighted, from, to);
      }
      return renderArrow(data, highlighted, from, to);
    });
  },
};
