import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Theme} from "../models/theme.model";
import {THEME_MOCK} from "../mocks/themes.mock";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private themes: Theme[] = THEME_MOCK;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizBehaviorSubject: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);

  constructor() {
  }

  getThemes(): Theme[] {
    return this.themes;
  }
}
