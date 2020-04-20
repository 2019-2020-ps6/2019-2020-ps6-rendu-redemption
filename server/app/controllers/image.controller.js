const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');

/**
 * Finds all the images.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAll = (req, res, next) => {
  // Find the images.
  models.Image
    .findAll({
      order: [['id', 'ASC']]
    })
    .then((images) => {
      // Success.
      res
        .status(200)
        .json(images);
    })
    // Errors.
    .catch(next);
};

/**
 * Creates an image.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.create = (req, res, next) => {
  models.Image
    .create({
      name: req.body.name,
      path: req.body.path
    })
    .then((image) => {
      // Created.
      res
        .status(201)
        .json({
          id: image.id,
          message: 'The image has been created.'
        });
    })
    // Errors.
    .catch(next);
};

/**
 * Finds a image by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findById = (req, res, next) => {
  // Find the image.
  models.Image
    .findByPk(req.params.imageId)
    .then((image) => {
      if (image) {
        // Found.
        res
          .status(200)
          .json(image);
      } else {
        // Image not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Updates a image by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.updateById = (req, res, next) => {
  models.Image
    .update(
      {
        name: req.body.name,
        path: req.body.path
      },
      {
        where: {
          id: req.params.imageId
        }
      }
    )
    .then((updatedRows) => {
      if (updatedRows > 0) {
        // Updated.
        res
          .status(200)
          .json({
            id: req.params.imageId,
            message: 'The image has been updated.'
          });
      } else {
        // Image not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Deletes a image by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.deleteById = (req, res, next) => {
  models.Image
    .destroy({
      where: {
        id: req.params.imageId
      }
    })
    .then((destroyedRows) => {
      if (destroyedRows > 0) {
        // Deleted.
        res
          .status(200)
          .json({
            id: req.params.imageId,
            message: 'The image has been deleted.'
          });
      } else {
        // Image not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
