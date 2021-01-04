class GLImagelabSizingElement extends HTMLElement {

  constructor() {
    super();
    
    const shadow = this.attachShadow({mode: 'open'});
    
    this.sizeSpanDiv = document.createElement('span');
    this.sizeSpanDiv.innerHTML = "";


    const sizingDiv = document.createElement('div');
    sizingDiv.innerHTML = `
      <div class="image-sizing">
        <label id="original" class="image-sizing__item clickable" title="original size">
          <svg xmlns="http://www.w3.org/2000/svg" pointer-events="none" width="256" height="256" viewBox="0 0 48 48" fill="rgba(255, 255, 255, 1)">
            <path d="M0 0h48v48H0z" fill="none"></path>
            <path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28zM27.93 24.57l-5.5 7.08-3.93-4.72L13 34h22l-7.07-9.43z"></path>
          </svg>
        </label>
        <label id="fit" class="image-sizing__item clickable active" title="fit to the window">
          <svg xmlns="http://www.w3.org/2000/svg" pointer-events="none" width="256" height="256" viewBox="0 0 48 48" fill="rgba(153, 153, 153, 1)">
            <path d="M30 6l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L42 18V6zM6 18l4.59-4.59 5.75 5.76 2.83-2.83-5.76-5.75L18 6H6zm12 24l-4.59-4.59 5.76-5.75-2.83-2.83-5.75 5.76L6 30v12zm24-12l-4.59 4.59-5.75-5.76-2.83 2.83 5.76 5.75L30 42h12z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
        </label>
        <label id="zoomin" class="image-sizing__item clickable" title="zoom in">
          <svg xmlns="http://www.w3.org/2000/svg" pointer-events="none" width="24" height="24" viewBox="0 0 24 24">
            <path d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/>
          </svg>
        </label>
        <label id="zoomout" class="image-sizing__item clickable" title="zoom out">
          <svg xmlns="http://www.w3.org/2000/svg" pointer-events="none" width="24" height="24" viewBox="0 0 24 24">
            <path d="M13 10h-8v-2h8v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/>
          </svg>
        </label>
      </div>
    `
    const style = document.createElement('style');
    style.textContent = `
      :host {
      }

      span {
        position: absolute;
        left: 20px;
        color: rgb(155, 155, 155);
      }

      .image-sizing label {
        color: var(--image-info-text-color);
        line-height: var(--image-info-height);
        margin: 0 20px;
      }
      
      .image-sizing label svg{
          width: 20px;
          height: 20px;
          fill: rgb(155, 155, 155);
      }

      .image-sizing label:hover svg {
        fill: rgb(235, 235, 235);
      }
      
      .image-sizing .clickable {
          cursor: pointer;
      }
        `;

    shadow.appendChild(style);
    shadow.appendChild(this.sizeSpanDiv);
    shadow.appendChild(sizingDiv);
    
    this.shadowRoot.querySelectorAll('.image-sizing__item')
      .forEach(el =>
        el.addEventListener('click', e => {
          sizingDiv.dispatchEvent(new CustomEvent('sizing-action', {
            bubbles: true,
            composed: true,
            detail: e.target.id
          }));
        }));
  }

  update(imgs) {
    imgs.forEach(img => img.active && (this.sizeSpanDiv.innerHTML=`${img.width} x ${img.height}`));
  }
}

customElements.define('lab-img-sizing', GLImagelabSizingElement);