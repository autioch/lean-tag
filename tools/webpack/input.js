const path = require('path');

/* Sets up entry files. */
module.exports = function input(webpackConfig, setup) {
  Object.assign(webpackConfig.entry, {
    main: path.join(setup.sourcePath, 'index')
  });
};
