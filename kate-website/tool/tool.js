const uploadInput = document.getElementById("upload-input")
const imagePreview = document.getElementById('image-preview');
const canvas = document.getElementById("canvas-image");

uploadInput.addEventListener("input", e => {
    var reader = new FileReader();
    reader.onload = function(){
        imagePreview.src = reader.result;
        document.getElementById("btn-col").style.display = "block";
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
        document.getElementById("canvas-col").style.display = "block";
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

