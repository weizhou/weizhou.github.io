import { GLImgFilter } from '../glimgFilter';

export class GLImgColormatrixFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp mat4 colorMatrix;
      uniform lowp float intensity;
  

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
        lowp vec4 outputColor = textureColor * colorMatrix;        
        gl_FragColor = (intensity * outputColor) + ((1.0 - intensity) * textureColor);

      }
    `;

    this.flipY = -1.0;
    this.colorMatrix =
    [1, 0, 0, 0,
     1, 1, 1, 0,
     0, 1, 1, 0,
     0, 0, 0, 1
    ];
    this.intensity = 0.5;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'intensity', this.intensity);
    this.setUniformMatrix4fv(gl, glProgram, 'colorMatrix', this.colorMatrix);
  }
}