const examples = require('./examples');
const renderExample = require('./renderExample');
const createStyles = require('./createStyles');
const tag = require('../index');

const container = document.body;

createStyles();

container.appendChild(tag('pre.example__code', [
  '// ES5 require',
  '\n',
  'var tag = require(\'lean-tag\');'
]));
container.appendChild(tag('pre.example__code', [
  '// ES6 require',
  '\n',
  'const h = require(\'lean-tag\');'
]));
container.appendChild(tag('pre.example__code', [
  '// ES6 import',
  '\n',
  'import dom from \'lean-tag\';'
]));

examples
  .map(renderExample)
  .forEach((example) => container.appendChild(example));
