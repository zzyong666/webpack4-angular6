### tsconfig.json
官网：http://www.typescriptlang.org/docs/handbook/tsconfig-json.html
如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录。tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项。
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
- compilerOptions：编译配置，可以被忽略，这时编译器会使用默认值。（http://www.typescriptlang.org/docs/handbook/compiler-options.html）
	- target：指定ECMAScript目标版本。
	- module：指定模块代码生成器。
	- moduleResolution：确定如何解析模块。
	- sourceMap：把ts文件变异成js文件时，是否生成对应的SourceMap文件。
	- emitDecoratorMetadata：让TypeScript支持为带有装饰器的声明生成元数据。
	- experimentalDecorators：启用对ES装饰器的实验性支持。
	- removeComments：删除除以/*开头的右标题注释外的所有注释。
	- noImplicitAny：当为true 并且TypeScript编译器无法推断出类型时，它仍然会生成JavaScript文件。 但是它也会报告一个错误。
	- skipLibCheck：跳过所有声明文件的类型检查(*.d.ts)。
	- suppressImplicitAnyIndexErrors：用于索引缺少索引签名的对象。
	- downlevelIteration：当目标为ES5或者ES3时，提供for..of、解构的全部支持。
	- outDir：将输出结构重定向到目录。
	- lib：要包含在编译中的库文件列表。
	- typeRoots：包含类型定义的文件夹列表。
	- baseUrl：用于解析非相对模块名称的基本目录。
	- paths：模块路径映射项列表。
	- importHelpers：从tslib导入emit帮助程序。
	- allowJs：允许编译JavaScript文件。
- "include"和"exclude"属性指定一个文件glob匹配模式列表