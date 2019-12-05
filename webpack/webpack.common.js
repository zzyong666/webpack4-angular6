const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const utils = require('./utils.js');

module.exports = (options) => ({
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
        alias: {
            app: utils.root('src/app/'),
            ...rxPaths()
        }
    },
    entry: {
        polyfills: './src/app/polyfills',
        main: './src/app/app.main'
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    caseSensitive: true,
                    removeAttributeQuotes: false,
                    minifyJS: false,
                    minifyCSS: false
                },
                exclude: ['./src/app/index.html']
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                    digest: 'hex',
                    hash: 'sha512',
                    name: 'content/[hash].[ext]'
                }
            },
            // Ignore warnings about System.import in Angular
            { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${options.env}'`,
                DEBUG_INFO_ENABLED: options.env === 'development',
                BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
                VERSION: `'${utils.parseVersion()}'`
                // The root URL for API calls, ending with a '/' - for example: `"https://www.jhipster.tech:8081/myservice/"`.
                // If this URL is left empty (""), then it will be relative to the current context.
                // If you use an API server, in `prod` mode, you will need to enable CORS
                // (see the `jhipster.cors` common JHipster property in the `application-*.yml` configurations)
                // SERVER_API_URL: `''`
            }
        }),
        new CopyWebpackPlugin([
            /* { from: './node_modules/swagger-ui/dist/css', to: 'swagger-ui/dist/css' },
            { from: './node_modules/swagger-ui/dist/lib', to: 'swagger-ui/dist/lib' },
            { from: './node_modules/swagger-ui/dist/swagger-ui.min.js', to: 'swagger-ui/dist/swagger-ui.min.js' },
            { from: './src/app/swagger-ui/', to: 'swagger-ui' }, */
            // { from: './src/app/content/', to: 'content' },
            // { from: './src/app/favicon.ico', to: 'favicon.ico' },
            // { from: './src/app/manifest.webapp', to: 'manifest.webapp' },
            // jhipster-needle-add-assets-to-webpack - JHipster will add/remove third-party resources in this array
            // { from: './src/app/robots.txt', to: 'robots.txt' }
        ]),
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
            chunks: ['vendors', 'polyfills', 'main', 'global'],
            chunksSortMode: 'manual',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
});
