import { GLImg3x3ConvFilter } from '../glimg3x3ConvFilter';

export class GLImgEmbossFilter extends GLImg3x3ConvFilter {
  constructor() {
    super();

    this.convMatrix = [
      -2.0, -1.0, 0.0,
      -1.0, 1.0, 1.0,
      0.0, 1.0, 2.0,
    ]
  }
}

