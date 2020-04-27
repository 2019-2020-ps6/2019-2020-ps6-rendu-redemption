// App.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models.
import { Image } from '../../../../models/image.model';
import { HttpClient } from '@angular/common/http';
import { Theme } from '../../../../models/theme.model';
import { ImageService } from '../../../../services/image.service';

@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})
export class ThemeFormComponent implements OnInit {
  /**
   * The form of the theme.
   */
  public themeForm: FormGroup;

  /**
   * The theme to be displayed.
   */
  @Input()
  public theme: Theme;

  /**
   * The event emitter to submit the theme.
   */
  @Output()
  public submitTheme: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor(
    private formBuilder: FormBuilder,
    private imageService: ImageService
  ) {
    // Create the form group.
    this.themeForm = this.formBuilder
      .group({
        id: [{ value: 0, disabled: true }], // Disabled.
        name: ['', [
          Validators.required,
          Validators.min(1)
        ]], // Required.
        selectedImage: [null]
      });
  }

  ngOnInit() {
    // The input theme is set.
    if (this.theme) {
      // Load the image of the theme.
      this.imageService
        .getImage(this.theme.imageId)
        .subscribe((image) => {
          // Set the selected image of the theme.
          this.themeForm.setValue({
            id: this.theme.id,
            name: this.theme.name,
            selectedImage: image ? image : null
          });
        });
    }
  }

  /**
   * Returns the selected image.
   */
  getSelectedImage(): Image {
    return this.themeForm.getRawValue().selectedImage;
  }

  /**
   * Submits the theme.
   */
  submit() {
    // Get the form value.
    const value = this.themeForm.getRawValue();

    // Construct the theme.
    const theme: Theme = {
      id: value.id,
      name: value.name,
      imageId: value.selectedImage ? value.selectedImage.id : null
    };

    // Submit the theme.
    this.submitTheme.emit(theme);
  }
}
