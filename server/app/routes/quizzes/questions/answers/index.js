const { Router } = require('express');
const AnswerController = require('../../../../controllers/answer.controller');

const router = new Router({ mergeParams: true });

// Find all the answers.
router.get('/', AnswerController.findAll);

// Insert a answer.
router.post('/', AnswerController.create);

// Find a answer by id.
router.get('/:answerId([0-9]+)', AnswerController.findById);

// Update (or insert) a answer by id.
router.put('/:answerId([0-9]+)', AnswerController.updateById);

// Delete a answer by id.
router.delete('/:answerId([0-9]+)', AnswerController.deleteById);

module.exports = router;
