class GLImagelabImageListElement extends HTMLElement {

  constructor() {
    super();
    
    const shadow = this.attachShadow({mode: 'open'}); 

    const imgsDiv = document.createElement('div');
    imgsDiv.id = "imgsDiv";
    this.populateImages(imgsDiv, glimgService.getImgs());

    const style = document.createElement('style');
    style.textContent = `
      :host {
        --img-width: 160px;
        --img-height: 40px;

      }
    
      .img-list ul {
          display: flex;
          flex-direction: column;
          margin: 0px;
          padding: 0px;
          padding-top: 20px;
      }
      
      .img-list .img__item {
          display: flex;
          flex-direction: column;
          list-style-type: none;
          align-items: center;
          justify-content: center;
          margin: 30px 0px;
          cursor: pointer;
      }
         
      .img-list .img__item img {
        width: var(--img-width);
        // height: var(--img-height);
      }

      .img-list .img__item.active img {
        border: 3px solid green;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(imgsDiv);
  }

  populateImages (imgsDiv, imgs) {
    let innerHTML = `
      <div class="img-list">
        <ul>
          imgcontent
        </ul>
      </div>
    `
    let imgContent = "";
    imgs.forEach(item => {
      if(item.img){
        imgContent += `
          <li class="img__item ${item.active ? "active": ""}" id="img${item.id}">
            <img src=${item.img}>
          </li>      
        `;
      }
    });

    innerHTML = innerHTML.replace(/imgcontent/g, imgContent);

    imgsDiv.innerHTML = innerHTML;
  }


  update(imgs){
    let imgsDiv = this.shadowRoot.querySelector("#imgsDiv");
    this.populateImages(imgsDiv, imgs);
  }
}

customElements.define('lab-img-list', GLImagelabImageListElement);