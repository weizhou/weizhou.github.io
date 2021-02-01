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
  "LevelsFilter": {"instance": ()=>new GLImgLevelsFilter(),
                   "config": [{"name": "levelMinimum", "type": "color", "value": "#1A1A1A"},
                              {"name": "levelMiddle", "type": "color", "value": "#4D4D4D"},
                              {"name": "levelMaximum", "type": "color", "value": "#E6E6E6"},
                              {"name": "minOutput", "type": "color", "value": "#4D4D4D"},
                              {"name": "maxOutput", "type": "color", "value": "#CCCCCC"},
                             ] 
                 },
  "RGBFilter": {"instance": ()=>new GLImgRGBFilter(), 
                "config": [{"name": "redAdjustment", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"},
                           {"name": "greenAdjustment", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"},
                           {"name": "blueAdjustment", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"},
                          ]
               },
  "HueFilter": {"instance": ()=>new GLImgHueFilter(),
                // "config": [{"name": "hueAdjust", "type": "range", "min": "0.0", "max": "2\u03C0", "step": "0.01", "value": "1.57"}]
                "config": [{"name": "hueAdjust", "type": "range", "min": "0.0", "max": "6.28", "step": "0.01", "value": "1.57"}]
               },
  "TintFilter": {"instance": ()=>new GLImgTintFilter(),
                "config": [{"name": "tint", "type": "range", "min": "-200", "max": "200", "step": "1", "value": "0"}]
               },
  "TemperatureFilter": {"instance": ()=>new GLImgTemperatureFilter(),
                "config": [{"name": "temperature", "type": "range", "min": "4000", "max": "7000", "step": "100", "value": "5000"}]
                       },
  "HighlightShadowFilter": {"instance": ()=>new GLImgHighlightShadowFilter(),
                            "config": [{"name": "shadows", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.0"},
                                       {"name": "highlights", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"},
                                      ]
                           },
  "AmatorkaFilter": {"instance": ()=>new GLImgAmatorkaFilter()},
  "ColorInversionFilter": {"instance": ()=>new GLImgColorInversionFilter()},
  "MonochromeFilter": {"instance": ()=>new GLImgMonochromeFilter(),
                       "config": [{"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"},
                                  {"name": "filterColor", "type": "color", "value": "#99734D"}, 
                                 ]
                      },
  "FalseColorFilter": {"instance": ()=>new GLImgFalseColorFilter(),
                       "config": [{"name": "firstColor", "type": "color", "value": "#00007F"},
                                  {"name": "secondColor", "type": "color", "value": "#FF0000"},
                                 ] 
                      },
  "HazeFilter": {"instance": ()=>new GLImgHazeFilter(),
                 "config": [{"name": "hazeDistance", "type": "range", "min": "-0.3", "max": "0.3", "step": "0.01", "value": "-0.1"},
                            {"name": "slope", "type": "range", "min": "-0.3", "max": "0.3", "step": "0.01", "value": "0.3"},
                           ]
                },
  "SepiaToneFilter": {"instance": ()=>new GLImgSepiaToneFilter(),
                      "config": [{"name": "intensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"}]
                     },
  "OpacityFilter": {"instance": ()=>new GLImgOpacityFilter(),
                    "config": [{"name": "opacity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "1.0"}]
                   },
  "LumiThresholdFilter": {"instance": ()=>new GLImgLuminanceThresholdFilter(),
                               "config": [{"name": "threshold", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"}]
                              },
  "ChromakeyingFilter": {"instance": ()=>new GLImgChromakeyingFilter(),
                         "config": [{"name": "thresholdSensitivity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.1"},
                                    {"name": "smoothing", "type": "range", "min": "0.00", "max": "0.10", "step": "0.001", "value": "0.05"},           
                                    {"name": "colorToReplace", "type": "color", "value": "#333333"}, 
                                   ]
                        },
  "VibranceFilter": {"instance": ()=>new GLImgVibranceFilter(),
                     "config": [{"name": "vibrance", "type": "range", "min": "-1.2", "max": "1.2", "step": "0.01", "value": "1.0"}]
                    },
  "HighlightShadowTintFilter": {"instance": ()=>new GLImgHighlightShadowTintFilter(),
                                "config": [{"name": "shadowTintIntensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.01", "value": "0.5"},
                                           {"name": "highlightTintIntensity", "type": "range", "min": "0.0", "max": "1.0", "step": "0.001", "value": "0.5"},           
                                           {"name": "shadowTintColor", "type": "color", "value": "#FF0000"}, 
                                           {"name": "highlightTintColor", "type": "color", "value": "#0000FF"}, 
                                          ]
                               },

  "GrayscaleFilter": {"instance": ()=>new GLImgGrayscaleFilter()},
  "GradientXFilter": {"instance": ()=>new GLImgGradientXFilter()},
  "GradientYFilter": {"instance": ()=>new GLImgGradientYFilter()},
  "NormalFilter": {"instance": ()=>new GLImgNormalFilter()},
  "SobelFilter": {"instance": ()=>new GLImgSobelEdgeFilter()},
  "EmbossFilter": {"instance": ()=>new GLImgEmbossFilter()},
  "AveragecolorFilter": {"instance": ()=>new GLImgAverageColorFilter()},
  "MedianFilter": {"instance": ()=>new GLImgMedianFilter(),
                  //  "config": [{"name": "iteration", "type": "range", "min": "1", "max": "10", "step": "1", "value": "1"},
                  //            ]
                  },
  "BoxblurFilter": {"instance": ()=>new GLImgBoxblurFilter(),
                    "config": [{"name": "radius", "type": "range", "min": "1", "max": "10", "step": "1", "value": "2"},
                              ]
                   },
  "GaussianblurFilter": {"instance": ()=>new GLImgGaussianblurFilter(),
                         "config": [{"name": "radius", "type": "range", "min": "1", "max": "10", "step": "1", "value": "2"},
                                   ]
                        },
  "AdaptiveThresholdFilter": {"instance": ()=>new GLImgAdaptiveThresholdFilter(),
                              "config": [{"name": "radius", "type": "range", "min": "1", "max": "10", "step": "1", "value": "2"},
                                        ]
                             },
  "BlockblurFilter": {"instance": ()=>new GLImgBlockblurFilter(),
                      "config": [{"name": "radius", "type": "range", "min": "1", "max": "10", "step": "1", "value": "2"},
                                ]
                     },
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

