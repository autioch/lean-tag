# Lean Tag

Utility script for creating HTMLElements.

## Example usage
```javascript
import tag from 'lean-tag';

const divEl = tag('div.custom-class', 'text content');

document.body.appendChild(divEl);

const ul = tag('ul', ['1', '2', '3'].map((text) => tag('li', text)));

//<ul><li>1</li><li>2</li><li>3</li></ul>
console.log(ul.outerHTML);
```

For more examples, see the docs page.

## Parameters

Function accepts any number of parameters, that usually are strings, nodes, arrays or objects. All other parameters are converted to string.

### First param as a string
If first parameter is a string, it is treated as a description of tagName and classes. _No ids are supported in that string._

That first param is split by a _dot_, then first element of resulting array is treated as a tagName. If it's an empty string, `div` is created.

```javascript
const div = tag('.class-name');
const section = tag('section');
const h1 = tag('h1.class-name');
const div = tag();
```

### Array
If parameter is an array, it can contain nodes, text, or anything else that will be converted to text node.

### Object
If parameter is an object, its keys will be attribute/property/event names assigned to the element, and corresponding values will be the values or event handlers.

### Node
If parameter is a Node, it will be appended as a child.

### String, Number, Date, anything else
Anything else than previous options will be converted to a TextNode.
