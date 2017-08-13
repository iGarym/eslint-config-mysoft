# eslint-config-mysoft

适用于明源云创前端团队的 ESLint 规则。包含了一些通用的规则，和针对 Vue、 React 项目的可选规则。

## 安装

```bash
npm install eslint-config-mysoft -D
# or
yarn add eslint-config-mysoft -D
```

## 使用

### 项目依赖

为了正常使用 ESLint，你需要为项目安装一些依赖

- 通用依赖
  - eslint
  - babel-eslint
  - eslint-plugin-import
- React 项目
  - eslint-plugin-react
- Vue 项目
  - eslint-plugin-vue>=3.5.1
- Webpack
  - eslint-loader
  - eslint-friendly-formatter
  - eslint-import-resolver-webpack
- Gulp
  - gulp-eslint

### 配置文件

在项目根目录下面添加配置文件 `.eslintrc.js`，基础配置如下：

```js
module.exports = {
  root: true,
  parserOptions: {},
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'mysoft'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        // webpack 的 resolve配置
        // 根据项目实际情况可能有所修改
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {}
}
```

针对 Vue 和 React 项目，需要增加对应的 extends 及解析器：

```diff
module.exports = {
  root: true,
+ parser: 'babel-eslint',    // React
  parserOptions: {
+   parser: 'babel-eslint',  // Vue
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'mysoft',
+   'mysoft/vue',       // Vue
+   'mysoft/react',     // React
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    },
+   // React
+   react: {
+     createClass: "createReactClass",
+     pragma: "React",
+     version: "15.0"
+   }
  },
  rules: {}
}
```

### 完整配置

```js
// Vue
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'mysoft',
    'mysoft/vue',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {}
}

// React
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {},
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'mysoft',
    'mysoft/react',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    },
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "15.0"
    }
  },
  rules: {}
}
```

## License

MIT. Copyright (c)
