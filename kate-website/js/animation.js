var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var canvasContainer = document.getElementById("canvas-container");
ctx.canvas.width = canvasContainer.offsetWidth * 0.8;
ctx.canvas.height = (canvasContainer.offsetHeight-70) * 0.8;

window.addEventListener("resize", (e) => {
  ctx.canvas.width = canvasContainer.offsetWidth * 0.8;
  ctx.canvas.height = (canvasContainer.offsetHeight-70) * 0.8;
})


var ballsgame = new ballsAnimation();
var skygame = new skyAnimation();

var games = [ballsgame, skygame];
var gameIndex = 0;

var redrawInterval = 0;
let frameCount = 0;

window.requestAnimationFrame(update);

function update() {
  if (frameCount >= redrawInterval){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    games[gameIndex].redraw();
    frameCount = 0;
  }
  frameCount ++;
  window.requestAnimationFrame(update);
}

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

prevBtn.disabled = true;

prevBtn.addEventListener("click", (e) => {
  if(gameIndex > 0){
    gameIndex --;
  }
  if(gameIndex == 0){
    prevBtn.disabled = true;
  }
  nextBtn.disabled = false;  
})

nextBtn.addEventListener("click", (e) => {
  if(gameIndex <games.length-1){
    gameIndex ++;
  }
  if(gameIndex == games.length -1) {
    nextBtn.disabled = true;
  }
  prevBtn.disabled = false;

})
