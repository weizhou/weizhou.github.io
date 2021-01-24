class GLImagelabCanvasElement extends HTMLElement {

  constructor() {
    super();
    
    this._shadow = this.attachShadow({mode: 'open'}); 

    const style = document.createElement('style');
    style.textContent = `
      :host {
      }

      #work-canvas {
        position: absolute;
      }
    `;

    this._shadow.appendChild(style);

  }

  populateImage (img) {
    if(!this._glimgElement) {
      this._glimgElement = new GLImageElement();
      this._glimgElement.id = "work-canvas";
      this._glimgElement.onload = this.onload;  
      this._shadow.appendChild(this._glimgElement);
    } 
    this._glimgElement.filters = JSON.stringify(img.filters);
    this._glimgElement.src = img.img;
  }

  fitSize(width, height) {
    let imageAspect = this._glimgElement.canvasWidth / this._glimgElement.canvasHeight;
    let canvasSectionAspect = (width-2) / (height-2);
    let glimgElementWidth = width-2;
    let glimgElementHeight = height-2;
    if(imageAspect >= canvasSectionAspect){
        glimgElementHeight = glimgElementWidth / imageAspect;
    }else{
        glimgElementWidth = glimgElementHeight * imageAspect;
    }
    this.positionAndScaleGlimgElement(glimgElementWidth, glimgElementHeight);
  }

  originalSize() {
    this.positionAndScaleGlimgElement(this._glimgElement.width, this._glimgElement.height);
  }

  zoomin() {
    this.zoomGlimgElement(1.5);
  }

  zoomout() {
    this.zoomGlimgElement(1.0/1.5);
  }

  zoomGlimgElement(zoomFactor){
    const elWidth = this._glimgElement.width;
    const elHeight = this._glimgElement.height;
    let glimgElementWidth = parseInt(elWidth.substr(0, elWidth.length-2));
    let glimgElementHeight = parseInt(elHeight.substr(0, elHeight.length -2));
    glimgElementWidth *= zoomFactor;
    glimgElementHeight *= zoomFactor;
    this.positionAndScaleGlimgElement(glimgElementWidth, glimgElementHeight);
  }

  positionAndScaleGlimgElement(width, height) {
    this._glimgElement.width = `${width}px`;
    this._glimgElement.height = `${height}px`;
  }


  onload = ()=>{};

  update(event, imgs) {
    if (event === "img" || event === "filterAdded" || event === "filterRemoved" || event === "filterUpdated"){
      imgs.filter(img => img.active).map(img => this.populateImage(img));
    }
  }
}

customElements.define('lab-canvas', GLImagelabCanvasElement);