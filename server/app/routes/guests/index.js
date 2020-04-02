const { Router } = require('express');
const GuestQuizzesRouter = require('./quizzes');
const GuestController = require('../../controllers/guest.controller');

const router = new Router();

// Find all the guests.
router.get('/', GuestController.findAll);

// Create a guest.
router.post('/', GuestController.create);

// Find a guest by id.
router.get('/:guestId([0-9]+)', GuestController.findById);

// Update (or create) a guest by id.
router.put('/:guestId([0-9]+)', GuestController.updateById);

// Delete a guest by id.
router.delete('/:guestId([0-9]+)', GuestController.deleteById);

// Guest quizzes routes.
router.use('/:guestId([0-9]+)/quizzes', GuestQuizzesRouter);

module.exports = router;
