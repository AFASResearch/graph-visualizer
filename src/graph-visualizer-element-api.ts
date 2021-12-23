import { EdgeData, GraphData, NodeData, NodePosition, PositionsChange } from "./api";
import { VisualizerAPI } from "./internal-api";

export interface VisualizerWebComponentAPIParameters {
  getGraphData(): GraphData;
  getLocalStorageKey(): string | undefined;
  emitPositionsChanged(change: PositionsChange): void;
  emitSelectionChange(nodeKey: string | undefined): void;
  emitNavigate(nodeKey: string): void;
  edgesToHighlight(): string | undefined;
  nodesToHighlight(): string | undefined;
}

/**
 * The VisualizerAPI that gets used by GraphVisualizerElement that uses its attributes.
 * Can be circumvented by setting its api explicitly.
 * @param parameters access to the element and its attributes
 */
export function createGraphVisualizerElementAPI(
  parameters: VisualizerWebComponentAPIParameters
): VisualizerAPI {
  let { getGraphData, getLocalStorageKey, emitPositionsChanged } = parameters;
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
      return positions ?? []!;
    },
    clearVisualizationEntries() {
      positions = [];
      savePositions();
      emitPositionsChanged({ type: "clear" });
    },
    removeVisualizationEntry(oldEntryKey: string) {
      positions = positions!.filter((e) => e.nodeKey !== oldEntryKey);
      savePositions();
      emitPositionsChanged({ type: "remove", nodeKey: oldEntryKey });
    },
    updateVisualizationEntry(newEntry: NodePosition) {
      let newPositions = positions!.filter((e) => e.nodeKey !== newEntry.nodeKey);
      newPositions.push(newEntry);
      positions = newPositions;
      savePositions();
      emitPositionsChanged({ type: "upsert", position: newEntry });
    },
    onNavigate(nodeKey: string) {
      parameters.emitNavigate(nodeKey);
    },
    onSelectionChange(nodeKey: string | undefined) {
      parameters.emitSelectionChange(nodeKey);
    },
  };
}
