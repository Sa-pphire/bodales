'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    restaurantName: DataTypes.STRING,
    restaurantPassword: DataTypes.STRING,
    restaurantPnumber: DataTypes.BIGINT,
    restaurantEmail: DataTypes.STRING,
    restaurantLocation: DataTypes.STRING,
    restaurantQrcode: DataTypes.BYTEA
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};