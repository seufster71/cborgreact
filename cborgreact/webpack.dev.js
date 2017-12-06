const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/build');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: './src/main/resources/static',
    proxy: { "/api/**": { target: 'http://localhost:8090', secure: false }  }
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'build/'
  },
});
