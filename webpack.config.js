const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  mode: process.env.NODE_ENV || 'development',
  plugins: [
    new LodashModuleReplacementPlugin,
  ],
};