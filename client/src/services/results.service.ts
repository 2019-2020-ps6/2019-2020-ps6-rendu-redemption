import {Injectable} from '@angular/core';
import {Results} from '../models/results.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  /**
   * The list containing all results
   */
  private results : Results[] = RESULT_MOCK;

  getResults(): Results[] {
    return this.results;
  }
}

export const RESULT_MOCK: Results[] = [
  {
    "id": 1,
    "guestId": 1,
    "quizId": 1,
    "timedOut": false,
    "createdAt": new Date(),
    "questionResults": [
      {
        "answers": [1,2],
        "skipped": false,
        "questionId": 1
      },
      {
        "answers": [5,8],
        "skipped": false,
        "questionId": 2
      },
      {
        "answers": [9],
        "skipped": false,
        "questionId": 3
      },
      {
        "answers": [13,14,15],
        "skipped": true,
        "questionId": 4
      },
      {
        "answers": [],
        "skipped": false,
        "questionId": 5
      }
    ]
  }
  ]
