"use strict";

const webpack = require('webpack');

const DEV_MODE = (
    !process.env.NODE_ENV || 
    process.env.NODE_ENV === 'development' ? true : false
);

module.exports = {
    entry: './index',
    output: {
        filename: 'build.js'
    },
    watch: DEV_MODE,
    devtool: DEV_MODE ? "source-map" : undefined,
    plugins: [
        new webpack.DefinePlugin({
            DEV_MODE: DEV_MODE,
            BAR: JSON.stringify('plugins string')
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
