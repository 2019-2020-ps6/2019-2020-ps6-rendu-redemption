import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionModalComponent } from '../question-modal/question-modal.component';
import { Quiz } from '../../../../../models/quiz.model';
import { QuizService } from '../../../../../services/quiz.service';
import { Question } from '../../../../../models/question.model';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  /**
   * The quiz to be displayed.
   */
  public quiz: Quiz;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private quizService: QuizService,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe((paramMap) => {
        // Get the quiz id from the route.
        const quizId = parseInt(paramMap.get('quizId'), 10);

        // Get the questions of the quiz.
        this.quizService
          .getQuiz(quizId)
          .subscribe((quiz) => {
            this.quiz = quiz;
          });
      });
  }

  /**
   * Creates a question.
   */
  createQuestion() {
    this.router.navigate(['/admin/quizzes', this.quiz.id, 'questions', 'new']);
  }

  /**
   * Edits a question.
   */
  editQuestion(question: Question) {
    this.router.navigate(['/admin/quizzes', this.quiz.id, 'questions', question.id]);
  }

  /**
   * Deletes a question.
   * @param question The question to be deleted.
   */
  deleteQuestion(question: Question) {
    // Confirm the deletion.
    const modal = this.modalService.open(
      QuestionModalComponent,
      { centered: true }
    );
    modal.componentInstance.question = question;
    modal.result.then(
      (result) => this.quizService.deleteQuiz(question.id),
      () => {}
    );
  }
}
