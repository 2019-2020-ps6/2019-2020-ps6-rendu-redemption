const { Router } = require('express');
const QuestionResultController = require('../../../controllers/question-result.controller');

const router = new Router({ mergeParams: true });

// Find all the question results.
router.get('/', QuestionResultController.printFindAll);

// Create a question result.
router.post('/', QuestionResultController.printCreate);

// Find a question result by id.
router.get('/:questionId([0-9]+)', QuestionResultController.printFind);

// Update a question result by id.
router.put('/:questionId([0-9]+)', QuestionResultController.printUpdate);

// Delete a question result by id.
router.delete('/:questionId([0-9]+)', QuestionResultController.printDestroy);

module.exports = router;
