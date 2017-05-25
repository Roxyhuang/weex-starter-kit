const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const isDev = process.argv.indexOf('--dev') !== -1;
const isQa = process.argv.indexOf('--qa') !== -1;
const isProd = process.argv.indexOf('--prod') !== -1;
const nodeEnv = isDev ? '"dev"' : (isQa ? '"qa"' : '"prod"');

const webpackConfig = [];

baseWebpackConfig.forEach((config) => {
    if (isProd) {
        if (config.output.filename.endsWith('weex.js')) {
            config.output.filename = '[name].weex.js?[chunkhash:8]';
        } else {
            config.output.filename = '[name].web.js?[chunkhash:8]';
        }
    }
    webpackConfig.push(
        webpackMerge(config, {
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': nodeEnv,
                }),
            ]
        })
    );
});

module.exports = webpackConfig;
