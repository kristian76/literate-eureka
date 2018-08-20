/**
 * Webpack Config
 */
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        project: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};