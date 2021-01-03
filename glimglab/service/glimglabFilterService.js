
class GlImagelabFilterService {

  get colorAdjustFilters() {
    return [
      "Brightness Filter",
      "Contrast Filter",
      "Exposure Filter",
      "Saturation Filter",
      "Gamma Filter",,
      "Levels Filter",
      "RGB Filter",
      "Hue Filter",
      "Tint Filter",
      "Temperature Filter",
      "HighlightShadow Filter",
      "Amatorka Filter",
      "ColorInversion Filter",
      "Monochrome Filter",
      "FalseColor Filter",
      "Haze Filter",
      "SepiaTone Filter",
      "Opacity Filter",
      "LumiThreshold Filter",
      "Chromakeying Filter",
      "Vibrance Filter",
      "HighlightShadowTint Filter"
    ]
  };

  get imageProcessingFilters() {
    return [
      "Grayscale Filter",
      "Sobel Filter",
      "Emboss Filter",
      "Averagecolor Filter",
      "Median Filter",
      "Boxblur Filter",
      "Gaussianblur Filter",
      "AdaptiveThreshold Filter",
      "Blockblur Filter"
    ]
  }
}

const glimglabFiltersService = new GlImagelabFilterService();






