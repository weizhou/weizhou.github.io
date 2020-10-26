import { GLImgFilter } from "../glimgFilter";

export class GLImgNormalFilter extends GLImgFilter {

  constructor(){
    super();

    this.fragmentShader = `
    precision highp float;
    varying vec2 textureCoordinate;
    uniform sampler2D textureID1;
    uniform sampler2D textureID2;
    

    void main()
    {
        lowp vec4 textureColor1 = texture2D(textureID1, textureCoordinate);
        lowp vec4 textureColor2 = texture2D(textureID2, textureCoordinate);
        
        gl_FragColor = vec4(sqrt(pow(textureColor1.rgb, vec3(2)) + pow(textureColor2.rgb, vec3(2))), textureColor1.a);
    }
  `;
  this.flipY = -1.0;

  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);

    this.setUniformValue1i(gl, glProgram, 'textureID1', this.inputTextureId[0]);
    this.setUniformValue1i(gl, glProgram, 'textureID2', this.inputTextureId[1]);
  }


}