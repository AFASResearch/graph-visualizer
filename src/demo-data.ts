/* tslint:disable:quotemark object-literal-key-quotes max-line-length */
import { NodeData, NodePosition, VisualizerAPI } from "./api";

// Can be obtained by putting a breakpoint graph.ts:80 and running `JSON.stringify(Object.fromEntries(nodes.entries()))` and `JSON.stringify(edges)`
let data: any = {
  nodes: {
    "ERVisualizationNode:entityVisualization_Entity:System": {
      key: "ERVisualizationNode:entityVisualization_Entity:System",
      style: "default",
      displayName: "System",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:SystemMessage": {
      key: "ERVisualizationNode:entityVisualization_Entity:SystemMessage",
      style: "default",
      displayName: "SystemMessage",
      typeName: "Entity",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:theSystem": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:theSystem",
      style: "small-circle",
      displayName: "theSystem",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:systemMechanism": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:systemMechanism",
      style: "big-circle",
      displayName: "theSystem",
    },
    "ERVisualizationNode:entityVisualization_Entity:AddButton": {
      key: "ERVisualizationNode:entityVisualization_Entity:AddButton",
      style: "default",
      displayName: "AddButton",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:AndExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:AndExpression",
      style: "default",
      displayName: "AndExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand": {
      key: "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand",
      style: "default",
      displayName: "AndExpressionOperand",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Attribute": {
      key: "ERVisualizationNode:entityVisualization_Entity:Attribute",
      style: "default",
      displayName: "Attribute",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConcatExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConcatExpression",
      style: "default",
      displayName: "ConcatExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand",
      style: "default",
      displayName: "ConcatExpressionOperand",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantFalseExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConstantFalseExpression",
      style: "default",
      displayName: "ConstantFalseExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantNumberExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConstantNumberExpression",
      style: "default",
      displayName: "ConstantNumberExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantStringExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConstantStringExpression",
      style: "default",
      displayName: "ConstantStringExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantTrueExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConstantTrueExpression",
      style: "default",
      displayName: "ConstantTrueExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Constraint": {
      key: "ERVisualizationNode:entityVisualization_Entity:Constraint",
      style: "default",
      displayName: "Constraint",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstraintField": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConstraintField",
      style: "default",
      displayName: "ConstraintField",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstraintMechanismIngredient": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConstraintMechanismIngredient",
      style: "default",
      displayName: "ConstraintMechanismIngredient",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstraintType": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
      style: "default",
      displayName: "ConstraintType",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression",
      style: "default",
      displayName: "DefaultDisplayNameExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression",
      style: "default",
      displayName: "DeriveKeyExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Entity": {
      key: "ERVisualizationNode:entityVisualization_Entity:Entity",
      style: "default",
      displayName: "Entity",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:EntityUnion": {
      key: "ERVisualizationNode:entityVisualization_Entity:EntityUnion",
      style: "default",
      displayName: "EntityUnion",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember": {
      key: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
      style: "default",
      displayName: "EntityUnionMember",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:EqualsExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:EqualsExpression",
      style: "default",
      displayName: "EqualsExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:FieldExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:FieldExpression",
      style: "default",
      displayName: "FieldExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:HasValueExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:HasValueExpression",
      style: "default",
      displayName: "HasValueExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate": {
      key: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
      style: "default",
      displayName: "InstanceTemplate",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpression",
      style: "default",
      displayName: "InstanceTemplateExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpressionIngredient": {
      key: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpressionIngredient",
      style: "default",
      displayName: "InstanceTemplateExpressionIngredient",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateFieldValue": {
      key: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateFieldValue",
      style: "default",
      displayName: "InstanceTemplateFieldValue",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression",
      style: "default",
      displayName: "InterpolateExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder": {
      key: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder",
      style: "default",
      displayName: "InterpolateExpressionPlaceholder",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Mechanism": {
      key: "ERVisualizationNode:entityVisualization_Entity:Mechanism",
      style: "default",
      displayName: "Mechanism",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient": {
      key: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
      style: "default",
      displayName: "MechanismIngredient",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MechanismIngredientExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredientExpression",
      style: "default",
      displayName: "MechanismIngredientExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Page": {
      key: "ERVisualizationNode:entityVisualization_Entity:Page",
      style: "default",
      displayName: "Page",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:PagePart": {
      key: "ERVisualizationNode:entityVisualization_Entity:PagePart",
      style: "default",
      displayName: "PagePart",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression",
      style: "default",
      displayName: "PlaceholderIngredientExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Reference": {
      key: "ERVisualizationNode:entityVisualization_Entity:Reference",
      style: "default",
      displayName: "Reference",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Relation": {
      key: "ERVisualizationNode:entityVisualization_Entity:Relation",
      style: "default",
      displayName: "Relation",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:RelationType": {
      key: "ERVisualizationNode:entityVisualization_Entity:RelationType",
      style: "default",
      displayName: "RelationType",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ThisExpression": {
      key: "ERVisualizationNode:entityVisualization_Entity:ThisExpression",
      style: "default",
      displayName: "ThisExpression",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ValueDefault": {
      key: "ERVisualizationNode:entityVisualization_Entity:ValueDefault",
      style: "default",
      displayName: "ValueDefault",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ValueRule": {
      key: "ERVisualizationNode:entityVisualization_Entity:ValueRule",
      style: "default",
      displayName: "ValueRule",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:AssignElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:AssignElement",
      style: "default",
      displayName: "AssignElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:AssignPageAction": {
      key: "ERVisualizationNode:entityVisualization_Entity:AssignPageAction",
      style: "default",
      displayName: "AssignPageAction",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:BackPageAction": {
      key: "ERVisualizationNode:entityVisualization_Entity:BackPageAction",
      style: "default",
      displayName: "BackPageAction",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ConditionalCssClass": {
      key: "ERVisualizationNode:entityVisualization_Entity:ConditionalCssClass",
      style: "default",
      displayName: "ConditionalCssClass",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ElseClause": {
      key: "ERVisualizationNode:entityVisualization_Entity:ElseClause",
      style: "default",
      displayName: "ElseClause",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ElseIfClause": {
      key: "ERVisualizationNode:entityVisualization_Entity:ElseIfClause",
      style: "default",
      displayName: "ElseIfClause",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:GroupElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:GroupElement",
      style: "default",
      displayName: "GroupElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:HtmlElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
      style: "default",
      displayName: "HtmlElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:IfElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:IfElement",
      style: "default",
      displayName: "IfElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:IncludePageElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:IncludePageElement",
      style: "default",
      displayName: "IncludePageElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadFilter": {
      key: "ERVisualizationNode:entityVisualization_Entity:LoadFilter",
      style: "default",
      displayName: "LoadFilter",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
      style: "default",
      displayName: "LoadInstanceElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      style: "default",
      displayName: "LoadInstancesElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy": {
      key: "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
      style: "default",
      displayName: "LoadOrderBy",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction": {
      key: "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction",
      style: "default",
      displayName: "NavigatePageAction",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:RedirectElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:RedirectElement",
      style: "default",
      displayName: "RedirectElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:StorePageAction": {
      key: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
      style: "default",
      displayName: "StorePageAction",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:VisualizerElement": {
      key: "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      style: "default",
      displayName: "VisualizerElement",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcButton": {
      key: "ERVisualizationNode:entityVisualization_Entity:MdcButton",
      style: "default",
      displayName: "MdcButton",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcList": {
      key: "ERVisualizationNode:entityVisualization_Entity:MdcList",
      style: "default",
      displayName: "MdcList",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcRadioList": {
      key: "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      style: "default",
      displayName: "MdcRadioList",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcTextField": {
      key: "ERVisualizationNode:entityVisualization_Entity:MdcTextField",
      style: "default",
      displayName: "MdcTextField",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:StmExpandCard": {
      key: "ERVisualizationNode:entityVisualization_Entity:StmExpandCard",
      style: "default",
      displayName: "StmExpandCard",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction": {
      key: "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction",
      style: "default",
      displayName: "StmExpandCardCreateAction",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:StmLinkField": {
      key: "ERVisualizationNode:entityVisualization_Entity:StmLinkField",
      style: "default",
      displayName: "StmLinkField",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:DraftActions": {
      key: "ERVisualizationNode:entityVisualization_Entity:DraftActions",
      style: "default",
      displayName: "DraftActions",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:FieldRow": {
      key: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
      style: "default",
      displayName: "FieldRow",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InlineInstance": {
      key: "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
      style: "default",
      displayName: "InlineInstance",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance": {
      key: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
      style: "default",
      displayName: "InstanceMaintenance",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ItemSelector": {
      key: "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      style: "default",
      displayName: "ItemSelector",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:List": {
      key: "ERVisualizationNode:entityVisualization_Entity:List",
      style: "default",
      displayName: "List",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MainMenuItem": {
      key: "ERVisualizationNode:entityVisualization_Entity:MainMenuItem",
      style: "default",
      displayName: "MainMenuItem",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Maintenance": {
      key: "ERVisualizationNode:entityVisualization_Entity:Maintenance",
      style: "default",
      displayName: "Maintenance",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MaintenanceConfig": {
      key: "ERVisualizationNode:entityVisualization_Entity:MaintenanceConfig",
      style: "default",
      displayName: "MaintenanceConfig",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MaintenanceList": {
      key: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
      style: "default",
      displayName: "MaintenanceList",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Picker": {
      key: "ERVisualizationNode:entityVisualization_Entity:Picker",
      style: "default",
      displayName: "Picker",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:RelatedInstances": {
      key: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      style: "default",
      displayName: "RelatedInstances",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:Section": {
      key: "ERVisualizationNode:entityVisualization_Entity:Section",
      style: "default",
      displayName: "Section",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcLabeledAction": {
      key: "ERVisualizationNode:entityVisualization_Entity:MdcLabeledAction",
      style: "default",
      displayName: "MdcLabeledAction",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcMenuButton": {
      key: "ERVisualizationNode:entityVisualization_Entity:MdcMenuButton",
      style: "default",
      displayName: "MdcMenuButton",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar": {
      key: "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar",
      style: "default",
      displayName: "MdcTopAppBar",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ERVisualization": {
      key: "ERVisualizationNode:entityVisualization_Entity:ERVisualization",
      style: "default",
      displayName: "ERVisualization",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge": {
      key: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
      style: "default",
      displayName: "ERVisualizationEdge",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode": {
      key: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
      style: "default",
      displayName: "ERVisualizationNode",
      typeName: "Entity",
    },
    "ERVisualizationNode:entityVisualization_Entity:ERVisualizationPosition": {
      key: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationPosition",
      style: "default",
      displayName: "ERVisualizationPosition",
      typeName: "Entity",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      style: "default",
      displayName: "ConstraintPath",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
      style: "default",
      displayName: "EntityOrUnion",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:Expression": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      style: "default",
      displayName: "Expression",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:Field": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      style: "default",
      displayName: "Field",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
      style: "default",
      displayName: "ElementContainer",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:PageAction": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
      style: "default",
      displayName: "PageAction",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer",
      style: "default",
      displayName: "PageActionContainer",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:PageElement": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
      style: "default",
      displayName: "PageElement",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
      style: "default",
      displayName: "StructureContainer",
      typeName: "Union",
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement": {
      key: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
      style: "default",
      displayName: "StructureElement",
      typeName: "Union",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:attributeOnUnion-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:attributeOnUnion-instanceTemplate1",
        style: "small-circle",
        displayName: "attributeOnUnion",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate1",
        style: "small-circle",
        displayName: "hasValue",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate2",
        style: "small-circle",
        displayName: "hasNoValue",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate3",
        style: "small-circle",
        displayName: "equalsStringConstant",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate4":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate4",
        style: "small-circle",
        displayName: "equalsNumberConstant",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate5":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate5",
        style: "small-circle",
        displayName: "equalsTrue",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate6":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate6",
        style: "small-circle",
        displayName: "equalsFalse",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate7":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate7",
        style: "small-circle",
        displayName: "equalsPathValue",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate8":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate8",
        style: "small-circle",
        displayName: "notEqualsStringConstant",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate1",
        style: "small-circle",
        displayName: "displayNameForEntity",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate2",
        style: "small-circle",
        displayName: "displayNameForEntity",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
        style: "small-circle",
        displayName: "displayNameForEntityAndUnion",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forExpression-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forExpression-instanceTemplate1",
        style: "small-circle",
        displayName: "forExpression",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:referenceOnUnion-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:referenceOnUnion-instanceTemplate1",
        style: "small-circle",
        displayName: "referenceOnUnion",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOne-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOne-instanceTemplate1",
        style: "small-circle",
        displayName: "relationManyToOne",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsMany-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsMany-instanceTemplate1",
        style: "small-circle",
        displayName: "relationOneOwnsMany",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOne-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOne-instanceTemplate1",
        style: "small-circle",
        displayName: "relationOneOwnsOne",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate1",
        style: "small-circle",
        displayName: "manyToOne",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate2",
        style: "small-circle",
        displayName: "manyToMany",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate3",
        style: "small-circle",
        displayName: "oneOwnsMany",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate4":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate4",
        style: "small-circle",
        displayName: "oneOwnsOne",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate1": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate1",
      style: "small-circle",
      displayName: "System",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate2": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate2",
      style: "small-circle",
      displayName: "SystemMessage",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate3": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate3",
      style: "small-circle",
      displayName: "systemMessageDetails",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate4": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate4",
      style: "small-circle",
      displayName: "systemHasUpdates",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate5": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate5",
      style: "small-circle",
      displayName: "systemHasErrors",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate6": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate6",
      style: "small-circle",
      displayName: "systemMechanism",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate7": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate7",
      style: "small-circle",
      displayName: "theSystem",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate1": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate1",
      style: "small-circle",
      displayName: "titlePartForPage",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate2": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate2",
      style: "small-circle",
      displayName: "menuPartForPage",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate3": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate3",
      style: "small-circle",
      displayName: "contentPartForPage",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate1",
        style: "small-circle",
        displayName: "main",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
        style: "small-circle",
        displayName: "fields",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate3",
        style: "small-circle",
        displayName: "fieldsForInstanceMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forEntityAndMaintenanceConfig-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forEntityAndMaintenanceConfig-instanceTemplate1",
        style: "small-circle",
        displayName: "forEntityAndMaintenanceConfig",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowWithOneToMany-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowWithOneToMany-instanceTemplate1",
        style: "small-circle",
        displayName: "forFieldRowWithOneToMany",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndAttribute-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndAttribute-instanceTemplate1",
        style: "small-circle",
        displayName: "forInstanceMaintenanceAndAttribute",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1",
        style: "small-circle",
        displayName: "forInstanceMaintenanceAndManyToOneRelation",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenance-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenance-instanceTemplate1",
        style: "small-circle",
        displayName: "forMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceConfig-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceConfig-instanceTemplate1",
        style: "small-circle",
        displayName: "forMaintenanceConfig",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1",
        style: "small-circle",
        displayName: "instanceMaintenanceOneOwnsManyRelation",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1",
        style: "small-circle",
        displayName: "instanceMaintenanceOneOwnsOneRelation",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1",
        style: "small-circle",
        displayName: "instanceMaintenanceUnionMemberOneOwnsManyRelation",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityRelatedInstances-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityRelatedInstances-instanceTemplate1",
        style: "small-circle",
        displayName: "structureForEntityRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityUnionMemberRelatedInstances-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityUnionMemberRelatedInstances-instanceTemplate1",
        style: "small-circle",
        displayName: "structureForEntityUnionMemberRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate1",
        style: "small-circle",
        displayName: "structureForMaintenanceList",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate2",
        style: "small-circle",
        displayName: "structureForMaintenanceList",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate3",
        style: "small-circle",
        displayName: "structureForMaintenanceList",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate4":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate4",
        style: "small-circle",
        displayName: "structureForMaintenanceList",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceListWithMenu-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceListWithMenu-instanceTemplate1",
        style: "small-circle",
        displayName: "structureForMaintenanceListWithMenu",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate1",
        style: "small-circle",
        displayName: "structureForPicker",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate2",
        style: "small-circle",
        displayName: "structureForPicker",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate3",
        style: "small-circle",
        displayName: "structureForPicker",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
        style: "small-circle",
        displayName: "structureForRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate2",
        style: "small-circle",
        displayName: "structureForRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate3",
        style: "small-circle",
        displayName: "structureForRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate1",
        style: "small-circle",
        displayName: "forAddButton",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate2",
        style: "small-circle",
        displayName: "forAddButton",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate3",
        style: "small-circle",
        displayName: "forAddButton",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate4":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate4",
        style: "small-circle",
        displayName: "forAddButton",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate1",
        style: "small-circle",
        displayName: "forDraftActions",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate2",
        style: "small-circle",
        displayName: "forDraftActions",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate3",
        style: "small-circle",
        displayName: "draftActionsActivate",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate4":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate4",
        style: "small-circle",
        displayName: "storeActivate",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate5":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate5",
        style: "small-circle",
        displayName: "storeBack",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate6":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate6",
        style: "small-circle",
        displayName: "draftActionsDiscard",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate7":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate7",
        style: "small-circle",
        displayName: "storeTrash",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate8":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate8",
        style: "small-circle",
        displayName: "trashBack",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate1",
        style: "small-circle",
        displayName: "forFieldRow",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
        style: "small-circle",
        displayName: "forFieldRow",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate3",
        style: "small-circle",
        displayName: "forFieldRow",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowManyToOne-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowManyToOne-instanceTemplate1",
        style: "small-circle",
        displayName: "forFieldRowManyToOne",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowString-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowString-instanceTemplate1",
        style: "small-circle",
        displayName: "forFieldRowString",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstance-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstance-instanceTemplate1",
        style: "small-circle",
        displayName: "forInlineInstance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstanceAndEntityUnionMember-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstanceAndEntityUnionMember-instanceTemplate1",
        style: "small-circle",
        displayName: "forInlineInstanceAndEntityUnionMember",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate1",
        style: "small-circle",
        displayName: "forInstanceMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate10":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate10",
        style: "small-circle",
        displayName: "forInstanceMaintenanceMenu",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
        style: "small-circle",
        displayName: "forInstanceMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate12":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate12",
        style: "small-circle",
        displayName: "trashAction",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate13":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate13",
        style: "small-circle",
        displayName: "trash",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate14":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate14",
        style: "small-circle",
        displayName: "untrashAction",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate15":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate15",
        style: "small-circle",
        displayName: "untrash",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate16":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate16",
        style: "small-circle",
        displayName: "forInstanceMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate2",
        style: "small-circle",
        displayName: "forInstanceMaintenanceTitle",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate3",
        style: "small-circle",
        displayName: "assignInstanceDisplayName",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate4":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate4",
        style: "small-circle",
        displayName: "forInstanceMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
        style: "small-circle",
        displayName: "forInstanceMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate6":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate6",
        style: "small-circle",
        displayName: "activeTitleSpan",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate7":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate7",
        style: "small-circle",
        displayName: "forInstanceMaintenance",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate8":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate8",
        style: "small-circle",
        displayName: "draftTitleSpan",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate9":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate9",
        style: "small-circle",
        displayName: "trashedTitleDel",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate1",
        style: "small-circle",
        displayName: "forItemSelector",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate2",
        style: "small-circle",
        displayName: "forItemSelector",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
        style: "small-circle",
        displayName: "forItemSelector",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate4":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate4",
        style: "small-circle",
        displayName: "forItemSelector",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate5":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate5",
        style: "small-circle",
        displayName: "forItemSelector",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate1": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate1",
      style: "small-circle",
      displayName: "forList",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate2": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate2",
      style: "small-circle",
      displayName: "forList",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate3": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate3",
      style: "small-circle",
      displayName: "forList",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate1",
        style: "small-circle",
        displayName: "appFrameDrawerListItem",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate2",
        style: "small-circle",
        displayName: "appFrameDrawerListItemText",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate1",
        style: "small-circle",
        displayName: "forMaintenanceList",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate2":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate2",
        style: "small-circle",
        displayName: "maintenanceListPageTitle",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate1": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate1",
      style: "small-circle",
      displayName: "forPicker",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate2": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate2",
      style: "small-circle",
      displayName: "forPicker",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forRelatedInstances-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forRelatedInstances-instanceTemplate1",
        style: "small-circle",
        displayName: "forRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSection-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSection-instanceTemplate1",
        style: "small-circle",
        displayName: "forSection",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithHeader-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithHeader-instanceTemplate1",
        style: "small-circle",
        displayName: "forSectionWithHeader",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithSubheader-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithSubheader-instanceTemplate1",
        style: "small-circle",
        displayName: "forSectionWithSubheader",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate1": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate1",
      style: "small-circle",
      displayName: "global",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate10": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate10",
      style: "small-circle",
      displayName: "appFrameTopAppBarSection",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate11": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate11",
      style: "small-circle",
      displayName: "appFrameTopAppBarNavigationIcon",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate12": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate12",
      style: "small-circle",
      displayName: "appFrameTopAppBarNavigationTitle",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate13": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate13",
      style: "small-circle",
      displayName: "title",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate14": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate14",
      style: "small-circle",
      displayName: "appFrameTopAppBarSectionEnd",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate15": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate15",
      style: "small-circle",
      displayName: "loadSystemForUpdateApplication",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate16": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate16",
      style: "small-circle",
      displayName: "ifSystemHasErrorsForUpdateApplication",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate17": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate17",
      style: "small-circle",
      displayName: "hasErrors",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate18": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate18",
      style: "small-circle",
      displayName: "ifSystemHasUpdatesForUpdateApplication",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate19": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate19",
      style: "small-circle",
      displayName: "updateApplication",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate2": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate2",
      style: "small-circle",
      displayName: "global",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate20": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate20",
      style: "small-circle",
      displayName: "menu",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate21": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate21",
      style: "small-circle",
      displayName: "appFrameAdjustedContent",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate22": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate22",
      style: "small-circle",
      displayName: "appFrame",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
      style: "small-circle",
      displayName: "appFrameRoot",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate4": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate4",
      style: "small-circle",
      displayName: "appFrameDrawer",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate5": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate5",
      style: "small-circle",
      displayName: "appFrameDrawerContent",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate6": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate6",
      style: "small-circle",
      displayName: "appFrameDrawerList",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate7": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate7",
      style: "small-circle",
      displayName: "appFrameDrawerScrim",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate8": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate8",
      style: "small-circle",
      displayName: "appFrameTopAppBar",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate9": {
      key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate9",
      style: "small-circle",
      displayName: "appFrameTopAppBarRow",
    },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
        style: "small-circle",
        displayName: "entityVisualization",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1",
        style: "small-circle",
        displayName: "erVisualizationForInstanceTemplateExpression",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1",
        style: "small-circle",
        displayName: "erVisualizationForMechanism",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
        style: "small-circle",
        displayName: "erVisualizationForMechanismIngredient",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1",
        style: "small-circle",
        displayName: "erVisualizationForMechanismToTemplate",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
        style: "small-circle",
        displayName: "erVisualizationForTemplate",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1",
        style: "small-circle",
        displayName: "erVisualizationForTemplateToEntity",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
        style: "small-circle",
        displayName: "relationManyToOneErVisualization",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
        style: "small-circle",
        displayName: "relationOneOwnsManyErVisualization",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
        style: "small-circle",
        displayName: "relationOneOwnsOneErVisualization",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionMemberErVisualization-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionMemberErVisualization-instanceTemplate1",
        style: "small-circle",
        displayName: "unionMemberErVisualization",
      },
    "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1":
      {
        key: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
        style: "small-circle",
        displayName: "unionVisualization",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:attributeOnUnion": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:attributeOnUnion",
      style: "big-circle",
      displayName: "attributeOnUnion",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      style: "big-circle",
      displayName: "constraintTypes",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntity": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntity",
      style: "big-circle",
      displayName: "displayNameForEntity",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntityAndUnion": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntityAndUnion",
      style: "big-circle",
      displayName: "displayNameForEntityAndUnion",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forExpression": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forExpression",
      style: "big-circle",
      displayName: "forExpression",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:referenceOnUnion": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:referenceOnUnion",
      style: "big-circle",
      displayName: "referenceOnUnion",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOne": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOne",
      style: "big-circle",
      displayName: "relationManyToOne",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsMany": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsMany",
      style: "big-circle",
      displayName: "relationOneOwnsMany",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOne": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOne",
      style: "big-circle",
      displayName: "relationOneOwnsOne",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationTypes": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationTypes",
      style: "big-circle",
      displayName: "relationTypes",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      style: "big-circle",
      displayName: "system",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPage": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPage",
      style: "big-circle",
      displayName: "forPage",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:fieldsForInstanceMaintenance": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:fieldsForInstanceMaintenance",
      style: "big-circle",
      displayName: "fieldsForInstanceMaintenance",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forEntityAndMaintenanceConfig": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forEntityAndMaintenanceConfig",
      style: "big-circle",
      displayName: "forEntityAndMaintenanceConfig",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowWithOneToMany": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowWithOneToMany",
      style: "big-circle",
      displayName: "forFieldRowWithOneToMany",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndAttribute":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndAttribute",
        style: "big-circle",
        displayName: "forInstanceMaintenanceAndAttribute",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndManyToOneRelation":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndManyToOneRelation",
        style: "big-circle",
        displayName: "forInstanceMaintenanceAndManyToOneRelation",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenance": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenance",
      style: "big-circle",
      displayName: "forMaintenance",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceConfig": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceConfig",
      style: "big-circle",
      displayName: "forMaintenanceConfig",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsManyRelation":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsManyRelation",
        style: "big-circle",
        displayName: "instanceMaintenanceOneOwnsManyRelation",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsOneRelation":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsOneRelation",
        style: "big-circle",
        displayName: "instanceMaintenanceOneOwnsOneRelation",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceUnionMemberOneOwnsManyRelation":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceUnionMemberOneOwnsManyRelation",
        style: "big-circle",
        displayName: "instanceMaintenanceUnionMemberOneOwnsManyRelation",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityRelatedInstances":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityRelatedInstances",
        style: "big-circle",
        displayName: "structureForEntityRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityUnionMemberRelatedInstances":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityUnionMemberRelatedInstances",
        style: "big-circle",
        displayName: "structureForEntityUnionMemberRelatedInstances",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceList": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceList",
      style: "big-circle",
      displayName: "structureForMaintenanceList",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceListWithMenu":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceListWithMenu",
        style: "big-circle",
        displayName: "structureForMaintenanceListWithMenu",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForPicker": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForPicker",
      style: "big-circle",
      displayName: "structureForPicker",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForRelatedInstances": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForRelatedInstances",
      style: "big-circle",
      displayName: "structureForRelatedInstances",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forAddButton": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forAddButton",
      style: "big-circle",
      displayName: "forAddButton",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      style: "big-circle",
      displayName: "forDraftActions",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRow": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRow",
      style: "big-circle",
      displayName: "forFieldRow",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowManyToOne": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowManyToOne",
      style: "big-circle",
      displayName: "forFieldRowManyToOne",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowString": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowString",
      style: "big-circle",
      displayName: "forFieldRowString",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstance": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstance",
      style: "big-circle",
      displayName: "forInlineInstance",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstanceAndEntityUnionMember":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstanceAndEntityUnionMember",
        style: "big-circle",
        displayName: "forInlineInstanceAndEntityUnionMember",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      style: "big-circle",
      displayName: "forInstanceMaintenance",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector",
      style: "big-circle",
      displayName: "forItemSelector",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forList": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forList",
      style: "big-circle",
      displayName: "forList",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMainMenuItem": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMainMenuItem",
      style: "big-circle",
      displayName: "forMainMenuItem",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceList": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceList",
      style: "big-circle",
      displayName: "forMaintenanceList",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPicker": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPicker",
      style: "big-circle",
      displayName: "forPicker",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forRelatedInstances": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forRelatedInstances",
      style: "big-circle",
      displayName: "forRelatedInstances",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSection": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSection",
      style: "big-circle",
      displayName: "forSection",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithHeader": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithHeader",
      style: "big-circle",
      displayName: "forSectionWithHeader",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithSubheader": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithSubheader",
      style: "big-circle",
      displayName: "forSectionWithSubheader",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      style: "big-circle",
      displayName: "global",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:entityVisualization": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:entityVisualization",
      style: "big-circle",
      displayName: "entityVisualization",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForInstanceTemplateExpression":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForInstanceTemplateExpression",
        style: "big-circle",
        displayName: "erVisualizationForInstanceTemplateExpression",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanism": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanism",
      style: "big-circle",
      displayName: "erVisualizationForMechanism",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismIngredient":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismIngredient",
        style: "big-circle",
        displayName: "erVisualizationForMechanismIngredient",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismToTemplate":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismToTemplate",
        style: "big-circle",
        displayName: "erVisualizationForMechanismToTemplate",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplate": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplate",
      style: "big-circle",
      displayName: "erVisualizationForTemplate",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplateToEntity":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplateToEntity",
        style: "big-circle",
        displayName: "erVisualizationForTemplateToEntity",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOneErVisualization": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOneErVisualization",
      style: "big-circle",
      displayName: "relationManyToOneErVisualization",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsManyErVisualization":
      {
        key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsManyErVisualization",
        style: "big-circle",
        displayName: "relationOneOwnsManyErVisualization",
      },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOneErVisualization": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOneErVisualization",
      style: "big-circle",
      displayName: "relationOneOwnsOneErVisualization",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionMemberErVisualization": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionMemberErVisualization",
      style: "big-circle",
      displayName: "unionMemberErVisualization",
    },
    "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionVisualization": {
      key: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionVisualization",
      style: "big-circle",
      displayName: "unionVisualization",
    },
  },

  edges: [
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:theSystem",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:systemMechanism",
      toNode: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:theSystem",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:theSystem",
      style: "dotted-triangle",
      fromNode: "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:theSystem",
      toNode: "ERVisualizationNode:entityVisualization_Entity:System",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ConstraintPath-ConstraintField",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintField",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ConstraintPath-ConstraintMechanismIngredient",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintMechanismIngredient",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:EntityOrUnion-Entity",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:EntityOrUnion-EntityUnion",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnion",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-AndExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AndExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConcatExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConcatExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantFalseExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstantFalseExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantNumberExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstantNumberExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantStringExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstantStringExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantTrueExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstantTrueExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-DefaultDisplayNameExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-DeriveKeyExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-EqualsExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:EqualsExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-FieldExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:FieldExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-HasValueExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:HasValueExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-InstanceTemplateExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-InterpolateExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-MechanismIngredientExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredientExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-PlaceholderIngredientExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ThisExpression",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ThisExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Field-Attribute",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Field-Reference",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-AssignElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AssignElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-ElseClause",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ElseClause",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-ElseIfClause",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ElseIfClause",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-GroupElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:GroupElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-HtmlElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-IfElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-LoadInstanceElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-LoadInstancesElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-MdcTopAppBar",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-PagePart",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:PagePart",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-AssignPageAction",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AssignPageAction",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-BackPageAction",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:BackPageAction",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-NavigatePageAction",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-StorePageAction",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageActionContainer-MdcButton",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcButton",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageActionContainer-MdcLabeledAction",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcLabeledAction",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageActionContainer-MdcRadioList",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-AssignElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AssignElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-GroupElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:GroupElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-HtmlElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-IfElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-IncludePageElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:IncludePageElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-LoadInstanceElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-LoadInstancesElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcButton",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcButton",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcList",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcList",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcMenuButton",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcMenuButton",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcRadioList",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcTextField",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcTextField",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcTopAppBar",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-RedirectElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:RedirectElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-StmExpandCard",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:StmExpandCard",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-StmLinkField",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:StmLinkField",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-VisualizerElement",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-InstanceMaintenance",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-MaintenanceList",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-Picker",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Picker",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-RelatedInstances",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-Section",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Section",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-AddButton",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AddButton",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-DraftActions",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:DraftActions",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-FieldRow",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-InlineInstance",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-ItemSelector",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-List",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:List",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-RelatedInstances",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-Section",
      style: "umbrella",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Section",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:attributeOnUnion-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:attributeOnUnion",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:attributeOnUnion-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:attributeOnUnion-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:attributeOnUnion-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate5",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate5",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate5",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate6",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate6",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate6",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate7",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate7",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate7",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate7",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:constraintTypes-instanceTemplate8",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:constraintTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate8",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:constraintTypes-instanceTemplate8",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:constraintTypes-instanceTemplate8",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntity",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:displayNameForEntity-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntity",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:displayNameForEntity-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ValueDefault",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntityAndUnion",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forExpression-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forExpression",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forExpression-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forExpression-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forExpression-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:referenceOnUnion-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:referenceOnUnion",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:referenceOnUnion-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:referenceOnUnion-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:referenceOnUnion-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationManyToOne-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOne",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOne-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationManyToOne-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOne-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationOneOwnsMany-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsMany",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsMany-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationOneOwnsMany-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsMany-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationOneOwnsOne-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOne",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOne-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationOneOwnsOne-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOne-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationTypes-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationTypes-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelationType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationTypes-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationTypes-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelationType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationTypes-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationTypes-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelationType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationTypes-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationTypes",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationTypes-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationTypes-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelationType",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:system-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:system-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:system-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:system-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:system-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:system-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:system-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:system-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:system-instanceTemplate5",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:system-instanceTemplate5",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate5",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:system-instanceTemplate6",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:system-instanceTemplate6",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate6",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Mechanism",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:system-instanceTemplate7",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:system",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate7",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:system-instanceTemplate7",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate7",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forPage-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPage",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forPage-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:PagePart",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forPage-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPage",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forPage-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:PagePart",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forPage-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPage",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forPage-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:PagePart",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:fieldsForInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:fieldsForInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate3",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:fieldsForInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:DraftActions",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forEntityAndMaintenanceConfig-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forEntityAndMaintenanceConfig",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forEntityAndMaintenanceConfig-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forEntityAndMaintenanceConfig-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forEntityAndMaintenanceConfig-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forFieldRowWithOneToMany-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowWithOneToMany",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowWithOneToMany-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forFieldRowWithOneToMany-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowWithOneToMany-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Picker",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenanceAndAttribute-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndAttribute",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndAttribute-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenanceAndAttribute-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndAttribute-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndManyToOneRelation",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forMaintenance-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenance-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forMaintenance-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenance-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forMaintenanceConfig-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceConfig",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceConfig-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forMaintenanceConfig-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceConfig-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsManyRelation",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsOneRelation",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForEntityRelatedInstances-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityRelatedInstances",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityRelatedInstances-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForEntityRelatedInstances-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityRelatedInstances-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AddButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForEntityUnionMemberRelatedInstances-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityUnionMemberRelatedInstances",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityUnionMemberRelatedInstances-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForEntityUnionMemberRelatedInstances-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityUnionMemberRelatedInstances-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AddButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForMaintenanceList-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate2",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForMaintenanceList-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ThisExpression",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate3",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForMaintenanceList-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AddButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate4",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForMaintenanceList-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:List",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForMaintenanceListWithMenu-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceListWithMenu",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceListWithMenu-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForMaintenanceListWithMenu-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceListWithMenu-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MainMenuItem",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForPicker-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForPicker",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForPicker-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForPicker-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForPicker",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForPicker-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ThisExpression",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForPicker-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForPicker",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForPicker-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForRelatedInstances",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate2",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForRelatedInstances",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForRelatedInstances-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ThisExpression",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate3",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForRelatedInstances",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:structureForRelatedInstances-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:List",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forAddButton-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forAddButton",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forAddButton-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forAddButton-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forAddButton",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forAddButton-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AssignPageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forAddButton-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forAddButton",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forAddButton-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forAddButton-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forAddButton",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forAddButton-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate5",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate5",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate5",
      toNode: "ERVisualizationNode:entityVisualization_Entity:BackPageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate6",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate6",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate6",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate7",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate7",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate7",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate7",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forDraftActions-instanceTemplate8",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate8",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forDraftActions-instanceTemplate8",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate8",
      toNode: "ERVisualizationNode:entityVisualization_Entity:BackPageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forFieldRow-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRow",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forFieldRow-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRow",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forFieldRow-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forFieldRow-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRow",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forFieldRow-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConditionalCssClass",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forFieldRowManyToOne-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowManyToOne",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowManyToOne-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forFieldRowManyToOne-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowManyToOne-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StmLinkField",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forFieldRowString-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowString",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowString-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forFieldRowString-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowString-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcTextField",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInlineInstance-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstance-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInlineInstance-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstance-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StmExpandCard",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInlineInstanceAndEntityUnionMember-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstanceAndEntityUnionMember",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstanceAndEntityUnionMember-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInlineInstanceAndEntityUnionMember-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstanceAndEntityUnionMember-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Page",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate10",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate10",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate10",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate10",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcMenuButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate12",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate12",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate12",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate12",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcLabeledAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate13",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate13",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate13",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate13",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate14",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate14",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate14",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate14",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcLabeledAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate15",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate15",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate15",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate15",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate16",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate16",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate16",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate16",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AssignElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ElseClause",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate6",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate6",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate6",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate7",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate7",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate7",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate7",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ElseIfClause",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate8",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate8",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate8",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate8",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate9",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate9",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forInstanceMaintenance-instanceTemplate9",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate9",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forItemSelector-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forItemSelector-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forItemSelector-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forItemSelector-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forItemSelector-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forItemSelector-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forItemSelector-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forItemSelector-instanceTemplate5",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forItemSelector-instanceTemplate5",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate5",
      toNode: "ERVisualizationNode:entityVisualization_Entity:BackPageAction",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forList-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forList-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forList-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forList-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forList-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forList-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcList",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMainMenuItem",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forMainMenuItem-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMainMenuItem",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forMainMenuItem-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forMaintenanceList-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Page",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceList",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forMaintenanceList-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forPicker-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPicker",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forPicker-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Page",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forPicker-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPicker",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forPicker-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forRelatedInstances-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forRelatedInstances",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forRelatedInstances-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forRelatedInstances-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forRelatedInstances-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:GroupElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forSection-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSection",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSection-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forSection-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSection-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:GroupElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forSectionWithHeader-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithHeader",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithHeader-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forSectionWithHeader-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithHeader-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:forSectionWithSubheader-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithSubheader",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithSubheader-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:forSectionWithSubheader-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithSubheader-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Page",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate10",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate10",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate10",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate10",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate11",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate11",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate11",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate11",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate12",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate12",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate12",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate12",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate13",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate13",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate13",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate13",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IncludePageElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate14",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate14",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate14",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate14",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate15",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate15",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate15",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate15",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate16",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate16",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate16",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate16",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate17",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate17",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate17",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate17",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate18",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate18",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate18",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate18",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate19",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate19",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate19",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate19",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate2",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate2",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate2",
      toNode: "ERVisualizationNode:entityVisualization_Entity:PagePart",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate20",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate20",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate20",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate20",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IncludePageElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate21",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate21",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate21",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate21",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate22",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate22",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate22",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate22",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IncludePageElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate3",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate3",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate4",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate4",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate4",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate5",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate5",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate5",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate6",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate6",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate6",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate7",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate7",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate7",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate7",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate8",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate8",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate8",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate8",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:global-instanceTemplate9",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:global",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate9",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:global-instanceTemplate9",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate9",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:entityVisualization",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:entityVisualization-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForInstanceTemplateExpression",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanism",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismIngredient",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismToTemplate",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplate",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplateToEntity",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOneErVisualization",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsManyErVisualization",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOneErVisualization",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:unionMemberErVisualization-instanceTemplate1",
      style: "lightning",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionMemberErVisualization",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionMemberErVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:unionMemberErVisualization-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionMemberErVisualization-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismToTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
      style: "lightning",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionVisualization",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForTemplateToEntity_InstanceTemplate:unionVisualization-instanceTemplate1",
      style: "dotted-triangle",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:displayNameForEntity-instanceTemplate2-expression1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:displayNameForEntity-instanceTemplate2-field2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntity-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:system-instanceTemplate3-entity1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:system-instanceTemplate4-entity1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate4",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:system-instanceTemplate5-entity1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate5",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:system-instanceTemplate7-entity1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate7",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:system-instanceTemplate7-mechanism2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate7",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:fieldsForInstanceMaintenance-instanceTemplate2-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenanceAndAttribute-instanceTemplate1-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndAttribute-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1-field3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOne-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenanceAndManyToOneRelation-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forMaintenanceConfig-instanceTemplate1-entity1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceConfig-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:system-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1-reverseReference1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsManyRelation-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsMany-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:fieldsForInstanceMaintenance-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1-reference1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceOneOwnsOneRelation-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOne-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1-reverseReference1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:instanceMaintenanceUnionMemberOneOwnsManyRelation-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsMany-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:structureForEntityRelatedInstances-instanceTemplate1-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityRelatedInstances-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:structureForEntityUnionMemberRelatedInstances-instanceTemplate1-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForEntityUnionMemberRelatedInstances-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:structureForMaintenanceList-instanceTemplate3-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:structureForMaintenanceList-instanceTemplate4-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate4",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForMaintenanceList-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:structureForPicker-instanceTemplate3-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForPicker-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:structureForRelatedInstances-instanceTemplate3-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:structureForRelatedInstances-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forAddButton-instanceTemplate2-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forAddButton-instanceTemplate3-parent4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forAddButton-instanceTemplate4-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate4",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forAddButton-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forDraftActions-instanceTemplate2-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forDraftActions-instanceTemplate3-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forDraftActions-instanceTemplate4-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate4",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forDraftActions-instanceTemplate5-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate5",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forDraftActions-instanceTemplate6-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate6",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forDraftActions-instanceTemplate7-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate7",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forDraftActions-instanceTemplate8-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate8",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forDraftActions-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forFieldRow-instanceTemplate2-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forFieldRow-instanceTemplate3-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forFieldRowManyToOne-instanceTemplate1-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowManyToOne-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forFieldRowString-instanceTemplate1-parent4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRowString-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forFieldRow-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInlineInstanceAndEntityUnionMember-instanceTemplate1-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstanceAndEntityUnionMember-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInlineInstance-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate10-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate10",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate11-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate10",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate12-menuButton1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate12",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate13-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate13",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate12",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate14-menuButton1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate14",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate11",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate15-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate15",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate14",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate16-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate16",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate2-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate3-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate5-else4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate5-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate6-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate6",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate7-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate7",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate8-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate8",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate7",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forInstanceMaintenance-instanceTemplate9-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate9",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forInstanceMaintenance-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forItemSelector-instanceTemplate2-field2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forItemSelector-instanceTemplate2-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forItemSelector-instanceTemplate3-itemSingleLineAttribute8",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forItemSelector-instanceTemplate3-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forItemSelector-instanceTemplate4-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate4",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forItemSelector-instanceTemplate5-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate5",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forItemSelector-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forList-instanceTemplate2-field2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:displayNameForEntityAndUnion-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forList-instanceTemplate2-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forList-instanceTemplate3-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forList-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forMainMenuItem-instanceTemplate1-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate6",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forMainMenuItem-instanceTemplate2-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMainMenuItem-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forMaintenanceList-instanceTemplate2-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forMaintenanceList-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forPicker-instanceTemplate2-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPicker-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forPage-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forSectionWithHeader-instanceTemplate1-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithHeader-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSection-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:forSectionWithSubheader-instanceTemplate1-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSectionWithSubheader-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:forSection-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate10-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate10",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate9",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate11-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate11",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate10",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate12-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate12",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate10",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate13-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate13",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate12",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate14-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate14",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate9",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate15-parent4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate15",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate14",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate16-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate16",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate15",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate17-parent5",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate17",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate16",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate18-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate18",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate15",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate19-parent6",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate19",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate18",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate2-page1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate2",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate20-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate20",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate14",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate21-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate21",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate22-parent2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate22",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate21",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate3-parent1",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate2",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate4-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate4",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate5-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate5",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate4",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate6-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate6",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate5",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate7-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate7",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate8-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate8",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate3",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:global-instanceTemplate9-parent3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate9",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:global-instanceTemplate8",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForInstanceTemplateExpression-instanceTemplate1-fromNode2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForInstanceTemplateExpression-instanceTemplate1-toNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForInstanceTemplateExpression-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForMechanismIngredient-instanceTemplate1-fromNode2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForMechanismIngredient-instanceTemplate1-toNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForMechanismIngredient-instanceTemplate1-toNode4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismIngredient-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForMechanismToTemplate-instanceTemplate1-fromNode2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanism-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForMechanismToTemplate-instanceTemplate1-toNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForMechanismToTemplate-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForTemplateToEntity-instanceTemplate1-fromNode2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplate-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:erVisualizationForTemplateToEntity-instanceTemplate1-toNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:erVisualizationForTemplateToEntity-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationManyToOneErVisualization-instanceTemplate1-fromNode4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationManyToOneErVisualization-instanceTemplate1-fromNode5",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationManyToOneErVisualization-instanceTemplate1-toNode2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationManyToOneErVisualization-instanceTemplate1-toNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationManyToOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsManyErVisualization-instanceTemplate1-fromNode5",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsManyErVisualization-instanceTemplate1-fromNode6",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsManyErVisualization-instanceTemplate1-toNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsManyErVisualization-instanceTemplate1-toNode4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsManyErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsOneErVisualization-instanceTemplate1-fromNode5",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsOneErVisualization-instanceTemplate1-fromNode6",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsOneErVisualization-instanceTemplate1-toNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:relationOneOwnsOneErVisualization-instanceTemplate1-toNode4",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:relationOneOwnsOneErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:unionMemberErVisualization-instanceTemplate1-fromNode3",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionMemberErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:entityVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForInstanceTemplateExpression_InstanceTemplateFieldValue:unionMemberErVisualization-instanceTemplate1-toNode2",
      style: "arrow",
      fromNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionMemberErVisualization-instanceTemplate1",
      toNode:
        "ERVisualizationNode:erVisualizationForTemplate_InstanceTemplate:unionVisualization-instanceTemplate1",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:attributeOnUnion-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:attributeOnUnion",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:attributeOnUnion-ingredient2",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:attributeOnUnion",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:displayNameForEntity-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntity",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:displayNameForEntityAndUnion-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:displayNameForEntityAndUnion",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forExpression-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forExpression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:referenceOnUnion-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:referenceOnUnion",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:referenceOnUnion-ingredient2",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:referenceOnUnion",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:relationManyToOne-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOne",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:relationOneOwnsMany-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsMany",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:relationOneOwnsOne-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOne",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forPage-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPage",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Page",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:fieldsForInstanceMaintenance-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:fieldsForInstanceMaintenance",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forEntityAndMaintenanceConfig-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forEntityAndMaintenanceConfig",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forEntityAndMaintenanceConfig-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forEntityAndMaintenanceConfig",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceConfig",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forFieldRowWithOneToMany-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowWithOneToMany",
      toNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forFieldRowWithOneToMany-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowWithOneToMany",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInstanceMaintenanceAndAttribute-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndAttribute",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInstanceMaintenanceAndAttribute-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndAttribute",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInstanceMaintenanceAndManyToOneRelation-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndManyToOneRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInstanceMaintenanceAndManyToOneRelation-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenanceAndManyToOneRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forMaintenance-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenance",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Maintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forMaintenanceConfig-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceConfig",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceConfig",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceOneOwnsManyRelation-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsManyRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceOneOwnsManyRelation-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsManyRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceOneOwnsManyRelation-ingredient3",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsManyRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceOneOwnsOneRelation-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsOneRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceOneOwnsOneRelation-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceOneOwnsOneRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceUnionMemberOneOwnsManyRelation-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceUnionMemberOneOwnsManyRelation-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:instanceMaintenanceUnionMemberOneOwnsManyRelation-ingredient3",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForEntityRelatedInstances-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityRelatedInstances",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForEntityRelatedInstances-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityRelatedInstances",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForEntityUnionMemberRelatedInstances-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityUnionMemberRelatedInstances",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForEntityUnionMemberRelatedInstances-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForEntityUnionMemberRelatedInstances",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForMaintenanceList-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceList",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForMaintenanceListWithMenu-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForMaintenanceListWithMenu",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForPicker-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForPicker",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Picker",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:structureForRelatedInstances-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:structureForRelatedInstances",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forAddButton-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forAddButton",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AddButton",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forDraftActions-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forDraftActions",
      toNode: "ERVisualizationNode:entityVisualization_Entity:DraftActions",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forFieldRow-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRow",
      toNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forFieldRowManyToOne-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowManyToOne",
      toNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forFieldRowString-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forFieldRowString",
      toNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInlineInstance-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstance",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInlineInstanceAndEntityUnionMember-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstanceAndEntityUnionMember",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInlineInstanceAndEntityUnionMember-ingredient2",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInlineInstanceAndEntityUnionMember",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forInstanceMaintenance-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forInstanceMaintenance",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forItemSelector-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forItemSelector",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forList-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forList",
      toNode: "ERVisualizationNode:entityVisualization_Entity:List",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forMainMenuItem-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMainMenuItem",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MainMenuItem",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forMaintenanceList-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forMaintenanceList",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forPicker-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forPicker",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Picker",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forRelatedInstances-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forRelatedInstances",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forSection-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSection",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forSectionWithHeader-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithHeader",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:forSectionWithSubheader-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:forSectionWithSubheader",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Section",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:entityVisualization-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:entityVisualization",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:erVisualizationForInstanceTemplateExpression-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForInstanceTemplateExpression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateFieldValue",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:erVisualizationForMechanism-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanism",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Mechanism",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:erVisualizationForMechanismIngredient-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismIngredient",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:erVisualizationForMechanismToTemplate-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForMechanismToTemplate",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:erVisualizationForTemplate-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplate",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:erVisualizationForTemplateToEntity-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:erVisualizationForTemplateToEntity",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:relationManyToOneErVisualization-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationManyToOneErVisualization",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:relationOneOwnsManyErVisualization-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsManyErVisualization",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:relationOneOwnsOneErVisualization-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:relationOneOwnsOneErVisualization",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:unionMemberErVisualization-ingredient1",
      style: "observe",
      fromNode:
        "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionMemberErVisualization",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
    },
    {
      key: "ERVisualizationEdge:erVisualizationForMechanismIngredient_MechanismIngredient:unionVisualization-ingredient1",
      style: "observe",
      fromNode: "ERVisualizationNode:erVisualizationForMechanism_Mechanism:unionVisualization",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnion",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:AndExpressionOperand-andExpression",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AndExpression",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:AndExpressionOperand-operand",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ConcatExpressionOperand-concatExpression",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConcatExpression",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ConcatExpressionOperand-operand",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:Constraint-mechanism",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Constraint",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Mechanism",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:Constraint-otherPath",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Constraint",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:Constraint-path",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Constraint",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Constraint-type",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Constraint",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ConstraintField-base",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintField",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ConstraintField-field",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintField",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ConstraintMechanismIngredient-ingredient",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConstraintMechanismIngredient",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:DeriveKeyExpression-operand",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:EntityUnionMember-entity",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:EntityUnionMember-union",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EntityUnion",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:EqualsExpression-op1",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EqualsExpression",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:EqualsExpression-op2",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:EqualsExpression",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:Field-entity",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Field-providesFieldForUnion",
      style: "arrow",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:FieldExpression-base",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:FieldExpression",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:FieldExpression-field",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:FieldExpression",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:HasValueExpression-operand",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HasValueExpression",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InstanceTemplate-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:InstanceTemplate-mechanism",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Mechanism",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InstanceTemplateExpression-instanceTemplate",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:InstanceTemplateExpressionIngredient-expression",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpressionIngredient",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:InstanceTemplateExpressionIngredient-instanceTemplateExpression",
      style: "diamond",
      fromNode:
        "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpressionIngredient",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateExpression",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InstanceTemplateFieldValue-field",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateFieldValue",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:InstanceTemplateFieldValue-instanceTemplate",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateFieldValue",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplate",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:InstanceTemplateFieldValue-value",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateFieldValue",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:InterpolateExpressionPlaceholder-expression",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:InterpolateExpressionPlaceholder-placeholderFor",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder",
      toNode: "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:Mechanism-constraint",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Mechanism",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MechanismIngredient-attributeWithPlaceholders",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MechanismIngredient-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:MechanismIngredient-mechanism",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Mechanism",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MechanismIngredientExpression-ingredient",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredientExpression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:PagePart-page",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:PagePart",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Page",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:PlaceholderIngredientExpression-ingredient",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MechanismIngredient",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Reference-createdForManyToOneRelation",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Reference-to",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Relation-from",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Relation-to",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Relation-type",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Relation",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelationType",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ValueDefault-expression",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ValueDefault",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ValueDefault-field",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ValueDefault",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ValueRule-expression",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ValueRule",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ValueRule-field",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ValueRule",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ConditionalCssClass-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ConditionalCssClass",
      toNode: "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ElseIfClause-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ElseIfClause",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:IfElement-else",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ElseClause",
      toNode: "ERVisualizationNode:entityVisualization_Entity:IfElement",
      fromLabel: "1",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:LoadFilter-field",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadFilter",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:LoadFilter-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadFilter",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:LoadInstancesElement-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:LoadOrderBy-field",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:LoadOrderBy-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
      toNode: "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:PageAction-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:PageElement-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:VisualizerElement-edgeEntity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:VisualizerElement-nodeEntity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:VisualizerElement-positionEntity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MdcList-collectionEntity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcList",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MdcRadioList-collectionEntity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MdcRadioList-itemSingleLineAttribute",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:StmExpandCardCreateAction-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction",
      toNode: "ERVisualizationNode:entityVisualization_Entity:StmExpandCard",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:AddButton-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AddButton",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:AddButton-fillReference",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:AddButton",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:FieldRow-field",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:FieldRow",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:Field",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InlineInstance-reference",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InstanceMaintenance-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ItemSelector-itemText",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ItemSelector-reference",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:List-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:List",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:List-itemTextAttribute",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:List",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Attribute",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:List-relatedInstances",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:List",
      toNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Maintenance-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Maintenance",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MaintenanceList-entity",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Entity",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Picker-reference",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:Picker",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:RelatedInstances-reverseReference",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      toNode: "ERVisualizationNode:entityVisualization_Entity:Reference",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:StructureElement-parent",
      style: "diamond",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:MdcLabeledAction-menuButton",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:MdcLabeledAction",
      toNode: "ERVisualizationNode:entityVisualization_Entity:MdcMenuButton",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:StructureContainer-mdcContainer",
      style: "arrow",
      fromNode: "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
      toNode: "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ERVisualizationEdge-fromNode",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
    },
    {
      key: "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ERVisualizationEdge-toNode",
      style: "arrow",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ERVisualizationPosition-node",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationPosition",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
      fromLabel: "＊",
    },
    {
      key: "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ERVisualizationPosition-visualization",
      style: "diamond",
      fromNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualizationPosition",
      toNode: "ERVisualizationNode:entityVisualization_Entity:ERVisualization",
      fromLabel: "＊",
    },
  ],
  positions: [],
};

let nodes = new Map<string, NodeData>();
for (let [key, value] of Object.entries(data.nodes)) {
  if (!(value as any).displayName) {
    (value as any).displayName = "?";
  }
  nodes.set(key, value as any);
}

let positions = data.positions as ReadonlyArray<NodePosition>;

let positionsJson = window.localStorage["positions"];
if (positionsJson) {
  positions = JSON.parse(positionsJson);
}

function savePositions() {
  positionsJson = JSON.stringify(positions);
  window.localStorage["positions"] = positionsJson;
}

export let demoData: VisualizerAPI = {
  getNodes: () => nodes,
  getEdges: () => data.edges,
  getNodePositions: () => positions,
  updateVisualizationEntry: (newEntry) => {
    let newPositions = positions.filter((e) => e.nodeKey !== newEntry.nodeKey);
    newPositions.push(newEntry);
    positions = newPositions;
    savePositions();
  },

  removeVisualizationEntry: (oldEntryKey) => {
    positions = positions.filter((e) => e.nodeKey !== oldEntryKey);
    savePositions();
  },

  onNavigate(key: string) {
    alert(`Navigate to ${key}`);
  },
};
