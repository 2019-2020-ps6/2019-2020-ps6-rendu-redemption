import { Quiz } from './quiz.model';

export interface Guest {
  id: number;
  firstName: string;
  lastName: string;
  accessibility: string;
  quizzes: Quiz[];
  createdAt?: Date;
  updatedAt?: Date;
}
