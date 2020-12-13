import { GLImgFilter } from '../glimgFilter';

export class GLImgLuminanceThresholdFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float threshold;

      const highp vec3 W = vec3(0.2125, 0.7154, 0.0721);

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        highp float luminance = dot(textureColor.rgb, W);
        highp float thresholdResult = step(threshold, luminance);
        
        gl_FragColor = vec4(vec3(thresholdResult), textureColor.a);
      
      }
    `;

    this.flipY = -1.0;
    this.threshold = 0.5;
  }


  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'threshold', this.threshold);
  }
}