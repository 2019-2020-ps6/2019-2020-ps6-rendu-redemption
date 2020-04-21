import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {faUserEdit, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Image} from "../../../../models/image.model";
import {ImageService} from "../../../../services/image.service";

@Component({
  selector: 'app-imageEdit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.scss'],
})

export class ImageEditComponent implements OnInit {

  imageToEdit: Image;
  icon = faUserPlus;
  buttonText: String;
  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('path') pathInput: ElementRef;
  @ViewChild('keywords') keywordsInput: ElementRef;

  constructor(private imageService: ImageService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.imageToEdit = this.imageService.getImageToModify();

  }

  createModifyImage() {
    let imageToCreate: Image = {
      id: -1,
      name: this.nameInput.nativeElement.value,
      path: this.pathInput.nativeElement.value,
      keywords: this.keywordsInput.nativeElement.value,
    };
    if (this.imageToEdit == null) {
      this.imageService.createImage(imageToCreate);
    } else {
      imageToCreate.id = this.imageToEdit.id;
      this.imageService.updateImage(imageToCreate);
    }
  }

}
