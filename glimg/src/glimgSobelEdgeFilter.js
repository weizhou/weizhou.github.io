import { GLImg3x3ConvFilter } from './glimg3x3ConvFilter';

export class GLImgSobelEdgeFilter extends GLImg3x3ConvFilter {
  constructor() {
    super();

    this.convMatrix = [
      1.0, 0.0, -1.0,
      2.0, 0.0, -2.0,
      1.0, 0.0, -1.0,
    ]
  }
}