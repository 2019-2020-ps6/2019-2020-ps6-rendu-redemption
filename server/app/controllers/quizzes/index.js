const models = require('../../models');
const NotFoundError = require('../../utils/errors/not-found-error');

/**
 * Finds all the quizzes.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAll = (req, res, next) => {
  // Find the quizzes.
  models.Quiz
    .findAll({
      order: [['id', 'ASC']]
    })
    .then((quizzes) => {
      // Success.
      res.status(200);
      res.json({
        data: quizzes
      });
    })
    // Errors.
    .catch(next);
};

/**
 * Creates a quiz.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.create = (req, res, next) => {
  models.Quiz
    .create({
      name: req.body.name
    })
    .then((quiz) => {
      // Created.
      res
        .status(201)
        .json({
          data: {
            id: quiz.id,
            message: 'The quiz has been created.'
          }
        });
    })
    // Errors.
    .catch(next);
};

/**
 * Finds a quiz by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findById = (req, res, next) => {
  // Find the quiz.
  models.Quiz
    .findByPk(req.params.quizId)
    .then((quiz) => {
      if (quiz) {
        // Found.
        res.status(200);
        res.json({
          data: quiz
        });
      } else {
        // Quiz not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Updates a quiz by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.updateById = (req, res, next) => {
  models.Quiz
    .update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.params.quizId
        }
      }
    )
    .then((updatedRows) => {
      if (updatedRows > 0) {
        // Updated.
        res
          .status(200)
          .json({
            data: {
              id: req.params.quizId,
              message: 'The quiz has been updated.'
            }
          });
      } else {
        // Quiz not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Deletes a quiz by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.deleteById = (req, res, next) => {
  models.Quiz
    .destroy({
      where: {
        id: req.params.quizId
      }
    })
    .then((destroyedRows) => {
      if (destroyedRows > 0) {
        // Deleted.
        res
          .status(200)
          .json({
            data: {
              id: req.params.quizId,
              message: 'The quiz has been deleted.'
            }
          });
      } else {
        // Not found error.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
