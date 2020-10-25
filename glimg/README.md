# GLMedia

GLMedia is a javascript image processing library based on webgl 2.0 inspired by the [GPUImage project](https://github.com/BradLarson/GPUImage). It supports both images and videos. The goal is to abstract out the boilerplate code of webgl setup, provide a framework to apply different image processing filters coded using GLSL to images or videos. The library ported over most of the GPUImage filters, and added more. It also allows the users to add custom filters easily.

## How does it work

GLMedia uses GPU to process images or videos, hence, has much faster speed and performance than CPU. With the support of webgl 2.0, the image processing algorithms are coded as openGL GLSL code, abstracted as filters to the GLImage or GLVideo. The framework creates textures from the input media url, apply filters to the textures while drawing the textures to a canvas. The framework provides an interface for the users to get the canvas, so it can be displayed in their website. 

The framework supports filter chain, which an list of filters can be added, and each one in the list will be applied one after another. 

The framework also supports blendmode with BlendGLImage which takes two or more images as inputs and blends them together using blend filters.

## Filters
### Color adjustment
- BrightnessFilter
### Image processing
- AverageColorFilter
- EmbossFilter
- GrayScaleFilter
- MedianFilter
- SobelEdgeFilter

### Image blending

## Code example
```
const glimg = new GLImage();
glimg.addFilter(new GLImgSobelEdgeFilter());
glimg.onload = ()=> {
  document.createElement('div').appendChild(glimg.getCanvas());
};
glimg.url = imageUrl;
```

## Demo
A [demo page](https://weizhou.github.io/glimg/examples/) has been setup to show how to use the libary.