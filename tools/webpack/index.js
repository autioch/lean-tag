// TODO https://www.npmjs.com/package/webpack-merge
const path = require('path');

const mixins = [
  require('./enviroment'),
  require('./input'),
  require('./output'),
  require('./scripts'),
  require('./templates'),

  // This should be after all other parts
  require('./validation')
];

module.exports = function configure(setup) {
  /* Plain object that will be used for extending validation schema. */
  const validationSchema = {};

  /* Base, "empty' config that will be extended by mixins. */
  const webpackConfig = {
    entry: {},
    output: {},
    resolve: {
      root: [path.join(setup.sourcePath)],
      extensions: ['', '.js'],
      alias: {}
    },
    module: {
      loaders: []
    },
    plugins: [],
    resolveLoader: {
      root: [],
      alias: {}
    },
    stats: {
      // Avoid "child extract-text-webpack-plugin" spam
      children: false,
      hash: false,
      version: false,
      colors: true
    }
  };

  /* Extends base config with mixins. */
  mixins.forEach((mixin) => mixin(webpackConfig, setup, validationSchema));

  /* Completed config. */
  return webpackConfig;
};
