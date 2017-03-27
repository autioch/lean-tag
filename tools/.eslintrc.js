module.exports = {
  extends: 'qb',
  root: true,
  // env: {
  //   node: true
  // },
  rules: {
    'no-console': ['off'],
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
  }
};
