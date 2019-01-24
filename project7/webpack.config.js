"use strict";

const DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? true : false;
const webpack = require('webpack');

module.exports = {
    entry: './index',
    output: {
        filename: 'build.js'
    },
    watch: DEV,
    devtool: DEV ? 'source-map' : undefined,
    plugins: [
        new webpack.DefinePlugin({ 
            DEV: DEV, 
            LANG: JSON.stringify('ua') 
        }),
    ]
}
