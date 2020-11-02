import { GLImgFilter } from '../glimgFilter';

export class GLImgLevelsFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `

    /*
    ** Gamma correction
    ** Details: http://blog.mouaif.org/2009/01/22/photoshop-gamma-correction-shader/
    */
    #define GammaCorrection(color, gamma)								pow(color, 1.0 / gamma)
    
    /*
    ** Levels control (input (+gamma), output)
    ** Details: http://blog.mouaif.org/2009/01/28/levels-control-shader/
    */    
    #define LevelsControlInputRange(color, minInput, maxInput)				min(max(color - minInput, vec3(0.0)) / (maxInput - minInput), vec3(1.0))
    #define LevelsControlInput(color, minInput, gamma, maxInput)				GammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)
    #define LevelsControlOutputRange(color, minOutput, maxOutput) 			mix(minOutput, maxOutput, color)
    #define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput) 	LevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)
   
    precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform mediump vec3 levelMinimum;
      uniform mediump vec3 levelMiddle;
      uniform mediump vec3 levelMaximum;
      uniform mediump vec3 minOutput;
      uniform mediump vec3 maxOutput;
     

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
        gl_FragColor = vec4(LevelsControl(textureColor.rgb, levelMinimum, levelMiddle, levelMaximum, minOutput, maxOutput), textureColor.a);
      }
    `;


    this.flipY = -1.0;
    this.levelMinimum = [0.1, 0.1, 0.1];
    this.levelMaximum = [0.9, 0.9, 0.9];
    this.levelMiddle = [0.3, 0.3, 0.3];
    this.minOutput = [0.3, 0.3, 0.3];
    this.maxOutput = [0.8, 0.8, 0.8];
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'gamma', this.gamma);
    this.setUniformValue3fv(gl, glProgram, 'levelMiddle', this.levelMiddle);
    this.setUniformValue3fv(gl, glProgram, 'levelMinimum', this.levelMinimum);
    this.setUniformValue3fv(gl, glProgram, 'levelMaximum', this.levelMaximum);
    this.setUniformValue3fv(gl, glProgram, 'minOutput', this.minOutput);
    this.setUniformValue3fv(gl, glProgram, 'maxOutput', this.maxOutput);
  }
}