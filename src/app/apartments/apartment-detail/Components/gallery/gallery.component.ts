import { Component, Input, OnInit } from '@angular/core';
import { IImage } from 'src/app/shared/interface/i-image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
    @Input() thumb: IImage;
    @Input() images: IImage[];
    @Input() isLoadedGalery: boolean;
    selectedImage:any = null;
    showFullPreview:boolean = false;

    constructor(){

    }

    ngOnInit(): void {
      this.images.push(this.thumb);
    }
  
  

  showImage(index: number) {
    this.selectedImage = this.images[0];
    this.showFullPreview = true;
  }

  closeFullPreview() {
    this.showFullPreview = false;
    this.selectedImage = null;
  }

  navigateImages(direction: string) {
    const currentIndex = this.images.indexOf(this.selectedImage);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % this.images.length;
    } else {
      newIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    }

    this.selectedImage = this.images[newIndex];
  }
}

