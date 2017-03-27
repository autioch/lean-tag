const tag = require('../index');
const getDescription = require('./getDescription');

module.exports = function renderExample({ label, params, desc = getDescription(params) }) {
  const result = tag(...params);

  return tag('section.example', [
    tag('h4.example__header', label),
    tag('pre.example__code', `tag(${desc})`, {
      title: 'Code'
    }),
    tag('div.example__result', result),
    tag('pre.example__html', result.outerHTML, {
      title: 'Resulting HTML'
    })
  ]);
};
