import { GLImgFilter } from '../glimgFilter';

export class GLImgContrastFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float contrast;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
        gl_FragColor = vec4(((textureColor.rgb - vec3(0.5)) * contrast + vec3(0.5)), textureColor.a);

      }
    `;

    this.flipY = -1.0;
    this.contrast = 2.0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'contrast', this.contrast);
  }
}