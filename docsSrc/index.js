const { renderStyles } = require('utils');
const examples = require('./examples');
const testCases = require('../tests/testCases');
const itemParse = require('./examples/item/parse');

require('./styles');
require('./prism');

renderStyles.flush();

document.body.appendChild(examples(testCases.map(itemParse)));
