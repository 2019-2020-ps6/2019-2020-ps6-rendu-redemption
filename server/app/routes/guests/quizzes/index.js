const { Router } = require('express');
const GuestQuizzesController = require('../../../controllers/guest-quizzes.controller');

const router = new Router({ mergeParams: true });

// Find all the guest quizzes.
router.get('/', GuestQuizzesController.printFindAll);

// Add a quiz to a guest.
router.post('/:quizId([0-9]+)', GuestQuizzesController.printAdd);

// Remove a quiz from a guest.
router.delete('/:quizId([0-9]+)', GuestQuizzesController.printRemove);

module.exports = router;
