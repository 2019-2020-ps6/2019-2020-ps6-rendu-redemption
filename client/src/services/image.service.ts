import { Injectable } from '@angular/core';
import {IMAGE_MOCK} from "../mocks/images.mock";
import {Image} from "../models/image.model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  /**
   * The list of questions.
   * The list is retrieved from the mock.
   */
  private images: Image[] = IMAGE_MOCK;

  constructor() {
  }

  getImages(): Image[] {
    return this.images;
  }

  getImageById(id: number) {
    return this.images.find(image => image.id == id);
  }
}
