import { GLImgFilter } from '../glimgFilter';

export class GLImgVibranceFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float vibrance;


      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        lowp float average = (textureColor.r + textureColor.g + textureColor.b) / 3.0;
        lowp float mx = max(textureColor.r, max(textureColor.g, textureColor.b));
        lowp float amt = (mx - average) * (-vibrance * 3.0);
        textureColor.rgb = mix(textureColor.rgb, vec3(mx), amt);
        gl_FragColor = textureColor;
      
      }
    `;



    this.flipY = -1.0;
    this.vibrance = 1.0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'vibrance', this.vibrance);
  }
}