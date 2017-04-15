const tag = require('leanTag');

function markup(content, type = 'markup') {
  return tag(tag('pre.language-markup', tag(`code.language-${type}`, content)));
}

module.exports = function renderExample({ description, source, resultHTML, expects, isValid, result, duration }) {
  return tag('section.example-item', [
    tag('div.example-item__description', description),
    markup(source, 'javascript'),
    markup(resultHTML),
    markup(expects),
    tag(`.example-item__validation.is-${isValid ? 'valid' : 'invalid'}`, isValid ? 'OK' : 'BAD'),
    tag('div.example-item__result', result),
    tag('div.example-item__performance', duration)
  ]);
};
