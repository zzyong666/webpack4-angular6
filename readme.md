### webpack4打包angular6+
##### 1、配置package.json
- 新建一个项目文件夹，创建package.json文件。
```
mkdir you-project-name
cd you-project-name
npm init
```
一路回车，默认创建（当然也可以自行修改相关配置），然后生成了package.json文件。
- 修改package.json文件配置如下。
```
{
  "name": "webapp",
  "version": "0.0.0",
  "description": "Description for webapp",
  "private": true,
  "license": "UNLICENSED",
  "cacheDirectories": [
    "node_modules"
  ],
  "dependencies": {
    "@angular/animations": "^7.2.13",
    "@angular/cdk": "^7.3.7",
    "@angular/common": "6.1.0",
    "@angular/compiler": "6.1.0",
    "@angular/core": "^6.1.0",
    "@angular/forms": "6.1.0",
    "@angular/material": "^7.3.7",
    "@angular/platform-browser": "^6.1.0",
    "@angular/platform-browser-dynamic": "6.1.0",
    "@angular/router": "6.1.0",
    "@fortawesome/angular-fontawesome": "0.3.0",
    "@fortawesome/fontawesome-svg-core": "1.2.4",
    "@fortawesome/free-solid-svg-icons": "5.3.1",
    "@ngx-translate/core": "^10.0.2",
    "@ngx-translate/http-loader": "^3.0.1",
    "core-js": "2.5.7",
    "reflect-metadata": "0.1.12",
    "rxjs": "6.1.0",
    "zone.js": "0.8.26"
  },
  "devDependencies": {
    "@angular/cli": "6.1.2",
    "@angular/compiler-cli": "6.1.0",
    "@ngtools/webpack": "6.0.0",
    "@types/jest": "22.2.3",
    "@types/node": "9.4.7",
    "@types/selenium-webdriver": "3.0.8",
    "angular-router-loader": "0.8.5",
    "angular2-template-loader": "0.6.2",
    "browser-sync": "2.24.6",
    "browser-sync-webpack-plugin": "2.2.2",
    "cache-loader": "1.2.2",
    "clean-webpack-plugin": "^2.0.2",
    "codelyzer": "4.2.1",
    "copy-webpack-plugin": "4.5.1",
    "css-loader": "0.28.10",
    "exports-loader": "0.7.0",
    "file-loader": "1.1.11",
    "fork-ts-checker-webpack-plugin": "0.4.1",
    "friendly-errors-webpack-plugin": "1.7.0",
    "generator-jhipster": "5.5.0",
    "html-loader": "0.5.5",
    "html-webpack-plugin": "3.2.0",
    "husky": "1.1.0",
    "jest": "22.4.3",
    "jest-junit": "5.1.0",
    "jest-preset-angular": "5.2.2",
    "jest-sonar-reporter": "2.0.0",
    "lint-staged": "7.3.0",
    "merge-jsons-webpack-plugin": "1.0.14",
    "mini-css-extract-plugin": "0.4.2",
    "moment-locales-webpack-plugin": "1.0.5",
    "optimize-css-assets-webpack-plugin": "5.0.1",
    "postcss-loader": "2.1.1",
    "prettier": "1.11.1",
    "protractor": "5.4.0",
    "proxy-middleware": "0.15.0",
    "raw-loader": "0.5.1",
    "rimraf": "2.6.1",
    "simple-progress-webpack-plugin": "1.1.2",
    "style-loader": "0.20.3",
    "tapable": "1.0.0",
    "terser-webpack-plugin": "1.0.0",
    "thread-loader": "1.1.5",
    "to-string-loader": "1.1.5",
    "ts-loader": "4.0.1",
    "ts-node": "5.0.1",
    "tslint": "5.9.1",
    "tslint-config-prettier": "1.9.0",
    "tslint-loader": "3.6.0",
    "typescript": "^2.9.2",
    "webpack": "4.8.0",
    "webpack-cli": "^2.1.3",
    "webpack-dev-server": "3.1.5",
    "webpack-merge": "4.1.2",
    "webpack-notifier": "1.6.0",
    "webpack-visualizer-plugin": "0.1.11",
    "workbox-webpack-plugin": "3.2.0",
    "write-file-webpack-plugin": "4.2.0"
  },
  "engines": {
    "node": ">=8.9.0"
  },
  "lint-staged": {
    "src/**/*.{ts,css,scss}": [
      "prettier --write",
      "git add"
    ]
  },
  "scripts": {
    "prettier:format": "prettier --write \"src/**/*.{ts,css,scss}\"",
    "lint": "tslint --project tsconfig.json -e 'node_modules/**'",
    "lint:fix": "npm run lint -- --fix",
    "ngc": "ngc -p tsconfig-aot.json",
    "cleanup": "rimraf build/{aot,www}",
    "clean-www": "rimraf build//www/app/{src,build/}",
    "e2e": "protractor src/test/javascript/protractor.conf.js",
    "start": "npm run webpack:dev",
    "start-tls": "npm run webpack:dev -- --env.tls",
    "serve": "npm run start",
    "build": "npm run webpack:prod",
    "build-test": "npm run webpack:prod-test",
    "test": "jest --coverage --logHeapUsage -w=2 --config src/test/javascript/jest.conf.js",
    "test:watch": "npm test -- --watch --clearCache",
    "webpack:dev": "npm run webpack-dev-server -- --config webpack/webpack.dev.js --inline --hot --port=4051 --open --watch-content-base --env.stats=minimal",
    "webpack:dev-verbose": "npm run webpack-dev-server -- --config webpack/webpack.dev.js --inline --hot --port=4051 --open --watch-content-base --profile --progress --env.stats=normal",
    "webpack:build:main": "npm run webpack -- --config webpack/webpack.dev.js --env.stats=minimal",
    "webpack:build": "npm run cleanup && npm run webpack:build:main",
    "webpack:prod:main": "npm run webpack -- --config webpack/webpack.prod.js --profile",
    "webpack:prod:test": "npm run webpack -- --config webpack/webpack.test.js --profile",
    "webpack:prod": "npm run cleanup && npm run webpack:prod:main && npm run clean-www",
    "webpack:prod-test": "npm run cleanup && npm run webpack:prod:test && npm run clean-www",
    "webpack:test": "npm run test",
    "webpack-dev-server": "node --max_old_space_size=4096 node_modules/webpack-dev-server/bin/webpack-dev-server.js",
    "webpack": "node --max_old_space_size=4096 node_modules/webpack/bin/webpack.js"
  },
  "jestSonar": {
    "reportPath": "build/test-results/jest",
    "reportFile": "TESTS-results-sonar.xml"
  }
}

```
配置好后，运行 `npm install` 安装依赖。
##### 2、tsconfig.json 文件的配置
在项目的根目录下创建 tsconfig.json 文件。

