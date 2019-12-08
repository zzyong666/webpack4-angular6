### Package.json解读
官网：https://docs.npmjs.com/files/package.json
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
    "dom-to-image": "^2.6.0",
    "echarts": "^4.2.1",
    "hammerjs": "^2.0.8",
    "html2canvas": "^1.0.0-rc.3",
    "jquery": "^3.3.1",
    "js-sha256": "^0.9.0",
    "mat-video": "^2.7.2",
    "moment": "2.22.2",
    "ng-zorro-antd": "^7.1.0",
    "ngx-echarts": "^4.1.1",
    "ngx-malihu-scrollbar": "^7.0.0",
    "ngx-webstorage": "2.0.1",
    "ol": "^5.3.1",
    "ol-ext": "^3.1.2",
    "pace": "https://github.com/HubSpot/pace/tarball/v1.0.2",
    "pixi-filters": "^2.7.1",
    "pixi.js": "^4.8.6",
    "popper.js": "^1.14.4",
    "reflect-metadata": "0.1.12",
    "rxjs": "6.1.0",
    "tslib": "1.9.3",
    "zone.js": "0.8.26"
  },
  "devDependencies": {
    "@angular/cli": "6.1.2",
    "@angular/compiler-cli": "6.1.0",
    "@ngtools/webpack": "6.0.0",
    "@types/chai": "4.1.4",
    "@types/chai-string": "1.4.1",
    "@types/echarts": "^4.1.9",
    "@types/jest": "22.2.3",
    "@types/mocha": "5.2.5",
    "@types/node": "9.4.7",
    "@types/selenium-webdriver": "3.0.8",
    "angular-router-loader": "0.8.5",
    "angular2-template-loader": "0.6.2",
    "browser-sync": "2.24.6",
    "browser-sync-webpack-plugin": "2.2.2",
    "cache-loader": "1.2.2",
    "chai": "4.1.2",
    "chai-as-promised": "7.1.1",
    "chai-string": "1.5.0",
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
    "mocha": "5.2.0",
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
字段解析：
- name：包名。
- version： 包的版本号。
- description： 包的描述。
- private：若为true，则npm不会发布它（即私有）。
- license：为包指定一个许可（如你不希望以任何条款授权他人使用私隐或未公布的套件，则设置为UNLICENSED。
- cacheDirectories：缓存目录（package官方没有找到这个属性）。
- dependencies：依赖项（在所有环境都会用到的依赖）。
- devDependencies：依赖项（在开发环境才会用到的依赖）。
	- dependencies和devDependencies区别：
		- 运行`npm install`时，会下载dependencies和devDependencies中的模块，当使用`npm install --production`或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。
		- 运行`npm install 单个模块`时，默认情况下，npm install会将任何指定的包保存到dependencies项中。运行`npm install --production`或者注明NODE_ENV变量值为production时，也会将这些模块自动安装到node_modules中。
		- 运行`npm install 单个模块 --save-dev`时，保存在package.json中devDependencies字段下，安装开发环境依赖的模块，即项目开发时的模块，例如babel（转码器，可以将ES6代码转为ES5代码）等一些工具，只需在开发环境时用到。此时运行`npm install`，会将这些模块自动安装到node_modules中，但运行`npm install --production`或者注明NODE_ENV变量值为production时，不会将这些模块自动安装到node_modules中。
- engines：指定工作环境的版本，如node、npm等。如果不指定版本(或者指定“*”作为版本)，则任何版本的node都可以。
- lint-staged：在提交代码时对暂存区代码格式和提交信息做规范校验，确保代码格式统一。npm：https://www.npmjs.com/package/lint-staged
```
// 在 git 的待提交的文件中，在 src目录下的所有 ts,css,scss都要执行2条命令。
"lint-staged": {
    "src/**/*.{ts,css,scss}": [
      "prettier --write", // 使用代码格式化工具prettier来格式化代码，命令 --write就是执行命令改写文件，没有加入其他配置时使用默认配置，还可以自定义，如：`prettier --tab-width 4 --write`，使用4个空格缩进来格式化代码。
      "git add" // 将处理后的代码重新提交到暂存库中。
    ]
  }
    ```
- jestSonar：Jest的自定义结果处理器jest-sonar-reporter的配置（https://github.com/3dmind/jest-sonar-reporter）
	```
	"jestSonar": {
    "reportPath": "build/test-results/jest", // 指定放入报告的路径
    "reportFile": "TESTS-results-sonar.xml" // 指定报告的文件名。
  }
	```
- scripts：包含包的生命周期中不同时间运行的脚本命令的字典。
	- `"prettier:format": "prettier --write \"src/**/*.{ts,css,scss}\""`:
	- `"lint": "tslint --project tsconfig.json -e 'node_modules/**'"`：创建lint命令，执行tslint, --project指向tsconfig.json的位置， -e（-exclude）检查需要排除的文件或文件夹。
	- `"lint:fix": "npm run lint -- --fix"`：执行lint命令，并加上配置 --fix：修复了选择规则的linting错误。 -- ：用于在npm命令和参数之间，代表之后运行命令行参数。
	- `"ngc": "ngc -p tsconfig-aot.json"`：执行AOT模式（构建时编译，预编译）的tsconfig配置。
	- `"cleanup": "rimraf build/{aot,www}"`：运行rimraf包（包含rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除）。
	- `"e2e": "protractor src/test/javascript/protractor.conf.js"`：运行angualr的端到端的测试框架，指向对应配置文件
	- `"test": "jest --coverage --logHeapUsage -w=2 --config src/test/javascript/jest.conf.js"`：运行jest。--coverage：应在输出中收集和报告测试覆盖率信息。--logHeapUsage：记录每次测试后的堆使用情况，用于调试内存泄漏。-w=2：即--maxWorkers=2，指定工作程序池为运行测试生成的工作程序的最大数目，用于优化测试占用的资源。 --config 配置文件路径：指定配置文件。（https://jestjs.io/docs/en/cli）
	- `"test:watch": "npm test -- --watch --clearCache"`：运行test并运行，--watch：查看文件中的更改，并重新运行与更改的文件相关的测试。--clearCache：删除Jest缓存目录，然后在不运行测试的情况下退出。（https://jestjs.io/docs/en/cli）。
	- `"webpack:dev": "npm run webpack-dev-server -- --config webpack/webpack.dev.js --inline --hot --port=4051 --open --watch-content-base --env.stats=minimal"`：运行webpack-dev-server（一个小型的Node.js Express服务器，它使用webpack-dev-middleware来伺服于webpack的资源包，用于开发）。 --config 文件路径：指向webpack配置文件。 --inline：内联模式，在包中插入一个脚本来处理实时的重新加载，构建消息将出现在浏览器控制台中。 --hot：热更新。  --port：需要监听的端口号。 --open：告诉dev-server在服务器启动后打开浏览器，设置为true打开默认浏览器。  --watch-content-base：文件改变将触发整个页面的重载。 --env.stats=minimal：设置环境变量，minimal：仅在发生错误或新编译时控制台输出。normal：标准输出。--profile ：捕获编译的每个步骤的时间信息，并将其包含在输出中。--progress ：输出运行进度到控制台。（官网：https://www.webpackjs.com/configuration/dev-server）
	- `"webpack-dev-server": "node --max_old_space_size=4096 node_modules/webpack-dev-server/bin/webpack-dev-server.js"`：使用node命令运行webpack-dev-server.js，并配置运行内存为4096（即4G）。因为angular项目编译的时候CPU和内存需求会变大，需要内存2-3G，node本身（或V8）默认配置运行内存最大512M（32~bit）或1GB（64~bit），故使用--max_old_space_size来设置。

- 依赖项说明
	-  @angular/compiler - Angular的模板编译器。 它会理解模板，并且把模板转化成代码，以供应用程序运行和渲染。 开发人员通常不会直接跟这个编译器打交道，而是通过platform-browser-dynamic或离线模板编译器间接使用它。
  - @angular/platform-browser - 与DOM和浏览器相关的每样东西，特别是帮助往DOM中渲染的那部分。 这个包还包含bootstrapStatic方法，用来引导那些在产品构建时需要离线预编译模板的应用程序
  - @angular/platform-browser-dynamic - 为应用程序提供一些提供商和bootstrap方法，以便在客户端编译模板。不要用于离线编译。 我们使用这个包在开发期间引导应用，以及引导plunker中的范例。
  - core-js - 为全局上下文(window)打的补丁，提供了ES2015(ES6)的很多基础特性。 我们也可以把它换成提供了相同内核API的其它填充库。 一旦所有的“主流浏览器”都实现了这些API，这个依赖就可以去掉了。
  - reflect-metadata - 一个由Angular和TypeScript编译器共享的依赖包。
