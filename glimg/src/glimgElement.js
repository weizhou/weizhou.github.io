import { GLImage } from './glimg';
import { GLImgFilterDef } from "./glimgFilterDef";

export class GLImageElement extends HTMLElement {

  static get observedAttributes() { return ['src', 'filters', 'width', 'height']; }
  
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'src':
        this.glImage.url = this.getAttribute('src');
      case 'filters':
        this.setupFilters(this.getAttribute('filters'));
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
    filterConfs && filterConfs.forEach( filterConf => {
      let filtername = filterConf.name;
      let filter = GLImgFilterDef.getFilter(filtername);
      
      Object.keys(filterConf).forEach(propKey => (propKey === "name") ? false : filter[propKey] = JSON.parse(filterConf[propKey]));

      this.glImage.addFilter(filter);
    });

    this.glImage.onload = ()=> {
      const canvas = this.glImage.getCanvas();
      shadow.appendChild(canvas);
      this.onload();
    };
  
  }

  setupFilters(filters){
    this.glImage.resetFilters();
    // filters.forEach(f => this.glImage.addFilter(GLImgFilterDef.getFilter(f.name)));

    if(filters){
      // let filterList = filters.split(",");
      let filterList = JSON.parse(filters);
      filterList.forEach(f=> {
        let filter = GLImgFilterDef.getFilter(f.name);
        Object.keys(f).forEach(propKey => propKey==="name" ? false : filter[propKey] = f[propKey]);
        this.glImage.addFilter(filter);
      });
    } 
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

  get src() {
    return this.getAttribute('src');
  }
  
  set src(newValue) {
    this.setAttribute('src', newValue);
  }

  get filters() {
    return this.getAttribute('filters');
  }
  
  set filters(newValue) {
    this.setAttribute('filters', newValue);
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

// GLImageElement.prototype.onload = () => {};

customElements.define('gl-img', GLImageElement);