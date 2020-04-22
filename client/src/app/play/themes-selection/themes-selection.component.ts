import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../../services/theme.service';
import {ImageService} from '../../../services/image.service';
import {Theme} from '../../../models/theme.model';
import {Image} from '../../../models/image.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-themes-selection',
  templateUrl: './themes-selection.component.html',
  styleUrls: ['./themes-selection.component.scss'],
})

export class ThemesSelectionComponent implements OnInit {

    themes: Theme[];
    images: Image[];

    constructor(private themeService: ThemeService, private router: Router) {
    }

    ngOnInit() {
      this.themeService
        .getThemes()
        .subscribe((themes: Theme[]) => {
          this.themes = themes;
        });
    }

    goToRelatedQuizzes(theme: number) {
        this.router.navigate(['../quiz-selection'], {queryParams: {theme}});
    }
}

