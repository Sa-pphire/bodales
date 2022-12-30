'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT,
    restaurantName: DataTypes.STRING,
    restaurantCuisine: DataTypes.STRING,
    restaurantLocation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};