import express from 'express';

const apiRouter = express.Router();

apiRouter.get('/', (request, response) => response.status(200).json({
  status: 200,
  message: 'Welcome to the Expo API'
}));


export default apiRouter;
