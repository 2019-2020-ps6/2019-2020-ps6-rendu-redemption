const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');
const LimitReachedError = require('../utils/errors/limit-reached-error');

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
          .getQuestions({
            order: [['id', 'ASC']]
          })
          .then((questions) => {
            // Success.
            res
              .status(200)
              .json(questions);
          })
          // Errors.
          .catch(next);
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
        // Count the questions.
        quiz
          .countQuestions()
          .then((number) => {
            if (number < 20) {
              // Create the question.
              quiz
                .createQuestion({
                  label: req.body.label,
                  imageId: req.body.imageId
                })
                .then((question) => {
                  // Created.
                  res
                    .status(201)
                    .json({
                      id: question.id,
                      message: 'The question has been created.'
                    });
                })
                // Errors.
                .catch(next);
            } else {
              // Too many questions.
              next(new LimitReachedError());
            }
          })
          // Errors.
          .catch(next);
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
        res
          .status(200)
          .json(question);
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
        label: req.body.label,
        imageId: req.body.imageId
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
            id: req.params.questionId,
            message: 'The question has been updated.'
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
            id: req.params.questionId,
            message: 'The question has been deleted.'
          });
      } else {
        // Question not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
