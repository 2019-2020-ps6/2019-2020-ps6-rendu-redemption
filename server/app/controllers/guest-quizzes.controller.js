const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');
const AlreadyExistsError = require('../utils/errors/already-exists-error');
/**
 * Finds all the quizzes of the guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAll = (req, res, next) => {
  // Find the guest.
  models.Guest
    .findByPk(req.params.guestId)
    .then((guest) => {
      if (guest) {
        // Find the quizzes.
        guest
          .getQuizzes()
          .then((quizzes) => {
            // Success.
            res
              .status(200)
              .json({
                data: quizzes
              });
          })
          // Errors.
          .catch(next);
      } else {
        // Guest not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Adds a quiz to the guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.add = (req, res, next) => {
  const guestId = parseInt(req.params.guestId, 10);
  const quizId = parseInt(req.params.quizId, 10);

  // Find the guest.
  models.Guest
    .findByPk(req.params.guestId)
    .then((guest) => {
      if (guest) {
        // If the guest has the quiz.
        guest
          .hasQuiz(quizId)
          .then((hasQuiz) => {
            if (!hasQuiz) {
              // Add the quiz.
              guest
                .addQuiz(quizId)
                .then(() => {
                  res
                    .status(201)
                    .json({
                      data: {
                        guestId,
                        quizId,
                        message: 'The quiz has been added from the guest.'
                      }
                    });
                })
                // Errors.
                .catch(next);
            } else {
              // Quiz already added.
              next(new AlreadyExistsError());
            }
          })
          // Errors.
          .catch(next);
      } else {
        // Guest not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Deletes a guest by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.remove = (req, res, next) => {
  const guestId = parseInt(req.params.guestId, 10);
  const quizId = parseInt(req.params.quizId, 10);

  // Find the guest.
  models.Guest
    .findByPk(req.params.guestId)
    .then((guest) => {
      if (guest) {
        // If the guest has the quiz.
        guest
          .hasQuiz(quizId)
          .then((hasQuiz) => {
            if (hasQuiz) {
              // Remove the quiz.
              guest
                .removeQuiz(quizId)
                .then(() => {
                  res
                    .status(200)
                    .json({
                      data: {
                        guestId,
                        quizId,
                        message: 'The quiz has been removed from the guest.'
                      }
                    });
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
      } else {
        // Guest not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
