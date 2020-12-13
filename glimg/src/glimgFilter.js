export class GLImgFilter {
  constructor() {
    this.vertexShader = `
      precision mediump float;

      attribute vec3 inputPosition;
      attribute vec2 inputTextureCoordinate;

      uniform float flipY;
    
      varying vec2 textureCoordinate;

      void main() {
        gl_Position = vec4(inputPosition * vec3(1, flipY, 1), 1);
        textureCoordinate = inputTextureCoordinate;
      }
    `;

    this.fragmentShader = `
      precision highp float;
      varying vec2 textureCoordinate;
      uniform sampler2D textureID;

      void main() {
        gl_FragColor = texture2D(textureID, textureCoordinate);
      }
    `;

    this.flipY = 1.0;
    this.inputTextureId = 0;
    this.outputTextureId = 0;
    this.tempTextureIDOffset = 5;
  }

  bindDataToAttribute(gl, glProgram, attri, data, size) {
    const dataBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, dataBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

    const attriLocation = gl.getAttribLocation(glProgram, attri);
    gl.enableVertexAttribArray(attriLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, dataBuffer);
    gl.vertexAttribPointer(attriLocation, size, gl.FLOAT, false, 0, 0);
  }

  setUniformValue1i(gl, glProgram, attri, data) {
    const uniformLocation = gl.getUniformLocation(glProgram, attri);
    gl.useProgram(glProgram);
    gl.uniform1i(uniformLocation, data);  
  }

  setUniformValue1f(gl, glProgram, attri, data) {
    const uniformLocation = gl.getUniformLocation(glProgram, attri);
    gl.useProgram(glProgram);
    gl.uniform1f(uniformLocation, data);  
  }

  setUniformValue1fv(gl, glProgram, attri, data) {
    const uniformLocation = gl.getUniformLocation(glProgram, attri);
    gl.useProgram(glProgram);
    gl.uniform1fv(uniformLocation, data);  
  }

  setUniformValue3fv(gl, glProgram, attri, data) {
    const uniformLocation = gl.getUniformLocation(glProgram, attri);
    gl.useProgram(glProgram);
    gl.uniform3fv(uniformLocation, data);  
  }

  setUniformValue4fv(gl, glProgram, attri, data) {
    const uniformLocation = gl.getUniformLocation(glProgram, attri);
    gl.useProgram(glProgram);
    gl.uniform4fv(uniformLocation, data);  
  }

  setUniformMatrix3fv(gl, glProgram, attri, data) {
    const uniformLocation = gl.getUniformLocation(glProgram, attri);
    gl.useProgram(glProgram);
    gl.uniformMatrix3fv(uniformLocation, false, data); 
  }

  setUniformMatrix4fv(gl, glProgram, attri, data) {
    const uniformLocation = gl.getUniformLocation(glProgram, attri);
    gl.useProgram(glProgram);
    gl.uniformMatrix4fv(uniformLocation, false, data); 
  }

  bindShaderAttributes(gl, glProgram){  
    const vertexData = [
      -1.0, -1.0, 0.0,
      1.0, -1.0, 0.0,
      -1.0, 1.0, 0.0,
      1.0, 1.0, 0.0,
    ];
  
    const textureCoordinateData = [
      0.0, 1.0,
      1.0, 1.0,
      0.0, 0.0,
      1.0, 0.0,
    ]
  
    this.bindDataToAttribute(gl, glProgram, 'inputPosition', vertexData, 3);
    this.bindDataToAttribute(gl, glProgram, 'inputTextureCoordinate', textureCoordinateData, 2);
    this.setUniformValue1f(gl, glProgram, 'flipY', this.flipY);
    this.setUniformValue1i(gl, glProgram, 'textureID', this.inputTextureId);
  }

}
