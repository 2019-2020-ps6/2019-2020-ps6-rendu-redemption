const { Router } = require('express');
const QuizzesRouter = require('./quizzes');
const StatusRouter = require('./status');

const router = new Router();

// Status routes.
router.use('/status', StatusRouter);

// Quizzes routes.
router.use('/quizzes', QuizzesRouter);

module.exports = router;
