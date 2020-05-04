import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Image} from '../../../models/image.model';
import {ImageService} from '../../../services/image.service';
import {TransitionService} from '../../../services/transition.service';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.scss'],
})

export class QuizSelectionComponent implements OnInit {
  /**
   * The list of quizzes.
   */
  quizzes: Quiz[];


  themeId: number;
  randomIcon = faRandom;

  /**
   * The variables of the pagination.
   */
  public page ;
  public pageSize;
  public collectionSize;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService,
    private transitionService: TransitionService
  ) {
    this.page = 1;
    this.pageSize = 6;
    this.collectionSize = 0;
    this.quizzes = [];
  }

  ngOnInit() {
    // Get the selected theme.
    const theme = this.transitionService.themeToPlay;

    // Get the quizzes of the theme.
    this.quizService
      .getQuizzesByTheme(theme.id)
      .subscribe((quizzes) => {
        this.quizzes = quizzes;
        this.collectionSize = quizzes.length;
      });
  }

  /**
   * Returns a slice of the quizzes.
   */
  getQuizzes(): Quiz[] {
    return this.quizzes
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  /**
   * Selects a quiz.
   * @param quiz The selected quiz.
   */
  selectQuiz(quiz: Quiz) {
    // Save the quiz.
    this.transitionService.quizToPlay = quiz;

    // Redirect the user.
    this.router.navigate(['../play-quiz']);
  }

  selectRandomQuiz() {
    const randomIndex = Math.floor(Math.random() * this.quizzes.length);
    // Save the quiz.
    this.transitionService.quizToPlay = this.quizzes[randomIndex];

    // Redirect the user.
    this.router.navigate(['../play-quiz']);
  }
}

