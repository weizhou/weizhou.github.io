import { GLImgFilter } from '../glimgFilter';

export class GLImgGrayscaleFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      const highp vec3 W = vec3(0.2125, 0.7154, 0.0721);
  
      void main()
      {
          lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
          float luminance = dot(textureColor.rgb, W);
          
          gl_FragColor = vec4(vec3(luminance), textureColor.a);
      }
    `;
    this.flipY = -1.0;
  }
}