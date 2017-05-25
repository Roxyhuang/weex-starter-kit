const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ip = require('ip');
const CURRENT_IP = `"${ip.address()}"`;
const webpackConfig = [];

baseWebpackConfig.forEach((config) => {
    webpackConfig.push(
        webpackMerge(config, {
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: '"local"',
                        CURRENT_IP: CURRENT_IP,
                    }
                }),
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin(),
            ]
        })
    );
});
module.exports = webpackConfig;
