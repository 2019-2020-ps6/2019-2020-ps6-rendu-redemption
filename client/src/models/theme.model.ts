import { Image } from './image.model';

export interface Theme {
  id: number;
  imageId: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}
