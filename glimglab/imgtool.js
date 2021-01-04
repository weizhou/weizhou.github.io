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

// resizeBtn.addEventListener("click", e=>{
//     if(displaySettingPanel){
//         hideSettingPanel();
//     }else {
//         showSettingPanel();
//     }
// })

function hideSettingPanel() {
    settingPanel.style.display = "none";
    workArea.style.width = `${workArea.clientWidth + settingPanelWidth}px`;
    displaySettingPanel = false;
}

function showSettingPanel() {
    workArea.style.width = `${workArea.clientWidth - settingPanelWidth}px`;
    settingPanel.style.display = "block";
    displaySettingPanel = true;
}

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
            glimgService.addImg(img.src);
            createGlimgElement(img.src);
        };
        img.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);    
})

function saveImageToLocalStorage(img){
    let imgCount = 0;
    if(localStorage.getItem('imgCount')) {
        imgCount = parseInt(localStorage.getItem("imgCount"));
    }

    localStorage.setItem(`image${imgCount}`, img.src);
    localStorage.setItem("imgCount", ++imgCount);
}

function getImageSrcFromLocalStorage() {
    let imgCount = localStorage.getItem('imgCount');
    return localStorage.getItem(`image${imgCount-1}`);
}

imageSizingBar.addEventListener("sizing-action", e=>{
    switch (e.detail){
        case "fit":
            fitImage();
            break;
        case "original":
            originalImage();
            break;
        case "zoomin":
            zoominImage();
            break;
        case "zoomout":
            zoomoutImage();
            break;
    }
});

function positionAndScaleGlimgElement(width, height) {
    glimgElement.width = `${width}px`;
    glimgElement.height = `${height}px`;
}

function setglimgElementSize(width, height) {
    glimgElement.width = width;
    glimgElement.height = height;

    positionAndScaleGlimgElement(width, height);
}

function drawImageToCanvas(image) {
    setCanvasSize(image.width, image.height);
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);    
    imageSizeLabel.innerHTML = `size: ${image.width} x ${image.height}`;
}

function fitImage() {
    let imageAspect = glimgElement.canvasWidth / glimgElement.canvasHeight;
    let canvasSectionAspect = (canvasSection.offsetWidth-2) / (canvasSection.offsetHeight-2);
    let glimgElementWidth = canvasSection.offsetWidth-2;
    let glimgElementHeight = canvasSection.offsetHeight-2;
    if(imageAspect >= canvasSectionAspect){
        glimgElementHeight = glimgElementWidth / imageAspect;
    }else{
        glimgElementWidth = glimgElementHeight * imageAspect;
    }
    positionAndScaleGlimgElement(glimgElementWidth, glimgElementHeight);
}

function originalImage() {
    positionAndScaleGlimgElement(glimgElement.width, glimgElement.height);
}

function zoominImage() {
    zoomGlimgElement(1.5);
}

function zoomoutImage() {
    zoomGlimgElement(1.0/1.5);
}

function zoomGlimgElement(zoomFactor){
    const elWidth = glimgElement.width;
    const elHeight = glimgElement.height;
    let glimgElementWidth = parseInt(elWidth.substr(0, elWidth.length-2));
    let glimgElementHeight = parseInt(elHeight.substr(0, elHeight.length -2));
    glimgElementWidth *= zoomFactor;
    glimgElementHeight *= zoomFactor;
    positionAndScaleGlimgElement(glimgElementWidth, glimgElementHeight);
}

function updateGlimgElementSrc(img){
    glimgElement.src = img;
}

function createGlimgElement(imgSrc, filters=null) {
    canvasSection.innerHTML = "";
    glimgElement = new GLImageElement();
    glimgElement.src = imgSrc;
    glimgElement.id = "work-canvas";
    glimgElement.onload = ()=>{fitImage();}
    canvasSection.appendChild(glimgElement);
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
    createGlimgElement("./assets/images/canvas_init.jpg");
})();

