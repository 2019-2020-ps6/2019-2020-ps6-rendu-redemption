import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {ImageService} from '../../../services/image.service';
import {Theme} from '../../../models/theme.model';
import {Image} from '../../../models/image.model';
import {Router} from '@angular/router';
import {TransitionService} from '../../../services/transition.service';

@Component({
  selector: 'app-themes-selection',
  templateUrl: './themes-selection.component.html',
  styleUrls: ['./themes-selection.component.scss'],
})
export class ThemesSelectionComponent implements OnInit {
  /**
   * The list of themes.
   */
  themes: Theme[];

  /**
   * The variables of the pagination.
   */
  public page ;
  public pageSize;
  public collectionSize;

  constructor(
    private themeService: ThemeService,
    private transitionService: TransitionService,
    private imageService: ImageService,
    private router: Router
  ) {
    this.page = 1;
    this.pageSize = 6;
    this.collectionSize = 0;
    this.themes = [];
  }

  ngOnInit() {
    // Get the themes.
    this.themeService
      .getThemes()
      .subscribe((themes: Theme[]) => {
        this.themes = themes;
      });
  }

  /**
   * Returns a slice of the themes.
   */
  getThemes(): Theme[] {
    return this.themes
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  /**
   * Selects a theme.
   * @param theme The selected theme.
   */
  selectTheme(theme: Theme) {
    // Save the theme.
    this.transitionService.themeToPlay = theme;

    // Redirect the user.
    this.router.navigate(['../quiz-selection']);
  }
}

