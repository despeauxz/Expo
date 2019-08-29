"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = require("winston");

const level = process.env.LOG_LEVEL || 'debug';
const logger = (0, _winston.createLogger)({
  transports: [new _winston.transports.Console({
    level,
    timestamp: () => new Date().toISOString()
  })]
});
var _default = logger;
exports.default = _default;