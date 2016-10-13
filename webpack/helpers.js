'use strict';

const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function root() {
  const argArr = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(argArr));
}

function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) &&
    request.charAt(0) !== '.' &&
    request.charAt(0) !== '!'
  ) {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

exports.root = root;
exports.checkNodeImport = checkNodeImport;
