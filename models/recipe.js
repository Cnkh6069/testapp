'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsToMany(models.Ingredient, {
        through: 'RecipeIngredients',
        foreignKey: 'recipeId',
        otherKey: 'ingredientId'
      });
      // Add this association
      Recipe.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      Recipe.belongsToMany(models.User, {
        through: 'SavedRecipes',
        foreignKey: 'recipeId',
        as: 'savedByUsers'
      });
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    steps: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    prepTime: DataTypes.INTEGER,
    cookTime: DataTypes.INTEGER,
    totalTime: DataTypes.INTEGER,
    cuisineType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};