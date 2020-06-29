import { h } from 'maquette';
import { XY } from './interfaces';

export function renderDragHandler(afterDragCallback: () => void, onDraggingCallback: (pos: XY) => void) {
  return h('div.gravi-drag-handler', {
    onmousemove: mouseMoveHandler,
    onmouseup: mouseUpEventHandler
  });

  function mouseMoveHandler(evt: MouseEvent) {
    onDraggingCallback({ x: evt.pageX, y: evt.pageY });
  }

  function mouseUpEventHandler(evt: MouseEvent) {
    afterDragCallback();
  }
}
