"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("../helpers/logger"));

/**
 * Handlers uncaught errors in the app
 * @function ErrorHandler
 * @param {object} error
 * @param {object} req
 * @param {object} response
 * @param {function} next
 * @returns {(function|object)} Function next() or JSON object
 * Gotten from Express Documentation
 */
const errorHandler = (error, request, response, next) => {
  response.status(error.status || 500);

  _logger.default.error({
    request: request.originalUrl,
    message: error.message,
    stack: process.env.NODE_ENV !== 'production' && error.stack
  });

  if (process.env.NODE_ENV === 'development') {
    return response.json({
      errors: {
        global: error.message,
        error
      }
    });
  }

  if (response.headersSent) {
    return next(error);
  }

  response.json({
    // we would return 404 error in production environment
    errors: {
      global: error.message,
      error: {}
    }
  });
};

var _default = errorHandler;
exports.default = _default;