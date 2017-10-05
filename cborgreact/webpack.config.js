var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/build');
var APP_DIR = path.resolve(__dirname, 'src/main/js');

var config = {
	entry: { app: APP_DIR + '/index.js' },
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
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include: APP_DIR,
				loader: 'eslint-loader'
			},
	    {
        test : /\.jsx?/,
        include : APP_DIR,
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

module.exports = config;
