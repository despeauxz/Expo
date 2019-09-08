import { expect } from 'chai';
import generateUsername from '@helpers/auth.helper';

describe('Auth Helpers', () => {
  it('should return random string for username', () => {
    const rand = generateUsername();

    expect(rand).to.be.a('string');
    expect(rand).to.be.length(12);
  });
});
