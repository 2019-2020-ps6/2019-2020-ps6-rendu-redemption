// App.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models.
import { Image } from '../../../../../models/image.model';
import { Quiz } from '../../../../../models/quiz.model';
import { ImageService } from '../../../../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../../../../models/question.model';

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
    private formBuilder: FormBuilder,
    private imageService: ImageService
  ) {
    // Create the form group.
    this.questionForm = this.formBuilder
      .group({
        id: [{ value: 0, disabled: true }],
        label: [
          '',
          [
            Validators.required,
            Validators.min(1)
          ]
        ],
        selectedImage: [null]
      });
  }

  ngOnInit() {
    // The input question is set.
    if (this.question) {
      // Load the image of the question.
      this.imageService
        .getImage(this.question.imageId)
        .subscribe((image) => {
          // Set the selected image of the question.
          this.questionForm.setValue({
            id: this.question.id,
            label: this.question.label,
            selectedImage: image ? image : null
          });
        });
    }
  }

  /**
   * Returns the selected image.
   */
  getSelectedImage(): Image {
    return this.questionForm.getRawValue().selectedImage;
  }

  /**
   * Submits the question.
   */
  submit() {
    // Get the form value.
    const value = this.questionForm.getRawValue();

    // Construct the question.
    const question: Question = {
      id: value.id,
      label: value.label,
      imageId: value.selectedImage ? value.selectedImage.id : null
    };

    // Submit the question.
    this.submitQuestion.emit(question);
  }
}
