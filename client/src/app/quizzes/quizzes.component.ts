import {Component, OnInit} from "@angular/core";
import {Quizz} from "../../models/quizz.model";
import {QuizzService} from "../../services/quizz.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Image} from "../../models/image.model";
import {ImageService} from "../../services/image.service";
@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})

export class QuizzesComponent implements OnInit {

    quizzes: Quizz[];
    images: Image[];

    constructor(private quizzService: QuizzService, private imageService: ImageService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.quizzes = this.quizzService.getQuizzes();
      this.images = this.imageService.getImages();
    }

    getRelatedQuizzes(): Quizz[] {
        let theme = this.route.snapshot.queryParams["theme"];
        if (theme != null) {
            return this.getQuizzesByThemeID(theme);
        }
        else {
            return this.quizzes;
        }
    }

    getQuizzesByThemeID(theme: number): Quizz[] {
      return this.quizzes.filter(quiz => quiz.themeId == theme);
    }

    getImageById(id: number): Image {
        return this.images.find(image => image.id == id);
    }

    goToRelatedQuizz(quizz: number) {
        this.router.navigate(['../quizz'], {queryParams: {quizz: quizz}})
    }
}

