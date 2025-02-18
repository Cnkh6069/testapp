// user model
'use strict';
const { Model } = require ("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Recipe, {
        foreignKey: 'userId'
      });
      User.belongsToMany(models.Recipe, {
        through: 'SavedRecipes',
        foreignKey: 'userId',
        as: 'savedRecipes'
      });
    }
  }
  User.init(
    {
      auth0_id: {
        type: DataTypes.STRING,
        unique: true,
      },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        dateOfBirth: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        bio: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        yearsOfCookingExp: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};