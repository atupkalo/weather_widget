const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src/js'),
    build: path.join(__dirname, 'dist/js'),
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: 'main.js'
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};