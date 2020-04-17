const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
    target: 'node',
    externals: [nodeExternals()],
    mode: 'production',
    entry: './server/server.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js',
    },
});
