import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Theme} from "../models/theme.model";
import {THEME_MOCK} from "../mocks/themes.mock";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = undefined;
  private themes: Theme[] = THEME_MOCK;

  public quizBehaviorSubject: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);

  constructor() {
  }

  getThemes(): Theme[] {
    return this.themes;
  }

  createTheme(themeToCreate: Theme) {
    console.log("créer theme dans le theme service", themeToCreate);
  }

  setCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
  }

  getCurrentTheme() : Theme{
    return this.currentTheme;
  }
}