浏览器不能直接执行 TypeScript ，需要用编译器转译成JavaScript，而且编译器需要进行一些配置。 tsconfig.json 的配置就是指导编译器如何生成JavaScript文件。
```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "skipLibCheck": true,
        "suppressImplicitAnyIndexErrors": true,
        "downlevelIteration": true,
        "outDir": "build/www/app",
        "lib": [
            "es7",
            "dom"
        ],
        "typeRoots": [
            "node_modules/@types"
        ],
        "baseUrl": "./",
        "paths": {
            "app/*": [
                "src/app/*"
            ]
        },
        "importHelpers": true,
        "allowJs": true
    },
    "include": [
        "src/app",
        // "src/test/javascript/"
    ],
    "exclude": [
        "node_modules"
    ]
}
```
##### 3、Polyfills & Vendor
创建src/app/polyfills.ts文件，引入了运行Angular应用时所需的一些标准js：
```
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es7/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/**
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.


/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone'; // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';

// require('../manifest.app');

```
创建src/app/vender.ts文件，引入一些第三方库。
```
/* after changing this file run 'npm run webpack:build' */
/* tslint:disable */
// import '../content/css/vendor.css';
// import '../../../../node_modules/jquery-mousewheel/jquery.mousewheel';
// import '../../../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUser,
    faSort,
    faSortUp,
    faSortDown,
    faSync,
    faEye,
    faBan,
    faTimes,
    faArrowLeft,
    faSave,
    faPlus,
    faPencilAlt,
    faBars,
    faThList,
    faUserPlus,
    faRoad,
    faTachometerAlt,
    faHeart,
    faList,
    faBell,
    faBook,
    faHdd,
    faFlag,
    faWrench,
    faClock,
    faCloud,
    faSignOutAlt,
    faSignInAlt,
    faCalendarAlt,
    faSearch,
    faTrashAlt,
    faAsterisk,
    faTasks,
    faHome,
    faCogs,
    faTable,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

// Adds the SVG icon to the library so you can use it in your page
library.add(faUser);
library.add(faSort);
library.add(faSortUp);
library.add(faSortDown);
library.add(faSync);
library.add(faEye);
library.add(faBan);
library.add(faTimes);
library.add(faArrowLeft);
library.add(faSave);
library.add(faPlus);
library.add(faPencilAlt);
library.add(faBars);
library.add(faHome);
library.add(faThList);
library.add(faUserPlus);
library.add(faRoad);
library.add(faTachometerAlt);
library.add(faHeart);
library.add(faList);
library.add(faBell);
library.add(faTasks);
library.add(faBook);
library.add(faHdd);
library.add(faFlag);
library.add(faWrench);
library.add(faClock);
library.add(faCloud);
library.add(faSignOutAlt);
library.add(faSignInAlt);
library.add(faCalendarAlt);
library.add(faSearch);
library.add(faTrashAlt);
library.add(faAsterisk);
library.add(faCogs);
library.add(faTable);
library.add(faArrowRight);

// jhipster-needle-add-element-to-vendor - JHipster will add new menu items here
```
##### 4、main等入口文件
创建src/app/app.main.ts文件：
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './config/prod.config';
import { AppModule } from './app.module';

