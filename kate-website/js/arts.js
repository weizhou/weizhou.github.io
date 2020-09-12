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
const tab0 = document.getElementById("tab0");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tabs = [tab0, tab1, tab2];

var currentPopupImgId = 0;
var loadedImgs = 6;
var imgsPerLoad = 6;
var selectedTab = 0;

const drawingDesc = [
  "Flowers",
  "pinapple",
  "yummy custard pie",
  "yay! It is fall",
  "Junk food", 
  "the magic tree",
  "I love cherrys",
  "yay! It is summer",
  "rainbow Starbucks",
  "mm stawberry",
  "I love blueberrys and the color blue!",
  "peeches",
  "nock nock! A woodpecker",
  "a happy girl",
  "anime", 
  "a funny girl",
  "it is me kate!",
  "deserts",
  "lets go to the beech",
  "chinese food",
  "a cool girl",
  "cubes can create anything!"
];

const graphicsDesc = [
  "the world without gravity",
  "cookie girl",
  "mommy's purse", 
  "fasion racoon",
  "be careful",
  "Chritsmas",
  "4 flowers",
  "were on a adventure!",
  "buns",
  "food",
  "1 graphic anime girl",
  "2 graphic anime girl",
  "3 graphic anime girl",
  "4 graphic anime girl"
 

]

const paintingDesc = [
 "Chritsmas trees",
 "A happy bear",
 "A water fall",
 "save the trees",
 "a lot of flowers",
 "pink!"
];

const artDesc = [drawingDesc, paintingDesc, graphicsDesc];
const imgSrcPath = ["drawings/drawing", "paintings/painting", "graphics/graphics"];

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

    return `./arts/${imgSrcPath[selectedTab]}${id}-512.png`;
  })
  
  imageGallery.innerHTML = "";

  imgIDs.forEach((id) => {
    let imgDiv =
      `<div class="card mb-5">
        <img class="img-fluid" id="pic${id}" src=${imgSrcs[id]} loading="lazy"></img>
        <p class="card-footer">${artDesc[selectedTab][id]}</p>
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
  if(currentPopupImgId === imgSrcs.length-1){
    currentPopupImgId = 0;
  }else{
    currentPopupImgId ++;
  }
  popupImg.src = getHighDefImg(imgSrcs[currentPopupImgId]);
}

function displayPrevImg() {
  if(currentPopupImgId === 0){
    currentPopupImgId = imgSrcs.length-1;
  }else{
    currentPopupImgId --;
  }
  popupImg.src = getHighDefImg(imgSrcs[currentPopupImgId]);
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
  loadedImgs += imgsPerLoad;
  if(loadedImgs >= artDesc[selectedTab].length){
    loadedImgs = artDesc[selectedTab].length;
    moreImgBtn.style.display = "none";
  } 
  loadImages(0, loadedImgs);
})

document.querySelectorAll(".tab-label").forEach(t => t.addEventListener("click", e=> {
  tabs[selectedTab].classList.remove("active");
  selectedTab = e.target.id.substr(3);
  tabs[selectedTab].classList.add("active");
  loadedImgs = 6;
  loadImages(0, loadedImgs);
  initMoreImgBtn();
}));

function initMoreImgBtn(){
  moreImgBtn.style.display = "block";
  if(loadedImgs >= artDesc[selectedTab].length){
    loadedImgs = artDesc[selectedTab].length;
    moreImgBtn.style.display = "none";
  }
}

loadImages(0, loadedImgs);
initMoreImgBtn();

