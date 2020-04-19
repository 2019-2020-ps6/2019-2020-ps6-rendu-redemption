// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Answer } from '../models/answer.model';

// Communication.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
   * Returns all the answers of a question.
   * @param quizId The identifier of the quiz.
   * @param questionId The identifier of the question.
   */
  getAnswers(quizId: number, questionId: number): Observable<Answer[]> {
    // GET request.
    return this.http
      .get<Answer[]>(`${this.serverURL}/quizzes/${quizId}/questions/${questionId}/answers`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Returns an answer.
   * @param quizId The identifier of the quiz.
   * @param questionId The identifier of the question.
   * @param answerId The identifier of the answer.
   */
  getAnswer(quizId: number, questionId: number, answerId: number): Observable<Answer> {
    // GET request.
    return this.http
      .get<Answer>(`${this.serverURL}/quizzes/${quizId}/questions/${questionId}/answers/${answerId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds an answer.
   * @param quizId The identifier of the quiz.
   * @param questionId The identifier of the question.
   * @param answer The answer to be added.
   */
  addAnswer(quizId: number, questionId: number, answer: Answer): Observable<any> {
    // POST request.
    return this.http
      .post(`${this.serverURL}/quizzes/${quizId}/questions/${questionId}/answers`, answer, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Updates an answer.
   * @param quizId The identifier of the quiz.
   * @param questionId The identifier of the question.
   * @param answer The answer to be updated.
   */
  updateAnswer(quizId: number, questionId: number, answer: Answer): Observable<any> {
    // PUT request.
    return this.http
      .put(`${this.serverURL}/quizzes/${quizId}/questions/${questionId}/answers/${answer.id}`, answer, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Deletes an answer.
   * @param quizId The identifier of the quiz.
   * @param questionId The identifier of the question.
   * @param answerId The identifier of the answer to be deleted.
   */
  deleteQuestion(quizId: number, questionId: number, answerId: number): Observable<any> {
    // DELETE request.
    return this.http
      .delete(`${this.serverURL}/quizzes/${quizId}/questions/${questionId}/answers/${answerId}`)
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
