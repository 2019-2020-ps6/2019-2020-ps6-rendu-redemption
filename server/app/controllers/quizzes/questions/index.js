const models = require('../../../models');
const NotFoundError = require('../../../utils/errors/not-found-error');

/**
 * Finds all the questions.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAll = (req, res, next) => {
  // Find the quiz.
  models.Quiz
    .findOne({
      where: {
        id: req.params.quizId
      }
    })
    .then((quiz) => {
      if (quiz) {
        // Find the questions.
        quiz
          .getQuestions()
          .then((questions) => {
            // Success.
            res
              .status(200)
              .json({
                data: questions
              });
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
 * Creates a question.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.create = (req, res, next) => {
  // Find the quiz.
  models.Quiz
    .findOne({
      where: {
        id: req.params.quizId
      }
    })
    .then((quiz) => {
      if (quiz) {
        // Create the question.
        quiz
          .createQuestion({
            label: req.body.label
          })
          .then((question) => {
            // Created.
            res
              .status(201)
              .json({
                data: {
                  id: question.id,
                  message: 'The question has been created.'
                }
              });
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
 * Finds a question by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findById = (req, res, next) => {
  // Find the question.
  models.Question
    .findOne({
      where: {
        id: req.params.questionId,
        quizId: req.params.quizId
      }
    })
    .then((question) => {
      if (question) {
        // Found.
        res.status(200);
        res.json({
          data: question
        });
      } else {
        // Question not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Updates a question by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.updateById = (req, res, next) => {
  models.Question
    .update(
      {
        label: req.body.label
      },
      {
        where: {
          id: req.params.questionId,
          quizId: req.params.quizId
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
              id: req.params.questionId,
              message: 'The question has been updated.'
            }
          });
      } else {
        // Question not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Deletes a question by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.deleteById = (req, res, next) => {
  models.Question
    .destroy({
      where: {
        id: req.params.questionId,
        quizId: req.params.quizId
      }
    })
    .then((destroyedRows) => {
      if (destroyedRows > 0) {
        // Deleted.
        res
          .status(200)
          .json({
            data: {
              id: req.params.questionId,
              message: 'The question has been deleted.'
            }
          });
      } else {
        // Question not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
