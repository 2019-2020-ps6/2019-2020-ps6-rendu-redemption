import { Injectable } from '@angular/core';

// Models and services.
import { Result } from '../models/result.model';
import { QuestionResult } from '../models/question-result.model';
import { DataService } from './data.service';
import { Image } from '../models/image.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultService extends DataService {
  /**
   * The list of results.
   */
  private results: Result[];

  /**
   * The observable list of results.
   */
  private results$: BehaviorSubject<Result[]>;

  /**
   * Constructs the result service.
   * @param http The HTTP client.
   */
  constructor(private http: HttpClient) {
    super();
    this.results = [];
    this.results$ = new BehaviorSubject<Result[]>(this.results);
    this.findAllResults();
  }

  /**
   * Returns the observable list of results.
   */
  getResults(): Observable<Result[]> {
    return this.results$.asObservable();
  }

  /**
   * Returns an observable result by id.
   * @param id The id of the result.
   */
  getResult(id: number): Observable<Result> {
    return this.getResults()
      .pipe(
        map((results) => results.find((result) => result.id === id))
      );
  }

  /**
   * Finds all the results.
   */
  findAllResults() {
    this.http
      .get<Result[]>(`${this.serverURL}/results`)
      .subscribe((results: Result[]) => {
        this.results = results;
        this.results$.next(this.results);
      });
  }

  /**
   * Creates a result.
   * @param guestId The id of the guest.
   * @param quizId The id of the quiz.
   * @param timedOut Whether the quiz has timed out, or not.
   */
  createResult(guestId: number, quizId: number, timedOut: boolean) {
    this.http
      .post<Result>(
        `${this.serverURL}/results`,
        {
          guestId,
          quizId,
          timedOut
        },
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllResults();
      });
  }

  /**
   * Updates a result.
   * @param resultId The id of the result.
   * @param guestId The id of the guest.
   * @param quizId The id of the quiz.
   * @param timedOut Whether the quiz has timed out, or not.
   */
  updateResult(
    resultId: number,
    guestId: number,
    quizId: number,
    timedOut: boolean
  ) {
    this.http
      .post<Result>(
        `${this.serverURL}/results/${resultId}`,
        {
          guestId,
          quizId,
          timedOut
        },
        this.serverOptions
      )
      .subscribe(() => {
        this.findAllResults();
      });
  }

  /**
   * Deletes a result.
   * @param resultId The id of the result.
   */
  deleteResult(resultId: number) {
    this.http
      .delete<Result>(`${this.serverURL}/results/${resultId}`)
      .subscribe(() => {
        this.findAllResults();
      });
  }
}
