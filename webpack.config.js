var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var app = PRODUCTION
  ? ['./src/index.js']
  : [
      './src/index.js',
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server'
    ];

var plugins = PRODUCTION
  ? []
  : [
      new webpack.HotModuleReplacementPlugin()
    ];

module.exports = {
  devtool: 'source-map',
  entry: {
    app: app
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
}
