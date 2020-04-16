import {Component, OnInit} from "@angular/core";
import {ThemeService} from "../../../services/theme.service";
import {ImageService} from "../../../services/image.service";
import {Theme} from "../../../models/theme.model";
import {Image} from "../../../models/image.model";
import {Router} from "@angular/router";
@Component({
  selector: 'app-themes-selection',
  templateUrl: './themes-selection.component.html',
  styleUrls: ['./themes-selection.component.scss'],
})

export class ThemesSelectionComponent implements OnInit {

    themes: Theme[];
    images: Image[];

    constructor(private themeService: ThemeService, private imageService: ImageService, private router: Router) {
    }

    ngOnInit() {
      this.themes = this.themeService.getThemes();
      this.images = this.imageService.getImages();
    }

    getImageById(id: number): Image {
        return this.images.find(image => image.id == id);
    }

    goToRelatedQuizzes(theme: number) {
        this.router.navigate(['../quiz-selection'], {queryParams: {theme: theme}})
    }
}

