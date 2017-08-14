module.exports = {
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'warn',
    'complexity': ['off', 11],
    'class-methods-use-this': 'off',
    'consistent-return': 'error',
    'curly': ['warn', 'multi-line'],
    'default-case': ['error', {
      'commentPattern': '^no default$'
    }],
    'dot-notation': ['error', {
      'allowKeywords': true
    }],
    'dot-location': ['error', 'property'],
    'eqeqeq': ['warn', 'always'],
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'warn',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'warn',
    'no-global-assign': ['error', {
      'exceptions': []
    }],
    'no-native-reassign': 'off',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': ['error', {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'warn',
    'no-magic-numbers': ['off', {
      'ignore': [],
      'ignoreArrayIndexes': true,
      'enforceConst': true,
      'detectObjects': false
    }],
    'no-multi-spaces': 'off',
    'no-multi-str': 'warn',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': ['error', {
      'object': 'arguments',
      'property': 'callee',
      'message': 'arguments.callee is deprecated'
    }, {
        'property': '__defineGetter__',
        'message': 'Please use Object.defineProperty instead.'
      }, {
        'property': '__defineSetter__',
        'message': 'Please use Object.defineProperty instead.'
      }, {
        'object': 'Math',
        'property': 'pow',
        'message': 'Use the exponentiation operator (**) instead.'
      }],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-concat': 'error',
    'no-useless-escape': 'warn',
    'no-useless-return': 'error',
    'no-void': 'warn',
    'no-warning-comments': ['off', {
      'terms': ['todo', 'fixme', 'xxx'],
      'location': 'start'
    }],
    'no-with': 'error',
    'prefer-promise-reject-errors': ['off', {
      'allowEmptyReject': true
    }],
    'radix': 'error',
    'require-await': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error',
      'outside', {
        'functionPrototypeMethods': false
      }],
    'yoda': 'warn'
  }
};
