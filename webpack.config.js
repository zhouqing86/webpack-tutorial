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
  ? [
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        mangle: false,
        compress: {
          warnings: true
        }
      })
    ]
  : [
      new webpack.HotModuleReplacementPlugin()
    ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
  })
);

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
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]',
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
}
