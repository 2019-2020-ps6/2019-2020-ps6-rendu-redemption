// App.
import { Component, Input, OnInit} from '@angular/core';

// Styles.
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  /**
   * The image to be deleted.
   */
  @Input()
  public image;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
