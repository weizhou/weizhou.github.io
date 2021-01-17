import { GLImgRadiusFilter } from '../glimgRadiusFilter';

export class GLImgGaussianblurFilter extends GLImgRadiusFilter {
  constructor() {
    super();
    this.sigma = 3.0;
  }

  weightFunc() {
    let weightFuncString = 
    `
      uniform float sigma;
      uniform float weightSum;

      float weight(int i, int j, float radius, float sigma, float weightSum){
        float size = 2.0*radius + 1.0;
        float w = exp(-((float(i)-radius)*(float(i)-radius)+(float(j)-radius)*(float(j)-radius)) / (2.0*sigma*sigma));
        return w/weightSum;
      }  
    `;
    return weightFuncString;
  }

  invokeWeightFunc() {
    let invokeWeightFuncString = 
    `
      weight(i, j, inputRadius, sigma, weightSum);  
    `;
    return invokeWeightFuncString;
  }


  gaussianKernelSum(radius, sigma){
    let sum = 0;
    for (let i=-radius; i<=radius; ++i){
      for(let j=-radius; j<=radius; ++j){
        let hg = Math.exp(- (i*i+j*j) / (2*sigma*sigma));
        sum += hg;
      }
    }
    return sum;
  }

  bindShaderAttributes(gl, glProgram){  
    super.bindShaderAttributes(gl, glProgram);

    this.setUniformValue1f(gl, glProgram, 'sigma', this.sigma);
    this.setUniformValue1f(gl, glProgram, 'weightSum', this.gaussianKernelSum(this.radius, this.sigma));
  }
}

