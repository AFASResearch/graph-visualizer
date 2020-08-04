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
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:systemRecipe": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:systemRecipe",
      "style": "big-circle",
      "displayName": "theSystem"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:theSystem": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:theSystem",
      "style": "small-circle"
    },
    "ERVisualizationNode:entityVisualization_Entity:AndExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:AndExpression",
      "style": "default",
      "displayName": "AndExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand": {
      "key": "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand",
      "style": "default",
      "displayName": "AndExpressionOperand",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Attribute": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Attribute",
      "style": "default",
      "displayName": "Attribute",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConcatExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConcatExpression",
      "style": "default",
      "displayName": "ConcatExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand",
      "style": "default",
      "displayName": "ConcatExpressionOperand",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantFalseExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConstantFalseExpression",
      "style": "default",
      "displayName": "ConstantFalseExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantNumberExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConstantNumberExpression",
      "style": "default",
      "displayName": "ConstantNumberExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantStringExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConstantStringExpression",
      "style": "default",
      "displayName": "ConstantStringExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstantTrueExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConstantTrueExpression",
      "style": "default",
      "displayName": "ConstantTrueExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Constraint": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Constraint",
      "style": "default",
      "displayName": "Constraint",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstraintField": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConstraintField",
      "style": "default",
      "displayName": "ConstraintField",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstraintRecipeIngredient": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConstraintRecipeIngredient",
      "style": "default",
      "displayName": "ConstraintRecipeIngredient",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ConstraintType": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ConstraintType",
      "style": "default",
      "displayName": "ConstraintType",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression",
      "style": "default",
      "displayName": "DefaultDisplayNameExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression",
      "style": "default",
      "displayName": "DeriveKeyExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Entity": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Entity",
      "style": "default",
      "displayName": "Entity",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:EntityUnion": {
      "key": "ERVisualizationNode:entityVisualization_Entity:EntityUnion",
      "style": "default",
      "displayName": "EntityUnion",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember": {
      "key": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
      "style": "default",
      "displayName": "EntityUnionMember",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:EqualsExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:EqualsExpression",
      "style": "default",
      "displayName": "EqualsExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:FieldExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:FieldExpression",
      "style": "default",
      "displayName": "FieldExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:HasValueExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:HasValueExpression",
      "style": "default",
      "displayName": "HasValueExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateAttributeValue": {
      "key": "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateAttributeValue",
      "style": "default",
      "displayName": "InstanceTemplateAttributeValue",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression",
      "style": "default",
      "displayName": "InterpolateExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder": {
      "key": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder",
      "style": "default",
      "displayName": "InterpolateExpressionPlaceholder",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Page": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Page",
      "style": "default",
      "displayName": "Page",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:PageParameter": {
      "key": "ERVisualizationNode:entityVisualization_Entity:PageParameter",
      "style": "default",
      "displayName": "PageParameter",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression",
      "style": "default",
      "displayName": "PlaceholderIngredientExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Recipe": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Recipe",
      "style": "default",
      "displayName": "Recipe",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RecipeCreation": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation",
      "style": "default",
      "displayName": "RecipeCreation",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpression",
      "style": "default",
      "displayName": "RecipeCreationExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpressionIngredient": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpressionIngredient",
      "style": "default",
      "displayName": "RecipeCreationExpressionIngredient",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient",
      "style": "default",
      "displayName": "RecipeIngredient",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RecipeIngredientExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredientExpression",
      "style": "default",
      "displayName": "RecipeIngredientExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Reference": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Reference",
      "style": "default",
      "displayName": "Reference",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Relation": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Relation",
      "style": "default",
      "displayName": "Relation",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RelationType": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RelationType",
      "style": "default",
      "displayName": "RelationType",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ThisExpression": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ThisExpression",
      "style": "default",
      "displayName": "ThisExpression",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ValueDefault": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ValueDefault",
      "style": "default",
      "displayName": "ValueDefault",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ValueRule": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ValueRule",
      "style": "default",
      "displayName": "ValueRule",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:AssignPageAction": {
      "key": "ERVisualizationNode:entityVisualization_Entity:AssignPageAction",
      "style": "default",
      "displayName": "AssignPageAction",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:BackPageAction": {
      "key": "ERVisualizationNode:entityVisualization_Entity:BackPageAction",
      "style": "default",
      "displayName": "BackPageAction",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:GroupElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:GroupElement",
      "style": "default",
      "displayName": "GroupElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:HtmlElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
      "style": "default",
      "displayName": "HtmlElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:IfElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:IfElement",
      "style": "default",
      "displayName": "IfElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:IncludePageElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:IncludePageElement",
      "style": "default",
      "displayName": "IncludePageElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadFilter": {
      "key": "ERVisualizationNode:entityVisualization_Entity:LoadFilter",
      "style": "default",
      "displayName": "LoadFilter",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
      "style": "default",
      "displayName": "LoadInstanceElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      "style": "default",
      "displayName": "LoadInstancesElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy": {
      "key": "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
      "style": "default",
      "displayName": "LoadOrderBy",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction": {
      "key": "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction",
      "style": "default",
      "displayName": "NavigatePageAction",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RedirectElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RedirectElement",
      "style": "default",
      "displayName": "RedirectElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:StorePageAction": {
      "key": "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
      "style": "default",
      "displayName": "StorePageAction",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:VisualizerElement": {
      "key": "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      "style": "default",
      "displayName": "VisualizerElement",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcButton": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MdcButton",
      "style": "default",
      "displayName": "MdcButton",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcList": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MdcList",
      "style": "default",
      "displayName": "MdcList",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcRadioList": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      "style": "default",
      "displayName": "MdcRadioList",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcTextField": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MdcTextField",
      "style": "default",
      "displayName": "MdcTextField",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:StmExpandCard": {
      "key": "ERVisualizationNode:entityVisualization_Entity:StmExpandCard",
      "style": "default",
      "displayName": "StmExpandCard",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction": {
      "key": "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction",
      "style": "default",
      "displayName": "StmExpandCardCreateAction",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:StmLinkField": {
      "key": "ERVisualizationNode:entityVisualization_Entity:StmLinkField",
      "style": "default",
      "displayName": "StmLinkField",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:AddButton": {
      "key": "ERVisualizationNode:entityVisualization_Entity:AddButton",
      "style": "default",
      "displayName": "AddButton",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:DraftActions": {
      "key": "ERVisualizationNode:entityVisualization_Entity:DraftActions",
      "style": "default",
      "displayName": "DraftActions",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:FieldRow": {
      "key": "ERVisualizationNode:entityVisualization_Entity:FieldRow",
      "style": "default",
      "displayName": "FieldRow",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:InlineInstance": {
      "key": "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
      "style": "default",
      "displayName": "InlineInstance",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance": {
      "key": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
      "style": "default",
      "displayName": "InstanceMaintenance",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ItemSelector": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      "style": "default",
      "displayName": "ItemSelector",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:List": {
      "key": "ERVisualizationNode:entityVisualization_Entity:List",
      "style": "default",
      "displayName": "List",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MainMenuItem": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MainMenuItem",
      "style": "default",
      "displayName": "MainMenuItem",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Maintenance": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Maintenance",
      "style": "default",
      "displayName": "Maintenance",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MaintenanceConfig": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MaintenanceConfig",
      "style": "default",
      "displayName": "MaintenanceConfig",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MaintenanceList": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
      "style": "default",
      "displayName": "MaintenanceList",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Picker": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Picker",
      "style": "default",
      "displayName": "Picker",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:RelatedInstances": {
      "key": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      "style": "default",
      "displayName": "RelatedInstances",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:Section": {
      "key": "ERVisualizationNode:entityVisualization_Entity:Section",
      "style": "default",
      "displayName": "Section",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar": {
      "key": "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar",
      "style": "default",
      "displayName": "MdcTopAppBar",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
      "style": "default",
      "displayName": "ERVisualizationEdge",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
      "style": "default",
      "displayName": "ERVisualizationNode",
      "typeName": "Entity"
    },
    "ERVisualizationNode:entityVisualization_Entity:ERVisualizationPosition": {
      "key": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationPosition",
      "style": "default",
      "displayName": "ERVisualizationPosition",
      "typeName": "Entity"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      "style": "default",
      "displayName": "ConstraintPath",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
      "style": "default",
      "displayName": "EntityOrUnion",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:Expression": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "style": "default",
      "displayName": "Expression",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:Field": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      "style": "default",
      "displayName": "Field",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
      "style": "default",
      "displayName": "ElementContainer",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:PageAction": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
      "style": "default",
      "displayName": "PageAction",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer",
      "style": "default",
      "displayName": "PageActionContainer",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:PageElement": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
      "style": "default",
      "displayName": "PageElement",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
      "style": "default",
      "displayName": "StructureContainer",
      "typeName": "Union"
    },
    "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement": {
      "key": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
      "style": "default",
      "displayName": "StructureElement",
      "typeName": "Union"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:attributeOnUnion": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:attributeOnUnion",
      "style": "big-circle",
      "displayName": "attributeOnUnion"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "style": "big-circle",
      "displayName": "constraintTypes"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntity": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntity",
      "style": "big-circle",
      "displayName": "displayNameForEntity"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntityAndUnion": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntityAndUnion",
      "style": "big-circle",
      "displayName": "displayNameForEntityAndUnion"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forExpression": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forExpression",
      "style": "big-circle",
      "displayName": "forExpression"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:referenceOnUnion": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:referenceOnUnion",
      "style": "big-circle",
      "displayName": "referenceOnUnion"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOne": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOne",
      "style": "big-circle",
      "displayName": "relationManyToOne"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsMany": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsMany",
      "style": "big-circle",
      "displayName": "relationOneOwnsMany"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOne": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOne",
      "style": "big-circle",
      "displayName": "relationOneOwnsOne"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationTypes": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationTypes",
      "style": "big-circle",
      "displayName": "relationTypes"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:system": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:system",
      "style": "big-circle",
      "displayName": "system"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:fieldsForInstanceMaintenance": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:fieldsForInstanceMaintenance",
      "style": "big-circle",
      "displayName": "fieldsForInstanceMaintenance"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forEntityAndMaintenanceConfig": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forEntityAndMaintenanceConfig",
      "style": "big-circle",
      "displayName": "forEntityAndMaintenanceConfig"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowWithOneToMany": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowWithOneToMany",
      "style": "big-circle",
      "displayName": "forFieldRowWithOneToMany"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenanceAndAttribute": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenanceAndAttribute",
      "style": "big-circle",
      "displayName": "forInstanceMaintenanceAndAttribute"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenance": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenance",
      "style": "big-circle",
      "displayName": "forMaintenance"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsManyRelation": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsManyRelation",
      "style": "big-circle",
      "displayName": "instanceMaintenanceOneOwnsManyRelation"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsOneRelation": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsOneRelation",
      "style": "big-circle",
      "displayName": "instanceMaintenanceOneOwnsOneRelation"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceUnionMemberOneOwnsManyRelation": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      "style": "big-circle",
      "displayName": "instanceMaintenanceUnionMemberOneOwnsManyRelation"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityRelatedInstances": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityRelatedInstances",
      "style": "big-circle",
      "displayName": "structureForEntityRelatedInstances"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityUnionMemberRelatedInstances": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityUnionMemberRelatedInstances",
      "style": "big-circle",
      "displayName": "structureForEntityUnionMemberRelatedInstances"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList",
      "style": "big-circle",
      "displayName": "structureForMaintenanceList"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForPicker": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForPicker",
      "style": "big-circle",
      "displayName": "structureForPicker"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForRelatedInstances": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForRelatedInstances",
      "style": "big-circle",
      "displayName": "structureForRelatedInstances"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forAddButton": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forAddButton",
      "style": "big-circle",
      "displayName": "forAddButton"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "style": "big-circle",
      "displayName": "forDraftActions"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRow": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRow",
      "style": "big-circle",
      "displayName": "forFieldRow"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowManyToOne": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowManyToOne",
      "style": "big-circle",
      "displayName": "forFieldRowManyToOne"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowString": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowString",
      "style": "big-circle",
      "displayName": "forFieldRowString"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstance": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstance",
      "style": "big-circle",
      "displayName": "forInlineInstance"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstanceAndEntityUnionMember": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstanceAndEntityUnionMember",
      "style": "big-circle",
      "displayName": "forInlineInstanceAndEntityUnionMember"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenance": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenance",
      "style": "big-circle",
      "displayName": "forInstanceMaintenance"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector",
      "style": "big-circle",
      "displayName": "forItemSelector"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forList": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forList",
      "style": "big-circle",
      "displayName": "forList"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMainMenuItem": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMainMenuItem",
      "style": "big-circle",
      "displayName": "forMainMenuItem"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenanceList": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenanceList",
      "style": "big-circle",
      "displayName": "forMaintenanceList"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forPicker": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forPicker",
      "style": "big-circle",
      "displayName": "forPicker"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forRelatedInstances": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forRelatedInstances",
      "style": "big-circle",
      "displayName": "forRelatedInstances"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSection": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSection",
      "style": "big-circle",
      "displayName": "forSection"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithHeader": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithHeader",
      "style": "big-circle",
      "displayName": "forSectionWithHeader"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithSubheader": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithSubheader",
      "style": "big-circle",
      "displayName": "forSectionWithSubheader"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:global": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "style": "big-circle",
      "displayName": "global"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:entityVisualization": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:entityVisualization",
      "style": "big-circle",
      "displayName": "entityVisualization"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForCreation": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForCreation",
      "style": "big-circle",
      "displayName": "erVisualizationForCreation"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForCreationToEntity": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForCreationToEntity",
      "style": "big-circle",
      "displayName": "erVisualizationForCreationToEntity"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForMechanism": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForMechanism",
      "style": "big-circle",
      "displayName": "erVisualizationForMechanism"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForMechanismIngredient": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForMechanismIngredient",
      "style": "big-circle",
      "displayName": "erVisualizationForMechanismIngredient"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForMechanismToCreation": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:erVisualizationForMechanismToCreation",
      "style": "big-circle",
      "displayName": "erVisualizationForMechanismToCreation"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOneErVisualization": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOneErVisualization",
      "style": "big-circle",
      "displayName": "relationManyToOneErVisualization"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsManyErVisualization": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsManyErVisualization",
      "style": "big-circle",
      "displayName": "relationOneOwnsManyErVisualization"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOneErVisualization": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOneErVisualization",
      "style": "big-circle",
      "displayName": "relationOneOwnsOneErVisualization"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionMemberErVisualization": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionMemberErVisualization",
      "style": "big-circle",
      "displayName": "unionMemberErVisualization"
    },
    "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionVisualization": {
      "key": "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionVisualization",
      "style": "big-circle",
      "displayName": "unionVisualization"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:attributeOnUnion-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:attributeOnUnion-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation5": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation5",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation6": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation6",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation7": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation7",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation8": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation8",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntityAndUnion-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntityAndUnion-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forExpression-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forExpression-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:referenceOnUnion-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:referenceOnUnion-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOne-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOne-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsMany-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsMany-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOne-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOne-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forEntityAndMaintenanceConfig-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forEntityAndMaintenanceConfig-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowWithOneToMany-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowWithOneToMany-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenanceAndAttribute-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenanceAndAttribute-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenance-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenance-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsManyRelation-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsManyRelation-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsOneRelation-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsOneRelation-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceUnionMemberOneOwnsManyRelation-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceUnionMemberOneOwnsManyRelation-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityRelatedInstances-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityRelatedInstances-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityUnionMemberRelatedInstances-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityUnionMemberRelatedInstances-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation5": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation5",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation5": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation5",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation6": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation6",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation7": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation7",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation8": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation8",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowManyToOne-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowManyToOne-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowString-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowString-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstance-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstance-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstanceAndEntityUnionMember-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstanceAndEntityUnionMember-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation5": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation5",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenanceList-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenanceList-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forRelatedInstances-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forRelatedInstances-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSection-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSection-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithHeader-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithHeader-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithSubheader-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithSubheader-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation10": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation10",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation11": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation11",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation12": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation12",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation13": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation13",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation14": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation14",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation15": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation15",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation16": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation16",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation17": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation17",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation18": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation18",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation19": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation19",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation2": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation2",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation3": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation3",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation4": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation4",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation5": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation5",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation6": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation6",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation7": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation7",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation8": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation8",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation9": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation9",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:entityVisualization-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:entityVisualization-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForCreation-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForCreation-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForCreationToEntity-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForCreationToEntity-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForMechanism-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForMechanism-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForMechanismIngredient-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForMechanismIngredient-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForMechanismToCreation-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:erVisualizationForMechanismToCreation-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOneErVisualization-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOneErVisualization-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsManyErVisualization-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsManyErVisualization-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOneErVisualization-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOneErVisualization-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionMemberErVisualization-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionMemberErVisualization-creation1",
      "style": "small-circle"
    },
    "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionVisualization-creation1": {
      "key": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionVisualization-creation1",
      "style": "small-circle"
    }
  },
  "edges": [
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:theSystem",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:theSystem",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:System"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:theSystem",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:systemRecipe",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:theSystem"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ConstraintPath-ConstraintField",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintField",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ConstraintPath-ConstraintRecipeIngredient",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintRecipeIngredient",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:EntityOrUnion-Entity",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Entity",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:EntityOrUnion-EntityUnion",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnion",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-AndExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:AndExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConcatExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConcatExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantFalseExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstantFalseExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantNumberExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstantNumberExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantStringExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstantStringExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ConstantTrueExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstantTrueExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-DefaultDisplayNameExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-DeriveKeyExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-EqualsExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:EqualsExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-FieldExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:FieldExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-HasValueExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:HasValueExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-InterpolateExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-PlaceholderIngredientExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-RecipeCreationExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-RecipeIngredientExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredientExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Expression-ThisExpression",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ThisExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Field-Attribute",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Attribute",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:Field-Reference",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Reference",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-GroupElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:GroupElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-HtmlElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-IfElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:IfElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-LoadInstanceElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-LoadInstancesElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-MdcTopAppBar",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:ElementContainer-Page",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Page",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-AssignPageAction",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:AssignPageAction",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageAction"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-BackPageAction",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:BackPageAction",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageAction"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-NavigatePageAction",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageAction"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageAction-StorePageAction",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:StorePageAction",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageAction"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageActionContainer-MdcButton",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcButton",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageActionContainer-MdcRadioList",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-GroupElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:GroupElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-HtmlElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-IfElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:IfElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-IncludePageElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:IncludePageElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-LoadInstanceElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-LoadInstancesElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcButton",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcButton",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcList",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcList",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcRadioList",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcTextField",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcTextField",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-MdcTopAppBar",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-RedirectElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RedirectElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-StmExpandCard",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:StmExpandCard",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-StmLinkField",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:StmLinkField",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:PageElement-VisualizerElement",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-InstanceMaintenance",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-MaintenanceList",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-Picker",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Picker",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-RelatedInstances",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureContainer-Section",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Section",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-AddButton",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:AddButton",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-DraftActions",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:DraftActions",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-FieldRow",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:FieldRow",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-InlineInstance",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-ItemSelector",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-List",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:List",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-RelatedInstances",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:unionMemberErVisualization_EntityUnionMember:StructureElement-Section",
      "style": "umbrella",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Section",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:attributeOnUnion-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:attributeOnUnion-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Attribute"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:attributeOnUnion-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:attributeOnUnion",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:attributeOnUnion-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation5",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation5",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation5",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation5"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation6",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation6",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation6",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation6"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation7",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation7",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation7",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation7"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:constraintTypes-creation8",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation8",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:constraintTypes-creation8",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:constraintTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:constraintTypes-creation8"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:displayNameForEntity-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:DefaultDisplayNameExpression"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:displayNameForEntity-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntity",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:displayNameForEntity-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ValueDefault"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:displayNameForEntity-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntity",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntity-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:displayNameForEntityAndUnion-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntityAndUnion-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Attribute"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:displayNameForEntityAndUnion-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntityAndUnion",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:displayNameForEntityAndUnion-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forExpression-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forExpression-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forExpression-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forExpression",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forExpression-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:referenceOnUnion-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:referenceOnUnion-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:referenceOnUnion-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:referenceOnUnion",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:referenceOnUnion-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationManyToOne-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOne-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationManyToOne-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOne",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOne-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationOneOwnsMany-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsMany-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationOneOwnsMany-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsMany",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsMany-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationOneOwnsOne-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOne-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationOneOwnsOne-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOne",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOne-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationTypes-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelationType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationTypes-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationTypes-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelationType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationTypes-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationTypes-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelationType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationTypes-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationTypes-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelationType"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationTypes-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationTypes",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationTypes-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:system-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:system-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:system",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:system-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Attribute"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:system-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:system",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:system-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Recipe"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:system-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:system",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:system-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:system-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:system",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:system-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:fieldsForInstanceMaintenance-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:fieldsForInstanceMaintenance-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:fieldsForInstanceMaintenance",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:fieldsForInstanceMaintenance-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:fieldsForInstanceMaintenance-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:fieldsForInstanceMaintenance",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:fieldsForInstanceMaintenance-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:DraftActions"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:fieldsForInstanceMaintenance-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:fieldsForInstanceMaintenance",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:fieldsForInstanceMaintenance-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forEntityAndMaintenanceConfig-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forEntityAndMaintenanceConfig-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forEntityAndMaintenanceConfig-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forEntityAndMaintenanceConfig",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forEntityAndMaintenanceConfig-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forFieldRowWithOneToMany-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowWithOneToMany-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Picker"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forFieldRowWithOneToMany-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowWithOneToMany",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowWithOneToMany-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forInstanceMaintenanceAndAttribute-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenanceAndAttribute-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:FieldRow"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forInstanceMaintenanceAndAttribute-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenanceAndAttribute",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenanceAndAttribute-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forMaintenance-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenance-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MaintenanceList"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forMaintenance-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenance",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenance-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:instanceMaintenanceOneOwnsManyRelation-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsManyRelation-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:instanceMaintenanceOneOwnsManyRelation-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsManyRelation-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:instanceMaintenanceOneOwnsOneRelation-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsOneRelation-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InlineInstance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:instanceMaintenanceOneOwnsOneRelation-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsOneRelation",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceOneOwnsOneRelation-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:instanceMaintenanceUnionMemberOneOwnsManyRelation-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceUnionMemberOneOwnsManyRelation-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:instanceMaintenanceUnionMemberOneOwnsManyRelation-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:instanceMaintenanceUnionMemberOneOwnsManyRelation-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForEntityRelatedInstances-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityRelatedInstances-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:AddButton"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForEntityRelatedInstances-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityRelatedInstances",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityRelatedInstances-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForEntityUnionMemberRelatedInstances-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityUnionMemberRelatedInstances-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:AddButton"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForEntityUnionMemberRelatedInstances-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityUnionMemberRelatedInstances",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForEntityUnionMemberRelatedInstances-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForMaintenanceList-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForMaintenanceList-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForMaintenanceList-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ThisExpression"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForMaintenanceList-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForMaintenanceList-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:AddButton"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForMaintenanceList-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForMaintenanceList-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:List"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForMaintenanceList-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForMaintenanceList-creation5",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation5",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MainMenuItem"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForMaintenanceList-creation5",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForMaintenanceList-creation5"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForPicker-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForPicker-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForPicker",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForPicker-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ThisExpression"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForPicker-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForPicker",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForPicker-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ItemSelector"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForPicker-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForPicker",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForPicker-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForRelatedInstances-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForRelatedInstances-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForRelatedInstances",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForRelatedInstances-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ThisExpression"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForRelatedInstances-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForRelatedInstances",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:structureForRelatedInstances-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:List"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:structureForRelatedInstances-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForRelatedInstances",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:structureForRelatedInstances-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forAddButton-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MdcButton"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forAddButton-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forAddButton",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forAddButton-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:AssignPageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forAddButton-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forAddButton",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forAddButton-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StorePageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forAddButton-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forAddButton",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forAddButton-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:NavigatePageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forAddButton-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forAddButton",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forAddButton-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:IfElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MdcButton"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StorePageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation5",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation5",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:BackPageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation5",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation5"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation6",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation6",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MdcButton"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation6",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation6"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation7",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation7",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StorePageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation7",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation7"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forDraftActions-creation8",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation8",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:BackPageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forDraftActions-creation8",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forDraftActions-creation8"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forFieldRow-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:IfElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forFieldRow-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRow",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forFieldRow-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forFieldRow-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRow",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRow-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forFieldRowManyToOne-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowManyToOne-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StmLinkField"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forFieldRowManyToOne-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowManyToOne",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowManyToOne-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forFieldRowString-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowString-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MdcTextField"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forFieldRowString-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowString",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forFieldRowString-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forInlineInstance-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstance-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StmExpandCard"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forInlineInstance-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstance",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstance-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forInlineInstanceAndEntityUnionMember-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstanceAndEntityUnionMember-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forInlineInstanceAndEntityUnionMember-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstanceAndEntityUnionMember",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInlineInstanceAndEntityUnionMember-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forInstanceMaintenance-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Page"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forInstanceMaintenance-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenance",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forInstanceMaintenance-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forInstanceMaintenance-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenance",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forInstanceMaintenance-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forItemSelector-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forItemSelector-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forItemSelector-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forItemSelector-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forItemSelector-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MdcRadioList"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forItemSelector-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forItemSelector-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StorePageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forItemSelector-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forItemSelector-creation5",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation5",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:BackPageAction"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forItemSelector-creation5",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forItemSelector-creation5"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forList-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forList-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forList-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forList-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forList-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MdcList"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forList-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forList-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forMainMenuItem-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forMainMenuItem-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMainMenuItem",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forMainMenuItem-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forMainMenuItem-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMainMenuItem",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMainMenuItem-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forMaintenanceList-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenanceList-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Page"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forMaintenanceList-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenanceList",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forMaintenanceList-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forPicker-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Page"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forPicker-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forPicker",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forPicker-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forPicker-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forPicker",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forPicker-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forRelatedInstances-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forRelatedInstances-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:GroupElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forRelatedInstances-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forRelatedInstances",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forRelatedInstances-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forSection-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSection-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:GroupElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forSection-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSection",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSection-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forSectionWithHeader-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithHeader-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forSectionWithHeader-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithHeader",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithHeader-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:forSectionWithSubheader-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithSubheader-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:forSectionWithSubheader-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithSubheader",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:forSectionWithSubheader-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Page"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation10",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation10",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation10",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation10"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation11",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation11",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation11",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation11"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation12",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation12",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation12",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation12"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation13",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation13",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstanceElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation13",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation13"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation14",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation14",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:IfElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation14",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation14"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation15",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation15",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation15",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation15"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation16",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation16",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:IfElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation16",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation16"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation17",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation17",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation17",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation17"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation18",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation18",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation18",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation18"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation19",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation19",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:IncludePageElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation19",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation19"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation2",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation2",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MdcTopAppBar"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation2",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation2"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation3",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation3",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation3",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation3"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation4",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation4",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation4",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation4"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation5",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation5",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation5",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation5"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation6",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation6",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation6",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation6"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation7",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation7",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation7",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation7"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation8",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation8",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation8",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation8"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:global-creation9",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation9",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HtmlElement"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:global-creation9",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:global",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:global-creation9"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:entityVisualization-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:entityVisualization-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:entityVisualization-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:entityVisualization",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:entityVisualization-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:erVisualizationForCreation-creation1",
      "style": "dotted-triangle",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:erVisualizationForCreation-creation1",
      "style": "lightning"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:erVisualizationForCreationToEntity-creation1",
      "style": "dotted-triangle",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:erVisualizationForCreationToEntity-creation1",
      "style": "lightning"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:erVisualizationForMechanism-creation1",
      "style": "dotted-triangle",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:erVisualizationForMechanism-creation1",
      "style": "lightning"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:erVisualizationForMechanismIngredient-creation1",
      "style": "dotted-triangle",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:erVisualizationForMechanismIngredient-creation1",
      "style": "lightning"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:erVisualizationForMechanismToCreation-creation1",
      "style": "dotted-triangle",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:erVisualizationForMechanismToCreation-creation1",
      "style": "lightning"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationManyToOneErVisualization-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOneErVisualization-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationManyToOneErVisualization-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOneErVisualization",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationManyToOneErVisualization-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationOneOwnsManyErVisualization-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsManyErVisualization-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationOneOwnsManyErVisualization-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsManyErVisualization",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsManyErVisualization-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:relationOneOwnsOneErVisualization-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOneErVisualization-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:relationOneOwnsOneErVisualization-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOneErVisualization",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:relationOneOwnsOneErVisualization-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:unionMemberErVisualization-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionMemberErVisualization-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:unionMemberErVisualization-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionMemberErVisualization",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionMemberErVisualization-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForCreationToEntity_RecipeCreation:unionVisualization-creation1",
      "style": "dotted-triangle",
      "fromNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionVisualization-creation1",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismToCreation_RecipeCreation:unionVisualization-creation1",
      "style": "lightning",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionVisualization",
      "toNode": "ERVisualizationNode:erVisualizationForCreation_RecipeCreation:unionVisualization-creation1"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:attributeOnUnion-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:attributeOnUnion",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:attributeOnUnion-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:attributeOnUnion",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Attribute"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:displayNameForEntity-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntity",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:displayNameForEntityAndUnion-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:displayNameForEntityAndUnion",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forExpression-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forExpression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:referenceOnUnion-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:referenceOnUnion",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:referenceOnUnion-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:referenceOnUnion",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:relationManyToOne-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOne",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:relationOneOwnsMany-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsMany",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:relationOneOwnsOne-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOne",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:fieldsForInstanceMaintenance-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:fieldsForInstanceMaintenance",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forEntityAndMaintenanceConfig-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forEntityAndMaintenanceConfig",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forEntityAndMaintenanceConfig-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forEntityAndMaintenanceConfig",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MaintenanceConfig"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forFieldRowWithOneToMany-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowWithOneToMany",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:FieldRow"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forFieldRowWithOneToMany-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowWithOneToMany",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forInstanceMaintenanceAndAttribute-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenanceAndAttribute",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forInstanceMaintenanceAndAttribute-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenanceAndAttribute",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forMaintenance-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenance",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Maintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceOneOwnsManyRelation-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceOneOwnsManyRelation-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceOneOwnsManyRelation-ingredient3",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceOneOwnsOneRelation-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsOneRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceOneOwnsOneRelation-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceOneOwnsOneRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceUnionMemberOneOwnsManyRelation-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceUnionMemberOneOwnsManyRelation-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:instanceMaintenanceUnionMemberOneOwnsManyRelation-ingredient3",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:instanceMaintenanceUnionMemberOneOwnsManyRelation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:structureForEntityRelatedInstances-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityRelatedInstances",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:structureForEntityRelatedInstances-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityRelatedInstances",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:structureForEntityUnionMemberRelatedInstances-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityUnionMemberRelatedInstances",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:structureForEntityUnionMemberRelatedInstances-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForEntityUnionMemberRelatedInstances",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:structureForMaintenanceList-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForMaintenanceList",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MaintenanceList"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:structureForPicker-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForPicker",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Picker"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:structureForRelatedInstances-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:structureForRelatedInstances",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forAddButton-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forAddButton",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:AddButton"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forDraftActions-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forDraftActions",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:DraftActions"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forFieldRow-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRow",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:FieldRow"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forFieldRowManyToOne-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowManyToOne",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:FieldRow"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forFieldRowString-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forFieldRowString",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:FieldRow"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forInlineInstance-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstance",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InlineInstance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forInlineInstanceAndEntityUnionMember-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstanceAndEntityUnionMember",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InlineInstance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forInlineInstanceAndEntityUnionMember-ingredient2",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInlineInstanceAndEntityUnionMember",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forInstanceMaintenance-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forInstanceMaintenance",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forItemSelector-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forItemSelector",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ItemSelector"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forList-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forList",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:List"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forMainMenuItem-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMainMenuItem",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MainMenuItem"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forMaintenanceList-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forMaintenanceList",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:MaintenanceList"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forPicker-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forPicker",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Picker"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forRelatedInstances-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forRelatedInstances",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forSection-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSection",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forSectionWithHeader-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithHeader",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:forSectionWithSubheader-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:forSectionWithSubheader",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Section"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:entityVisualization-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:entityVisualization",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:erVisualizationForCreation-ingredient1",
      "style": "observe",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:erVisualizationForCreationToEntity-ingredient1",
      "style": "observe",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:erVisualizationForMechanism-ingredient1",
      "style": "observe",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Recipe"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:erVisualizationForMechanismIngredient-ingredient1",
      "style": "observe",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:erVisualizationForMechanismToCreation-ingredient1",
      "style": "observe",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:relationManyToOneErVisualization-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationManyToOneErVisualization",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:relationOneOwnsManyErVisualization-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsManyErVisualization",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:relationOneOwnsOneErVisualization-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:relationOneOwnsOneErVisualization",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:unionMemberErVisualization-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionMemberErVisualization",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember"
    },
    {
      "key": "ERVisualizationEdge:erVisualizationForMechanismIngredient_RecipeIngredient:unionVisualization-ingredient1",
      "style": "observe",
      "fromNode": "ERVisualizationNode:erVisualizationForMechanism_Recipe:unionVisualization",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnion"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:AndExpressionOperand-andExpression",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:AndExpression",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:AndExpressionOperand-operand",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:AndExpressionOperand"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ConcatExpressionOperand-concatExpression",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConcatExpression",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ConcatExpressionOperand-operand",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConcatExpressionOperand"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:Constraint-otherPath",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Constraint"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:Constraint-path",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Constraint"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:Constraint-recipe",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Constraint",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Recipe",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Constraint-type",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Constraint",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintType"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ConstraintField-base",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:ConstraintPath",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintField"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ConstraintField-field",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintField",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ConstraintRecipeIngredient-ingredient",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ConstraintRecipeIngredient",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:DeriveKeyExpression-operand",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:DeriveKeyExpression"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:EntityUnionMember-entity",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:EntityUnionMember-union",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnionMember",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EntityUnion",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:EqualsExpression-op1",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EqualsExpression"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:EqualsExpression-op2",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:EqualsExpression"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:Field-entity",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Field-providesFieldForUnion",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:FieldExpression-base",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:FieldExpression"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:FieldExpression-field",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:FieldExpression",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:HasValueExpression-operand",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:HasValueExpression"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InstanceTemplateAttributeValue-field",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateAttributeValue",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:InstanceTemplateAttributeValue-recipeCreation",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateAttributeValue",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:InstanceTemplateAttributeValue-value",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InstanceTemplateAttributeValue"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:InterpolateExpressionPlaceholder-expression",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:InterpolateExpressionPlaceholder-placeholderFor",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpressionPlaceholder",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:InterpolateExpression",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:PageParameter-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:PageParameter",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:PageParameter-page",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:PageParameter",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Page",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:PlaceholderIngredientExpression-ingredient",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:PlaceholderIngredientExpression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:Recipe-constraint",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Recipe"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:RecipeCreation-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:RecipeCreation-recipe",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Recipe",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:RecipeCreationExpression-recipeCreation",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreation"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:RecipeCreationExpressionIngredient-expression",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpressionIngredient"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:RecipeCreationExpressionIngredient-recipeCreationExpression",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpressionIngredient",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeCreationExpression",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:RecipeIngredient-attributeWithPlaceholders",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Attribute"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:RecipeIngredient-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:RecipeIngredient-recipe",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Recipe",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:RecipeIngredientExpression-ingredient",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredientExpression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RecipeIngredient"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Reference-createdForManyToOneRelation",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Reference",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Relation"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Reference-to",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Reference",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Relation-from",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Relation",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Relation-to",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Relation",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Relation-type",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Relation",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelationType"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ValueDefault-expression",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ValueDefault"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ValueDefault-field",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ValueDefault",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsOneErVisualization_Relation:ValueRule-expression",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ValueRule"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ValueRule-field",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ValueRule",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:LoadFilter-field",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadFilter",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:LoadFilter-parent",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadFilter",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:LoadInstancesElement-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:LoadOrderBy-field",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:LoadOrderBy-parent",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:LoadOrderBy",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:LoadInstancesElement",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:PageAction-parent",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageAction",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageActionContainer",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:PageElement-parent",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:PageElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:VisualizerElement-edgeEntity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:VisualizerElement-nodeEntity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:VisualizerElement-positionEntity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:VisualizerElement",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MdcList-collectionEntity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcList",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MdcList-itemSingleLineAttribute",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcList",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Attribute"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MdcRadioList-collectionEntity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MdcRadioList-itemSingleLineAttribute",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MdcRadioList",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Attribute"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:StmExpandCardCreateAction-parent",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:StmExpandCardCreateAction",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:StmExpandCard",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:AddButton-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:AddButton",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:AddButton-fillReference",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:AddButton",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:FieldRow-field",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:FieldRow",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Field"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InlineInstance-reference",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InlineInstance",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:InstanceMaintenance-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:InstanceMaintenance",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ItemSelector-itemText",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ItemSelector-reference",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ItemSelector",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:List-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:List",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:EntityOrUnion"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:List-itemText",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:List",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:Expression"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:List-relatedInstances",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:List",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Maintenance-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Maintenance",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:MaintenanceList-entity",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:MaintenanceList",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Entity"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:Picker-reference",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:Picker",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:RelatedInstances-reverseReference",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:RelatedInstances",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:Reference"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:StructureElement-parent",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureElement",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:StructureContainer-mdcContainer",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:unionVisualization_EntityUnion:StructureContainer",
      "toNode": "ERVisualizationNode:unionVisualization_EntityUnion:ElementContainer"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ERVisualizationEdge-fromNode",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ERVisualizationEdge-node",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
      "fromLabel": "＊"
    },
    {
      "key": "ERVisualizationEdge:relationManyToOneErVisualization_Relation:ERVisualizationEdge-toNode",
      "style": "arrow",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationEdge",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode"
    },
    {
      "key": "ERVisualizationEdge:relationOneOwnsManyErVisualization_Relation:ERVisualizationPosition-node",
      "style": "diamond",
      "fromNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationPosition",
      "toNode": "ERVisualizationNode:entityVisualization_Entity:ERVisualizationNode",
      "fromLabel": "＊"
    }
  ],
  "positions": []
};

let nodes = new Map<string, NodeData>();
for (let [key, value] of Object.entries(data.nodes)) {
  if (!(value as any).displayName) {
    (value as any).displayName = '?';
  }
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
  },
  onNavigate(key: string) {
    alert(`Navigate to ${key}`);
  }
};
