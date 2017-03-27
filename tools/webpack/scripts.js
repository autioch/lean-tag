/* Sets up entry files. */
module.exports = function input(webpackConfig) {
  webpackConfig.module.loaders.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      cacheDirectory: true,
      presets: [ ['es2015', {
        loose: true
      }] ]
    }
  });
};
