module.exports = {
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module"
  },

  "env": {
    "browser": true,
    "es6": true,
  },

  "plugins": [
    "import"
  ],

  "globals": {
    "document": true,
    "navigator": true,
    "window": true
  },

  "extends": [
    "airbnb-base",
    "plugin:vue/recommended"
  ],

  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "build/webpack.base.conf.js"
      }
    }
  },

  "rules": {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": "warn",
    "camelcase": "error",
    "no-var": "warn",
    "no-implicit-coercion": "off",
    "comma-dangle": "off",
    "no-mixed-operators": ["error", {
      "groups": [
        ["+", "-", "*", "/", "%", "**"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true
    }],
    "no-nested-ternary": "off",
    "no-script-url": "off",
    "max-len": "off",
    "no-bitwise": "off",
    "no-continue": "off",
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "semi": "off",
    "no-new": "off",
    "no-param-reassign": "off",
    "no-useless-escape": "warn",
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "off",
    "no-void": "warn",
    "newline-per-chained-call": "off",
    "spaced-comment": "off",
    "array-callback-return": "error",
    "block-scoped-var": "warn",
    "consistent-return": "error",
    "curly": ["warn", "multi-line"],
    "default-case": ["error", {
      "commentPattern": "^no default$"
    }],
    "dot-notation": ["error", {
      "allowKeywords": true
    }],
    "eqeqeq": ["warn", "always"],
    "guard-for-in": "error",
    "no-case-declarations": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-extend-native": "warn",
    "no-floating-decimal": "warn",
    "no-lone-blocks": "error",
    "no-loop-func": "warn",
    "no-multi-str": "warn",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-return-assign": ["error", "always"],
    "no-sequences": "error",
    "no-useless-concat": "error",
    "radix": "error",
    "vars-on-top": "error",
    "wrap-iife": ["error", "outside", {
      "functionPrototypeMethods": false
    }],
    "yoda": "warn",
    "no-cond-assign": ["error", "always"],
    "no-constant-condition": "warn",
    "no-dupe-args": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-extra-semi": "warn",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-irregular-whitespace": "warn",
    "no-prototype-builtins": "error",
    "no-unreachable": "error",
    "use-isnan": "error",
    "valid-typeof": ["error", {
      "requireStringLiterals": true
    }],
    "arrow-body-style": ["warn", "as-needed", {
      "requireReturnForObjectLiteral": false,
    }],
    "arrow-parens": ["error", "as-needed", {
      "requireForBlockBody": false,
    }],
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-dupe-class-members": "error",
    "no-this-before-super": "error",
    "no-useless-constructor": "error",
    "object-shorthand": ["error", "always", {
      "ignoreConstructors": false,
      "avoidQuotes": false,
    }],
    "prefer-arrow-callback": ["error", {
      "allowNamedFunctions": false,
      "allowUnboundThis": true,
    }],
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true,
    }],
    "prefer-spread": "warn",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true
    }],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "eol-last": ["error", "always"],
    "func-names": "off",
    "indent": ["error", 4, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      }
    }],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true,
      "overrides": {
        "return": {
          "after": true
        },
        "throw": {
          "after": true
        },
        "case": {
          "after": true
        }
      }
    }],
    "linebreak-style": ["warn", "unix"],
    "lines-around-directive": ["error", {
      "before": "always",
      "after": "always",
    }],
    "new-cap": ["error", {
      "newIsCap": true,
      "newIsCapExceptions": [],
      "capIsNew": false,
      "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    }],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-lonely-if": "warn",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": ["error"],
    "no-new-object": "error",
    "no-tabs": "error",
    "no-trailing-spaces": ["error", {
      "skipBlankLines": true,
      "ignoreComments": true
    }],
    "no-unneeded-ternary": ["error", {
      "defaultAssignment": false
    }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", {
      "allowMultiplePropertiesPerLine": true,
    }],
    "one-var": "off",
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "padded-blocks": ["warn", "never"],
    "quote-props": ["warn", "as-needed", {
      "keywords": false,
      "unnecessary": true,
      "numbers": false
    }],
    "quotes": ["error", "single", {
      "avoidEscape": true
    }],
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false,
      "overrides": {},
    }],
    "no-shadow": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": true
    }],
    "no-use-before-define": ["error", {
      "functions": true,
      "classes": true,
      "variables": true
    }],
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "global-require": "off",
    // import
    "import/extensions": ["error", "always", {
      "js": "never",
      "vue": "never",
      "jsx": "never",
    }],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-dynamic-require": "off",
    // Vue
    "vue/html-end-tags": "error",
    "vue/v-bind-style": ["error", "shorthand"],
    "vue/v-on-style": ["error", "shorthand"],
  }
}
