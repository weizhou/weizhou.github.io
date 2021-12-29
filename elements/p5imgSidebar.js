class P5imgSideBarElement extends HTMLElement {

    constructor() {
      super();
      
      this.sideBar = document.createElement('div');
      this.sideBar.id = "sidebarDiv";

      this.filters = {
        "Color Filters": [
            {"BrightnessFilter": {}},
            {"ChromakeyingFilter": {}},
            {"ColorInversionFilter": {}},
            {"ColormatrixFilter": {}},
            {"ContrastFilter": {}},
            {"ExposureFilter": {}},
            {"FalseColorFilter": {}},
            {"p5GammaFilter": {}},
            {"p5GrayscaleFilter": {}},
            {"p5HazeFilter": {}},
            {"p5HighlightShadowFilter": {}},
            {"p5HighlightShadowTintFilter": {}},
            {"p5HueFilter": {}},
            {"p5LevelsFilter": {}},
            {"p5LuminanceThresholdFilter": {}},
            {"p5MonochromeFilter": {}},
            {"p5OpacityFilter": {}},
            {"p5RGBFilter": {}},
            {"p5SaturationFilter": {}},
            {"p5SepiaToneFilter": {}},
            {"p5TemperatureFilter": {}},
            {"p5TintFilter": {}},
            {"p5VibranceFilter": {}}
        ],
        "Image Processing": [
            {"AdaptiveThresholdFilter": {}},
            {"AverageColorFilter": {}},
            {"BilateralBlurFilter": {}},
            {"BlockBlurFilter": {}},
            {"BlockFilter": {}},
            {"BoxBlurFilter": {}},
            {"CannyEdgeFilter": {}},
            {"ClosingFilter": {}},
            {"ColorLocalBinaryPatternFilter": {}},
            {"ColourFASTSamplingFilter": {}},
            {"ConvFilter": {}},
            {"CropFilter": {}},
            {"DilationFilter": {}},
            {"EmbossFilter": {}},
            {"ErosionFilter": {}},
            {"GaussianBlurFilter": {}},
            {"HarrisCornerDetectionFilter": {}},
            {"LanczosResamplingFilter": {}},
            {"LocalBinaryPatternFilter": {}},
            {"MedianFilter": {}},
            {"MotionBlurFilter": {}},
            {"NobleCornerDetectionFilter": {}},
            {"NonMaximumSuppressionFilter": {}},
            {"OpeningFilter": {}},
            {"PrewittEdgeFilter": {}},
            {"RadiusFilter": {}},
            {"SharpenFilter": {}},
            {"ShiTomasiFeatureDetectionFilter": {}},
            {"SobelEdgeFilter": {}},
            {"TiltShiftFilter": {}},
            {"WeakPixelInclusionFilter": {}},
            {"XYDerivativeFilter": {}},
            {"ZoomBlurFilter": {}}
        ],
        "Visual Effects": [
            {"BulgeFilter": {}},
            {"CGAColorSpaceFilter": {}},
            {"CrosshatchFilter": {}},
            {"GlassSphereRefractionFilter": {}},
            {"HalftoneFilter": {}},
            {"KuwaharaFilter": {}},
            {"PixellationFilter": {}},
            {"PolarPixellateFilter": {}},
            {"PolkaDotFilter": {}},
            {"PosterizeFilter": {}},
            {"SketchFilter": {}},
            {"SmoothToonFilter": {}},
            {"SolarizeFilter": {}},
            {"SphereRefractionFilter": {}},
            {"StretchFilter": {}},
            {"SwirlFilter": {}},
            {"ThresholdSketchFilter": {}},
            {"ToonFilter": {}},
            {"VignetteFilter": {}}
        ]
      };

      this.filtersTemplate =      
      `
      <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
      <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span class="fs-5 fw-semibold">Filters</span>
      </a>
      <ul class="list-unstyled ps-0">
        <<filter catagory>>
      </ul>
    </div>
      `;

      this.filterCatagoryTemplate = `
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#<<filter catagory id>>-collapse" aria-expanded="true">
            <<filter catagory>>
        </button>
        <div class="collapse show" id="<<filter catagory id>>-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <<filters>>
            </ul>
        </div>
      </li>      
      `;

      const style = document.createElement('style');
      style.textContent = `

      `
      ;

      let sideBarHTML = "";
      let filterCatagoryHTML = "";
      for(const [filterCatagory, filterList] of Object.entries(this.filters)){
        let filterListHTML = "";
        for (const filter of filterList){
            let filterHTML = `
            <li><a href="#" class="link-dark rounded">${Object.keys(filter)[0]}</a></li>
            `
            filterListHTML = filterListHTML + filterHTML;
        }
        let filterHTML = "";
        filterHTML = this.filterCatagoryTemplate.replace("<<filter catagory>>", filterCatagory);
        filterHTML = filterHTML.replace(/<<filter catagory id>>/g, filterCatagory.replace(" ", "-"));
        filterHTML = filterHTML.replace("<<filters>>", filterListHTML);
        filterCatagoryHTML = filterCatagoryHTML + filterHTML;
      }

      sideBarHTML = this.filtersTemplate.replace("<<filter catagory>>", filterCatagoryHTML);
      this.sideBar.innerHTML = sideBarHTML;

      this.appendChild(style);
      this.appendChild(this.sideBar);
    }
}

customElements.define('p5img-sidebar', P5imgSideBarElement);