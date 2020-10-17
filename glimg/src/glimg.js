import { GLImgFilter } from './glimgFilter';
 
export class GLImage {

  constructor() {
    this._canvas = document.createElement('canvas');

    this._gl = this._canvas.getContext('webgl2');  
    if(!this._gl) {
      throw new Error('WebGL2 not supported');
    }

    this._filters = [];

    this.defineUrlProperty();
  }


  addFilter(filter){
    this._filters.push(filter);
  }

  defineUrlProperty(){
    Object.defineProperty(this, 'url', {
      get() {
        return this._url;
      },
      set(url){
        this._url = url;
        const image = new Image();
        image.onload = ()=> {
          this.setupCanvasAndTexture(image);
          this.setupFilterChainTextureFrameBuffers();

          // if no filter, draw from _texture to Canvas
          // if has filter, draw from _texture to textbuffer, then from textbuffer to canvas
          this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture);
          for(var i=0; i<this._filters.length; ++i){
            this.drawTexture(this._filterChainFramebuffers[i%2], this._filterChainFramebufferTextures[i%2], this._filters[i]);
          }
          var lastFilter = new GLImgFilter();
          this.drawTexture(null, null, lastFilter);
          this.onload();
        };    
        image.src = url;
      }
    });
  }

  setupCanvasAndTexture(image){
    this._canvas.width = image.width;
    this._canvas.height = image.height;
    this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);

    const level = 0;
    const internalFormat = this._gl.RGBA;
    const srcFormat = this._gl.RGBA;
    const srcType = this._gl.UNSIGNED_BYTE;
    this._texture = this._gl.createTexture();
    this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture);
    this._gl.texImage2D(this._gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
    this._gl.generateMipmap(this._gl.TEXTURE_2D);
  }

  setupFilterChainTextureFrameBuffers(){
    this._filterChainFramebufferTextures = [];
    this._filterChainFramebuffers = [];
    for (let i=0; i<2; ++i){
      var texture = this._gl.createTexture();
      this._gl.bindTexture(this._gl.TEXTURE_2D, texture);
      this._filterChainFramebufferTextures.push(texture);
      this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._canvas.width, this._canvas.height, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, null);
      var fbo = this._gl.createFramebuffer();
      this._filterChainFramebuffers.push(fbo);
      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, fbo);
      this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, texture, 0);
    }
  }

  getImage() {
    var image = new Image();
    image.src = this._canvas.toDataURL();
    return image;
  }

  getCanvas() {
    return this._canvas;
  }

  setupShader(filter) {
    if(this._activeVertexShader){
      this._gl.detachShader(this._glProgram, this._activeVertexShader);
      this._gl.deleteShader(this._activeVertexShader);
    }

    if(this._activeFragmentShader){
      this._gl.detachShader(this._glProgram, this._activeFragmentShader);
      this._gl.deleteShader(this._activeFragmentShader);
    }
    
    if(this._glProgram){
      this._gl.deleteProgram(this._glProgram);
    }

    this._glProgram = this._gl.createProgram();

    const vertexShader = this._gl.createShader(this._gl.VERTEX_SHADER);
    this._gl.shaderSource(vertexShader, filter.vertexShader);
    this._gl.compileShader(vertexShader);
  
    const fragmentShader = this._gl.createShader(this._gl.FRAGMENT_SHADER);
    this._gl.shaderSource(fragmentShader, filter.fragmentShader);
    this._gl.compileShader(fragmentShader);


    this._activeVertexShader = vertexShader;
    this._gl.attachShader(this._glProgram, this._activeVertexShader);

    this._activeFragmentShader = fragmentShader;
    this._gl.attachShader(this._glProgram, this._activeFragmentShader);
  
    this._gl.linkProgram(this._glProgram);
  }

  bindShaderAttributes(filter){
    filter.bindShaderAttributes(this._gl, this._glProgram);
  }

  drawTexture(frameBuffer, frameBufferTexture, filter){
    this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, frameBuffer);
    this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);
    this.setupShader(filter);
    this.bindShaderAttributes(filter);
    this._gl.drawArrays(this._gl.TRIANGLE_STRIP, 0, 4);
    if(frameBufferTexture){
      this._gl.bindTexture(this._gl.TEXTURE_2D, frameBufferTexture);
      this._gl.generateMipmap(this._gl.TEXTURE_2D);  
    }  
  }

}

GLImage.prototype.onload = () => {};



