const ON = 2;
const importantRegex = /(.*)\W+!important\W*$/;

function forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index]);
  }
}

function forOwn(object, callback) {
  const keys = Object.keys(object);

  for (let index = 0; index < keys.length; index++) {
    callback(object[keys[index]], keys[index]);
  }
}

function isNode(option) {
  return option && ((option.nodeName && option.nodeType) || option instanceof Text);
}

function contextFactory() {
  const cleanupFuncs = [];

  function leanTag(tagAndClassName, ...options) {
    let el;

    if (typeof tagAndClassName === 'string') {
      const [tagName, ...classNames] = tagAndClassName.split('.');

      el = document.createElement(tagName === '' ? 'div' : tagName);

      if (classNames.length) {
        el.className = classNames.join(' ');
      }
    } else {
      el = document.createElement('div');
      if (tagAndClassName !== undefined) {
        options.unshift(tagAndClassName);
      }
    }

    forEach(options, (option) => {
      if (Array.isArray(option)) {
        forEach(option, (value) => el.appendChild(isNode(value) ? value : document.createTextNode(value)));
      } else if (isNode(option)) {
        el.appendChild(option);
      } else if ((option !== null) && (typeof option === 'object')) {
        forOwn(option, (value, key) => {
          if (typeof value === 'function') {
            el.addEventListener(key.substring(ON), value, false);
            cleanupFuncs.push(() => el.removeEventListener(key.substring(ON), value, false));
          } else if (key === 'style') {
            if (typeof value === 'string') {
              el.style.cssText = value;
            } else {
              forOwn(value, (styleValue, styleName) => {
                const match = styleValue.match(importantRegex);

                if (match) {
                  el.style.setProperty(styleName, match[1], 'important');
                } else {
                  el.style.setProperty(styleName, styleValue);
                }
              });
            }
          } else if (key === 'attrs') {
            forOwn(value, (attrValue, attrName) => el.setAttribute(attrName, attrValue));
          } else {
            el[key] = value;
          }
        });
      } else {
        el.appendChild(document.createTextNode(option));
      }
    });

    return el;
  }

  leanTag.cleanup = function cleanup() {
    forEach(cleanupFuncs, (cleanupFunc) => cleanupFunc());
    cleanupFuncs.length = 0;
  };

  return leanTag;
}

module.exports = contextFactory();
module.exports.context = contextFactory;
