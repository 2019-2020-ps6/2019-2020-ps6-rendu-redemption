// App.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models.
import { Quiz } from '../../../../../models/quiz.model';
import { QuizService } from '../../../../../services/quiz.service';
import { Question } from '../../../../../models/question.model';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.scss'],
})
export class QuestionNewComponent implements OnInit {
  /**
   * The id of the current quiz.
   */
  public quizId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((paramMap) => {
        // Get the quiz id from the route.
        this.quizId = parseInt(paramMap.get('quizId'), 10);
      });
  }

  /**
   * Creates the question.
   * @param question The question to be created.
   */
  createQuestion(question: Question) {
    // Update the question.
    this.quizService.createQuestion(
      this.quizId,
      question.label,
      question.imageId
    );

    // Redirect to the quizzes.
    this.router.navigate(['/admin/quizzes', this.quizId, 'questions']);
  }
}
