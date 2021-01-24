class GLImagelabFilterConfigElement extends HTMLElement {

  constructor() {
    super();
    
    const shadow = this.attachShadow({mode: 'open'}); 

    this.filterConfigDiv = document.createElement('div');
    this.filterConfigDiv.id = "filterConfigDiv";

    this.filterName = "Brightness Filter";
    this.filterConfig = [
                          {"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"},
                          {"name": "color", "type": "color", "value": "#FF0000"}, 
                          {"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"},
                          {"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"},
                          {"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"},
                        ];
    this.filterName = "";
    this.filterConfig = [];
    // this.populateConfig(this.filterName, this.filterConfig);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        --filter-color: rgba(155,155,155,1);
        --filter-color-active: rgba(235,235,235,1);
      }

      #filterConfigDiv {
        width: 100%;
        display: flex;
        flex-flow: column;
        margin-top: 50px;
        padding:20px 0px;
        color: var(--filter-color);
        justify-content: center;

      }

      .filter-config-title {
        font-weight: bold;
        margin-bottom: 20px;
        padding: 0px 40px;
      }

      .filter-config-item {
        margin: 15px 0px;
        padding: 0px 40px 20px 40px;
        display: flex;
        flex-flow: column;
        border-bottom: solid rgb(100, 100, 100) 1px
      }

      .filter-config-item .filter-config-item-label{
        margin-bottom: 10px;
      }

      .filter-config-item .filter-config-item-label .filter-config-item-label-name{
        float: left;
      }

      .filter-config-item .filter-config-item-label .filter-config-item-label-value{
        float: right;
      }

      .filter-config-item-minmax-label-max {
        float: right;
      }

      .filter-config-item .filter-config-color{
        width: 95%;
        // padding: 0px;
      }

    `;

    shadow.appendChild(style);
    shadow.appendChild(this.filterConfigDiv);
  }

  populateConfig () {

    //clean up filterConfigDiv
    while (this.filterConfigDiv.firstChild) {
      this.filterConfigDiv.removeChild(this.filterConfigDiv.firstChild);
    }

    const filterConfigTitleDiv = document.createElement('div');
    filterConfigTitleDiv.className = "filter-config-title";
    this.filterConfigDiv.appendChild(filterConfigTitleDiv);
    const filterConfigTitleLable = document.createElement('label');
    filterConfigTitleLable.textContent = this.filterName;
    filterConfigTitleDiv.appendChild(filterConfigTitleLable);

    this.filterConfig.forEach(config => {
      const filterConfigItemdiv = document.createElement('div');
      filterConfigItemdiv.className = "filter-config-item";
      this.filterConfigDiv.appendChild(filterConfigItemdiv);

      const filterConfigItemLabeldiv = document.createElement('div');
      filterConfigItemLabeldiv.className = "filter-config-item-label";
      filterConfigItemdiv.appendChild(filterConfigItemLabeldiv);

      const filterConfigItemNameLabel = document.createElement('label');
      filterConfigItemNameLabel.className = "filter-config-item-label-name";
      filterConfigItemNameLabel.textContent = config.name;
      filterConfigItemLabeldiv.appendChild(filterConfigItemNameLabel);

      const filterConfigItemValueLabel = document.createElement('label');
      filterConfigItemValueLabel.className = "filter-config-item-label-value";
      filterConfigItemValueLabel.textContent = config.value;
      filterConfigItemLabeldiv.appendChild(filterConfigItemValueLabel);

      const filterConfigItemInput = document.createElement('input');
      filterConfigItemInput.className = "filter-config-slider";
      filterConfigItemInput.type = config.type;
      filterConfigItemdiv.appendChild(filterConfigItemInput);  
      filterConfigItemInput.addEventListener("input", e=> {
        filterConfigItemValueLabel.textContent = e.target.value;
      })

      if (config.type === 'range') {
        filterConfigItemInput.min = config.min;
        filterConfigItemInput.max = config.max;
        filterConfigItemInput.step = config.step;
        filterConfigItemInput.value = config.value;

        const filterConfigItemMinMaxLabeldiv = document.createElement('div');
        filterConfigItemMinMaxLabeldiv.className = "filter-config-item-minmax-label";
        filterConfigItemdiv.appendChild(filterConfigItemMinMaxLabeldiv);

        const filterConfigItemMinValueLabel = document.createElement('label');
        filterConfigItemMinValueLabel.className = "filter-config-item-minmax-label-min";
        filterConfigItemMinValueLabel.textContent = config.min;
        filterConfigItemMinMaxLabeldiv.appendChild(filterConfigItemMinValueLabel);
  
        const filterConfigItemMaxValueLabel = document.createElement('label');
        filterConfigItemMaxValueLabel.className = "filter-config-item-minmax-label-max";
        filterConfigItemMaxValueLabel.textContent = config.max;
        filterConfigItemMinMaxLabeldiv.appendChild(filterConfigItemMaxValueLabel);
        
      }
      if (config.type === 'color') {
        filterConfigItemInput.className = "filter-config-color";
        filterConfigItemInput.value = config.value;
      }
      
    })
  
  }

  // update (imgs) {
  //   imgs.filter(img => img.active).map(img => this.populateFilters(img.filters));
  // }
}

customElements.define('lab-filter-config', GLImagelabFilterConfigElement);