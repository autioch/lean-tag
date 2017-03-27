const webpack = require('webpack');

/* Configures config for production. */
module.exports = function production(webpackConfig) {
  /* For production builds, compress the js and css output. */
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));

  /* Local files should not be included in production build. */
  webpackConfig.module.loaders.unshift({
    test: /\.local\.js$/i,
    loader: 'ignore'
  });
};
