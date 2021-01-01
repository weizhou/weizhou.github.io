class GLImagelabNavElement extends HTMLElement {

  // static get observedAttributes() { return ['src', 'filters', 'width', 'height']; }
  
  // attributeChangedCallback(name, oldValue, newValue) {
  //   switch (name) {
  //     case 'src':
  //       this.glImage.url = this.getAttribute('src');
  //     case 'width':
  //       console.log(`width changed from ${oldValue} to ${newValue}`);
  //       this.updateCanvasStyle();
  //       break;
  //     case 'height':
  //       console.log(`height changed from ${oldValue} to ${newValue}`);
  //       this.updateCanvasStyle();
  //       break;
  //   }
  // }

  constructor() {
    super();
    
    const shadow = this.attachShadow({mode: 'open'}); 

    const navDiv = document.createElement('div');
    navDiv.innerHTML = `
      <nav class="side-menu">
        <ul>
          <li class="side-menu__item active" id="side-menu_image">
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 48 48" fill="rgba(153, 153, 153, 1)">
              <path fill="none" d="M0 0h48v48H0V0z"></path>
              <path d="M2 10h4v28H2zm8 0h4v28h-4zm34 0H20c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zM22 34l5-6.3 3.57 4.3 5-6.44L42 34H22z"></path>
            </svg>
            <label>images</label>
          </li>
          <li class="side-menu__item" id="side-menu_color_adjustment">
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 48 48" fill="rgba(116, 116, 116, 1)">
              <path fill="none" d="M48 0H0v48h48V0zm0 0H0v48h48V0zM0 48h48V0H0v48z"></path>
              <path d="M35.32 15.99L24 4.69l-11.32 11.3C9.56 19.11 8 23.27 8 27.27s1.56 8.22 4.68 11.34 7.22 4.7 11.32 4.7 8.2-1.58 11.32-4.7S40 31.27 40 27.27s-1.56-8.16-4.68-11.28zM12 28c.02-4 1.24-6.55 3.52-8.81L24 10.53l8.48 8.75C34.76 21.55 35.98 24 36 28H12z"></path>
            </svg>
            <label>color ajustment</label>
          </li>
          <li class="side-menu__item" id="side-menu_color_image_processing">
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 48 48" fill="rgba(115, 115, 115, 1)">
              <path d="M0 0h48v48H0z" fill="none"></path>
              <path d="M18 14h-4v4h4v-4zm0 8h-4v4h4v-4zm0-16c-2.21 0-4 1.79-4 4h4V6zm8 24h-4v4h4v-4zM38 6v4h4c0-2.21-1.79-4-4-4zM26 6h-4v4h4V6zm-8 28v-4h-4c0 2.21 1.79 4 4 4zm20-8h4v-4h-4v4zm0-8h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zM10 14H6v24c0 2.21 1.79 4 4 4h24v-4H10V14zm20-4h4V6h-4v4zm0 24h4v-4h-4v4z"></path>
            </svg>
            <label>image processing</label>
          </li>
          <li class="side-menu__item" id="side-menu_visual_effect">
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 48 48" fill="rgba(115, 115, 115, 1)">
              <path d="M0 0h48v48H0z" fill="none"></path>
              <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z"></path>
            </svg>
            <label>visual effect</label>
          </li>
          <li class="side-menu__item" id="side-menu_image_blend">
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 48 48" fill="rgba(115, 115, 115, 1)">
              <path d="M0 0h48v48H0z" fill="none"></path>
              <path d="M4 12H0v10h.02L0 40c0 2.21 1.79 4 4 4h36v-4H4V12zm40-4H28l-4-4H12C9.79 4 8.02 5.79 8.02 8L8 32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM14 30l9-12 7 9.01L35 21l7 9H14z"></path>
            </svg>
            <label>Image Blend</label>
          </li>
        </ul>
      </nav>
    `
    const style = document.createElement('style');
    style.textContent = `
      :host {
        --side-menu-background: #143d52;
        --side-menu-icon-color: rgba(155,155,155,1);
        --side-menu-icon-color-active: rgba(235,235,235,1);
      }
      .side-menu {
        background-color: var(--side-menu-background);
        margin: 0px;
        width: var(--side-menu-width);
        height: calc(100vh - var(--header-height) - var(--footer-height));
      }
    
      .side-menu ul {
          display: flex;
          flex-direction: column;
          margin: 0px;
          padding: 0px;
          padding-top: 20px;
          // padding: 0;
      }
      
      .side-menu__item {
          display: flex;
          flex-direction: column;
          list-style-type: none;
          text-align: center;
          justify-content: center;
          margin: 30px 0px;
          cursor: pointer;
      }
      
      .side-menu__item label {
          /* line-height: 100px; */
          width:  var(--side-menu-width);
          margin-top: 2px;
          color: var(--side-menu-icon-color);
          font-size: 10px;
          text-decoration-line: none;
      }
      
      .side-menu__item svg {
          align-self: center;
          width: var(--side-menu-icon-width);
          height: var(--side-menu-icon-width);
          fill: var(--side-menu-icon-color);
      }    

      .side-menu__item.active label {
        color: var(--side-menu-icon-color-active);
      }
    
      .side-menu__item.active svg {
          fill: var(--side-menu-icon-color-active);
      } 
      
      .side-menu__item:hover label {
        color: var(--side-menu-icon-color-active);
      }
    
      .side-menu__item:hover svg {
          fill: var(--side-menu-icon-color-active);
      } 
    `;

    shadow.appendChild(style);
    shadow.appendChild(navDiv);
    this.shadowRoot.querySelectorAll('.side-menu__item')
      .forEach(el =>
        el.addEventListener('click', e => {
          Array.from(e.currentTarget.parentElement.children)
            .forEach(ele=>ele.classList.remove('active'));
          e.currentTarget.classList.add('active');
        }));
  }

  // updateCanvasStyle() {
  //   this.glImage.getCanvas().style = `width: ${this.getAttribute('width')}; height: ${this.getAttribute('height')}; object-fit: fit`;
  // }

  // get canvasWidth() {
  //   return this.glImage.getCanvas().width;
  // }

  // get canvasHeight() {
  //   return this.glImage.getCanvas().height;
  // }

  // get src() {
  //   return this.getAttribute('src');
  // }
  
  // set src(newValue) {
  //   this.setAttribute('src', newValue);
  // }

  // get width() {
  //   return this.getAttribute('width');
  // }
  
  // set width(newValue) {
  //   this.setAttribute('width', newValue);
  // }

  // get height() {
  //   return this.getAttribute('height');
  // }

  // set height(newValue) {
  //   this.setAttribute('height', newValue);
  // }
}

customElements.define('lab-nav', GLImagelabNavElement);