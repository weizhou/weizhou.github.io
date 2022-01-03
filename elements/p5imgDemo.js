class P5imgDemoElement extends HTMLElement {

  static get observedAttributes() { return ['itemType', 'itemName', 'itemSetting']; }
  
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'itemType':
        break;
      case 'itemName':
        break;
      case 'itemSetting':
        break;
    }
  }

  get itemType() {
    return this.getAttribute('itemType');
  }
  
  set itemType(newValue) {
    this.setAttribute('itemType', newValue);
  }

  get itemName() {
    return this.getAttribute('itemName');
  }
  
  set itemName(newValue) {
    this.setAttribute('itemName', newValue);
  }

  get itemSetting() {
    return this.getAttribute('itemSetting');
  }
  
  set itemSetting(newValue) {
    this.setAttribute('itemSetting', newValue);
  }

  constructor() {
    super();
    
    this.init();

    this.demo = document.createElement('div');
    this.demo.id = "demoDiv";

    this.demo.innerHTML =  this.createDemoHTML();

    const style = document.createElement('style');
    style.textContent = `
    `
    ;
    this.appendChild(style);
    this.appendChild(this.demo);

    this.addEventHandlers();
  }

  init(){
    this.htmlTemplate = `
    <div class="demo-container">
  
    <div class="demo-img-container">
      <div class="demo-original-img">
        <div id="demo-original-img">
          <<original image>>
        </div>
        <div class="demo-original-img-caption">
          image
        </div>
      </div>

      <div class="demo-original-img" id="demo-overlay-image" style="display:none"}>
        <div>
          <img src="./images/dog.jpg" style="height: 300px"> </img>
        </div>
        <div class="demo-original-img-caption">
          overlay image
        </div>
      </div>

      <div class="demo-processed-img">
        <div id="demo-processed-img">
          <<processed image>>
        </div>
        <div class="demo-processed-img-caption" id="demo-processed-img-caption">
          <<processed image caption>>
        </div>
      </div>
    </div>

    <div class="demo-code-block" >
<pre><code id="demo-code-block"><<code block>></code></pre>
    </div>

    <div class="demo-item-param-container">
      <div class="demo-item-param">
        <label class="demo-item-param-label">Settings: </label>
        <<demo-item-param-textarea>>
      </div>

      <div class="demo-buttons">
        <button class="btn btn-primary" id="runBtn">run</button>
        <button class="btn btn-primary" id="resetBtn">reset</button>
      </div>
    </div>

  </div>
  `;
  }

  get filterOriginalImageHTML() {
    return `
  <div>
    <img src="./images/mushroom.png" style="height: 300px"> </img>
  </div>`;
  }

  get blenderOriginalImageHTML() {
    return `
  <div>
    <img src="./images/mushroom.png" style="height: 300px"> </img>
  </div>`;
  }

  get originalImageHTML() {
    switch (p5ImageState.navType) {
      case "Filter":
        return this.filterOriginalImageHTML;
      case "Blender":
        return this.blenderOriginalImageHTML;
    }   
  }


  get filteredImageHTML() {
    return `
    <p5-img src="./images/mushroom.png" height="300"
      filters='{"${p5ImageState.filterName}": ${p5ImageState.filterSetting}}'> 
    </p5-img>
    `;
  }

  get blenderedImageHTML() {
    return `
    <p5-img-blend src1="./images/mushroom.png" src2="./images/dog.jpg" height="300"
     mode="${p5ImageState.blenderName}" param='${p5ImageState.blenderSetting}'>
    </p5-img-blend>
    `;
  }

  get processedImageHTML() {
    switch (p5ImageState.navType) {
      case "Filter":
        return this.filteredImageHTML;
      case "Blender":
        return this.blenderedImageHTML;
    }
  }

  get processedImgCaptionHTML() {
    return `Applied ${this.itemName}`;
  } 

  get filterCodeBlockHTML() {
return `&lt;p5-img src="./mushroom.png" height="300"
filters='{"${this.itemName}": ${this.itemSetting}}'&gt; 
&lt;/p5-img&gt;`;
  } 


  get blenderCodeBlockHTML() {
return `&lt;p5-img-blend src1="./images/mushroom.png" src2="./images/dog.png" height="300"
  mode="${p5ImageState.blenderName}" param='${p5ImageState.blenderSetting}'&gt;
&lt;/p5-img-blend&gt;`;
  } 

  get codeBlockHTML() {
    switch (p5ImageState.navType) {
      case "Filter":
        return this.filterCodeBlockHTML;
      case "Blender":
        return this.blenderCodeBlockHTML;
    }
  }
    

  get paramTextareaHTML() { 
    return `<textarea class="demo-item-param-textarea" id="demo-item-param-textarea">${this.itemSetting}</textarea>`;
  }



  createDemoHTML(){
    return this.htmlTemplate.replace("<<original image>>", this.originalImageHTML)
                            .replace("<<processed image>>", this.processedImageHTML)
                            .replace("<<processed image caption>>", this.processedImgCaptionHTML)
                            .replace("<<code block>>", this.codeBlockHTML)
                            .replace("<<demo-item-param-textarea>>",  this.paramTextareaHTML);
  }

  addEventHandlers() {
    document.getElementById("runBtn").addEventListener("click", ()=>{
      let itemSetting = document.getElementById("demo-item-param-textarea").value;     
      switch (p5ImageState.navType) {
        case "Filter":
          p5ImageState.filterSetting = itemSetting;
          break;
        case "Blender":
          p5ImageState.blenderSetting = itemSetting;
          break;
      }
      this.update();
    });

    document.getElementById("resetBtn").addEventListener("click", ()=>{
      let navType = p5ImageState.navType;      
      let service = new P5ImgService();
      switch (navType) {
        case "Filter":
          let expandedFilters = service.getExpandedFilters();
          this.itemSetting = JSON.stringify(expandedFilters[this.itemName]);
          p5ImageState.filterSetting = this.itemSetting;
          break;
        case "Blender":
          let expandedBlenders = service.getExpandedBlenders();
          this.itemSetting = JSON.stringify(expandedBlenders[this.itemName]);
          p5ImageState.blenderSetting = this.itemSetting;
          break;
      }

      this.update(navType, this.itemName, this.itemSetting);
    });
  }

  updateTextArea(html) {
    let textArea = document.getElementById("demo-item-param-textarea");
    textArea.value =html;
  }

  update() {    
    let originalImage = document.getElementById("demo-original-img");
    let processedImg = document.getElementById("demo-processed-img");
    let codeBlock = document.getElementById("demo-code-block");
    let processedImgCaption = document.getElementById("demo-processed-img-caption");
    let overlayImage = document.getElementById("demo-overlay-image");

    if(p5ImageState.navType === "Filter") {
      overlayImage.style.display = "none";
      this.itemName = p5ImageState.filterName;
      this.itemSetting = p5ImageState.filterSetting;
    }else {
      overlayImage.style.display = "flex";
      this.itemName = p5ImageState.blenderName;
      this.itemSetting = p5ImageState.blenderSetting;
    }
    originalImage.innerHTML = this.originalImageHTML;
    processedImg.innerHTML =  this.processedImageHTML;
    codeBlock.innerHTML = this.codeBlockHTML;
    processedImgCaption.innerHTML = this.processedImgCaptionHTML;
    this.updateTextArea(this.itemSetting);
  }

}

customElements.define('p5img-demo', P5imgDemoElement);