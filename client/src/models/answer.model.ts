import { Image } from './image.model';

export interface Answer {
  id: number;
  image: Image;
  value: string;
  isCorrect: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
