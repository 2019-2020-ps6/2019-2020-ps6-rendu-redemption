const { Router } = require('express');
// const QuestionRouter = require('../questions');
const ImageController = require('../../controllers/image.controller');

const router = new Router();

// Find all the themes.
router.get('/', ImageController.findAll);

// Create a theme.
router.post('/', ImageController.create);

// Find a theme by id.
router.get('/:imageId([0-9]+)', ImageController.findById);

// Update (or create) a theme by id.
router.put('/:imageId([0-9]+)', ImageController.updateById);

// Delete a theme by id.
router.delete('/:imageId([0-9]+)', ImageController.deleteById);

// Questions routes.
// router.use('/:quizId([0-9]+)/questions', QuestionRouter);

module.exports = router;
