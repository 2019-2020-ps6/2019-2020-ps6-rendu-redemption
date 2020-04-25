import { Image } from './image.model';

export interface Answer {
  id: number;
  imageId: number;
  value: string;
  isCorrect: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
