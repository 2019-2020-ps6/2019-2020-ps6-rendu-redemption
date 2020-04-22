import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Image} from '../../../models/image.model';
import {ImageService} from '../../../services/image.service';
@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.scss'],
})

export class QuizSelectionComponent implements OnInit {

    quizzes: Quiz[];
    images: Image[];

    constructor(private quizService: QuizService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.quizService
        .getQuizzes()
        .subscribe((quizzes) => {
          this.quizzes = quizzes;
        });
    }

    getRelatedQuizzes(): Quiz[] {
        const theme = this.route.snapshot.queryParams.theme;
        if (theme != null) {
            return this.getQuizzesByThemeID(theme);
        } else {
            return this.quizzes;
        }
    }

    getQuizzesByThemeID(theme: number): Quiz[] {
      return this.quizzes.filter(quiz => quiz.theme.id === theme);
    }

    getImageById(id: number): Image {
        return this.images.find(image => image.id === id);
    }

    goToRelatedQuizz(quizz: number) {
        this.router.navigate(['../play-quiz'], {queryParams: {quizz}});
    }
}

