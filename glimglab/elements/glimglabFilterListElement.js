class GLImagelabFilterListElement extends HTMLElement {

  constructor(filters) {
    super();
    
    const shadow = this.attachShadow({mode: 'open'}); 

    const filtersDiv = document.createElement('div');
    filtersDiv.id = "filtersDiv";
    this.populateFilters(filtersDiv, filters);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        --filter-color: rgba(155,155,155,1);
        --filter-color-active: rgba(235,235,235,1);
      }

      #filtersDiv {
        height: calc(100vh - var(--header-height) - var(--footer-height) - 20px);
      }

      .filter-list {
        height: 100%;
      }
    
      .filter-list ul {
        padding: 0px;
        margin: 0px;
        padding-top: 50px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
      }

      /* Hide scrollbar for Chrome, Safari and Opera */
      .filter-list ul::-webkit-scrollbar {
          display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      .filter-list ul {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }

      .filter-list ul .filter__item {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
      }

      .filter-list ul .filter__item span {
        line-height: 50px;
        color: var(--filter-color);
        pointer-events: none;
      }

      .filter-list ul .filter__item svg {
        float: right;
        fill: var(--filter-color-active);
        display: none;
        pointer-events: none;
      }

      .filter-list ul .filter__item:hover {
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
      }

      .filter-list ul .filter__item:hover span {
        color: var(--filter-color-active);
      }

      .filter-list ul .filter__item:hover svg {
        display: block;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(filtersDiv);
  }

  populateFilters (filtersDiv, filters) {

    const filterListDiv = document.createElement('div');
    filterListDiv.className = "filter-list";
    filtersDiv.appendChild(filterListDiv);
    const ulElement = document.createElement('ul');
    filterListDiv.appendChild(ulElement);    
    
    filters.forEach(filter => {

      const filterItem = document.createElement('li');
      filterItem.className = "filter__item";
      filterItem.id = filter;
      filterItem.addEventListener('click', e=>
        alert(`clicked ${e.target.id}`)
      );

      const spanElement = document.createElement('span');
      spanElement.innerText = filter;
      spanElement.setPointerCapture
      
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute('width', '10pt');
      svgElement.setAttribute('height', '10pt');
      svgElement.setAttribute('viewBox', '0 0 448 448');
      svgElement.innerHTML = `<path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/>`;

      filterItem.appendChild(spanElement);
      filterItem.appendChild(svgElement);

      ulElement.appendChild(filterItem);

    });
  }
}

customElements.define('lab-filter-list', GLImagelabFilterListElement);