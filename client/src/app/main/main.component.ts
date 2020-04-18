import {Component} from '@angular/core';
import {faPlayCircle, faImages, faFileAlt, faUserFriends, faChartLine} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent {

  iconPlay    = faPlayCircle;
  iconImages  = faImages;
  iconQuizzes = faFileAlt;
  iconGuests  = faUserFriends;
  iconResults = faChartLine;



}
