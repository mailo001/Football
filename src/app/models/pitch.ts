import { Dot } from './dot';
import { LineType } from './line-type';

export class Pitch {
  nbDotsWidth: number;
  nbDotsHeight: number;

  dots: Array<Dot>;

  constructor() {
    this.init(0, 0);
  }

  init(nbDotsWidth: number, nbDotsHeight: number) {
    this.nbDotsWidth = nbDotsWidth;
    this.nbDotsHeight = nbDotsHeight;

    this.dots = [];
    for (let i = 0; i < nbDotsWidth; i++) {
      for (let j = 0; j < nbDotsHeight; j++) {
        const dot: Dot = { x: i, y: j, available: true,
          lineX: LineType.Nothing, lineY: LineType.Nothing, lineXY: LineType.Nothing };
        this.dots.push(dot);
      }
    }
  }
}

export const DOTS_SPACE = 10;
