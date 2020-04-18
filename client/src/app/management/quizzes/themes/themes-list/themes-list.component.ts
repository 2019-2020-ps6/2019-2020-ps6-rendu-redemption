import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Theme} from '../../../../../models/theme.model';
import {ThemeService} from '../../../../../services/theme.service';
import {ImageService} from '../../../../../services/image.service';
import {Image} from '../../../../../models/image.model';

@Component({
  selector: 'app-themesList',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss'],
})

export class ThemesListComponent implements OnInit {
  themeList: Theme[];
  totalTheme: number[][];
  pageCount: number = 1;

  constructor(private themeService: ThemeService, private router: Router, private route: ActivatedRoute, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.themeList = [...this.themeService.getThemes()];
    this.themeList[this.themeList.length] = {
      id: 0,
      imageId: 0,
      name: 'Ajouter un thème',
      keywords: []
    };
    this.totalTheme = [];
    for (let i = 0; i < Math.trunc(this.themeList.length / 3); i++) {
      this.totalTheme[i] = [];
      for (let j = 0; j < 3; j++) {
        this.totalTheme[i][j] = i + j;
      }
    }
    if (!Number.isInteger(this.themeList.length / 3)) {
      let firstIndex = Math.trunc(this.themeList.length / 3);
      let x = (this.themeList.length / 3) - firstIndex;
      this.totalTheme[firstIndex] = [];
      for (let i = 0; i < Math.round(x * 3); i++) {
        this.totalTheme[firstIndex][i] = firstIndex + i;
      }
    }
  }

  getImageById(id: number): Image {
    return this.imageService.getImageById(id);
  }

  getTheme(y: number): Theme {
    console.log('y : ' + y);
    return this.themeList[y];
  }

  navigate(theme: Theme) {
    if (theme.id == 0) {
      this.router.navigate(['./../create-theme'], {relativeTo: this.route});
    } else {
      this.themeService.setCurrentTheme(theme);
      this.router.navigate(['../quiz-list'], {relativeTo: this.route});
    }

  }
}
