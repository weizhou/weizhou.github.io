// element refrence section

var navPanel = document.getElementById("nav-panel");
var settingPanel = document.getElementById("setting-panel");

//main action buttons
var loadImagesBtn = document.getElementById("load-image-btn");
var fileuploadInput = document.getElementById("fileupload-input");

//work area
var workArea = document.getElementById("work-area");
var imageSizingBar = document.getElementById("img-sizing-bar");

// canvas section
var canvasSection = document.getElementById("canvas-section");

// setting panel logic: show and hide panel
var settingPanelWidth = settingPanel.clientWidth;
var displaySettingPanel = true;

// main action logic
// --load image
loadImagesBtn.addEventListener("click", e=>{
    fileuploadInput.click();
})

fileuploadInput.addEventListener("input", e => {
    let uploadFilename = fileuploadInput.value;
    uploadFilename = uploadFilename.substr(uploadFilename.lastIndexOf('\\') + 1).split('.')[0];

    let reader = new FileReader();
    reader.onload = function(){
        let img = new Image();
        img.onload = e=>{
            glimgService.addImg(img);
            initCanvas(img.src);
        };
        img.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);    
})

imageSizingBar.addEventListener("sizing-action", e=>{
    const canvasElement = canvasSection.firstChild;
    switch (e.detail){
        case "fit":
            canvasElement.fitSize(canvasSection.offsetWidth, canvasSection.offsetHeight);
            break;
        case "original":
            canvasElement.originalSize();
            break;
        case "zoomin":
            canvasElement.zoomin();
            break;
        case "zoomout":
            canvasElement.zoomout();
            break;
    }
});

glimgService.subscribe(imageSizingBar);

function updateGlimgElementSrc(img){
    glimgElement.src = img;
}

function initCanvas(imgSrc, filters=null) {
    while (canvasSection.firstChild) {
        canvasSection.removeChild(canvasSection.firstChild);
    }

    const canvasElement = new GLImagelabCanvasElement();
    canvasElement.onload = ()=>{
        canvasElement.fitSize(canvasSection.offsetWidth, canvasSection.offsetHeight);
    }
    canvasElement.populateImages(imgSrc);
    canvasElement.style = "width: 100%; height: 100%; display: flex; justify-content: center; align-items: center";

    canvasSection.appendChild(canvasElement);
}

function initNavPanel() {
    navElement = new GLImagelabNavElement();
    navPanel.appendChild(navElement);

}
async function initImagesPanel() {
    imagePanel = new GLImagelabImageListElement();
    imagePanel.id = "setting-panel_image";
    glimgService.subscribe(imagePanel);
    settingPanel.appendChild(imagePanel);
}

function initFiltersPanel() {
    colorAdjustmentFilterPanel = new GLImagelabFilterListElement(glimglabFiltersService.colorAdjustFilters);
    colorAdjustmentFilterPanel.id = "setting-panel_color_adjustment";
    colorAdjustmentFilterPanel.style = "display: none";
    imageProcessingFilterPanel = new GLImagelabFilterListElement(glimglabFiltersService.imageProcessingFilters);
    imageProcessingFilterPanel.id = "setting-panel_image_processing";
    imageProcessingFilterPanel.style = "display: none";
    settingPanel.appendChild(colorAdjustmentFilterPanel);
    settingPanel.appendChild(imageProcessingFilterPanel);
}

function initSettingPanel() {
    initImagesPanel();
    initFiltersPanel();
    settingPanel.updateNav = (selectedItem) => {
        selectedItem = selectedItem.replace(/side-menu/g, "setting-panel");
        settingPanel.childNodes.forEach(node => {
            node.style="display: none";
        });
        document.getElementById(selectedItem).style.display = "block";
        
    }
    glimglabNavService.subscribe(settingPanel);
}

(() => {
    initNavPanel();
    initSettingPanel();
    initCanvas("./assets/images/canvas_init.jpg");
})();

