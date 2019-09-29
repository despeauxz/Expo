import swaggerJsdoc from 'swagger-jsdoc';
import { config } from 'dotenv';

config();

const host = process.env.HOST_NAME
  || (process.env.HEROKU_APP_NAME
    ? `${process.env.HEROKU_APP_NAME}.herokuapp.com`
    : 'localhost:3000');
const projectName = process.env.PROJECT_NAME || 'Expo';

const swaggerDefinition = {
  info: {
    title: projectName,
    version: '1.0.0',
    description: 'A student learning platform'
  },
  host,
  basePath: '/api/v1'
};

const options = {
  swaggerDefinition,
  apis: ['swagger.yaml']
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
