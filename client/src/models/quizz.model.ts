import {Question} from './question.model';

export interface Quizz {
  id: number;
  themeId: number;
  imageId: number;
  name: string;
  keywords: string;
  questions: Question[]
}
