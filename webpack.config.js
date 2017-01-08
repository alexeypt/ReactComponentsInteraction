var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'}
        ]
    }
};