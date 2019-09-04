## 搭建项目模板框架

### EsLint

```
npm install --save-dev eslint eslint-loader eslint-plugin-vue babel-eslint eslint-friendly-formatter eslint-plugin-html
npm install --save-dev eslint-plugin-prettier eslint-config-prettier prettier-eslint-cli

```
#### 自定义规则

```
eslint-config-cl.js

module.exports = {
  extends: "eslint:recommended", //继承于谁
  env: {//环境
    browser: true,
    es6: true,
    node: true
  },
  rules: {//规则
    "no-console": "off",
    indent: ["error", 2],
    quotes: ["warn", "double"]
  }
};

```
### [stylelint](https://stylelint.io/user-guide/rules/)

```
npm install -D stylelint stylelint-webpack-plugin
```
stylelint-webpack-plugin 是 stylelint 的 Webpack 的插件，用来在编译之前对源代码中的 css 代码进行检查。

#### 自定义规则
[推荐的规则](https://github.com/stylelint/stylelint-config-standard)
```
npm install stylelint-config-standard --save-dev
```
```
style-config-cl.js

module.exports = {
  extends: "stylelint-config-standard"
  rules: {
    "color-no-invalid-hex": true,
    "color-hex-case": "lower",
    "unit-whitelist": ["em", "rem", "%", "s", "px"]
  }
};
```


## 设置 VScode ESLint 扩展
```
// 让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  //使用单引号
  "prettier.singleQuote": true,
  //结尾不加分号
  "prettier.semi": false,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  //配置 ESLint 检查的文件类型
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  //根据文件后缀名定义vue文件类型
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.vue": "vue"
  },
  "eslint.run": "onSave",
  //保存时eslint自动修复错误
  "eslint.autoFixOnSave": true,
  "extensions.ignoreRecommendations": true,
  //保存自动格式化
  "editor.formatOnSave": true,
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,

  // 使用单引号替代双引号
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",

  // 代码美化选择
  // "vetur.format.defaultFormatter.html": "js-beautify-html",

  // 让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
```
## 参考文章
[https://juejin.im/post/5be237e36fb9a049fa0f3b6d](https://juejin.im/post/5be237e36fb9a049fa0f3b6d)
[https://ask.dcloud.net.cn/article/36067](https://ask.dcloud.net.cn/article/36067)
可以使用 prettier-vscode + eslint 
[https://juejin.im/post/5be5429de51d4511a808f4ac](https://juejin.im/post/5be5429de51d4511a808f4ac)
[prettier-vscode](https://github.com/prettier/prettier-vscode)