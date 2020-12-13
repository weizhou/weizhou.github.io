import { GLImgFilter } from '../glimgFilter';

export class GLImgOpacityFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float opacity;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        gl_FragColor = vec4(textureColor.rgb, textureColor.a * opacity);
         
      }
    `;

    this.flipY = -1.0;
    this.opacity = 1.0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'opacity', this.opacity);
  }
}