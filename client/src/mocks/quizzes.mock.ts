import { Quizz } from '../models/quizz.model';
import {QUESTIONS_MOCK} from './questions.mock';

export const QUIZZ_MOCK: Quizz = {
  id: 1,
  themeId: 1,
  imageId: 1,
  name: 'Animaux',
  keywords: 'nature',
  questions: QUESTIONS_MOCK
};
