const { Router } = require('express');
// const QuestionRouter = require('../questions');
const ThemeController = require('../../controllers/theme.controller');

const router = new Router();

// Find all the themes.
router.get('/', ThemeController.findAll);

// Create a theme.
router.post('/', ThemeController.create);

// Find a theme by id.
router.get('/:themeId([0-9]+)', ThemeController.findById);

// Update (or create) a theme by id.
router.put('/:themeId([0-9]+)', ThemeController.updateById);

// Delete a theme by id.
router.delete('/:themeId([0-9]+)', ThemeController.deleteById);

// Questions routes.
// router.use('/:quizId([0-9]+)/questions', QuestionRouter);

module.exports = router;
