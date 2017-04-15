const tag = require('leanTag');

const columns = [
  'Description',
  'Source',
  'HTML result',
  'Expected HTML',
  'OK',
  'Result',
  'Performance'
];

function headerColumn(columnName) {
  return tag('section.example-list__header-column', columnName);
}

module.exports = function header() {
  return tag('header.example-list__header', columns.map(headerColumn));
};
