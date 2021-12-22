import { EdgeData, GraphData, NodeData, NodePosition, VisualizerAPI } from "./api";

export interface VisualizerWebComponentAPIParameters {
  getGraphData(): GraphData;
  getLocalStorageKey(): string | undefined;
  emitPositionsChanged(): void;
  emitSelectionChange(nodeKey: string | undefined): void;
  emitNavigate(nodeKey: string): void;
  edgesToHighlight(): string | undefined;
  nodesToHighlight(): string | undefined;
}

export function createVisualizerWebComponentAPI(
  parameters: VisualizerWebComponentAPIParameters
): VisualizerAPI {
  let { getGraphData, getLocalStorageKey } = parameters;
  let lastDataPositions: readonly NodePosition[] | undefined;
  let positions: NodePosition[] | undefined;

  function savePositions() {
    let localStorageKey = getLocalStorageKey();
    if (localStorageKey) {
      window.localStorage[localStorageKey] = JSON.stringify(positions);
    }
    // onPositionChanged()
  }

  return {
    getNodes(): ReadonlyMap<string, NodeData> {
      return getGraphData().nodes;
    },
    getEdges(): ReadonlyArray<EdgeData> {
      return getGraphData().edges;
    },
    getEdgesToHighlight: parameters.edgesToHighlight,
    getNodesToHighlight: parameters.nodesToHighlight,
    getNodePositions(): ReadonlyArray<NodePosition> {
      let newPositions = getGraphData().positions;
      if (!newPositions && !positions && getLocalStorageKey()) {
        try {
          positions = JSON.parse(window.localStorage[getLocalStorageKey()!]) ?? [];
        } catch (e) {
          positions = [];
        }
      } else if (newPositions !== lastDataPositions) {
        lastDataPositions = newPositions;
        positions = newPositions ? [...newPositions] : [];
      }
      return positions!;
    },
    clearVisualizationEntries() {
      positions = [];
      savePositions();
    },
    removeVisualizationEntry(oldEntryKey: string) {
      positions = positions!.filter((e) => e.nodeKey !== oldEntryKey);
      savePositions();
    },
    updateVisualizationEntry(newEntry: NodePosition) {
      let newPositions = positions!.filter((e) => e.nodeKey !== newEntry.nodeKey);
      newPositions.push(newEntry);
      positions = newPositions;
      savePositions();
    },
    onNavigate(nodeKey: string) {
      parameters.emitNavigate(nodeKey);
    },
    onSelectionChange(nodeKey: string | undefined) {
      parameters.emitSelectionChange(nodeKey);
    },
  };
}
