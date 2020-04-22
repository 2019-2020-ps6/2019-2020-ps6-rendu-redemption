import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../../../../../models/quiz.model';
import {Question} from '../../../../../../models/question.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmQuestionDeletion} from './modal-confirm-question-deletion';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questionsList',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})

export class QuestionsListComponent implements OnInit {
  currentQuiz: Quiz;
  plusIcon = faPlusCircle;

  constructor(private quizService: QuizService, private router: Router, private route: ActivatedRoute, private _modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.currentQuiz = this.quizService.getCurrentQuiz();
    if (this.currentQuiz === undefined) {
      this.router.navigate(['../themes-list'], {relativeTo: this.route});
    }
  }

  deleteQuestion(question: Question) {
    const modal = this._modalService.open(ModalConfirmQuestionDeletion);
    modal.componentInstance.question = question;
    modal.result.then((result) => {
      if (`${result}` === 'Le click de la suppression') {
        this.quizService.deleteQuestion(question);
      }
    });
  }

  modifyQuestion(question: Question) {
    this.quizService.setQuestionToModify(question);
    this.router.navigate(['../question-edit'], {relativeTo: this.route});
  }
}
