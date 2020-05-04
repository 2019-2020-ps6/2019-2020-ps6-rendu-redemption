import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Answer} from '../../../models/answer.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Guest} from '../../../models/guest.model';
import {QuestionResult} from '../../../models/question-result.model';
import { Image } from '../../../models/image.model';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-question-to-answer',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  styles: [`
    .size { font-size: 120%; font-weight: bold}
    .contrast { background: black }
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
  public goToNextQuestion: EventEmitter<questionResultPlusAnswer> = new EventEmitter<questionResultPlusAnswer>();

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

  /**
   * The list of images.
   */
  public images: Image[];

  constructor(private imageService: ImageService) {}

  async ngOnInit() {
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
      // Add the correct animation.
      this.forAnimation[this.question.answers.indexOf(answer)] = 'correct';
    } else {
      // Add the incorrect animation.
      this.forAnimation[this.question.answers.indexOf(answer)] = 'incorrect';
      this.answersClicked.push(answer.id);
    }
  }

  /**
   * Validates the current question.
   * @param i The index of the answer.
   * @param event The animation event.
   */
  validateAnswer(i: number, event: AnimationEvent) {
    if (i === -2 || this.forAnimation[i] === 'correct') {
      const res: questionResultPlusAnswer = {
        answer: this.question.answers[i],
        questionResult: {
          questionId: this.question.id,
          skipped: this.skipped,
          answers: this.answersClicked
        }
      };

      // Redirect the user to the next question.
      this.goToNextQuestion.emit(res);
    }
  }

  /**
   * Skips the current question.
   */
  skipQuestion(): void {
    this.skipped = true;
    let correctAnswer: Answer;
    for (const answer of this.question.answers) {
      if (answer.isCorrect) {
        correctAnswer = answer;
      }
    }

    const res: questionResultPlusAnswer = {
      answer: correctAnswer,
      questionResult: {
        questionId: this.question.id,
        skipped: this.skipped,
        answers: this.answersClicked
      }
    };

    // Redirect the user to the next question.
    this.goToNextQuestion.emit(res);
  }

  /**
   * Returns an image by id.
   * @param imageId The id of the image.
   */
  getImage(imageId: number): Image {
    return this.images.find((image) => image.id === imageId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.forAnimation = [];
    for (let i = 0; i < this.question.answers.length; i++) {
      this.forAnimation[i] = null;
    }
  }

  setSize() {
    let style = {
      size: this.profile === 'tbd1' || this.profile === 'tbd2',
    };
    return style;
  }

  setContrast() {
    let style = {
      contrast: this.profile === 'tbd2',
    };
    return style;
  }
}

export interface questionResultPlusAnswer {
  answer: Answer;
  questionResult: QuestionResult;
}

