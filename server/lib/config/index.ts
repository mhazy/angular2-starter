const ENVIRONMENT = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

export const CONFIG = {
  port: process.env.PORT || 3000,
  token: process.env.TOKEN || 'ChangeMeInProduction!',
  env: ENVIRONMENT,
  development: ENVIRONMENT === 'development',
  production: ENVIRONMENT === 'production',
};
