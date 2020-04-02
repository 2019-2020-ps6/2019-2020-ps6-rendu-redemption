const { Router } = require('express');
const StatusRouter = require('./status');
const QuizRouter = require('./quizzes');
const GuestRouter = require('./guests');

const router = new Router();

// Status routes.
router.use('/status', StatusRouter);

// Quiz routes.
router.use('/quizzes', QuizRouter);

// Guest routes.
router.use('/guests', GuestRouter);

module.exports = router;
