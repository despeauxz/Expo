import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app';

describe('API', () => {
  it('Should return JSON responses for Base API URL', (done) => {
    request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.include.keys('message');
        expect(res.body.message).to.equal('Welcome to the Expo API');

        done(err);
      });
  });

  it('should throw an exception JSON response for invalid route', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.include.keys('errors');
        expect(res.body.errors.global).to.equal('Not Found');

        done(err);
      });
  });
});
