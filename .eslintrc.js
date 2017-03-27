module.exports = {
  extends: 'qb',
  rules: {
    'callback-return': ['off'],
    'no-undefined': ['off']
  }
  // rules: {
  //   'id-blacklist': ['off'],
  //   'no-empty-function': ['off'],
  //   'no-use-before-define': ['error', {
  //     'functions': false,
  //     'variables': true,
  //     'classes': true
  //   }],
  //   'no-unused-vars': ['error', {
  //     'vars': 'all',
  //     'args': 'after-used',
  //     'ignoreRestSiblings': false
  //   }],
  //   'no-undefined': ['off'],
  //   'object-curly-newline': ['error', {
  //     ObjectExpression: { minProperties: 2 },
  //     ObjectPattern: { 'multiline': true }
  //   }],
  //   'no-magic-numbers': ['error', {
  //     detectObjects: false,
  //     enforceConst: true,
  //     ignore: [-1, 0, 1, 10],
  //     ignoreArrayIndexes: false
  //   }]
  // }
};
