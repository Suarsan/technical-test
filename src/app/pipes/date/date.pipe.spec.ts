import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });
  it('should return right date format', () => {
    const pipe = new DatePipe();
    const date = pipe.transform('Mon, 17 Jan 2022 19:51:28 GMT');
    expect(date).toBe('17/01/2022 - 20:51h');
  });
});
