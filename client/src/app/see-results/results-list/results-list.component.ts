import {Component, OnInit} from '@angular/core';
import {QuestionResults, Results} from '../../../models/results.model';
import {ResultsService} from '../../../services/results.service';
import {QuizService} from '../../../services/quiz.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-resultsList',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})

export class ResultsListComponent implements OnInit {
  results: Results[] = [];
  quizNames: String[] = [];

  constructor(private resultsService: ResultsService, private quizService: QuizService, private router: Router, private route: ActivatedRoute) {
  }

  //TODO vérifier avec du lag que ça fonctionne bien
  ngOnInit(): void {
    this.results = this.resultsService.getResults();
    this.quizService.getQuizzes().subscribe((quizzes) => {
      for (let r of this.results) {
        for (let q of quizzes) {
          if (q.id == r.quizId) {
            this.quizNames[this.results.indexOf(r)] = q.name;
          }
        }
      }
    });
  }

  goToQuestionResults(questionResults: QuestionResults[]) {
    this.router.navigate(['../questions-results-list'], {relativeTo: this.route});
  }
}
