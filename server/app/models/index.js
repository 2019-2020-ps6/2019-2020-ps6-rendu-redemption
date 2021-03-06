const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/sequelize.js');

const db = {};

// Initialize the sequelize instance.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Import the sequelize models.
fs
  .readdirSync(__dirname)
  .filter((file) => (
    (file.indexOf('.') !== 0)
    && (file !== path.basename(__filename))
    && (file.slice(-3) === '.js')
  ))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Run the models associations.
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Export the database objects.
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
