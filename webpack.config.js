/* eslint no-var: 0 */

var path = require('path');

module.exports = {
  entry: './app/src/main.jsx',
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
