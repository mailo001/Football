import { ArrayNumberPipe } from './array-number.pipe';

describe('ArrayNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
