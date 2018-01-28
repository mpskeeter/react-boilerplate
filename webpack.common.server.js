const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './src/server/index.js',
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
};
