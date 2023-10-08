require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
   process.env.DB,
   process.env.USER,
   process.env.PASSWORD,
  {
    dialect:  "postgres"
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company = require("./company.js")(sequelize, Sequelize);
db.individual = require("./individual.js")(sequelize, Sequelize);


module.exports = db;