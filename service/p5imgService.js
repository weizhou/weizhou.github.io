class P5ImgService {

    constructor() {
        this.filters = {
            "Color Filters": {
                "BrightnessFilter": {"brightness": 0.2},
                "ChromakeyingFilter": {"thresholdSensitivity": 0.1, "smoothing": 0.01, "colorToReplace": [0.1, 0.1, 0.0]},
                "ColorInversionFilter": {},
                "ColormatrixFilter": {"colorMatrix": [1,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,1], "intensity": 0.2},
                "ContrastFilter": {"contrast": 2.0},
                "ExposureFilter": {"exposure": 0.5},
                "FalseColorFilter": {"firstColor": [1, 0, 0], "secondColor": [0,1,1]},
                "GammaFilter": {"gamma": 2.0},
                "GrayscaleFilter": {},
                "HazeFilter": {"hazeDistance": -1.0, "slope": 1.0},
                "HighlightShadowFilter": {"shadows": 1.0, "highlights": 2.0},
                "HighlightShadowTintFilter": {"shadowTintIntensity": 0.1, "highlightTintIntensity": 0.7, "shadowTintColor": [1,0,0], "highlightTintColor": [1, 1, 0]},
                "HueFilter": {"hueAdjust": 2.0},
                "LevelsFilter": {"levelMinimum":[0.1,0.1,0.1], "levelMiddle": [0.4,0.4,0.4], "levelMaximum": [0.8,0.8,0.8], "minOutput": [1.0,0.2,0.0], "maxOutput": [1.0,0.6,0.3]},
                "LuminanceThresholdFilter": {"threshold": 0.5},
                "MonochromeFilter": {"intensity": 0.5, "filterColor": [1.0, 0.1, 0.1]},
                "OpacityFilter": {"opacity": 0.5},
                "RGBFilter": {"redAdjustment": 0.1, "greenAdjustment": 2.0, "blueAdjustment": 0.1},
                "SaturationFilter": {"saturation": 0.5},
                "SepiaToneFilter": {},
                "TemperatureFilter": {"temperature": 100000},
                "TintFilter": {"tint": 300},
                "VibranceFilter": {"vibrance": 2}
            },
            "Image Processing": {
                "AdaptiveThresholdFilter": {"radius": 5},
                "AverageColorFilter": {},
                "BilateralBlurFilter": {"distanceNormalizationFactor": 2.7},
                "BlockBlurFilter": {"radius": 10},
                "BoxBlurFilter": {"radius": 5},
                "CannyEdgeFilter": {},
                "ClosingFilter": {"radius": 3},
                "ColorLocalBinaryPatternFilter": {},
                "ColourFASTFeatureDetectorFilter": {"radius": 3},
                "CropFilter": {"x":100,"y":200,"width":300,"height":200},
                "DilationFilter": {"radius": 2},
                "EmbossFilter": {},
                "ErosionFilter": {"radius": 3},
                "GaussianBlurFilter": {"radius": 3, "sigma": 3},
                "HarrisCornerDetectionFilter": {"blurRadius": 1, "blurSigma": 3, "sensitivity": 0.3},
                "LanczosResamplingFilter": {},
                "LocalBinaryPatternFilter": {},
                "MedianFilter": {},
                "MotionBlurFilter": {"directionalTexelStep": [0.02, 0.0]},
                "NobleCornerDetectionFilter": {"blurRadius": 1, "blurSigma": 3, "sensitivity": 0.3},
                "NonMaximumSuppressionFilter": {"lowerThreshold": 0.1,"upperThreshold": 0.9},
                "OpeningFilter": {"radius": 3},
                "PrewittEdgeFilter": {"edgeStrength": 2.0},
                "SharpenFilter": {"sharpness": 2.0},
                "ShiTomasiFeatureDetectionFilter": {"blurRadius": 1, "blurSigma": 3, "sensitivity": 0.3},
                "SobelEdgeFilter": {},
                "TiltShiftFilter": {"topFocusLevel":0.7,"bottomFocusLevel":0.1,"focusFallOffRate":0.2,"blurRadius":10,"blurSigma":10},
                "WeakPixelInclusionFilter": {"sumTest":5,"pixelTest":0.7},
                "XYDerivativeFilter": {"edgeStrength": 2.0},
                "ZoomBlurFilter": {"blurCenter": [0.5, 0.5], "blurSize": 2}
            },
            "Visual Effects": {
                "BulgeFilter": {"center":[0.5,0.6], "radius":0.9,"scale":0.3},
                "CGAColorSpaceFilter": {},
                "CrosshatchFilter": {"crossHatchSpacing":0.02,"lineWidth":0.005},
                "GlassSphereRefractionFilter": {"center":[0.5,0.5],"radius":0.5,"aspectRatio":1,"refractiveIndex":0.5},
                "HalftoneFilter": {"fractionalWidthOfPixel":0.01,"aspectRatio":1,"dotScaling":2},
                "KuwaharaFilter": {"radius": 3},
                "PinchFilter": {"aspectRatio": 1, "center": [0.5,0.5], "radius": 0.4, "scale": 1.0},
                "PixellationFilter": {"fractionalWidthOfPixel": 0.05, "aspectRatio": 1.0},
                "PolarPixellateFilter": {"center":[0.5,0.5],"pixelSize":[0.05,0.05]},
                "PolkaDotFilter": {"fractionalWidthOfPixel":0.02,"aspectRatio":1,"dotScaling":0.5},
                "PosterizeFilter": {"colorLevels": 5},
                "SketchFilter": {"edgeStrength": 2.0},
                "SmoothToonFilter": {"radius": 3, "sigma": 3.0, "threshold": 0.3, "quantizationLevels": 5},
                "SolarizeFilter": {"threshold": 0.5},
                "SphereRefractionFilter": {"center":[0.5,0.5],"radius":0.5,"aspectRatio":1,"refractiveIndex":0.2},
                "StretchFilter": {"center": [0.5,0.7]},
                "SwirlFilter": {"center":[0.5,0.5],"radius":1,"angle":0.3},
                "ThresholdSketchFilter": {"edgeStrength": 2.0, "threshold": 0.5},
                "ToonFilter": {"threshold": 0.3, "quantizationLevels": 5},
                "VignetteFilter": {"vignetteCenter": [0.5,0.5], "vignetteColor": [1, 0, 0], "vignetteStart": 0.2, "vignetteEnd": 0.7}
            }
        };

        this.blenders = {
            "Simple Blend": {
                "AddBlender": {},
                "AlphaBlender": {},
                "ColorBlender": {},
                "DifferenceBlender": {},
                "DivideBlender": {},
                "LuminosityBlender": {},
                "MultiplyBlender": {},
                "OverlayBlender": {},
                "SourceOverBlender": {},
                "SubtractBlender": {}                
            },
            "Visual Effects": {
                "ChromaKeyBlender": {},
                "ColorBurnBlender": {},
                "ColorDodgeBlender": {},
                "DarkenBlender": {},
                "ExclusionBlender": {},
                "HardLightBlender": {},
                "HueBlender": {},
                "LightenBlender": {},
                "LinearBurnBlender": {},
                "NormalBlender": {},
                "SaturationBlender": {},
                "ScreenBlender": {},
                "SoftLightBlender": {},    
            }
        };
    }

    getFilters() {
        return this.filters;
    }

    getExpandedFilters() {
        let expandedFilters = {};
        for (const [key, value] of Object.entries(this.filters)){
            expandedFilters = {
                ...expandedFilters,
                ...value
            }
        }
        return expandedFilters;
    }

    getBlenders() {
        return this.blenders;
    }

    getExpandedBlenders() {
        let expandedBlenders = {};
        for (const [key, value] of Object.entries(this.blenders)){
            expandedBlenders = {
                ...expandedBlenders,
                ...value
            }
        }
        return expandedBlenders;
    }

    getNavContent(navType) {
        switch (navType) {
            case "Filter":
                return this.getFilters();
            case "Blender":
                return this.getBlenders();
        }
    }
}

var p5ImageState = new P5ImgState();