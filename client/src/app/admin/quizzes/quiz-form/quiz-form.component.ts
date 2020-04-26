// App.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models.
import { Image } from '../../../../models/image.model';
import { Quiz } from '../../../../models/quiz.model';
import { ImageService } from '../../../../services/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  /**
   * The form of the quiz.
   */
  public quizForm: FormGroup;

  /**
   * The quiz to be displayed.
   */
  @Input()
  public quiz: Quiz;

  /**
   * The event emitter to submit the quiz.
   */
  @Output()
  public submitQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private imageService: ImageService
  ) {
    // Create the form group.
    this.quizForm = this.formBuilder
      .group({
        id: [{ value: 0, disabled: true }], // Disabled.
        name: [
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
    // The input quiz is set.
    if (this.quiz) {
      // Load the image of the quiz.
      this.imageService
        .getImage(this.quiz.imageId)
        .subscribe((image) => {
          if (image) {
            // Set the selected image of the quiz.
            this.quizForm.setValue({
              id: this.quiz.id,
              name: this.quiz.name,
              selectedImage: image
            });
          }
        });
    }
  }

  /**
   * Returns the selected image.
   */
  getSelectedImage(): Image {
    return this.quizForm.getRawValue().selectedImage;
  }

  /**
   * Submits the quiz.
   */
  submit() {
    // Get the form value.
    const value = this.quizForm.getRawValue();

    // Construct the quiz.
    const quiz: Quiz = {
      id: value.id,
      name: value.name,
      imageId: value.selectedImage ? value.selectedImage.id : null
    };

    // Submit the quiz.
    this.submitQuiz.emit(quiz);
  }
}
