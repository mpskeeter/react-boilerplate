let path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const moduleObj = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }
  ]
};

const client = {
  entry: {
    'client': './src/client/index.js',
    vendor: [
      'lodash'
    ],
  },
  target: 'web',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  module: moduleObj,
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: 'src/client/index.html',
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ],
};

const server = {
  entry: {
    'server': './src/server/index.js',
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: moduleObj,
  externals: [nodeExternals()],
};

module.exports = [client, server];
