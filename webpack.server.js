'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const helpers = require('./webpack/helpers');
const plugins = require('./webpack/plugins');

const config = {
  target: 'node',
  externals: helpers.checkNodeImport,
  entry: helpers.root('server', 'index.ts'),
  plugins: plugins,
  node: {
    __dirname: true,
    process: true,
  },
  output: {
    filename: 'index.js',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
    path: helpers.root('dist', 'server'),
    libraryTarget: 'commonjs2',
  },
};


module.exports = webpackMerge({}, commonConfig, config);
