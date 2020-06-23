import { h, MaquetteComponent } from 'maquette';
import { XY } from './interfaces';

export let createDragHandler = (afterDragCallback: () => void, onDraggingCallback: (pos: XY) => void): MaquetteComponent => {
  return {
    render() {
      return h('div.gravi-drag-handler', {
        onmousemove: mouseMoveHandler,
        onmouseup: mouseUpEventHandler
      });
    }
  };

  function mouseMoveHandler(evt: MouseEvent) {
    onDraggingCallback({ x: evt.pageX, y: evt.pageY });
  }

  function mouseUpEventHandler(evt: MouseEvent) {
    afterDragCallback();
  }
};
