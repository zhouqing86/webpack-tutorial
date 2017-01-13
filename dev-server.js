var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: { colors: true }
});
server.listen(8080);
