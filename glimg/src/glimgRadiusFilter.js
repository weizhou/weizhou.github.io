import { GLImgFilter } from './glimgFilter';

export class GLImgRadiusFilter extends GLImgFilter {
  constructor() {
    super();
    this.vertexShader = `
      attribute vec3 inputPosition;
      attribute vec2 inputTextureCoordinate;
      
      uniform int radius;
      uniform float texelWidth;
      uniform float texelHeight; 

      uniform float flipY;
      
      varying vec2 textureCoordinate;
      varying float inputRadius;
      varying float inputTexelWidth;
      varying float inputTexelHeight;
      
      void main()
      {
        gl_Position = vec4(inputPosition * vec3(1, flipY, 1), 1);

        textureCoordinate = inputTextureCoordinate;
        inputRadius = float(radius);
        inputTexelWidth = texelWidth;
        inputTexelHeight = texelHeight;
      }
    `;

    this.fragmentShaderPart1 = 
     `
      #define MAX_RADIUS 10
      precision highp float;

      uniform sampler2D textureID;
            
      varying vec2 textureCoordinate;
      varying float inputRadius;
      varying float inputTexelWidth;
      varying float inputTexelHeight;

    `

    this.fragmentShaderPart2 = 
    `
      vec2 neighborCord(vec2 upleftCord, float texelWidth, float texelHeight, int row, int col) {
        vec2 nCord = upleftCord + vec2(float(col)*texelWidth, float(row)*texelHeight);
        return nCord;
      }

      void main()
      {

        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
        lowp vec3 resultColor = vec3(0.0, 0.0, 0.0);

        float size = 2.0*inputRadius + 1.0;

        for (int i=0; i<2*MAX_RADIUS+1; ++i){
          if (size-0.1 <= float(i)) break;
          for (int j=0; j<2*MAX_RADIUS+1; ++j){
            if (size-0.1 <= float(j)) break;
            vec2 upleftCord = textureCoordinate - vec2(inputRadius*inputTexelWidth, inputRadius*inputTexelHeight);
            vec2 nCord = neighborCord(upleftCord, inputTexelWidth, inputTexelHeight, i, j);
            vec4 nColor = texture2D(textureID, nCord);
            float weight = 
    `;
            
    this.fragmentShaderPart3 = 
    `
            resultColor =  resultColor + nColor.rgb * weight;
          }        
        }

        gl_FragColor = vec4(resultColor, textureColor.a);
      }

    `;

    this.fragmentShader = this.generateFragmentShader();

    this.radius = 2;
    this.flipY = -1.0;
  }

  weightFunc() {
    let weightFuncString = 
    `
      float weight(int i, int j, float radius){
        return 1.0 / ((2.0*radius +1.0)*(2.0*radius + 1.0));
      }  
    `;
    return weightFuncString;
  }

  invokeWeightFunc() {
    let invokeWeightFuncString = 
    `
      weight(i, j, inputRadius);  
    `;
    return invokeWeightFuncString;
  }

  getFragmentShaderPart1(){
    return this.fragmentShaderPart1;
  }

  getFragmentShaderPart2(){
    return this.fragmentShaderPart2;
  }

  getFragmentShaderPart3(){
    return this.fragmentShaderPart3;
  }

  generateFragmentShader() {
    return this.getFragmentShaderPart1() + this.weightFunc() + this.getFragmentShaderPart2() + this.invokeWeightFunc() + this.getFragmentShaderPart3();
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);

    const texelWidth = 1.0/gl.canvas.width;
    const texelHeight = 1.0/gl.canvas.height;
      
    this.setUniformValue1f(gl, glProgram, 'texelWidth', texelWidth);
    this.setUniformValue1f(gl, glProgram, 'texelHeight', texelHeight);
    this.setUniformValue1i(gl, glProgram, 'radius', this.radius);
  }


}

