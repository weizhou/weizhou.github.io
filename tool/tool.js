const uploadBtn = document.getElementById("upload-btn")
const uploadFileinput = document.getElementById("upload-input");
const imagePreview = document.getElementById('image-preview');
const resizeBtn = document.getElementById("resize-btn");
const canvasDiv = document.getElementById("canvas-div");
const canvas = document.getElementById("canvas-image");
const resizeTab = document.getElementById("resize-tab");
const spriteTab = document.getElementById("sprite-tab");
const resizeContainer = document.getElementById("resize-container");
const downloadFilenameInput = document.getElementById("download-file-name")
var uploadFilename;

imagePreview.style.width = "40%";
imagePreview.style.minHeight = "200px";
resizeBtn.style.display = "none";
canvasDiv.style.display = "none";
resizeContainer.style.display = "flex";

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

const convertBtn = document.getElementById("convert-btn");

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
    spriteTab.classList.add("active");
    resizeTab.classList.remove("active");
})

resizeTab.addEventListener("click", e=>{
    resizeContainer.style.display = "flex";
    spriteTab.classList.remove("active");
    resizeTab.classList.add("active");
})