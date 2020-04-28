import {Component, OnInit} from '@angular/core';
import {TransitionService} from '../../../services/transition.service';
import {QuestionResult} from '../../../models/question-result.model';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';

@Component({
  selector: 'app-questionResultsList',
  templateUrl: './question-results-list.component.html',
  styleUrls: ['./question-results-list.component.scss'],
})
export class QuestionResultsListComponent implements OnInit {
  selectedQuiz: Quiz;
  questionResults: QuestionResult[];

  constructor(
    private quizService: QuizService,
    private transitionService: TransitionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const quizId = this.transitionService.quizIdForResults;
    this.questionResults = this.transitionService.questionResults;
    if (quizId === undefined || this.questionResults === undefined) {
      this.router.navigate(['../guest-selection'], {relativeTo: this.route});
    } else {
      console.log('questions results', this.questionResults);
      this.quizService.getQuizzes().subscribe((quizzes) => {
        for (const quiz of quizzes) {
          if (quiz.id === quizId) {
            this.selectedQuiz = quiz;
          }
        }
      });
    }
  }

  getQuestionNameById(questionId: number): string {
    for (const question of this.selectedQuiz.questions) {
      if (question.id === questionId) {
        return question.label;
      }
    }
  }

  getAnswerValueById(questionId: number, res: number): string {
    for (const question of this.selectedQuiz.questions) {
      if (question.id === questionId) {
        for (const answer of question.answers) {
          if (answer.id === res) {
            return answer.value;
          }
        }
      }
    }
  }


}
