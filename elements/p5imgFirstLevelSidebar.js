class P5imgFirstLevelSideBarElement extends HTMLElement {

    constructor() {
      super();
      
      this.firstLevelSideBar = document.createElement('div');
      this.firstLevelSideBar.id = "firstLevelSidebarDiv";

      this.html =      
      `
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="imageFilter" viewBox="0 0 16 16">
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
        </symbol>
        <symbol id="imageBlender" viewBox="0 0 16 16">
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
        </symbol>
        <symbol id="video" viewBox="0 0 16 16">
          <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
          <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
          <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </symbol>
      </svg>

      <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 60px;">
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
            <a id="first-level-sidebar-filter" onclick="chooseNavType('Filter')" href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="filters" data-bs-toggle="tooltip" data-bs-placement="right">
              <svg class="bi" width="24" height="24" role="img" aria-label="image filter"><use xlink:href="#imageFilter"/></svg>
            </a>
          </li>
          <li>
            <a id="first-level-sidebar-blender" onclick="chooseNavType('Blender')" href="#" class="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
              <svg class="bi" width="24" height="24" role="img" aria-label="image blender"><use xlink:href="#imageBlender"/></svg>
            </a>
          </li>
<!--
          <li>
            <a id="first-level-sidebar-video" onclick="chooseNavType('Video')" href="#" class="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
              <svg class="bi" width="24" height="24" role="img" aria-label="video"><use xlink:href="#video"/></svg>
            </a>
          </li>
-->          
        </ul>
    </div>
  
      `;

      const style = document.createElement('style');
      style.textContent = `

      `
      ;

      this.firstLevelSideBar.innerHTML = this.html;

      this.appendChild(style);
      this.appendChild(this.firstLevelSideBar);
    }
}

customElements.define('p5img-first-level-sidebar', P5imgFirstLevelSideBarElement);