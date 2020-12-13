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
- GLImgColorInversionFilter: Inverts the colors of an image
- GLImgMonochromeFilter: Converts the image to a single-color version, based on the luminance of each pixel
  - intensity: The degree to which the specific color replaces the normal image color (0.0 - 1.0, with 1.0 as the default)
  - color: The color to use as the basis for the effect, with (0.6, 0.45, 0.3, 1.0) as the default.
- GLImgFalseColorFilter: Uses the luminance of the image to mix between two user-specified colors
  - firstColor, secondColor: The first and second colors specify what colors replace the dark and light areas of the image, respectively. The defaults are (0.0, 0.0, 0.5) and (1.0, 0.0, 0.0).
- GLImgHazeFilter: Used to add or remove haze (similar to a UV filter)
  - distance: Strength of the color applied. Default 0. Values between -.3 and .3 are best.
  - slope: Amount of color change. Default 0. Values between -.3 and .3 are best.
- GLImgSepiaToneFilter: Simple sepia tone filter
  - intensity: The degree to which the sepia tone replaces the normal image color (0.0 - 1.0, with 1.0 as the default)
- GLImgOpacityFilter: Adjusts the alpha channel of the incoming image
  - opacity: The value to multiply the incoming alpha channel for each pixel by (0.0 - 1.0, with 1.0 as the default)
- GLImgLuminanceThresholdFilter: Pixels with a luminance above the threshold will appear white, and those below will be black
  - threshold: The luminance threshold, from 0.0 to 1.0, with a default of 0.5
- GLImgAdaptiveThresholdFilter: Determines the local luminance around a pixel, then turns the pixel black if it is below that local luminance and white if above. This can be useful for picking out text under varying lighting conditions.
  - blurRadiusInPixels: A multiplier for the background averaging blur radius in pixels, with a default of 4.
- GLImgAverageLuminanceThresholdFilter: This applies a thresholding operation where the threshold is continually adjusted based on the average luminance of the scene.
  - thresholdMultiplier: This is a factor that the average luminance will be multiplied by in order to arrive at the final threshold to use. By default, this is 1.0.
- GLImgChromaKeyingFilter: For a given color in the image, sets the alpha channel to 0. This is similar to the ChromaKeyBlend, only instead of blending in a second image for a matching color this doesn't take in a second image and just turns a given color transparent.
  - thresholdSensitivity: How close a color match needs to exist to the target color to be replaced (default of 0.4)
  - smoothing: How smoothly to blend for the color match (default of 0.1)
- GLImgVibranceFilter: Adjusts the vibrance of an image
  - vibrance: The vibrance adjustment to apply, using 0.0 as the default, and a suggested min/max of around -1.2 and 1.2, respectively.
- HighlightShadowTint: Allows you to tint the shadows and highlights of an image independently using a color and intensity
  - shadowTintColor: Shadow tint RGB color (GPUVector4). Default: {1.0f, 0.0f, 0.0f, 1.0f} (red).
  - highlightTintColor: Highlight tint RGB color (GPUVector4). Default: {0.0f, 0.0f, 1.0f, 1.0f} (blue).
  - shadowTintIntensity: Shadow tint intensity, from 0.0 to 1.0. Default: 0.0
  - highlightTintIntensity: Highlight tint intensity, from 0.0 to 1.0, with 0.0 as the default.


### Image processing
- GLImgAverageColorFilter
- GLImgEmbossFilter
- GLImgGrayScaleFilter
- GLImgMedianFilter
- GLImgSobelEdgeFilter
- GLImgBoxblurFilter: variable-radius box blur
  - radius: A radius in pixels to use for the blur, with a default of 2.0. This adjusts the box radius for the blur function.
- GLImgGaussianblurFilter: variable-radius gaussian blur
  - radius: A radius in pixels to use for the blur, with a default of 2.0. This adjusts the box radius for the blur function.
  - sigma: a value to the sigma variable in the Gaussian distribution function to generate the Gaussian kernel, with default value of 3.0


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

## GLSL tips
- no implicit type conversion, use explicit type conversion functions, such as float(), int() etc.
- no dynamic alloc array. define a MAX_SIZE in the compile time, and use size variable to only access the part needed
- seems no support to varying int, only varying float
- can not for loop on a variable, work around is loop on MAX_COUNT, and break when the count exceed the needed size