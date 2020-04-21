const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');

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
      // Attributes of the quizzes.
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
      include: [
        // Include image.
        {
          model: models.Image,
          as: 'image',
          attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
        },
        // Include theme.
        {
          model: models.Theme,
          as: 'theme',
          attributes: ['id', 'name', 'createdAt', 'updatedAt'],
          // Include image of the theme.
          include: [{
            model: models.Image,
            as: 'image',
            attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
          }]
        },
        // Include questions.
        {
          model: models.Question,
          as: 'questions',
          attributes: ['id', 'label', 'createdAt', 'updatedAt'],
          include: [
            // Include image of questions.
            {
              model: models.Image,
              as: 'image',
              attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
            },
            // Include answers of questions.
            {
              model: models.Answer,
              as: 'answers',
              attributes: ['id', 'value', 'isCorrect', 'createdAt', 'updatedAt'],
              // Include image of answers.
              include: [{
                model: models.Image,
                as: 'image',
                attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
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
    })
    .then((quizzes) => {
      // Success.
      res
        .status(200)
        .json(quizzes);
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
      name: req.body.name,
      themeId: req.body.themeId,
      imageId: req.body.imageId
    })
    .then((quiz) => {
      // Created.
      res
        .status(201)
        .json({
          id: quiz.id,
          message: 'The quiz has been created.'
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
    .findOne({
      // Attributes of the quizzes.
      attributes: ['id', 'name', 'createdAt', 'updatedAt'],
      include: [
        // Include image.
        {
          model: models.Image,
          as: 'image',
          attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
        },
        // Include theme.
        {
          model: models.Theme,
          as: 'theme',
          attributes: ['id', 'name', 'createdAt', 'updatedAt'],
          // Include image of the theme.
          include: [{
            model: models.Image,
            as: 'image',
            attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
          }]
        },
        // Include questions.
        {
          model: models.Question,
          as: 'questions',
          attributes: ['id', 'label', 'createdAt', 'updatedAt'],
          include: [
            // Include image of questions.
            {
              model: models.Image,
              as: 'image',
              attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
            },
            // Include answers of questions.
            {
              model: models.Answer,
              as: 'answers',
              attributes: ['id', 'value', 'isCorrect', 'createdAt', 'updatedAt'],
              // Include image of answers.
              include: [{
                model: models.Image,
                as: 'image',
                attributes: ['id', 'name', 'path', 'createdAt', 'updatedAt']
              }]
            }
          ]
        }
      ],
      order: [
        // Order the questions and the answers.
        [{ model: models.Question, as: 'questions' }, { model: models.Answer, as: 'answers' }, 'id', 'ASC']
      ],
      where: {
        id: req.params.quizId
      }
    })
    .then((quiz) => {
      if (quiz) {
        // Found.
        res
          .status(200)
          .json(quiz);
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
        name: req.body.name,
        themeId: req.body.themeId,
        imageId: req.body.imageId
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
            id: req.params.quizId,
            message: 'The quiz has been updated.'
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
            id: req.params.quizId,
            message: 'The quiz has been deleted.'
          });
      } else {
        // Quiz not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
