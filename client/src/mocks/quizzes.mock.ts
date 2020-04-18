import {Quiz} from '../models/quiz.model';
import {QUESTIONS_MOCK} from './questions.mock';

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
