module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },

  plugins: [
    'react'
  ],

  extends: [
    'plugin:react/recommended'
  ]
};
