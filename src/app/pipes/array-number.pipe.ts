import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayNumber'
})
export class ArrayNumberPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    const res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
