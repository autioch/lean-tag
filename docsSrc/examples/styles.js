require('utils/renderStyles')([{
  selector: '.examples',
  properties: {
    display: 'table',

    // 'table-layout': 'fixed',
    width: 'calc(100% - 1em)',
    'border-collapse': 'collapse'
  }
}, {
  selector: '.example-list__header',
  properties: {
    display: 'table-row',
    'align-items': 'center',
    'justify-content': 'space-around'
  }
}, {
  selector: '.example-list__header-column',
  properties: {
    'text-align': 'center',
    padding: '.25em .5em',
    border: 'solid 1px #ddd',
    display: 'table-cell'
  }
}]);
