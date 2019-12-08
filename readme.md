### webpack4打包angular6+
##### 1、配置webpack
- 新建一个项目文件夹，创建package.json文件。
```
mkdir you-project-name
cd you-project-name
npm init
```
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
