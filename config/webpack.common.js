const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      // Babel use for js files
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, '../src/template.html'),
      filename: 'index.html',
    }),
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),
  ],
};
