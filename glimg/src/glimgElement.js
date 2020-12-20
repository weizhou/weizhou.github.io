import { GLImage } from './glimg';
import { GLImgFilterDef } from "./glimgFilterDef";

export class GLImageElement extends HTMLElement {
  constructor() {
    super();
    
    const shadow = this.attachShadow({mode: 'open'}); 

    const glImage = new GLImage();
    const filterConfs = JSON.parse(this.getAttribute('filters'));
    filterConfs.forEach( filterConf => {
      let filtername = filterConf.name;
      let filter = GLImgFilterDef.getFilter(filtername);
      
      Object.keys(filterConf).forEach(propKey => (propKey === "name") ? false : filter[propKey] = JSON.parse(filterConf[propKey]));

      glImage.addFilter(filter);
    });

    glImage.onload = ()=> {
      const canvas = glImage.getCanvas();
      canvas.style = `width: var(--width); height: var(--height); object-fit:var(--object-fit)`
      shadow.appendChild(canvas);
    };

    glImage.url = this.getAttribute('src');
  
  }
}

customElements.define('gl-img', GLImageElement);