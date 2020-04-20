import {Quiz} from '../models/quiz.model';
import {Question} from '../models/question.model';

let QUESTIONS_MOCK: Question[] = [{
  id: 1,
  imageId: -1,
  label: 'Jean Gabin a joué dans...',
  answers: [
    {
      id: 1,
      value: 'Les tuches II',
      imageId: -1,
      isCorrect: false,
    },
    {
      id: 2,
      value: 'La grande illusion',
      imageId: -1,
      isCorrect: true,
    },
    {
      id: 3,
      value: 'Avengers Endgame',
      imageId: -1,
      isCorrect: false,
    },
    {
      id: 4,
      value: 'Your name',
      imageId: -1,
      isCorrect: false
    }]
},
  {
    id: 2,
    imageId: -1,
    label: 'Le chat est un...',
    answers: [
      {
        id: 5,
        value: 'Arachnide',
        imageId: -1,
        isCorrect: false,
      },
      {
        id: 6,
        value: 'Insecte',
        imageId: -1,
        isCorrect: false,
      },
      {
        id: 7,
        value: 'Félin',
        imageId: -1,
        isCorrect: true,
      }]
  }];


export const QUIZZ_MOCK: Quiz[] = [
  {
    id: 1,
    themeId: 1,
    imageId: 2,
    name: 'Animaux',
    keywords: ['nature'],
    questions: QUESTIONS_MOCK
  },
  {
    id: 2,
    themeId: 1,
    imageId: 4,
    name: 'Oiseaux',
    keywords: ['nature'],
    questions: QUESTIONS_MOCK
  },
  {
    id: 3,
    themeId: 2,
    imageId: 3,
    name: 'Curling',
    keywords: ['sport'],
    questions: QUESTIONS_MOCK
  }
];