ProdConfig();

// 关闭热更新, 保证window.onunload执行
/* if (module['hot']) {
    module['hot'].accept();
} */

platformBrowserDynamic()
    .bootstrapModule(AppModule, { preserveWhitespaces: true })
    .then(success => console.log(`Application started`))
    .catch(err => console.error(err));

```
创建src/app/app.module.ts:
```
import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { LayoutsModule } from './layouts';
// import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
// import { HttpInterceptorProviders } from './blocks/http-interceptor';
// import { ConfigService } from './config/config.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

registerLocaleData(en);

// export function createTranslateHttpLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, '/content/i18n/', '.json');
// }

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        // ShareModule.forRoot(),
        // AuthModule
        // LayoutsModule, // ccm
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: createTranslateHttpLoader,
        //         deps: [HttpClient]
        //     }
        // }),
        BrowserAnimationsModule,
        // NgZorroAntdModule
    ],
    declarations: [AppComponent],
    providers: [
        // { provide: NZ_I18N, useValue: en_US },
        // ConfigService,
        // HttpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    /* constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    } */
}
```
创建src/app/app.component.ts:
```
import { Component } from "@angular/core";

@Component({
    selector: 'root-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor() { }
}
```
创建src/app/app.component.html:
```
<h1 class="title">Hello Angular2</h1>
<router-outlet></router-outlet>
```
创建src/app/app/routes.ts:
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
export const routes: Routes = [ // Routes类型的数组
    {
        path: 'index',
        component: AppComponent
    }, {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
```
创建src/app/index.html宿主文件：
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Angular Hello Word</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <root-app>Loading...</root-app>
</body>

</html>
```
创建src/app/config/prod.config.ts文件，判断是否生产模式配置文件。
```
import { enableProdMode } from '@angular/core';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

export function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!DEBUG_INFO_ENABLED) {
        enableProdMode();
    }
}
```
创建src/app/app.constants.ts，用于定义全局变量或者全局枚举值的文件
```
// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

export const VERSION = process.env.VERSION;
export const DEBUG_INFO_ENABLED: boolean = !!process.env.DEBUG_INFO_ENABLED;
export const SERVER_API_URL = process.env.SERVER_API_URL;
export const BUILD_TIMESTAMP = process.env.BUILD_TIMESTAMP;
export const ENVIRONMENT = process.env.NODE_ENV;
```
##### 5、创建webpack配置文件
在根目录下创建webpack文件夹，用于存放webpack配置文件。
webpack文件夹下创建utils.js文件，配置如下：
```
const path = require('path');

module.exports = {
    parseVersion,
    root,
    isExternalLib
};

// Returns a static version number when server is skipped
function parseVersion() {
    return '0.0.2-SNAPSHOT';
};

const _root = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

function isExternalLib(module, check = /node_modules/) {
    const req = module.userRequest;
    if (typeof req !== 'string') {
        return false;
    }
    return req.search(check) >= 0;
}

```
webpack文件夹下创建webpack.common.js文件，用于存储公共的webpack配置。
```
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
        // 复制静态资源
        new CopyWebpackPlugin([
            // { from: './src/app/content/', to: 'content' },
            // { from: './src/app/favicon.ico', to: 'favicon.ico' },
            { from: './src/app/manifest.app', to: 'manifest.app' }
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

```
webpack文件夹下创建webpack.dev.js，配置开发环境的webpack:
```
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
        // 配置全局变量
        new webpack.DefinePlugin({
            'process.env': {
				// API_GATEWAY:`'http://192.168.0.56:8589'`,
            },
        }),
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
```

配置好后就可以angular之旅了。
项目结构：
```
├.gitignore
├package.json
├package-lock.json
├readme.md
├tsconfig.json
├<src>
│  ├manifest.app
│  ├<app>
│  │  ├app.component.html
│  │  ├app.component.ts
│  │  ├app.constants.ts
│  │  ├app.main.ts
│  │  ├app.module.ts
│  │  ├app.routes.ts
│  │  ├index.html
│  │  ├polyfills.ts
│  │  ├vendor.ts
│  │  ├<config>
│  │  │  └prod.config.ts
├<text>
│  ├packageJson.md
│  ├tsconfig.md
│  └webpack.md
├<webpack>
│  ├utils.js
│  ├webpack.common.js
│  └webpack.dev.js
```