import { GLImgFilter } from '../glimgFilter';

export class GLImgHazeFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float hazeDistance;
      uniform highp float slope;
  
      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        //todo reconsider precision modifiers	 
        highp vec4 color = vec4(1.0);//todo reimplement as a parameter
        
        highp float  d = textureCoordinate.y * slope  +  hazeDistance;
        
        highp vec4 c = texture2D(textureID, textureCoordinate) ; // consider using unpremultiply
        
        c = (c - d * color) / (1.0 -d);
        
        gl_FragColor = c; //consider using premultiply(c);
      
      }
    `;
    
    this.flipY = -1.0;
    this.hazeDistance = -0.1;
    this.slope = 0.3;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'hazeDistance', this.hazeDistance);
    this.setUniformValue1f(gl, glProgram, 'slope', this.slope);
  }
}