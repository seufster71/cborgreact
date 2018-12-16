const path = require('path');
const webpack = require("webpack");

const APP_DIR = path.resolve(__dirname, 'src/main/js');

module.exports = {
  entry: { app: APP_DIR + '/App.js' },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {}
    })
  ],
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude : /node_modules/,
        loader : 'babel-loader',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: { limit: 10000 }
      }
    ]
  }
};
