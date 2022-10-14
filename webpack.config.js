const path = require('path');

module.exports = {
  entry: {
    bundle: './src/js/main.js'
  },
  output: {
    path: "D:\\KeshavSoft\\knode\\Multi\\2022\\october\\14\\KJson\\public\\js",
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ],
  },
};