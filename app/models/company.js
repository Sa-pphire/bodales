'use strict';

module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("companies", {
    companyName: {
      type: Sequelize.STRING
    },
    companyWebsite: {
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
    }

  }, {
    timestamps: false,
    
});

  return Company;
};