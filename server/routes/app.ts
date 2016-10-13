import * as express from 'express';
import { ngAppController } from '../controllers';

const routes = () => {
  const router = express.Router();
  router.get('/', ngAppController);
  return router;
};

export const appRoutes = (app) => {
  app.use('/', routes());
};
