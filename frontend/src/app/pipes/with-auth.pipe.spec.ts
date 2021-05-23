import { WithAuthPipe } from './with-auth.pipe';

describe('WithAuthPipe', () => {
  it('create an instance', () => {
    const pipe = new WithAuthPipe();
    expect(pipe).toBeTruthy();
  });
});
