import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../../../models/quiz.model';
import {QuizService} from '../../../../../services/quiz.service';
import {ThemeService} from '../../../../../services/theme.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../../../../../services/image.service';
import {Image} from '../../../../../models/image.model';

@Component({
  selector: 'app-quizzesList',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.scss'],
})

export class QuizzesListComponent implements OnInit {
  quizzesList: Quiz[];
  totalQuiz: number[][];
  pageCount = 1;

  constructor(private quizService: QuizService, private themeService: ThemeService, private imageService: ImageService,
              private router: Router, private route: ActivatedRoute) {
  }

  // TODO modifier pour la duplication de code
  ngOnInit(): void {
    if (this.themeService.getCurrentTheme() === undefined) {
      this.router.navigate(['../themes-list'], {relativeTo: this.route});
    } else {
      this.quizzesList = [...this.quizService.getQuizzes()];
      this.quizzesList[this.quizzesList.length] = {
        id: 0,
        theme: null,
        image: null,
        name: 'Ajouter un quiz',
        questions: []
      };
      this.totalQuiz = [];
      for (let i = 0; i < Math.trunc(this.quizzesList.length / 3); i++) {
        this.totalQuiz[i] = [];
        for (let j = 0; j < 3; j++) {
          this.totalQuiz[i][j] = i + j;
        }
      }
      if (!Number.isInteger(this.quizzesList.length / 3)) {
        const firstIndex = Math.trunc(this.quizzesList.length / 3);
        const x = (this.quizzesList.length / 3) - firstIndex;
        this.totalQuiz[firstIndex] = [];
        for (let i = 0; i < Math.round(x * 3); i++) {
          this.totalQuiz[firstIndex][i] = firstIndex * 3 + i;
        }
      }
    }
  }

  getImageById(id: number): Image {
    return this.imageService.getImageById(id);
  }

  getQuiz(y: number): Quiz {
    return this.quizzesList[y];
  }

  navigate(quiz: Quiz) {
    if (quiz.id === 0) {
      this.router.navigate(['./../create-quiz'], {relativeTo: this.route});
    } else {
      this.quizService.setCurrentQuiz(quiz);
      this.router.navigate(['../questions-list'], {relativeTo: this.route});
    }
  }
}
