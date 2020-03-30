const { Router } = require('express');
const AnswerRouter = require('./answers');
const QuestionController = require('../../../controllers/quizzes/questions');

const router = new Router({ mergeParams: true });

// Find all the questions.
router.get('/', QuestionController.findAll);

// Insert a question.
router.post('/', QuestionController.create);

// Find a question by id.
router.get('/:questionId([0-9]+)', QuestionController.findById);

// Update (or insert) a question by id.
router.put('/:questionId([0-9]+)', QuestionController.updateById);

// Delete a question by id.
router.delete('/:questionId([0-9]+)', QuestionController.deleteById);

// Answer routes.
router.use('/:questionId([0-9]+)/answers', AnswerRouter);

module.exports = router;
