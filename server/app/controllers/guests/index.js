const models = require('../../models');
const NotFoundError = require('../../utils/errors/not-found-error');

/**
 * Finds all the guests.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findAll = (req, res, next) => {
  // Find the guests.
  models.Guest
    .findAll({
      order: [['id', 'ASC']]
    })
    .then((guests) => {
      // Success.
      res.status(200);
      res.json({
        data: guests
      });
    })
    // Errors.
    .catch(next);
};

/**
 * Creates a guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.create = (req, res, next) => {
  models.Guest
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then((guest) => {
      // Created.
      res
        .status(201)
        .json({
          data: {
            id: guest.id,
            message: 'The guest has been created.'
          }
        });
    })
    // Errors.
    .catch(next);
};

/**
 * Finds a guest by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.findById = (req, res, next) => {
  // Find the guest.
  models.Guest
    .findByPk(req.params.guestId)
    .then((guest) => {
      if (guest) {
        // Found.
        res.status(200);
        res.json({
          data: guest
        });
      } else {
        // Guest not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};

/**
 * Updates a guest by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
exports.updateById = (req, res, next) => {
  models.Guest
    .update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      },
      {
        where: {
          id: req.params.guestId
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
              id: req.params.guestId,
              message: 'The guest has been updated.'
            }
          });
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
exports.deleteById = (req, res, next) => {
  models.Guest
    .destroy({
      where: {
        id: req.params.questId
      }
    })
    .then((destroyedRows) => {
      if (destroyedRows > 0) {
        // Deleted.
        res
          .status(200)
          .json({
            data: {
              id: req.params.questId,
              message: 'The guest has been deleted.'
            }
          });
      } else {
        // Guest not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
};
