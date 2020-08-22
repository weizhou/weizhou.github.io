var img = new Image();
img.crossOrigin = "Anonymous";
img.src = "./imgs/logo.png";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = 70;
ctx.canvas.height = 70;

let offsetx = ctx.canvas.width / 2 - img.width / 2;
let offsety = ctx.canvas.height / 2 - img.height / 2;

offsetx = 0;
offsety = 0;

img.onload = function () {
  ctx.drawImage(img, offsetx, offsety);
  img.style.display = "none";
};

let transformButton = document.getElementById("transformButton");
transformButton.addEventListener("click", (e) => {
  let imageData = ctx.getImageData(offsetx, offsety, img.width, img.height);
  let data = imageData.data;

  const newColor = { r: 0, g: 0, b: 0, a: 0 };

  for (var i = 0; i < data.length; i += 4) {
    var r = data[i],
      g = data[i + 1],
      b = data[i + 2];

    // If its white then change it
    if (r > 190 && g > 190 && b > 190) {
      // Change the white to whatever.
      data[i] = newColor.r;
      data[i + 1] = newColor.g;
      data[i + 2] = newColor.b;
      data[i + 3] = newColor.a;
    }
  }

  ctx.putImageData(imageData, offsetx, offsety);
});
