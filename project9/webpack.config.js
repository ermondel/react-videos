"use strict";

const DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? true : false;
const webpack = require('webpack');

module.exports = {
    entry: './index',
    output: {
        filename: 'build.js'
    },
    watch: true,
    devtool: DEV ? "source-map" : undefined,
    plugins: [
        new webpack.DefinePlugin({
            DEV: DEV,
            ANY: JSON.stringify('foobar')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
