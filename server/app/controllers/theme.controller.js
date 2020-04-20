const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');

/**
 * Finds all the themes.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAll = (req, res, next) => {
  // Find the themes.
  models.Theme
    .findAll({
      order: [['id', 'ASC']]
    })
    .then((themes) => {
      // Success.
      res
        .status(200)
        .json(themes);
    })
    // Errors.
    .catch(next);
};

/**
 * Creates a theme.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.create = (req, res, next) => {
  models.Theme
    .create({
      name: req.body.name,
      imageId: req.body.imageId
    })
    .then((theme) => {
      // Created.
      res
        .status(201)
        .json({
          id: theme.id,
          message: 'The theme has been created.'
        });
    })
    // Errors.
    .catch(next);
};

/**
 * Finds a theme by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findById = (req, res, next) => {
  // Find the quiz.
  models.Theme
    .findByPk(req.params.themeId)
    .then((theme) => {
      if (theme) {
        // Found.
        res
          .status(200)
          .json(theme);
      } else {
        // Theme not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Updates a theme by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.updateById = (req, res, next) => {
  models.Theme
    .update(
      {
        name: req.body.name,
        imageId: req.body.imageId
      },
      {
        where: {
          id: req.params.themeId
        }
      }
    )
    .then((updatedRows) => {
      if (updatedRows > 0) {
        // Updated.
        res
          .status(200)
          .json({
            id: req.params.themeId,
            message: 'The theme has been updated.'
          });
      } else {
        // Theme not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Deletes a theme by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.deleteById = (req, res, next) => {
  models.Theme
    .destroy({
      where: {
        id: req.params.themeId
      }
    })
    .then((destroyedRows) => {
      if (destroyedRows > 0) {
        // Deleted.
        res
          .status(200)
          .json({
            id: req.params.themeId,
            message: 'The theme has been deleted.'
          });
      } else {
        // Theme not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
