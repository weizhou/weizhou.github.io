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

  resetFilters() {
    this._filters = [];
  }

  addFilter(filter){
    if(filter.isAssembeFilter){
      var filters = filter.getAssemblingFilters();
      for(let i=0; i<filters.length; ++i){
        this.addFilter(filters[i]);
      }
    }else{
      this._filters.push(filter);
    }
  }

  /*
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
          this.setupTempTextureFrameBuffers();

          for(var i=0; i<this._filters.length; ++i){
            this.drawTexture(this._filters[i]);
          }
          var lastFilter = new GLImgFilter();
          lastFilter.outputTextureId = null;
          this.drawTexture(lastFilter);
          this.onload();
        };    
        image.src = url;
      }
    });
  }
*/


  defineUrlProperty(){
    Object.defineProperty(this, 'url', {
      get() {
        return this._url;
      },
      async set(url){
        this._url = url;
        await this.applyFilterToImage(url);
      }
    });
  }

  async applyFilterToImage(url) {
    var image = await this.loadImage(url);
    this.setupCanvasAndTexture(image);
    this.setupFilterChainTextureFrameBuffers();
    this.setupTempTextureFrameBuffers();

    for(var i=0; i<this._filters.length; ++i){
      if(this._filters[i].needGL){
        await this._filters[i].setGL(this._gl);
      }
      this.drawTexture(this._filters[i]);
    }
    var lastFilter = new GLImgFilter();
    lastFilter.outputTextureId = null;
    this.drawTexture(lastFilter);
    this.onload();
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
      this._filterChainFramebufferTextures.push(texture);
      this._gl.bindTexture(this._gl.TEXTURE_2D, texture);
      this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._canvas.width, this._canvas.height, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, null);
      this._gl.generateMipmap(this._gl.TEXTURE_2D);

      var fbo = this._gl.createFramebuffer();
      this._filterChainFramebuffers.push(fbo);
      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, fbo);
      this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, texture, 0);
    }
    this._activeFilterChainFrameBufferId = null;
  }

  //temp frame buffers for filters with multiple input textures
  setupTempTextureFrameBuffers(){
    this._tempFramebufferTextures = [];
    this._tempFramebuffers = [];
    for (let i=0; i<5; ++i){
      var texture = this._gl.createTexture();
      this._tempFramebufferTextures.push(texture);
      this._gl.bindTexture(this._gl.TEXTURE_2D, texture);
      this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._canvas.width, this._canvas.height, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, null);
      this._gl.generateMipmap(this._gl.TEXTURE_2D);

      var fbo = this._gl.createFramebuffer();
      this._tempFramebuffers.push(fbo);
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

  drawTexture(filter){

    //filter should have input textureid, and output textureid
    this.bindInputTexture(filter);
    this.bindOutputTexture(filter);

    this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);
    this.setupShader(filter);
    this.bindShaderAttributes(filter);
    this._gl.drawArrays(this._gl.TRIANGLE_STRIP, 0, 4);
  }

  bindInputTexture(filter) {
    //if input textureid is 0, then it is either _texture, or the activefilterChainBufferTexture
    // else the input textures are a list of the tempBufferTexture, need to attach
    if(filter.inputTextureId === 0){
      this._gl.activeTexture(this._gl.TEXTURE0);
      if(this._activeFilterChainFrameBufferId === null){
        this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture);
      }else{
        this._gl.bindTexture(this._gl.TEXTURE_2D, this._filterChainFramebufferTextures[this._activeFilterChainFrameBufferId]);
      }
    }else if(Array.isArray(filter.inputTextureId)){
      // Todo: need to handle a list of inputTexture
      for(var i=0; i<filter.inputTextureId.length; ++i){
        this._gl.activeTexture(this._gl.TEXTURE0+filter.inputTextureId[i]);
        this._gl.bindTexture(this._gl.TEXTURE_2D, this._tempFramebufferTextures[filter.inputTextureId[i]-filter.tempTextureIDOffset]);  
      }
    }else{
      this._gl.activeTexture(this._gl.TEXTURE0+filter.inputTextureId);
      this._gl.bindTexture(this._gl.TEXTURE_2D, this._tempFramebufferTextures[filter.inputTextureId-filter.tempTextureIDOffset]);
    }

  }

  bindOutputTexture(filter) {

    //filter has outputTextureID
    //if outputTextureId is null, then render to canvas
    //if outputTextureId is 0, then render to filterChainFrameBuffer
    //if outputTextureId is larger than 0, then reder to tempBufferTexture
    if(filter.outputTextureId === null){
      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
    }else if(filter.outputTextureId === 0){
      if(this._activeFilterChainFrameBufferId === null){
        this._activeFilterChainFrameBufferId = 0;
      }else{
        this._activeFilterChainFrameBufferId = (this._activeFilterChainFrameBufferId + 1) % 2;
      }
      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._filterChainFramebuffers[this._activeFilterChainFrameBufferId]);
    }else{
      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._tempFramebuffers[filter.outputTextureId-filter.tempTextureIDOffset]);
    }



  }

}

GLImage.prototype.onload = () => {};



