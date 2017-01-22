var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: {
        initial: './app/initial',
        1: './app/1',
        2: './app/2',
        3: './app/3',
        4: './app/4',
        5: './app/5',
        6: './app/6'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: "[id].chunk.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[name]__[local]!postcss-loader!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true'),
                exclude: /node_modules/
            },
            {
                test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/,
                loader: 'file-loader'
            }
        ]
    },
    postcss: function() {
        return {
            defaults: [
                precss, autoprefixer({
                    browsers: ['last 4 versions', '> 2%', 'ie 9', 'safari 8']
                })],
            cleaner: [autoprefixer({
                browsers: ['last 4 versions', '> 2%', 'ie 9', 'safari 8 ']
            })]
        };
    },
    devServer:{
        contentBase: './app',
        hot: true
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true}),
    ]
};