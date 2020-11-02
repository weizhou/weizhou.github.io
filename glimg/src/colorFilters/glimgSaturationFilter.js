import { GLImgFilter } from '../glimgFilter';

export class GLImgSaturationFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float saturation;

      // Values from "Graphics Shaders: Theory and Practice" by Bailey and Cunningham
      const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);

        lowp float luminance = dot(textureColor.rgb, luminanceWeighting);
        lowp vec3 greyScaleColor = vec3(luminance);
 
        gl_FragColor = vec4(mix(greyScaleColor, textureColor.rgb, saturation), textureColor.a);
      }
    `;

    this.flipY = -1.0;
    this.saturation = 1.5;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'saturation', this.saturation);
  }
}