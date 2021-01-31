import { GLImgFilter } from '../glimgFilter';

export class GLImgRGBFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform highp float redAdjustment;
      uniform highp float greenAdjustment;
      uniform highp float blueAdjustment;
     

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
        gl_FragColor = vec4(textureColor.r * redAdjustment, textureColor.g * greenAdjustment, textureColor.b * blueAdjustment, textureColor.a);
      }
    `;

    this.flipY = -1.0;
    this.redAdjustment = 1.0;
    this.greenAdjustment = 1.0;
    this.blueAdjustment = 1.0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'redAdjustment', this.redAdjustment);
    this.setUniformValue1f(gl, glProgram, 'greenAdjustment', this.greenAdjustment);
    this.setUniformValue1f(gl, glProgram, 'blueAdjustment', this.blueAdjustment);
  }
}