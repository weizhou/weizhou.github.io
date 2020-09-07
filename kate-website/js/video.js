var videoSrcs = [
   "https://firebasestorage.googleapis.com/v0/b/kate-website-70fda.appspot.com/o/kevin-piano1.mp4?alt=media&token=1e7d84de-5743-471f-a8c2-a60eb7b805c3",
    "./videos/kevin_piano1_480_40.mp4",
    "./videos/kate-skate1.mp4"
]

var selectedVideo = 0;

const videoSource = document.getElementById("videoSource");
const videoElement = document.getElementById("videoElement");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function playVideo(videoIndex){
    videoElement.pause();
    videoSource.src = videoSrcs[videoIndex];
    videoElement.load();
}

prevBtn.addEventListener("click", e=>{
    if (selectedVideo === 0){
        selectedVideo = videoSrcs.length-1;
    }else {
        selectedVideo --;
    }
    playVideo(selectedVideo);
})

nextBtn.addEventListener("click", e=>{
    if (selectedVideo === videoSrcs.length-1){
        selectedVideo = 0;
    }else {
        selectedVideo ++;
    }
    playVideo(selectedVideo);
})

playVideo(selectedVideo);
