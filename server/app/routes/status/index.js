const { Router } = require('express');
const { Sequelize } = require('sequelize');
const config = require('../../config/sequelize');
const DatabaseError = require('../../utils/errors/database-connection-error');

const router = new Router();

router.get('/', (req, res, next) => {
  // Initialize the sequelize instance.
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

  // Check the database connection.
  sequelize
    .authenticate()
    .then(() => {
      // Success.
      res.status(200);
      res.json('ok');
    })
    .catch(() => {
      // Failure.
      next(new DatabaseError());
    })
    .finally(() => {
      sequelize.close();
    });
});

module.exports = router;
