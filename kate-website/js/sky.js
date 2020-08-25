class skyAnimation {

  constructor() {
    redrawInterval = 60;
  }

  redraw(){
    redrawInterval = 60;
    let {width: w, height: h} = ctx.canvas; 
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#555";
  
    let x, y, radius;
    let n = 550;
    [...Array(n).keys()].map( _ =>{
      x = Math.random() * w;
      y = Math.random() * h;
      radius = Math.random() * 3;
  
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.fill();
    });
  }
  
}