var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/build');
var APP_DIR = path.resolve(__dirname, 'src/main/js');

var config = {
	entry: APP_DIR + '/index.js',
	devtool: 'sourcemaps',
	output: {
	    path: BUILD_DIR,
	    filename: 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.js?/,
				include: APP_DIR,
				loader: 'eslint-loader'
			},
	      {
	        test : /\.js?/,
	        include : APP_DIR,
	        loader : 'babel-loader',
	        query: {
	                    presets: ['es2015', 'react']
	                }
	      }
	    ]
	}
};

module.exports = config;
