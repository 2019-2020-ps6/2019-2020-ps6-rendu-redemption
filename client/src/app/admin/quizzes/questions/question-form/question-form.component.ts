// App.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models.
import { Image } from '../../../../../models/image.model';
import { Quiz } from '../../../../../models/quiz.model';
import { ImageService } from '../../../../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../../../../models/question.model';
import { Answer } from '../../../../../models/answer.model';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  /**
   * The form of the question.
   */
  public questionForm: FormGroup;

  /**
   * The forms of the answers.
   */
  public answerForms: FormGroup[];

  /**
   * The list of images.
   */
  public images: Image[];

  /**
   * The question to be displayed.
   */
  @Input()
  public question: Question;

  /**
   * The event emitter to submit the question.
   */
  @Output()
  public submitQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private imageService: ImageService
  ) {
    // Initialize the images.
    this.images = [];

    // Create the answer form groups.
    this.answerForms = [];
    for (let i = 0; i < 4; i++) {
      this.answerForms[i] = this.initAnswer();
    }

    // Create the question form group.
    this.questionForm = this.initQuestion(this.answerForms);
  }

  /**
   * Initializes an answer form group.
   */
  initAnswer(): FormGroup {
    return this.fb.group({
      id: [{ value: 0, disabled: true }],
      value: ['', [Validators.required, Validators.min(1)]],
      isCorrect: [false],
      imageId: [null],
      createdAt: [{ value: '', disabled: true }],
      updatedAt: [{ value: '', disabled: true }]
    });
  }

  /**
   * Initializes a question form group.
   */
  initQuestion(answerForms: FormGroup[]): FormGroup {
    return this.fb.group({
      id: [{ value: 0, disabled: true }],
      label: ['', [Validators.required, Validators.min(1)]],
      imageId: [null],
      answers: this.fb.array(answerForms),
      createdAt: [{ value: '', disabled: true }],
      updatedAt: [{ value: '', disabled: true }]
    });
  }

  ngOnInit() {
    // Get the images.
    this.imageService
      .getImages()
      .subscribe((images) => {
        this.images = images;
      });

    // If the question is set.
    if (this.question) {
      // Set the question.
      this.questionForm.setValue(this.question);
    }
  }

  /**
   * Returns the selected image of a form group.
   * @param formGroup The form group to be checked.
   */
  getSelectedImage(formGroup: FormGroup): Image {
    const imageId = formGroup.getRawValue().imageId;
    return this.images.find((image) => image.id === imageId);
  }

  /**
   * Submits the question.
   */
  submit() {
    // Get the form value.
    const value = this.questionForm.getRawValue();
    console.log(value);
    // // Construct the question.
    // const question: Question = {
    //   id: value.id,
    //   label: value.label,
    //   imageId: value.selectedImage ? value.selectedImage.id : null
    // };
    //
    // // Submit the question.
    // this.submitQuestion.emit(question);
  }
}
