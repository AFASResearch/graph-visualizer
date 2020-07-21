/* tslint:disable:quotemark object-literal-key-quotes */
import { NodeData, NodePosition, VisualizerAPI } from './api';

let data: any = {
  "nodes": {
    "ERVisualizationNode:entityVisualization_Entity:System": {
      "key": "ERVisualizationNode:entityVisualization_Entity:System",
      "style": "default",
      "displayName": "System",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Comment": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Comment",
      "style": "default",
      "displayName": "Comment",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:EmployeeUser": {
      "key": "ERVisualizationNode:entityVisualization_Entity:EmployeeUser",
      "style": "default",
      "displayName": "EmployeeUser",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ExternalUser": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ExternalUser",
      "style": "default",
      "displayName": "ExternalUser",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Issue": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Issue",
      "style": "default",
      "displayName": "Issue",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:User": {
      "key": "ERVisualizationNode:entityVisualization_Entity:User",
      "style": "default",
      "displayName": "User",
      "typeName": "Entity"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:UserRole": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:UserRole",
      "style": "default",
      "displayName": "userRole",
      "typeName": "Union"
    }
  },
  "edges": [
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:UserRoleEmployee",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:EmployeeUser",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:UserRole"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:UserRoleExternal",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ExternalUser",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:UserRole"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:comments",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Comment",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Issue",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:reporter",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Issue",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:User"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:userRole",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:UserRole",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:User"
    }
  ],
  "positions": []
};

let nodes = new Map<string, NodeData>();
for (let [key, value] of Object.entries(data.nodes)) {
  nodes.set(key, value as any);
}

let positions = data.positions as ReadonlyArray<NodePosition>;

export let demoData: VisualizerAPI = {
  getNodes: () => nodes,
  getEdges: () => data.edges,
  getNodePositions: () => positions,
  updateVisualizationEntry: (newEntry) => {
    let newPositions = positions.filter(e => e.nodeKey !== newEntry.nodeKey);
    newPositions.push(newEntry);
    positions = newPositions;
  },
  removeVisualizationEntry: (oldEntryKey) => {
    positions = positions.filter(e => e.nodeKey !== oldEntryKey);
  }
};
