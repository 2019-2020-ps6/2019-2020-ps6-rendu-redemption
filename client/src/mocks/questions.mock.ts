import { Question } from '../models/question.model';

export const QUESTIONS_MOCK: Question[] = [{
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
    },
    {
      value: 'Your name',
      isCorrect: false
    }
  ]
},
  {
    label: 'Le chat est un...',
    answers: [
      {
        value: 'Arachnide',
        isCorrect: false,
      },
      {
        value: 'Insecte',
        isCorrect: false,
      },
      {
        value: 'Félin',
        isCorrect: true,
      }
    ]
  }];
