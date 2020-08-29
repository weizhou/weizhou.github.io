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

window.addEventListener("resize", e => {
  let popupImg = document.getElementById("popupImg");
  if(window.innerWidth > window.innerHeight) {
    popupImg.style.height = "100%";
    popupImg.style.width = "";
  } else {
    console.log("width: 100");
    popupImg.style.width = "100%";
    popupImg.style.height = "";
  }
  let imgRec = popupImg.getClientRects()[0];
  let crossIcon = document.getElementById("crossIcon");
  let crossIconPosTop = imgRec.y-20;
  let crossIconPosLeft = imgRec.x + imgRec.width-20;
  crossIcon.style.top = `${crossIconPosTop}px`;
  crossIcon.style.left = `${crossIconPosLeft}px`
})


const numImgs = 15;
const imgIDs = [...Array(numImgs+1).keys()].slice(1);

var imageGallery = document.getElementById("myGallery");

imgIDs.forEach((id) => {
  let imgDiv =
    `<div class="mb-3 pics animation">
      <img class="img-fluid" id="pic${id}" src="./imgs/kate-pic${id}.jpg" loading="lazy"></img>
    </div>`;
  imageGallery.innerHTML += imgDiv;
});

var drawingPopupContainer = document.getElementById("drawing-popup-container");
var drawingPopup = document.getElementById("drawing-popup");

imageGallery.addEventListener("click", (e) => {
  
  drawingPopupContainer.style.display = "block";
  imageGallery.style.display = "none";


  let popupImg = document.getElementById("popupImg");
  if(window.innerWidth > window.innerHeight) {
    popupImg.style.height = "100%";
  } else {
    popupImg.style.width = "100%";
  }

  popupImg.src = e.target.src;
  

  let crossIcon = document.getElementById("crossIcon");
  let imgRec = popupImg.getClientRects()[0];

  let crossIconPosTop = imgRec.y-20;
  let crossIconPosLeft = imgRec.x + imgRec.width-20;

  crossIcon.style.top = `${crossIconPosTop}px`;
  crossIcon.style.left = `${crossIconPosLeft}px`


  crossIcon.addEventListener("click", e=>{
    drawingPopupContainer.style.display = "none";
    imageGallery.style.display = "block";
  })
})


