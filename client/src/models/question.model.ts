import { Answer } from './answer.model';
import { Image } from './image.model';

export interface Question {
  id: number;
  image: Image;
  label: string;
  answers: Answer[];
  createdAt?: Date;
  updatedAt?: Date;
}
