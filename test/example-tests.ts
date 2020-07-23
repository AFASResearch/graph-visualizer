import { createVisualizer } from '../src/visualizer';
import { expect } from 'chai';

describe('smoke', () => {
  it('can construct', () => {
    expect(createVisualizer).to.be.a('function');
  });
});
