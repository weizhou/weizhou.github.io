import { GLImgBrightnessFilter } from './colorFilters/glimgBrightnessFilter'
import { GLImgContrastFilter } from './colorFilters/glimgContrastFilter'
import { GLImgExposureFilter } from './colorFilters/glimgExposureFilter'
import { GLImgSaturationFilter} from './colorFilters/glimgSaturationFilter'
import { GLImgGammaFilter } from './colorFilters/glimgGammaFilter'
import { GLImgLevelsFilter } from './colorFilters/glimgLevelsFilter'
import { GLImgRGBFilter } from './colorFilters/glimgRGBFilter'
import { GLImgHueFilter } from './colorFilters/glimgHueFilter'
import { GLImgTintFilter } from './colorFilters/glimgTintFilter'
import { GLImgTemperatureFilter } from './colorFilters/glimgTemperatureFilter'
import { GLImgHighlightShadowFilter } from './colorFilters/glimgHighlightShadowFilter'
import { GLImgAmatorkaFilter } from './colorFilters/glimgAmatorkaFilter'
import { GLImgColorInversionFilter } from './colorFilters/glimgColorInversionFilter'
import { GLImgMonochromeFilter } from './colorFilters/glimgMonochromeFilter'
import { GLImgFalseColorFilter } from './colorFilters/glimgFalseColorFilter'
import { GLImgHazeFilter } from './colorFilters/glimgHazeFilter'
import { GLImgSepiaToneFilter } from './colorFilters/glimgSepiaToneFilter'
import { GLImgOpacityFilter } from './colorFilters/glimgOpacityFilter'
import { GLImgLuminanceThresholdFilter } from './colorFilters/glimgLuminanceThresholdFilter'
import { GLImgChromakeyingFilter } from './colorFilters/glimgChromakeyingFilter'
import { GLImgVibranceFilter } from './colorFilters/glimgVibranceFilter'
import { GLImgHighlightShadowTintFilter } from './colorFilters/glimgHighlightShadowTintFilter'
import { GLImgGrayscaleFilter } from './colorFilters/glimgGrayscaleFilter'

import { GLImgGradientXFilter } from './imageProcessing/glimgGradientXFilter'
import { GLImgGradientYFilter } from './imageProcessing/glimgGradientYFilter'
import { GLImgNormalFilter } from './imageProcessing/glimgNormalFilter'
import { GLImgSobelEdgeFilter } from './imageProcessing/glimgSobelEdgeFilter'
import { GLImgEmbossFilter } from './imageProcessing/glimgEmbossFilter'
import { GLImgAverageColorFilter } from './imageProcessing/glimgAverageColorFilter'
import { GLImgMedianFilter } from './imageProcessing/glimgMedianFilter'
import { GLImgBoxblurFilter } from './imageProcessing/glimgBoxblurFilter'
import { GLImgGaussianblurFilter } from './imageProcessing/glimgGaussianblurFilter'
import { GLImgAdaptiveThresholdFilter } from './imageProcessing/glimgAdaptiveThresholdFilter'


export class GLImgFilterDef {}
  
GLImgFilterDef.filters = {
  "BrightnessFilter": new GLImgBrightnessFilter(),
  "ContrastFilter": new GLImgContrastFilter(),
  "ExposureFilter": new GLImgExposureFilter(),
  "SaturationFilter": new GLImgSaturationFilter(),
  "GammaFilter": new GLImgGammaFilter(),
  "LevelsFilter": new GLImgLevelsFilter(),
  "RGBFilter": new GLImgRGBFilter(),
  "HueFilter": new GLImgHueFilter(),
  "TintFilter": new GLImgTintFilter(),
  "TemperatureFilter": new GLImgTemperatureFilter(),
  "HighlightShadowFilter": new GLImgHighlightShadowFilter(),
  "AmatorkaFilter": new GLImgAmatorkaFilter(),
  "ColorInversionFilter": new GLImgColorInversionFilter(),
  "MonochromeFilter": new GLImgMonochromeFilter(),
  "FalseColorFilter": new GLImgFalseColorFilter(),
  "HazeFilter": new GLImgHazeFilter(),
  "SepiaToneFilter": new GLImgSepiaToneFilter(),
  "OpacityFilter": new GLImgOpacityFilter(),
  "LuminanceThresholdFilter": new GLImgLuminanceThresholdFilter(),
  "ChromakeyingFilter": new GLImgChromakeyingFilter(),
  "VibranceFilter": new GLImgVibranceFilter(),
  "HighlightShadowTintFilter": new GLImgHighlightShadowTintFilter(),

  "GrayScaleFilter": new GLImgGrayscaleFilter(),
  "GradientXFilter": new GLImgGradientXFilter(),
  "GradientYFilter": new GLImgGradientYFilter(),
  "NormalFilter": new GLImgNormalFilter(),
  "SobelFilter": new GLImgSobelEdgeFilter(),
  "EmbossFilter": new GLImgEmbossFilter(),
  "AveragecolorFilter": new GLImgAverageColorFilter(),
  "MedianFilter": new GLImgMedianFilter(),
  "BoxblurFilter": new GLImgBoxblurFilter(),
  "GaussianblurFilter": new GLImgGaussianblurFilter(),
  "AdaptiveThresholdFilter": new GLImgAdaptiveThresholdFilter()
}

GLImgFilterDef.getFilter = (filtername)=>{
  return GLImgFilterDef.filters[filtername.trim()];
}
