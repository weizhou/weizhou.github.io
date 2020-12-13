import { GLImgRadiusFilter } from '../glimgRadiusFilter';

export class GLImgAdaptiveThresholdFilter extends GLImgRadiusFilter {
  constructor() {
    super();
  }

  getFragmentShaderPart3(){
    let part3 = 
    `
            resultColor =  resultColor + nColor.rgb * weight;
          }        
        }

        vec3 W = vec3(0.2125, 0.7154, 0.0721);
        highp float thresholdResult = step(dot(resultColor.rgb, W) - 0.05, dot(textureColor.rgb, W));
        
        gl_FragColor = vec4(vec3(thresholdResult), 1.0);

      }
    `
    return part3;
  }

}

