import { Injectable } from '@angular/core';

export interface LabImage {
  image: File;
  filters: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  labImages: LabImage[] = new Array<LabImage>();

  constructor() { }

  addLabImage(img: File): void{
    const labImage = {image: img, filters: []};
    this.labImages.push(labImage);
  }
}
