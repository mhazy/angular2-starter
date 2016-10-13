import { createEngine } from 'angular2-express-engine';
import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import { logger, stream } from './lib/logger';
import { routes } from './routes';
import { CONFIG } from './lib/config';

declare var __dirname;

const ROOT = path.join(path.resolve(__dirname, '..'));
const CLIENT_BASE_PATH = path.join(ROOT, 'dist', 'client');
const ASSET_PATH = path.join(CLIENT_BASE_PATH, 'assets');

logger.info('__dirname: %s', __dirname);
logger.info('Root Path: %s', ROOT);
logger.info('Client Base Path: %s', CLIENT_BASE_PATH);
logger.info('Asset Path: %s', ASSET_PATH);

/**
 * Create a server instance
 *
 * @param port Port to bind server to
 * @param token Token used for signing cookies, etc.
 * @constructor
 */
export function Server(port, token) {
  let server = this;

  server.app = express();
  server.instance = null;

  // View Rendering
  server.app.engine('.html', createEngine({}));
  server.app.set('views', CLIENT_BASE_PATH);
  server.app.set('view engine', 'html');

  // Cookies, request handling, logging
  server.app.use(morgan('common', { 'stream': stream }));
  server.app.use(cookieParser(token));
  server.app.use(bodyParser.json());

  // Static asset directories
  server.app.use('/assets', express.static(ASSET_PATH, {
    maxAge: 30,
  }));
  server.app.use(express.static(CLIENT_BASE_PATH, { index: false }));

  // Routes
  routes(server.app);

  // 404 Response
  server.app.get('*', function appNotFoundHandler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const response = {
      status: 404,
      message: 'No Content',
    };
    const json = JSON.stringify(response, null, 2);
    res.status(404).send(json);
  });

  server.start = function startServer() {
    server.instance = server.app.listen(port, () => {
      logger.info('Listening on %s', port);
    });
  };

  server.stop = function stopServer(done) {
    if (server.instance) {
      server.instance.close(done);
    }
  };
}
