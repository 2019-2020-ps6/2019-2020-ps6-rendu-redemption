const models = require('../models');
const NotFoundError = require('../utils/errors/not-found-error');

/* -------------------------------------------------------------------------- */
/*                              GETTERS / SETTERS                             */
/* -------------------------------------------------------------------------- */

/**
 * Finds all the guests.
 */
function findAll() {
  return models.Guest
    .findAll({
      order: [['id', 'ASC']],
      // Include the quizzes.
      include: [
        {
          model: models.Quiz,
          as: 'quizzes',
          // Exclude join table attributes.
          through: {
            attributes: []
          },
          // Exclude foreign keys.
          attributes: {
            exclude: ['imageId', 'themeId']
          },
          include: [
            // Include the image.
            {
              model: models.Image,
              as: 'image'
            },
            // Include the theme.
            {
              model: models.Theme,
              as: 'theme',
              // Exclude foreign keys.
              attributes: {
                exclude: ['imageId']
              },
              // Include the image of the theme.
              include: [{
                model: models.Image,
                as: 'image'
              }]
            },
            // Include the questions.
            {
              model: models.Question,
              as: 'questions',
              // Exclude foreign keys.
              attributes: {
                exclude: ['quizId', 'imageId']
              },
              include: [
                // Include the images of the questions.
                {
                  model: models.Image,
                  as: 'image'
                },
                // Include the answers of the questions.
                {
                  model: models.Answer,
                  as: 'answers',
                  // Exclude foreign keys.
                  attributes: {
                    exclude: ['questionId', 'quizId', 'imageId']
                  },
                  // Include the images of the answers.
                  include: [{
                    model: models.Image,
                    as: 'image'
                  }]
                }
              ]
            }
          ]
        }
      ]
    });
}

/**
 * Finds a guest by id.
 * @param id The id of the guest.
 */
function find(id) {
  return models.Guest.findByPk(
    id,
    {
      // Include the quizzes.
      include: [
        {
          model: models.Quiz,
          as: 'quizzes',
          // Exclude join table attributes.
          through: {
            attributes: []
          },
          // Exclude foreign keys.
          attributes: {
            exclude: ['imageId', 'themeId']
          },
          include: [
            // Include the image.
            {
              model: models.Image,
              as: 'image'
            },
            // Include the theme.
            {
              model: models.Theme,
              as: 'theme',
              // Exclude foreign keys.
              attributes: {
                exclude: ['imageId']
              },
              // Include the image of the theme.
              include: [{
                model: models.Image,
                as: 'image'
              }]
            },
            // Include the questions.
            {
              model: models.Question,
              as: 'questions',
              // Exclude foreign keys.
              attributes: {
                exclude: ['quizId', 'imageId']
              },
              include: [
                // Include the images of the questions.
                {
                  model: models.Image,
                  as: 'image'
                },
                // Include the answers of the questions.
                {
                  model: models.Answer,
                  as: 'answers',
                  // Exclude foreign keys.
                  attributes: {
                    exclude: ['questionId', 'quizId', 'imageId']
                  },
                  // Include the images of the answers.
                  include: [{
                    model: models.Image,
                    as: 'image'
                  }]
                }
              ]
            }
          ]
        }
      ]
    }
  );
}

/**
 * Creates a guest.
 * @param firstName The first name of the guest.
 * @param lastName The last name of the guest.
 * @param accessibility The accessibility profile of the guest.
 */
function create(firstName, lastName, accessibility) {
  return models.Guest
    .create({
      firstName,
      lastName,
      accessibility
    });
}

/**
 * Updates a guest by id.
 * @param id The id of the guest.
 * @param firstName The first name of the guest.
 * @param lastName The last name of the guest.
 * @param accessibility The accessibility profile of the guest.
 */
function update(id, firstName, lastName, accessibility) {
  return models.Guest
    .update(
      {
        firstName,
        lastName,
        accessibility
      },
      {
        where: { id }
      }
    );
}

/**
 * Destroys a guest by id.
 * @param id The id of the guest.
 */
function destroy(id) {
  return models.Guest
    .destroy({
      where: { id }
    });
}

/* -------------------------------------------------------------------------- */
/*                                    PRINTS                                  */
/* -------------------------------------------------------------------------- */

/**
 * Prints all the guests.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printFindAll(req, res, next) {
  findAll()
    .then((guests) => {
      res.status(200).json(guests);
    })
    // Errors.
    .catch(next);
}

/**
 * Prints a guest by id.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printFind(req, res, next) {
  find(req.params.guestId)
    .then((guest) => {
      if (guest) {
        res.status(200).json(guest);
      } else {
        // Guest not found.
        next(new NotFoundError());
      }
    })
    // Errors.
    .catch(next);
}

/**
 * Prints the created guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printCreate(req, res, next) {
  // Create the guest.
  create(
    req.body.firstName,
    req.body.lastName,
    req.body.accessibility
  )
    .then((guest) => {
      // Find the guest.
      return find(guest.id)
        .then((foundGuest) => {
          res.status(201).json(foundGuest);
        });
    })
    // Errors.
    .catch(next);
}

/**
 * Prints the updated guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printUpdate(req, res, next) {
  // Update the guest.
  update(
    req.params.guestId,
    req.body.firstName,
    req.body.lastName,
    req.body.accessibility
  )
    .then((result) => {
      const updatedRows = result[0];
      if (updatedRows > 0) {
        // Find the guest.
        return find(req.params.guestId)
          .then((guest) => {
            res.status(200).json(guest);
          });
      }
      // Guest not found.
      throw new NotFoundError();
    })
    // Errors.
    .catch(next);
}

/**
 * Prints the destroyed guest.
 * @param req The request object.
 * @param res The response object.
 * @param next The callback for the next middleware.
 */
function printDestroy(req, res, next) {
  // Find the guest.
  find(req.params.guestId)
    .then((guest) => {
      if (guest) {
        // Destroy the guest.
        return destroy(req.params.guestId)
          .then(() => {
            res.status(200).json(guest);
          });
      }
      // Guest not found.
      throw new NotFoundError();
    })
    // Errors.
    .catch(next);
}

module.exports = {
  findAll,
  create,
  find,
  update,
  destroy,
  printFindAll,
  printCreate,
  printFind,
  printUpdate,
  printDestroy
};
