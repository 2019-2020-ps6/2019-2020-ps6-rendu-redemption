const { Router } = require('express');
const GuestQuizzesController = require('../../../controllers/guest-quizzes.controller');

const router = new Router({ mergeParams: true });

// Find all the guest quizzes.
router.get('/', GuestQuizzesController.findAll);

// Add a quiz to a guest.
router.post('/:quizId([0-9]+)', GuestQuizzesController.add);

// Remove a quiz from a guest.
router.delete('/:quizId([0-9]+)', GuestQuizzesController.remove);

module.exports = router;
