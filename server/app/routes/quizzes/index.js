const { Router } = require('express');
const QuestionRouter = require('./questions');
const QuizController = require('../../controllers/quizzes');

const router = new Router();

// Find all the quizzes.
router.get('/', QuizController.findAll);

// Create a quiz.
router.post('/', QuizController.create);

// Find a quiz by id.
router.get('/:quizId([0-9]+)', QuizController.findById);

// Update (or create) a quiz by id.
router.put('/:quizId([0-9]+)', QuizController.updateById);

// Delete a quiz by id.
router.delete('/:quizId([0-9]+)', QuizController.deleteById);

// Questions routes.
router.use('/:quizId([0-9]+)/questions', QuestionRouter);

module.exports = router;
