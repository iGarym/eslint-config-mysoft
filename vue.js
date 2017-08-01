module.exports = {
  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },

  plugins: [
    'vue'
  ],

  extends: [
    'plugin:vue/recommended'
  ],

  rules: {
    'vue/html-end-tags': 'error',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand']
  }
}
