// App.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models.
import { Theme } from '../../../../models/theme.model';
import { Image } from '../../../../models/image.model';
import { ImageService } from '../../../../services/image.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  /**
   * The theme to display.
   */
  @Input()
  public theme: Theme;

  /**
   * The image of the theme.
   */
  public image: Image;

  /**
   * The event emitter to select the theme.
   */
  @Output()
  public selectTheme: EventEmitter<Theme> = new EventEmitter<Theme>();

  /**
   * The event emitter to edit the theme.
   */
  @Output()
  public editTheme: EventEmitter<Theme> = new EventEmitter<Theme>();

  /**
   * The event emitter to delete the theme.
   */
  @Output()
  public deleteTheme: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    // Set the default image.
    this.image = {
      id: 0,
      name: this.theme.name,
      path: 'https://via.placeholder.com/640x360?text=' + this.theme.name
    };

    // Get the image of the theme.
    this.imageService
      .getImage(this.theme.imageId)
      .subscribe((image) => {
        // If image exists.
        if (image) {
          this.image = image;
        }
      });
  }

  /**
   * Selects the theme.
   */
  select(event) {
    this.selectTheme.emit(this.theme);

    // Prevent other button to trigger.
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Edits the theme.
   */
  edit(event) {
    this.editTheme.emit(this.theme);

    // Prevent other button to trigger.
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Deletes the theme.
   */
  delete(event) {
    this.deleteTheme.emit(this.theme);

    // Prevent other button to trigger.
    event.preventDefault();
    event.stopPropagation();
  }
}
