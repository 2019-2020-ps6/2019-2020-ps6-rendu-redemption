import { Question } from '../models/question.model';

export const QUESTIONS_MOCK: Question[] = [{
    id: 1,
    quizId: 1,
    imageId: -1,
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
          value: 'Les tuches II',
          imageId: -1,
          isCorrect: false,
        },
        {
          value: 'La grande illusion',
          imageId: -1,
          isCorrect: true,
        },
        {
          value: 'Avengers Endgame',
          imageId: -1,
          isCorrect: false,
        },
        {
          value: 'Your name',
          imageId: -1,
          isCorrect: false
        }]
    },
    {
        id: 2,
        quizId: 1,
        imageId: -1,
        label: 'Le chat est un...',
        answers: [
        {
          value: 'Arachnide',
          imageId: -1,
          isCorrect: false,
        },
        {
          value: 'Insecte',
          imageId: -1,
          isCorrect: false,
        },
        {
          value: 'Félin',
          imageId: -1,
          isCorrect: true,
        }]
    }];
