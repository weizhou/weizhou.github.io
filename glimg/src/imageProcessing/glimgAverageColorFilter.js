import { GLImg3x3Filter } from '../glimg3x3Filter';

export class GLImgAverageColorFilter extends GLImg3x3Filter {

  constructor() {
    super();


    this.fragmentShader = `
      precision highp float;
      uniform sampler2D textureID;
      
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
          highp vec4 topLeftColor = texture2D(textureID, topLeftTextureCoordinate);
          highp vec4 topRightColor = texture2D(textureID, topRightTextureCoordinate);
          highp vec4 bottomLeftColor = texture2D(textureID, bottomLeftTextureCoordinate);
          highp vec4 bottomRightColor = texture2D(textureID, bottomRightTextureCoordinate);
          
          gl_FragColor = 0.25 * (topLeftColor + topRightColor + bottomLeftColor + bottomRightColor);
      }
    `;
  }
}