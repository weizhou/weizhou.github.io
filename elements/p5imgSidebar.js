class P5imgSideBarElement extends HTMLElement {

    constructor() {
      super();
      
      this.sideBar = document.createElement('div');
      this.sideBar.id = "sidebarDiv";


      this.sidebarTemplate =      
      `
      <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
      <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span class="fs-5 fw-semibold"><<nav type>></span>
      </a>
      <ul class="list-unstyled ps-0">
        <<nav category list>>
      </ul>
    </div>
      `;

      this.navCategoryTemplate = `
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#<<nav category id>>-collapse" aria-expanded="true">
            <<nav category>>
        </button>
        <div class="collapse show" id="<<nav category id>>-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <<nav items>>
            </ul>
        </div>
      </li>      
      `;

      this.style1 = document.createElement('style');
      this.style1.textContent = ``;

      this.update("Filter");
    }

    update(navType) {
        let service = new P5ImgService();
        let navContent = service.getNavContent(navType);

        let sidebarHTML = "";
        let navCategoryListHTML = "";
        for(const [navCategory, navItemObjects] of Object.entries(navContent)){
          let navItemListHTML = "";
          for (const [navItemName, navItemParam] of Object.entries(navItemObjects)){
              let navItemHTML = `
              <li><a href="#" class="link-dark rounded" id="${navItemName}" onclick="choose${navType}('${navItemName}')">${navItemName}</a></li>
              `            
              navItemListHTML = navItemListHTML + navItemHTML;
          }
          let navCategoryHTML = "";
          navCategoryHTML = this.navCategoryTemplate.replace("<<nav category>>", navCategory)
                                                    .replace(/<<nav category id>>/g, navCategory.replace(" ", "-"))          
                                                    .replace("<<nav items>>", navItemListHTML);
          navCategoryListHTML = navCategoryListHTML + navCategoryHTML;
        }
  
        sidebarHTML = this.sidebarTemplate.replace("<<nav type>>", navType)
                                      .replace("<<nav category list>>", navCategoryListHTML);
        this.sideBar.innerHTML = sidebarHTML;

        this.appendChild(this.style1);
        this.appendChild(this.sideBar);
    }
}

customElements.define('p5img-sidebar', P5imgSideBarElement);