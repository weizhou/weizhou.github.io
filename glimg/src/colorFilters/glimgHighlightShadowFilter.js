import { GLImgFilter } from '../glimgFilter';

export class GLImgHighlightShadowFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float shadows;
      uniform lowp float highlights;

      const mediump vec3 luminanceWeighting = vec3(0.3, 0.3, 0.3);

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        mediump float luminance = dot(textureColor.rgb, luminanceWeighting);
    
        mediump float shadow = clamp((pow(luminance, 1.0/(shadows+1.0)) + (-0.76)*pow(luminance, 2.0/(shadows+1.0))) - luminance, 0.0, 1.0);
        mediump float highlight = clamp((1.0 - (pow(1.0-luminance, 1.0/(2.0-highlights)) + (-0.8)*pow(1.0-luminance, 2.0/(2.0-highlights)))) - luminance, -1.0, 0.0);
        lowp vec3 result = vec3(0.0, 0.0, 0.0) + ((luminance + shadow + highlight) - 0.0) * ((textureColor.rgb - vec3(0.0, 0.0, 0.0))/(luminance - 0.0));
      
        gl_FragColor = vec4(result, textureColor.a);
        
      }
    `;

    this.flipY = -1.0;
    this.shadows = 0.0;
    this.highlights = 1.0;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'shadows', this.shadows);
    this.setUniformValue1f(gl, glProgram, 'highlights', this.highlights);
  }
}