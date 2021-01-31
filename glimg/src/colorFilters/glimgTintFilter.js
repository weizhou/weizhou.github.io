import { GLImgFilter } from '../glimgFilter';

export class GLImgTintFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float tint;

      lowp float normTint = tint/100.0;

      const mediump mat3 RGBtoYIQ = mat3(0.299, 0.587, 0.114, 0.596, -0.274, -0.322, 0.212, -0.523, 0.311);
      const mediump mat3 YIQtoRGB = mat3(1.0, 0.956, 0.621, 1.0, -0.272, -0.647, 1.0, -1.105, 1.702);


      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        mediump vec3 yiq = RGBtoYIQ * textureColor.rgb; //adjusting tint
        yiq.b = clamp(yiq.b + normTint*0.5226*0.1, -0.5226, 0.5226);
        lowp vec3 rgb = YIQtoRGB * yiq;
      
        gl_FragColor = vec4(rgb, textureColor.a);
      
      }
    `;

    this.flipY = -1.0;
    this.tint = 0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'tint', this.tint);
  }
}