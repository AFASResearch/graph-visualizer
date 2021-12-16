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
    from: NodeDimensions,
    to: NodeDimensions,
    state: EdgeState
  ): RenderedEdge {
    return state.renderMemoization.result([data, from, to], () => {
      switch (data.style) {
        case "angularWithDiamond":
          return renderAngularWithDiamond(data, from, to);
        case "diamond":
          return renderDiamond(data, from, to);
        case "umbrella":
          return renderUmbrella(data, from, to);
        case "lightning":
          return renderLightning(data, from, to);
        case "dotted-triangle":
          return renderDottedTriangle(data, from, to);
        case "observe":
          return renderObserve(data, from, to);
      }
      return renderArrow(data, from, to);
    });
  },
};
