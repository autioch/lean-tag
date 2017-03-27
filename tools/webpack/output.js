const CleanWebpackPlugin = require('clean-webpack-plugin');

/* Sets up output. */
module.exports = function output(webpackConfig, setup) {
  Object.assign(webpackConfig.output, {
    path: setup.buildFolder,
    filename: `${setup.assets}[name]${setup.nameSuffix}.js`,
    publicPath: '/',
    chunkFilename: `${setup.assets}[name]${setup.nameSuffix}.js`
  });

  /* Remove previous results of the build. */
  webpackConfig.plugins.push(new CleanWebpackPlugin([setup.buildFolder], {
    root: setup.projectPath,
    verbose: false,
    dry: false,
    exclude: ['data']
  }));
};
