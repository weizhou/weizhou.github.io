class GLImagelabFilterBarElement extends HTMLElement {

  constructor(filters) {
    super();
    
    const shadow = this.attachShadow({mode: 'open'}); 

    this.filtersBar = document.createElement('div');
    this.filtersBar.id = "filtersDiv";
    if(!filters) filters = [];
    this.populateFilters(filters);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        --filter-color: rgba(155,155,155,1);
        --filter-color-hover: rgba(205,205,205,1);
        --filter-color-active: rgba(255,255,255,1);
      }

      #filtersDiv {
        height: 50px;
      }

      .filter-list {
        padding: 0px;
        margin: 0px;
        height: 100%;
        display: flex;
        background-color: green;
        overflow-x: hidden;
        overflow-y: scroll;
      }
    

      /* Hide scrollbar for Chrome, Safari and Opera */
      .filter-list::-webkit-scrollbar {
          display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      .filter-list {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }

      .filter-list .filter__item {
        list-style-type: none;
        display: flex;
        width: 200px;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
      }

      .filter-list .filter__item span {
        line-height: 50px;
        color: var(--filter-color);
        // pointer-events: none;
      }

      .filter-list .filter__item svg {
        fill: var(--filter-color-hover);
        display: none;
        // pointer-events: none;
      }

      .filter-list .filter__item:hover {
        background-color: rgba(255, 255, 255, 0.2);
        // cursor: pointer;
      }

      .filter-list .filter__item:hover span {
        color: var(--filter-color-hover);
        cursor: pointer;
      }

      .filter-list .filter__item .span-selected {
        color: var(--filter-color-active);
      }

      .filter-list .filter__item:hover span:hover {
        color: var(--filter-color-active);
        cursor: pointer;
      }


      .filter-list .filter__item:hover svg {
        display: inline;
        cursor: pointer;
      }

      .filter-list .filter__item:hover svg:hover {
        fill: var(--filter-color-active);
      }

    `;

    shadow.appendChild(style);
    shadow.appendChild(this.filtersBar);
  }

  populateFilters (filters, selectedFilter) {

    //clean up filtersBar
    while (this.filtersBar.firstChild) {
      this.filtersBar.removeChild(this.filtersBar.firstChild);
    }

    const filterBarDiv = document.createElement('div');
    filterBarDiv.className = "filter-list";
    this.filtersBar.appendChild(filterBarDiv);
    
    filters.forEach((filter, index) => {

      const filterItem = document.createElement('div');
      filterItem.className = "filter__item";
      filterItem.id = index;

      const spanElement = document.createElement('span');
      if(index === selectedFilter){
        spanElement.classList.add('span-selected');
      }
      spanElement.innerText = filter.name;
      spanElement.setPointerCapture
      spanElement.addEventListener('click', e=>glimgService.selectFilter(parseInt(e.target.parentNode.id)));
      
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute('width', '10pt');
      svgElement.setAttribute('height', '10pt');
      svgElement.setAttribute('viewBox', '0 0 448 448');
      svgElement.innerHTML = `<path d="M459.313,229.648c0,22.201-17.992,40.199-40.205,40.199H40.181c-11.094,0-21.14-4.498-28.416-11.774
      C4.495,250.808,0,240.76,0,229.66c-0.006-22.204,17.992-40.199,40.202-40.193h378.936
      C441.333,189.472,459.308,207.456,459.313,229.648z"/>`;
      svgElement.addEventListener("click", e => {
        glimgService.removeFilter(parseInt(e.target.parentNode.id));
        // glimglabNavService.setSelectedNavItem("side-menu_image");
      });

      filterItem.appendChild(spanElement);
      filterItem.appendChild(svgElement);

      filterBarDiv.appendChild(filterItem);

    });
  }

  update (event, imgs) {
    imgs.filter(img => img.active).map(img => this.populateFilters(img.filters, img.selectedFilter));
  }
}

customElements.define('lab-filter-bar', GLImagelabFilterBarElement);