const models = require('../../models');
const NotFoundError = require('../../utils/errors/not-found-error');
const catchErrors = require('../../utils/handlers/catch-errors');

/**
 * Finds all the quizzes.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAllQuizzes = (req, res, next) => {
  models.Quiz
    .findAll()
    .then((quizzes) => {
      // Success.
      res.status(200);
      res.json({
        data: {
          items: quizzes
        }
      });
    })
    .catch((err) => {
      // Errors.
      catchErrors(err, next);
    });
};

/**
 * Creates a quiz.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.createQuiz = (req, res, next) => {
  models.Quiz
    .create({
      name: req.body.name
    })
    .then((quiz) => {
      // Success.
      res.status(201);
      res.json({
        data: {
          id: quiz.id,
          message: 'The quiz has been created.'
        }
      });
    })
    .catch((err) => {
      // Errors.
      catchErrors(err, next);
    });
};

/**
 * Finds a quiz by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findQuizById = (req, res, next) => {
  models.Quiz
    .findByPk(req.params.quiz_id)
    .then((quiz) => {
      if (quiz) {
        // Success.
        res.status(200);
        res.json({
          data: quiz
        });
      } else {
        // Not found error.
        next(new NotFoundError());
      }
    })
    .catch((err) => {
      // Errors.
      catchErrors(err, next);
    });
};

/**
 * Updates (or creates) a quiz by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.upsertQuizById = (req, res, next) => {
  models.Quiz
    .upsert(
      {
        id: req.params.quiz_id,
        name: req.body.name
      }
    )
    .then((created) => {
      if (created) {
        // Created.
        res.status(200);
        res.json({
          data: {
            id: req.params.quiz_id,
            message: 'The quiz has been created.'
          }
        });
      } else {
        // Updated.
        res.status(200);
        res.json({
          data: {
            id: req.params.quiz_id,
            message: 'The quiz has been updated.'
          }
        });
      }
    })
    .catch((err) => {
      // Errors.
      catchErrors(err, next);
    });
};

/**
 * Updates a quiz by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.updateQuizById = (req, res, next) => {
  models.Quiz
    .update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.params.quiz_id
        }
      }
    )
    .then((updatedRows) => {
      if (updatedRows > 0) {
        // Updated.
        res.status(200);
        res.json({
          data: {
            id: req.params.quiz_id,
            message: 'The quiz has been updated.'
          }
        });
      } else {
        // Not found error.
        next(new NotFoundError());
      }
    })
    .catch((err) => {
      // Errors.
      catchErrors(err, next);
    });
};

/**
 * Deletes a quiz by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.deleteQuizById = (req, res, next) => {
  models.Quiz
    .destroy({
      where: {
        id: req.params.quiz_id
      }
    })
    .then((destroyedRows) => {
      if (destroyedRows > 0) {
        // Success.
        res.status(200);
        res.json({
          data: {
            id: req.params.quiz_id,
            message: 'The quiz has been deleted.'
          }
        });
      } else {
        // Not found error.
        next(new NotFoundError());
      }
    })
    .catch((err) => {
      // Errors.
      catchErrors(err, next);
    });
};
