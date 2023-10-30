'use strict';

const { Sequelize, DataTypes } = require('sequelize');

// Load the config.json file and set the db of the development environment
// config: Save setting values accessible to db
const config = require(__dirname + '/../config/config.json')['development'];

// create an empty db object
const db = {};

// Create a Sequelize object and store it in the sequelize variable
const sequelize = new Sequelize(
  config.database, // task_react23s
  config.username, // user
  config.password, // 1234 or empty string
  config // {}
);

// db = { sequelize, Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// The model (table) defined in the models/ folder is stored in the db object.
db.Task = require('./Task.js')(sequelize, DataTypes);

// export db object (module export, db object can be used elsewhere)
module.exports = db;
