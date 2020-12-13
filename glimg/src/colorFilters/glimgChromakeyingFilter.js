import { GLImgFilter } from '../glimgFilter';

export class GLImgChromakeyingFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform float thresholdSensitivity;
      uniform float smoothing;
      uniform vec3 colorToReplace;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        float maskY = 0.2989 * colorToReplace.r + 0.5866 * colorToReplace.g + 0.1145 * colorToReplace.b;
        float maskCr = 0.7132 * (colorToReplace.r - maskY);
        float maskCb = 0.5647 * (colorToReplace.b - maskY);
        
        float Y = 0.2989 * textureColor.r + 0.5866 * textureColor.g + 0.1145 * textureColor.b;
        float Cr = 0.7132 * (textureColor.r - Y);
        float Cb = 0.5647 * (textureColor.b - Y);

        float blendValue = smoothstep(thresholdSensitivity, thresholdSensitivity + smoothing, distance(vec2(Cr, Cb), vec2(maskCr, maskCb)));
        gl_FragColor = vec4(textureColor.rgb, textureColor.a * blendValue);
      
      }
    `;

    this.flipY = -1.0;
    this.thresholdSensitivity = 0.1;
    this.smoothing = 0.05;
    this.colorToReplace = [0.2, 0.2, 0.2];
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'thresholdSensitivity', this.thresholdSensitivity);
    this.setUniformValue1f(gl, glProgram, 'smoothing', this.smoothing);
    this.setUniformValue3fv(gl, glProgram, 'colorToReplace', this.colorToReplace);
  }
}