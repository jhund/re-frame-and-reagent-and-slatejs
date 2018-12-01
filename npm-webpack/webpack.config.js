const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, '..', 'resources', 'public', 'js');

const config = {
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: "source-map",
};

module.exports = config;
