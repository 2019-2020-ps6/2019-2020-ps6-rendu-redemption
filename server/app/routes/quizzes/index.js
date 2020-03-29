const { Router } = require('express');
const QuizController = require('../../controllers/quizzes');

const router = new Router();

// Define the quiz routes.
router.get('/', QuizController.findAllQuizzes);
router.post('/', QuizController.createQuiz);
router.get('/:quiz_id([0-9]+)', QuizController.findQuizById);
router.put('/:quiz_id([0-9]+)', QuizController.upsertQuizById);
router.patch('/:quiz_id([0-9]+)', QuizController.updateQuizById);
router.delete('/:quiz_id([0-9]+)', QuizController.deleteQuizById);

module.exports = router;
