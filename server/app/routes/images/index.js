const { Router } = require('express');
// const QuestionRouter = require('../questions');
const ImageController = require('../../controllers/image.controller');

const router = new Router();

// Find all the images.
router.get('/', ImageController.printFindAll);

// Create an image.
router.post('/', ImageController.printCreate);

// Find an image by id.
router.get('/:imageId([0-9]+)', ImageController.printFind);

// Update an image by id.
router.put('/:imageId([0-9]+)', ImageController.printUpdate);

// Delete an image by id.
router.delete('/:imageId([0-9]+)', ImageController.printDestroy);

module.exports = router;
