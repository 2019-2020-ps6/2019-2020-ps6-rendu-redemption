// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Image } from '../models/image.model';

// Communication.
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  /**
   * The server URL.
   */
  private serverURL: string;

  /**
   * The server options.
   * These options are used for JSON requests.
   */
  private serverOptions: object;

  /**
   * The list of images.
   */
  private images: Image[];

  /**
   * The observable list of images.
   */
  private images$: BehaviorSubject<Image[]>;

  /**
   * The image to modify.
   * TODO: Use route params or user session.
   */
  private imageToModify: Image;

  /**
   * Constructs the image service.
   * @param http The HTTP client.
   */
  constructor(private http: HttpClient) {
    // Initialize the service.
    this.serverURL = environment.serverURL;
    this.serverOptions = environment.serverOptions;

    // Initialize the images.
    this.images = [];
    this.images$ = new BehaviorSubject<Image[]>(this.images);
    this.findAllImages();
  }

  /**
   * Returns the observable list of images.
   */
  getImages(): Observable<Image[]> {
    return this.images$.asObservable();
  }

  /**
   * Finds all the images.
   */
  findAllImages() {
    this.http
      .get<Image[]>(`${this.serverURL}/images`)
      .subscribe((images: Image[]) => {
        this.images = images;
        this.images$.next(this.images);
      });
  }

  /**
   * Finds an image.
   * @param imageId The id of the image.
   */
  findImage(imageId: number): Image {
    return this.images.find((image: Image) => image.id === imageId);
  }

  /**
   * Creates an image.
   * @param image The image to be created.
   */
  createImage(image: Image) {
    this.http
      .post<Image>(`${this.serverURL}/images`, image, this.serverOptions)
      .subscribe(() => {
        this.findAllImages();
      });
  }

  /**
   * Updates an image.
   * @param image The image to be updated.
   */
  updateImage(image: Image) {
    this.http
      .post<Image>(`${this.serverURL}/images/${image.id}`, image, this.serverOptions)
      .subscribe(() => {
        this.findAllImages();
      });
  }

  /**
   * Deletes an image.
   * @param image The image to be deleted.
   */
  deleteImage(image: Image) {
    this.http
      .delete<Image>(`${this.serverURL}/images/${image.id}`)
      .subscribe(() => {
        this.findAllImages();
      });
  }

  /**
   * Sets the image to modify.
   * TODO: Use route params or user session.
   * @param image The image to modify.
   */
  setImageToModify(image: Image) {
    this.imageToModify = image;
  }

  /**
   * Returns the image to modify.
   * TODO: Use route params or user session.
   */
  getImageToModify() {
    return this.imageToModify;
  }
}
