var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
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
    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true}),
    ]
};