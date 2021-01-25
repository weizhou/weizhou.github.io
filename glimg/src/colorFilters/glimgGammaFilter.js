import { GLImgFilter } from '../glimgFilter';

export class GLImgGammaFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float gamma;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);

        gl_FragColor = vec4(pow(textureColor.rgb, vec3(gamma)), textureColor.a);
      }
    `;

    this.flipY = -1.0;
    this.gamma = 1.5;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'gamma', this.gamma);
  }
}