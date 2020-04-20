const { Router } = require('express');
const StatusRouter = require('./status');
const QuizRouter = require('./quizzes');
const GuestRouter = require('./guests');
const ThemeRouter = require('./themes');
const ImageRouter = require('./images');



const router = new Router();

// Status routes.
router.use('/status', StatusRouter);

// Quiz routes.
router.use('/quizzes', QuizRouter);

// Guest routes.
router.use('/guests', GuestRouter);

// themes routes.
router.use('/themes', ThemeRouter);

// themes routes.
router.use('/images', ImageRouter);

module.exports = router;
