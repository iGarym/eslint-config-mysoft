module.exports = {
  extends: [
    './rules/best-practices',
    './rules/strict',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/vue',
  ].map(require.resolve),
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: false
    }
  }
};
