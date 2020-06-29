import { renderVisualizer } from '../src/visualizer';
import { expect } from 'chai';

describe('smoke', () => {
  it('can construct', () => {
    expect(renderVisualizer).to.be.a('function');
  });
});
