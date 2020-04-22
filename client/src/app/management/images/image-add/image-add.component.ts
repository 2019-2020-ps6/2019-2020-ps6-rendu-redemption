import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../../../../services/image.service';
import {Image} from '../../../../models/image.model';

@Component({
  selector: 'app-ImageAdd',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.scss'],
})

export class ImageAddComponent implements OnInit {
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('path') pathInput: ElementRef;
  @ViewChild('keywords') keywordsInput: ElementRef;

  constructor(private imageService: ImageService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  createImage() {
    const sentence = this.keywordsInput.nativeElement.value;
    const imageToCreate: Image = {
      id: -1,
      name: this.nameInput.nativeElement.value,
      path: this.pathInput.nativeElement.value
    };
    this.imageService.createImage(imageToCreate);
  }

}
