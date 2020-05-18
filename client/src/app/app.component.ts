import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Guest} from "../models/guest.model";
import {QuizSelectionComponent} from "./play/quiz-selection/quiz-selection.component";
import {ThemesSelectionComponent} from "./play/themes-selection/themes-selection.component";

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
      let changeContainer = sessionStorage.getItem('changeContainer');

      if (this.guest == null) {
        this.profile = 'none';
      }
      if (this.guest != null && changeContainer === 'true') {
        this.profile = this.guest.accessibility;
      }
  }

  setSize() {
    let style = {
      size: this.profile === 'agrandissement' || this.profile === 'contraste eleve'
    };

    return style;
  }
}

