import { GLImgFilter } from '../glimgFilter';

export class GLImgBrightnessFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float brightness;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
        // gl_FragColor = textureColor;
        gl_FragColor = vec4(textureColor.rgb+vec3(brightness), textureColor.a);
      }

    `;
    this.flipY = -1.0;
    this.brightness = 0.2;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'brightness', this.brightness);
  }
}