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
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
};
