import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Image} from "../../../../models/image.model";
import {ImageService} from "../../../../services/image.service";

@Component({
  selector: 'app-imageList',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})

export class ImageListComponent implements OnInit {
  imageList: Image[];
  searchElement: string;
  pageCount: number = 1;

  constructor(private imageService: ImageService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.imageList = this.imageService.getImages();
  }

  modifyFilter(value: string) {
    this.searchElement = value;
  }

  goToImageEdit(image: Image) {
    this.imageService.setImageToModify(image);
    this.router.navigate(['./modify-image'], {relativeTo: this.route});
  }

  goToImageAdd() {
    this.router.navigate(['./add-image'], {relativeTo: this.route});
  }
}
