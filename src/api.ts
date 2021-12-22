declare global {
  // Used for describing new event listeners that can be added to
  interface HTMLElementEventMap {
    navigate: CustomEvent<string>;
    selectionchange: CustomEvent<string | undefined>;
    positionschange: CustomEvent<PositionsChange>;
  }
}

export interface NodeData {
  readonly key: string;
  readonly typeName?: string;
  readonly displayName: string;
  readonly shortName?: string;
  readonly style: string;
  readonly attributes?: { [name: string]: string | number | boolean };
}

export interface EdgeData {
  readonly key: string;
  readonly displayName?: string;
  readonly fromNode: string;
  readonly toNode: string;
  readonly style: string;
  readonly fromLabel?: string;
  readonly toLabel?: string;
  readonly attributes?: { [name: string]: string | number | boolean };
}

export interface NodePosition {
  readonly nodeKey: string;
  readonly x: number;
  readonly y: number;
}

export interface PositionsCleared {
  type: "clear";
}

export interface PositionRemoved {
  type: "remove";
  nodeKey: string;
}

export interface PositionUpserted {
  type: "upsert";
  position: NodePosition;
}
export type PositionsChange = PositionsCleared | PositionRemoved | PositionUpserted;

export interface GraphData {
  nodes: ReadonlyMap<string, NodeData>;
  edges: readonly EdgeData[];
  positions?: readonly NodePosition[];
}
