const tag = require('leanTag');

require('./prism');

document.head.appendChild(tag('link', {
  href: 'prism.css',
  rel: 'stylesheet'
}));
