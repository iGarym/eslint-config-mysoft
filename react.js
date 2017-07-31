module.export = {
  env: {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    'ecmaVersion': 8,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },

  plugins: [
    'react'
  ],

  extends: [
    'plugin:react/recommended'
  ]
};
