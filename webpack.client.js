'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const helpers = require('./webpack/helpers');
const plugins = require('./webpack/plugins');
const config = {
  entry: {
    app: './src/index.ts',
  },
  plugins: plugins,
  output: {
    path: helpers.root('dist', 'client'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
};


module.exports = webpackMerge({}, commonConfig, config);
