module.exports = {
  rules: {
    'array-bracket-newline': ['off', {
      'multiline': true,
      'minItems': 3
    }],
    'array-element-newline': ['off', {
      'multiline': true,
      'minItems': 3
    }],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': 'error',
    'capitalized-comments': ['off', 'never', {
      'line': {
        'ignorePattern': '.*',
        'ignoreInlineComments': true,
        'ignoreConsecutiveComments': true
      },
      'block': {
        'ignorePattern': '.*',
        'ignoreInlineComments': true,
        'ignoreConsecutiveComments': true
      }
    }],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['off', 'always', {
      'includeCommonJSModuleExports': false
    }],
    'func-names': 'off',
    'func-style': ['off', 'expression'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': ['error', 4, {
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'outerIIFEBody': 1,
      'FunctionDeclaration': {
        'parameters': 1,
        'body': 1
      },
      'FunctionExpression': {
        'parameters': 1,
        'body': 1
      }
    }],
    'jsx-quotes': ['off', 'prefer-double'],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': ['error', {
      'before': true,
      'after': true,
      'overrides': {
        'return': { 'after': true },
        'throw': { 'after': true },
        'case': { 'after': true }
      }
    }],
    'line-comment-position': ['off', {
      'position': 'above',
      'ignorePattern': '',
      'applyDefaultPatterns': true
    }],
    'linebreak-style': ['warn', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', {
      'before': 'always',
      'after': 'always'
    }],
    'max-depth': ['off', 4],
    'max-len': 'off',
    'max-lines': ['off', {
      'max': 300,
      'skipBlankLines': true,
      'skipComments': true
    }],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': ['off', {
      'max': 1
    }],
    'multiline-ternary': ['off', 'never'],
    'new-cap': ['error', {
      'newIsCap': true,
      'newIsCapExceptions': [],
      'capIsNew': false,
      'capIsNewExceptions': [
        'Immutable.Map',
        'Immutable.Set',
        'Immutable.List'
      ]
    }],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'warn',
    'no-mixed-operators': ['error', {
      'groups': [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      'allowSamePrecedence': true
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error',
      {
        'selector': 'ForInStatement',
        'message': 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys, values, entries }, and iterate over the resulting array.'
      }, {
        'selector': 'ForOfStatement',
        'message': 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them.Separately, loops should be avoided in favor of array iterations.'
      },
      {
        'selector': 'LabeledStatement',
        'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        'selector': 'WithStatement',
        'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-spaced-func': 'error',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true,
      'ignoreComments': true
    }],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', {
      'defaultAssignment': false
    }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['off', {
      'ObjectExpression': {
        'minProperties': 3,
        'multiline': true,
        'consistent': true
      },
      'ObjectPattern': {
        'minProperties': 3,
        'multiline': true,
        'consistent': true
      }
    }],
    'object-property-newline': ['error', {
      'allowMultiplePropertiesPerLine': true
    }],
    'one-var': 'off',
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'off',
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': 'off',
    'quote-props': ['warn', 'as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': false
    }],
    'quotes': ['error', 'single', {
      'avoidEscape': true
    }],
    'require-jsdoc': 'off',
    'semi': 'off',
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'semi-style': ['off', 'last'],
    'sort-keys': ['off', 'asc', {
      'caseSensitive': false,
      'natural': true
    }],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false,
      'overrides': {}
    }],
    'spaced-comment': 'off',
    'switch-colon-spacing': ['off', {
      'after': true,
      'before': false
    }],
    'template-tag-spacing': ['off', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off'
  }
}
