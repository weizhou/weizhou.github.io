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
  
        <div class="">
        textarea for filter parameters
        </div>

        <div class="">
          run button, reset button
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