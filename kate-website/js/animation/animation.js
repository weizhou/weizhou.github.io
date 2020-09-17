
var canvasContainer = document.getElementById("board");

const w = canvasContainer.offsetWidth * 0.8;
const h = canvasContainer.offsetHeight - 70;

const renderer = new CanvasRenderer(w, h);
canvasContainer.appendChild(renderer.view);


window.addEventListener("resize", (e) => {
    renderer.view.width = canvasContainer.offsetWidth * 0.8
    renderer.view.height = canvasContainer.offsetHeight - 70;
})

let dt = 0;
let last = 0;
var clearRec = false;

window.requestAnimationFrame(loopy);

var scene = new container();

function loopy (ms) {
    const t = ms /1000;
    dt = t - last;
    last = t;

    // Game logic code
    scene.update(dt, t);
    renderer.render(scene, clearRec);   

    window.requestAnimationFrame(loopy);
}

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

function startNewAnima(){
    renderer.reset();
    scene.reset();
    scene.add(animas[animaIndex]);
    clearRec = clearRecSettings[animaIndex];
}

prevBtn.addEventListener("click", e => {
    if(animaIndex == 0){
        animaIndex = animas.length -1;
    }else {
        animaIndex --;
    }

    startNewAnima();
})

nextBtn.addEventListener("click", e => {
    if(animaIndex == animas.length-1){
        animaIndex = 0;
    }else {
        animaIndex ++;
    }

    startNewAnima()
})

const anima1 = new fadingdot();
let anima2 = new AnimateSprite(new Texture("./js/game/asset/catsprite.png"), 544, 476);
let anima3 = new AnimateSprite(new Texture("./js/game/asset/flyingbird.png"), 512, 512, 3, 3);

var animas = [anima1, anima2, anima3];
var clearRecSettings = [false, true, true];
var animaIndex = 0;

scene.add(animas[animaIndex]);
clearRec = clearRecSettings[animaIndex];
