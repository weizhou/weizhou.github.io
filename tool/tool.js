const uploadBtn = document.getElementById("upload-btn")
const uploadFileinput = document.getElementById("upload-input");
const spriteUploadBtn = document.getElementById("sprite-upload-btn");
const spriteUploadFilesInput = document.getElementById("sprite-upload-input");
const imagePreview = document.getElementById('image-preview');
const spriteImagePreview = document.getElementById("sprite-image-preview");
const resizeBtn = document.getElementById("resize-btn");
const convertBtn = document.getElementById("convert-btn");
const canvasDiv = document.getElementById("canvas-div");
const canvas = document.getElementById("canvas-image");
const resizeTab = document.getElementById("resize-tab");
const spriteTab = document.getElementById("sprite-tab");
const resizeContainer = document.getElementById("resize-container");
const spriteContainer = document.getElementById("sprite-container");
const downloadFilenameInput = document.getElementById("download-file-name")
const spriteSettingDiv = document.getElementById("sprite-setting-div");

var uploadFilename;

imagePreview.style.width = "40%";
imagePreview.style.minHeight = "200px";
resizeBtn.style.display = "none";
canvasDiv.style.display = "none";
resizeContainer.style.display = "flex";

var tabs = [resizeTab, spriteTab];
var containers = [resizeContainer, spriteContainer];
var selectedTab = 0;

spriteContainer.style.display = "none";

uploadBtn.addEventListener("input", e => {
    uploadFilename = uploadFileinput.value;
    uploadFilename = uploadFilename.substr(uploadFilename.lastIndexOf('\\') + 1).split('.')[0];

    var reader = new FileReader();
    reader.onload = function(){
        uploadBtn.style.lineHeight = "40px";

        imagePreview.src = reader.result;
        
        resizeBtn.style.display = "flex";
        resizeBtn.style.justifyContent = "center";
        canvasDiv.style.display = "block";
    }
    reader.readAsDataURL(e.target.files[0]);    

})

convertBtn.addEventListener("click", e=>{
    canvas.width = canvas.height = 0;
    let ctx = canvas.getContext("2d");
    let imgwidth = imagePreview.naturalWidth;
    let imgheight = imagePreview.naturalHeight;
    let resizeWidth = document.getElementById("resize-width").value;
    if(!resizeWidth) resizeWidth=512;
    let resizeHeight = imgheight * resizeWidth / imgwidth;
    canvas.width = resizeWidth;
    canvas.height = resizeHeight;
    ctx.drawImage(imagePreview, 0, 0, imgwidth, imgheight, 0, 0, resizeWidth, resizeHeight);

    downloadFilenameInput.value = `${uploadFilename}-${resizeWidth}.png` 
}, false);


function download(filename, link) { 

    var imgElement = document.createElement('img');
    imgElement.src = link;
            
    //creating an invisible element 
    var element = document.createElement('a'); 
    element.href = link; 
    element.setAttribute('download', filename); 
    
    // Above code is equivalent to 
    // <a href="path of file" download="file name"> 
    document.body.appendChild(element); 
    
    //onClick property 
    element.click();     
    document.body.removeChild(element); 
}

document.getElementById("download-btn").addEventListener("click", e=> {
    let filename = document.getElementById("download-file-name").value;
    if(!filename) filename="download.png";
    download(filename, canvas.toDataURL());
})

spriteTab.addEventListener("click", e=>{
    resizeContainer.style.display = "none";
    spriteContainer.style.display = "flex";
    spriteTab.classList.add("active");
    resizeTab.classList.remove("active");
})

resizeTab.addEventListener("click", e=>{
    resizeContainer.style.display = "flex";
    spriteContainer.style.display = "none";
    spriteTab.classList.remove("active");
    resizeTab.classList.add("active");
})

const spriteCanvas = document.getElementById("sprite-canvas");
const spriteWidthInput = document.getElementById("sprite-width-input");
const spriteRowsInput = document.getElementById("sprite-rows-input");
const spriteColumnsInput = document.getElementById("sprite-columns-input");
const spriteCreateBtn = document.getElementById("sprite-btn");
var spriteFileList = [];
var spriteImageList = [];
var dropSourceOrder;
var dropTargetOrder;

