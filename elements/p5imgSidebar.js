class P5imgSideBarElement extends HTMLElement {

    constructor() {
      super();
      
      this.sideBar = document.createElement('div');
      this.sideBar.id = "sidebarDiv";
  
      this.sideBar.innerHTML = 
      
      `
      <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
      <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span class="fs-5 fw-semibold">P5-Image</span>
      </a>
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            Color Filters
          </button>
          <div class="collapse show" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Overview</a></li>
              <li><a href="#" class="link-dark rounded">Updates</a></li>
              <li><a href="#" class="link-dark rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Image Processing
          </button>
          <div class="collapse" id="dashboard-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Overview</a></li>
              <li><a href="#" class="link-dark rounded">Weekly</a></li>
              <li><a href="#" class="link-dark rounded">Monthly</a></li>
              <li><a href="#" class="link-dark rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Visual Effects
          </button>
          <div class="collapse" id="orders-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New</a></li>
              <li><a href="#" class="link-dark rounded">Processed</a></li>
              <li><a href="#" class="link-dark rounded">Shipped</a></li>
              <li><a href="#" class="link-dark rounded">Returned</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
      `;

      const style = document.createElement('style');
      style.textContent = `

      `
      ;
      this.appendChild(style);
      this.appendChild(this.sideBar);
    }
}

customElements.define('p5img-sidebar', P5imgSideBarElement);