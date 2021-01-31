import { GLImgFilter } from '../glimgFilter';

export class GLImgTemperatureFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float temperature;

      lowp float normTemperature = (temperature < 5000.0) ? (0.0004*(temperature-5000.0)) : (0.00006*(temperature-5000.0));
      const lowp vec3 warmFilter = vec3(0.93, 0.54, 0.0);

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        lowp vec3 processed = vec3(
          (textureColor.r < 0.5 ? (2.0 * textureColor.r * warmFilter.r) : (1.0 - 2.0 * (1.0 - textureColor.r) * (1.0 - warmFilter.r))), //adjusting temperature
          (textureColor.g < 0.5 ? (2.0 * textureColor.g * warmFilter.g) : (1.0 - 2.0 * (1.0 - textureColor.g) * (1.0 - warmFilter.g))), 
          (textureColor.b < 0.5 ? (2.0 * textureColor.b * warmFilter.b) : (1.0 - 2.0 * (1.0 - textureColor.b) * (1.0 - warmFilter.b))));
      
        gl_FragColor = vec4(mix(textureColor.rgb, processed, normTemperature), textureColor.a);
      
      }
    `;

    this.flipY = -1.0;
    this.temperature = 5000;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'temperature', this.temperature);
  }
}