// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Question } from '../models/question.model';

// Communication.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
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
   * Returns all the questions of a quiz.
   * @param quizId The identifier of the quiz.
   */
  getQuestions(quizId: number): Observable<Question[]> {
    // GET request.
    return this.http
      .get<Question[]>(`${this.serverURL}/quizzes/${quizId}/questions`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Returns a question.
   * @param quizId The identifier of the quiz.
   * @param questionId The identifier of the question.
   */
  getQuestion(quizId: number, questionId: number): Observable<Question> {
    // GET request.
    return this.http
      .get<Question>(`${this.serverURL}/quizzes/${quizId}/questions/${questionId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds a question.
   * @param quizId The identifier of the quiz.
   * @param question The question to be added.
   */
  addQuestion(quizId: number, question: Question): Observable<any> {
    // POST request.
    return this.http
      .post(`${this.serverURL}/quizzes/${quizId}/questions`, question, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Updates a question.
   * @param quizId The identifier of the quiz.
   * @param question The question to be updated.
   */
  updateQuestion(quizId: number, question: Question): Observable<any> {
    // PUT request.
    return this.http
      .put(`${this.serverURL}/quizzes/${quizId}/questions/${question.id}`, question, this.serverOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Deletes a question.
   * @param quizId The identifier of the quiz.
   * @param questionId The identifier of question to be deleted.
   */
  deleteQuestion(quizId: number, questionId: number): Observable<any> {
    // DELETE request.
    return this.http
      .delete(`${this.serverURL}/quizzes/${quizId}/questions/${questionId}`)
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
