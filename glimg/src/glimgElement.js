import { GLImage } from './glimg';
import { GLImgFilterDef } from "./glimgFilterDef";

export class GLImageElement extends HTMLElement {

  static get observedAttributes() { return ['filters', 'width', 'height']; }
  
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'width':
        console.log(`width changed from ${oldValue} to ${newValue}`);
        this.updateCanvasStyle();
        break;
      case 'height':
        console.log(`height changed from ${oldValue} to ${newValue}`);
        this.updateCanvasStyle();
        break;
    }
  }

  constructor() {
    super();
    
    const shadow = this.attachShadow({mode: 'open'}); 

    this.glImage = new GLImage();
    const filterConfs = JSON.parse(this.getAttribute('filters'));
    filterConfs.forEach( filterConf => {
      let filtername = filterConf.name;
      let filter = GLImgFilterDef.getFilter(filtername);
      
      Object.keys(filterConf).forEach(propKey => (propKey === "name") ? false : filter[propKey] = JSON.parse(filterConf[propKey]));

      this.glImage.addFilter(filter);
    });

    this.glImage.width = this.getAttribute('width');
    this.glImage.height = this.getAttribute('height');

    this.glImage.onload = ()=> {
      const canvas = this.glImage.getCanvas();
      // if (!glImage.width && !glImage.height){
      //   glImage.width = canvas.width;
      //   glImage.height = canvas.height;
      // } else if(!glImage.width){
      //   glImage.width = glImage.height * (canvas.width/canvas.height);
      // } else {
      //   glImage.height = glImage.width * (canvas.height/canvas.width);
      // }
      // canvas.style = `width: var(--width); height: var(--height); object-fit:var(--object-fit)`
      // canvas.style = `width: ${this.glImage.width}; height: ${this.glImage.height}; object-fit: fit`;

      this.updateCanvasStyle();
      shadow.appendChild(canvas);
    };

    this.glImage.url = this.getAttribute('src');
  
  }

  updateCanvasStyle() {
    this.glImage.getCanvas().style = `width: ${this.getAttribute('width')}; height: ${this.getAttribute('height')}; object-fit: fit`;
  }

  get canvasWidth() {
    return this.glImage.getCanvas().width;
  }

  get canvasHeight() {
    return this.glImage.getCanvas().height;
  }
  
  get width() {
    return this.getAttribute('width');
  }
  
  set width(newValue) {
    this.setAttribute('width', newValue);
  }

  get height() {
    return this.getAttribute('height');
  }

  set height(newValue) {
    this.setAttribute('height', newValue);
  }


}



customElements.define('gl-img', GLImageElement);