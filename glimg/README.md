# GLMedia

GLMedia is a javascript image processing library based on webgl 2.0 inspired by the [GPUImage project](https://github.com/BradLarson/GPUImage). It supports both images and videos. The goal is to abstract out the boilerplate code of webgl setup, provide a framework to apply different image processing filters coded using GLSL to images or videos. The library ported over most of the GPUImage filters, and added more. It also allows the users to add custom filters easily.

## How does it work

GLMedia uses GPU to process images or videos, hence, has much faster speed and performance than CPU. With the support of webgl 2.0, the image processing algorithms are coded as openGL GLSL code, abstracted as filters to the GLImage or GLVideo. The framework creates textures from the input media url, apply filters to the textures while drawing the textures to a canvas. The framework provides an interface for the users to get the canvas, so it can be displayed in their website. 

The framework supports filter chain, which an list of filters can be added, and each one in the list will be applied one after another. 

The framework also supports blendmode with BlendGLImage which takes two or more images as inputs and blends them together using blend filters.

## Filters
### Color adjustment
- GLImgBrightnessFilter
  - brightness: The adjusted brightness (-1.0 to 1.0, default 0.2)
- GLImgExposureFilter
  - exposure: The adjusted exposure (-10.0 to 10.0, default 1.0)
- GLImgContrastFilter: Adjusts the contrast of the image
  - contrast: The adjusted contrast (0.0 to 4.0, default 1.0) 
- GLImgSaturationFilter: Adjusts the saturation of an image
  - saturation: The degree of saturation or desaturation to apply to the image (0.0 - 2.0, with 1.5 as the default)
- GLImgGammaFilter: Adjusts the gamma of an image
  - gamma: The gamma adjustment to apply (0.0 - 3.0, with 2.0 as the default)
- GLImgLevelsFilter: levels adjustment. 
  - The min, max, minOut and maxOut parameters are floats in the range [0, 1]. 
  - The gamma/mid parameter is a float >= 0. 
  - If you want to apply levels to RGB as well as individual channels you need to use this filter twice - first for the individual channels and then for all channels.
- GLImgColorMatrixFilter: Transforms the colors of an image by applying a matrix to them
  - colorMatrix: A 4x4 matrix used to transform each color in an image
  - intensity: The degree to which the new transformed color replaces the original color for each pixel
- GLImgRGBFilter: Adjusts the individual RGB channels of an image
  - red, green, blue: Normalized values by which each color channel is multiplied. The range is from 0.0 up, with 1.0 as the default.
- GLImgHueFilter: Adjusts the hue of an image
  - hue: The hue angle, in degrees. 90 degrees by default
- GLImgTintFilter: Adjusts the Tint of an image.
  - tint: The tint to adjust the image by. A value of -200 is very green and 200 is very pink. The default value is 0.
- GLImgTemperatureFilter: Adjusts the Temperature of an image.
  - temperature: The temperature to adjust the image by, in ºK. A value of 4000 is very cool and 7000 very warm. The default value is 5000. Note that the scale between 4000 and 5000 is nearly as visually significant as that between 5000 and 7000.  
- GLImgHighlightsAndShadowsFilter: Adjusts the shadows and highlights of an image
  - shadows: Increase to lighten shadows, from 0.0 to 1.0, with 0.0 as the default.
  - highlights: Decrease to darken highlights, from 1.0 to 0.0, with 1.0 as the default.




### Image processing
- GLImgAverageColorFilter
- GLImgEmbossFilter
- GLImgGrayScaleFilter
- GLImgMedianFilter
- GLImgSobelEdgeFilter

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

```
const glimg = new GLImage();
const filter = new GLImgLookupFilter();

// the lookup filter have a property of lookupImgUrl
// set the property will trigger the image load asynly
// once image load, it set the image to a temp texture for use
// and also set isready to true
// glimg will wait for filter to be ready to apply the filter
// but this will block the thread while waiting for filter to be ready

// any better approach to do it asynly?
// filter.ready() return a promise, in glimg, when go through each filters, 
// use filter.ready().then(... apply the filter), but the problem is, we want to keep the sequencing of the filters ...


// solution: 
// make a asyn function filter.init()
// which will await for any asyn operations. 
// in this case, we are waiting the image to be loaded to the texture
// before apply the filter, we simply call the init() function first
// or even better, we can call this init() function in the constructor as needed



glimg.addFilter(filter);
glimg.onload = ()=> {
  document.createElement('div').appendChild(glimg.getCanvas());
};
glimg.url = imageUrl;
```






## Demo
A [demo page](https://weizhou.github.io/glimg/examples/) has been setup to show how to use the libary.