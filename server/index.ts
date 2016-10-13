import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import 'angular2-universal-polyfills/zone-node';
import { enableProdMode } from '@angular/core';
import { Server } from './server';
import { CONFIG } from './lib/config';

enableProdMode();

const server = new Server(CONFIG.port, CONFIG.token);
server.start();
