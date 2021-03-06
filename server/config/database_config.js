import { config } from 'dotenv';

config();

export const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres'
};

export const test = {
  username: process.env.TEST_DB_USERNAME,
  password: process.env.TEST_DB_PASSWORD || '',
  database: process.env.TEST_DB_DATABASE,
  host: process.env.TEST_DB_HOST,
  dialect: 'postgres'
};

export const production = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  },
  logging: false
};
