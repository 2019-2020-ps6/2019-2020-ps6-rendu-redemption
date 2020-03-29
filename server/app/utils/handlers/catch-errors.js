const ValidationError = require('../errors/validation-error');
const DatabaseConnectionError = require('../errors/database-connection-error');
const DatabaseRequestError = require('../errors/database-request-error');

const catchErrors = (error, next) => {
  if (error.name === 'SequelizeValidationError') {
    // Validation error.
    next(new ValidationError(error.errors[0].message));
  } else if (error.name === 'SequelizeDatabaseError') {
    // Database request error.
    next(new DatabaseRequestError());
  } else {
    // Database connection error.
    next(new DatabaseConnectionError());
  }
};

module.exports = catchErrors;
