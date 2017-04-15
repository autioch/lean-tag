/* eslint no-alert: 0 */
const tag = require('leanTag');

module.exports = [{
  description: 'No params',
  source: () => tag(),
  expects: '<div></div>'
}, {
  description: 'Empty string as the only parameter',
  source: () => tag(''),
  expects: '<div></div>'
}, {
  description: 'Tagname',
  source: () => tag('article'),
  expects: '<article></article>'
}, {
  description: 'Number as the only parameter',
  source: () => tag(1),
  expects: '<div>1</div>'
}, {
  description: 'undefined as the only parameter',
  source: () => tag(undefined),
  expects: '<div></div>'
}, {
  description: 'Tagname with class',
  source: () => tag('article.block'),
  expects: '<article class="block"></article>'
}, {
  description: 'Tagname with text inside',
  source: () => tag('article', 'Lorem ipsum...'),
  expects: '<article>Lorem ipsum...</article>'
}, {
  description: 'Text only',
  source: () => tag('', 'Lorem ipsum...'),
  expects: '<div>Lorem ipsum...</div>'
}, {
  description: 'Array of texts',
  source: () => tag(['Lorem', 'ipsum', '...']),
  expects: '<div>Loremipsum...</div>'
}, {
  description: 'Another tag as param',
  source: () => tag(tag('p', 'Lorem ipsum...')),
  expects: '<div><p>Lorem ipsum...</p></div>'
}, {
  description: 'Mixed array of params',
  source: () => tag(tag('p', 'Lorem ipsum...'), 'Another lorem ipsum...'),
  expects: '<div><p>Lorem ipsum...</p>Another lorem ipsum...</div>'
}, {
  description: 'Properties',
  source: () => tag('input', {
    value: 'test',
    placeholder: 'fill it',
    type: 'text'
  }),
  expects: '<input value="test" placeholder="fill it" type="text" />'
}, {
  description: 'Properties and attributes',
  source: () => tag('input', {
    attrs: {
      disabled: 'disabled'
    },
    placeholder: 'fill it',
    type: 'text'
  }),
  expects: '<input disabled="disabled" placeholder="fill it" type="text" />'
}, {
  description: 'Events',
  source: () => tag('button', {
    style: 'border-radius: 0.5em',
    onclick: () => alert('event!')
  }, 'description'),
  expects: '<button style="border-radius: 0.5em;" onclick="function(){alert(\'event!\')}">description</button>'
}];
