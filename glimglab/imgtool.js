// element refrence section

var settingPanel = document.getElementById("setting-panel");

//side menu items
var resizeBtn = document.getElementById("side-menu__resize");
var spriteBtn = document.getElementById("side-menu__sprite");

//main action buttons
var loadImagesBtn = document.getElementById("load-image-btn");
var fileuploadInput = document.getElementById("fileupload-input");

//work area
var workArea = document.getElementById("work-area");
// image info section labels
var imageSizeLabel = document.getElementById("image-size-label");
var imageFitLabel = document.getElementById("image-fit-size-lable");
var imageOriginalLabel = document.getElementById("image-orignal-size-label");
var imageZoominLabel = document.getElementById("image-zoom-in-label");
var imageZoomoutLabel = document.getElementById("image-zoom-out-label");
// canvas section
var canvasSection = document.getElementById("canvas-section");
var glimgElement = document.getElementById("work-canvas");
// var ctx = canvas.getContext("2d");



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
            drawImageToCanvas(e.target);
            saveImageToLocalStorage(img);
        };
        img.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);    
})

function saveImageToLocalStorage(img){
    localStorage.setItem("image", img.src);
}

function getImageSrcFromLocalStorage() {
    return localStorage.getItem("image");
}

// work area logic
// -- canvas related logic
// function initCanvas() {
//     let image = new Image();
//     image.src = getImageSrcFromLocalStorage();

//     if(image.src) {
//         image.onload = e=>{
//             drawImageToCanvas(e.target);
//         };
//     }else {
//         drawInitalTextToCanvas();
//     }
// }

// function drawInitalTextToCanvas() {
//     setCanvasSize(300, 200);

//     ctx.save();
//     ctx.translate(canvas.width/2, canvas.height/2);
//     ctx.font = "30px Arial";
//     ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text-color");
//     ctx.textAlign = "center";
//     ctx.fillText("load images to start!", 0, 0);
//     ctx.restore();
// }

function positionAndScaleGlimgElement(width, height) {
    glimgElement.width = `${width}px`;
    glimgElement.height = `${height}px`;

    // if (width > canvasSection.Width || height > canvasSection.clientHeight){
    //     canvas.style.top = 0;
    //     canvas.style.left = 0;    
    // }else{
    //     canvas.style.top = "";
    //     canvas.style.left = "";    
    // }
}

function setglimgElementSize(width, height) {
    glimgElement.width = width;
    glimgElement.height = height;

    positionAndScaleGlimgElement(width, height);
}

// function drawImageToCanvas(image) {
//     setCanvasSize(image.width, image.height);
//     ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);    
//     imageSizeLabel.innerHTML = `size: ${image.width} x ${image.height}`;
// }

imageFitLabel.addEventListener("click", e=>{
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
})

imageOriginalLabel.addEventListener("click", e=>{
    positionAndScaleGlimgElement(glimgElement.width, glimgElement.height);
})

imageZoominLabel.addEventListener("click", e=>{
    zoomGlimgElement(1.5);
})

imageZoomoutLabel.addEventListener("click", e=>{
    zoomGlimgElement(1.0/1.5);
})

function zoomGlimgElement(zoomFactor){
    const elWidth = glimgElement.width;
    const elHeight = glimgElement.height;
    let glimgElementWidth = parseInt(elWidth.substr(0, elWidth.length-2));
    let glimgElementHeight = parseInt(elHeight.substr(0, elHeight.length -2));
    glimgElementWidth *= zoomFactor;
    glimgElementHeight *= zoomFactor;
    positionAndScaleGlimgElement(glimgElementWidth, glimgElementHeight);
}

// initCanvas();