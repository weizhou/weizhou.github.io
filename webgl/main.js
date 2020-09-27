const {mat4, vec3} = glMatrix;

const canvas = document.querySelector('canvas');
const canvasContainer = document.querySelector('div');
canvas.width = canvasContainer.clientWidth;
canvas.height = canvasContainer.clientHeight;
const gl = canvas.getContext('webgl');

if(!gl) {
  throw new Error('WebGL not supported');
}

function spherePointCloud (pointCount) {
  points = [];

  for(let i=0; i<pointCount; i++){
    const r = () => Math.random() - 0.5;
    const inputPoint = [r(), r(), r()];
    const outputPoint = vec3.normalize(vec3.create(), inputPoint);
    // const outputPoint = inputPoint;
    points.push(...outputPoint);
  }

  return points;
}
const vertexData = spherePointCloud(1e5);

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision highp float;

attribute vec3 position;
varying vec3 vColor;

uniform mat4 matrix;

void main() {
  // vColor = vec3(position.xy, 1);
  vColor = vec3(0, 0.8, 1);
  gl_Position = matrix * vec4(position, 1);
  gl_PointSize = 0.01;
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision highp float;

varying vec3 vColor;

void main() {
  gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(positionLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

const uniformLocations = {
  matrix: gl.getUniformLocation(program, 'matrix'),
}

const modelMatrix = mat4.create();
const viewMatrix = mat4.create();
const projectionMatrix = mat4.create();

mat4.perspective(projectionMatrix,
  75 * Math.PI/180,
  canvas.width/canvas.height,
  1e-4,
  1e4);

const mvMatrix = mat4.create();
const mvpMatrix = mat4.create();

mat4.translate(modelMatrix, modelMatrix, [0, 0, 0]);
mat4.translate(viewMatrix, viewMatrix, [0, 0, 1.7]);
mat4.invert(viewMatrix, viewMatrix);

function animate() {
  requestAnimationFrame(animate);

  mat4.rotateY(modelMatrix, modelMatrix, 0.01);
  mat4.rotateX(modelMatrix, modelMatrix, 0.01);

  mat4.multiply(mvMatrix, viewMatrix, modelMatrix);
  mat4.multiply(mvpMatrix, projectionMatrix, mvMatrix);
  gl.uniformMatrix4fv(uniformLocations.matrix, false, mvpMatrix);
  gl.drawArrays(gl.POINTS, 0, vertexData.length/3);
}

animate();























