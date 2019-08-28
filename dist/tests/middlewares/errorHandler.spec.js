"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sinon = _interopRequireDefault(require("sinon"));

var _chai = require("chai");

var _errorHandler = _interopRequireDefault(require("../../src/middlewares/errorHandler"));

const jsonFunc = _sinon.default.spy();

const res = {
  headersSent: false,
  status: status => ({
    json: message => ({
      status,
      message
    })
  }),
  json: jsonFunc
};
const req = {
  headers: 'header'
};
const err = {
  status: 422,
  message: 'error'
};

const next = _sinon.default.spy();

describe('Error Handler', () => {
  afterEach(() => {
    process.env.NODE_ENV = 'test';
  });
  it('handles errors with headers sent', () => {
    res.headersSent = true;
    (0, _errorHandler.default)(err, req, res, next);
    (0, _chai.assert)(next.called);
  });
  it('handles errors when in development mode', () => {
    process.env.NODE_ENV = 'development';
    (0, _errorHandler.default)(err, req, res, next);

    _sinon.default.assert.calledOnce(jsonFunc);
  });
});