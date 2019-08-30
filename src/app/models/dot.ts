import { LineType } from './line-type';

export interface Dot {
  x: number;
  y: number;

  available: boolean;

  lineX: LineType;
  lineY: LineType;
  lineXY: LineType;
}
