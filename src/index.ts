import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';

import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';
import { RioAppModule } from './app/app.module';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  const platformRef = platformUniversalDynamic();
  document.addEventListener('DOMContentLoaded', () => {
    platformRef.bootstrapModule(RioAppModule);
  });
}
