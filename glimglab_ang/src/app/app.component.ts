import { Component } from '@angular/core';
import { ImageService } from './image.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'glimglab';
  selectedFile?: File;

  constructor(private imageService: ImageService) {
  }

  loadImage(event: any): void {
    this.selectedFile = event.target.files[0];
    // tslint:disable-next-line: no-unused-expression
    this.selectedFile && this.imageService.addLabImage(this.selectedFile);
  }
}

