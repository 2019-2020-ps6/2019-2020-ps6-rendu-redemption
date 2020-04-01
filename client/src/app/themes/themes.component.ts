import {Component, OnInit} from "@angular/core";
import {ThemeService} from "../../services/theme.service";
import {Theme} from "../../models/theme.model";
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss'],
})

export class ThemesComponent implements OnInit {

  themes: Theme[];

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themes = this.themeService.getThemes();
  }

}

