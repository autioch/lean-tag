/* Configures config for production. */
module.exports = function development(webpackConfig, setup) {
  /* Adds sourcemaps for js.*/
  webpackConfig.devtool = '#eval';

  /* Runs livereload. */
  if (setup.isWatch) {
    const LiveReloadPlugin = require('webpack-livereload-plugin');

    webpackConfig.plugins.push(new LiveReloadPlugin({
      appendScriptTag: true,
      ignore: /.(js|config|ico|woff)$/
    }));
  }
};
