import { GLImgFilter } from './glimgFilter';

export class GLImg3x3Filter extends GLImgFilter {
  constructor() {
    super();
    this.vertexShader = `
      attribute vec3 inputPosition;
      attribute vec2 inputTextureCoordinate;
      
      uniform float texelWidth;
      uniform float texelHeight; 

      uniform float flipY;
      
      varying vec2 textureCoordinate;
      varying vec2 leftTextureCoordinate;
      varying vec2 rightTextureCoordinate;
      
      varying vec2 topTextureCoordinate;
      varying vec2 topLeftTextureCoordinate;
      varying vec2 topRightTextureCoordinate;
      
      varying vec2 bottomTextureCoordinate;
      varying vec2 bottomLeftTextureCoordinate;
      varying vec2 bottomRightTextureCoordinate;
      
      void main()
      {
        gl_Position = vec4(inputPosition * vec3(1, flipY, 1), 1);
        
        vec2 widthStep = vec2(texelWidth, 0.0);
        vec2 heightStep = vec2(0.0, texelHeight);
        vec2 widthHeightStep = vec2(texelWidth, texelHeight);
        vec2 widthNegativeHeightStep = vec2(texelWidth, -texelHeight);
        
        textureCoordinate = inputTextureCoordinate;
        leftTextureCoordinate = inputTextureCoordinate - widthStep;
        rightTextureCoordinate = inputTextureCoordinate + widthStep;
        
        topTextureCoordinate = inputTextureCoordinate - heightStep;
        topLeftTextureCoordinate = inputTextureCoordinate - widthHeightStep;
        topRightTextureCoordinate = inputTextureCoordinate + widthNegativeHeightStep;
        
        bottomTextureCoordinate = inputTextureCoordinate + heightStep;
        bottomLeftTextureCoordinate = inputTextureCoordinate - widthNegativeHeightStep;
        bottomRightTextureCoordinate = inputTextureCoordinate + widthHeightStep;
      }
    `;
    this.flipY = -1.0;
  }


  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);

    const convMatrixData = new Float32Array(this.convMatrix);
  
    const texelWidth = 1.0/gl.canvas.width;
    const texelHeight = 1.0/gl.canvas.height;
      
    this.setUniformValue1f(gl, glProgram, 'texelWidth', texelWidth);
    this.setUniformValue1f(gl, glProgram, 'texelHeight', texelHeight);
    this.setUniformMatrix3fv(gl, glProgram, 'convolutionMatrix', convMatrixData);
  }


}

