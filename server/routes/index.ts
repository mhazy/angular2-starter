import { appRoutes } from './app';
import { apiRoutes } from './api';

export const routes = (app) => {
  appRoutes(app);
  apiRoutes(app);
};
