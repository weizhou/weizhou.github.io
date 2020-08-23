var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = 1000;
ctx.canvas.height = 500;

window.requestAnimationFrame(update);

var balls = [];

class ball {
  constructor(x, y, r, c, sx, sy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.sx = sx;
    this.sy = sy;
  }
  move() {
    this.x += this.sx;
    this.y += this.sy;
    if (this.x > ctx.canvas.width - 10 || this.x < 10) {
      this.sx = -this.sx;
    }
    if (this.y > ctx.canvas.height - 10 || this.y < 10) {
      this.sy = -this.sy;
    }
  }
}

let b1 = new ball(100, 100, 10, "#ffff00", 5, 5);
let b2 = new ball(200, 300, 15, "#00ffff", 10, 10);
balls.push(b1);
balls.push(b2);

function detectCollision(ball1, ball2){
  let dx = ball1.x - ball2.x;
  let dy = ball1.y - ball2.y;
  if(dx==0 && dy==0) {
    return false; //ball1 and ball2 are actually the same ball
  }
  if((dx*dx + dy*dy) <= (ball1.r+ball2.r)*(ball1.r+ball2.r)){
    return true;
  }
  return false;
}

function detectAnyCollision(ball, balls){
  let collision = false;
  balls.every(b =>{
    if (detectCollision(b, ball)){
      collision = true;
      return true;
    }
  })

  return collision;
}

function draw(ball) {
  ctx.beginPath();
  ctx.fillStyle = ball.c;
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ball.move();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  balls = balls.filter(b => {
    return !detectAnyCollision(b, balls);
  })

  balls.forEach((b) => {
    draw(b);
  });
  window.requestAnimationFrame(update);
}

canvas.addEventListener("click", (e) => {
  var randomColor =
    "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  var randomSpeedX = Math.random() * 20 + 1;
  var randomSpeedY = Math.random() * 20 + 1;
  let b = new ball(e.offsetX, e.offsetY, 10, randomColor, randomSpeedX, randomSpeedY);
  balls.push(b);
});
