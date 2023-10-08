'use strict';

module.exports = (sequelize, Sequelize) => {
  const Individual = sequelize.define("individuals", {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    destination: {
      type: Sequelize.STRING
    },
    productCategory: {
      type: Sequelize.STRING
    },
    productDescription: {
      type: Sequelize.STRING
    },

  }, {
    timestamps: false,
    
});

  return Individual;
};