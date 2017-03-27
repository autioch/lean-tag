const tag = require('../src/index');

const container = document.head;

const rules = [{
  selector: 'html',
  properties: {
    'font-family': 'Verdana',
    'font-size': '12px'
  }
}, {
  selector: '.example',
  properties: {
    'margin-bottom': '3em'
  }
}, {
  selector: '.example__code',
  properties: {
    border: 'solid 1px #eee',
    background: '#f8f8f8',
    'font-family': 'Courier',
    padding: '.5em'
  }
}, {
  selector: '.example__result',
  properties: {
    border: 'solid 1px #eee',
    background: '#f8f8f8',
    padding: '.5em'
  }
}, {
  selector: '.example__html',
  properties: {
    border: 'solid 1px #eee',
    background: '#f8f8f8',
    padding: '.5em'
  }
}, {
  selector: '.example__header',
  properties: {
    'letter-spacing': '1px'
  }
}];

function ruleToString({ selector, properties }) {
  const props = Object.keys(properties).sort().map((key) => `${key}: ${properties[key]}`).join(';\n\t');

  return `${selector} {\n\t${props};\n}`;
}

module.exports = function createStyles() {
  const styleElement = tag('style', rules.map(ruleToString));

  container.appendChild(styleElement);
};
