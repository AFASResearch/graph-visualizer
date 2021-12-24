import { EdgeData, GraphData, NodeData, NodePosition, PositionsChange } from "./api";
import { VisualizerAPI } from "./internal-api";
import { createMemoization } from "./utils";

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
  let nodeMapMemoization = createMemoization<ReadonlyMap<string, NodeData>>();

  function savePositions() {
    let localStorageKey = getLocalStorageKey();
    if (localStorageKey) {
      window.localStorage[localStorageKey] = JSON.stringify(positions);
    }
  }

  return {
    getNodes(): ReadonlyMap<string, NodeData> {
      let nodeList = getGraphData().nodes;
      return nodeMapMemoization.result(
        [nodeList],
        () => new Map<string, NodeData>(nodeList.map((n) => [n.key, n]))
      );
    },
    getEdges(): ReadonlyArray<EdgeData> {
      return getGraphData().edges;
    },
    getEdgesToHighlight: parameters.edgesToHighlight,
    getNodesToHighlight: parameters.nodesToHighlight,
    getNodePositions(): ReadonlyArray<NodePosition> {
      let newPositions = getGraphData().positions;
      if (lastDataPositions !== newPositions || !positions) {
        lastDataPositions = newPositions;
        if (getLocalStorageKey()) {
          // localstorage always wins after loading graph data
          try {
            positions = JSON.parse(window.localStorage[getLocalStorageKey()!]) ?? [];
          } catch (e) {
            positions = newPositions ? [...newPositions] : [];
          }
        } else {
          positions = newPositions ? [...newPositions] : [];
        }
      }
      return positions!;
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
