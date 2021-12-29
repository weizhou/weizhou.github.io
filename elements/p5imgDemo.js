class P5imgDemoElement extends HTMLElement {

    constructor() {
      super();
      
      this.demo = document.createElement('div');
      this.demo.id = "demoDiv";
  
      this.demo.innerHTML =       
      `
      <div class="demo-container">

        <div class="demo-original-img">
          <p5-img src="./images/lenna.png" height="350"> </p5-img>
        </div>

        <div class="demo-processed-img">
          <p5-img src="./images/lenna.png" height="350"
            filters='{"SolarizeFilter": {"threshold": 0.5}}'> 
          </p5-img>
        </div>

        <div class="demo-original-img-caption">
           Original image
        </div>

        <div class="demo-processed-img-caption">
           Applied Solarized filter
        </div>

        <div class="demo-code-block">
<pre><code>
&lt;p5-img src="./lenna.png" height="350"
  filters='{"SolarizeFilter": {"threshold": 0.5}}'&gt; 
&lt;/p5-img&gt;
</code></pre>
        </div>
  
        <div class="demo-filter-param">
          <label class="demo-filter-param-label">filter settings: </label>
          <textarea class="demo-filter-param-textarea">{"threshold": 0.5}</textarea>
        </div>

        <div class="demo-buttons">
          <button class="btn btn-primary">run </button>
          <button class="btn btn-primary">reset </button>
        </div>

      </div>
      `;

      const style = document.createElement('style');
      style.textContent = `
      `
      ;
      this.appendChild(style);
      this.appendChild(this.demo);
    }
}

customElements.define('p5img-demo', P5imgDemoElement);