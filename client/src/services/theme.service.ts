// App.
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Models.
import { Theme } from '../models/theme.model';

// Communication.
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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
   * The list of themes.
   */
  private themes: Theme[];

  /**
   * The observable list of themes.
   */
  private themes$: BehaviorSubject<Theme[]>;

  /**
   * The current theme.
   * TODO: Use route params or user session.
   */
  private currentTheme;

  /**
   * Constructs the theme service.
   * @param http The HTTP client.
   */
  constructor(private http: HttpClient) {
    // Initialize the service.
    this.serverURL = environment.serverURL;
    this.serverOptions = environment.serverOptions;

    // Initialize the themes.
    this.themes = [];
    this.themes$ = new BehaviorSubject<Theme[]>(this.themes);
    this.findAllThemes();
  }

  /**
   * Returns the observable list of themes.
   */
  getThemes(): Observable<Theme[]> {
    return this.themes$.asObservable();
  }

  /**
   * Finds all the themes.
   */
  findAllThemes() {
    this.http
      .get<Theme[]>(`${this.serverURL}/themes`)
      .subscribe((themes: Theme[]) => {
        this.themes = themes;
        this.themes$.next(this.themes);
      });
  }

  /**
   * Finds a theme.
   * @param id The id of the theme.
   */
  findTheme(id: number): Theme {
    return this.themes.find((theme: Theme) => theme.id === id);
  }

  /**
   * Creates a theme.
   * @param theme The theme to be created.
   */
  createTheme(theme: Theme) {
    this.http
      .post<Theme>(`${this.serverURL}/themes`, theme, this.serverOptions)
      .subscribe(() => {
        this.findAllThemes();
      });
  }

  /**
   * Updates a theme.
   * @param theme The theme to be updated.
   */
  updateTheme(theme: Theme) {
    this.http
      .put<Theme>(`${this.serverURL}/themes/${theme.id}`, theme, this.serverOptions)
      .subscribe(() => {
        this.findAllThemes();
      });
  }

  /**
   * Deletes a theme.
   * @param theme The theme to be deleted.
   */
  deleteTheme(theme: Theme) {
    this.http
      .delete<Theme>(`${this.serverURL}/themes/${theme.id}`)
      .subscribe(() => {
        this.findAllThemes();
      });
  }

  setCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }
}
