import { TransformNumToStringPipe } from './transform-num-to-string.pipe';

describe('TransformNumToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformNumToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
