import { Image } from './image.model';

export interface Theme {
  id: number;
  image: Image;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
