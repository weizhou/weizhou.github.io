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
import { GLImgBlockblurFilter } from './imageProcessing/glimgBlockblurFilter'


export class GLImgFilterDef {}
  
GLImgFilterDef.filters = {
  "BrightnessFilter": {"instance": new GLImgBrightnessFilter(), "config": [{"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"}]},
  "ContrastFilter": {"instance": new GLImgContrastFilter()},
  "ExposureFilter": {"instance": new GLImgExposureFilter()},
  "SaturationFilter": {"instance": new GLImgSaturationFilter()},
  "GammaFilter": {"instance": new GLImgGammaFilter()},
  "LevelsFilter": {"instance": new GLImgLevelsFilter()},
  "RGBFilter": {"instance": new GLImgRGBFilter()},
  "HueFilter": {"instance": new GLImgHueFilter()},
  "TintFilter": {"instance": new GLImgTintFilter()},
  "TemperatureFilter": {"instance": new GLImgTemperatureFilter()},
  "HighlightShadowFilter": {"instance": new GLImgHighlightShadowFilter()},
  "AmatorkaFilter": {"instance": new GLImgAmatorkaFilter()},
  "ColorInversionFilter": {"instance": new GLImgColorInversionFilter()},
  "MonochromeFilter": {"instance": new GLImgMonochromeFilter()},
  "FalseColorFilter": {"instance": new GLImgFalseColorFilter()},
  "HazeFilter": {"instance": new GLImgHazeFilter()},
  "SepiaToneFilter": {"instance": new GLImgSepiaToneFilter()},
  "OpacityFilter": {"instance": new GLImgOpacityFilter()},
  "LuminanceThresholdFilter": {"instance": new GLImgLuminanceThresholdFilter()},
  "ChromakeyingFilter": {"instance": new GLImgChromakeyingFilter()},
  "VibranceFilter": {"instance": new GLImgVibranceFilter()},
  "HighlightShadowTintFilter": {"instance": new GLImgHighlightShadowTintFilter()},

  "GrayscaleFilter": {"instance": new GLImgGrayscaleFilter()},
  "GradientXFilter": {"instance": new GLImgGradientXFilter()},
  "GradientYFilter": {"instance": new GLImgGradientYFilter()},
  "NormalFilter": {"instance": new GLImgNormalFilter()},
  "SobelFilter": {"instance": new GLImgSobelEdgeFilter()},
  "EmbossFilter": {"instance": new GLImgEmbossFilter()},
  "AveragecolorFilter": {"instance": new GLImgAverageColorFilter()},
  "MedianFilter": {"instance": new GLImgMedianFilter()},
  "BoxblurFilter": {"instance": new GLImgBoxblurFilter()},
  "GaussianblurFilter": {"instance": new GLImgGaussianblurFilter()},
  "AdaptiveThresholdFilter": {"instance": new GLImgAdaptiveThresholdFilter()},
  "BlockblurFilter": {"instance": new GLImgBlockblurFilter()}
}

GLImgFilterDef.captionalize = (filtername) => {
  const words = filtername.trim().split(" ");
  return words.reduce((a, w)=>a + w[0].toUpperCase()+w.substr(1), "");
}

GLImgFilterDef.getFilter = (filtername)=>{
  return GLImgFilterDef.filters[GLImgFilterDef.captionalize(filtername)].instance;
}

GLImgFilterDef.getFilterConfig = (filtername)=>{
  return GLImgFilterDef.filters[GLImgFilterDef.captionalize(filtername)].config;
}

