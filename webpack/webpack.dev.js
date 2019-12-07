const webpack = require('webpack');
const writeFilePlugin = require('write-file-webpack-plugin');
const webpackMerge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';

module.exports = (options) => webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build/www',
        stats: options.stats,
        watchOptions: {
            ignored: /node_modules/
		}
    },
    entry: {
        polyfills: './src/app/polyfills',
        // global: './src/content/css/global.css',
        main: './src/app/app.main'
    },
    output: {
        path: utils.root('build/www'),
        filename: 'app/[name].bundle.js',
        chunkFilename: 'app/[id].chunk.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            exclude: ['node_modules', new RegExp('reflect-metadata\\' + path.sep + 'Reflect\\.ts')]
        },
        {
            test: /\.ts$/,
            use: [
                'angular2-template-loader',
                {
                    loader: 'cache-loader',
                    options: {
                        cacheDirectory: path.resolve('build/cache-loader')
                    }
                },
                {
                    loader: 'thread-loader',
                    options: {
                        // there should be 1 cpu for the fork-ts-checker-webpack-plugin
                        workers: require('os').cpus().length - 1
                    }
                },
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        happyPackMode: true
                    }
                },
                'angular-router-loader'
            ],
            exclude: ['node_modules']
        },
        {
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader'],
            exclude: /(vendor\.css|global\.css)/
        },
        {
            test: /(vendor\.css|global\.css)/,
            use: ['style-loader', 'css-loader']
        }]
    },
    stats: options.stats,
    plugins: [
        new SimpleProgressWebpackPlugin({
                format: options.stats === 'minimal' ? 'compact' : 'expanded'
            }),
        new FriendlyErrorsWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                // The root URL for API calls, ending with a '/' - for example: `"https://www.jhipster.tech:8081/myservice/"`.
                // If this URL is left empty (""), then it will be relative to the current context.
                // If you use an API server, in `prod` mode, you will need to enable CORS
                // (see the `jhipster.cors` common JHipster property in the `application-*.yml` configurations)
                // INCIDENT_API_URL: `'http://192.168.0.56:9583'`,
                // USER_API_URL: `'http://192.168.0.56:8585'`,
				// ALERT_API_URL: `'http://192.168.0.56:9580'`,
				// ALARM_API_URL:`'http://192.168.0.56:9579'`,
				// EQUIPMENT_API_URL:`'http://192.168.0.56:8586'`,
				// ACTIVE_MQ_URL:`'ws://192.168.0.56:61614'`,
				// GIS_SERVICE_URL:`'http://192.168.0.57:8080'`,
				// ITMP_HOST_NAME: `'http://192.168.0.56:8080'`,
				// LOGIN_API_URL:`'http://192.168.0.56:8589'`,
				// API_GATEWAY:`'http://192.168.0.56:8589'`,
            },
        }),
        /* new BrowserSyncPlugin({
            host: 'localhost',
            port: 9000,
            proxy: {
                target: 'http://localhost:9060'
            },
            socket: {
                clients: {
                    heartbeatTimeout: 60000
                }
            }
        }, {
                reload: false
            }), */
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)/,
            path.resolve(__dirname, './src/main/webapp')
        ),
        new writeFilePlugin(),
        new webpack.WatchIgnorePlugin([
            utils.root('src/test'),
        ]),
        new WebpackNotifierPlugin({
            title: 'Mobility Platform',
            contentImage: path.join(__dirname, 'centrac-logo.png')
        })
    ].filter(Boolean),
    mode: 'development'
});
