import { GLImgFilter } from '../glimgFilter';
import { GLImgGradientXFilter } from './glimgGradientXFilter'
import { GLImgGradientYFilter } from './glimgGradientYFilter'
import { GLImgGrayscaleFilter } from '../colorFilters/glimgGrayscaleFilter';
import { GLImgNormalFilter } from './glimgNormalFilter';


export class GLImgSobelEdgeFilter extends GLImgFilter{
  constructor() {
    super();
    this.isAssembeFilter = true;
  }

  getAssemblingFilters(){
    var grayscaleFilter = new GLImgGrayscaleFilter();
    grayscaleFilter.inputTextureId = 0;
    grayscaleFilter.outputTextureId = 0;
    var gradientXFilter = new GLImgGradientXFilter();
    gradientXFilter.inputTextureId = 0;
    gradientXFilter.outputTextureId = this.tempTextureIDOffset;
    var gradientYFilter = new GLImgGradientYFilter();
    gradientYFilter.inputTextureId = 0;
    gradientYFilter.outputTextureId = this.tempTextureIDOffset+1;
    var normalFilter = new GLImgNormalFilter();
    normalFilter.inputTextureId = [this.tempTextureIDOffset, this.tempTextureIDOffset+1];
    normalFilter.outputTextureId = 0;

    return [
      grayscaleFilter,
      gradientXFilter,
      gradientYFilter,
      normalFilter,
    ];
  }
}