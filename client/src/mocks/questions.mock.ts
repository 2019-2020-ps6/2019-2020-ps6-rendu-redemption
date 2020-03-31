import { Question } from '../models/question.model';

export const QUESTION_MOCK: Question = {
  label: 'Jean Gabin a joué dans...',
  answers: [
    {
      value: 'Les tuches II',
      isCorrect: false,
    },
    {
      value: 'La grande illusion',
      isCorrect: true,
    },
    {
      value: 'Avengers Endgame',
      isCorrect: false,
    }
  ]
};
