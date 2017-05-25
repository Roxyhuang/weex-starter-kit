const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const bannerPlugin = new webpack.BannerPlugin(
    '// { "framework": "Vue" }\n',
    { raw: true }
);

function getBaseConfig() {
    return {
        entry: {
            'home': path.resolve('src/pages/home', 'entry.js'),
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].js',
            publicPath: '/dist/',
        },
        module: {
            preLoaders: [
                {
                    test: /\.vue$/,
                    loader: 'eslint',
                    exclude: [/node_modules/, /demo/]
                },
                {
                    test: /\.js$/,
                    loader: 'eslint',
                    exclude: [/node_modules/, /demo/]
                }
            ],
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                },
                {
                    test: /\.(we|vue)(\?[^?]+)?$/,
                    loaders: []
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                },
                {
                    test: /\.styl$/,
                    loader: 'style-loader!css-loader!stylus-loader'
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                    loader: 'url-loader?limit=10000',
                },
                {
                    test: /\.(eot|ttf|wav|mp3)$/,
                    loader: 'file-loader',
                },
            ]
        },
        vue: {
            // // You can use PostCSS now!
            // // Take cssnext for example:
            // // 1. npm install postcss-cssnext --save-dev
            // // 2. write `var cssnext = require('postcss-cssnext')` at the top
            // // 3. set the config below
            // postcss: [cssnext({
            //   features: {
            //     autoprefixer: false
            //   }
            // })]
        },
        stylus: {
            // use: [stylus_plugin()]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false,
                },
            }),
            bannerPlugin,
        ]
    }
}

const webConfig = getBaseConfig();
webConfig.output.filename = '[name].web.js';
webConfig.module.loaders[1].loaders.push('vue');

const weexConfig = getBaseConfig();
weexConfig.output.filename = '[name].weex.js';
weexConfig.module.loaders[1].loaders.push('weex');

// build specifying bundles (splitted by comma)
if (process.argv[3]) {
    const bundleNames = process.argv[3].split(',');
    console.log(`building specifying bundles: ${bundleNames}`);
    Object.keys(webConfig.entry).forEach(name => {
        if (!bundleNames.includes(name)) {
            delete webConfig.entry[name];
        }
    });
    weexConfig.entry = webConfig.entry;
}

// generate dist/[bundle].html for web developing
Object.keys(webConfig.entry).forEach(name => {
    webConfig.plugins.push(
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, `../dist/${name}.html`),
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            chunks: [name],
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        })
    );
});

// save weex bundle hash
weexConfig.plugins.push(
    new AssetsPlugin({
        prettyPrint: true,
        path: path.resolve(__dirname, '../dist'),
        filename: 'weex-assets.json',
    })
);

module.exports = [webConfig, weexConfig];
