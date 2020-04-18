import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../../../../services/theme.service';
import {Theme} from '../../../../../models/theme.model';

@Component({
  selector: 'app-themeCreation',
  templateUrl: './themes-creation.component.html',
  styleUrls: ['./themes-creation.component.scss'],
})

export class ThemesCreationComponent implements OnInit {
  @ViewChild('imageId') imageIdInput: ElementRef;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('keywords') keywordsInput: ElementRef;

  constructor(private themeService: ThemeService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
  }

  createTheme() {
    let sentence = this.keywordsInput.nativeElement.value;
    let themeToCreate: Theme = {
      id: -1,
      imageId: this.imageIdInput.nativeElement.value,
      name: this.nameInput.nativeElement.value,
      keywords: sentence.split(" ")
    };
    this.themeService.createTheme(themeToCreate);
  }

}
