// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Theme } from '../models/theme.model';

// Communication.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
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
   * Returns all the themes.
   */
  getThemes(): Observable<Theme[]> {
    // GET request.
    return this.http
      .get<Theme[]>(`${this.serverURL}/themes`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Returns a theme.
   * @param themeId The identifier of the theme.
   */
  getTheme(themeId: number): Observable<Theme> {
    // GET request.
    return this.http
      .get<Theme>(`${this.serverURL}/themes/${themeId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds a theme.
   * @param theme The theme to be added.
   */
  addTheme(theme: Theme): Observable<any> {
    // POST request.
    return this.http
      .post(`${this.serverURL}/themes`, theme, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Updates a theme.
   * @param theme The theme to be updated.
   */
  updateTheme(theme: Theme): Observable<any> {
    // PUT request.
    return this.http
      .put(`${this.serverURL}/themes/${theme.id}`, theme, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Deletes a theme.
   * @param themeId The identifier of the theme to be deleted.
   */
  deleteTheme(themeId: number): Observable<any> {
    // DELETE request.
    return this.http
      .delete(`${this.serverURL}/themes/${themeId}`)
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
