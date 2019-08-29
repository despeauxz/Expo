"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _debug = _interopRequireDefault(require("debug"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = require("dotenv");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _api = _interopRequireDefault(require("./routes/api"));

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

const debugged = (0, _debug.default)('app');
(0, _dotenv.config)();
const app = (0, _express.default)();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
app.use((0, _cors.default)(corsOptions));
app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use('/api/v1', _api.default);
app.use((request, response, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
app.use(_errorHandler.default);
app.listen(port, () => {
  debugged(`Listening from port ${port}`);
});
var _default = app;
exports.default = _default;