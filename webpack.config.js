const path = require('path');
const { removeEmpty } = require('webpack-config-utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = 'development';

module.exports = removeEmpty({
  entry: './src/index.js',

  mode: ENV,

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    stats: 'normal',
  },

  devtool: 'eval-source-map',

  plugins: removeEmpty([
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.ejs',
      environment: ENV,
    }),
  ]),
});
