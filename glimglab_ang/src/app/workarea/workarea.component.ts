import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.css']
})
export class WorkareaComponent implements OnInit {

  // @ViewChild('workCanvas')myCanvas!: ElementRef<HTMLCanvasElement>;
  // ctx!: CanvasRenderingContext2D | null;

  constructor() { }

  ngOnInit(): void {

  }

  // ngAfterViewInit(): void{
  //   const image = new HTMLImageElement();
  //   image.onload = (e: event => {
  //     this.drawImageToCanvas(e.target);
  //   };
    // image.src = getImageSrcFromLocalStorage();
  //   image.src = '../../assets/images/canvas_init.jpg';
  //   this.ctx = this.myCanvas.nativeElement.getContext('2d');
  // }


  // drawImageToCanvas(image: HTMLImageElement): void{
  //   this.setCanvasSize(image.width, image.height);
  //   ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
  //   imageSizeLabel.innerHTML = `size: ${image.width} x ${image.height}`;
  // }


  // drawInitalTextToCanvas(): void{
  //   setCanvasSize(300, 200);
  //   ctx.save();
  //   ctx.translate(canvas.width/2, canvas.height/2);
  //   ctx.font = "30px Arial";
  //   ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text-color");
  //   ctx.textAlign = "center";
  //   ctx.fillText("load images to start!", 0, 0);
  //   ctx.restore();
  // }

  // positionAndScaleCanvas(width, height) {
  //   canvas.style.width = `${width}px`;
  //   canvas.style.height = `${height}px`;

  //   if (width > canvasSection.Width || height > canvasSection.clientHeight){
  //       canvas.style.top = 0;
  //       canvas.style.left = 0;
  //   }else{
  //       canvas.style.top = "";
  //       canvas.style.left = "";
  //   }
  // }

  // setCanvasSize(width: number, height: number): void{
  //   canvas.width = width;
  //   canvas.height = height;

  //   positionAndScaleCanvas(width, height);
  // }



// imageFitLabel.addEventListener("click", e=>{
//   let imageAspect = canvas.width / canvas.height;
//   let canvasSectionAspect = (canvasSection.offsetWidth-2) / (canvasSection.offsetHeight-2);
//   let canvasWidth = canvasSection.offsetWidth-2;
//   let canvasHeight = canvasSection.offsetHeight-2;
//   if(imageAspect >= canvasSectionAspect){
//       canvasHeight = canvasWidth / imageAspect;
//   }else{
//       canvasWidth = canvasHeight * imageAspect;
//   }
//   positionAndScaleCanvas(canvasWidth, canvasHeight);
// })

// imageOriginalLabel.addEventListener("click", e=>{
//   positionAndScaleCanvas(canvas.width, canvas.height);
// })

// imageZoominLabel.addEventListener("click", e=>{
//   let zoominFactor = 1.5;
//   let canvasWidth = parseInt(canvas.style.width);
//   let canvasHeight = parseInt(canvas.style.height);
//   canvasWidth *= zoominFactor;
//   canvasHeight *= zoominFactor;
//   positionAndScaleCanvas(canvasWidth, canvasHeight);
// })

// imageZoomoutLabel.addEventListener("click", e=>{
//   let zoomoutFactor = 1.5;
//   let canvasWidth = parseInt(canvas.style.width);
//   let canvasHeight = parseInt(canvas.style.height);
//   canvasWidth /= zoomoutFactor;
//   canvasHeight /= zoomoutFactor;
//   positionAndScaleCanvas(canvasWidth, canvasHeight);
// })




}
