'use strict';

const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
  },

  devServer: {
    historyApiFallback: {
      index: '/',
    },
    proxy: {},
  },

  module: {
    rules: [
      loaders.angular,
      loaders.tslint,
      loaders.ts,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
    noParse: [
      /zone\.js\/dist\/.+/,
      /angular2\/bundles\/.+/,
    ],
  },
};
