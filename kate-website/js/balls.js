
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
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    this.move();
  }
}

class ballsAnimation {

  constructor() {
    let b1 = new ball(100, 100, 10, "#ffff00", 5, 5);
    let b2 = new ball(200, 300, 15, "#00ffff", 10, 10);
    this.balls = [];
    this.balls.push(b1);
    this.balls.push(b2);  

    ctx.canvas.addEventListener("click", (e) => {
      this.clickEventHandler(e);
    })

    redrawInterval = 0;
  }
  
  detectCollision(ball1, ball2){
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

  detectAnyCollision(ball, balls){
    let collision = false;
    balls.every(b =>{
      if (this.detectCollision(b, ball)){
        collision = true;
        return true;
      }
    })
    return collision;
  }

  redraw() {

    redrawInterval = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.balls = this.balls.filter(b => {
      return !this.detectAnyCollision(b, this.balls);
    })
  
    this.balls.forEach((b) => {
      b.draw();
    });
  }

  clickEventHandler (e) {
    var randomColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    var randomSpeedX = Math.random() * 20 + 1;
    var randomSpeedY = Math.random() * 20 + 1;
    let b = new ball(e.offsetX, e.offsetY, 10, randomColor, randomSpeedX, randomSpeedY);
    this.balls.push(b);
  }
}
