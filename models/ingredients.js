'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      // Add many-to-many association with Recipe model
      Ingredient.belongsToMany(models.Recipe, {
        through: 'RecipeIngredients',
        foreignKey: 'ingredientId',
        otherKey: 'recipeId'
      });
    }
  }
  Ingredient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};