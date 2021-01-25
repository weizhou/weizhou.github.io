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
  "BrightnessFilter": {"instance": ()=>new GLImgBrightnessFilter(),
                       "config": [{"name": "brightness", "type": "range", "min": "-1.0", "max": "1.0", "step": "0.01", "value": "0.2"}]
                      },
  "ContrastFilter": {"instance": ()=>new GLImgContrastFilter(),
                     "config": [{"name": "contrast", "type": "range", "min": "0.0", "max": "4.0", "step": "0.01", "value": "2.0"}]
                    },
  "ExposureFilter": {"instance": ()=>new GLImgExposureFilter(),
                     "config": [{"name": "exposure", "type": "range", "min": "-10.0", "max": "10.0", "step": "0.01", "value": "1.0"}]
                    },
  "SaturationFilter": {"instance": ()=>new GLImgSaturationFilter(),
                       "config": [{"name": "saturation", "type": "range", "min": "0.0", "max": "2.0", "step": "0.01", "value": "1.5"}]
                      },
  "GammaFilter": {"instance": ()=>new GLImgGammaFilter(),
                  "config": [{"name": "gamma", "type": "range", "min": "0.0", "max": "3.0", "step": "0.01", "value": "1.5"}]
                 },
  "LevelsFilter": {"instance": ()=>new GLImgLevelsFilter()},
  "RGBFilter": {"instance": ()=>new GLImgRGBFilter()},
  "HueFilter": {"instance": ()=>new GLImgHueFilter()},
  "TintFilter": {"instance": ()=>new GLImgTintFilter()},
  "TemperatureFilter": {"instance": ()=>new GLImgTemperatureFilter()},
  "HighlightShadowFilter": {"instance": ()=>new GLImgHighlightShadowFilter()},
  "AmatorkaFilter": {"instance": ()=>new GLImgAmatorkaFilter()},
  "ColorInversionFilter": {"instance": ()=>new GLImgColorInversionFilter()},
  "MonochromeFilter": {"instance": ()=>new GLImgMonochromeFilter()},
  "FalseColorFilter": {"instance": ()=>new GLImgFalseColorFilter()},
  "HazeFilter": {"instance": ()=>new GLImgHazeFilter()},
  "SepiaToneFilter": {"instance": ()=>new GLImgSepiaToneFilter(),
                      "config": [{"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"}]
                     },
  "OpacityFilter": {"instance": ()=>new GLImgOpacityFilter(),
                    "config": [{"name": "opacity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"}]
                   },
  "LumiThresholdFilter": {"instance": ()=>new GLImgLuminanceThresholdFilter(),
                               "config": [{"name": "threshold", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"}]
                              },
  "ChromakeyingFilter": {"instance": ()=>new GLImgChromakeyingFilter()},
  "VibranceFilter": {"instance": ()=>new GLImgVibranceFilter()},
  "HighlightShadowTintFilter": {"instance": ()=>new GLImgHighlightShadowTintFilter()},

  "GrayscaleFilter": {"instance": ()=>new GLImgGrayscaleFilter()},
  "GradientXFilter": {"instance": ()=>new GLImgGradientXFilter()},
  "GradientYFilter": {"instance": ()=>new GLImgGradientYFilter()},
  "NormalFilter": {"instance": ()=>new GLImgNormalFilter()},
  "SobelFilter": {"instance": ()=>new GLImgSobelEdgeFilter()},
  "EmbossFilter": {"instance": ()=>new GLImgEmbossFilter()},
  "AveragecolorFilter": {"instance": ()=>new GLImgAverageColorFilter()},
  "MedianFilter": {"instance": ()=>new GLImgMedianFilter()},
  "BoxblurFilter": {"instance": ()=>new GLImgBoxblurFilter()},
  "GaussianblurFilter": {"instance": ()=>new GLImgGaussianblurFilter()},
  "AdaptiveThresholdFilter": {"instance": ()=>new GLImgAdaptiveThresholdFilter()},
  "BlockblurFilter": {"instance": ()=>new GLImgBlockblurFilter()}
}

GLImgFilterDef.captionalize = (filtername) => {
  const words = filtername.trim().split(" ");
  return words.reduce((a, w)=>a + w[0].toUpperCase()+w.substr(1), "");
}

GLImgFilterDef.getFilter = (filtername)=>{
  return GLImgFilterDef.filters[GLImgFilterDef.captionalize(filtername)].instance();
}

GLImgFilterDef.getFilterConfig = (filtername)=>{
  return GLImgFilterDef.filters[GLImgFilterDef.captionalize(filtername)].config;
}

