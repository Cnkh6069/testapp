'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RecipeIngredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recipes',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      unit: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Add a compound unique constraint to prevent duplicate ingredients in a recipe
    await queryInterface.addConstraint('RecipeIngredients', {
      fields: ['recipeId', 'ingredientId'],
      type: 'unique',
      name: 'unique_recipe_ingredient'
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('RecipeIngredients');
  }
};