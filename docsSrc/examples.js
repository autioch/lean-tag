const tag = require('../index');

module.exports = [{
  label: 'No params',
  params: []
}, {
  label: 'Tagname',
  params: ['article']
}, {
  label: 'Empty string as the only parameter',
  params: ['']
}, {
  label: 'Number as the only parameter',
  params: [1]
}, {
  label: 'undefined as the only parameter',
  params: [undefined]
}, {
  label: 'Tagname with class',
  params: ['article.block']
}, {
  label: 'Tagname with text inside',
  params: ['article', 'Lorem ipsum...']
}, {
  label: 'Text only',
  params: ['', 'Lorem ipsum...']
}, {
  label: 'Array of texts',
  params: [ ['Lorem', 'ipsum', '...'] ]
}, {
  label: 'Another tag as param',
  params: [tag('p', 'Lorem ipsum...')]
}, {
  label: 'Mixed array of params',
  params: [tag('p', 'Lorem ipsum...'), 'Another lorem ipsum...']
}, {
  label: 'Properties',
  params: ['input', {
    value: 'test',
    placeholder: 'placeholder',
    type: 'text'
  }]
}, {
  label: 'Properties and attributes',
  params: ['input', {
    attrs: {
      disabled: 'disabled'
    },
    placeholder: 'placeholder',
    type: 'text'
  }]
}, {
  label: 'Events',
  params: ['button', {
    style: 'border-radius:.5em',
    onclick: () => alert('event!')
  }, 'label']
}];
