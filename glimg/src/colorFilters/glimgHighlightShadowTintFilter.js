import { GLImgFilter } from '../glimgFilter';

export class GLImgHighlightShadowTintFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform lowp float shadowTintIntensity;
      uniform lowp float highlightTintIntensity;
      uniform highp vec3 shadowTintColor;
      uniform highp vec3 highlightTintColor;
  
      const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);
	
        highp float luminance = dot(textureColor.rgb, luminanceWeighting);
        
        highp vec4 shadowResult = mix(textureColor, max(textureColor, vec4( mix(shadowTintColor, textureColor.rgb, luminance), textureColor.a)), shadowTintIntensity);
        highp vec4 highlightResult = mix(textureColor, min(shadowResult, vec4( mix(shadowResult.rgb, highlightTintColor, luminance), textureColor.a)), highlightTintIntensity);
    
        gl_FragColor = vec4( mix(shadowResult.rgb, highlightResult.rgb, luminance), textureColor.a);
       
      }
    `;

    this.flipY = -1.0;
    this.shadowTintIntensity = 0.5;
    this.highlightTintIntensity = 0.5;
    this.shadowTintColor = [1.0, 0.0, 0.0];
    this.highlightTintColor = [0.0, 0.0, 1.0];
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'shadowTintIntensity', this.shadowTintIntensity);
    this.setUniformValue1f(gl, glProgram, 'highlightTintIntensity', this.highlightTintIntensity);
    this.setUniformValue3fv(gl, glProgram, 'shadowTintColor', this.shadowTintColor);
    this.setUniformValue3fv(gl, glProgram, 'highlightTintColor', this.highlightTintColor);
  }
}