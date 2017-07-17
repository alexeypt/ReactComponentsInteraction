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
        1: './app/1', //default props
        2: './app/2', //refs
        3: './app/3', //callback
        4: './app/4', //context
        5: './app/5', //portal 
        6: './app/6', //event emitter
        7: './app/7', //cursor
        8: './app/8', //redux
        9: './app/9'  //mobx
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            sourceMap: true,
                            localIdentName: '[name]__[local]'
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return {
                                    defaults: [
                                        precss, autoprefixer({
                                            browsers: ['last 4 versions', '> 2%', 'ie 9', 'safari 8']
                                        })],
                                    cleaner: [autoprefixer({
                                        browsers: ['last 4 versions', '> 2%', 'ie 9', 'safari 8 ']
                                    })]
                                }
                            }
                        } 
                    }, 
                    {
                        loader: 'less-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }]
                }),
                exclude: /node_modules/
            },
            {
                test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase: './app',
        hot: false
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
};