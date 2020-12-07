import { GLImgFilter } from '../glimgFilter';

export class GLImgColorInversionFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        gl_FragColor = vec4((1.0 - textureColor.rgb), textureColor.a);
      
      }
    `;

    this.flipY = -1.0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
  }
}