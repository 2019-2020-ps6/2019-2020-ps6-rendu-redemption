import {Component, OnInit} from '@angular/core';
import {Result} from '../../../models/result.model';
import {ResultService} from '../../../services/result.service';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionResult} from '../../../models/question-result.model';
import {Guest} from '../../../models/guest.model';
import {TransitionService} from '../../../services/transition.service';

@Component({
  selector: 'app-resultsList',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})

export class ResultsListComponent implements OnInit {
  guest: Guest;
  results: Result[] = [];
  quizNames: string[] = [];

  constructor(private resultsService: ResultService,
              private quizService: QuizService,
              private transitionService: TransitionService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  // TODO vérifier avec du lag que ça fonctionne bien
  ngOnInit(): void {
    const session = sessionStorage.getItem('selectedGuest');
    if (session === null || session === undefined) {
      this.router.navigate(['../guest-selection'], {relativeTo: this.route});
    } else {
      this.results = [];
      this.guest = JSON.parse(sessionStorage.getItem('selectedGuest'));
      this.resultsService.getResults().subscribe((results) => {
        console.log(results);
        for (const r of results) {
          if (r.guestId === this.guest.id) {
            this.results.push(r);
          }
        }
      });
      this.quizService.getQuizzes().subscribe((quizzes) => {
        for (const r of this.results) {
          for (const q of quizzes) {
            if (q.id === r.quizId) {
              this.quizNames[this.results.indexOf(r)] = q.name;
            }
          }
        }
      });
    }
  }

  goToQuestionResults(quizId: number, questionResults: QuestionResult[]) {
    this.transitionService.questionResults = questionResults;
    this.transitionService.quizForResults = quizId;
    this.router.navigate(['../questions-results-list'], {relativeTo: this.route});
  }

}
