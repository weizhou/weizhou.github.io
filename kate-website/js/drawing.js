// const imgUrls4shared = [
//   "https://www.4shared.com/img/5tUY_i91iq/s25/173cfaaff48/kate-pic1",
//   "https://www.4shared.com/img/NtFspf15iq/s25/173cfab0b00/kate-pic2",
//   "https://www.4shared.com/img/gLVquPe7ea/s25/173cfab16b8/kate-pic3",
//   "./imgs/kate-pic4.jpg",
//   "https://www.4shared.com/img/s1QMhi6Niq/s25/173cfab2658/kate-pic5",
//   "https://www.4shared.com/img/EiJwmkgjiq/s25/173cfab2658/kate-pic6",
//   "https://www.4shared.com/img/KwTMUiQXiq/s25/173cfab2e28/kate-pic7",
//   "https://www.4shared.com/img/mHVdrzr6iq/s25/173cfab3210/kate-pic8",
//   "https://www.4shared.com/img/HeSOAOQSea/s25/173cfab39e/kate-pic9",
//   "https://www.4shared.com/img/cxYa-TGfea/s25/173cfab41b0/kate-pic10",
//   "https://www.4shared.com/img/gGlbrWqQea/s25/173cfab4598/kate-pic11",
//   "./imgs/kate-pic12.jpg"
// ];

// const imgUrls = [
//   "https://app.nihaocloud.com/f/91097548bb57484cab9a/?dl=1",
//   "https://app.nihaocloud.com/f/974e60d3cd39445983e2/?dl=1",
//   "https://app.nihaocloud.com/f/50639edc0b4842c78219/?dl=1",
//   "https://app.nihaocloud.com/f/a7a09d4f1b1845d9bf1d/?dl=1",
//   "https://app.nihaocloud.com/f/24f7bf9eb71e4c8daa1e/?dl=1",
//   "https://app.nihaocloud.com/f/5413ecd501ff4f21a9c7/?dl=1",
//   "https://app.nihaocloud.com/f/1f966f410c01468ba9e3/?dl=1",
//   "https://app.nihaocloud.com/f/28ec8b3438a943729e6a/?dl=1",
//   "https://app.nihaocloud.com/f/70aa439470a7488f8d08/?dl=1",
//   "https://app.nihaocloud.com/f/422abff15a224c679bb4/?dl=1",
//   "https://app.nihaocloud.com/f/4d897b604cd542beb608/?dl=1",
//   "./imgs/kate-pic12.jpg",
//   "https://app.nihaocloud.com/f/62ddddc574af4ca0aca8/?dl=1",
//   "https://app.nihaocloud.com/f/c83046ef59a74057bc05/?dl=1",
//   "https://app.nihaocloud.com/f/47a5c714c94c4bfc819f/?dl=1"
// ];

const imageGallery = document.getElementById("myGallery");
const popupImg = document.getElementById("popupImg");
const crossIcon = document.getElementById("crossIcon");
const drawingPopupContainer = document.getElementById("drawing-popup-container");
const drawingPopup = document.getElementById("drawing-popup");
const rightArrowIcon = document.getElementById("rightArrowIcon");
const leftArrowIcon = document.getElementById("leftArrowIcon");
const moreImgBtn = document.getElementById("more-img-btn");

var currentPopupImgId = 1;
const numImgs = 15;
var loadedImgs = 9;

const imgDesc = ["a happy bear", 
                 "yummy custard pie",
                 "yay! It is fall",
                 "some flowers",
                 "pink!",
                 "I love cherrys",
                 "yay! It is summer", 
                 "rainbow Starbucks",
                 "mm, strawbarry",
                 "I love blueberrys and the color blue!",
                 "peeches",
                 "nock nock! A woodpecker",
                 "a happy girl", 
                 "anima",
                 "save the trees!"];
var imgSrcs = [];

window.addEventListener("resize", e => {
  positionPopupImage();
  positionCrossIcon();
})

function positionPopupImage(){
  if(window.innerWidth > window.innerHeight) {
    popupImg.style.height = "100%";
    popupImg.style.width = "";
  } else {
    popupImg.style.width = "100%";
    popupImg.style.height = "";
  }
}

function positionCrossIcon(){
  let imgRec = popupImg.getClientRects()[0];
  if(imgRec){
    let crossIconPosTop = imgRec.y;
    let crossIconPosLeft = imgRec.x + imgRec.width-40;
    crossIcon.style.top = `${crossIconPosTop}px`;
    crossIcon.style.left = `${crossIconPosLeft}px`
  }
}

function loadImages(start, imgCount){
  const imgIDs = [...Array(imgCount).keys()].slice(start);
  imgSrcs = imgIDs.map( id => {
    return `./imgs/kate-pic${id+1}-512.png`;
  })
  
  imageGallery.innerHTML = "";

  imgIDs.forEach((id) => {
    let imgDiv =
      `<div class="card mb-5">
        <img class="img-fluid" id="pic${id}" src=${imgSrcs[id]} loading="lazy"></img>
        <p class="card-footer">${imgDesc[id]}</p>
      </div>`;
    imageGallery.innerHTML += imgDiv;
  });
}

function getHighDefImg(src){
  return src.substr(0, src.lastIndexOf("-512")) + ".jpg";
}

imageGallery.addEventListener("click", (e) => {
  
    if(e.target.src){
      drawingPopupContainer.style.display = "block";
      imageGallery.style.display = "none";
    
      popupImg.src = getHighDefImg(e.target.src);
      currentPopupImgId = parseInt(e.target.id.replace("pic", ""));

      positionPopupImage();
      
      popupImg.addEventListener("load", e => {
        positionCrossIcon();
      })
  }
})


crossIcon.addEventListener("click", e=>{
  drawingPopupContainer.style.display = "none";
  imageGallery.style.display = "block";
})


function displayNextImg(){
  if(currentPopupImgId === numImgs){
    currentPopupImgId = 1;
  }else{
    currentPopupImgId ++;
  }
  popupImg.src = getHighDefImg(imgSrcs[currentPopupImgId-1]);
}

function displayPrevImg() {
  if(currentPopupImgId === 1){
    currentPopupImgId = numImgs;
  }else{
    currentPopupImgId --;
  }
  popupImg.src = getHighDefImg(imgSrcs[currentPopupImgId-1]);
}


rightArrowIcon.addEventListener("click", e => {
  displayNextImg();
})


leftArrowIcon.addEventListener("click", e => {
  displayPrevImg();
})

var touchStartX, touchEndX;
popupImg.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].clientX;
})

popupImg.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].clientX;
  if(touchEndX < touchStartX){
    displayNextImg();
  }else{
    displayPrevImg();
  }
  touchStartX = touchEndX = 0;
})

moreImgBtn.addEventListener("click", e=> {
  loadedImgs += 9;
  if(loadedImgs > numImgs){
    loadedImgs = numImgs;
    moreImgBtn.style.display = "none";
  } 
  loadImages(0, loadedImgs);
})

loadImages(0, loadedImgs);

