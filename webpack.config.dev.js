const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'client.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
});
