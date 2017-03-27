module.exports = function getDescription(params) {
  return params.map((param) => {
    if (Array.isArray(param)) {
      return `[${getDescription(param)}]`;
    }
    if (param instanceof Node) {
      const tagName = param.tagName.toLowerCase();
      const otherParams = !!param.childNodes.length;

      return `tag(${tagName}${otherParams ? ', <other params>' : ''})`;
    }
    if (typeof param === 'object') {
      return JSON.stringify(param, (key, val) => {
        if (typeof val === 'function') {
          return String(val);
        }

        return val;
      }, '  ');
    }
    if (param === undefined) {
      return 'undefined';
    }

    return `'${param}'`;
  }).join(', ');
};
