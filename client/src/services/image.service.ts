import { Injectable } from '@angular/core';
import {Image} from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  /**
   * The list of questions.
   * The list is retrieved from the mock.
   */
  private images: Image[];
  private imageToModify: Image = undefined;

  constructor() {
  }

  getImages(): Image[] {
    return this.images;
  }

  getImageById(id: number) {
    return this.images.find(image => image.id === id);
  }

  setImageToModify(image: Image) {
    this.imageToModify = image;
  }

  getImageToModify() {
    return this.imageToModify;
  }

  createImage(imageToCreate: Image) {

  }

  updateImage(imageToCreate: Image) {

  }
}
