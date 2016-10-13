import { RioAppModule } from '../../src/app/app.module';

export const ngAppController = (req, res) => {
  res.render('index', {
    req,
    res,
    ngModule: RioAppModule,
    preboot: {
      appRoot: ['rio-app'],
      uglify: true,
    },
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: req.hostname,
  });

};
