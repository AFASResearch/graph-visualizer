// Skypack released version
import graphVisualizer from 'https://cdn.skypack.dev/graph-visualizer@0.10.4';
// Local webpack
// import '../build/webpack/customElement.js';

window.addEventListener('DOMContentLoaded', () => {
  let graphVisualizer = document.querySelector('graph-visualizer');
  let detail = document.querySelector('#details');
  graphVisualizer.addEventListener("selectionchange", (ev) => {
    let node = graphVisualizer.data.nodes.find(n => n.key === ev.detail);
    detail.textContent = node ? JSON.stringify(node, undefined, 2) : '';
  });
  document.querySelector('select').addEventListener('change', (evt) => {
    graphVisualizer.setAttribute("data-url", evt.target.value);
  });
});
