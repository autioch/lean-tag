require('utils/renderStyles')([{
  selector: '.example-item',
  properties: {
    display: 'table-row'
  }
}, {
  selector: '.example-item > div',
  properties: {
    display: 'table-cell',
    border: 'solid 1px #ddd'
  }
}, {
  selector: '.example-item pre',
  properties: {
    margin: 0,
    background: 'transparent !important'
  }
}, {
  selector: '.example-item__validation',
  properties: {
    'text-align': 'center'
  }
}, {
  selector: '.is-valid',
  properties: {
    background: '#efe !important'
  }
}, {
  selector: '.is-invalid',
  properties: {
    background: '#fee !important'
  }
}, {
  selector: '.example-item__description',
  properties: {
    padding: '1em'
  }
}, {
  selector: '.example-item__performance',
  properties: {
    'text-align': 'right',
    padding: '1em'
  }
}, {
  selector: '.example-item__result',
  properties: {
    padding: '1em'
  }
}]);
