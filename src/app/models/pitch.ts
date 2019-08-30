import { Dot } from './dot';

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
        const dot: Dot = { x: i, y: j, available: true};
        this.dots.push(dot);
      }
    }
  }
}

export const DOTS_SPACE = 10;
