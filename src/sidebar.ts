import { h } from 'maquette';
import { VisualizerAPI } from './visualizer';

export function createSidebarState() {
  return {
    searchText: ''
  };
}

export type SidebarState = ReturnType<typeof createSidebarState>;

export function renderSidebar(state: SidebarState, api: VisualizerAPI) {
  return h('div.gravi-sidebar', [
    h('input', {
      type: 'text',
      oninput(ev) {
        state.searchText = (ev.currentTarget as HTMLInputElement).value;
      }
    }),
    h('ul.gravi-list', [
      api.getNodes().map(n => h('li', { key: n }, [n.displayName]))
    ])
  ]);
}
