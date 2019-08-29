"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _supertest = _interopRequireDefault(require("supertest"));

var _chai = require("chai");

var _app = _interopRequireDefault(require("../../src/app"));

describe('API', () => {
  it('Should return JSON responses for Base API URL', done => {
    (0, _supertest.default)(_app.default).get('/api/v1').end((err, res) => {
      (0, _chai.expect)(res.statusCode).to.equal(200);
      (0, _chai.expect)(res.body).to.include.keys('message');
      (0, _chai.expect)(res.body.message).to.equal('Welcome to the Expo API');
      done(err);
    });
  });
  it('should throw an exception JSON response for invalid route', done => {
    (0, _supertest.default)(_app.default).get('/api').end((err, res) => {
      (0, _chai.expect)(res.statusCode).to.equal(404);
      (0, _chai.expect)(res.body).to.include.keys('errors');
      (0, _chai.expect)(res.body.errors.global).to.equal('Not Found');
      done(err);
    });
  });
});