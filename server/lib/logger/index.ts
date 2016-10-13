'use strict';

import * as winston from 'winston';
import { CONFIG } from '../config';

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: CONFIG.env === 'test' ? 'error' : 'info',
      handleExceptions: true,
      colorize: true,
      json: false,
    }),
  ],

  exitOnError: false,
});

export const stream = {
  write: function writeMessage(message) {
    logger.info(message.slice(0, -1));
  },
};
