import { GLImgRadiusFilter } from '../glimgRadiusFilter';

export class GLImgBlockblurFilter extends GLImgRadiusFilter {
  constructor() {
    super();

  }


  generateFragmentShader(){
    return `
    
    precision highp float;

    uniform sampler2D textureID;
          
    varying vec2 textureCoordinate;
    varying float inputRadius;
    varying float inputTexelWidth;
    varying float inputTexelHeight;

    void main()
    {

      vec2 blockSize = vec2(inputRadius * inputTexelWidth, inputRadius * inputTexelHeight);
      vec2 block = floor(textureCoordinate / blockSize);
      vec2 blockStartCoordinate = block * blockSize;

      gl_FragColor = texture2D(textureID, blockStartCoordinate);

    }

    
    
    `
  }


}

