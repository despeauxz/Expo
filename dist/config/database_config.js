"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.production = exports.test = exports.development = void 0;

var _path = _interopRequireDefault(require("path"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();
const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres'
};
exports.development = development;
const test = {
  dialect: 'sqlite',
  storage: _path.default.join(__dirname, '..', 'database_test.sqlite3'),
  logging: false
};
exports.test = test;
const production = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  logging: false
};
exports.production = production;