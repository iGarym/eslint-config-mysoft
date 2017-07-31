module.exports = {
  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  plugins: [
    'import'
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.vue'
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },

  rules: {
    'import/no-unresolved': ['error', {
      'commonjs': true,
      'caseSensitive': true
    }],
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*.{test,spec}.{js,jsx}',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
        '**/Gruntfile{,.js}',
        '**/protractor.conf.*.js'],
      'optionalDependencies': false
    }],
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/first': ['error', 'absolute-first'],
    'import/imports-first': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
      'jsx': 'never'
    }],
    'import/order': ['off', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never'
    }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-restricted-paths': 'off',
    'import/max-dependencies': ['off', {
      'max': 10
    }],
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-internal-modules': ['off', {
      'allow': []
    }],
    'import/unambiguous': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': ['off', {
      'allowArray': false,
      'allowArrowFunction': false,
      'allowAnonymousClass': false,
      'allowAnonymousFunction': false,
      'allowLiteral': false,
      'allowObject': false
    }]
  }
}
