const ApplicationError = require('./application-error');

class DatabaseRequestError extends ApplicationError {
  constructor() {
    super(500, 'The database request was invalid.');
  }
}

module.exports = DatabaseRequestError;
