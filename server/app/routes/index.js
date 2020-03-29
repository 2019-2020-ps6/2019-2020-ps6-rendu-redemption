const { Router } = require('express');
const QuizzesRouter = require('./quizzes');
const StatusRouter = require('./status');

const router = new Router();
router.use('/status', StatusRouter);
router.use('/quizzes', QuizzesRouter);

module.exports = router;
