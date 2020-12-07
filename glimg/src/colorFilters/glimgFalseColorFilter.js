import { GLImgFilter } from '../glimgFilter';

export class GLImgFalseColorFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform vec3 firstColor;
      uniform vec3 secondColor;
      
      const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);
  
      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        float luminance = dot(textureColor.rgb, luminanceWeighting);
        
        gl_FragColor = vec4( mix(firstColor.rgb, secondColor.rgb, luminance), textureColor.a);
      
      }
    `;


    this.flipY = -1.0;
    this.firstColor = [0.0, 0.0, 0.5];
    this.secondColor = [1.0, 0.0, 0.0];
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue3fv(gl, glProgram, 'firstColor', this.firstColor);
    this.setUniformValue3fv(gl, glProgram, 'secondColor', this.secondColor);
  }
}