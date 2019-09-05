import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/app';

describe('OAuth', () => {
  it('should return response from google', (done) => {
    request(app)
      .get('/api/v1/auth/google')
      .end((err, res) => {
        console.log(res.body);

        done(err);
      });
  });
});