spriteUploadBtn.addEventListener("input", e=>{

    spriteFileList = [];
    spriteImageList = [];
    spriteImagePreview.innerHTML = "";

    for (var i=0; i<spriteUploadFilesInput.files.length; i++){
        spriteFileList.push(spriteUploadFilesInput.files[i]);
    }

    spriteFileList.forEach((f, i) => {
        let reader = new FileReader();
        reader.onload = function(){
            let image = new Image();
            image.src = reader.result;
            image.width = 256;
            image.style.order = i;
            image.className = "droparea";
            image.addEventListener("dragstart", e=>{
                e.dataTransfer.setDragImage(image, 50, 50);
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.dropEffect = "move";
                dropSourceOrder = e.target.style.order;
            });
            image.addEventListener("dragover", e=>{
                e.preventDefault();
            })
            image.addEventListener("drop", e=>{
                dropTargetOrder = e.target.style.order;
                updateImgOrder(parseInt(dropSourceOrder), parseInt(dropTargetOrder));
            })
            spriteImagePreview.appendChild(image);
            spriteUploadBtn.style.lineHeight = "40px";
            spriteImageList[i] = image;
        }
        reader.readAsDataURL(f); 
    })

})

function initialSpriteCanvas(){
    let spriteWidth = spriteWidthInput.value;
    if(!spriteWidth) spriteWidth = 512;
    let spriteRows = spriteRowsInput.value;
    if(!spriteRows) spriteRows = 2;
    let spriteColumns = spriteColumnsInput.value;
    if(!spriteColumns) spriteColumns = 4;

    let spriteHeight = 256;

    spriteCanvas.width = spriteWidth * spriteColumns;
    spriteCanvas.height = spriteHeight * spriteRows;

    let ctx = spriteCanvas.getContext("2d");
    ctx.clearRect(0, 0, spriteCanvas.width, spriteCanvas.height);
    ctx.beginPath();
    ctx.setLineDash([2, 2]);

    for(var i=1; i<spriteRows; i++){
        ctx.moveTo(0, i*spriteHeight);
        ctx.lineTo(spriteCanvas.width, i*spriteHeight);
        ctx.stroke();    
    }

    for(var i=1; i<spriteColumns; i++){
        ctx.moveTo(i*spriteWidth, 0);
        ctx.lineTo(i*spriteWidth, spriteCanvas.height);
        ctx.stroke();    
    }
}

spriteColumnsInput.addEventListener("change", e=>{
    initialSpriteCanvas();
});
spriteRowsInput.addEventListener("change", e=>{
    initialSpriteCanvas();
});
spriteWidthInput.addEventListener("change", e=>{
    initialSpriteCanvas();
});


spriteCreateBtn.addEventListener("click", e=>{
    let spriteWidth = spriteWidthInput.value;
    if(!spriteWidth) spriteWidth = 512;
    let spriteRows = spriteRowsInput.value;
    if(!spriteRows) spriteRows = 2;
    let spriteColumns = spriteColumnsInput.value;
    if(!spriteColumns) spriteColumns = 4;

    let spriteHeight = spriteWidth * spriteImageList[0].naturalHeight / spriteImageList[0].naturalWidth;
    spriteCanvas.width = spriteWidth * spriteColumns;
    spriteCanvas.height = spriteHeight * spriteRows;

    let ctx = spriteCanvas.getContext("2d");
    ctx.clearRect(0, 0, spriteCanvas.width, spriteCanvas.height);

    for(var i=0; i<spriteRows; i++){
        for(var j=0; j<spriteColumns; j++){
            let img = spriteImageList[i*spriteColumns + j];
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, j*spriteWidth, i*spriteHeight, spriteWidth, spriteHeight);
        }
    }
})

initialSpriteCanvas();

function updateImgOrder(srcOrder, tgtOrder){
    
    spriteImagePreview.innerHTML = "";
    // spriteImageList.forEach(img => {
    for (var i=0; i<spriteImageList.length; i++){
        let img = spriteImageList[i];
        if (parseInt(img.style.order) === srcOrder){
            img.style.order = tgtOrder;
        }else if(img.style.order >= tgtOrder){
            img.style.order ++;
        }
        spriteImagePreview.appendChild(img);
    }

    spriteImageList.sort((a, b) => {
        return parseInt(a.style.order) - parseInt(b.style.order);
    });
}

document.getElementById("sprite-download-btn").addEventListener("click", e=> {
    let filename = document.getElementById("sprite-download-file-name").value;
    if(!filename) filename="sprite.png";
    download(filename, spriteCanvas.toDataURL());
})

