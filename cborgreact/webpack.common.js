const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/dist');
const APP_DIR = path.resolve(__dirname, 'src/main/js');

module.exports = {
  entry: { app: APP_DIR + '/App.js' },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {

    liveReload: true,
    historyApiFallback: true,
    proxy: [{ context: ["/api/**","/libs/**","/css/**","/img/**"],target: 'http://localhost:8090' }]
  },
  plugins: [
	new HtmlWebpackPlugin({
	    	title: 'Toasthub',
	    	template: './src/main/js/index.html',
	    	filename: BUILD_DIR + '/index.html'
	    }),
    new webpack.LoaderOptionsPlugin({
      options: {}
    })
  ],
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude : /node_modules/,
        use: { loader : 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: { limit: 10000 }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  }
};
