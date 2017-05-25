require('shelljs/global');

const path = require('path');
const config = require('../config');
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.config');

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
);

const isDev = process.argv.indexOf('--dev') !== -1;
const isQa = process.argv.indexOf('--qa') !== -1;
const isProd = process.argv.indexOf('--prod') !== -1;
const nodeEnv = isDev ? '"dev"' : (isQa ? '"qa"' : '"prod"');

const spinner = ora(`building for ${nodeEnv}`);
spinner.start();

const assetsPath = path.join('dist');
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'assets/', assetsPath);

webpackConfig.forEach((config) => {
    webpack((config), function (err, stats) {
        spinner.stop();
        if (err) throw err;
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false,
            }) + '\n');
    });
});
