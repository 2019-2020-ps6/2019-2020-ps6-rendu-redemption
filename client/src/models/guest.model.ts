import { Quiz } from './quiz.model';

export interface Guest {
  id: number;
  firstName: string;
  lastName: string;
  accessibility: string;
  quizzes?: number[];
  createdAt?: Date;
  updatedAt?: Date;
}
