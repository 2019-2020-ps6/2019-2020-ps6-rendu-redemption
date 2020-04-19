// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Quiz } from '../models/quiz.model';

// Communication.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
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
   * Returns all the quizzes.
   */
  getQuizzes(): Observable<Quiz[]> {
    // GET request.
    return this.http
      .get<Quiz[]>(`${this.serverURL}/quizzes`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Returns a quiz.
   * @param quizId The identifier of the quiz.
   */
  getQuiz(quizId: number): Observable<Quiz> {
    // GET request.
    return this.http
      .get<Quiz>(`${this.serverURL}/quizzes/${quizId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds a quiz.
   * @param quiz The quiz to be added.
   */
  addQuiz(quiz: Quiz): Observable<any> {
    // POST request.
    return this.http
      .post(`${this.serverURL}/quizzes`, quiz, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Updates a quiz.
   * @param quiz The quiz to be updated.
   */
  updateQuiz(quiz: Quiz): Observable<any> {
    // PUT request.
    return this.http
      .put(`${this.serverURL}/quizzes/${quiz.id}`, quiz, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Deletes a quiz.
   * @param quizId The identifier of the quiz to be deleted.
   */
  deleteQuiz(quizId: number): Observable<any> {
    // DELETE request.
    return this.http
      .delete(`${this.serverURL}/quizzes/${quizId}`)
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
