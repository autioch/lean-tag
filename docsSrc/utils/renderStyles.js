const tag = require('leanTag');

const container = document.head;

function getParser(properties) {
  return function parseProperty(key) {
    return `${key}: ${properties[key]}`;
  };
}

function parseRule({ selector, properties }) {
  const parser = getParser(properties);
  const parsedProperties = Object.keys(properties).map(parser);

  return `${selector} {\n\t${parsedProperties.join(';\n\t')};\n}`;
}

function contextFactory() {
  let rulesList = [];

  function enququeStyles(rules) {
    rulesList = rulesList.concat(rules);
  }

  function flush() {
    container.appendChild(tag('style', rulesList.map(parseRule)));
    rulesList = [];
  }

  enququeStyles.flush = flush;

  return enququeStyles;
}

module.exports = contextFactory();
module.exports.context = contextFactory;
