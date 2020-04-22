const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');
const AlreadyExistsError = require('../utils/errors/already-exists-error');
const QuizController = require('./quiz.controller');

/* -------------------------------------------------------------------------- */
/*                              GETTERS / SETTERS                             */
/* -------------------------------------------------------------------------- */

/**
 * Finds all the quizzes of the guest.
 * @param id The id of the guest.
 */
function findAll(id) {
  // Find the guest.
  return models.Guest
    .findByPk(id)
    .then((guest) => {
      if (guest) {
        // Find the quizzes.
        return guest.getQuizzes({
          joinTableAttributes: [],
          attributes: {
            exclude: ['imageId', 'themeId']
          },
          include: [
            // Include image.
            {
              model: models.Image,
              as: 'image'
            },
            // Include theme.
            {
              model: models.Theme,
              as: 'theme',
              attributes: {
                exclude: ['imageId']
              },
              // Include image of theme.
              include: [{
                model: models.Image,
                as: 'image'
              }]
            },
            // Include questions.
            {
              model: models.Question,
              as: 'questions',
              attributes: {
                exclude: ['quizId', 'imageId']
              },
              include: [
                // Include image of questions.
                {
                  model: models.Image,
                  as: 'image'
                },
                // Include answers of questions.
                {
                  model: models.Answer,
                  as: 'answers',
                  attributes: {
                    exclude: ['questionId', 'quizId', 'imageId']
                  },
                  // Include image of answers.
                  include: [{
                    model: models.Image,
                    as: 'image'
                  }]
                }
              ]
            }
          ],
          order: [
            // Order the quizzes.
            ['id', 'ASC'],

            // Order the questions and the answers.
            [{ model: models.Question, as: 'questions' }, { model: models.Answer, as: 'answers' }, 'id', 'ASC']
          ]
        });
      }
      // Guest not found.
      throw new NotFoundError();
    });
}

/**
 * Adds a quiz to the guest.
 * @param id The id of the guest.
 * @param quizId The id of the quiz to be added.
 */
function add(id, quizId) {
  // Find the guest.
  return models.Guest
    .findByPk(id)
    .then((guest) => {
      if (guest) {
        // If the guest has the quiz.
        return guest
          .hasQuiz(parseInt(quizId, 10))
          .then((hasQuiz) => {
            console.log(hasQuiz);
            if (!hasQuiz) {
              // Add the quiz.
              return guest.addQuiz(quizId);
            }
            // Quiz already added.
            throw new AlreadyExistsError();
          });
      }
      // Guest not found.
      throw new NotFoundError();
    });
}



/**
 * Removes a quiz from a guest.
 * @param id The id of the guest.
 * @param quizId The id of the quiz to be deleted.
 */
function remove(id, quizId) {
  // Find the guest.
  return models.Guest
    .findByPk(id)
    .then((guest) => {
      if (guest) {
        // If the guest has the quiz.
        return guest
          .hasQuiz(parseInt(quizId, 10))
          .then((hasQuiz) => {
            if (hasQuiz) {
              // Remove the quiz.
              guest.removeQuiz(quizId);
            }
            // Quiz not found.
            throw new NotFoundError();
          });
      }
      // Guest not found.
      throw new NotFoundError();
    });
}

/* -------------------------------------------------------------------------- */
/*                                    PRINTS                                  */
/* -------------------------------------------------------------------------- */

/**
 * Prints all the quizzes of a guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printFindAll(req, res, next) {
  findAll(req.params.guestId)
    .then((quizzes) => {
      res.status(200).json(quizzes);
    })
    // Errors.
    .catch(next);
}

/**
 * Print the quiz added to a guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printAdd(req, res, next) {
  add(req.params.guestId, req.params.quizId)
    // eslint-disable-next-line arrow-body-style
    .then(() => {
      return QuizController
        .find(req.params.quizId)
        .then((quiz) => {
          res.status(201).json(quiz);
        });
    })
    .catch(next);
}

/**
 * Prints the quiz removed from a guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printRemove(req, res, next) {
  remove(req.params.guestId, req.params.quizId)
    // eslint-disable-next-line arrow-body-style
    .then(() => {
      return QuizController
        .find(req.params.quizId)
        .then((quiz) => {
          res.status(200).json(quiz);
        });
    })
    .catch(next);
}

module.exports = {
  findAll,
  printFindAll,
  add,
  printAdd,
  remove,
  printRemove
};
