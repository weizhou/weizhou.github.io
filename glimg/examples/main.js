const imageContainer = document.querySelector('div');

const glimgs = [
  {url: "./lenna.png", desc: "original image", filter: null},
  {url: "./lenna.png", desc: "Brightness filter", filter: [new GLImgBrightnessFilter()]},
  {url: "./lenna.png", desc: "Contrast filter", filter: [new GLImgContrastFilter()]},
  {url: "./lenna.png", desc: "Exposure filter", filter: [new GLImgExposureFilter()]},
  {url: "./lenna.png", desc: "Saturation filter", filter: [new GLImgSaturationFilter()]},
  {url: "./lenna.png", desc: "Gamma filter", filter: [new GLImgGammaFilter()]},
  {url: "./lenna.png", desc: "Levels filter", filter: [new GLImgLevelsFilter()]},
  {url: "./lenna.png", desc: "Colormatrix filter", filter: [new GLImgColormatrixFilter()]},
  {url: "./lenna.png", desc: "RGB filter", filter: [new GLImgRGBFilter()]},
  {url: "./lenna.png", desc: "Hue filter", filter: [new GLImgHueFilter()]},
  {url: "./lenna.png", desc: "Tint filter", filter: [new GLImgTintFilter()]},
  {url: "./lenna.png", desc: "Temperature filter", filter: [new GLImgTemperatureFilter()]},
  {url: "./lenna.png", desc: "HighlightShadow filter", filter: [new GLImgHighlightShadowFilter()]},


  // {url: "./lenna.png", desc: "GrayScale filter", filter: [new GLImgGrayscaleFilter()]},
  // {url: "./lenna.png", desc: "Grayscal+GradientX filters", filter: [new GLImgGrayscaleFilter(), new GLImgGradientXFilter()]},
  // {url: "./lenna.png", desc: "Grayscal+GradientY filters", filter: [new GLImgGrayscaleFilter(), new GLImgGradientYFilter()]},
  // {url: "./lenna.png", desc: "Grayscal+Normal filters", filter: [new GLImgGrayscaleFilter(), new GLImgNormalFilter()]},
  // {url: "./lenna.png", desc: "Sobel filters", filter: [new GLImgSobelEdgeFilter()]},
  // {url: "./lenna.png", desc: "Grayscal+Emboss filters", filter: [new GLImgGrayscaleFilter(), new GLImgEmbossFilter()]},
  // {url: "./lisa.png", desc: "original image", filter: null},
  // {url: "./lisa.png", desc: "Averagecolor filter", filter: [new GLImgAverageColorFilter()]},
  // {url: "./lisa.png", desc: "Median filter (8 iterations)", filter: new Array(8).fill(new GLImgMedianFilter()).flat()},
]

for (var i=0; i<glimgs.length; ++i) {
  const glImage = new GLImage();
  if(glimgs[i].filter){
    for(var j=0; j<glimgs[i].filter.length; ++j){
      glImage.addFilter(glimgs[i].filter[j]);
    }
  }
  glImage.order = i;
  glImage.desc = glimgs[i].desc;
  glImage.onload = ()=> {
    const div = createGLImgDiv(glImage);
    imageContainer.appendChild(div);  
  };
  glImage.url = glimgs[i].url;
}

function createGLImgDiv(glimg){
  const div = document.createElement('div');
  div.style.order = glimg.order;
  const label = document.createElement('label');
  label.innerHTML = glimg.desc;
  const canvas = glimg.getCanvas();
  canvas.style.height = "400px";
  canvas.style.objectFit = "contain";
  
  div.append(canvas);
  div.append(label);
  return div;  
}

