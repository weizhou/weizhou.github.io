import { GLImgFilter } from '../glimgFilter';
import amatorkaImg from "../assets/images/lookup_amatorka.png";
import etikateImg from "../assets/images/lookup_miss_etikate.png";

export class GLImgAmatorkaFilter extends GLImgFilter {
  constructor() {
    super();

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;
      uniform sampler2D lookupTextureID;
      uniform lowp float intensity;

      void main() {
        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);

        // if (textureColor.r > 0.95 && textureColor.g > 0.95 && textureColor.b > 0.95) {
        //   textureColor = vec4(floor(textureColor.r*255.0)/255.0, floor(textureColor.g*255.0)/255.0, floor(textureColor.b*255.0)/255.0, 1.0);
        // } else {
        //   textureColor = vec4(38.0/255.0, 38.0/255.0, 38.0/255.0, 1.0);
        // }
        
        // textureColor = vec4(109.0/255.0, 35.0/255.0, 68.0/255.0, 1.0);

        highp float blueColor = textureColor.b * 63.0;
        
        highp vec2 quad1;
        quad1.y = floor(floor(blueColor) / 8.0);
        quad1.x = floor(blueColor) - (quad1.y * 8.0);
        
        highp vec2 quad2;
        quad2.y = floor(ceil(blueColor) / 8.0);
        quad2.x = ceil(blueColor) - (quad2.y * 8.0);
        
        highp vec2 texPos1;
        // texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
        // texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);
        texPos1.x = (quad1.x + textureColor.r) * 0.125;
        texPos1.y = (quad1.y + textureColor.g) * 0.125;

        // highp vec2 texPos2;
        // texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
        // texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);
        
        highp vec4 newColor1 = texture2D(lookupTextureID, texPos1);
        // highp vec4 newColor1 = texture2D(lookupTextureID, vec2(254.0/255.0, 254.0/255.0));

        // highp vec4 newColor2 = texture2D(lookupTextureID, texPos2);
        
        // highp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
        // gl_FragColor = mix(textureColor, vec4(newColor1.rgb, textureColor.a), intensity);

        // newColor1 = textureColor;
        // newColor1 = vec4(texPos1.x, texPos1.y, textureColor.g, 1.0);
        // if(!(textureCoordinate.x > 0.52 && textureCoordinate.x < 0.55 && textureCoordinate.y > 0.52 && textureCoordinate.y < 0.55 )){
          // newColor1 = vec4(texPos1.x, texPos1.y, 0.0, 1.0);
          // newColor1 = textureColor;
          // newColor1 = vec4(1.0, 1.0, 1.0, 1.0);
        // }

        // newColor1 = texture2D(lookupTextureID, vec2(237.0/255.0, 184.0/255.0));
        gl_FragColor = newColor1;

      }
    `;


    this.needGL = true;

    this.flipY = -1.0;
    this.intensity = 1.0;
  }

  async setGL(gl){
    this._gl = gl;
    await this.createTextureFromImage(amatorkaImg);
    // await this.createTextureFromImage(etikateImg);
  }

  async createTextureFromImage(url) {
    var image = await this.loadImage(url);
    this._texture = this._gl.createTexture();
    
    this._gl.activeTexture(this._gl.TEXTURE0+1);
    const level = 0;
    const internalFormat = this._gl.RGBA;
    const srcFormat = this._gl.RGBA;
    const srcType = this._gl.UNSIGNED_BYTE;
    this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture);
    this._gl.texImage2D(this._gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
    this._gl.generateMipmap(this._gl.TEXTURE_2D);

  }

  async loadImage(url){
    return new Promise(function(resolve, reject) {
      const image = new Image();  
      image.onload = ()=>{
        resolve(image);
      }
      image.onerror = error => {
        reject(error);
      }
      image.src = url;
    });
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);
    this.setUniformValue1f(gl, glProgram, 'intensity', this.intensity);
    this.setUniformValue1i(gl, glProgram, 'lookupTextureID', 1);

    
  }
}