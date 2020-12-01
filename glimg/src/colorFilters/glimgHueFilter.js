import { GLImgFilter } from '../glimgFilter';

export class GLImgHueFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
    
      uniform mediump float hueAdjust;
      const highp  vec4  kRGBToYPrime = vec4 (0.299, 0.587, 0.114, 0.0);
      const highp  vec4  kRGBToI     = vec4 (0.595716, -0.274453, -0.321263, 0.0);
      const highp  vec4  kRGBToQ     = vec4 (0.211456, -0.522591, 0.31135, 0.0);
      
      const highp  vec4  kYIQToR   = vec4 (1.0, 0.9563, 0.6210, 0.0);
      const highp  vec4  kYIQToG   = vec4 (1.0, -0.2721, -0.6474, 0.0);
      const highp  vec4  kYIQToB   = vec4 (1.0, -1.1070, 1.7046, 0.0);
    

      void main() {
        highp vec4 textureColor = texture2D(textureID, textureCoordinate);

        // Convert to YIQ
        highp float   YPrime  = dot (textureColor, kRGBToYPrime);
        highp float   I      = dot (textureColor, kRGBToI);
        highp float   Q      = dot (textureColor, kRGBToQ);
        
        // Calculate the hue and chroma
        highp float   hue     = atan (Q, I);
        highp float   chroma  = sqrt (I * I + Q * Q);
        
        // Make the user's adjustments
        hue += (-hueAdjust); //why negative rotation?
        
        // Convert back to YIQ
        Q = chroma * sin (hue);
        I = chroma * cos (hue);
        
        // Convert back to RGB
        highp vec4    yIQ   = vec4 (YPrime, I, Q, 0.0);
        textureColor.r = dot (yIQ, kYIQToR);
        textureColor.g = dot (yIQ, kYIQToG);
        textureColor.b = dot (yIQ, kYIQToB);
        
        // Save the result
        gl_FragColor = textureColor;
      }
    `;

    this.flipY = -1.0;
    this.hueAdjust = 90;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'hueAdjust', this.hueAdjust);
  }
}