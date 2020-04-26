import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-guest-modal',
  templateUrl: './guest-modal.component.html',
  styleUrls: ['./guest-modal.component.scss']
})
export class GuestModalComponent implements OnInit {
  @Input() public guest;

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
}
