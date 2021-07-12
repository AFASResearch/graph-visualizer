import { expect } from "chai";

import { createVisualizer } from "../src/visualizer";

describe("smoke", () => {
  it("can construct", () => {
    expect(createVisualizer).to.be.a("function");
  });
});
