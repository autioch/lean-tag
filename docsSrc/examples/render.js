const itemRender = require('./item');
const header = require('./header');
const tag = require('leanTag');

module.exports = function render(exampleList) {
  return tag('main.examples', header(), exampleList.map(itemRender));
};
