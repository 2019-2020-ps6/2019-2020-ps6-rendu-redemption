const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');
const LimitReachedError = require('../utils/errors/limit-reached-error');

/**
 * Finds all the answers.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAll = (req, res, next) => {
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
        // Find the answers.
        question
          .getAnswers({
            order: [['orderNb', 'ASC']]
          })
          .then((answers) => {
            // Success.
            res
              .status(200)
              .json({
                data: answers
              });
          })
          // Errors.
          .catch(next);
      } else {
        // Question not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Creates an answer.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.create = (req, res, next) => {
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
        // Count the answers.
        question
          .countAnswers()
          .then((number) => {
            if (number < 4) {
              // Create the answer.
              question
                .createAnswer({
                  quizId: req.params.quizId,
                  value: req.body.value,
                  isCorrect: req.body.isCorrect,
                  imageId: req.body.imageId
                })
                .then((answer) => {
                  // Created.
                  res
                    .status(201)
                    .json({
                      data: {
                        id: answer.id,
                        message: 'The answer has been created.'
                      }
                    });
                })
                // Errors.
                .catch(next);
            } else {
              // Too many answers.
              next(new LimitReachedError());
            }
          })
          // Errors.
          .catch(next);
      } else {
        // Question not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Finds an answer by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findById = (req, res, next) => {
  // Find the answer.
  models.Answer
    .findOne({
      where: {
        id: req.params.answerId,
        quizId: req.params.quizId,
        questionId: req.params.questionId
      }
    })
    .then((answer) => {
      if (answer) {
        // Found.
        res
          .status(200)
          .json({
            data: answer
          });
      } else {
        // Answer not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Updates an answer by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.updateById = (req, res, next) => {
  models.Answer
    .update(
      {
        value: req.body.value,
        isCorrect: req.body.isCorrect
      },
      {
        where: {
          id: req.params.answerId,
          quizId: req.params.quizId,
          questionId: req.params.questionId
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
              id: req.params.answerId,
              message: 'The answer has been updated.'
            }
          });
      } else {
        // Answer not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Deletes an answer by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.deleteById = (req, res, next) => {
  models.Answer
    .destroy({
      where: {
        id: req.params.answerId,
        quizId: req.params.quizId,
        questionId: req.params.questionId
      }
    })
    .then((destroyedRows) => {
      if (destroyedRows > 0) {
        // Deleted.
        res.status(200);
        res.json({
          data: {
            id: req.params.questionId,
            message: 'The answer has been deleted.'
          }
        });
      } else {
        // Answer not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
