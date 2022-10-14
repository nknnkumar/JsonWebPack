const path = require('path');

module.exports = {
  entry: {
    bundle: './src/js/main.js'
  },
  output: {
    path: "C:\\KeshavSoft\\nodejs\\multi\\2022\\oct\\11-1\\KJson\\public\\js",
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