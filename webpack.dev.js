const webpack = require('webpack');
const merge = require('webpack-merge');

let devPlugins = {
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js'],
    }),
  ],
};

let client = require('./webpack.common.client.js');
let server = require('./webpack.common.server.js');

module.exports = [merge(client, devPlugins), server];
