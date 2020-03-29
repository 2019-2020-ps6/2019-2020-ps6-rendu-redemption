const ApplicationError = require('./application-error');

class DatabaseConnectionError extends ApplicationError {
  constructor() {
    super(500, 'The database could not be accessed.');
  }
}

module.exports = DatabaseConnectionError;
