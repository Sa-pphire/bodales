'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    static associate(models) {
      // define association here
    }
  }
  company.init({
    location: DataTypes.STRING,
    destination: DataTypes.STRING,
    productCategory: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    companyName: DataTypes.STRING,
    companyWebsite: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};