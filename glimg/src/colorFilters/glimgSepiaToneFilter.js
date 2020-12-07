import { GLImgColormatrixFilter } from './glimgColormatrixFilter';

export class GLImgSepiaToneFilter extends GLImgColormatrixFilter {
  constructor() {
    super();

    // this.colorMatrix = 
    //     [0.3588, 0.7044, 0.1368, 0.0,
    //     0.2990,  0.5870, 0.1140, 0.0,
    //     0.2392,  0.4696, 0.0912, 0.0,
    //     0.0,     0.0,    0.0,    1.0];

    this.colorMatrix = 
        [0.393, 0.769, 0.189, 0.0,
         0.349, 0.686, 0.168, 0.0,
         0.272, 0.534, 0.131, 0.0,
         0.0,   0.0,   0.0,   1.0];
    this.intensity = 1.0;
  }
}