var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      "./src/index.js",
      "webpack-dev-server/client?http://localhost:8080/",
      "webpack/hot/dev-server"
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
}
