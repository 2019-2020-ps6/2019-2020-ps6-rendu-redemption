// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Image } from '../models/image.model';

// Communication.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

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
   * Constructs the quiz service.
   * @param http The http client.
   */
  constructor(private http: HttpClient) {
    // Initialize the service.
    this.serverURL = environment.serverURL;
    this.serverOptions = environment.serverOptions;
  }

  /**
   * Returns all the images.
   */
  getImages(): Observable<Image[]> {
    // GET request.
    return this.http
      .get<Image[]>(`${this.serverURL}/images`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Returns an image.
   * @param imageId The identifier of the image.
   */
  getImage(imageId: number): Observable<Image> {
    // GET request.
    return this.http
      .get<Image>(`${this.serverURL}/images/${imageId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds an image.
   * @param image The image to be added.
   */
  addImage(image: Image): Observable<any> {
    // POST request.
    return this.http
      .post(`${this.serverURL}/images`, image, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Updates an image.
   * @param image The image to be updated.
   */
  updateImage(image: Image): Observable<any> {
    // PUT request.
    return this.http
      .put(`${this.serverURL}/images/${image.id}`, image, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Deletes an image.
   * @param imageId The identifier of the image to be deleted.
   */
  deleteImage(imageId: number): Observable<any> {
    // DELETE request.
    return this.http
      .delete(`${this.serverURL}/images/${imageId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handles an error response.
   * @param response The error response.
   */
  private handleError(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', response.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${response.status}, ` +
        `body was: ${response.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened! Please try again later.');
  }
}
