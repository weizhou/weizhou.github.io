
var canvasContainer = document.getElementById("board");

const w = canvasContainer.offsetWidth * 0.8;
const h = (canvasContainer.offsetHeight-70) * 0.8;

const renderer = new CanvasRenderer(w, h);
canvasContainer.appendChild(renderer.view);


window.addEventListener("resize", (e) => {
    renderer.view.width = canvasContainer.offsetWidth * 0.8;
    renderer.view.height = (canvasContainer.offsetHeight-70) * 0.8;
})

let dt = 0;
let last = 0;

window.requestAnimationFrame(loopy);

var scene = new container();

function loopy (ms) {
    const t = ms /1000;
    dt = t - last;
    last = t;

    // Game logic code
    scene.update(dt, t);
    renderer.render(scene, false);   

    window.requestAnimationFrame(loopy);
}

//start game
const keyCtl = new keyControls();
const anima1 = new fadingdot();
const logo = new Texture("./imgs/logo.png");
const logoSprite = new Sprite(logo);
const racoon = new Texture("./imgs/fashionRacoon.jpeg");
const racoonSprite = new Sprite(racoon);
// scene.add(racoonSprite);
// scene.add(logoSprite);
scene.add(anima1);


