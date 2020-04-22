import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../../../../services/theme.service';
import {Quiz} from '../../../../../models/quiz.model';
import {QuizService} from '../../../../../services/quiz.service';

@Component({
  selector: 'app-QuizCreation',
  templateUrl: './quiz-creation.component.html',
  styleUrls: ['./quiz-creation.component.scss'],
})

export class QuizCreationComponent implements OnInit {
  @ViewChild('imageId') imageIdInput: ElementRef;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('keywords') keywordsInput: ElementRef;

  constructor(private quizService: QuizService, private themeService: ThemeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.themeService.getCurrentTheme() === undefined) {
      this.router.navigate(['../themes-list'], {relativeTo: this.route});
    }
  }

  createQuiz() {
    const sentence = this.keywordsInput.nativeElement.value;
    const quizToCreate: Quiz = {
      id: -1,
      theme: this.themeService.getCurrentTheme(),
      image: this.imageIdInput.nativeElement,
      name: this.nameInput.nativeElement.value,
      questions: []
    };
    this.quizService.createQuiz(quizToCreate);
  }

}
