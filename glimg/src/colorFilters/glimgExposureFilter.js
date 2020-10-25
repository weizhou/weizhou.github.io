import { GLImgFilter } from '../glimgFilter';

export class GLImgExposureFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float exposure;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
        gl_FragColor = vec4(textureColor.rgb * pow(2.0, exposure), textureColor.a);

      }

    `;

    this.flipY = -1.0;
    this.exposure = 1.0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'exposure', this.exposure);
  }
}