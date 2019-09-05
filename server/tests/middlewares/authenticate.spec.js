import { expect } from 'chai';
import Authenticate from '@middlewares/authenticate.middleware';

const payload = {
  id: 1,
  email: 'example@email.com',
};

const token = Authenticate.generateToken(payload);

describe('Authenticate', () => {
  it('should generate a token based on payload', () => {
    expect(token).to.be.a('string');
  });

  it('should get the token from the req headers', () => {
    const req = {
      headers: {
        authorization: `Bearer ${token}`,
      }
    };

    const value = Authenticate.getToken(req);
    expect(value).to.be.a('string');
  });
});
