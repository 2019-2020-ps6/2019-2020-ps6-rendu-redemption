// App.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models.
import { Image } from '../../../../models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  /**
   * The image to display.
   */
  @Input()
  image: Image;

  /**
   * The event emitter to edit the image.
   */
  @Output()
  editImage: EventEmitter<Image> = new EventEmitter<Image>();

  /**
   * The event emitter to delete the image.
   */
  @Output()
  deleteImage: EventEmitter<Image> = new EventEmitter<Image>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Edits the image.
   */
  edit() {
    this.editImage.emit(this.image);
  }

  /**
   * Deletes the image.
   */
  delete() {
    this.deleteImage.emit(this.image);
  }
}
