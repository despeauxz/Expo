"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

const apiRouter = _express.default.Router();

apiRouter.get('/', (request, response) => response.status(200).json({
  status: 200,
  message: 'Welcome to the Expo API'
}));
var _default = apiRouter;
exports.default = _default;