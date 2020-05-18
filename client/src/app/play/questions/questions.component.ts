import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Guest} from '../../../models/guest.model';
import {QuestionResult} from '../../../models/question-result.model';
import {Image} from '../../../models/image.model';
import {ImageService} from '../../../services/image.service';

@Component({
  selector: 'app-question-to-answer',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  styles: [`
    .size {
      font-size: 120%;
      font-weight: bold
    }

    .contrast {
      background: black
    }
  `],
  animations: [
    trigger('isAnswerCorrect', [
      state('null', style({
        opacity: 1,
        visibility: 'visible',
      })),
      state('correct', style({
        backgroundColor: '#00FF00'
      })),
      state('incorrect', style({
        opacity: 0,
        visibility: 'hidden',
        display: 'none',
      })),
      transition('* => correct', [
        animate('0.25s')
      ]),
      transition('* => incorrect', [
        animate('0.5s')
      ]),
    ])
  ]
})

export class QuestionsComponent implements OnInit, OnChanges {
  /**
   * The question to display.
   */
  @Input()
  public question: Question;

  /**
   * The event emitter to go to the next question.
   */
  @Output()
  public goToNextQuestion: EventEmitter<QuestionResultPlusAnswer> = new EventEmitter<QuestionResultPlusAnswer>();

  /**
   * The list of clicked answers.
   */
  public answersClicked: number[];

  /**
   * Whether the question has been skipped, or not.
   */
  public skipped: boolean;

  /**
   * Whether the skip button is enabled, or not.
   */
  public enableSkip: boolean;

  /**
   * The accessibility profile of the guest.
   */
  public profile: string;

  public forAnimation: string[];
  public forAnimation2: Boolean[];

  /**
   * The list of images.
   */
  public images: Image[];

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    // Get the accessibility profile of the guest.
    const guest: Guest = JSON.parse(sessionStorage.getItem('selectedGuest'));
    this.profile = guest.accessibility;

    // Get the images.
    this.imageService
      .getImages()
      .subscribe((images) => {
        this.images = images;
      });

    // Initializes the question.
    this.enableSkip = false;
    this.answersClicked = [];
    this.skipped = false;
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
    this.forAnimation2 = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation2[i] = null;
    }

    // Wait for 10 seconds before showing the skip button.
    setTimeout(() => {
      this.enableSkip = true;
    }, 10000);
  }

  /**
   * Checks if the answer is correct.
   * @param answer The answer to be checked.
   */
  checkAnswer(answer: Answer) {
    if (answer.isCorrect) {
      this.answersClicked.push(answer.id);
      // Add the correct animation.
      this.forAnimation[this.question.answers.indexOf(answer)] = 'correct';
    } else {
      this.answersClicked.push(answer.id);
      // Add the incorrect animation.
      this.forAnimation[this.question.answers.indexOf(answer)] = 'incorrect';
    }
  }

  /**
   * Validates the current question.
   * @param i The index of the answer.
   * @param event The animation event.
   */
  validateAnswer(i: number, event: AnimationEvent) {
    if (this.forAnimation[i] === 'correct') {
      this.resetAnimation2();
      const res: QuestionResultPlusAnswer = {
        answer: this.question.answers[i],
        questionResult: {
          questionId: this.question.id,
          skipped: this.skipped,
          answers: this.answersClicked
        }
      };

      // Redirect the user to the next question.
      this.finishQuestion(res);
    }
    if (this.forAnimation[i] === 'incorrect') {
      this.forAnimation2[i] = true;
    }
  }

  /**
   * Skips the current question.
   */
  skipQuestion(): void {
    this.resetAnimation2();
    this.skipped = true;
    let correctAnswer: Answer;
    for (const answer of this.question.answers) {
      if (answer.isCorrect) {
        correctAnswer = answer;
      }
    }

    const res: QuestionResultPlusAnswer = {
      answer: correctAnswer,
      questionResult: {
        questionId: this.question.id,
        skipped: this.skipped,
        answers: this.answersClicked
      }
    };

    // Redirect the user to the next question.
    this.finishQuestion(res);
  }

  /**
   * Returns an image by id.
   * @param imageId The id of the image.
   */
  getImage(imageId: number): Image {
    return this.images.find((image) => image.id === imageId);
  }

  //TODO problem is surely here
  ngOnChanges(changes: SimpleChanges): void {
    this.resetAnimation1();
    this.resetAnimation2();
  }

  finishQuestion(res: QuestionResultPlusAnswer){
    this.resetAnimation1();
    this.resetAnimation2();
    this.goToNextQuestion.emit(res);
  }

  resetAnimation1(){
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
  }

  resetAnimation2(){
    this.forAnimation2 = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation2[i] = null;
    }
  }

  setSize() {
    let style = {
      size: this.profile === 'agrandissement' || this.profile === 'contraste eleve',
    };
    return style;
  }

  setContrast() {
    let style = {
      contrast: this.profile === 'contraste eleve',
    };
    return style;
  }
}

export interface QuestionResultPlusAnswer {
  answer: Answer;
  questionResult: QuestionResult;
}

