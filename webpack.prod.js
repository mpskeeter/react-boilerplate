const webpack = require('webpack');
const merge = require('webpack-merge');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let prodPlugins = {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
};

let client = require('./webpack.common.client.js');
let server = require('./webpack.common.server.js');

module.exports = [merge(client, prodPlugins), server];
