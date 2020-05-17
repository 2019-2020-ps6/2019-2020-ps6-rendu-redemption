import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Guest} from "../models/guest.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
    .size {
      max-width: 2000px;
    }`
    ]
})
export class AppComponent implements DoCheck{
  title = 'PS6 Redemption';

  public guest: Guest;
  public profile: string;

  ngDoCheck() {

    this.guest = JSON.parse(sessionStorage.getItem('selectedGuest'));
    if (this.guest == null) {
      this.profile = 'none';
    }
    if (this.guest != null) {
      this.profile = this.guest.accessibility;
    }
  }

  setSize() {
    let style = {
      size: this.profile === 'tbd1'
    };

    return style;
  }
}

