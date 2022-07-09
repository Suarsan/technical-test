import { NameInitialsPipe } from './name-initials.pipe';

describe('NameInitialsPipe', () => {
  
  it('create an instance', () => {
    const pipe = new NameInitialsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should returns 2 letters', () => {
    const pipe = new NameInitialsPipe();
    const initials = pipe.transform('Javier Suárez', 2) as string;
    expect(typeof initials).toBe('string');
    expect(initials.length).toBe(2);
  })
  it('should returns 2 letters', () => {
    const pipe = new NameInitialsPipe();
    const initials = pipe.transform('Javier Suárez Sánchez', 2) as string;
    expect(typeof initials).toBe('string');
    expect(initials.length).toBe(2)
  })

  it('should returns 3 letters', () => {
    const pipe = new NameInitialsPipe();
    const initials = pipe.transform('Javier Suárez Sánchez', 3) as string;
    expect(typeof initials).toBe('string');
    expect(initials.length).toBe(3)
  })
  it('should returns 3 letters', () => {
    const pipe = new NameInitialsPipe();
    const initials = pipe.transform('Javier Suárez Sánchez', 5) as string;
    expect(typeof initials).toBe('string');
    expect(initials.length).toBe(3)
  })
});
